const STORAGE_KEY = "remilya-locale";
const SUPPORTED_LOCALES = ["en", "tr"];

const urls = {
  github: "https://github.com/Remilya",
  linkedin: "https://tr.linkedin.com/in/ilker-agirkaya",
  repoWatermark: "https://github.com/Remilya/Watermark-Deksmo",
  repoScrap: "https://github.com/Remilya/DeksmoScrap"
};

const archiveTextElements = [
  { source: "...AS IF.", target: "...SANKİ." },
  { source: "IT'S IMPOSSIBLE FOR THIS TO BE TRUE.", target: "BUNUN DOĞRU OLMASI MÜMKÜN DEĞİL." },
  { source: "DON'T ENTER THE FOREST! THERE'S A WITCH~!!", target: "ORMANA GİRMEYİN! CADI VAR~!!" },
  { source: "THE WITCH'S EYES ARE GLOWING OVER THERE~!!", target: "CADININ GÖZLERİ ORADA PARLIYOR~!!" },
  { source: "WHEN I WAS LITTLE, MY FAMILY SCARED ME UNTIL I TREMBLED.", target: "KÜÇÜKKEN AİLEM BENİ TİTREYENE KADAR KORKUTTU." },
  { source: "FOR SOMETHING AS OMINOUS AS A WITCH TO EXIST...", target: "CADI GİBİ TEKİNSİZ BİR ŞEYİN VAR OLMASI..." },
  { source: "...IS IMPOSSIBLE.", target: "...MÜMKÜN DEĞİL." }
];

const archiveMedia = {
  raw: {
    src: "assets/deksmo-archive/raw.webp",
    width: 840,
    height: 1200,
    labelKey: "rawLabel",
    altKey: "rawAlt"
  },
  translated: {
    src: "assets/deksmo-archive/translated.webp",
    width: 840,
    height: 1252,
    labelKey: "translatedLabel",
    altKey: "translatedAlt"
  },
  colorized: {
    src: "assets/deksmo-archive/colorized.webp",
    width: 840,
    height: 1252,
    labelKey: "colorizedLabel",
    altKey: "colorizedAlt"
  }
};

