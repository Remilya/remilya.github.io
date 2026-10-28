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
    "404.html",
    "styles.css",
    "main.js",
    "DESIGN.md",
    "CNAME",
    "Raidou/index.html",
    "ScarletSavior/index.html",
    "Voicevox/index.html",
    "ScrollHero/index.html",
    "Watermark/index.html",
    "WebGrab/index.html",
    "assets/favicon.svg",
    "assets/apple-touch-icon.png",
    "assets/remilya-social.jpg",
    "assets/gensokyo-cover.webp",
    "assets/scarlet-savior-cover.webp",
    "assets/raidou-cover.webp",
    "assets/higurashi-cover.webp"
  )

  foreach ($relativePath in $requiredFiles) {
    Assert-SiteCondition (Test-Path -LiteralPath $relativePath -PathType Leaf) "missing required file: $relativePath"
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
  Assert-SiteCondition (-not $index.Contains("deksmo-archive-dialog")) "retired Deksmo archive simulator must remain removed"
  Assert-SiteCondition (-not $index.Contains("hero-sequence")) "retired scroll-hero sequence must remain removed"

  $fallbackContent = @(
    "Gensokyo 1:1 Interactive Atlas",
    "https://remilya.dev/Gensokyo/",
    "https://remilya.dev/Higurashi/",
    "Scarlet Savior",
    "RAIDOU Remastered TR",
    "Higurashi When They Cry TR",
    "VOICEVOX Expressive TTS",
    "Scroll-Hero",
    "Watermark-Deksmo",
    "Deksmo WebGrab",
    "https://x.com/Remilya356",
    "Get in Touch",
    "<noscript>"
  )
  foreach ($text in $fallbackContent) {
    Assert-SiteCondition ($index.Contains($text)) "pre-rendered fallback content is missing: $text"
  }

  $script = Get-Content -LiteralPath "main.js" -Raw -Encoding utf8
  Assert-SiteCondition ($script.Contains('link.external === false ? ""')) "internal project links are not handled without a new-tab target"

  $styles = Get-Content -LiteralPath "styles.css" -Raw -Encoding utf8
  Assert-SiteCondition ($styles.Contains("wiiChannelGlow")) "Wii channel hover glow animation is missing"

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
    "assets/apple-touch-icon.png"
  )
  $initialBytes = ($initialFiles | ForEach-Object { (Get-Item -LiteralPath $_).Length } | Measure-Object -Sum).Sum
  Assert-SiteCondition ($initialBytes -le 2MB) "estimated first-party initial transfer exceeds 2 MB"

  Write-Host ("Site validation passed. Estimated first-party initial transfer: {0:N0} KB." -f ($initialBytes / 1KB))
}
finally {
  Pop-Location
}
