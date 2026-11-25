export const STORAGE_KEY = "remilya-locale";
export const SUPPORTED_LOCALES = ["en", "tr", "ja"];

export const urls = {
  github: "https://github.com/Remilya",
  linkedin: "https://tr.linkedin.com/in/ilker-agirkaya",
  twitter: "https://x.com/Remilya356",
  itchProfile: "https://remilya356.itch.io/",
  scarletSurvivorsItch: "https://remilya356.itch.io/scarlet-survivors",
  scarletSurvivorsTrailer: "https://youtu.be/Y_lwLCn5oVw",
  shortScarletSurvivors: "https://remilya.dev/ScarletSurvivors/",
  gensokyoAtlas: "https://remilya.dev/Gensokyo/",
  repoGensokyoAssets: "https://github.com/Remilya/gensokyo-assets",
  higurashiArchive: "https://remilya.dev/Higurashi/",
  uminekoArchive: "https://remilya.dev/Umineko/",
  shortRaidou: "https://remilya.dev/Raidou/",
  shortScarlet: "https://remilya.dev/ScarletSavior/",
  shortVoicevox: "https://remilya.dev/Voicevox/",
  shortScrollHero: "https://remilya.dev/ScrollHero/",
  shortWatermark: "https://remilya.dev/Watermark/",
  shortWebGrab: "https://remilya.dev/WebGrab/",
  repoWatermark: "https://github.com/Remilya/Watermark-Deksmo",
  repoScrap: "https://github.com/Remilya/DeksmoScrap",
  repoVoicevox: "https://github.com/Remilya/voicevox-expressive-tts",
  repoScrollHero: "https://github.com/Remilya/scroll-hero",
  itchScarlet: "https://remilya356.itch.io/scarlet-savior",
  repoRaidou: "https://github.com/Remilya/raidou-remastered-tr",
  repoHigurashi: "https://github.com/Remilya/Higurashi",
  repoUmineko: "https://github.com/Remilya/Umineko",
  uminekoTrailer: "https://remilya.dev/Umineko/assets/umineko-tr-fragman.mp4",
  mangaEp1:
    "https://manga-tr.com/manga-umineko-no-naku-koro-ni-episode-1-legend-of-the-golden-witch.html",
  mangaEp2:
    "https://manga-tr.com/manga-umineko-no-naku-koro-ni-episode-2-turn-of-the-golden-witch.html",
  mangaRezero:
    "https://manga-tr.com/manga-rezero-kara-hajimeru-isekai-seikatsu.html"
};

export const higurashiQuotes = [
  {
    id: "onikakushi",
    speaker: {
      en: "RENA RYUGU · ONIKAKUSHI",
      tr: "RENA RYUGU · ONIKAKUSHI",
      ja: "竜宮 レナ ・ 鬼隠し編"
    },
    lines: {
      tr: "Yalan söyledin! Az önce gözlerimin içine baka baka yalan söyledin, değil mi?",
      en: "Liar! You just looked me straight in the eyes and lied, didn't you?",
      ja: "嘘だッ！！　今、レナの目を見て嘘をついたよね？"
    }
  }
];

export const uminekoQuotes = [
  {
    id: "red-truth",
    speaker: {
      en: "BEATRICE · THE GOLDEN WITCH",
      tr: "BEATRICE · ALTIN CADI",
      ja: "ベアトリーチェ ・ 黄金の魔女"
    },
    lines: {
      tr: "Dinle ve hatırla! Kırmızıyla söylediğim her şey mutlak gerçektir! Kanıta ya da tartışmaya asla ihtiyaç duymaz!",
      en: "Listen closely! Everything I speak in red is the absolute truth! There is zero need for proof or debate!",
      ja: "よく聞け。妾が赤で語ることは全て真実だ！　証拠も議論も一切不要！"
    }
  }
];

export const stackGroups = [
  "Godot 4 (GDScript / C#)",
  "Android SDK / APK",
  "Python",
  "Node.js",
  "JavaScript (ES6+)",
  "Three.js / WebGL",
  "Ren'Py Visual Novel",
  "UnityPy & SDF Fonts",
  "07th-Mod / BurikoScript",
  "VOICEVOX TTS",
  "CustomTkinter & Pillow",
  "HTML5 Canvas",
  "Manifest V3",
  "Blender & 3D Assets"
];

export const shortRoutes = [
  { label: "/ScarletSurvivors", href: urls.shortScarletSurvivors, external: false },
  { label: "/Gensokyo", href: urls.gensokyoAtlas, external: false },
  { label: "/Higurashi", href: urls.higurashiArchive, external: false },
  { label: "/Umineko", href: urls.uminekoArchive, external: false },
  { label: "/Raidou", href: urls.shortRaidou, external: false },
  { label: "/ScarletSavior", href: urls.shortScarlet, external: false },
  { label: "/Voicevox", href: urls.shortVoicevox, external: false },
  { label: "/ScrollHero", href: urls.shortScrollHero, external: false },
  { label: "/Watermark", href: urls.shortWatermark, external: false },
  { label: "/WebGrab", href: urls.shortWebGrab, external: false }
];