const content = {
  en: {
    meta: {
      title: "Remilya | Operator-focused AI & Localization Tools",
      description:
        "Remilya builds operator-focused AI and localization tools for OCR, translation, review, capture, and practical production workflows."
    },
    aria: {
      brandLink: "Return to surface",
      primaryNav: "Main directory",
      localeSwitcher: "System language",
      languageChanged: "Language changed to English"
    },
    brandSubtitle: "Creative Technologist / AI Systems / Localization",
    nav: {
      about: "About",
      work: "Work",
      translations: "Translations",
      capabilities: "Capabilities",
      experience: "Experience",
      contact: "Contact"
    },
    hero: {
      title: "Welcome to Remilya.dev.",
      ctaWork: "Enter the archive",
      ctaContact: "Contact"
    },
    deksmoArchive: {
      eyebrow: "RECOVERED SYSTEM / DEKSMO 1.6.1",
      status: "ARCHIVED PRODUCT · INTERACTIVE SIMULATION",
      title: "A localization workbench, preserved as it was.",
      copy:
        "Deksmo combined OCR, translation, cleanup, typesetting, and operator review in one editor. The original service was retired after its underlying third-party APIs were discontinued. This client-side exhibit recreates the workflow; no processing is sent to a backend.",
      openSimulation: "Open interactive simulation",
      closeSimulation: "Close simulation",
      productVersion: "Recovered interface · Version 1.6.1",
      productStatus: "ARCHIVED / OFFLINE",
      tabsLabel: "Deksmo simulation views",
      tabEditor: "Editor",
      tabSettings: "Settings",
      tabConsole: "Console",
      languagePair: "EN → TR",
      toolbarLabel: "Archived editor tools",
      toolSelect: "Select text element",
      toolCompare: "Reset comparison",
      toolColor: "Show color preview",
      toolSelectShort: "Select",
      toolCompareShort: "Compare",
      toolColorShort: "Color",
      variantsLabel: "Result preview",
      variantRaw: "Raw",
      variantTranslated: "Translated",
      variantColorized: "Colorized",
      sampleBadge: "ARCHIVE SAMPLE",
      comparisonLabel: "Typeset / color comparison",
      rawLabel: "RAW / EN",
      translatedLabel: "TRANSLATED / TR",
      colorizedLabel: "COLORIZED / TR",
      rawAlt: "Raw English manga page used in the archived Deksmo simulation",
      translatedAlt: "Turkish translated result from the archived Deksmo simulation",
      colorizedAlt: "Colorized Turkish result from the archived Deksmo simulation",
      zoomOut: "Zoom out",
      zoomIn: "Zoom in",
      textElements: "TEXT ELEMENTS",
      elementType: "SPEECH BUBBLE",
      sourceLabel: "SOURCE",
      targetLabel: "TARGET",
      aiFill: "AI Fill · Simulation",
      cleanApply: "Clean + Apply Text · Simulation",
      history: "HISTORY",
      historyOpen: "Opened raw page",
      historyTranslated: "Translation preview",
      historyColorized: "Color preview",
      settingsEyebrow: "ARCHIVED CONFIGURATION",
      settingsHeading: "Last recovered workspace settings",
      sourceLanguage: "Source language",
      targetLanguage: "Target language",
      resolution: "Image resolution",
      preciseOcr: "Precise OCR",
      enabled: "Enabled",
      provider: "Processing provider",
      offline: "Offline · API discontinued",
      logArchive: "Recovered Deksmo interface loaded locally.",
      logAssets: "Three historical preview assets are ready.",
      logElements: "Seven text elements restored for inspection.",
      logBackend: "Unavailable. No network processing will be attempted.",
      offlineFootnote: "CLIENT-ONLY ARCHIVE · ZERO API REQUESTS",
      readyMessage: "Archive ready. Explore the recovered interface.",
      offlineActionMessage: "Archived simulation — this action required the retired Deksmo API.",
      selectionMessage: "Selection tool active. Choose a recovered text element.",
      comparisonMessage: "Comparison reset to the aligned translated and colorized views.",
      colorMessage: "Colorized archive preview selected.",
      rawMessage: "Raw source page selected.",
      translatedMessage: "Translated archive preview selected.",
      colorizedMessage: "Colorized archive preview selected.",
      textSelectedMessage: "Text element {number} selected."
    },
    about: {
      eyebrow: "Identity / Profile",
      title: "Creative technology with product, media, and localization literacy.",
      introLabel: "Remilya profile",
      introParagraphs: [
        "Remilya is the public identity behind this portfolio. The work combines software engineering, interface design, AI integration, SEO strategy, and localization-aware production.",
        "The portfolio is anchored by the Deksmo ecosystem, but the broader skill set comes from client delivery, subtitle and media workflows, and a New Media and Communication background."
      ],
      cards: [
        {
          index: "01",
          accent: "",
          title: "Software and AI",
          copy:
            "Python, FastAPI, React, Node.js, OCR pipelines, Gemini-based workflows, REST APIs, Firebase, and local-first runtime thinking."
        },
        {
          index: "02",
          accent: "panel--cyan",
          title: "Growth and creative execution",
          copy:
            "SEO, content architecture, Google and Meta Ads planning, UI/UX direction, and production support across visual media."
        },
        {
          index: "03",
          accent: "panel--magenta",
          title: "Education and communication",
          copy:
            "BA-level New Media and Communication studies, English C1 proficiency, and training across AI applications, graphics, social media, and web programming."
        }
      ]
    },
    work: {
      eyebrow: "Work / Case studies",
      title: "Flagship systems, private delivery, and supporting product dossiers.",
      copy:
        "The centerpiece is Deksmo: a cluster of tools, runtimes, and product experiments around localization, editing, capture, and specialized knowledge systems.",
      supportEyebrow: "Dossier / Supporting systems",
      supportCopy:
        "Smaller but important surfaces that show the breadth of the ecosystem: desktop tooling, browser capture, domain AI, and large structured datasets."
    },
    featuredProjects: [
      {
        slug: "deksmo",
        title: "Deksmo",
        label: "Featured system / Archived manga localization workbench",
        serial: "SYS-01",
        summary:
          "A full-stack localization workbench that combined OCR, translation, cleanup, typesetting, quality control, and chapter processing in an inspectable operator workflow.",
        impact: [
          "Paired AI-assisted processing with a human-in-the-loop workbench for review, editing, and recovery.",
          "Covered chapter uploads, book-mode translation, mobile-friendly surfaces, and persistent project workflows.",
          "Handled operator realities including rate limits, queue states, resumable projects, and downstream export needs."
        ],
        stack: ["React 19", "Vite", "FastAPI", "Firebase", "Gemini", "Tailwind CSS"],
        status: "Archived product · Interactive simulation",
        links: [{ label: "Open simulation", href: "#deksmo-archive", external: false, action: "openArchive" }],
        accent: "green",
        logo: "assets/logos/deksmo-core.png"
      },
      {
        slug: "legal-rebuild",
        title: "Legal Services Platform Rebuild",
        label: "Featured engagement / Private client system",
        serial: "SYS-02",
        summary:
          "An anonymized freelance transformation for a legal-services brand covering UI/UX, frontend delivery, information architecture, and technical SEO.",
        impact: [
          "Rebuilt the public-facing site from zero to create a cleaner service narrative and a stronger trust surface.",
          "Moved the site from not ranking to first place for branded Google search queries through technical and content-driven SEO.",
          "Connected product thinking with growth execution by treating the website as an operating business surface, not a brochure."
        ],
        stack: ["UI/UX", "Frontend", "SEO", "Content Strategy", "Performance"],
        status: "Private engagement",
        links: [],
        accent: "magenta",
        logo: ""
      }
    ],
    supportProjects: [
      {
        title: "Deksmo Vision",
        type: "Local-first translation workbench",
        summary:
          "A React and FastAPI editor focused on local OCR, masking, disk-backed project state, provider profiles, and selected-bubble editing.",
        stack: ["React", "TypeScript", "FastAPI", "PaddleOCR"],
        status: "Private repository · Details available on request",
        links: [],
        logo: "assets/logos/deksmo-vision.png"
      },
      {
        title: "DeksmoMedical",
        type: "Domain-specific AI application",
        summary:
          "A medicinal-herb application combining Turkish knowledge, AI recipe generation, configurable data storage, and optional local-model privacy mode.",
        stack: ["Next.js 15", "FastAPI", "SQLite", "Supabase"],
        status: "Private repository · Details available on request",
        links: [],
        logo: "assets/logos/deksmo-medical.png"
      },
      {
        title: "DeksmoILACDB",
        type: "Open-source drug dataset",
        summary:
          "A structured medicine database for Turkey with 31.5k+ records, archived HTML prospectus content, cleaned text, and usage imagery for offline retrieval.",
        stack: ["Python", "JSONL", "RAG-ready text", "Image dataset"],
        status: "Private repository · Details available on request",
        links: [],
        logo: "assets/logos/deksmo-ilacdb.svg"
      },
      {
        title: "Watermark-Deksmo",
        type: "Desktop batch utility",
        summary:
          "A Python desktop tool for applying watermarks across large manga and comic batches with page-level overrides and preview-first controls.",
        stack: ["Python", "CustomTkinter", "Pillow", "PyInstaller"],
        links: [{ label: "Repository", href: urls.repoWatermark }],
        logo: "assets/logos/watermark-deksmo.png"
      },
      {
        title: "Deksmo WebGrab",
        type: "Browser capture and export",
        summary:
          "A Manifest V3 extension for grabbing image-heavy web sources, then reviewing, reordering, and exporting them into PDF or ZIP packages.",
        stack: ["JavaScript", "Manifest V3", "PDF export", "ZIP export"],
        links: [{ label: "Repository", href: urls.repoScrap }],
        logo: "assets/logos/deksmo-webgrab.png"
      }
    ],
    capabilitiesSection: {
      eyebrow: "Capabilities / Stack",
      title: "What I can build, ship, and refine."
    },
    capabilities: [
      {
        title: "AI systems and local-first tooling",
        meta: "Capability 01",
        copy:
          "I build AI-assisted workflows that keep operator control visible: OCR, queue logic, project persistence, export surfaces, and model-backed tools that can be audited instead of blindly trusted.",
        tags: ["OCR", "LLM integration", "Queue logic", "Local-first runtime"]
      },
      {
        title: "Frontend product surfaces",
        meta: "Capability 02",
        copy:
          "I design and ship interfaces for dense workflows across web apps, browser extensions, and desktop tooling, with a focus on hierarchy, responsiveness, and maintainable interaction patterns.",
        tags: ["React", "UI systems", "Responsive layouts", "Operator UX"]
      },
      {
        title: "Growth, localization, and content systems",
        meta: "Capability 03",
        copy:
          "I can connect product delivery to visibility and communication: SEO architecture, bilingual workflow thinking, subtitle and localization handling, and content systems that support discovery and trust.",
        tags: ["SEO", "Localization", "Content strategy", "Digital execution"]
      }
    ],
    stack: {
      eyebrow: "Stack trace",
      copy: "Technologies already showing up across the portfolio."
    },
    experience: {
      eyebrow: "Experience / Timeline",
      title: "A career path that blends delivery, production, and systems thinking.",
      workEyebrow: "Work experience",
      workTitle: "Client delivery and production roles",
      terminalTitle: "work.log",
      trainingEyebrow: "Education / Training",
      trainingTitle: "Supporting training and certificates",
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
        title: "Freelance Digital Project Manager",
        kind: "Client systems / SEO / web delivery",
        summary:
          "Building and refining web experiences for service brands through UI/UX work, frontend implementation, technical SEO, and growth-minded content structure."
      },
      {
        period: "2024 - 2025",
        title: "Production and Subtitle Intern",
        kind: "Post-production / localization",
        summary:
          "Supported corporate post-production workflows while handling English-to-Turkish subtitle and localization tasks that sharpened media-pipeline discipline."
      },
    ],
    translationsSection: {
      eyebrow: "Translations / Manga",
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
      eyebrow: "Profiles / Links",
      title: "Let’s build something practical.",
      copy: "Working on an AI workflow, operator tool, or localization product? Send a short brief on LinkedIn and I’ll reply with fit and next steps."
    },
    socialLinks: [
      { label: "LinkedIn", href: urls.linkedin, icon: "bi-linkedin" },
      { label: "GitHub", href: urls.github, icon: "bi-github" }
    ],
    footer: `<p class="site-footer-signature"><span>By </span><span class="site-footer-signature-brand">REMILYA</span></p>`
  },
  tr: {
    meta: {
      title: "Remilya | Portfolyo",
      description:
        "Remilya; yapay zeka destekli araçlar, yerel öncelikli sistemler, ürün arayüzleri ve lokalizasyon odaklı iş akışları geliştiren bir yazılım üreticisidir."
    },
    aria: {
      brandLink: "Başa dön",
      primaryNav: "Ana gezinme",
      localeSwitcher: "Dil seçici",
      languageChanged: "Dil Türkçe olarak değiştirildi"
    },
    brandSubtitle: "Yazılım / YZ Sistemleri / Lokalizasyon",
    nav: {
      about: "Hakkında",
      work: "İşler",
      translations: "Çeviriler",
      capabilities: "Yetenekler",
      experience: "Deneyim",
      contact: "İletişim"
    },
    hero: {
      title: "Remilya.dev’e hoş geldiniz.",
      ctaWork: "Arşive gir",
      ctaContact: "İletişim"
    },
    deksmoArchive: {
      eyebrow: "KURTARILAN SİSTEM / DEKSMO 1.6.1",
      status: "ARŞİVLENMİŞ ÜRÜN · ETKİLEŞİMLİ SİMÜLASYON",
      title: "Bir lokalizasyon çalışma alanı, olduğu haliyle korundu.",
      copy:
        "Deksmo; OCR, çeviri, temizleme, dizgi ve operatör incelemesini tek editörde birleştiriyordu. Temelindeki üçüncü taraf API’ler sonlandırılınca özgün servis kullanımdan kaldırıldı. Bu istemci tarafı sergi iş akışını yeniden canlandırır; hiçbir işlem arka uca gönderilmez.",
      openSimulation: "Etkileşimli simülasyonu aç",
      closeSimulation: "Simülasyonu kapat",
      productVersion: "Kurtarılan arayüz · Sürüm 1.6.1",
      productStatus: "ARŞİVLENDİ / ÇEVRİMDIŞI",
      tabsLabel: "Deksmo simülasyon görünümleri",
      tabEditor: "Editör",
      tabSettings: "Ayarlar",
      tabConsole: "Konsol",
      languagePair: "EN → TR",
      toolbarLabel: "Arşivlenmiş editör araçları",
      toolSelect: "Metin öğesi seç",
      toolCompare: "Karşılaştırmayı sıfırla",
      toolColor: "Renkli önizlemeyi göster",
      toolSelectShort: "Seç",
      toolCompareShort: "Karşılaştır",
      toolColorShort: "Renk",
      variantsLabel: "Sonuç önizlemesi",
      variantRaw: "Ham",
      variantTranslated: "Çevrilmiş",
      variantColorized: "Renklendirilmiş",
      sampleBadge: "ARŞİV ÖRNEĞİ",
      comparisonLabel: "Dizgi / renk karşılaştırması",
      rawLabel: "HAM / EN",
      translatedLabel: "ÇEVRİLMİŞ / TR",
      colorizedLabel: "RENKLENDİRİLMİŞ / TR",
      rawAlt: "Arşivlenmiş Deksmo simülasyonunda kullanılan ham İngilizce manga sayfası",
      translatedAlt: "Arşivlenmiş Deksmo simülasyonundaki Türkçe çeviri sonucu",
      colorizedAlt: "Arşivlenmiş Deksmo simülasyonundaki renklendirilmiş Türkçe sonuç",
      zoomOut: "Uzaklaştır",
      zoomIn: "Yakınlaştır",
      textElements: "METİN ÖĞELERİ",
      elementType: "KONUŞMA BALONU",
      sourceLabel: "KAYNAK",
      targetLabel: "HEDEF",
      aiFill: "YZ Dolgu · Simülasyon",
      cleanApply: "Temizle + Metni Uygula · Simülasyon",
      history: "GEÇMİŞ",
      historyOpen: "Ham sayfa açıldı",
      historyTranslated: "Çeviri önizlemesi",
      historyColorized: "Renk önizlemesi",
      settingsEyebrow: "ARŞİVLENMİŞ YAPILANDIRMA",
      settingsHeading: "Kurtarılan son çalışma alanı ayarları",
      sourceLanguage: "Kaynak dil",
      targetLanguage: "Hedef dil",
      resolution: "Görsel çözünürlüğü",
      preciseOcr: "Hassas OCR",
      enabled: "Etkin",
      provider: "İşleme sağlayıcısı",
      offline: "Çevrimdışı · API sonlandırıldı",
      logArchive: "Kurtarılan Deksmo arayüzü yerel olarak yüklendi.",
      logAssets: "Üç tarihî önizleme varlığı hazır.",
      logElements: "İnceleme için yedi metin öğesi geri yüklendi.",
      logBackend: "Kullanılamıyor. Ağ üzerinden işleme denenmeyecek.",
      offlineFootnote: "YALNIZCA İSTEMCİ ARŞİVİ · SIFIR API İSTEĞİ",
      readyMessage: "Arşiv hazır. Kurtarılan arayüzü inceleyin.",
      offlineActionMessage: "Arşiv simülasyonu — bu işlem kullanımdan kaldırılan Deksmo API’sini gerektiriyordu.",
      selectionMessage: "Seçim aracı etkin. Kurtarılan bir metin öğesi seçin.",
      comparisonMessage: "Karşılaştırma hizalı çevrilmiş ve renklendirilmiş görünümlere sıfırlandı.",
      colorMessage: "Renklendirilmiş arşiv önizlemesi seçildi.",
      rawMessage: "Ham kaynak sayfa seçildi.",
      translatedMessage: "Çevrilmiş arşiv önizlemesi seçildi.",
      colorizedMessage: "Renklendirilmiş arşiv önizlemesi seçildi.",
      textSelectedMessage: "{number} numaralı metin öğesi seçildi."
    },
    about: {
      eyebrow: "Kimlik / Profil",
      title: "Yazılım, ürün düşüncesi ve lokalizasyonu bir araya getiren bir profil.",
      introLabel: "Remilya profili",
      introParagraphs: [
        "Remilya, bu portfolyoda kullandığım isim. Buradaki işler; yazılım geliştirme, arayüz tasarımı, yapay zeka entegrasyonu, SEO ve lokalizasyon odaklı üretimin kesişiminde duruyor.",
        "Portfolyonun merkezinde Deksmo ekosistemi var; ama bu birikim tek bir projeden gelmiyor. Müşteri projeleri, altyazı ve medya süreçleri ile Yeni Medya ve İletişim altyapısı bu yapının diğer parçalarını oluşturuyor."
      ],
      cards: [
        {
          index: "01",
          accent: "",
          title: "Yazılım ve yapay zeka",
          copy:
            "Python, FastAPI, React, Node.js, OCR hatları, Gemini tabanlı akışlar, REST API'ler, Firebase ve yerel öncelikli sistem düşüncesi."
        },
        {
          index: "02",
          accent: "panel--cyan",
          title: "Büyüme ve yaratıcı üretim",
          copy:
            "SEO, içerik mimarisi, Google ve Meta Ads planlama, UI/UX yönlendirmesi ve görsel medya süreçlerinde üretim desteği."
        },
        {
          index: "03",
          accent: "panel--magenta",
          title: "Eğitim ve iletişim",
          copy:
            "Yeni Medya ve İletişim lisans eğitimi, İngilizce C1 yetkinliği ve yapay zeka uygulamaları, grafik, sosyal medya ve web programlama alanlarında ek eğitimler."
        }
      ]
    },
    work: {
      eyebrow: "İşler / Vaka çalışmaları",
      title: "Öne çıkan sistemler, özel müşteri işleri ve destekleyici projeler.",
      copy:
        "Portfolyonun merkezinde Deksmo bulunuyor: lokalizasyon, düzenleme, yakalama ve alan odaklı bilgi sistemleri etrafında geliştirdiğim araçlar ve ürün deneyleri.",
      supportEyebrow: "Ek projeler / Destekleyici sistemler",
      supportCopy:
        "Ekosistemin kapsamını gösteren daha küçük ama önemli işler: masaüstü araçları, tarayıcı eklentileri, alan odaklı yapay zeka uygulamaları ve büyük yapısal veri setleri."
    },
    featuredProjects: [
      {
        slug: "deksmo",
        title: "Deksmo",
        label: "Öne çıkan sistem / Arşivlenmiş manga lokalizasyon çalışma alanı",
        serial: "SYS-01",
        summary:
          "OCR, çeviri, temizleme, dizgi, kalite kontrol ve bölüm işlemeyi izlenebilir bir operatör akışında birleştiren tam yığın lokalizasyon çalışma alanıydı.",
        impact: [
          "YZ destekli işlemeyi; inceleme, düzenleme ve kurtarma araçları sunan insan denetimli bir çalışma alanıyla birleştirdi.",
          "Bölüm yükleme, kitap modu çeviri, mobil uyumlu yüzeyler ve kalıcı proje akışlarını kapsadı.",
          "Rate limit, kuyruk durumu, sürdürülebilir projeler ve dışa aktarma ihtiyaçları gibi operatör gerçeklerini ele aldı."
        ],
        stack: ["React 19", "Vite", "FastAPI", "Firebase", "Gemini", "Tailwind CSS"],
        status: "Arşivlenmiş ürün · Etkileşimli simülasyon",
        links: [{ label: "Simülasyonu aç", href: "#deksmo-archive", external: false, action: "openArchive" }],
        accent: "green",
        logo: "assets/logos/deksmo-core.png"
      },
      {
        slug: "legal-rebuild",
        title: "Hukuk Hizmetleri Platformu Yeniden Yapımı",
        label: "Öne çıkan müşteri işi / Özel sistem",
        serial: "SYS-02",
        summary:
          "Bir hukuk hizmetleri markası için UI/UX, frontend geliştirme, bilgi mimarisi ve teknik SEO katmanlarını kapsayan anonimleştirilmiş freelance dönüşüm projesi.",
        impact: [
          "Kamusal siteyi sıfırdan yeniden kurarak daha net bir hizmet anlatımı ve daha güçlü bir güven zemini oluşturdum.",
          "Teknik ve içerik odaklı SEO ile siteyi markalı Google aramalarında görünmez durumdan ilk sıraya taşıdım.",
          "Web sitesini yalnızca bir broşür olarak değil, iş üreten ticari bir yüzey olarak ele alıp ürün düşüncesiyle büyüme tarafını birleştirdim."
        ],
        stack: ["UI/UX", "Frontend", "SEO", "İçerik stratejisi", "Performans"],
        status: "Özel müşteri projesi",
        links: [],
        accent: "magenta",
        logo: ""
      }
    ],
    supportProjects: [
      {
        title: "Deksmo Vision",
        type: "Yerel öncelikli çeviri çalışma alanı",
        summary:
          "Yerel OCR, maskeleme, diskte tutulan proje durumu, sağlayıcı profilleri ve seçili balon düzenleme odaklı React ve FastAPI editörü.",
        stack: ["React", "TypeScript", "FastAPI", "PaddleOCR"],
        status: "Özel repo · Talep üzerine ayrıntı",
        links: [],
        logo: "assets/logos/deksmo-vision.png"
      },
      {
        title: "DeksmoMedical",
        type: "Alan odaklı YZ uygulaması",
        summary:
          "Türkçe bilgi birikimini, yapay zeka destekli tarif üretimini, ayarlanabilir veri saklamayı ve isteğe bağlı yerel model gizliliğini bir araya getiren tıbbi bitki uygulaması.",
        stack: ["Next.js 15", "FastAPI", "SQLite", "Supabase"],
        status: "Özel repo · Talep üzerine ayrıntı",
        links: [],
        logo: "assets/logos/deksmo-medical.png"
      },
      {
        title: "DeksmoILACDB",
        type: "Açık kaynak ilaç veri seti",
        summary:
          "Türkiye için 31.5 binin üzerinde kayıt, arşivlenmiş HTML prospektüs içeriği, temizlenmiş metin ve kullanım görselleri içeren yapısal bir ilaç veritabanı.",
        stack: ["Python", "JSONL", "RAG hazır metin", "Görsel veri seti"],
        status: "Özel repo · Talep üzerine ayrıntı",
        links: [],
        logo: "assets/logos/deksmo-ilacdb.svg"
      },
      {
        title: "Watermark-Deksmo",
        type: "Masaüstü toplu işleme aracı",
        summary:
          "Geniş manga ve çizgi roman arşivlerine sayfa bazlı istisnalar ve önizleme odaklı kontrollerle watermark uygulayan Python masaüstü aracı.",
        stack: ["Python", "CustomTkinter", "Pillow", "PyInstaller"],
        links: [{ label: "Repo", href: urls.repoWatermark }],
        logo: "assets/logos/watermark-deksmo.png"
      },
      {
        title: "Deksmo WebGrab",
        type: "Tarayıcı yakalama ve aktarma aracı",
        summary:
          "Görsel ağırlıklı web kaynaklarını toplayıp sonrasında inceleme, yeniden sıralama ve PDF ya da ZIP paketlerine aktarma imkanı sunan Manifest V3 eklentisi.",
        stack: ["JavaScript", "Manifest V3", "PDF dışa aktarma", "ZIP dışa aktarma"],
        links: [{ label: "Repo", href: urls.repoScrap }],
        logo: "assets/logos/deksmo-webgrab.png"
      }
    ],
    capabilitiesSection: {
      eyebrow: "Yetenekler / Stack",
      title: "Kurabildiğim, yayına alabildiğim ve iyileştirebildiğim sistemler."
    },
    capabilities: [
      {
        title: "Yapay zeka sistemleri ve yerel öncelikli araçlar",
        meta: "Yetenek 01",
        copy:
          "Kullanıcı kontrolünü görünür tutan yapay zeka destekli süreçler kuruyorum: OCR, kuyruk yönetimi, proje kalıcılığı, dışa aktarma yüzeyleri ve körlemesine güvenmek yerine denetlenebilen model destekli araçlar.",
        tags: ["OCR", "LLM entegrasyonu", "Kuyruk mantığı", "Yerel runtime"]
      },
      {
        title: "Frontend ürün arayüzleri",
        meta: "Yetenek 02",
        copy:
          "Web uygulamaları, tarayıcı eklentileri ve masaüstü araçları için yoğun iş akışlarına uygun arayüzler tasarlayıp geliştiriyorum; odak noktam hiyerarşi, responsive düzen ve bakımı kolay etkileşim kalıpları.",
        tags: ["React", "UI sistemleri", "Responsive düzen", "Kullanıcı deneyimi"]
      },
      {
        title: "Büyüme, lokalizasyon ve içerik yapıları",
        meta: "Yetenek 03",
        copy:
          "Ürün teslimatını görünürlük ve iletişimle bağlayabiliyorum: SEO mimarisi, çift dilli iş akış düşüncesi, altyazı ve lokalizasyon süreçleri ile keşfi ve güveni destekleyen içerik yapıları.",
        tags: ["SEO", "Lokalizasyon", "İçerik stratejisi", "Dijital uygulama"]
      }
    ],
    stack: {
      eyebrow: "Kullandığım teknolojiler",
      copy: "Portfolyo boyunca tekrar eden temel teknolojiler."
    },
    experience: {
      eyebrow: "Deneyim / Zaman çizgisi",
      title: "Teslimat, üretim ve sistem düşüncesini birleştiren kariyer yolu.",
      workEyebrow: "İş deneyimi",
      workTitle: "Müşteri teslimatı ve prodüksiyon rolleri",
      terminalTitle: "is.log",
      trainingEyebrow: "Eğitimler",
      trainingTitle: "Destekleyici eğitimler ve sertifikalar",
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
        title: "Freelance Dijital Proje Yönetimi",
        kind: "Müşteri projeleri / SEO / web geliştirme",
        summary:
          "Hizmet markaları için UI/UX, frontend geliştirme, teknik SEO ve büyüme odaklı içerik kurgusu üzerinden web deneyimleri kurup geliştiriyorum."
      },
      {
        period: "2024 - 2025",
        title: "Prodüksiyon ve Altyazı Stajyeri",
        kind: "Post-produksiyon / lokalizasyon",
        summary:
          "Kurumsal post-produksiyon süreçlerine destek verirken İngilizceden Türkçeye altyazı ve lokalizasyon görevleri üstlendim; bu süreç bana medya operasyonlarında disiplin kazandırdı."
      },
    ],
    translationsSection: {
      eyebrow: "Çeviriler / Manga",
      title: "Umineko ve Re:Zero",
      copy: "Umineko: When They Cry ve Re:Zero serileri için hazırladığım Türkçe manga çevirileri.",
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
      eyebrow: "Profiller / Linkler",
      title: "Birlikte kullanışlı bir şey geliştirelim.",
      copy: "Yapay zeka iş akışı, operasyon aracı veya lokalizasyon ürünü üzerinde mi çalışıyorsunuz? LinkedIn üzerinden kısa bir özet gönderin; uygunluk ve sonraki adımlarla dönüş yapayım."
    },
    socialLinks: [
      { label: "LinkedIn", href: urls.linkedin, icon: "bi-linkedin" },
      { label: "GitHub", href: urls.github, icon: "bi-github" }
    ],
    footer: `<p class="site-footer-signature"><span>By </span><span class="site-footer-signature-brand">REMILYA</span></p>`
  }
};

