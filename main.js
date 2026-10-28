const STORAGE_KEY = "remilya-locale";
const SUPPORTED_LOCALES = ["en", "tr"];

const urls = {
  github: "https://github.com/Remilya",
  linkedin: "https://tr.linkedin.com/in/ilker-agirkaya",
  twitter: "https://x.com/Remilya356",
  gensokyoAtlas: "https://remilya.dev/Gensokyo/",
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
  repoHigurashi: "https://github.com/Remilya/higurashi-scripting-tr"
};

const content = {
  en: {
    meta: {
      title: "Remilya | AI Tools, Game & Manga Localization",
      description:
        "Remilya builds local-first AI tools, indie games, and Turkish game and manga localizations including Scarlet Savior, RAIDOU Remastered TR, Higurashi, and Umineko.",
      ogLocale: "en_US"
    },
    aria: {
      brandLink: "Return to surface",
      primaryNav: "Main directory",
      localeSwitcher: "System language",
      languageChanged: "Language changed to English"
    },
    brandSubtitle: "Software · Games · Localization",
    nav: {
      about: "About",
      library: "Library",
      work: "Programs",
      translations: "Manga",
      capabilities: "Focus",
      experience: "Experience",
      contact: "Contact"
    },
    hero: {
      title: "Remilya.dev"
    },
    about: {
      eyebrow: "About",
      title: "Building tools, making games, and translating the series I love into Turkish.",
      introLabel: "REMILYA",
      introParagraphs: [
        "I write desktop utilities, local AI tools, and browser extensions, while building Touhou fangames and translating visual novels and manga into Turkish.",
        "With a background in New Media and Communication, this site is where I share the open-source tools and localization patches I build."
      ],
      cards: [
        {
          index: "01",
          accent: "",
          title: "Software & Local AI",
          copy:
            "Desktop tools and extensions built with Python, FastAPI, React, OCR pipelines, and local LLM/TTS models."
        },
        {
          index: "02",
          accent: "panel--cyan",
          title: "Games & Localization",
          copy:
            "Unpacking game archives to localize textures, fonts, and thousands of dialogue lines into Turkish, alongside indie game and 3D web projects."
        },
        {
          index: "03",
          accent: "panel--magenta",
          title: "Web & Media",
          copy:
            "Frontend interfaces, technical SEO, subtitle and video workflows, and zero-dependency web components."
        }
      ]
    },
    librarySection: {
      eyebrow: "Library",
      title: "Games, Atlas & Turkish Patches",
      copy: "Select a card to launch the project or open the patch archive."
    },
    libraryItems: [
      {
        title: "Gensokyo 1:1 Interactive Atlas",
        badge: "REMILYA.DEV/GENSOKYO · 3D ATLAS",
        desc: "1:1 scale interactive cartographic atlas and 3D world experience of Gensokyo.",
        action: "Open remilya.dev/Gensokyo →",
        cover: "assets/gensokyo-cover.webp",
        width: 1024,
        height: 683,
        href: urls.gensokyoAtlas
      },
      {
        title: "Higurashi When They Cry TR",
        badge: "REMILYA.DEV/HIGURASHI · ARCHIVE",
        desc: "Turkish localization patch, setup guide, and trilingual (TR/EN/JP) quote search archive for Higurashi Hou & Hou+.",
        action: "Open remilya.dev/Higurashi →",
        cover: "assets/higurashi-cover.webp",
        width: 460,
        height: 215,
        href: urls.higurashiArchive
      },
      {
        title: "Scarlet Savior",
        badge: "TOUHOU FANGAME · PC",
        desc: "2D Touhou action and bullet-hell fangame published on itch.io.",
        action: "Play on itch.io →",
        cover: "assets/scarlet-savior-cover.webp",
        width: 315,
        height: 250,
        href: urls.itchScarlet
      },
      {
        title: "RAIDOU Remastered TR",
        badge: "TURKISH PATCH · 100%",
        desc: "100% Turkish localization patch covering 20,183 dialogue lines and 103 in-game textures.",
        action: "GitHub / Download →",
        cover: "assets/raidou-cover.webp",
        width: 460,
        height: 215,
        href: urls.repoRaidou
      }
    ],
    work: {
      eyebrow: "Programs / Open Source",
      title: "Public tools on GitHub.",
      copy:
        "Each entry states what the program does — full documentation and source code live on GitHub."
    },
    supportProjects: [
      {
        title: "VOICEVOX Expressive TTS",
        type: "LOCAL AI · TTS",
        summary:
          "Local toolkit that turns VOICEVOX into an OpenAI-compatible TTS endpoint for AI companions and SillyTavern.",
        stack: ["Python", "VOICEVOX", "OpenAI TTS API", "SillyTavern"],
        links: [
          { label: "GitHub →", href: urls.repoVoicevox },
          { label: "/Voicevox", href: urls.shortVoicevox }
        ],
        glyph: "TTS"
      },
      {
        title: "Scroll-Hero",
        type: "JAVASCRIPT · CANVAS ENGINE",
        summary:
          "Zero-dependency engine that turns a sequence of WebP video frames into a sticky, scroll-driven canvas hero banner.",
        stack: ["JavaScript", "HTML5 Canvas", "WebP", "FFmpeg"],
        links: [
          { label: "GitHub →", href: urls.repoScrollHero },
          { label: "/ScrollHero", href: urls.shortScrollHero }
        ],
        glyph: "SCR"
      },
      {
        title: "Watermark-Deksmo",
        type: "PYTHON · DESKTOP",
        summary:
          "Python desktop utility for batch watermarking manga and image archives.",
        stack: ["Python", "CustomTkinter", "Pillow", "PyInstaller"],
        links: [
          { label: "GitHub →", href: urls.repoWatermark },
          { label: "/Watermark", href: urls.shortWatermark }
        ],
        logo: "assets/logos/watermark-deksmo.png"
      },
      {
        title: "Deksmo WebGrab",
        type: "JAVASCRIPT · EXTENSION",
        summary:
          "Browser extension for batch capturing web images and exporting them into PDF or ZIP packages.",
        stack: ["JavaScript", "Manifest V3", "PDF export", "ZIP export"],
        links: [
          { label: "GitHub →", href: urls.repoScrap },
          { label: "/WebGrab", href: urls.shortWebGrab }
        ],
        logo: "assets/logos/deksmo-webgrab.png"
      }
    ],
    capabilitiesSection: {
      eyebrow: "What I Do",
      title: "Focus Areas"
    },
    capabilities: [
      {
        title: "Local AI & Automation",
        meta: "01",
        copy:
          "OCR pipelines, local voice synthesis (VOICEVOX), and batch image/text processing utilities that run directly on your machine.",
        tags: ["OCR", "Local LLMs", "VOICEVOX TTS", "Python"]
      },
      {
        title: "Web & Desktop Interfaces",
        meta: "02",
        copy:
          "Fast static sites, browser extensions, interactive Canvas/WebGL scenes, and desktop tools.",
        tags: ["React", "JavaScript", "WebGL / Canvas", "Desktop UI"]
      },
      {
        title: "Game & Manga Localization",
        meta: "03",
        copy:
          "Translating Japanese and English works into Turkish, editing in-game textures and fonts, and packaging patch installers.",
        tags: ["Game Modding", "Localization", "Subtitles", "SEO"]
      }
    ],
    stack: {
      eyebrow: "Tech Stack",
      copy: "Languages and tools used across these projects."
    },
    experience: {
      eyebrow: "Experience",
      title: "Background & Education",
      workEyebrow: "Work",
      workTitle: "Experience",
      terminalTitle: "work.log",
      trainingEyebrow: "Education",
      trainingTitle: "Education & Certificates",
      trainingList: [
        "AI applications and foundational AI training",
        "Local LLM workflows and practical AI experimentation",
        "Web programming and frontend development",
        "Advanced graphic design production",
        "Social media and digital communication",
        "Media and press publishing",
        "Diction and effective speaking",
        "KVKK and digital compliance basics",
        "English C1"
      ]
    },
    timeline: [
      {
        period: "2025 - Present",
        title: "Freelance Web & Digital Project Manager",
        kind: "Web development / SEO",
        summary:
          "Building websites, designing interfaces, and handling technical SEO for client brands."
      },
      {
        period: "2024 - 2025",
        title: "Production and Subtitle Intern",
        kind: "Post-production / Localization",
        summary:
          "Handled video post-production tasks and English-to-Turkish subtitle translations."
      },
    ],
    translationsSection: {
      eyebrow: "Manga Translations",
      title: "Umineko & Re:Zero",
      copy: "Turkish manga translations for Umineko: When They Cry and Re:Zero \u2014 personally translated and published.",
      readLabel: "Read",
      roleLabel: "Translator"
    },
    translations: [
      {
        ep: "Episode 1",
        title: "Legend of the Golden Witch",
        subtitle: "\u30A6\u30DF\u30CD\u30B3\u306E\u30CA\u30AF\u9803\u306B",
        cover: "assets/ep1-cover.webp",
        href: "https://manga-tr.com/manga-umineko-no-naku-koro-ni-episode-1-legend-of-the-golden-witch.html"
      },
      {
        ep: "Episode 2",
        title: "Turn of the Golden Witch",
        subtitle: "\u30A6\u30DF\u30CD\u30B3\u306E\u30CA\u30AF\u9803\u306B",
        cover: "assets/ep2-cover.webp",
        href: "https://manga-tr.com/manga-umineko-no-naku-koro-ni-episode-2-turn-of-the-golden-witch.html"
      },
      {
        ep: "Arc 1",
        title: "A Day in the Capital",
        subtitle: "Re:\u30BC\u30ED\u304B\u3089\u59CB\u3081\u308B\u7570\u4E16\u754C\u751F\u6D3B",
        cover: "assets/rezero-cover.jpg",
        href: "https://manga-tr.com/manga-rezero-kara-hajimeru-isekai-seikatsu.html"
      }
    ],
    contact: {
      eyebrow: "Contact",
      title: "Get in Touch",
      copy: "Reach out on any of the platforms below for projects, translations, or collaborations."
    },
    socialLinks: [
      { label: "LinkedIn", href: urls.linkedin, icon: "bi-linkedin" },
      { label: "GitHub", href: urls.github, icon: "bi-github" },
      { label: "X / Twitter", href: urls.twitter, icon: "bi-twitter-x" }
    ],
    footer: `<p class="site-footer-signature"><span>By </span><span class="site-footer-signature-brand">REMILYA</span></p>`
  },
  tr: {
    meta: {
      title: "Remilya | YZ Araçları, Oyun & Manga Yerelleştirme",
      description:
        "Remilya; yerel öncelikli yapay zeka araçları, bağımsız oyunlar ve Scarlet Savior, RAIDOU Remastered TR, Higurashi, Umineko Türkçe çevirilerini geliştiren bir yazılım üreticisidir.",
      ogLocale: "tr_TR"
    },
    aria: {
      brandLink: "Başa dön",
      primaryNav: "Ana gezinme",
      localeSwitcher: "Dil seçici",
      languageChanged: "Dil Türkçe olarak değiştirildi"
    },
    brandSubtitle: "Yazılım · Oyun · Çeviri",
    nav: {
      about: "Hakkımda",
      library: "Kitaplık",
      work: "Programlar",
      translations: "Manga",
      capabilities: "Uğraşlar",
      experience: "Deneyim",
      contact: "İletişim"
    },
    hero: {
      title: "Remilya.dev"
    },
    about: {
      eyebrow: "Hakkımda",
      title: "Araçlar geliştiriyor, oyun yapıyor ve sevdiğim serileri Türkçeye çeviriyorum.",
      introLabel: "REMILYA",
      introParagraphs: [
        "Masaüstü programları, yerel yapay zeka araçları ve tarayıcı eklentileri yazıyorum; boş vaktimde Touhou oyunları yapıyor, görsel roman ve mangaları Türkçeye çeviriyorum.",
        "Yeni Medya ve İletişim mezunuyum. Kendi işimi kolaylaştırmak için yazdığım açık kaynak araçları ve tamamladığım çeviri yamalarını burada paylaşıyorum."
      ],
      cards: [
        {
          index: "01",
          accent: "",
          title: "Yazılım & Yerel YZ",
          copy:
            "Python, FastAPI, React, OCR, yerel LLM ve ses (TTS) modelleriyle doğrudan bilgisayarda çalışan pratik araçlar."
        },
        {
          index: "02",
          accent: "panel--cyan",
          title: "Oyun & Çeviri Yamaları",
          copy:
            "Oyun dosyalarını açıp doku, font ve binlerce satır diyaloğu Türkçeye aktarma; bağımsız oyun ve 3D web haritası geliştirme."
        },
        {
          index: "03",
          accent: "panel--magenta",
          title: "Web & Medya",
          copy:
            "Arayüz tasarımı, teknik SEO, video/altyazı kurgusu ve sıfır bağımlılıklı web bileşenleri."
        }
      ]
    },
    librarySection: {
      eyebrow: "Kitaplık",
      title: "Oyunlar, Atlas ve Türkçe Yamalar",
      copy: "Projeyi açmak veya yama arşivine gitmek için bir kart seç."
    },
    libraryItems: [
      {
        title: "Gensokyo 1:1 Interactive Atlas",
        badge: "REMILYA.DEV/GENSOKYO · 3D ATLAS",
        desc: "Gensokyo'nun 1:1 ölçekli interaktif kartografik atlası ve 3D dünya deneyimi.",
        action: "remilya.dev/Gensokyo →",
        cover: "assets/gensokyo-cover.webp",
        width: 1024,
        height: 683,
        href: urls.gensokyoAtlas
      },
      {
        title: "Higurashi When They Cry TR",
        badge: "REMILYA.DEV/HIGURASHI · ARŞİV",
        desc: "Higurashi Hou ve Hou+ Türkçe yerelleştirme yaması, kurulum rehberi ve üç dilli (TR/EN/JP) replik arama arşivi.",
        action: "remilya.dev/Higurashi →",
        cover: "assets/higurashi-cover.webp",
        width: 460,
        height: 215,
        href: urls.higurashiArchive
      },
      {
        title: "Scarlet Savior",
        badge: "TOUHOU FANGAME · PC",
        desc: "itch.io üzerinde yayınlanan iki boyutlu Touhou aksiyon ve bullet-hell oyunu.",
        action: "itch.io'da Oyna →",
        cover: "assets/scarlet-savior-cover.webp",
        width: 315,
        height: 250,
        href: urls.itchScarlet
      },
      {
        title: "RAIDOU Remastered TR",
        badge: "TÜRKÇE YAMA · %100",
        desc: "20.183 satır diyalog/metin ve 103 oyun içi dokuyu kapsayan %100 Türkçe yama.",
        action: "GitHub / İndir →",
        cover: "assets/raidou-cover.webp",
        width: 460,
        height: 215,
        href: urls.repoRaidou
      }
    ],
    work: {
      eyebrow: "Programlar / Açık Kaynak",
      title: "GitHub'daki açık kaynak araçlar.",
      copy:
        "Her kart sadece programın ne yaptığını yazar — detaylar ve kaynak kodları GitHub'da."
    },
    supportProjects: [
      {
        title: "VOICEVOX Expressive TTS",
        type: "YEREL YZ · TTS",
        summary:
          "VOICEVOX ses motorunu yapay zeka karakterleri ve SillyTavern için OpenAI uyumlu yerel TTS servisine dönüştüren araç.",
        stack: ["Python", "VOICEVOX", "OpenAI TTS API", "SillyTavern"],
        links: [
          { label: "GitHub →", href: urls.repoVoicevox },
          { label: "/Voicevox", href: urls.shortVoicevox }
        ],
        glyph: "TTS"
      },
      {
        title: "Scroll-Hero",
        type: "JAVASCRIPT · CANVAS MOTORU",
        summary:
          "Videodan çıkarılan WebP karelerini sıfır bağımlılıkla kaydırma odaklı (scroll-driven) canvas hero animasyonuna dönüştüren açık kaynak paket.",
        stack: ["JavaScript", "HTML5 Canvas", "WebP", "FFmpeg"],
        links: [
          { label: "GitHub →", href: urls.repoScrollHero },
          { label: "/ScrollHero", href: urls.shortScrollHero }
        ],
        glyph: "SCR"
      },
      {
        title: "Watermark-Deksmo",
        type: "PYTHON · MASAÜSTÜ",
        summary:
          "Görsel ve manga arşivlerine toplu olarak filigran (watermark) ekleyen Python masaüstü aracı.",
        stack: ["Python", "CustomTkinter", "Pillow", "PyInstaller"],
        links: [
          { label: "GitHub →", href: urls.repoWatermark },
          { label: "/Watermark", href: urls.shortWatermark }
        ],
        logo: "assets/logos/watermark-deksmo.png"
      },
      {
        title: "Deksmo WebGrab",
        type: "JAVASCRIPT · EKLENTİ",
        summary:
          "Web sitelerindeki görselleri topluca indirip sıralayarak PDF veya ZIP olarak dışa aktaran tarayıcı eklentisi.",
        stack: ["JavaScript", "Manifest V3", "PDF dışa aktarma", "ZIP dışa aktarma"],
        links: [
          { label: "GitHub →", href: urls.repoScrap },
          { label: "/WebGrab", href: urls.shortWebGrab }
        ],
        logo: "assets/logos/deksmo-webgrab.png"
      }
    ],
    capabilitiesSection: {
      eyebrow: "Neler Yapıyorum",
      title: "Uğraştığım Alanlar"
    },
    capabilities: [
      {
        title: "Yerel YZ ve Otomasyon",
        meta: "01",
        copy:
          "Görüntüden metin okuma (OCR), yerel ses sentezi (VOICEVOX) ve toplu görsel/metin işleme araçları.",
        tags: ["OCR", "Yerel LLM", "VOICEVOX TTS", "Python"]
      },
      {
        title: "Web ve Masaüstü Arayüzleri",
        meta: "02",
        copy:
          "Hızlı açılan statik siteler, tarayıcı eklentileri, Canvas/WebGL sahneleri ve masaüstü arayüzleri.",
        tags: ["React", "JavaScript", "WebGL / Canvas", "Masaüstü UI"]
      },
      {
        title: "Oyun & Manga Yerelleştirme",
        meta: "03",
        copy:
          "Japonca ve İngilizce eserlerin çevirisi, oyun içi doku/font düzenlemesi ve kurulum araçları.",
        tags: ["Oyun Modlama", "Lokalizasyon", "Altyazı", "SEO"]
      }
    ],
    stack: {
      eyebrow: "Teknolojiler",
      copy: "Projelerde kullandığım diller ve araçlar."
    },
    experience: {
      eyebrow: "Deneyim",
      title: "Geçmiş ve Eğitim",
      workEyebrow: "Çalışmalar",
      workTitle: "İş Deneyimi",
      terminalTitle: "is.log",
      trainingEyebrow: "Eğitim",
      trainingTitle: "Eğitim ve Sertifikalar",
      trainingList: [
        "Yapay zeka uygulamaları ve temel yapay zeka eğitimleri",
        "Yerel LLM'ler ve pratik yapay zeka çalışmaları",
        "Web programlama ve frontend geliştirme",
        "İleri düzey grafik tasarım üretimi",
        "Sosyal medya ve dijital iletişim",
        "Medya ve basın yayıncılığı",
        "Diksiyon ve etkili konuşma",
        "KVKK ve dijital uyum temelleri",
        "İngilizce C1"
      ]
    },
    timeline: [
      {
        period: "2025 - Günümüz",
        title: "Freelance Web & Dijital Proje Yöneticisi",
        kind: "Web geliştirme / SEO",
        summary:
          "Markalar için web siteleri kuruyor, arayüz tasarımı ve teknik SEO çalışmalarını yürütüyorum."
      },
      {
        period: "2024 - 2025",
        title: "Prodüksiyon ve Altyazı Stajyeri",
        kind: "Post-prodüksiyon / Çeviri",
        summary:
          "Kurumsal post-prodüksiyon süreçlerinde video kurgu desteği ve İngilizce-Türkçe altyazı çevirileri yaptım."
      },
    ],
    translationsSection: {
      eyebrow: "Manga Çevirileri",
      title: "Umineko & Re:Zero",
      copy: "Kendi çevirip yayına aldığım Umineko: When They Cry ve Re:Zero Türkçe manga serileri.",
      readLabel: "Oku",
      roleLabel: "Çevirmen"
    },
    translations: [
      {
        ep: "Episode 1",
        title: "Legend of the Golden Witch",
        subtitle: "\u30A6\u30DF\u30CD\u30B3\u306E\u30CA\u30AF\u9803\u306B",
        cover: "assets/ep1-cover.webp",
        href: "https://manga-tr.com/manga-umineko-no-naku-koro-ni-episode-1-legend-of-the-golden-witch.html"
      },
      {
        ep: "Episode 2",
        title: "Turn of the Golden Witch",
        subtitle: "\u30A6\u30DF\u30CD\u30B3\u306E\u30CA\u30AF\u9803\u306B",
        cover: "assets/ep2-cover.webp",
        href: "https://manga-tr.com/manga-umineko-no-naku-koro-ni-episode-2-turn-of-the-golden-witch.html"
      },
      {
        ep: "Arc 1",
        title: "A Day in the Capital",
        subtitle: "Re:\u30BC\u30ED\u304B\u3089\u59CB\u3081\u308B\u7570\u4E16\u754C\u751F\u6D3B",
        cover: "assets/rezero-cover.jpg",
        href: "https://manga-tr.com/manga-rezero-kara-hajimeru-isekai-seikatsu.html"
      }
    ],
    contact: {
      eyebrow: "İletişim",
      title: "Bana Ulaş",
      copy: "Projeler, çeviriler veya ortak çalışmalar için aşağıdaki hesaplardan yazabilirsin."
    },
    socialLinks: [
      { label: "LinkedIn", href: urls.linkedin, icon: "bi-linkedin" },
      { label: "GitHub", href: urls.github, icon: "bi-github" },
      { label: "X / Twitter", href: urls.twitter, icon: "bi-twitter-x" }
    ],
    footer: `<p class="site-footer-signature"><span>By </span><span class="site-footer-signature-brand">REMILYA</span></p>`
  }
};

