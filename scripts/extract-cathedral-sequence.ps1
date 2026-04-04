param(
  [string]$InputPath = ".\Flow - 04 Nis 14-36.mp4",
  [string]$OutputDir = ".\assets\sequences\cathedral",
  [int]$Fps = 12,
  [int]$Width = 1280,
  [int]$Quality = 3
)

$ffmpeg = Get-Command ffmpeg -ErrorAction SilentlyContinue
if (-not $ffmpeg) {
  throw "ffmpeg was not found in PATH."
}

$resolvedInput = Resolve-Path -LiteralPath $InputPath -ErrorAction Stop

if (-not (Test-Path -LiteralPath $OutputDir)) {
  New-Item -ItemType Directory -Path $OutputDir | Out-Null
}

Get-ChildItem -LiteralPath $OutputDir -Filter "frame-*.jpg" -ErrorAction SilentlyContinue |
  Remove-Item -Force

$resolvedOutputDir = Resolve-Path -LiteralPath $OutputDir
$outputPattern = Join-Path $resolvedOutputDir "frame-%03d.jpg"

$filter = "fps=$Fps,scale=${Width}:-2:flags=lanczos"

& $ffmpeg.Source -y `
  -i $resolvedInput `
  -vf $filter `
  -q:v $Quality `
  -start_number 1 `
  $outputPattern

if ($LASTEXITCODE -ne 0) {
  throw "ffmpeg failed with exit code $LASTEXITCODE."
}

$frameCount = (Get-ChildItem -LiteralPath $resolvedOutputDir -Filter "frame-*.jpg").Count
Write-Host "Extracted $frameCount frames to $resolvedOutputDir"
