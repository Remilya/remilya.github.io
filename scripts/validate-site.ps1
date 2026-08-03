[CmdletBinding()]
param()

$ErrorActionPreference = "Stop"
$siteRoot = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot "..")).Path

function Assert-SiteCondition {
  param(
    [Parameter(Mandatory)] [bool] $Condition,
    [Parameter(Mandatory)] [string] $Message
  )

  if (-not $Condition) {
    throw "Validation failed: $Message"
  }
}

function Get-RelativeSitePath {
  param([Parameter(Mandatory)] [string] $Path)
  $rootUri = [System.Uri]::new($siteRoot.TrimEnd("\") + "\")
  $pathUri = [System.Uri]::new($Path)
  return [System.Uri]::UnescapeDataString($rootUri.MakeRelativeUri($pathUri).ToString())
}

Push-Location $siteRoot
try {
  & node --check "main.js"
  Assert-SiteCondition ($LASTEXITCODE -eq 0) "main.js has a syntax error"

  $requiredFiles = @(
    "index.html",
    "styles.css",
    "main.js",
    "CNAME",
    "assets/favicon.svg",
    "assets/apple-touch-icon.png",
    "assets/remilya-social.jpg",
    "assets/deksmo-archive/raw.webp",
    "assets/deksmo-archive/translated.webp",
    "assets/deksmo-archive/colorized.webp",
    "assets/sequences/desktop/frame-001.webp",
    "assets/sequences/mobile/frame-001.webp"
  )

  foreach ($relativePath in $requiredFiles) {
    Assert-SiteCondition (Test-Path -LiteralPath $relativePath -PathType Leaf) "missing required file: $relativePath"
  }

  foreach ($variant in @("desktop", "mobile")) {
    $variantPath = Join-Path $siteRoot "assets/sequences/$variant"
    $frames = @(Get-ChildItem -LiteralPath $variantPath -Filter "frame-*.webp" -File)
    Assert-SiteCondition ($frames.Count -eq 48) "$variant sequence must contain exactly 48 WebP frames"

    $expectedNames = 1..48 | ForEach-Object { "frame-{0:D3}.webp" -f $_ }
    $actualNames = $frames.Name | Sort-Object
    Assert-SiteCondition (-not (Compare-Object $expectedNames $actualNames)) "$variant sequence frame names are incomplete or unexpected"

    $variantBytes = ($frames | Measure-Object -Property Length -Sum).Sum
    $variantBudget = if ($variant -eq "desktop") { 5MB } else { 2MB }
    Assert-SiteCondition ($variantBytes -le $variantBudget) "$variant sequence exceeds its production budget"
  }

  $sourceText = (Get-Content -LiteralPath "index.html" -Raw -Encoding utf8) + "`n" + (Get-Content -LiteralPath "main.js" -Raw -Encoding utf8) + "`n" + (Get-Content -LiteralPath "styles.css" -Raw -Encoding utf8)
  $forbiddenPublicUrls = @(
    'https://deksmo.com',
    'https://github.com/Remilya/Deksmo"',
    'https://github.com/Remilya/Deksmo-Vision',
    'https://github.com/Remilya/DeksmoMedical',
    'https://github.com/Remilya/DeksmoILACDB'
  )

  foreach ($url in $forbiddenPublicUrls) {
    Assert-SiteCondition (-not $sourceText.Contains($url)) "unavailable public URL remains in rendered source: $url"
  }
  Assert-SiteCondition (-not $sourceText.Contains("hizliresim.com")) "archive media must not depend on the old third-party image host"

  $index = Get-Content -LiteralPath "index.html" -Raw -Encoding utf8
  Assert-SiteCondition (([regex]::Matches($index, "<h1(?:\s|>)", "IgnoreCase")).Count -eq 1) "index.html must contain one H1"
  Assert-SiteCondition (([regex]::Matches($index, "aria-live=", "IgnoreCase")).Count -eq 1) "only the language status may use aria-live"
  Assert-SiteCondition ($index.Contains('<link rel="canonical" href="https://remilya.dev/"')) "canonical URL is missing"
  Assert-SiteCondition ($index.Contains('property="og:image"')) "Open Graph image metadata is missing"
  Assert-SiteCondition ($index.Contains('name="twitter:card"')) "Twitter card metadata is missing"
  Assert-SiteCondition ($index.Contains('"@type": "Person"')) "Person JSON-LD is missing"
  Assert-SiteCondition (-not $index.Contains("gsap")) "unused GSAP download remains"
  Assert-SiteCondition ($index.Contains('<dialog class="archive-dialog" id="deksmo-archive-dialog"')) "archive simulator must use an on-demand dialog"
  Assert-SiteCondition ($index.Contains("data-open-archive")) "archive dialog has no launch control"
  Assert-SiteCondition ($index.Contains("data-close-archive")) "archive dialog has no close control"

  $fallbackContent = @(
    "Welcome to Remilya.dev.",
    "Enter the archive",
    "A localization workbench, preserved as it was.",
    "INTERACTIVE SIMULATION",
    "Deksmo",
    "Legal Services Platform Rebuild",
    "build something practical.",
    "<noscript>"
  )
  foreach ($text in $fallbackContent) {
    Assert-SiteCondition ($index.Contains($text)) "pre-rendered fallback content is missing: $text"
  }

  $script = Get-Content -LiteralPath "main.js" -Raw -Encoding utf8
  Assert-SiteCondition ($script.Contains("navigator.connection?.saveData")) "data-saver poster fallback is missing"
  Assert-SiteCondition ($script.Contains("progress / 0.2")) "hero content must fade over the first 20 percent"
  Assert-SiteCondition ($script.Contains('link.external === false ? ""')) "internal project links are not handled without a new-tab target"
  Assert-SiteCondition ($script.Contains("showModal()")) "archive simulator is not opened as a modal dialog"
  Assert-SiteCondition ($script.Contains('event.target === elements.archiveDialog')) "archive dialog backdrop close behavior is missing"

  $styles = Get-Content -LiteralPath "styles.css" -Raw -Encoding utf8
  foreach ($height in @("min-height: 220vh", "min-height: 190vh", "min-height: 170vh")) {
    Assert-SiteCondition ($styles.Contains($height)) "responsive sequence height is missing: $height"
  }

  $ids = @{}
  foreach ($match in [regex]::Matches($index, 'id="([^"]+)"', "IgnoreCase")) {
    $ids[$match.Groups[1].Value] = $true
  }

  foreach ($match in [regex]::Matches($index, 'href="#([^"]+)"', "IgnoreCase")) {
    $anchor = $match.Groups[1].Value
    Assert-SiteCondition ($ids.ContainsKey($anchor)) "broken internal link: #$anchor"
  }

  $assetMatches = [regex]::Matches($sourceText, 'assets/[A-Za-z0-9_.\-/]+\.(?:png|jpe?g|webp|svg)', "IgnoreCase")
  foreach ($assetPath in ($assetMatches.Value | Sort-Object -Unique)) {
    Assert-SiteCondition (Test-Path -LiteralPath $assetPath -PathType Leaf) "missing referenced asset: $assetPath"
  }

  $productionAssetPaths = @(& git ls-files --cached --others --exclude-standard -- "assets" | Where-Object { Test-Path -LiteralPath $_ -PathType Leaf })
  foreach ($assetPath in $productionAssetPaths) {
    $asset = Get-Item -LiteralPath $assetPath
    Assert-SiteCondition ($asset.Length -le 2MB) "asset exceeds the 2 MB single-file budget: $(Get-RelativeSitePath $asset.FullName)"
  }

  Assert-SiteCondition ((Get-Item -LiteralPath "assets/remilya-social.jpg").Length -le 350KB) "social image exceeds 350 KB"

  $archiveAssets = @(
    Get-Item -LiteralPath "assets/deksmo-archive/raw.webp"
    Get-Item -LiteralPath "assets/deksmo-archive/translated.webp"
    Get-Item -LiteralPath "assets/deksmo-archive/colorized.webp"
  )
  foreach ($asset in $archiveAssets) {
    Assert-SiteCondition ($asset.Length -le 500KB) "archive image exceeds the 500 KB budget: $(Get-RelativeSitePath $asset.FullName)"
  }
  $archiveBytes = ($archiveAssets | Measure-Object -Property Length -Sum).Sum
  Assert-SiteCondition ($archiveBytes -le 1.5MB) "archive media exceeds the 1.5 MB combined budget"

  $localReferenceApps = @(Get-ChildItem -LiteralPath $siteRoot -Directory | Where-Object {
    Test-Path -LiteralPath (Join-Path $_.FullName "package.json") -PathType Leaf
  })
  foreach ($referenceApp in $localReferenceApps) {
    $relativeName = $referenceApp.Name
    $ignoredPath = & git check-ignore -- $relativeName
    Assert-SiteCondition ($LASTEXITCODE -eq 0 -and $ignoredPath) "local reference app must remain ignored: $relativeName"
    $trackedReferenceFiles = @(& git ls-files -- $relativeName)
    Assert-SiteCondition ($trackedReferenceFiles.Count -eq 0) "local reference app must remain untracked: $relativeName"
    Assert-SiteCondition (-not $sourceText.Contains("$relativeName/")) "production source references local reference app: $relativeName"
  }

  $initialFiles = @(
    "index.html",
    "styles.css",
    "main.js",
    "assets/favicon.svg",
    "assets/apple-touch-icon.png",
    "assets/sequences/desktop/frame-001.webp"
  )
  $initialBytes = ($initialFiles | ForEach-Object { (Get-Item -LiteralPath $_).Length } | Measure-Object -Sum).Sum
  Assert-SiteCondition ($initialBytes -le 2MB) "estimated first-party initial transfer exceeds 2 MB"

  Write-Host ("Site validation passed. Estimated first-party initial transfer: {0:N0} KB." -f ($initialBytes / 1KB))
}
finally {
  Pop-Location
}