const elements = {
  metaDescription: document.querySelector("#meta-description"),
  ogLocale: document.querySelector("#og-locale"),
  ogTitle: document.querySelector("#og-title"),
  ogDescription: document.querySelector("#og-description"),
  twitterTitle: document.querySelector("#twitter-title"),
  twitterDescription: document.querySelector("#twitter-description"),
  brandLink: document.querySelector("#brand-link"),
  primaryNav: document.querySelector("#primary-nav"),
  localeSwitcher: document.querySelector("#locale-switcher"),
  localeButtons: [...document.querySelectorAll(".locale-button")],
  localeStatus: document.querySelector("#locale-status"),
  brandSubtitle: document.querySelector("#brand-subtitle"),
  navAbout: document.querySelector("#nav-about"),
  navLibrary: document.querySelector("#nav-library"),
  navWork: document.querySelector("#nav-work"),
  navTranslations: document.querySelector("#nav-translations"),
  navCapabilities: document.querySelector("#nav-capabilities"),
  navExperience: document.querySelector("#nav-experience"),
  navContact: document.querySelector("#nav-contact"),
  heroTitle: document.querySelector("#hero-title"),
  aboutEyebrow: document.querySelector("#about-eyebrow"),
  aboutTitle: document.querySelector("#about-title"),
  aboutIntroLabel: document.querySelector("#about-intro-label"),
  aboutIntroP1: document.querySelector("#about-intro-p1"),
  aboutIntroP2: document.querySelector("#about-intro-p2"),
  aboutGrid: document.querySelector("#about-grid"),
  libraryEyebrow: document.querySelector("#library-eyebrow"),
  libraryTitle: document.querySelector("#library-title"),
  libraryCopy: document.querySelector("#library-copy"),
  libraryGrid: document.querySelector("#library-grid"),
  workEyebrow: document.querySelector("#work-eyebrow"),
  workTitle: document.querySelector("#work-title"),
  workCopy: document.querySelector("#work-copy"),
  supportProjects: document.querySelector("#support-projects"),
  translationsEyebrow: document.querySelector("#translations-eyebrow"),
  translationsTitle: document.querySelector("#translations-title"),
  translationsCopy: document.querySelector("#translations-copy"),
  translationsGrid: document.querySelector("#translations-grid"),
  capabilitiesEyebrow: document.querySelector("#capabilities-eyebrow"),
  capabilitiesTitle: document.querySelector("#capabilities-title"),
  capabilityGrid: document.querySelector("#capability-grid"),
  stackEyebrow: document.querySelector("#stack-eyebrow"),
  stackCopy: document.querySelector("#stack-copy"),
  stackCloud: document.querySelector("#stack-cloud"),
  experienceEyebrow: document.querySelector("#experience-eyebrow"),
  experienceTitle: document.querySelector("#experience-title"),
  workExperienceEyebrow: document.querySelector("#work-experience-eyebrow"),
  workExperienceTitle: document.querySelector("#work-experience-title"),
  terminalTitle: document.querySelector("#terminal-title"),
  trainingEyebrow: document.querySelector("#training-eyebrow"),
  trainingTitle: document.querySelector("#training-title"),
  trainingList: document.querySelector("#training-list"),
  timelineList: document.querySelector("#timeline-list"),
  contactEyebrow: document.querySelector("#contact-eyebrow"),
  contactTitle: document.querySelector("#contact-title"),
  contactCopy: document.querySelector("#contact-copy"),
  socialLinks: document.querySelector("#social-links"),
  footerCopy: document.querySelector("#footer-copy")
};