export const content = {
  en: {
    meta: {
      title: "Remilya | Scarlet Survivors, Open-Source Tools & Game Localizations",
      description:
        "Independent software & game developer behind Touhou 6 danmaku fangame Scarlet Survivors (Godot 4, Windows & Android), interactive Gensokyo 1:1 Atlas, VOICEVOX/Python desktop tools, and Turkish game patches.",
      ogLocale: "en_US"
    },
    aria: {
      skipLink: "Skip to main content",
      brandLink: "Back to top",
      primaryNav: "Main navigation",
      dotsNav: "Page sections",
      localeSwitcher: "Site language",
      languageChanged: "Language switched to English"
    },
    brandSubtitle: "Software · Games · Localization",
    nav: {
      top: "Home",
      library: "Projects",
      work: "Tools",
      translations: "Manga",
      experience: "About",
      contact: "Contact"
    },
    panelLabels: {
      top: "Home",
      library: "Projects",
      work: "Tools",
      translations: "Manga",
      experience: "About",
      contact: "Contact"
    },
    hero: {
      kicker: "REMILYA // SOFTWARE · GAMES · LOCALIZATION",
      lead:
        "Building indie games in Godot 4, local voice & desktop tools, and full Turkish game & manga localizations.",
      sub:
        "Creator of Touhou 6 survivors fangame Scarlet Survivors (Windows & Android), Gensokyo 1:1 3D Atlas, Ren'Py VN Scarlet Savior, and open-source utilities.",
      ctaPrimary: "Browse Projects",
      ctaSecondary: "GitHub Profile",
      scrollHint: "Scroll down or press ↓",
      quickLinks: [
        { label: "Scarlet Survivors", href: urls.scarletSurvivorsItch, external: true },
        { label: "Gensokyo 1:1 Atlas", href: urls.gensokyoAtlas, external: false },
        { label: "Higurashi TR", href: urls.higurashiArchive, external: false },
        { label: "Umineko TR", href: urls.uminekoArchive, external: false }
      ],
      medallionBadges: [
        { code: "Scarlet Survivors", label: "Godot 4 · Win / Android" },
        { code: "Gensokyo 1:1", label: "2D & 3D Atlas" },
        { code: "Umineko & Higurashi", label: "Turkish Patches" }
      ]
    },
    slices: {
      srTitle: "Featured Projects",
      compBanner: "PROJECT OVERVIEW // PICK A SLICE",
      compInspect: "Open Slice",
      compLaunch: "Open ↗",
      compLaunchPrefix: "Open",
      scarletPlayAria: "Scarlet Survivors - Play official 16:9 YouTube trailer",
      scarletVideoTitle: "Official 16:9 Trailer",
      ytPlayAria: "Higurashi When They Cry TR - Play YouTube video",
      higuLangLabel: "Script Language",
      umiPlayAria: "Umineko When They Cry TR - Play Special Tea Party trailer",
      umiLangLabel: "Script Language",
      items: [
        {
          k: 1,
          eyebrow: "01 // GODOT 4 DANMAKU SURVIVORS (WINDOWS & ANDROID)",
          cap: "S",
          restTitle: "carlet Survivors",
          fullTitle: "Scarlet Survivors",
          shortLabel: "Scarlet Survivors",
          compSub: "Godot 4 · Win / Android",
          desc:
            "Portrait bullet-heaven survivors fangame set in Touhou 6 (EoSD), built in Godot 4 with a deterministic Python pixel/voxel pipeline (zero AI art or music), 12 playable heroes, 7 boss stages, 31 Spell Cards, and built-in EN / TR / JP localization.",
          pills: [
            "12 Heroes · 7 Stages · 31 Spell Cards",
            "Godot 4 (GDScript/C#) · Zero-AI Pipeline",
            "Windows x64 & Android APK (EN / TR / JP)"
          ],
          primaryLabel: "Play Free on itch.io →",
          primaryHref: urls.scarletSurvivorsItch,
          primaryExternal: true,
          secondaryLabel: "Watch 16:9 Trailer →",
          secondaryHref: urls.scarletSurvivorsTrailer,
          secondaryExternal: true
        },
        {
          k: 2,
          eyebrow: "02 // 2D MAP & THREE.JS 3D ATLAS",
          cap: "G",
          restTitle: "ensokyo 1:1 Interactive Atlas",
          fullTitle: "Gensokyo 1:1 Interactive Atlas",
          shortLabel: "Gensokyo 1:1",
          compSub: "2D & 3D Map",
          desc:
            "Explore Touhou's Gensokyo across a 2D cartographic scroll or a Three.js 3D terrain view, with location guides, character profiles, and a point-to-point travel calculator.",
          pills: [
            "2D Scroll & Three.js 3D",
            "114+ Regions & 143 Cast",
            "Route & Travel Calculator"
          ],
          primaryLabel: "Open remilya.dev/Gensokyo →",
          primaryHref: urls.gensokyoAtlas,
          primaryExternal: false,
          secondaryLabel: "Sprite Repo (GitHub) →",
          secondaryHref: urls.repoGensokyoAssets,
          secondaryExternal: true
        },
        {
          k: 3,
          eyebrow: "03 // CHAPTERS 1-10 COMPLETE TURKISH PATCH",
          cap: "H",
          restTitle: "igurashi When They Cry TR",
          fullTitle: "Higurashi When They Cry TR",
          shortLabel: "Higurashi TR",
          compSub: "All 10 Games · TR Patch",
          desc:
            "07th-Mod compatible Turkish patch covering all 10 Higurashi Hou, Rei, and Hou+ games. Includes translated in-game visuals and a one-click installer.",
          primaryLabel: "Open remilya.dev/Higurashi →",
          primaryHref: urls.higurashiArchive,
          primaryExternal: false,
          secondaryLabel: "GitHub / Installer →",
          secondaryHref: urls.repoHigurashi,
          secondaryExternal: true
        },
        {
          k: 4,
          eyebrow: "04 // EPISODES 1-8 COMPLETE TURKISH PATCH",
          cap: "U",
          restTitle: "mineko When They Cry TR",
          fullTitle: "Umineko When They Cry TR",
          shortLabel: "Umineko TR",
          compSub: "All 8 Episodes · TR Patch",
          desc:
            "07th-Mod compatible Turkish patch covering Question & Answer Arcs (Episodes 1-8). Includes Kanji-ready fonts, translated UI and puzzles, and a one-click installer.",
          primaryLabel: "Open remilya.dev/Umineko →",
          primaryHref: urls.uminekoArchive,
          primaryExternal: false,
          secondaryLabel: "GitHub / Installer →",
          secondaryHref: urls.repoUmineko,
          secondaryExternal: true
        },
        {
          k: 5,
          eyebrow: "05 // PC · 100% TURKISH PATCH",
          cap: "R",
          restTitle: "AIDOU Remastered TR",
          fullTitle: "RAIDOU Remastered TR",
          shortLabel: "RAIDOU TR",
          compSub: "100% Turkish Patch",
          desc:
            "100% Turkish patch for the PC version. Installs translated fonts and full game text in a single click.",
          primaryLabel: "GitHub / Download →",
          primaryHref: urls.repoRaidou,
          primaryExternal: true,
          secondaryLabel: "/Raidou Short Link",
          secondaryHref: urls.shortRaidou,
          secondaryExternal: false
        },
        {
          k: 6,
          eyebrow: "06 // TOUHOU PSYCHOLOGICAL HORROR VISUAL NOVEL",
          cap: "S",
          restTitle: "carlet Savior",
          fullTitle: "Scarlet Savior",
          shortLabel: "Scarlet Savior",
          compSub: "Ren'Py Visual Novel",
          badge: "Ren'Py Visual Novel",
          desc:
            "A psychological horror visual novel built in Ren'Py and set inside the Scarlet Devil Mansion. Features full Japanese voice acting with Turkish, English, and Japanese subtitles.",
          primaryLabel: "Download on itch.io →",
          primaryHref: urls.itchScarlet,
          primaryExternal: true,
          secondaryLabel: "3D Game Assets →",
          secondaryHref: urls.itchProfile,
          secondaryExternal: true
        }
      ]
    },
    work: {
      eyebrow: "OPEN SOURCE // GITHUB REPOSITORIES",
      cap: "O",
      restTitle: "pen-source tools.",
      copy:
        "Local Node.js voice bridges, vanilla JS libraries, Python desktop utilities, and browser extensions.",
      projects: [
        {
          index: "01",
          accent: "amethyst",
          title: "VOICEVOX Expressive TTS",
          type: "NODE.JS · LOCAL TTS BRIDGE",
          summary:
            "Exposes local VOICEVOX as an OpenAI-compatible TTS endpoint for SillyTavern, Project AIRI, and AIVTubers. Converts Turkish and English text to Katakana phonetics and includes 430+ anime phrases.",
          stack: ["Node.js", "VOICEVOX", "TR/EN Katakana", "SillyTavern & AIRI"],
          icon: "i-voice",
          links: [
            { label: "GitHub →", href: urls.repoVoicevox, external: true },
            { label: "/Voicevox", href: urls.shortVoicevox, external: false }
          ]
        },
        {
          index: "02",
          accent: "lavender",
          title: "Scroll-Hero",
          type: "VANILLA JS/ESM · CANVAS PLAYER",
          summary:
            "Turns FFmpeg-extracted WebP video frames into a scroll-scrubbed HTML5 Canvas banner. Runs on plain JavaScript with no runtime dependencies and falls back cleanly under reduced motion.",
          stack: ["JavaScript (ESM)", "HTML5 Canvas", "WebP Frames", "FFmpeg CLI"],
          icon: "i-reel",
          links: [
            { label: "GitHub →", href: urls.repoScrollHero, external: true },
            { label: "/ScrollHero", href: urls.shortScrollHero, external: false }
          ]
        },
        {
          index: "03",
          accent: "violet",
          title: "Watermark-Deksmo",
          type: "PYTHON · DESKTOP APP (v1.2)",
          summary:
            "Batch watermarking app for manga chapters and image folders. Place logos by clicking directly on the preview, browse pages with arrow keys, and save per-page scale overrides to JSON.",
          stack: ["Python 3.10+", "CustomTkinter", "Pillow", "PyInstaller"],
          logo: "assets/logos/watermark-deksmo.webp",
          links: [
            { label: "GitHub →", href: urls.repoWatermark, external: true },
            { label: "/Watermark", href: urls.shortWatermark, external: false }
          ]
        },
        {
          index: "04",
          accent: "orchid",
          title: "Deksmo WebGrab",
          type: "MANIFEST V3 · BROWSER EXTENSION (v1.3)",
          summary:
            "Chrome and Edge extension for grabbing full-resolution images from Pixiv, Pinterest, X, and web galleries. Reorder pages by drag-and-drop and export chapters as PDF or ZIP.",
          stack: ["JavaScript", "Manifest V3", "PDF Manager", "ZIP Batch Export"],
          logo: "assets/logos/deksmo-webgrab.png",
          links: [
            { label: "GitHub →", href: urls.repoScrap, external: true },
            { label: "/WebGrab", href: urls.shortWebGrab, external: false }
          ]
        }
      ]
    },
    manga: {
      eyebrow: "MANGA TRANSLATIONS // TURKISH EDITIONS",
      cap: "U",
      restTitle: "mineko & Re:Zero",
      copy:
        "Manga series I translated and typeset into Turkish from start to finish.",
      readLabel: "Read in Turkish →",
      roleLabel: "Turkish Translation & Typesetting",
      prevAria: "Previous manga volume",
      nextAria: "Next manga volume",
      items: [
        {
          index: "01",
          ep: "Episode 1",
          title: "Legend of the Golden Witch",
          subtitle: "ウミネコのナク頃に",
          series: "Umineko When They Cry",
          note:
            "The opening arc on Rokkenjima Island. Full Turkish translation and speech-bubble typesetting for the Episode 1 manga adaptation.",
          cover: "assets/ep1-cover.webp",
          href: urls.mangaEp1
        },
        {
          index: "02",
          ep: "Episode 2",
          title: "Turn of the Golden Witch",
          subtitle: "ウミネコのナク頃に",
          series: "Umineko When They Cry",
          note:
            "Beatrice steps onto the board and introduces the Red Truth. Complete Turkish translation and lettering for Episode 2.",
          cover: "assets/ep2-cover.webp",
          href: urls.mangaEp2
        },
        {
          index: "03",
          ep: "Arc 1",
          title: "A Day in the Capital",
          subtitle: "Re:ゼロから始める異世界生活",
          series: "Re:Zero - Starting Life in Another World",
          note:
            "Subaru's first time loop in the royal capital. Complete Turkish manga translation of the opening arc.",
          cover: "assets/rezero-cover.jpg",
          href: urls.mangaRezero
        }
      ]
    },
    experience: {
      eyebrow: "BACKGROUND // WORK & TOOLS",
      cap: "B",
      restTitle: "ackground & tools.",
      copy:
        "Where I studied, what I worked on, and the tools I use day to day.",
      stackLabel: "LANGUAGES, ENGINES & TOOLS",
      timeline: [
        {
          period: "B.A. · C1 ENGLISH",
          kind: "Education",
          title: "New Media & Communication",
          summary:
            "Undergraduate degree focused on digital publishing, visual design, and media production. Working proficiency in C1 English."
        },
        {
          period: "2024-2025",
          kind: "Post-Production",
          title: "Production & Subtitle Intern",
          summary:
            "Assisted with studio video editing workflows and translated English-to-Turkish subtitles."
        },
        {
          period: "2025-PRESENT",
          kind: "Web & SEO",
          title: "Freelance Web & Digital Project Manager",
          summary:
            "Building fast static and frontend sites for client brands alongside technical SEO."
        },
        {
          period: "ONGOING",
          kind: "OSS · Games · Modding",
          title: "Independent Software & Game Localization",
          summary:
            "Built Touhou 6 action game Scarlet Survivors (Godot 4, Windows & Android), Gensokyo 1:1 Atlas, Ren'Py VN Scarlet Savior, Turkish patches for Umineko, Higurashi, and RAIDOU Remastered, plus open-source desktop tools."
        }
      ]
    },
    contact: {
      eyebrow: "CONTACT // LINKS & SHORT ROUTES",
      title: "Get in Touch",
      copy:
        "You can reach me through any of the accounts below for software work, localization projects, or questions.",
      routesTitle: "SHORT LINKS (REMILYA.DEV)",
      footerNote: "REMILYA · INDEPENDENT SOFTWARE, GAMES & LOCALIZATION",
      backTop: "Back to Top ↑",
      socials: [
        {
          label: "GitHub",
          handle: "@Remilya",
          desc: "Umineko TR, Higurashi TR, RAIDOU TR & open-source repos",
          href: urls.github,
          icon: "i-gh"
        },
        {
          label: "X / Twitter",
          handle: "@Remilya356",
          desc: "Patch updates & dev notes",
          href: urls.twitter,
          icon: "i-x-social"
        },
        {
          label: "LinkedIn",
          handle: "İlker Ağırkaya",
          desc: "Web projects, media & SEO",
          href: urls.linkedin,
          icon: "i-in"
        },
        {
          label: "itch.io",
          handle: "@remilya356",
          desc: "Scarlet Survivors (Win/APK), Scarlet Savior VN & 3D assets",
          href: urls.itchProfile,
          icon: "i-game"
        }
      ]
    }
  },
  tr: {
    meta: {
      title: "Remilya | Scarlet Survivors, Açık Kaynak Araçlar ve Oyun Yerelleştirme",
      description:
        "Godot 4 ile geliştirilen Touhou 6 danmaku survivors oyunu Scarlet Survivors (Windows & Android), 2D/3D Gensokyo 1:1 Atlası, yerel VOICEVOX/Python araçları ve Umineko/Higurashi Türkçe oyun yamaları.",
      ogLocale: "tr_TR"
    },
    aria: {
      skipLink: "Ana içeriğe geç",
      brandLink: "En üste dön",
      primaryNav: "Ana menü",
      dotsNav: "Sayfa bölümleri",
      localeSwitcher: "Site dili",
      languageChanged: "Site dili: Türkçe"
    },
    brandSubtitle: "Yazılım · Oyun · Çeviri",
    nav: {
      top: "Giriş",
      library: "Projeler",
      work: "Araçlar",
      translations: "Manga",
      experience: "Hakkımda",
      contact: "İletişim"
    },
    panelLabels: {
      top: "Giriş",
      library: "Projeler",
      work: "Araçlar",
      translations: "Manga",
      experience: "Hakkımda",
      contact: "İletişim"
    },
    hero: {
      kicker: "REMILYA // YAZILIM · OYUN · ÇEVİRİ",
      lead:
        "Godot 4 ile oyunlar, yerel ses ve masaüstü araçları geliştiriyor; oyun ve mangaları Türkçeye çeviriyorum.",
      sub:
        "Windows ve Android için Scarlet Survivors (Touhou 6 fangame), 2D/3D Gensokyo 1:1 Atlası, Scarlet Savior görsel romanı ve açık kaynak araçlar.",
      ctaPrimary: "Projelere Bak",
      ctaSecondary: "GitHub Profili",
      scrollHint: "Aşağı kaydır veya ↓ tuşuna bas",
      quickLinks: [
        { label: "Scarlet Survivors", href: urls.scarletSurvivorsItch, external: true },
        { label: "Gensokyo 1:1 Atlas", href: urls.gensokyoAtlas, external: false },
        { label: "Higurashi TR", href: urls.higurashiArchive, external: false },
        { label: "Umineko TR", href: urls.uminekoArchive, external: false }
      ],
      medallionBadges: [
        { code: "Scarlet Survivors", label: "GODOT 4 · WIN / APK" },
        { code: "Gensokyo 1:1", label: "2D & 3D ATLAS" },
        { code: "Umineko & Higurashi", label: "TÜRKÇE YAMA" }
      ]
    },
    slices: {
      srTitle: "Öne Çıkan Projeler",
      compBanner: "TÜM PROJELER // BİR DİLİM SEÇ",
      compInspect: "Dilimi Aç",
      compLaunch: "Aç ↗",
      compLaunchPrefix: "Aç:",
      scarletPlayAria: "Scarlet Survivors - Resmi 16:9 YouTube fragmanını oynat",
      scarletVideoTitle: "Resmi 16:9 Fragman",
      ytPlayAria: "Higurashi When They Cry TR - YouTube videosunu oynat",
      higuLangLabel: "Metin Dili",
      umiPlayAria: "Umineko When They Cry TR - Özel Çay Partisi fragmanını oynat",
      umiLangLabel: "Metin Dili",
      items: [
        {
          k: 1,
          eyebrow: "01 // GODOT 4 DANMAKU SURVIVORS (WINDOWS & ANDROID)",
          cap: "S",
          restTitle: "carlet Survivors",
          fullTitle: "Scarlet Survivors",
          shortLabel: "Scarlet Survivors",
          compSub: "Godot 4 · Win / Android",
          desc:
            "Godot 4 ve deterministik Python piksel/voxel üretim hattıyla (yapay zeka görseli/müziği olmadan) geliştirdiğim Touhou 6 temalı portre danmaku hayatta kalma oyunu. 12 oynanabilir karakter, 7 bölüm, 31 boss Spell Card, Kourindou dükkanı ve dahili TR / EN / JP dil desteği.",
          pills: [
            "12 Karakter · 7 Bölüm · 31 Spell Card",
            "Godot 4 (GDScript/C#) · Sıfır AI Sanat/Müzik",
            "Windows x64 & Android APK (TR / EN / JP)"
          ],
          primaryLabel: "itch.io'dan Ücretsiz Oyna →",
          primaryHref: urls.scarletSurvivorsItch,
          primaryExternal: true,
          secondaryLabel: "Fragmanı İzle (YouTube) →",
          secondaryHref: urls.scarletSurvivorsTrailer,
          secondaryExternal: true
        },
        {
          k: 2,
          eyebrow: "02 // 2D HARİTA VE THREE.JS 3D ATLAS",
          cap: "G",
          restTitle: "ensokyo 1:1 Interactive Atlas",
          fullTitle: "Gensokyo 1:1 Interactive Atlas",
          shortLabel: "Gensokyo 1:1",
          compSub: "2D & 3D Harita",
          desc:
            "Touhou evrenindeki Gensokyo'yu hem 2D parşömen haritada hem de Three.js 3D arazide gezebileceğin interaktif atlas. Bölge ve karakter rehberleriyle iki nokta arası yolculuk hesaplayıcı içerir.",
          pills: [
            "2D Harita & Three.js 3D",
            "114+ Bölge & 143 Karakter",
            "Rota ve Süre Hesaplayıcı"
          ],
          primaryLabel: "remilya.dev/Gensokyo →",
          primaryHref: urls.gensokyoAtlas,
          primaryExternal: false,
          secondaryLabel: "Portre Deposu (GitHub) →",
          secondaryHref: urls.repoGensokyoAssets,
          secondaryExternal: true
        },
        {
          k: 3,
          eyebrow: "03 // BÖLÜM 1-10 TAM SERİ TÜRKÇE YAMA",
          cap: "H",
          restTitle: "igurashi When They Cry TR",
          fullTitle: "Higurashi When They Cry TR",
          shortLabel: "Higurashi TR",
          compSub: "10 Oyun · Türkçe Yama",
          desc:
            "Higurashi Hou, Rei ve Hou+ serisindeki 10 oyunun tamamını Türkçeye çeviren, 07th-Mod uyumlu yama. Oyun içi görselleri ve tek tıkla kurulum aracını içerir.",
          primaryLabel: "remilya.dev/Higurashi →",
          primaryHref: urls.higurashiArchive,
          primaryExternal: false,
          secondaryLabel: "GitHub / Kurulum →",
          secondaryHref: urls.repoHigurashi,
          secondaryExternal: true
        },
        {
          k: 4,
          eyebrow: "04 // BÖLÜM 1-8 TAM SERİ TÜRKÇE YAMA",
          cap: "U",
          restTitle: "mineko When They Cry TR",
          fullTitle: "Umineko When They Cry TR",
          shortLabel: "Umineko TR",
          compSub: "Bölüm 1-8 · Türkçe Yama",
          desc:
            "Question ve Answer Arcs (Bölüm 1-8) oyunlarının tamamını Türkçeye çeviren, 07th-Mod uyumlu yama. Kanji destekli fontları, oyun içi arayüz/bulmaca görsellerini ve tek tıkla kurulum aracını içerir.",
          primaryLabel: "remilya.dev/Umineko →",
          primaryHref: urls.uminekoArchive,
          primaryExternal: false,
          secondaryLabel: "GitHub / Kurulum →",
          secondaryHref: urls.repoUmineko,
          secondaryExternal: true
        },
        {
          k: 5,
          eyebrow: "05 // PC · %100 TÜRKÇE YAMA",
          cap: "R",
          restTitle: "AIDOU Remastered TR",
          fullTitle: "RAIDOU Remastered TR",
          shortLabel: "RAIDOU TR",
          compSub: "%100 Türkçe Yama",
          desc:
            "PC sürümü için hazırladığım %100 Türkçe yama. Türkçe fontlarla birlikte tek tıkla oyuna kurulur.",
          primaryLabel: "GitHub / İndir →",
          primaryHref: urls.repoRaidou,
          primaryExternal: true,
          secondaryLabel: "/Raidou Kısa Link",
          secondaryHref: urls.shortRaidou,
          secondaryExternal: false
        },
        {
          k: 6,
          eyebrow: "06 // TOUHOU PSİKOLOJİK KORKU GÖRSEL ROMANI",
          cap: "S",
          restTitle: "carlet Savior",
          fullTitle: "Scarlet Savior",
          shortLabel: "Scarlet Savior",
          compSub: "REN'PY GÖRSEL ROMAN",
          badge: "Ren'Py Görsel Roman",
          desc:
            "Kızıl Şeytan Malikanesi'nde geçen bu psikolojik korku görsel romanını Ren'Py ile geliştirdim. Tam Japonca seslendirmeli oyunda Türkçe, İngilizce ve Japonca altyazı seçeneği var.",
          primaryLabel: "itch.io'da İndir →",
          primaryHref: urls.itchScarlet,
          primaryExternal: true,
          secondaryLabel: "3D Oyun Modelleri →",
          secondaryHref: urls.itchProfile,
          secondaryExternal: true
        }
      ]
    },
    work: {
      eyebrow: "AÇIK KAYNAK // GITHUB REPOLARI",
      cap: "A",
      restTitle: "çık kaynak araçlar.",
      copy:
        "Kendi ihtiyaçlarım için yazıp GitHub'da paylaştığım masaüstü programları, yerel ses köprüleri ve tarayıcı eklentileri.",
      projects: [
        {
          index: "01",
          accent: "amethyst",
          title: "VOICEVOX Expressive TTS",
          type: "NODE.JS · YEREL TTS KÖPRÜSÜ",
          summary:
            "Yerel VOICEVOX motorunu SillyTavern, Project AIRI ve AIVTuber araçları için OpenAI uyumlu bir TTS endpoint'ine çevirir. Türkçe ve İngilizce metinleri Katakana okunuşuna aktarır, çoklu ses etiketlerini ve 430+ hazır anime repliğini destekler.",
          stack: ["Node.js", "VOICEVOX", "TR/EN Katakana", "SillyTavern & AIRI"],
          icon: "i-voice",
          links: [
            { label: "GitHub →", href: urls.repoVoicevox, external: true },
            { label: "/Voicevox", href: urls.shortVoicevox, external: false }
          ]
        },
        {
          index: "02",
          accent: "lavender",
          title: "Scroll-Hero",
          type: "VANILLA JS/ESM · CANVAS OYNATICI",
          summary:
            "FFmpeg script'leriyle videodan çıkarılan WebP karelerini sayfa kaydıkça ilerleyen bir HTML5 Canvas animasyonuna çevirir. Dış kütüphane gerektirmez, saf JavaScript ile çalışır.",
          stack: ["JavaScript (ESM)", "HTML5 Canvas", "WebP Kareler", "FFmpeg CLI"],
          icon: "i-reel",
          links: [
            { label: "GitHub →", href: urls.repoScrollHero, external: true },
            { label: "/ScrollHero", href: urls.shortScrollHero, external: false }
          ]
        },
        {
          index: "03",
          accent: "violet",
          title: "Watermark-Deksmo",
          type: "PYTHON · MASAÜSTÜ UYGULAMASI (v1.2)",
          summary:
            "Manga bölümlerine ve kalabalık görsel klasörlerine toplu filigran ekleyen Python uygulaması. Önizleme üzerine tıklayarak konumu seçebilir, ok tuşlarıyla sayfaları gezip özel ölçek ayarlarını JSON'a kaydedebilirsin.",
          stack: ["Python 3.10+", "CustomTkinter", "Pillow", "PyInstaller"],
          logo: "assets/logos/watermark-deksmo.webp",
          links: [
            { label: "GitHub →", href: urls.repoWatermark, external: true },
            { label: "/Watermark", href: urls.shortWatermark, external: false }
          ]
        },
        {
          index: "04",
          accent: "orchid",
          title: "Deksmo WebGrab",
          type: "MANIFEST V3 · TARAYICI EKLENTİSİ (v1.3)",
          summary:
            "Pixiv, Pinterest, X ve manga sitelerindeki görselleri çözünürlüğe göre filtreleyip topluca indiren Chrome/Edge eklentisi. İçindeki sayfa yöneticisiyle görselleri sürükleyip sıralayabilir, bölümleri PDF veya ZIP halinde kaydedebilirsin.",
          stack: ["JavaScript", "Manifest V3", "PDF Yöneticisi", "ZIP Arşiv"],
          logo: "assets/logos/deksmo-webgrab.png",
          links: [
            { label: "GitHub →", href: urls.repoScrap, external: true },
            { label: "/WebGrab", href: urls.shortWebGrab, external: false }
          ]
        }
      ]
    },
    manga: {
      eyebrow: "MANGA ÇEVİRİLERİ // TÜRKÇE SERİLER",
      cap: "U",
      restTitle: "mineko & Re:Zero",
      copy:
        "Çevirisini ve balon dizgisini baştan sona hazırladığım Türkçe manga serileri.",
      readLabel: "Türkçe Oku →",
      roleLabel: "Türkçe Çeviri ve Dizgi",
      prevAria: "Önceki manga cildi",
      nextAria: "Sonraki manga cildi",
      items: [
        {
          index: "01",
          ep: "BÖLÜM 1",
          title: "Legend of the Golden Witch",
          subtitle: "ウミネコのナク頃に",
          series: "Umineko When They Cry",
          note:
            "Umineko serisinin Rokkenjima adasında başlayan ilk bölümü. Manga uyarlamasının Türkçe çevirisini ve balon dizgisini hazırladım.",
          cover: "assets/ep1-cover.webp",
          href: urls.mangaEp1
        },
        {
          index: "02",
          ep: "BÖLÜM 2",
          title: "Turn of the Golden Witch",
          subtitle: "ウミネコのナク頃に",
          series: "Umineko When They Cry",
          note:
            "Beatrice'in oyuna katıldığı ve Kızıl Hakikat'in (Red Truth) ilk kez kullanıldığı ikinci bölüm. Manga uyarlamasının Türkçe çeviri ve dizgisini yaptım.",
          cover: "assets/ep2-cover.webp",
          href: urls.mangaEp2
        },
        {
          index: "03",
          ep: "ARK 1",
          title: "A Day in the Capital",
          subtitle: "Re:ゼロから始める異世界生活",
          series: "Re:Zero - Başka Bir Dünyada Sıfırdan Hayat",
          note:
            "Subaru'nun Lugunica başkentindeki ilk zaman döngüsünü anlatan açılış cildini Türkçeye çevirdim.",
          cover: "assets/rezero-cover.jpg",
          href: urls.mangaRezero
        }
      ]
    },
    experience: {
      eyebrow: "HAKKIMDA // DENEYİM VE ARAÇLAR",
      cap: "D",
      restTitle: "eneyim ve kullandığım araçlar.",
      copy:
        "Eğitim geçmişim, çalıştığım işler ve projelerimi geliştirirken kullandığım diller.",
      stackLabel: "KULLANDIĞIM DİLLER VE ARAÇLAR",
      timeline: [
        {
          period: "LİSANS · İNGİLİZCE C1",
          kind: "Eğitim",
          title: "Yeni Medya ve İletişim",
          summary:
            "Dijital yayıncılık, görsel tasarım ve medya üretimi üzerine lisans eğitimi aldım. İleri seviye (C1) İngilizceyle çalışıyorum."
        },
        {
          period: "2024-2025",
          kind: "Post-Prodüksiyon",
          title: "Prodüksiyon ve Altyazı Stajyeri",
          summary:
            "Stüdyo ortamında video kurgu işlerine destek verdim ve İngilizce-Türkçe altyazı çevirileri yaptım."
        },
        {
          period: "2025-GÜNÜMÜZ",
          kind: "Web & SEO",
          title: "Freelance Web ve Dijital Proje Yöneticisi",
          summary:
            "Markalar için hızlı açılan web siteleri kuruyor ve teknik SEO çalışmalarını yürütüyorum."
        },
        {
          period: "DEVAM EDİYOR",
          kind: "Açık Kaynak · Oyun · Yama",
          title: "Bağımsız Yazılım ve Oyun Yerelleştirme",
          summary:
            "Godot 4 ile Scarlet Survivors (Windows & Android), 2D/3D Gensokyo 1:1 atlası, Scarlet Savior görsel romanı, Umineko/Higurashi/RAIDOU Türkçe oyun yamaları ve açık kaynak masaüstü araçları geliştirdim."
        }
      ]
    },
    contact: {
      eyebrow: "İLETİŞİM // HESAPLAR VE KISA LİNKLER",
      title: "Bana Ulaş",
      copy:
        "Yazılım işleri, oyun/manga çevirileri veya soruların için aşağıdaki hesaplardan bana yazabilirsin.",
      routesTitle: "KISA LİNKLER (REMILYA.DEV)",
      footerNote: "REMILYA · BAĞIMSIZ YAZILIM, OYUN VE ÇEVİRİ",
      backTop: "Başa Dön ↑",
      socials: [
        {
          label: "GitHub",
          handle: "@Remilya",
          desc: "Umineko TR, Higurashi TR, RAIDOU TR ve açık kaynak kodlar",
          href: urls.github,
          icon: "i-gh"
        },
        {
          label: "X / Twitter",
          handle: "@Remilya356",
          desc: "Yama güncellemeleri ve geliştirici notları",
          href: urls.twitter,
          icon: "i-x-social"
        },
        {
          label: "LinkedIn",
          handle: "İlker Ağırkaya",
          desc: "Web projeleri, medya ve SEO",
          href: urls.linkedin,
          icon: "i-in"
        },
        {
          label: "itch.io",
          handle: "@remilya356",
          desc: "Scarlet Survivors (Win/APK), Scarlet Savior VN ve 3D modeller",
          href: urls.itchProfile,
          icon: "i-game"
        }
      ]
    }
  },
  ja: {
    meta: {
      title: "Remilya | Scarlet Survivors・オープンソース開発・ゲームローカライズ",
      description:
        "Godot 4で制作した東方紅魔郷二次創作弾幕サバイバー『Scarlet Survivors』（Windows・Android）、幻想郷1:1 2D/3Dアトラス、ローカルVOICEVOXツール、ゲームローカライズを手掛ける個人開発者Remilyaのポートフォリオ。",
      ogLocale: "ja_JP"
    },
    aria: {
      skipLink: "メインコンテンツへ移動",
      brandLink: "トップへ戻る",
      primaryNav: "メインナビゲーション",
      dotsNav: "ページセクション",
      localeSwitcher: "表示言語",
      languageChanged: "表示言語を日本語に切り替えました"
    },
    brandSubtitle: "開発 · ゲーム · ローカライズ",
    nav: {
      top: "ホーム",
      library: "作品",
      work: "ツール",
      translations: "",
      experience: "経歴",
      contact: "連絡先"
    },
    panelLabels: {
      top: "ホーム",
      library: "作品",
      work: "ツール",
      translations: "",
      experience: "経歴",
      contact: "連絡先"
    },
    hero: {
      kicker: "REMILYA // ソフトウェア · ゲーム · ローカライズ",
      lead:
        "Godot 4によるインディーゲーム、ローカル音声・デスクトップツール、ゲームローカライズを制作しています。",
      sub:
        "東方紅魔郷二次創作『Scarlet Survivors』（Windows / Android）、幻想郷 1:1 3Dアトラス、Ren'Py作品『Scarlet Savior』、オープンソースツールを開発。",
      ctaPrimary: "作品を見る",
      ctaSecondary: "GitHub",
      scrollHint: "スクロール または ↓ キーで進む",
      quickLinks: [
        { label: "Scarlet Survivors", href: urls.scarletSurvivorsItch, external: true },
        { label: "幻想郷 1:1 アトラス", href: urls.gensokyoAtlas, external: false },
        { label: "ひぐらし TR", href: urls.higurashiArchive, external: false },
        { label: "うみねこ TR", href: urls.uminekoArchive, external: false }
      ],
      medallionBadges: [
        { code: "Scarlet Survivors", label: "GODOT 4 · WIN / APK" },
        { code: "Gensokyo 1:1", label: "2D & 3D アトラス" },
        { code: "ひぐらし・うみねこ", label: "トルコ語ローカライズ" }
      ]
    },
    slices: {
      srTitle: "主要プロジェクト",
      compBanner: "プロジェクト一覧 // スライスを選択",
      compInspect: "開く",
      compLaunch: "開く ↗",
      compLaunchPrefix: "開く:",
      scarletPlayAria: "Scarlet Survivors - 公式16:9トレーラーを再生",
      scarletVideoTitle: "公式 16:9 トレーラー",
      ytPlayAria: "ひぐらしのなく頃に トルコ語パッチ - YouTube動画を再生",
      higuLangLabel: "テキスト言語",
      umiPlayAria: "うみねこのなく頃に トルコ語パッチ - 特別お茶会トレーラーを再生",
      umiLangLabel: "テキスト言語",
      items: [
        {
          k: 1,
          eyebrow: "01 // GODOT 4 弾幕サバイバー（WINDOWS & ANDROID）",
          cap: "S",
          restTitle: "carlet Survivors",
          fullTitle: "Scarlet Survivors",
          shortLabel: "Scarlet Survivors",
          compSub: "Godot 4 · Win / Android",
          desc:
            "東方紅魔郷を題材にGodot 4でゼロから制作した縦画面弾幕サバイバー二次創作ゲーム。Pythonによる決定論的ピクセル/ボクセル生成（AI画像・音楽不使用）、プレイアブル12キャラ、全7ステージ、31種のスペルカード、日本語・英語・トルコ語に標準対応。",
          pills: [
            "12キャラ · 全7面 · 31スペルカード",
            "Godot 4 (GDScript/C#) · AI素材不使用",
            "Windows x64 & Android APK (JP / EN / TR)"
          ],
          primaryLabel: "itch.ioで無料プレイ →",
          primaryHref: urls.scarletSurvivorsItch,
          primaryExternal: true,
          secondaryLabel: "16:9トレーラーを見る →",
          secondaryHref: urls.scarletSurvivorsTrailer,
          secondaryExternal: true
        },
        {
          k: 2,
          eyebrow: "02 // 2D地図 & THREE.JS 3Dアトラス",
          cap: "G",
          restTitle: "ensokyo 1:1 Interactive Atlas",
          fullTitle: "Gensokyo 1:1 Interactive Atlas",
          shortLabel: "Gensokyo 1:1",
          compSub: "2D & 3D マップ",
          desc:
            "東方Projectの幻想郷を2D絵巻マップとThree.js 3D地形の両方で探索できるインタラクティブ・アトラス。各スポット解説、キャラクター図鑑、二点間の移動ルート・所要時間計算機能を搭載。",
          pills: [
            "2Dスクロール & Three.js 3D",
            "114+エリア & 143キャラ収録",
            "ルート・移動時間計算"
          ],
          primaryLabel: "remilya.dev/Gensokyo を開く →",
          primaryHref: urls.gensokyoAtlas,
          primaryExternal: false,
          secondaryLabel: "素材リポジトリ (GitHub) →",
          secondaryHref: urls.repoGensokyoAssets,
          secondaryExternal: true
        },
        {
          k: 3,
          eyebrow: "03 // 全10作対応 トルコ語ローカライズ",
          cap: "H",
          restTitle: "igurashi When They Cry TR",
          fullTitle: "Higurashi When They Cry TR",
          shortLabel: "Higurashi TR",
          compSub: "全10作 · トルコ語パッチ",
          desc:
            "『ひぐらしのなく頃に 奉・礼・奉+』全10作品をカバーする07th-Mod互換のトルコ語パッチ。ゲーム内画像ローカライズとワンクリック導入インストーラーを同梱。",
          primaryLabel: "remilya.dev/Higurashi を開く →",
          primaryHref: urls.higurashiArchive,
          primaryExternal: false,
          secondaryLabel: "GitHub / インストーラー →",
          secondaryHref: urls.repoHigurashi,
          secondaryExternal: true
        },
        {
          k: 4,
          eyebrow: "04 // EP1〜8 完全対応 トルコ語ローカライズ",
          cap: "U",
          restTitle: "mineko When They Cry TR",
          fullTitle: "Umineko When They Cry TR",
          shortLabel: "Umineko TR",
          compSub: "全8エピソード · トルコ語パッチ",
          desc:
            "『うみねこのなく頃に』出題編・展開編（EP1〜8）を完全翻訳した07th-Mod互換トルコ語パッチ。漢字対応フォント、UI・謎解き画像翻訳、ワンクリック導入ツールを搭載。",
          primaryLabel: "remilya.dev/Umineko を開く →",
          primaryHref: urls.uminekoArchive,
          primaryExternal: false,
          secondaryLabel: "GitHub / インストーラー →",
          secondaryHref: urls.repoUmineko,
          secondaryExternal: true
        },
        {
          k: 5,
          eyebrow: "05 // PC版 · 100% トルコ語ローカライズ",
          cap: "R",
          restTitle: "AIDOU Remastered TR",
          fullTitle: "RAIDOU Remastered TR",
          shortLabel: "RAIDOU TR",
          compSub: "100% トルコ語パッチ",
          desc:
            "PC版向けの100%トルコ語ローカライズパッチ。専用フォントと全ゲームテキストをワンクリックで導入できます。",
          primaryLabel: "GitHub / ダウンロード →",
          primaryHref: urls.repoRaidou,
          primaryExternal: true,
          secondaryLabel: "/Raidou 短縮リンク",
          secondaryHref: urls.shortRaidou,
          secondaryExternal: false
        },
        {
          k: 6,
          eyebrow: "06 // 東方サイコロジカルホラー ノベルゲーム",
          cap: "S",
          restTitle: "carlet Savior",
          fullTitle: "Scarlet Savior",
          shortLabel: "Scarlet Savior",
          compSub: "Ren'Py ノベルゲーム",
          badge: "Ren'Py ノベルゲーム",
          desc:
            "紅魔館を舞台にRen'Pyで制作したサイコロジカルホラー・ビジュアルノベル。日本語フルボイスに加え、日本語・英語・トルコ語の字幕切替に対応。",
          primaryLabel: "itch.ioでダウンロード →",
          primaryHref: urls.itchScarlet,
          primaryExternal: true,
          secondaryLabel: "3Dゲーム素材を見る →",
          secondaryHref: urls.itchProfile,
          secondaryExternal: true
        }
      ]
    },
    work: {
      eyebrow: "オープンソース // GITHUB リポジトリ",
      cap: "オ",
      restTitle: "ープンソースツール",
      copy:
        "ローカルNode.js音声ブリッジ、バニラJSライブラリ、Pythonデスクトップユーティリティ、ブラウザ拡張機能。",
      projects: [
        {
          index: "01",
          accent: "amethyst",
          title: "VOICEVOX Expressive TTS",
          type: "NODE.JS · ローカル TTS ブリッジ",
          summary:
            "ローカルVOICEVOXをSillyTavern・Project AIRI・AIVTuber向けのOpenAI互換TTSエンドポイントとして公開するブリッジ。英語・トルコ語のカタカナ変換と430種以上の表現フレーズに対応。",
          stack: ["Node.js", "VOICEVOX", "TR/EN カタカナ変換", "SillyTavern & AIRI"],
          icon: "i-voice",
          links: [
            { label: "GitHub →", href: urls.repoVoicevox, external: true },
            { label: "/Voicevox", href: urls.shortVoicevox, external: false }
          ]
        },
        {
          index: "02",
          accent: "lavender",
          title: "Scroll-Hero",
          type: "VANILLA JS/ESM · CANVAS プレイヤー",
          summary:
            "FFmpegで抽出したWebP連番フレームを、スクロール連動のHTML5 Canvasバナーとして再生する軽量ライブラリ。外部依存なしの純JavaScript製で、視覚効果の軽減設定にも対応。",
          stack: ["JavaScript (ESM)", "HTML5 Canvas", "WebP連番", "FFmpeg CLI"],
          icon: "i-reel",
          links: [
            { label: "GitHub →", href: urls.repoScrollHero, external: true },
            { label: "/ScrollHero", href: urls.shortScrollHero, external: false }
          ]
        },
        {
          index: "03",
          accent: "violet",
          title: "Watermark-Deksmo",
          type: "PYTHON · デスクトップアプリ (v1.2)",
          summary:
            "大量の画像フォルダへ一括で透かし（ウォーターマーク）を配置できるPython製デスクトップアプリ。プレビュー上で位置をクリック指定し、ページごとのサイズ設定をJSONで保存できます。",
          stack: ["Python 3.10+", "CustomTkinter", "Pillow", "PyInstaller"],
          logo: "assets/logos/watermark-deksmo.webp",
          links: [
            { label: "GitHub →", href: urls.repoWatermark, external: true },
            { label: "/Watermark", href: urls.shortWatermark, external: false }
          ]
        },
        {
          index: "04",
          accent: "orchid",
          title: "Deksmo WebGrab",
          type: "MANIFEST V3 · ブラウザ拡張機能 (v1.3)",
          summary:
            "Webギャラリーの画像を高解像度でフィルタリングし、ドラッグ＆ドロップで並び替えてPDFやZIPアーカイブとして整理できるChrome/Edge向け拡張機能。",
          stack: ["JavaScript", "Manifest V3", "PDF整理", "ZIP一括出力"],
          logo: "assets/logos/deksmo-webgrab.png",
          links: [
            { label: "GitHub →", href: urls.repoScrap, external: true },
            { label: "/WebGrab", href: urls.shortWebGrab, external: false }
          ]
        }
      ]
    },
    manga: {
      eyebrow: "",
      cap: "",
      restTitle: "",
      copy: "",
      readLabel: "",
      roleLabel: "",
      prevAria: "",
      nextAria: "",
      items: []
    },
    experience: {
      eyebrow: "経歴 // 実績と使用技術",
      cap: "経",
      restTitle: "歴・使用技術",
      copy:
        "学歴・実務経験と、開発で日常的に使用している言語・エンジン・ツール。",
      stackLabel: "使用言語・エンジン・ツール",
      timeline: [
        {
          period: "学士 · 英語 C1",
          kind: "学歴",
          title: "ニューメディア＆コミュニケーション学科",
          summary:
            "デジタルパブリッシング、ビジュアルデザイン、メディア制作を専攻。英語（C1レベル）での業務に対応。"
        },
        {
          period: "2024-2025",
          kind: "ポストプロダクション",
          title: "映像制作・字幕インターン",
          summary:
            "スタジオでの映像編集ワークフロー補助および英語〜トルコ語の字幕翻訳を担当。"
        },
        {
          period: "2025-現在",
          kind: "Web & SEO",
          title: "フリーランス Web・デジタルPM",
          summary:
            "クライアント向けに高速な静的・フロントエンドサイトを構築し、テクニカルSEOを運用。"
        },
        {
          period: "進行中",
          kind: "OSS · ゲーム · ローカライズ",
          title: "個人ゲーム開発・ソフトウェア・ローカライズ",
          summary:
            "Godot 4による東方二次創作『Scarlet Survivors』（Windows / Android）、幻想郷1:1アトラス、Ren'Py作品『Scarlet Savior』、ひぐらし・うみねこ・RAIDOUのトルコ語パッチおよびOSSツールを開発。"
        }
      ]
    },
    contact: {
      eyebrow: "連絡先 // リンク & 短縮URL",
      title: "お問い合わせ",
      copy:
        "ソフトウェア開発、ゲーム制作、ローカライズに関するご相談やご連絡は下記アカウントよりお気軽にどうぞ。",
      routesTitle: "短縮リンク (REMILYA.DEV)",
      footerNote: "REMILYA · 個人ソフトウェア・ゲーム開発・ローカライズ",
      backTop: "トップへ戻る ↑",
      socials: [
        {
          label: "GitHub",
          handle: "@Remilya",
          desc: "ひぐらしTR・うみねこTR・RAIDOU TR・OSSリポジトリ",
          href: urls.github,
          icon: "i-gh"
        },
        {
          label: "X / Twitter",
          handle: "@Remilya356",
          desc: "開発進捗・アップデート情報",
          href: urls.twitter,
          icon: "i-x-social"
        },
        {
          label: "LinkedIn",
          handle: "İlker Ağırkaya",
          desc: "Web制作・メディア・SEO",
          href: urls.linkedin,
          icon: "i-in"
        },
        {
          label: "itch.io",
          handle: "@remilya356",
          desc: "Scarlet Survivors (Win/APK)・Scarlet Savior VN・3D素材",
          href: urls.itchProfile,
          icon: "i-game"
        }
      ]
    }
  }
};
