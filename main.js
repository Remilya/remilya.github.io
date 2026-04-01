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
        "Remilya is a creative technologist building AI systems, local-first tools, product surfaces, and digital experiences with a Deksmo-centered portfolio."
    },
    aria: {
      brandLink: "Go to top",
      primaryNav: "Primary navigation",
      localeSwitcher: "Language switcher"
    },
    brandSubtitle: "Creative Technologist / Deksmo ecosystem",
    nav: {
      about: "About",
      work: "Work",
      capabilities: "Capabilities",
      experience: "Experience",
      contact: "Contact"
    },
    hero: {
      eyebrow: "SYSTEM READY / REMILYA",
      role: "Creative Technologist",
      title: "I build systems for messy digital worlds.",
      lead:
        "I work across AI systems, frontend product surfaces, SEO-led web strategy, and localization-heavy workflows. The strongest thread is practical software: tools that operators can actually run, inspect, edit, and scale.",
      ctaWork: "View projects",
      panelEyebrow: "Current signal",
      panelTitle: "Freelance product work with Deksmo as the backbone.",
      signals: [
        "Local-first AI tooling where OCR, rendering, exports, and state stay close to the user.",
        "Frontend surfaces that translate dense workflows into usable operator interfaces.",
        "Growth-minded delivery shaped by SEO, content structure, and localization experience."
      ],
      liveLabel: "Live surface",
      liveStatus: "Online",
      rail: [
        {
          label: "MODE_01",
          accent: "green",
          title: "AI systems",
          copy: "Local-first translation, OCR, RAG-ready data, and human-in-the-loop workflows."
        },
        {
          label: "MODE_02",
          accent: "cyan",
          title: "Product surfaces",
          copy: "React interfaces, desktop utilities, browser extensions, and operator dashboards."
        },
        {
          label: "MODE_03",
          accent: "magenta",
          title: "Growth and localization",
          copy: "SEO architecture, bilingual workflow thinking, content systems, and digital execution."
        }
      ]
    },
    about: {
      eyebrow: "About / Identity",
      title: "Creative technology with product, media, and growth literacy.",
      introLabel: "Remilya profile",
      introParagraphs: [
        "Remilya is the public identity on this site. The work behind it combines software engineering, interface design, AI integration, SEO strategy, and localization-aware production. The goal is not novelty for its own sake. It is building systems that stay usable under real-world mess.",
        "The portfolio leans heavily on the Deksmo ecosystem, but the surrounding skill set comes from client delivery, subtitle and media workflows, and a New Media and Communication background that informs how products are framed and communicated."
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
    footer:
      "Static portfolio for GitHub Pages. Built around real projects, client delivery, and operator-first systems."
  },
  tr: {
    meta: {
      title: "Remilya | Yaratici Teknolog",
      description:
        "Remilya, Deksmo merkezli portfoyunde yapay zeka sistemleri, yerel oncelikli araclar, urun yuzeyleri ve dijital deneyimler ureten bir yaratici teknologdur."
    },
    aria: {
      brandLink: "Basa don",
      primaryNav: "Ana gezinme",
      localeSwitcher: "Dil secici"
    },
    brandSubtitle: "Yaratici Teknolog / Deksmo ekosistemi",
    nav: {
      about: "Hakkinda",
      work: "Isler",
      capabilities: "Yetenekler",
      experience: "Deneyim",
      contact: "Iletisim"
    },
    hero: {
      eyebrow: "SISTEM HAZIR / REMILYA",
      role: "Yaratici Teknolog",
      title: "Karmasik dijital akislara sistemler kuruyorum.",
      lead:
        "Yapay zeka sistemleri, urun arayuzleri, SEO odakli web stratejisi ve lokalizasyon agirlikli surecler uzerinde calisiyorum. Ana cizgi pratik yazilim: operatorlerin gercekten calistirabildigi, inceleyebildigi, duzenleyebildigi ve buyutebildigi araclar.",
      ctaWork: "Projeleri gor",
      panelEyebrow: "Guncel sinyal",
      panelTitle: "Freelance urun teslimati; omurgada Deksmo.",
      signals: [
        "OCR, render, disa aktarma ve durum yonetimini kullaniciya yakin tutan yerel oncelikli yapay zeka araclari.",
        "Yogun is akislarini kullanilabilir operator arayuzlerine ceviren frontend yuzeyleri.",
        "SEO, icerik yapisi ve lokalizasyon deneyimiyle sekillenen buyume odakli teslimat."
      ],
      liveLabel: "Canli yuzey",
      liveStatus: "Aktif",
      rail: [
        {
          label: "MOD_01",
          accent: "green",
          title: "Yapay zeka sistemleri",
          copy: "Yerel oncelikli ceviri, OCR, RAG hazir veri ve insan denetimli akislari kuruyorum."
        },
        {
          label: "MOD_02",
          accent: "cyan",
          title: "Urun yuzeyleri",
          copy: "React arayuzleri, masaustu araclari, tarayici eklentileri ve operator panelleri gelistiriyorum."
        },
        {
          label: "MOD_03",
          accent: "magenta",
          title: "Buyume ve lokalizasyon",
          copy: "SEO mimarisi, cift dilli dusunce, icerik sistemleri ve dijital uygulama tarafini birlestiriyorum."
        }
      ]
    },
    about: {
      eyebrow: "Hakkinda / Kimlik",
      title: "Urun, medya ve buyume okuryazarligi ile birlesen yaratici teknoloji.",
      introLabel: "Remilya profili",
      introParagraphs: [
        "Remilya bu sitedeki kamusal kimlik. Arkasindaki is; yazilim muhendisligi, arayuz tasarimi, yapay zeka entegrasyonu, SEO stratejisi ve lokalizasyon farkindalikli uretimi bir araya getiriyor. Hedef yenilik olsun diye yenilik degil. Gercek dunya karmasasinda kullanilabilir kalan sistemler kurmak.",
        "Portfoyun omurgasi Deksmo ekosistemi, ancak cevresindeki yetenek seti musteri teslimatlarindan, altyazi ve medya sureclerinden, urunlerin nasil konumlandirildigini ve anlatildigini etkileyen Yeni Medya ve Iletisim altyapisindan geliyor."
      ],
      cards: [
        {
          index: "01",
          accent: "",
          title: "Yazilim ve yapay zeka",
          copy:
            "Python, FastAPI, React, Node.js, OCR boru hatlari, Gemini tabanli akislari, REST API'ler, Firebase ve yerel oncelikli calisma mantigi."
        },
        {
          index: "02",
          accent: "panel--cyan",
          title: "Buyume ve yaratici uygulama",
          copy:
            "SEO, icerik mimarisi, Google ve Meta Ads planlama, UI/UX yonu ve gorsel medya sureclerinde produksiyon destegi."
        },
        {
          index: "03",
          accent: "panel--magenta",
          title: "Egitim ve iletisim",
          copy:
            "Lisans seviyesinde Yeni Medya ve Iletisim egitimi, Ingilizce C1 yetkinligi ve yapay zeka uygulamalari, grafik, sosyal medya ve web programlama egitimleri."
        }
      ]
    },
    work: {
      eyebrow: "Isler / Vaka calismalari",
      title: "Amiral gemisi sistemler, ozel teslimatlar ve destekleyici urun dosyalari.",
      copy:
        "Merkezde Deksmo var: lokalizasyon, duzenleme, yakalama ve alan odakli bilgi sistemleri etrafinda gelisen arac, runtime ve urun deneyleri kumesi.",
      supportEyebrow: "Dosya / Destekleyici sistemler",
      supportCopy:
        "Ekosistemin genisligini gosteren daha kucuk ama onemli yuzeyler: masaustu araclari, tarayici yakalama, alan odakli yapay zeka ve buyuk yapisal veri setleri.",
      privateEngagementLabel: "Ozel musteri isi"
    },
    featuredProjects: [
      {
        slug: "deksmo",
        title: "Deksmo",
        label: "One cikan sistem / YZ manga lokalizasyon motoru",
        serial: "SYS-01",
        summary:
          "OCR, ceviri, kalite kontrol, typesetting ve bolum islemeyi kara kutu uretim yerine izlenebilir bir is akisina ceviren tam yigin bir lokalizasyon platformu.",
        impact: [
          "Gemini destekli otomasyonu; inceleme, duzenleme ve geri donus icin insan denetimli bir calisma alaniyla birlestiren bir hat kuruldu.",
          "Sistem bolum yukleme, kitap modu ceviri, mobil uyumlu yuzeyler ve Firebase destekli kullanici akislarina kadar genisletildi.",
          "Urun; rate limit, kuyruk durumlari, devam ettirilebilir projeler ve disa aktarma ihtiyaclari gibi operator gercekliklerine gore sekillendirildi."
        ],
        stack: ["React 19", "Vite", "FastAPI", "Firebase", "Gemini", "Tailwind CSS"],
        links: [
          { label: "Repo", href: urls.repoDeksmo },
          { label: "Canli yuzey", href: urls.deksmo }
        ],
        accent: "green",
        logo: "assets/logos/deksmo-core.png"
      },
      {
        slug: "legal-rebuild",
        title: "Hukuk Hizmetleri Platformu Yeniden Yapimi",
        label: "One cikan is / Ozel musteri sistemi",
        serial: "SYS-02",
        summary:
          "UI/UX, frontend teslimati, bilgi mimarisi ve teknik SEO katmanlarini kapsayan; hukuk hizmetleri markasi icin anonimlestirilmis freelance donusum projesi.",
        impact: [
          "Kamusal site sifirdan yeniden kurularak daha net bir hizmet anlatisi ve daha guclu bir guven yuzeyi olusturuldu.",
          "Teknik ve icerik odakli SEO ile site, markali Google aramalarinda gorunmez durumdan ilk siraya tasindi.",
          "Web sitesi bir brosur degil isleyen bir ticari yuzey olarak ele alinip urun dusuncesi buyume tarafiyla baglandi."
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
        type: "Yerel oncelikli ceviri tezgahi",
        summary:
          "Yerel OCR, maskeleme, diskte tutulan proje durumu, saglayici profilleri ve secili balon duzenleme odakli React ve FastAPI editoru.",
        stack: ["React", "TypeScript", "FastAPI", "PaddleOCR"],
        links: [{ label: "Repo", href: urls.repoVision }],
        logo: "assets/logos/deksmo-vision.png"
      },
      {
        title: "DeksmoMedical",
        type: "Alan odakli yapay zeka uygulamasi",
        summary:
          "Turkce bilgi birikimini, yapay zeka tarif uretimini, ayarlanabilir veri saklamayi ve istege bagli yerel model gizliligini birlestiren tibbi bitki uygulamasi.",
        stack: ["Next.js 15", "FastAPI", "SQLite", "Supabase"],
        links: [{ label: "Repo", href: urls.repoMedical }],
        logo: "assets/logos/deksmo-medical.png"
      },
      {
        title: "DeksmoILACDB",
        type: "Acik kaynak ilac veri seti",
        summary:
          "Turkiye icin 31.5 binin uzerinde kayit, arsivlenmis HTML prospektus icerigi, temizlenmis metin ve kullanim gorselleri iceren yapisal ilac veritabani.",
        stack: ["Python", "JSONL", "RAG hazir metin", "Gorsel veri seti"],
        links: [{ label: "Repo", href: urls.repoIlacdb }],
        logo: "assets/logos/deksmo-ilacdb.svg"
      },
      {
        title: "Watermark-Deksmo",
        type: "Masaustu toplu is araci",
        summary:
          "Genis manga ve cizgi roman partilerine sayfa bazli istisnalar ve onceleme odakli kontrollerle watermark uygulayan Python masaustu araci.",
        stack: ["Python", "CustomTkinter", "Pillow", "PyInstaller"],
        links: [{ label: "Repo", href: urls.repoWatermark }],
        logo: "assets/logos/watermark-deksmo.png"
      },
      {
        title: "Deksmo WebGrab",
        type: "Tarayici yakalama ve disa aktarma",
        summary:
          "Gorsel agirlikli web kaynaklarini toplayip ardindan inceleme, yeniden siralama ve PDF ya da ZIP paketlerine aktarma imkani veren Manifest V3 eklentisi.",
        stack: ["JavaScript", "Manifest V3", "PDF disa aktarma", "ZIP disa aktarma"],
        links: [{ label: "Repo", href: urls.repoScrap }],
        logo: "assets/logos/deksmo-webgrab.png"
      }
    ],
    capabilitiesSection: {
      eyebrow: "Yetenekler / Stack",
      title: "Kurabildigim, yayina alabildigim ve gelistirebildigim seyler."
    },
    capabilities: [
      {
        title: "Yapay zeka sistemleri ve yerel oncelikli araclar",
        meta: "Yetenek 01",
        copy:
          "Operator kontrolunu gorunur tutan yapay zeka destekli surecler kuruyorum: OCR, kuyruk mantigi, proje kaliciligi, disa aktarma yuzeyleri ve korlemesine guvenmek yerine denetlenebilen model destekli araclar.",
        tags: ["OCR", "LLM entegrasyonu", "Kuyruk mantigi", "Yerel runtime"]
      },
      {
        title: "Frontend urun yuzeyleri",
        meta: "Yetenek 02",
        copy:
          "Web uygulamalari, tarayici eklentileri ve masaustu araclari icin yogun is akislarina uygun arayuzler tasarlayip yayina aliyorum; odak noktalari hiyerarsi, responsive yapilar ve bakimi kolay etkilesim kaliplari.",
        tags: ["React", "UI sistemleri", "Responsive duzen", "Operator UX"]
      },
      {
        title: "Buyume, lokalizasyon ve icerik sistemleri",
        meta: "Yetenek 03",
        copy:
          "Urun teslimatini gorunurluk ve iletisimle baglayabiliyorum: SEO mimarisi, cift dilli is akis dusuncesi, altyazi ve lokalizasyon surecleri ve kesif ile guveni destekleyen icerik sistemleri.",
        tags: ["SEO", "Lokalizasyon", "Icerik stratejisi", "Dijital uygulama"]
      }
    ],
    stack: {
      eyebrow: "Teknoloji izi",
      copy: "Portfoy boyunca tekrar eden teknolojiler."
    },
    experience: {
      eyebrow: "Deneyim / Zaman cizgisi",
      title: "Teslimat, produksiyon ve sistem dusuncesini birlestiren kariyer hatti.",
      terminalTitle: "kariyer.log",
      trainingEyebrow: "Secilmis egitimler",
      trainingTitle: "Egitim ve destekleyici yetkinlikler",
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
        kind: "Musteri sistemleri / SEO / web teslimati",
        summary:
          "Hizmet markalari icin UI/UX calismalari, frontend uygulamasi, teknik SEO ve buyume odakli icerik yapisi uzerinden web deneyimleri kurup gelistiriyorum."
      },
      {
        period: "2024 - 2025",
        title: "Produksiyon ve Altyazi Stajyeri",
        kind: "Post-produksiyon / lokalizasyon",
        summary:
          "Kurumsal post-produksiyon sureclerine destek verirken Ingilizceden Turkceye altyazi ve lokalizasyon gorevleri ustlendim; bu surec medya boru hattinda disiplin kazandirdi."
      },
      {
        period: "2021 - 2025",
        title: "Yeni Medya ve Iletisim",
        kind: "Egitim / temel",
        summary:
          "Portfoyun teorik zemini lisans egitimiyle kuruldu; ardindan yapay zeka uygulamalari, grafik, sosyal medya, iletisim ve web programlama egitimleriyle derinlestirildi."
      }
    ],
    contact: {
      eyebrow: "Iletisim / Acik kanallar",
      title: "Is faydali gorunuyorsa en hizli yol dogrudan iletisim.",
      copy:
        "Site bilerek yalniz tutuldu: iletisim formu yok, spam daveti yok, kamusal PDF yok. Isi incelemek icin GitHub'i, profesyonel yuzey icin LinkedIn'i kullan."
    },
    socialLinks: [
      { label: "GitHub", href: urls.github },
      { label: "LinkedIn", href: urls.linkedin }
    ],
    footer:
      "GitHub Pages icin statik portfoy. Gercek projeler, musteri teslimati ve operator oncelikli sistemler etrafinda kuruldu."
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
        <article class="rail-card panel panel--${item.accent}">
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
        <article class="about-card panel ${card.accent} reveal">
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
  setText(elements.footerCopy, localeData.footer);

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

setupLocaleSwitcher();
applyLocale(getInitialLocale());
setupActiveNavigation();