let currentLocale = "en";
let revealObserver = null;

function setText(element, value) {
  if (element) {
    element.textContent = value;
  }
}

function renderTags(items) {
  return items.map((item) => `<span class="tag">${item}</span>`).join("");
}

function renderLinkAttributes(link) {
  return link.external === false ? "" : ' target="_blank" rel="noreferrer"';
}

function renderSimpleLinks(links) {
  return links
    .map((link) => `<a href="${link.href}"${renderLinkAttributes(link)}>${link.label}</a>`)
    .join("");
}

function renderAboutCards(cards) {
  if (!elements.aboutGrid) {
    return;
  }

  elements.aboutGrid.innerHTML = cards
    .map(
      (card) => `
        <article class="about-card reveal">
          <span class="about-card__index">${card.index}</span>
          <h3>${card.title}</h3>
          <p>${card.copy}</p>
        </article>
      `
    )
    .join("");
}

function renderLibrary(localeData) {
  if (!elements.libraryGrid) {
    return;
  }

  elements.libraryGrid.innerHTML = localeData.libraryItems
    .map(
      (item) => `
        <a class="wii-card reveal" href="${item.href}" target="_blank" rel="noreferrer" aria-label="${item.title}">
          <div class="wii-card__screen">
            <img src="${item.cover}" alt="${item.title} cover" width="${item.width || 460}" height="${item.height || 215}" loading="lazy" />
            <span class="wii-card__badge">${item.badge}</span>
          </div>
          <div class="wii-card__body">
            <h3 class="wii-card__title">${item.title}</h3>
            <p class="wii-card__desc">${item.desc}</p>
            <span class="wii-card__action" aria-hidden="true">${item.action}</span>
          </div>
        </a>
      `
    )
    .join("");
}