const elements = {
  metaDescription: document.querySelector("#meta-description"),
  brandLink: document.querySelector("#brand-link"),
  primaryNav: document.querySelector("#primary-nav"),
  localeSwitcher: document.querySelector("#locale-switcher"),
  localeButtons: [...document.querySelectorAll(".locale-button")],
  localeStatus: document.querySelector("#locale-status"),
  brandSubtitle: document.querySelector("#brand-subtitle"),
  navAbout: document.querySelector("#nav-about"),
  navWork: document.querySelector("#nav-work"),
  navTranslations: document.querySelector("#nav-translations"),
  navCapabilities: document.querySelector("#nav-capabilities"),
  navExperience: document.querySelector("#nav-experience"),
  navContact: document.querySelector("#nav-contact"),
  heroTitle: document.querySelector("#hero-title"),
  heroCtaWork: document.querySelector("#hero-cta-work"),
  heroCtaContact: document.querySelector("#hero-cta-contact"),
  heroSequence: document.querySelector("#hero-sequence"),
  archiveDialog: document.querySelector("#deksmo-archive-dialog"),
  archiveRoot: document.querySelector("#deksmo-simulator"),
  archiveStatusMessage: document.querySelector("#archive-status-message"),
  archiveCompare: document.querySelector("#archive-compare"),
  archiveCompareRange: document.querySelector("#archive-comparison-range"),
  archiveResultImage: document.querySelector("#archive-result-image"),
  archiveBaseImage: document.querySelector("#archive-base-image"),
  archiveBaseLabel: document.querySelector("#archive-base-label"),
  archiveResultLabel: document.querySelector("#archive-result-label"),
  archiveZoomValue: document.querySelector("#archive-zoom-value"),
  archiveSelectedNumber: document.querySelector("#archive-selected-number"),
  archiveSelectedSource: document.querySelector("#archive-selected-source"),
  archiveSelectedTarget: document.querySelector("#archive-selected-target"),
  aboutEyebrow: document.querySelector("#about-eyebrow"),
  aboutTitle: document.querySelector("#about-title"),
  aboutIntroLabel: document.querySelector("#about-intro-label"),
  aboutIntroP1: document.querySelector("#about-intro-p1"),
  aboutIntroP2: document.querySelector("#about-intro-p2"),
  aboutGrid: document.querySelector("#about-grid"),
  workEyebrow: document.querySelector("#work-eyebrow"),
  workTitle: document.querySelector("#work-title"),
  workCopy: document.querySelector("#work-copy"),
  supportEyebrow: document.querySelector("#support-eyebrow"),
  supportCopy: document.querySelector("#support-copy"),
  featuredProjects: document.querySelector("#featured-projects"),
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
const archiveState = {
  activeTab: "editor",
  activeTool: "compare",
  resultVariant: "colorized",
  comparisonPosition: 50,
  selectedTextElement: 0,
  zoom: 1,
  statusKey: "readyMessage",
  statusValues: {},
  lastTrigger: null
};

function setText(element, value) {
  if (element) {
    element.textContent = value;
  }
}

function padFrame(value, digits = 3) {
  return String(value).padStart(digits, "0");
}

function renderTags(items) {
  return items.map((item) => `<span class="tag">${item}</span>`).join("");
}

function renderLinkAttributes(link) {
  return link.external === false ? "" : ' target="_blank" rel="noreferrer"';
}

function renderLinkAction(link) {
  return link.action === "openArchive" ? " data-open-archive" : "";
}

function renderButtonLinks(links) {
  return links
    .map(
      (link) =>
        `<a class="cyber-button" href="${link.href}"${renderLinkAttributes(link)}${renderLinkAction(link)}>${link.label}</a>`
    )
    .join("");
}

function renderSimpleLinks(links) {
  return links
    .map((link) => `<a href="${link.href}"${renderLinkAttributes(link)}${renderLinkAction(link)}>${link.label}</a>`)
    .join("");
}

function renderProjectMedia(media, title) {
  if (!media?.src) {
    return "";
  }

  const width = media.width ? ` width="${media.width}"` : "";
  const height = media.height ? ` height="${media.height}"` : "";
  const alt = media.alt || `${title} project preview`;
  return `<figure class="case-media"><img src="${media.src}" alt="${alt}" loading="lazy"${width}${height} /></figure>`;
}

function getArchiveLocaleContent() {
  return content[currentLocale]?.deksmoArchive || content.en.deksmoArchive;
}

function formatArchiveMessage(template, values = {}) {
  return Object.entries(values).reduce(
    (message, [key, value]) => message.replaceAll(`{${key}}`, String(value)),
    template
  );
}

function updateArchiveStatus() {
  if (!elements.archiveStatusMessage) {
    return;
  }

  const archiveContent = getArchiveLocaleContent();
  const template = archiveContent[archiveState.statusKey] || archiveContent.readyMessage;
  setText(elements.archiveStatusMessage, formatArchiveMessage(template, archiveState.statusValues));
}

function setArchiveStatus(key, values = {}, focusMessage = false) {
  archiveState.statusKey = key;
  archiveState.statusValues = values;
  updateArchiveStatus();

  if (focusMessage) {
    elements.archiveStatusMessage?.focus({ preventScroll: true });
  }
}

function updateArchiveVariantPresentation(announce = false) {
  if (!elements.archiveRoot || !elements.archiveResultImage) {
    return;
  }

  const variant = archiveMedia[archiveState.resultVariant] ? archiveState.resultVariant : "colorized";
  const media = archiveMedia[variant];
  const archiveContent = getArchiveLocaleContent();

  elements.archiveRoot.dataset.resultVariant = variant;
  elements.archiveResultImage.src = media.src;
  elements.archiveResultImage.width = media.width;
  elements.archiveResultImage.height = media.height;
  elements.archiveResultImage.alt = archiveContent[media.altKey];
  if (elements.archiveBaseImage) {
    elements.archiveBaseImage.alt = archiveContent.translatedAlt;
  }

  if (elements.archiveResultLabel) {
    elements.archiveResultLabel.dataset.archiveText = media.labelKey;
    setText(elements.archiveResultLabel, archiveContent[media.labelKey]);
  }

  const isComparison = variant === "colorized";
  elements.archiveRoot.classList.toggle("is-comparison-preview", isComparison);
  elements.archiveRoot.classList.toggle("is-single-preview", !isComparison);
  if (elements.archiveCompareRange) {
    elements.archiveCompareRange.disabled = !isComparison;
  }

  if (elements.archiveBaseLabel) {
    elements.archiveBaseLabel.dataset.archiveText = "translatedLabel";
    setText(elements.archiveBaseLabel, archiveContent.translatedLabel);
  }

  elements.archiveRoot.querySelectorAll("[data-archive-variant]").forEach((button) => {
    const isActive = button.dataset.archiveVariant === variant;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (announce) {
    const messageKey = variant === "raw" ? "rawMessage" : variant === "translated" ? "translatedMessage" : "colorizedMessage";
    setArchiveStatus(messageKey);
  }
}

function setArchiveVariant(variant, announce = true) {
  if (!archiveMedia[variant]) {
    return;
  }

  archiveState.resultVariant = variant;
  updateArchiveVariantPresentation(announce);
}

function setArchiveActiveTool(toolName) {
  archiveState.activeTool = toolName;
  elements.archiveRoot?.querySelectorAll("[data-archive-tool]").forEach((tool) => {
    tool.classList.toggle("is-active", tool.dataset.archiveTool === toolName);
  });
}

function setArchiveComparison(value) {
  const position = Math.min(100, Math.max(0, Number(value) || 0));
  archiveState.comparisonPosition = position;
  elements.archiveCompare?.style.setProperty("--split", `${position}%`);
  if (elements.archiveCompareRange) {
    elements.archiveCompareRange.value = String(position);
  }
}

function setArchiveZoom(value) {
  const zoom = Math.min(1.5, Math.max(0.75, Number(value) || 1));
  archiveState.zoom = zoom;
  elements.archiveCompare?.style.setProperty("--archive-zoom", String(zoom));
  setText(elements.archiveZoomValue, `${Math.round(zoom * 100)}%`);
}

function selectArchiveText(index, announce = true) {
  if (!Number.isInteger(index) || !archiveTextElements[index]) {
    return;
  }

  archiveState.selectedTextElement = index;
  const selected = archiveTextElements[index];
  const number = String(index + 1).padStart(2, "0");

  elements.archiveRoot?.querySelectorAll("[data-archive-text-index]").forEach((button) => {
    const isSelected = Number(button.dataset.archiveTextIndex) === index;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  setText(elements.archiveSelectedNumber, number);
  setText(elements.archiveSelectedSource, selected.source);
  setText(elements.archiveSelectedTarget, selected.target);

  if (announce) {
    setArchiveStatus("textSelectedMessage", { number });
  }
}

function setArchiveTab(tabName, focusTab = false) {
  if (!elements.archiveRoot) {
    return;
  }

  const tabs = [...elements.archiveRoot.querySelectorAll("[data-archive-tab]")];
  const panels = [...elements.archiveRoot.querySelectorAll("[data-archive-panel]")];
  const selectedTab = tabs.find((tab) => tab.dataset.archiveTab === tabName);

  if (!selectedTab) {
    return;
  }

  archiveState.activeTab = tabName;
  elements.archiveRoot.dataset.activeTab = tabName;

  tabs.forEach((tab) => {
    const isActive = tab === selectedTab;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
  });

  panels.forEach((panel) => {
    panel.hidden = panel.dataset.archivePanel !== tabName;
  });

  if (focusTab) {
    selectedTab.focus();
  }
}

function applyArchiveLocale(localeData) {
  if (!elements.archiveRoot || !localeData.deksmoArchive) {
    return;
  }

  const archiveContent = localeData.deksmoArchive;
  document.querySelectorAll("[data-archive-text]").forEach((node) => {
    const key = node.dataset.archiveText;
    if (archiveContent[key] !== undefined) {
      setText(node, archiveContent[key]);
    }
  });

  document.querySelectorAll("[data-archive-aria]").forEach((node) => {
    const key = node.dataset.archiveAria;
    if (archiveContent[key] !== undefined) {
      node.setAttribute("aria-label", archiveContent[key]);
    }
  });

  updateArchiveVariantPresentation(false);
  updateArchiveStatus();
}

function openArchiveDialog(trigger) {
  if (!elements.archiveDialog) {
    return;
  }

  archiveState.lastTrigger = trigger || null;
  if (!elements.archiveDialog.open) {
    if (typeof elements.archiveDialog.showModal === "function") {
      elements.archiveDialog.showModal();
    } else {
      elements.archiveDialog.setAttribute("open", "");
    }
  }

  document.body.classList.add("archive-dialog-open");
  window.requestAnimationFrame(() => {
    elements.archiveDialog.querySelector("[data-close-archive]")?.focus({ preventScroll: true });
  });
}

function closeArchiveDialog() {
  if (!elements.archiveDialog?.open) {
    return;
  }

  if (typeof elements.archiveDialog.close === "function") {
    elements.archiveDialog.close();
  } else {
    elements.archiveDialog.removeAttribute("open");
    document.body.classList.remove("archive-dialog-open");
    archiveState.lastTrigger?.focus?.({ preventScroll: true });
    archiveState.lastTrigger = null;
  }
}

function initArchiveSimulator() {
  if (!elements.archiveRoot) {
    return;
  }

  const tabs = [...elements.archiveRoot.querySelectorAll("[data-archive-tab]")];

  document.addEventListener("click", (event) => {
    const opener = event.target instanceof Element
      ? event.target.closest("[data-open-archive]")
      : null;
    if (!opener) return;
    event.preventDefault();
    openArchiveDialog(opener);
  });

  elements.archiveDialog?.querySelector("[data-close-archive]")?.addEventListener("click", closeArchiveDialog);
  elements.archiveDialog?.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeArchiveDialog();
  });
  elements.archiveDialog?.addEventListener("click", (event) => {
    if (event.target === elements.archiveDialog) closeArchiveDialog();
  });
  elements.archiveDialog?.addEventListener("close", () => {
    document.body.classList.remove("archive-dialog-open");
    archiveState.lastTrigger?.focus?.({ preventScroll: true });
    archiveState.lastTrigger = null;
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => setArchiveTab(tab.dataset.archiveTab));
    tab.addEventListener("keydown", (event) => {
      const currentIndex = tabs.indexOf(tab);
      let nextIndex = currentIndex;

      if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
      if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;
      if (nextIndex === currentIndex) return;

      event.preventDefault();
      setArchiveTab(tabs[nextIndex].dataset.archiveTab, true);
    });
  });

  elements.archiveRoot.querySelectorAll("[data-archive-variant]").forEach((button) => {
    button.addEventListener("click", () => {
      const variant = button.dataset.archiveVariant;
      setArchiveVariant(variant);
      if (variant === "colorized") {
        setArchiveComparison(0);
        setArchiveActiveTool("color");
      } else {
        setArchiveActiveTool("select");
      }
    });
  });

  elements.archiveCompareRange?.addEventListener("input", (event) => {
    setArchiveComparison(event.currentTarget.value);
    setArchiveActiveTool("compare");
  });

  elements.archiveRoot.querySelectorAll("[data-archive-zoom]").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.archiveZoom === "in" ? 1 : -1;
      setArchiveZoom(archiveState.zoom + direction * 0.25);
    });
  });

  elements.archiveRoot.querySelectorAll("[data-archive-text-index]").forEach((button) => {
    button.addEventListener("click", () => selectArchiveText(Number(button.dataset.archiveTextIndex)));
  });

  elements.archiveRoot.querySelectorAll("[data-archive-simulated]").forEach((button) => {
    button.addEventListener("click", () => setArchiveStatus("offlineActionMessage", {}, true));
  });

  elements.archiveRoot.querySelectorAll("[data-archive-history]").forEach((button) => {
    button.addEventListener("click", () => {
      const variant = button.dataset.archiveHistory;
      setArchiveVariant(variant);
      setArchiveActiveTool(variant === "colorized" ? "color" : "select");
      if (variant === "colorized") setArchiveComparison(0);
    });
  });

  elements.archiveRoot.querySelectorAll("[data-archive-tool]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.archiveTool === "compare") {
        setArchiveVariant("colorized", false);
        setArchiveComparison(50);
        setArchiveActiveTool("compare");
        setArchiveStatus("comparisonMessage");
      } else if (button.dataset.archiveTool === "color") {
        setArchiveVariant("colorized", false);
        setArchiveComparison(0);
        setArchiveActiveTool("color");
        setArchiveStatus("colorMessage");
      } else {
        setArchiveActiveTool("select");
        setArchiveStatus("selectionMessage");
      }
    });
  });

  setArchiveTab(archiveState.activeTab);
  setArchiveComparison(archiveState.comparisonPosition);
  setArchiveZoom(archiveState.zoom);
  setArchiveActiveTool(archiveState.activeTool);
  selectArchiveText(archiveState.selectedTextElement, false);
  updateArchiveVariantPresentation(false);
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

