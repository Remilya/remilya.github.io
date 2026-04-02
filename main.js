const STORAGE_KEY = "remilya-locale";
const SUPPORTED_LOCALES = ["en", "tr"];

const urls = {
  github: "https://github.com/Remilya",
  linkedin: "https://www.linkedin.com/in/ilker-agirkaya/",
  deksmo: "https://deksmo.com",
  repoDeksmo: "https://github.com/Remilya/Deksmo",
  repoVision: "https://github.com/Remilya/Deksmo-Vision",
  repoMedical: "https://github.com/Remilya/DeksmoMedical",
  repoIlacdb: "https://github.com/Remilya/DeksmoILACDB",
  repoWatermark: "https://github.com/Remilya/Watermark-Deksmo",
  repoScrap: "https://github.com/Remilya/DeksmoScrap"
};

const content = {
  en: {
    meta: {
      title: "Remilya | Creative Technologist",
      description:
        "Remilya is a creative technologist building AI systems, local-first tools, product surfaces, and localization workflows."
    },
    aria: {
      brandLink: "Return to surface",
      primaryNav: "Main directory",
      localeSwitcher: "System language"
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
      eyebrow: "PORTFOLIO / REMILYA",
      role: "CREATIVE TECHNOLOGIST",
      title: "I build systems for messy digital workflows.",
      lead:
        "I work across AI systems, frontend product surfaces, localization-heavy workflows, and SEO-led delivery. The common thread is practical software: tools people can run, inspect, and improve.",
      ctaWork: "View projects",
      panelEyebrow: "Current focus",
      panelTitle: "Freelance product work with Deksmo at the center.",
      signals: [
        "Local-first AI tooling for OCR, translation, and review workflows.",
        "Frontend systems built for dense, operator-facing tasks.",
        "Localization work shaped by real publishing and delivery constraints."
      ],
      liveLabel: "Live site",
      liveStatus: "Online",
      rail: [
        {
          label: "MODE_01",
          accent: "green",
          title: "AI systems",
          copy: "Local-first translation, OCR, structured data, and human-in-the-loop workflows."
        },
        {
          label: "MODE_02",
          accent: "cyan",
          title: "Product surfaces",
          copy: "React interfaces, desktop utilities, browser extensions, and maintainable operator UX."
        },
        {
          label: "MODE_03",
          accent: "magenta",
          title: "Growth and localization",
          copy: "SEO architecture, bilingual workflows, and content systems tied to practical delivery."
        }
      ]
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
        "Smaller but important surfaces that show the breadth of the ecosystem: desktop tooling, browser capture, domain AI, and large structured datasets.",
      privateEngagementLabel: "Private engagement"
    },
    featuredProjects: [
      {
        slug: "deksmo",
        title: "Deksmo",
        label: "Featured system / AI manga localization engine",
        serial: "SYS-01",
        summary:
          "A full-stack localization platform that turns OCR, translation, QA, typesetting, and chapter processing into an inspectable workflow rather than a black-box generation pass.",
        impact: [
          "Built a pipeline that pairs Gemini-driven automation with a human-in-the-loop workbench for review, editing, and recovery.",
          "Extended the system across chapter uploads, book-mode translation, mobile-friendly surfaces, and Firebase-backed user workflows.",
          "Shaped the product around operator realities: rate limits, queue states, resumable projects, and downstream export needs."
        ],
        stack: ["React 19", "Vite", "FastAPI", "Firebase", "Gemini", "Tailwind CSS"],
        links: [
          { label: "Repository", href: urls.repoDeksmo },
          { label: "Live surface", href: urls.deksmo }
        ],
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
        links: [{ label: "Repository", href: urls.repoVision }],
        logo: "assets/logos/deksmo-vision.png"
      },
      {
        title: "DeksmoMedical",
        type: "Domain-specific AI application",
        summary:
          "A medicinal-herb application combining Turkish knowledge, AI recipe generation, configurable data storage, and optional local-model privacy mode.",
        stack: ["Next.js 15", "FastAPI", "SQLite", "Supabase"],
        links: [{ label: "Repository", href: urls.repoMedical }],
        logo: "assets/logos/deksmo-medical.png"
      },
      {
        title: "DeksmoILACDB",
        type: "Open-source drug dataset",
        summary:
          "A structured medicine database for Turkey with 31.5k+ records, archived HTML prospectus content, cleaned text, and usage imagery for offline retrieval.",
        stack: ["Python", "JSONL", "RAG-ready text", "Image dataset"],
        links: [{ label: "Repository", href: urls.repoIlacdb }],
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
      terminalTitle: "career.log",
      trainingEyebrow: "Selected training",
      trainingTitle: "Education and supporting credentials",
      trainingList: [
        "Yalova University - New Media and Communication, 2021-2025",
        "AI applications and foundational AI training",
        "Web programming, advanced graphics, and social media specialization",
        "English C1, communication training, and media publishing coursework"
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
      {
        period: "2021 - 2025",
        title: "New Media and Communication",
        kind: "Education / foundation",
        summary:
          "Built the theoretical base for the portfolio through BA-level study, then layered it with training in AI applications, graphics, social media, communication, and web programming."
      }
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
      eyebrow: "Contact / Open channels",
      title: "If the work looks useful, the fastest path is direct.",
      copy:
        "This site stays intentionally lean: no contact form, no inbox spam bait, no public PDF. Use GitHub to inspect the work and LinkedIn for the professional surface."
    },
    socialLinks: [
      { label: "GitHub", href: urls.github },
      { label: "LinkedIn", href: urls.linkedin }
    ],
    footer: `<p class="site-footer-signature"><span>By </span><span class="site-footer-signature-brand">REMILYA</span></p>`
  },
  tr: {
    meta: {
      title: "Remilya | Portfolyo",
      description:
        "Remilya; yapay zeka destekli araclar, yerel oncelikli sistemler, urun arayuzleri ve lokalizasyon odakli is akislari gelistiren bir yazilim ureticisidir."
    },
    aria: {
      brandLink: "Basa don",
      primaryNav: "Ana gezinme",
      localeSwitcher: "Dil secici"
    },
    brandSubtitle: "Yazilim / YZ Sistemleri / Lokalizasyon",
    nav: {
      about: "Hakkinda",
      work: "Isler",
      translations: "Ceviriler",
      capabilities: "Yetenekler",
      experience: "Deneyim",
      contact: "Iletisim"
    },
    hero: {
      eyebrow: "PORTFOLYO / REMILYA",
      role: "YAZILIM, YZ VE LOKALIZASYON",
      title: "Karmasik dijital surecleri daha kullanilabilir hale getiren sistemler kuruyorum.",
      lead:
        "Yapay zeka sistemleri, urun arayuzleri, lokalizasyon odakli is akislari ve SEO destekli web projeleri uzerinde calisiyorum. Benim icin iyi yazilim; kullanilabilen, izlenebilen ve gerektiginde mudahale edilebilen yazilimdir.",
      ctaWork: "Projeleri incele",
      panelEyebrow: "Guncel odak",
      panelTitle: "Deksmo merkezli freelance urun ve sistem calismalari.",
      signals: [
        "OCR, ceviri ve inceleme surecleri icin yerel oncelikli araclar.",
        "Yogun is akislarini sadelestiren urun arayuzleri.",
        "Gercek yayin ve teslimat kosullarina dayanan lokalizasyon deneyimi."
      ],
      liveLabel: "Canli site",
      liveStatus: "Aktif",
      rail: [
        {
          label: "MOD_01",
          accent: "green",
          title: "YZ ve otomasyon",
          copy: "Yerel oncelikli ceviri, OCR, yapisal veri ve insan denetimli is akisleri."
        },
        {
          label: "MOD_02",
          accent: "cyan",
          title: "Urun arayuzleri",
          copy: "React arayuzleri, masaustu araclari, tarayici eklentileri ve surdurulebilir kullanici deneyimi."
        },
        {
          label: "MOD_03",
          accent: "magenta",
          title: "Gorunurluk ve lokalizasyon",
          copy: "SEO mimarisi, cift dilli is akislari ve gercek teslimat ihtiyaclarina bagli icerik yapilari."
        }
      ]
    },
    about: {
      eyebrow: "Kimlik / Profil",
      title: "Yazilim, urun dusuncesi ve lokalizasyonu bir araya getiren bir profil.",
      introLabel: "Remilya profili",
      introParagraphs: [
        "Remilya, bu portfolyoda kullandigim isim. Buradaki isler; yazilim gelistirme, arayuz tasarimi, yapay zeka entegrasyonu, SEO ve lokalizasyon odakli uretimin kesisiminde duruyor.",
        "Portfolyonun merkezinde Deksmo ekosistemi var; ama bu birikim tek bir projeden gelmiyor. Musteri projeleri, altyazi ve medya surecleri ile Yeni Medya ve Iletisim altyapisi bu yapinin diger parcalarini olusturuyor."
      ],
      cards: [
        {
          index: "01",
          accent: "",
          title: "Yazilim ve yapay zeka",
          copy:
            "Python, FastAPI, React, Node.js, OCR hatlari, Gemini tabanli akislari, REST API'ler, Firebase ve yerel oncelikli sistem dusuncesi."
        },
        {
          index: "02",
          accent: "panel--cyan",
          title: "Buyume ve yaratici uretim",
          copy:
            "SEO, icerik mimarisi, Google ve Meta Ads planlama, UI/UX yonlendirmesi ve gorsel medya sureclerinde uretim destegi."
        },
        {
          index: "03",
          accent: "panel--magenta",
          title: "Egitim ve iletisim",
          copy:
            "Yeni Medya ve Iletisim lisans egitimi, Ingilizce C1 yetkinligi ve yapay zeka uygulamalari, grafik, sosyal medya ve web programlama alanlarinda ek egitimler."
        }
      ]
    },
    work: {
      eyebrow: "Isler / Vaka calismalari",
      title: "One cikan sistemler, ozel musteri isleri ve destekleyici projeler.",
      copy:
        "Portfolyonun merkezinde Deksmo bulunuyor: lokalizasyon, duzenleme, yakalama ve alan odakli bilgi sistemleri etrafinda gelistirdigim araclar ve urun deneyleri.",
      supportEyebrow: "Ek projeler / Destekleyici sistemler",
      supportCopy:
        "Ekosistemin kapsamini gosteren daha kucuk ama onemli isler: masaustu araclari, tarayici eklentileri, alan odakli yapay zeka uygulamalari ve buyuk yapisal veri setleri.",
      privateEngagementLabel: "Ozel musteri projesi"
    },
    featuredProjects: [
      {
        slug: "deksmo",
        title: "Deksmo",
        label: "One cikan proje / YZ destekli manga lokalizasyon sistemi",
        serial: "SYS-01",
        summary:
          "OCR, ceviri, kalite kontrol, typesetting ve bolum islemeyi kara kutu bir uretim yerine izlenebilir bir is akisina donusturen tam yigin lokalizasyon platformu.",
        impact: [
          "Gemini destekli otomasyonu; inceleme, duzenleme ve hata durumlarinda geri donus imkani veren insan denetimli bir calisma alaniyla birlestirdim.",
          "Sistemi bolum yukleme, kitap modu ceviri, mobil uyumlu yuzeyler ve Firebase destekli kullanici akislarini kapsayacak sekilde genislettim.",
          "Urunu; rate limit, kuyruk durumu, yarim kalan projeler ve disa aktarma ihtiyaclari gibi gercek kullanim senaryolarina gore sekillendirdim."
        ],
        stack: ["React 19", "Vite", "FastAPI", "Firebase", "Gemini", "Tailwind CSS"],
        links: [
          { label: "Repo", href: urls.repoDeksmo },
          { label: "Canli site", href: urls.deksmo }
        ],
        accent: "green",
        logo: "assets/logos/deksmo-core.png"
      },
      {
        slug: "legal-rebuild",
        title: "Hukuk Hizmetleri Platformu Yeniden Yapimi",
        label: "One cikan musteri isi / Ozel sistem",
        serial: "SYS-02",
        summary:
          "Bir hukuk hizmetleri markasi icin UI/UX, frontend gelistirme, bilgi mimarisi ve teknik SEO katmanlarini kapsayan anonimlestirilmis freelance donusum projesi.",
        impact: [
          "Kamusal siteyi sifirdan yeniden kurarak daha net bir hizmet anlatimi ve daha guclu bir guven zemini olusturdum.",
          "Teknik ve icerik odakli SEO ile siteyi markali Google aramalarinda gorunmez durumdan ilk siraya tasidim.",
          "Web sitesini yalnizca bir brosur olarak degil, is ureten ticari bir yuzey olarak ele alip urun dusuncesiyle buyume tarafini birlestirdim."
        ],
        stack: ["UI/UX", "Frontend", "SEO", "Icerik stratejisi", "Performans"],
        links: [],
        accent: "magenta",
        logo: ""
      }
    ],
    supportProjects: [
      {
        title: "Deksmo Vision",
        type: "Yerel oncelikli ceviri calisma alani",
        summary:
          "Yerel OCR, maskeleme, diskte tutulan proje durumu, saglayici profilleri ve secili balon duzenleme odakli React ve FastAPI editoru.",
        stack: ["React", "TypeScript", "FastAPI", "PaddleOCR"],
        links: [{ label: "Repo", href: urls.repoVision }],
        logo: "assets/logos/deksmo-vision.png"
      },
      {
        title: "DeksmoMedical",
        type: "Alan odakli YZ uygulamasi",
        summary:
          "Turkce bilgi birikimini, yapay zeka destekli tarif uretimini, ayarlanabilir veri saklamayi ve istege bagli yerel model gizliligini bir araya getiren tibbi bitki uygulamasi.",
        stack: ["Next.js 15", "FastAPI", "SQLite", "Supabase"],
        links: [{ label: "Repo", href: urls.repoMedical }],
        logo: "assets/logos/deksmo-medical.png"
      },
      {
        title: "DeksmoILACDB",
        type: "Acik kaynak ilac veri seti",
        summary:
          "Turkiye icin 31.5 binin uzerinde kayit, arsivlenmis HTML prospektus icerigi, temizlenmis metin ve kullanim gorselleri iceren yapisal bir ilac veritabani.",
        stack: ["Python", "JSONL", "RAG hazir metin", "Gorsel veri seti"],
        links: [{ label: "Repo", href: urls.repoIlacdb }],
        logo: "assets/logos/deksmo-ilacdb.svg"
      },
      {
        title: "Watermark-Deksmo",
        type: "Masaustu toplu isleme araci",
        summary:
          "Genis manga ve cizgi roman arsivlerine sayfa bazli istisnalar ve onizleme odakli kontrollerle watermark uygulayan Python masaustu araci.",
        stack: ["Python", "CustomTkinter", "Pillow", "PyInstaller"],
        links: [{ label: "Repo", href: urls.repoWatermark }],
        logo: "assets/logos/watermark-deksmo.png"
      },
      {
        title: "Deksmo WebGrab",
        type: "Tarayici yakalama ve aktarma araci",
        summary:
          "Gorsel agirlikli web kaynaklarini toplayip sonrasinda inceleme, yeniden siralama ve PDF ya da ZIP paketlerine aktarma imkani sunan Manifest V3 eklentisi.",
        stack: ["JavaScript", "Manifest V3", "PDF disa aktarma", "ZIP disa aktarma"],
        links: [{ label: "Repo", href: urls.repoScrap }],
        logo: "assets/logos/deksmo-webgrab.png"
      }
    ],
    capabilitiesSection: {
      eyebrow: "Yetenekler / Stack",
      title: "Kurabildigim, yayina alabildigim ve iyilestirebildigim sistemler."
    },
    capabilities: [
      {
        title: "Yapay zeka sistemleri ve yerel oncelikli araclar",
        meta: "Yetenek 01",
        copy:
          "Kullanici kontrolunu gorunur tutan yapay zeka destekli surecler kuruyorum: OCR, kuyruk yonetimi, proje kaliciligi, disa aktarma yuzeyleri ve korlemesine guvenmek yerine denetlenebilen model destekli araclar.",
        tags: ["OCR", "LLM entegrasyonu", "Kuyruk mantigi", "Yerel runtime"]
      },
      {
        title: "Frontend urun arayuzleri",
        meta: "Yetenek 02",
        copy:
          "Web uygulamalari, tarayici eklentileri ve masaustu araclari icin yogun is akislarina uygun arayuzler tasarlayip gelistiriyorum; odak noktam hiyerarsi, responsive duzen ve bakimi kolay etkilesim kaliplari.",
        tags: ["React", "UI sistemleri", "Responsive duzen", "Kullanici deneyimi"]
      },
      {
        title: "Buyume, lokalizasyon ve icerik yapilari",
        meta: "Yetenek 03",
        copy:
          "Urun teslimatini gorunurluk ve iletisimle baglayabiliyorum: SEO mimarisi, cift dilli is akis dusuncesi, altyazi ve lokalizasyon surecleri ile kesfi ve guveni destekleyen icerik yapilari.",
        tags: ["SEO", "Lokalizasyon", "Icerik stratejisi", "Dijital uygulama"]
      }
    ],
    stack: {
      eyebrow: "Kullandigim teknolojiler",
      copy: "Portfolyo boyunca tekrar eden temel teknolojiler."
    },
    experience: {
      eyebrow: "Deneyim / Zaman cizgisi",
      title: "Teslimat, uretim ve sistem dusuncesini birlestiren kariyer yolu.",
      terminalTitle: "kariyer.log",
      trainingEyebrow: "Egitimler",
      trainingTitle: "Egitim ve destekleyici birikim",
      trainingList: [
        "Yalova Universitesi - Yeni Medya ve Iletisim, 2021-2025",
        "Yapay zeka uygulamalari ve temel yapay zeka egitimleri",
        "Web programlama, ileri grafik ve sosyal medya uzmanlasmasi",
        "Ingilizce C1, iletisim egitimleri ve medya yayinciligi dersleri"
      ]
    },
    timeline: [
      {
        period: "2025 - Gunumuz",
        title: "Freelance Dijital Proje Yonetimi",
        kind: "Musteri projeleri / SEO / web gelistirme",
        summary:
          "Hizmet markalari icin UI/UX, frontend gelistirme, teknik SEO ve buyume odakli icerik kurgusu uzerinden web deneyimleri kurup gelistiriyorum."
      },
      {
        period: "2024 - 2025",
        title: "Produksiyon ve Altyazi Stajyeri",
        kind: "Post-produksiyon / lokalizasyon",
        summary:
          "Kurumsal post-produksiyon sureclerine destek verirken Ingilizceden Turkceye altyazi ve lokalizasyon gorevleri ustlendim; bu surec bana medya operasyonlarinda disiplin kazandirdi."
      },
      {
        period: "2021 - 2025",
        title: "Yeni Medya ve Iletisim Lisansi",
        kind: "Egitim / temel",
        summary:
          "Portfolyonun teorik zemini lisans egitimiyle kuruldu; ardindan yapay zeka uygulamalari, grafik, sosyal medya, iletisim ve web programlama egitimleriyle derinlestirildi."
      }
    ],
    translationsSection: {
      eyebrow: "Ceviriler / Manga",
      title: "Umineko ve Re:Zero",
      copy: "Umineko: When They Cry ve Re:Zero serileri icin hazirladigim Turkce manga cevirileri.",
      readLabel: "Oku",
      roleLabel: "Cevirmen"
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
      eyebrow: "Iletisim / Acik kanallar",
      title: "Yaptigim is sizin icin uygunsa en hizli yol dogrudan iletisim.",
      copy:
        "Siteyi bilerek sade tuttum: iletisim formu yok, gereksiz yonlendirme yok, herkese acik bir PDF de yok. Isleri incelemek icin GitHub'a, profesyonel baglanti icin LinkedIn'e bakabilirsiniz."
    },
    socialLinks: [
      { label: "GitHub", href: urls.github },
      { label: "LinkedIn", href: urls.linkedin }
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
  brandSubtitle: document.querySelector("#brand-subtitle"),
  navAbout: document.querySelector("#nav-about"),
  navWork: document.querySelector("#nav-work"),
  navTranslations: document.querySelector("#nav-translations"),
  navCapabilities: document.querySelector("#nav-capabilities"),
  navExperience: document.querySelector("#nav-experience"),
  navContact: document.querySelector("#nav-contact"),
  heroEyebrow: document.querySelector("#hero-eyebrow"),
  heroRole: document.querySelector("#hero-role"),
  heroTitle: document.querySelector("#hero-title"),
  heroLead: document.querySelector("#hero-lead"),
  heroCtaWork: document.querySelector("#hero-cta-work"),
  heroPanelEyebrow: document.querySelector("#hero-panel-eyebrow"),
  heroPanelTitle: document.querySelector("#hero-panel-title"),
  heroSignalList: document.querySelector("#hero-signal-list"),
  heroLiveLabel: document.querySelector("#hero-live-label"),
  heroLiveStatus: document.querySelector("#hero-live-status"),
  heroRail: document.querySelector("#hero-rail"),
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

function renderButtonLinks(links) {
  return links
    .map(
      (link) =>
        `<a class="cyber-button" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
    )
    .join("");
}

function renderSimpleLinks(links) {
  return links
    .map((link) => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`)
    .join("");
}

function renderHeroSignalList(signals) {
  if (elements.heroSignalList) {
    elements.heroSignalList.innerHTML = signals.map((item) => `<li>${item}</li>`).join("");
  }
}

function renderHeroEyebrow(text) {
  if (elements.heroEyebrow) {
    elements.heroEyebrow.innerHTML = `${text} <span class="cursor" aria-hidden="true"></span>`;
  }
}

function renderHeroRail(items) {
  if (!elements.heroRail) {
    return;
  }

  elements.heroRail.innerHTML = items
    .map(
      (item) => `
        <article class="rail-card">
          <span class="rail-label">${item.label}</span>
          <strong>${item.title}</strong>
          <p>${item.copy}</p>
        </article>
      `
    )
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
          <ul class="case-impact">${project.impact.map((item) => `<li>${item}</li>`).join("")}</ul>
          <div class="tag-list">${renderTags(project.stack)}</div>
          <div class="case-links">
            ${
              project.links.length
                ? renderButtonLinks(project.links)
                : `<span class="tag">${localeData.work.privateEngagementLabel}</span>`
            }
          </div>
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
          <div class="tag-list">${renderTags(project.stack)}</div>
          <div class="support-card__links">${renderSimpleLinks(project.links)}</div>
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
        <a class="translation-card reveal" href="${translation.href}" target="_blank" rel="noreferrer">
          <div class="translation-cover">
            <img src="${translation.cover}" alt="${translation.title} cover" loading="lazy" />
          </div>
          <span class="translation-card__ep">${translation.ep}</span>
          <h3 class="translation-card__title">${translation.title}</h3>
          <span class="translation-card__sub">${translation.subtitle}</span>
          <span class="translation-card__role">${localeData.translationsSection.roleLabel}</span>
        </a>
      `
    )
    .join("");

  init3DCards();
}

function init3DCards() {
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
  });
}

function renderSocialLinks(localeData) {
  if (!elements.socialLinks) {
    return;
  }

  elements.socialLinks.innerHTML = localeData.socialLinks
    .map(
      (link, index) => `
        <a class="cyber-button${index === 0 ? " cyber-button--primary" : ""}" href="${link.href}" target="_blank" rel="noreferrer">
          ${link.label}
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
        link.classList.toggle("is-active", target === visible.target);
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
  setText(elements.navCapabilities, localeData.nav.capabilities);
  setText(elements.navExperience, localeData.nav.experience);
  setText(elements.navContact, localeData.nav.contact);
  renderHeroEyebrow(localeData.hero.eyebrow);
  setText(elements.heroRole, localeData.hero.role);
  setText(elements.heroTitle, localeData.hero.title);
  if (elements.heroTitle) {
    elements.heroTitle.dataset.text = localeData.hero.title;
  }
  setText(elements.heroLead, localeData.hero.lead);
  setText(elements.heroCtaWork, localeData.hero.ctaWork);
  setText(elements.heroPanelEyebrow, localeData.hero.panelEyebrow);
  setText(elements.heroPanelTitle, localeData.hero.panelTitle);
  renderHeroSignalList(localeData.hero.signals);
  setText(elements.heroLiveLabel, localeData.hero.liveLabel);
  setText(elements.heroLiveStatus, localeData.hero.liveStatus);
  renderHeroRail(localeData.hero.rail);

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

/* ═══════════════════════════════════════════════════════
   SPELL CIRCLE PARALLAX
   Subtle parallax movement on scroll for the spell circle
   ═══════════════════════════════════════════════════════ */

function initSpellCircleParallax() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const spellCircle = document.querySelector(".spell-circle");
  if (!spellCircle) return;

  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const translateY = scrollY * 0.15;
        const scale = 1 - Math.min(scrollY * 0.0003, 0.3);
        spellCircle.style.transform = `translateY(${translateY}px) scale(${scale})`;
        spellCircle.style.opacity = Math.max(0.12 - scrollY * 0.0001, 0.02);
        ticking = false;
      });
      ticking = true;
    }
  });
}

/* ═══════════════════════════════════════════════════════
   INITIALIZATION
   ═══════════════════════════════════════════════════════ */

setupLocaleSwitcher();
applyLocale(getInitialLocale());
setupActiveNavigation();
initDanmakuParticles();
initCursorTrail();
initSpellCircleParallax();