function renderSupportProjects(localeData) {
  if (!elements.supportProjects) {
    return;
  }

  elements.supportProjects.innerHTML = localeData.supportProjects
    .map((project) => {
      const mark = project.logo
        ? `<img class="case-logo" src="${project.logo}" alt="${project.title} logo" loading="lazy" />`
        : `<span class="case-glyph" aria-hidden="true">${project.glyph || "GIT"}</span>`;

      return `
        <article class="support-card reveal">
          <p class="support-card__meta">${project.type}</p>
          <div class="case-mark">
            ${mark}
            <h3>${project.title}</h3>
          </div>
          <p>${project.summary}</p>
          ${project.links?.length ? `<div class="support-card__links">${renderSimpleLinks(project.links)}</div>` : ""}
        </article>
      `;
    })
    .join("");
}

function renderCapabilities(localeData) {
  if (!elements.capabilityGrid) {
    return;
  }

  elements.capabilityGrid.innerHTML = localeData.capabilities
    .map(
      (capability) => `
        <article class="capability-card reveal">
          <p class="capability-card__meta">${capability.meta}</p>
          <h3>${capability.title}</h3>
          <p>${capability.copy}</p>
          <div class="tag-list">${renderTags(capability.tags)}</div>
        </article>
      `
    )
    .join("");
}

