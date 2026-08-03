param(
  [Parameter(Mandatory = $true)]
  [string]$DesktopInput,

  [string]$MobileInput,

  [string]$DesktopOutput = ".\assets\sequences\desktop",
  [string]$MobileOutput = ".\assets\sequences\mobile",
  [int]$FrameCount = 48,
  [int]$DesktopWidth = 1920,
  [int]$DesktopHeight = 1080,
  [int]$MobileWidth = 720,
  [int]$MobileHeight = 1280,
  [int]$DesktopQuality = 68,
  [int]$MobileQuality = 62
)

$ffmpeg = Get-Command ffmpeg -ErrorAction SilentlyContinue
$ffprobe = Get-Command ffprobe -ErrorAction SilentlyContinue

if (-not $ffmpeg -or -not $ffprobe) {
  throw "ffmpeg and ffprobe must be available in PATH."
}

if ($FrameCount -lt 2) {
  throw "FrameCount must be at least 2."
}

if ($DesktopQuality -lt 1 -or $DesktopQuality -gt 100 -or $MobileQuality -lt 1 -or $MobileQuality -gt 100) {
  throw "DesktopQuality and MobileQuality must be between 1 and 100."
}

function Export-ResponsiveSequence {
  param(
    [string]$InputPath,
    [string]$OutputDir,
    [int]$Width,
    [int]$Height,
    [int]$ExportQuality
  )

  $resolvedInput = Resolve-Path -LiteralPath $InputPath -ErrorAction Stop

  if (-not (Test-Path -LiteralPath $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir | Out-Null
  }

  $resolvedOutput = (Resolve-Path -LiteralPath $OutputDir -ErrorAction Stop).Path
  Get-ChildItem -LiteralPath $resolvedOutput -Filter "frame-*.webp" -File -ErrorAction SilentlyContinue |
    Remove-Item -Force

  $durationText = & $ffprobe.Source `
    -v error `
    -show_entries format=duration `
    -of default=noprint_wrappers=1:nokey=1 `
    $resolvedInput

  $duration = [double]::Parse(
    $durationText.Trim(),
    [System.Globalization.CultureInfo]::InvariantCulture
  )

  if ($duration -le 0) {
    throw "Could not determine a valid duration for $resolvedInput."
  }

  $fps = ($FrameCount / $duration).ToString(
    "0.########",
    [System.Globalization.CultureInfo]::InvariantCulture
  )
  $outputPattern = Join-Path $resolvedOutput "frame-%03d.webp"
  $filter = "fps=$fps,scale=${Width}:${Height}:flags=lanczos"

  & $ffmpeg.Source `
    -hide_banner `
    -loglevel error `
    -y `
    -i $resolvedInput `
    -an `
    -vf $filter `
    -frames:v $FrameCount `
    -c:v libwebp `
    -lossless 0 `
    -quality $ExportQuality `
    -compression_level 6 `
    -preset picture `
    $outputPattern

  if ($LASTEXITCODE -ne 0) {
    throw "ffmpeg failed for $resolvedInput with exit code $LASTEXITCODE."
  }

  $frames = Get-ChildItem -LiteralPath $resolvedOutput -Filter "frame-*.webp" -File
  if ($frames.Count -ne $FrameCount) {
    throw "Expected $FrameCount frames in $resolvedOutput but found $($frames.Count)."
  }

  [PSCustomObject]@{
    Output = $resolvedOutput
    Frames = $frames.Count
    TotalMB = [math]::Round((($frames | Measure-Object Length -Sum).Sum / 1MB), 2)
  }
}

$results = @(
  Export-ResponsiveSequence `
    -InputPath $DesktopInput `
    -OutputDir $DesktopOutput `
    -Width $DesktopWidth `
    -Height $DesktopHeight `
    -ExportQuality $DesktopQuality
)

if ($MobileInput) {
  $results += Export-ResponsiveSequence `
    -InputPath $MobileInput `
    -OutputDir $MobileOutput `
    -Width $MobileWidth `
    -Height $MobileHeight `
    -ExportQuality $MobileQuality
}

$results | Format-Table -AutoSize
