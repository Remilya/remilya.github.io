export const STORAGE_KEY = "remilya-locale";
export const SUPPORTED_LOCALES = ["en", "tr"];

export const urls = {
  github: "https://github.com/Remilya",
  linkedin: "https://tr.linkedin.com/in/ilker-agirkaya",
  twitter: "https://x.com/Remilya356",
  itchProfile: "https://remilya356.itch.io/",
  gensokyoAtlas: "https://remilya.dev/Gensokyo/",
  repoGensokyoAssets: "https://github.com/Remilya/gensokyo-assets",
  higurashiArchive: "https://remilya.dev/Higurashi/",
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

export const stackGroups = [
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
  { label: "/Gensokyo", href: urls.gensokyoAtlas, external: false },
  { label: "/Higurashi", href: urls.higurashiArchive, external: false },
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
      title: "Remilya | Open-Source Tools, Touhou Projects & Turkish Game Patches",
      description:
        "Independent developer and localizer building local VOICEVOX tools, desktop apps, the 2D/3D Gensokyo 1:1 Atlas, Ren'Py horror visual novel Scarlet Savior, and Turkish game patches for Higurashi and RAIDOU Remastered.",
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
        "Building local voice and desktop tools, Touhou games, and full Turkish game & manga localizations.",
      sub:
        "Turkish game and manga patches, a psychological horror visual novel in Ren'Py, and open-source Python and Node.js tools.",
      ctaPrimary: "Browse Projects",
      ctaSecondary: "GitHub Profile",
      scrollHint: "Scroll down or press ↓",
      quickLinks: [
        { label: "Gensokyo 1:1 Atlas", href: urls.gensokyoAtlas, external: false },
        { label: "Higurashi TR", href: urls.higurashiArchive, external: false },
        { label: "RAIDOU TR Patch", href: urls.repoRaidou, external: true }
      ],
      medallionBadges: [
        { code: "Higurashi & Raidou", label: "Turkish Patches" },
        { code: "Gensokyo 1:1", label: "2D & 3D Atlas" },
        { code: "Scarlet Savior", label: "Ren'Py VN" }
      ]
    },
    slices: {
      srTitle: "Featured Projects",
      compBanner: "PROJECT OVERVIEW // PICK A SLICE",
      compInspect: "Open Slice",
      compLaunch: "Open ↗",
      compLaunchPrefix: "Open",
      ytPlayAria: "Higurashi When They Cry TR - Play YouTube video",
      higuLangLabel: "Script Language",
      items: [
        {
          k: 1,
          eyebrow: "01 // 2D MAP & THREE.JS 3D ATLAS",
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
          k: 2,
          eyebrow: "02 // CHAPTERS 1-10 COMPLETE TURKISH PATCH",
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
          k: 3,
          eyebrow: "03 // PC · 100% TURKISH PATCH",
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
          k: 4,
          eyebrow: "04 // TOUHOU PSYCHOLOGICAL HORROR VISUAL NOVEL",
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
            "Turkish patches for the Higurashi series and RAIDOU Remastered, Scarlet Savior on Ren'Py, the Gensokyo 1:1 Atlas, and open-source desktop tools."
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
          desc: "Higurashi TR, RAIDOU TR & open-source repos",
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
          desc: "Scarlet Savior VN & 3D game assets",
          href: urls.itchProfile,
          icon: "i-game"
        }
      ]
    }
  },
  tr: {
    meta: {
      title: "Remilya | Açık Kaynak Araçlar, Touhou Projeleri ve Türkçe Oyun Yamaları",
      description:
        "Yerel VOICEVOX ses araçları, Python/JS masaüstü uygulamaları, 2D/3D Gensokyo 1:1 Atlası, Ren'Py görsel romanı Scarlet Savior ve Higurashi ile RAIDOU Remastered Türkçe oyun yamaları.",
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
        "Yerel ses ve masaüstü araçları yazıyor, Touhou projeleri geliştirip oyun ve mangaları Türkçeye çeviriyorum.",
      sub:
        "Hazırladığım Türkçe oyun ve manga yamaları, Ren'Py görsel romanım ve açık kaynak Python/Node.js araçlarım burada.",
      ctaPrimary: "Projelere Bak",
      ctaSecondary: "GitHub Profili",
      scrollHint: "Aşağı kaydır veya ↓ tuşuna bas",
      quickLinks: [
        { label: "Gensokyo 1:1 Atlas", href: urls.gensokyoAtlas, external: false },
        { label: "Higurashi TR", href: urls.higurashiArchive, external: false },
        { label: "RAIDOU TR Yama", href: urls.repoRaidou, external: true }
      ],
      medallionBadges: [
        { code: "Higurashi & Raidou", label: "TÜRKÇE YAMA" },
        { code: "Gensokyo 1:1", label: "2D & 3D ATLAS" },
        { code: "Scarlet Savior", label: "GÖRSEL ROMAN" }
      ]
    },
    slices: {
      srTitle: "Öne Çıkan Projeler",
      compBanner: "TÜM PROJELER // BİR DİLİM SEÇ",
      compInspect: "Dilimi Aç",
      compLaunch: "Aç ↗",
      compLaunchPrefix: "Aç:",
      ytPlayAria: "Higurashi When They Cry TR - YouTube videosunu oynat",
      higuLangLabel: "Metin Dili",
      items: [
        {
          k: 1,
          eyebrow: "01 // 2D HARİTA VE THREE.JS 3D ATLAS",
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
          k: 2,
          eyebrow: "02 // BÖLÜM 1-10 TAM SERİ TÜRKÇE YAMA",
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
          k: 3,
          eyebrow: "03 // PC · %100 TÜRKÇE YAMA",
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
          k: 4,
          eyebrow: "04 // TOUHOU PSİKOLOJİK KORKU GÖRSEL ROMANI",
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
            "Higurashi serisi ve RAIDOU için Türkçe oyun yamaları, Scarlet Savior görsel romanı, Gensokyo atlası ve açık kaynak masaüstü araçları geliştirdim."
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
          desc: "Higurashi TR, RAIDOU TR ve açık kaynak kodlar",
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
          desc: "Scarlet Savior VN ve 3D oyun modelleri",
          href: urls.itchProfile,
          icon: "i-game"
        }
      ]
    }
  }
};