function renderStackCloud(localeData) {
  if (!elements.stackCloud) {
    return;
  }

  const items = [
    ...new Set(
      [
        ...localeData.supportProjects.flatMap((project) => project.stack || []),
        ...localeData.capabilities.flatMap((cap) => cap.tags || [])
      ]
    )
  ].sort((left, right) => left.localeCompare(right, currentLocale));

  elements.stackCloud.innerHTML = renderTags(items);
}

function renderTimeline(localeData) {
  if (!elements.timelineList) {
    return;
  }

  elements.timelineList.innerHTML = localeData.timeline
    .map(
      (entry) => `
        <article class="terminal-entry reveal">
          <div class="terminal-entry__head">
            <span class="terminal-entry__period">${entry.period}</span>
            <span class="terminal-entry__kind">${entry.kind}</span>
          </div>
          <h3>${entry.title}</h3>
          <p>${entry.summary}</p>
        </article>
      `
    )
    .join("");
}

function renderTrainingList(items) {
  if (elements.trainingList) {
    elements.trainingList.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
  }
}

function renderTranslations(localeData) {
  if (!elements.translationsGrid) {
    return;
  }

  elements.translationsGrid.innerHTML = localeData.translations
    .map(
      (translation) => `
        <a class="translation-card reveal" href="${translation.href}" target="_blank" rel="noreferrer" aria-label="${localeData.translationsSection.readLabel}: ${translation.title}">
          <div class="translation-cover">
            <img src="${translation.cover}" alt="${translation.title} cover" width="260" height="371" loading="lazy" />
          </div>
          <span class="translation-card__ep" lang="en">${translation.ep}</span>
          <h3 class="translation-card__title">${translation.title}</h3>
          <span class="translation-card__sub">${translation.subtitle}</span>
          <span class="translation-card__role">${localeData.translationsSection.roleLabel}</span>
          <span class="translation-card__action" aria-hidden="true">${localeData.translationsSection.readLabel} →</span>
        </a>
      `
    )
    .join("");

  init3DCards();
}