function renderFeaturedProjects(localeData) {
  if (!elements.featuredProjects) {
    return;
  }

  elements.featuredProjects.innerHTML = localeData.featuredProjects
    .map((project) => {
      const mark = project.logo
        ? `<img class="case-logo" src="${project.logo}" alt="${project.title} logo" loading="lazy" />`
        : `<span class="case-glyph">PRV</span>`;

      return `
        <article class="featured-case reveal" data-accent="${project.accent}">
          <div class="case-head">
            <div class="case-mark">
              ${mark}
              <div>
                <p class="case-label">${project.label}</p>
                <h3>${project.title}</h3>
              </div>
            </div>
            <span class="case-serial">${project.serial}</span>
          </div>
          <p class="case-summary">${project.summary}</p>
          ${renderProjectMedia(project.media, project.title)}
          <ul class="case-impact">${project.impact.map((item) => `<li>${item}</li>`).join("")}</ul>
          <div class="tag-list">${renderTags(project.stack)}</div>
          ${project.status ? `<p class="project-status">${project.status}</p>` : ""}
          ${project.links?.length ? `<div class="case-links">${renderButtonLinks(project.links)}</div>` : ""}
        </article>
      `;
    })
    .join("");
}

function renderSupportProjects(localeData) {
  if (!elements.supportProjects) {
    return;
  }

  elements.supportProjects.innerHTML = localeData.supportProjects
    .map(
      (project, index) => `
        <article class="support-card reveal">
          <p class="support-card__meta">SYS-0${index + 3} / ${project.type}</p>
          <div class="case-mark">
            <img class="case-logo" src="${project.logo}" alt="${project.title} logo" loading="lazy" />
            <h3>${project.title}</h3>
          </div>
          <p>${project.summary}</p>
          ${renderProjectMedia(project.media, project.title)}
          <div class="tag-list">${renderTags(project.stack)}</div>
          ${project.status ? `<p class="project-status">${project.status}</p>` : ""}
          ${project.links?.length ? `<div class="support-card__links">${renderSimpleLinks(project.links)}</div>` : ""}
        </article>
      `
    )
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
      [...localeData.featuredProjects, ...localeData.supportProjects].flatMap((project) => project.stack)
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
            <img src="${translation.cover}" alt="${translation.title} cover" loading="lazy" />
          </div>
          <span class="translation-card__ep">${translation.ep}</span>
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

  const cards = document.querySelectorAll('.translation-card');
  cards.forEach(card => {
    if (!card.querySelector('.glossy-overlay')) {
      const gloss = document.createElement('div');
      gloss.className = 'glossy-overlay';
      card.appendChild(gloss);
    }
    
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const xPct = (mouseX / rect.width) - 0.5;
      const yPct = (mouseY / rect.height) - 0.5;
      
      const rotateY = xPct * 24; 
      const rotateX = yPct * -24;
      
      card.style.setProperty('--rx', `${rotateX}deg`);
      card.style.setProperty('--ry', `${rotateY}deg`);
      card.style.setProperty('--mx', `${50 - rotateY * 3}%`);
      card.style.setProperty('--my', `${50 - rotateX * 3}%`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.removeProperty('--rx');
      card.style.removeProperty('--ry');
      card.style.removeProperty('--mx');
      card.style.removeProperty('--my');
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
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
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
    if (item.dataset.revealBound === "true") {
      return;
    }

    if (item.getBoundingClientRect().top <= window.innerHeight * 0.92) {
      item.classList.add("is-visible");
      item.dataset.revealBound = "true";
      return;
    }

    item.dataset.revealBound = "true";
    revealObserver.observe(item);
  });
}

function setupActiveNavigation() {
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

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

      if (!visible) {
        return;
      }

      sections.forEach(({ link, target }) => {
        const isCurrent = target === visible.target;
        link.classList.toggle("is-active", isCurrent);
        if (isCurrent) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    {
      threshold: [0.2, 0.45, 0.7],
      rootMargin: "-20% 0px -55% 0px"
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
  elements.brandLink?.setAttribute("aria-label", localeData.aria.brandLink);
  elements.primaryNav?.setAttribute("aria-label", localeData.aria.primaryNav);
  elements.localeSwitcher?.setAttribute("aria-label", localeData.aria.localeSwitcher);

  setText(elements.brandSubtitle, localeData.brandSubtitle);
  setText(elements.navAbout, localeData.nav.about);
  setText(elements.navWork, localeData.nav.work);
  setText(elements.navTranslations, localeData.nav.translations);
  setText(elements.navCapabilities, localeData.nav.capabilities);
  setText(elements.navExperience, localeData.nav.experience);
  setText(elements.navContact, localeData.nav.contact);
  setText(elements.heroTitle, localeData.hero.title);
  setText(elements.heroCtaWork, localeData.hero.ctaWork);
  setText(elements.heroCtaContact, localeData.hero.ctaContact);
  applyArchiveLocale(localeData);

  setText(elements.aboutEyebrow, localeData.about.eyebrow);
  setText(elements.aboutTitle, localeData.about.title);
  setText(elements.aboutIntroLabel, localeData.about.introLabel);
  setText(elements.aboutIntroP1, localeData.about.introParagraphs[0]);
  setText(elements.aboutIntroP2, localeData.about.introParagraphs[1]);
  renderAboutCards(localeData.about.cards);

  setText(elements.workEyebrow, localeData.work.eyebrow);
  setText(elements.workTitle, localeData.work.title);
  setText(elements.workCopy, localeData.work.copy);
  setText(elements.supportEyebrow, localeData.work.supportEyebrow);
  setText(elements.supportCopy, localeData.work.supportCopy);
  renderFeaturedProjects(localeData);
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
    "rgba(212, 168, 75, 0.2)",
    "rgba(197, 56, 75, 0.15)",
    "rgba(110, 92, 160, 0.15)",
    "rgba(212, 168, 75, 0.12)",
    "rgba(197, 56, 75, 0.1)"
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
    particle.style.left = e.clientX - 3 + "px";
    particle.style.top = e.clientY - 3 + "px";

    document.body.appendChild(particle);

    particle.addEventListener("animationend", () => {
      particle.remove();
    });
  });
}

function initHeroSequence() {
  const root = elements.heroSequence;
  const canvas = document.querySelector("#hero-sequence-canvas");
  const fallbackImage = document.querySelector("#hero-sequence-fallback");
  const contentLayer = document.querySelector("#hero-sequence-content");
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const saveData = Boolean(navigator.connection?.saveData);

  if (!root || !canvas || !fallbackImage || !contentLayer) {
    return;
  }

  const context = canvas.getContext("2d");
  const frameCount = Number(root.dataset.frameCount || 0);
  const frameDigits = Number(root.dataset.framePad || 3);
  const frameExtension = root.dataset.frameExt || "jpg";
  const frameTemplate = root.dataset.frameTemplate || "";
  const sequenceVersion = root.dataset.sequenceVersion || "";
  const initialBatch = Math.max(1, Math.min(frameCount, Number(root.dataset.initialBatch || 12)));
  const sequenceBreakpoint = Number(root.dataset.sequenceBreakpoint || 720);
  const useMobileSequence = window.matchMedia(`(max-width: ${sequenceBreakpoint}px)`).matches;
  const sequenceDir = useMobileSequence
    ? root.dataset.sequenceMobileDir
    : root.dataset.sequenceDesktopDir;
  const posterSrc = useMobileSequence
    ? root.dataset.posterMobileSrc
    : root.dataset.posterDesktopSrc;
  root.dataset.sequenceVariant = useMobileSequence ? "mobile" : "desktop";
  const defaultFramePath = (index) => {
    const frameNumber = padFrame(index + 1, frameDigits);
    const versionSuffix = sequenceVersion ? `?v=${encodeURIComponent(sequenceVersion)}` : "";
    if (frameTemplate) {
      return `${sequenceDir}/${frameTemplate.replace("{n}", frameNumber)}${versionSuffix}`;
    }
    return `${sequenceDir}/frame-${frameNumber}.${frameExtension}${versionSuffix}`;
  };
  const resolvedPosterSrc = posterSrc || defaultFramePath(0);

  function activateFallback(sequenceMode) {
    root.dataset.sequenceMode = sequenceMode;
    root.classList.remove("is-loading", "is-ready", "is-started");
    root.classList.add("is-fallback");
    fallbackImage.src = resolvedPosterSrc;
    contentLayer.style.opacity = "1";
    contentLayer.style.transform = "translate3d(0, 0, 0) scale(1)";
    contentLayer.style.pointerEvents = "auto";
  }

  if (reducedMotionQuery.matches || saveData) {
    activateFallback(saveData ? "data-saver-fallback" : "reduced-motion-fallback");
    return;
  }

  if (!context || !sequenceDir || frameCount < 2) {
    activateFallback("load-failure-fallback");
    return;
  }

  fallbackImage.src = resolvedPosterSrc;
  root.dataset.sequenceMode = "scroll-sequence";
  root.classList.remove("is-fallback", "is-started");
  root.classList.add("is-loading");

  const frameUrls = Array.from({ length: frameCount }, (_, index) => defaultFramePath(index));

  const frames = new Array(frameCount).fill(null);
  const framePromises = new Map();
  let targetFrame = 0;
  let renderedFrame = -1;
  let ready = false;
  let resizeFrame = 0;
  let scrollFrame = 0;

  function updateContentVisibility(progress) {
    const fadeProgress = Math.min(Math.max(progress / 0.2, 0), 1);
    const opacity = 1 - fadeProgress;
    const translateY = fadeProgress * 36;
    const scale = 1 - fadeProgress * 0.04;

    contentLayer.style.opacity = opacity.toFixed(3);
    contentLayer.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`;
    contentLayer.style.pointerEvents = fadeProgress >= 1 ? "none" : "auto";
  }

  function loadFrame(index) {
    if (index < 0 || index >= frameCount) {
      return Promise.resolve(null);
    }

    if (frames[index]) {
      return Promise.resolve(frames[index]);
    }

    if (framePromises.has(index)) {
      return framePromises.get(index);
    }

    const promise = new Promise((resolve) => {
      const image = new Image();
      image.decoding = "async";
      image.onload = () => {
        frames[index] = image;
        framePromises.delete(index);

        if (ready && Math.abs(index - targetFrame) <= 2) {
          renderFrame(targetFrame);
        }

        resolve(image);
      };
      image.onerror = () => {
        framePromises.delete(index);
        resolve(null);
      };
      image.src = frameUrls[index];
    });

    framePromises.set(index, promise);
    return promise;
  }

  function findNearestLoadedFrame(index) {
    if (frames[index]) {
      return index;
    }

    for (let offset = 1; offset < frameCount; offset += 1) {
      const forward = index + offset;
      const backward = index - offset;

      if (forward < frameCount && frames[forward]) {
        return forward;
      }

      if (backward >= 0 && frames[backward]) {
        return backward;
      }
    }

    return frames[0] ? 0 : -1;
  }

  function renderFrame(requestedIndex) {
    const frameIndex = findNearestLoadedFrame(requestedIndex);
    const image = frames[frameIndex];
    if (frameIndex < 0 || !image || renderedFrame === frameIndex) {
      return;
    }

    const bounds = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.round(bounds.width * dpr));
    const height = Math.max(1, Math.round(bounds.height * dpr));

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);

    const canvasRatio = canvas.width / canvas.height;
    const imageRatio = image.naturalWidth / image.naturalHeight;
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (imageRatio > canvasRatio) {
      drawHeight = canvas.height;
      drawWidth = drawHeight * imageRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    } else {
      drawWidth = canvas.width;
      drawHeight = drawWidth / imageRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    }

    context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    renderedFrame = frameIndex;
  }

  function queueResize() {
    if (resizeFrame) return;

    resizeFrame = window.requestAnimationFrame(() => {
      resizeFrame = 0;
      renderedFrame = -1;
      renderFrame(targetFrame);
      updateFrameFromScroll();
    });
  }

  function updateFrameFromScroll() {
    const viewportHeight = window.visualViewport?.height || window.innerHeight || 1;
    const scrollSpan = Math.max(root.offsetHeight - viewportHeight, 1);
    const progress = Math.min(Math.max(-root.getBoundingClientRect().top / scrollSpan, 0), 1);
    targetFrame = Math.round(progress * (frameCount - 1));
    updateContentVisibility(progress);
    renderFrame(targetFrame);
  }

  function queueScrollUpdate() {
    if (scrollFrame) return;

    scrollFrame = window.requestAnimationFrame(() => {
      scrollFrame = 0;
      updateFrameFromScroll();
    });
  }

  function preloadRemainingFrames() {
    let nextIndex = initialBatch;

    const pump = () => {
      let budget = 0;

      while (nextIndex < frameCount && budget < 6) {
        loadFrame(nextIndex);
        nextIndex += 1;
        budget += 1;
      }

      if (nextIndex < frameCount) {
        window.setTimeout(pump, 24);
      }
    };

    pump();
  }

  Promise.all(
    Array.from({ length: initialBatch }, (_, index) => loadFrame(index))
  ).then((loadedFrames) => {
    if (!frames[0] || !loadedFrames.filter(Boolean).length) {
      activateFallback("load-failure-fallback");
      return;
    }

    ready = true;
    root.classList.remove("is-loading", "is-fallback");
    root.classList.add("is-ready");
    updateContentVisibility(0);
    renderFrame(0);

    window.setTimeout(() => {
      root.classList.add("is-started");
    }, 220);
    updateFrameFromScroll();
    window.addEventListener("scroll", queueScrollUpdate, { passive: true });
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", queueResize);
      window.visualViewport.addEventListener("scroll", queueScrollUpdate);
    }

    window.addEventListener("resize", queueResize);
    window.addEventListener("orientationchange", queueResize);
    preloadRemainingFrames();
  }).catch(() => {
    activateFallback("load-failure-fallback");
  });
}

/* ═══════════════════════════════════════════════════════
   INITIALIZATION
   ═══════════════════════════════════════════════════════ */

setupLocaleSwitcher();
applyLocale(getInitialLocale());
initArchiveSimulator();
initHeroSequence();
setupActiveNavigation();
initDanmakuParticles();
initCursorTrail();