function init3DCards() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const cards = document.querySelectorAll(".translation-card");
  cards.forEach((card) => {
    if (!card.querySelector(".glossy-overlay")) {
      const gloss = document.createElement("div");
      gloss.className = "glossy-overlay";
      card.appendChild(gloss);
    }

    let cachedRect = null;
    let rafId = 0;

    card.addEventListener("mouseenter", () => {
      cachedRect = card.getBoundingClientRect();
    });

    card.addEventListener("mousemove", (e) => {
      const rect = cachedRect || (cachedRect = card.getBoundingClientRect());
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        const xPct = mouseX / rect.width - 0.5;
        const yPct = mouseY / rect.height - 0.5;

        const rotateY = xPct * 24;
        const rotateX = yPct * -24;

        card.style.setProperty("--rx", `${rotateX}deg`);
        card.style.setProperty("--ry", `${rotateY}deg`);
        card.style.setProperty("--mx", `${50 - rotateY * 3}%`);
        card.style.setProperty("--my", `${50 - rotateX * 3}%`);
        rafId = 0;
      });
    });

    card.addEventListener("mouseleave", () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
      cachedRect = null;
      card.style.removeProperty("--rx");
      card.style.removeProperty("--ry");
      card.style.removeProperty("--mx");
      card.style.removeProperty("--my");
    });
  });
}

function renderSocialLinks(localeData) {
  if (!elements.socialLinks) {
    return;
  }

  elements.socialLinks.innerHTML = localeData.socialLinks
    .map(
      (link, index) => `
        <a class="social-link${index === 0 ? " social-link--primary" : ""}" href="${link.href}" target="_blank" rel="noreferrer" aria-label="${link.label}">
          <i class="bi ${link.icon}" aria-hidden="true"></i>
          <span>${link.label}</span>
        </a>
      `
    )
    .join("");
}

function getInitialLocale() {
  try {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get("lang")?.toLowerCase();
    if (queryLang && SUPPORTED_LOCALES.includes(queryLang)) {
      return queryLang;
    }
  } catch {}

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LOCALES.includes(stored)) {
      return stored;
    }
  } catch {}

  const languages = Array.isArray(navigator.languages) ? navigator.languages : [navigator.language];
  const preferred = languages.find(Boolean) || "en";
  return preferred.toLowerCase().startsWith("tr") ? "tr" : "en";
}

function updateLocaleButtons(locale) {
  elements.localeButtons.forEach((button) => {
    const isActive = button.dataset.locale === locale;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function initializeRevealObserver() {
  if (revealObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.01,
      rootMargin: "0px 0px -12px 0px"
    }
  );
}

function refreshRevealAnimation() {
  const revealItems = [...document.querySelectorAll(".reveal")];

  revealItems.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${Math.min(index * 45, 220)}ms`);
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  initializeRevealObserver();

  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.96 && rect.bottom >= 0) {
      item.classList.add("is-visible");
      item.dataset.revealBound = "true";
      if (revealObserver) {
        revealObserver.unobserve(item);
      }
      return;
    }

    if (item.dataset.revealBound === "true") {
      return;
    }

    item.dataset.revealBound = "true";
    revealObserver.observe(item);
  });
}

function setupActiveNavigation() {
  const nav = document.querySelector(".site-nav");
  const links = [...document.querySelectorAll(".site-nav a")];
  const sections = links
    .map((link) => {
      const id = link.getAttribute("href");
      if (!id || !id.startsWith("#")) {
        return null;
      }

      const target = document.querySelector(id);
      return target ? { link, target } : null;
    })
    .filter(Boolean);

  if (!sections.length) {
    return;
  }

  // Mark the first section active by default on initial load
  sections[0].link.classList.add("is-active");
  sections[0].link.setAttribute("aria-current", "location");

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => right.intersectionRect.height - left.intersectionRect.height)[0];

      if (!visible) {
        return;
      }

      sections.forEach(({ link, target }) => {
        const isCurrent = target === visible.target;
        link.classList.toggle("is-active", isCurrent);
        if (isCurrent) {
          link.setAttribute("aria-current", "location");
          if (nav && nav.scrollWidth > nav.clientWidth) {
            const targetScroll =
              link.offsetLeft - nav.clientWidth / 2 + link.offsetWidth / 2;
            nav.scrollTo({
              left: Math.max(0, targetScroll),
              behavior: "smooth"
            });
          }
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    {
      threshold: [0.02, 0.1, 0.25, 0.5, 0.75],
      rootMargin: "-18% 0px -52% 0px"
    }
  );

  sections.forEach(({ target }) => observer.observe(target));
}

function applyLocale(locale) {
  const safeLocale = SUPPORTED_LOCALES.includes(locale) ? locale : "en";
  const localeData = content[safeLocale] || content.en;
  currentLocale = safeLocale;

  document.documentElement.lang = currentLocale;
  document.title = localeData.meta.title;
  elements.metaDescription?.setAttribute("content", localeData.meta.description);
  elements.ogLocale?.setAttribute("content", currentLocale === "tr" ? "tr_TR" : "en_US");
  elements.ogTitle?.setAttribute("content", localeData.meta.title);
  elements.ogDescription?.setAttribute("content", localeData.meta.description);
  elements.twitterTitle?.setAttribute("content", localeData.meta.title);
  elements.twitterDescription?.setAttribute("content", localeData.meta.description);
  elements.brandLink?.setAttribute("aria-label", localeData.aria.brandLink);
  elements.primaryNav?.setAttribute("aria-label", localeData.aria.primaryNav);
  elements.localeSwitcher?.setAttribute("aria-label", localeData.aria.localeSwitcher);

  setText(elements.brandSubtitle, localeData.brandSubtitle);
  setText(elements.navAbout, localeData.nav.about);
  setText(elements.navLibrary, localeData.nav.library);
  setText(elements.navWork, localeData.nav.work);
  setText(elements.navTranslations, localeData.nav.translations);
  setText(elements.navCapabilities, localeData.nav.capabilities);
  setText(elements.navExperience, localeData.nav.experience);
  setText(elements.navContact, localeData.nav.contact);
  setText(elements.heroTitle, localeData.hero.title);

  setText(elements.aboutEyebrow, localeData.about.eyebrow);
  setText(elements.aboutTitle, localeData.about.title);
  setText(elements.aboutIntroLabel, localeData.about.introLabel);
  setText(elements.aboutIntroP1, localeData.about.introParagraphs[0]);
  setText(elements.aboutIntroP2, localeData.about.introParagraphs[1]);
  renderAboutCards(localeData.about.cards);

  setText(elements.libraryEyebrow, localeData.librarySection.eyebrow);
  setText(elements.libraryTitle, localeData.librarySection.title);
  setText(elements.libraryCopy, localeData.librarySection.copy);
  renderLibrary(localeData);

  setText(elements.workEyebrow, localeData.work.eyebrow);
  setText(elements.workTitle, localeData.work.title);
  setText(elements.workCopy, localeData.work.copy);
  renderSupportProjects(localeData);

  setText(elements.translationsEyebrow, localeData.translationsSection.eyebrow);
  setText(elements.translationsTitle, localeData.translationsSection.title);
  setText(elements.translationsCopy, localeData.translationsSection.copy);
  renderTranslations(localeData);

  setText(elements.capabilitiesEyebrow, localeData.capabilitiesSection.eyebrow);
  setText(elements.capabilitiesTitle, localeData.capabilitiesSection.title);
  renderCapabilities(localeData);
  setText(elements.stackEyebrow, localeData.stack.eyebrow);
  setText(elements.stackCopy, localeData.stack.copy);
  renderStackCloud(localeData);

  setText(elements.experienceEyebrow, localeData.experience.eyebrow);
  setText(elements.experienceTitle, localeData.experience.title);
  setText(elements.workExperienceEyebrow, localeData.experience.workEyebrow);
  setText(elements.workExperienceTitle, localeData.experience.workTitle);
  setText(elements.terminalTitle, localeData.experience.terminalTitle);
  setText(elements.trainingEyebrow, localeData.experience.trainingEyebrow);
  setText(elements.trainingTitle, localeData.experience.trainingTitle);
  renderTrainingList(localeData.experience.trainingList);
  renderTimeline(localeData);

  setText(elements.contactEyebrow, localeData.contact.eyebrow);
  setText(elements.contactTitle, localeData.contact.title);
  setText(elements.contactCopy, localeData.contact.copy);
  renderSocialLinks(localeData);
  elements.footerCopy.innerHTML = localeData.footer;

  updateLocaleButtons(currentLocale);
  refreshRevealAnimation();
}

function setLocale(locale) {
  const safeLocale = SUPPORTED_LOCALES.includes(locale) ? locale : "en";
  try {
    window.localStorage.setItem(STORAGE_KEY, safeLocale);
  } catch {}
  applyLocale(safeLocale);
  setText(elements.localeStatus, content[safeLocale].aria.languageChanged);
}

function setupLocaleSwitcher() {
  elements.localeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const locale = button.dataset.locale;
      if (!locale || locale === currentLocale) {
        return;
      }
      setLocale(locale);
    });
  });
}

/* ═══════════════════════════════════════════════════════
   DANMAKU FLOATING PARTICLES
   Touhou-inspired ambient particles rising through the page
   ═══════════════════════════════════════════════════════ */

function initDanmakuParticles() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const field = document.querySelector("#danmaku-field");
  if (!field) return;

  const PARTICLE_COUNT = 10;
  const colors = [
    "rgba(168, 85, 247, 0.22)",
    "rgba(220, 38, 38, 0.16)",
    "rgba(124, 58, 237, 0.18)",
    "rgba(168, 85, 247, 0.14)",
    "rgba(220, 38, 38, 0.12)"
  ];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const particle = document.createElement("div");
    particle.classList.add("danmaku-particle");

    const size = 2 + Math.random() * 4;
    const left = Math.random() * 100;
    const duration = 15 + Math.random() * 25;
    const delay = Math.random() * duration;
    const color = colors[Math.floor(Math.random() * colors.length)];

    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      background: ${color};
      box-shadow: 0 0 ${size * 2}px ${color};
      animation-duration: ${duration}s;
      animation-delay: -${delay}s;
    `;

    field.appendChild(particle);
  }
}

/* ═══════════════════════════════════════════════════════
   CURSOR TRAIL EFFECT
   Violet/rose particles following the mouse
   ═══════════════════════════════════════════════════════ */

function initCursorTrail() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  // Skip on touch devices
  if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
    return;
  }

  let lastX = 0;
  let lastY = 0;
  let throttleTimer = null;

  document.addEventListener("mousemove", (e) => {
    if (throttleTimer) return;

    throttleTimer = setTimeout(() => {
      throttleTimer = null;
    }, 50);

    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 8) return;

    lastX = e.clientX;
    lastY = e.clientY;

    const particle = document.createElement("div");
    particle.classList.add("cursor-particle");
    particle.style.setProperty("--cx", `${e.clientX - 3}px`);
    particle.style.setProperty("--cy", `${e.clientY - 3}px`);

    document.body.appendChild(particle);

    particle.addEventListener("animationend", () => {
      particle.remove();
    });
  });
}

/* ═══════════════════════════════════════════════════════
   INITIALIZATION
   ═══════════════════════════════════════════════════════ */

setupLocaleSwitcher();
applyLocale(getInitialLocale());
setupActiveNavigation();
if (window.location.hash && /^#[a-z0-9-]+$/i.test(window.location.hash)) {
  const hashTarget = document.querySelector(window.location.hash);
  if (hashTarget) {
    hashTarget.classList.add("is-visible");
    hashTarget.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    hashTarget.scrollIntoView({ behavior: "instant" });
    refreshRevealAnimation();
  }
}
initDanmakuParticles();
initCursorTrail();
