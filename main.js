import {
  STORAGE_KEY,
  SUPPORTED_LOCALES,
  content,
  stackGroups,
  shortRoutes
} from "./js/content.js";
import { initDeck } from "./js/deck.js";
import { initSlices } from "./js/slices.js";
import { initMangaShowcase, initAtmosphere } from "./js/showcase.js";

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[c]
  );

function renderLinkAttributes(link) {
  return link.external === false ? "" : ' target="_blank" rel="noopener noreferrer"';
}

function detectInitialLocale() {
  try {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = (params.get("lang") || "").toLowerCase();
    if (SUPPORTED_LOCALES.includes(fromQuery)) {
      return fromQuery;
    }
  } catch {
    /* ignore query parse issues */
  }

  const htmlLang = (document.documentElement.lang || "").toLowerCase();
  if (SUPPORTED_LOCALES.includes(htmlLang)) {
    return htmlLang;
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LOCALES.includes(stored)) {
      return stored;
    }
  } catch {
    /* ignore storage errors */
  }

  const langs = navigator.languages || [navigator.language || "en"];
  for (const l of langs) {
    if (String(l).toLowerCase().startsWith("tr")) {
      return "tr";
    }
  }
  return "en";
}

const $ = (sel) => document.querySelector(sel);
const setText = (sel, val) => {
  const el = typeof sel === "string" ? $(sel) : sel;
  if (el && val !== undefined) el.textContent = val;
};

let currentLocale = detectInitialLocale();
let deckApi = null;
let slicesApi = null;
let mangaApi = null;

function applyLink(el, label, href, external, ariaLabel) {
  if (!el) return;
  el.textContent = label;
  el.href = href;
  if (ariaLabel) {
    el.setAttribute("aria-label", ariaLabel);
  }
  if (external === false) {
    el.removeAttribute("target");
    el.removeAttribute("rel");
  } else {
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  }
}

function renderHeroExtras(dict) {
  const quickEl = $("#hero-quicklinks");
  if (quickEl) {
    quickEl.innerHTML = dict.hero.quickLinks
      .map(
        (link) =>
          `<a class="hero-qlink" href="${esc(link.href)}"${renderLinkAttributes(link)}><span>${esc(link.label)}</span><svg aria-hidden="true"><use href="#i-arrow"/></svg></a>`
      )
      .join("");
  }

  const badgesEl = $("#hero-badges");
  if (badgesEl) {
    badgesEl.innerHTML = dict.hero.medallionBadges
      .map(
        (b, idx) =>
          `<div class="mascot-chip mascot-chip--${idx + 1}"><strong>${esc(b.code)}</strong><span>${esc(b.label)}</span></div>`
      )
      .join("");
  }
}

function renderSlicesCopy(dict) {
  setText("#slices-sr-title", dict.slices.srTitle);
  setText("#slices-comp-banner", dict.slices.compBanner);
  setText("#higu-lang-label", dict.slices.higuLangLabel);
  setText("#umi-lang-label", dict.slices.umiLangLabel);

  const ytBtn = $("#higu-yt-btn");
  if (ytBtn && dict.slices.ytPlayAria) {
    ytBtn.setAttribute("aria-label", dict.slices.ytPlayAria);
  }
  const umiBtn = $("#umi-video-btn");
  if (umiBtn && dict.slices.umiPlayAria) {
    umiBtn.setAttribute("aria-label", dict.slices.umiPlayAria);
  }

  dict.slices.items.forEach((item) => {
    const k = item.k;
    setText(`#sl${k}-eyebrow`, item.eyebrow);
    const titleEl = $(`#sl${k}-t`);
    if (titleEl) {
      titleEl.innerHTML = `<b class="cap">${esc(item.cap)}</b>${esc(item.restTitle)}`;
    }
    setText(`#sl${k}-desc`, item.desc);
    if (item.badge) {
      setText(`#sl${k}-badge`, item.badge);
    }

    applyLink(
      $(`#sl${k}-primary`),
      item.primaryLabel,
      item.primaryHref,
      item.primaryExternal
    );
    applyLink(
      $(`#sl${k}-secondary`),
      item.secondaryLabel,
      item.secondaryHref,
      item.secondaryExternal
    );

    if (item.pills) {
      const pillsEl = $(`#sl${k}-pills`);
      if (pillsEl) {
        pillsEl.innerHTML = item.pills
          .map((p) => `<li class="sl-pill">${esc(p)}</li>`)
          .join("");
      }
    }

    setText(`#sl${k}-sliv`, item.shortLabel);
    setText(`#sl${k}-lab-title`, item.shortLabel);
    setText(`#sl${k}-lab-sub`, item.compSub);
    applyLink(
      $(`#sl${k}-lab-cta`),
      dict.slices.compLaunch,
      item.primaryHref,
      item.primaryExternal,
      `${dict.slices.compLaunchPrefix || "Open"} ${item.shortLabel}`
    );
  });
}

function renderWorkSection(dict) {
  setText("#work-eyebrow", dict.work.eyebrow);
  const titleEl = $("#work-title");
  if (titleEl) {
    titleEl.innerHTML = `<span class="cap">${esc(dict.work.cap)}</span>${esc(dict.work.restTitle)}`;
  }
  setText("#work-copy", dict.work.copy);

  const grid = $("#support-projects");
  if (!grid) return;

  grid.innerHTML = dict.work.projects
    .map((proj) => {
      const mark = proj.logo
        ? `<img class="tool-card__logo" src="${esc(proj.logo)}" alt="${esc(proj.title)} logo" width="44" height="44" loading="lazy" decoding="async" fetchpriority="low" />`
        : proj.icon
          ? `<span class="tool-card__glyph" aria-hidden="true"><svg><use href="#${esc(proj.icon)}"/></svg></span>`
          : `<span class="tool-card__glyph" aria-hidden="true">${esc(proj.glyph || "OSS")}</span>`;

      const tags = (proj.stack || [])
        .map((t) => `<span class="tag">${esc(t)}</span>`)
        .join("");

      const links = (proj.links || [])
        .map(
          (l, idx) =>
            `<a class="tool-link ${idx === 0 ? "tool-link--primary" : "tool-link--route"}" href="${esc(l.href)}"${renderLinkAttributes(l)}>${esc(l.label)}</a>`
        )
        .join("");

      return `
        <article class="tool-card tool-card--${esc(proj.accent)}">
          <div class="tool-card__top">
            <span class="tool-card__idx">${esc(proj.index)}</span>
            <span class="tool-card__type">${esc(proj.type)}</span>
          </div>
          <div class="tool-card__head">
            ${mark}
            <h3>${esc(proj.title)}</h3>
          </div>
          <p class="tool-card__desc">${esc(proj.summary)}</p>
          <div class="tool-card__tags">${tags}</div>
          <div class="tool-card__links">${links}</div>
        </article>
      `;
    })
    .join("");
}

function renderMangaHeader(dict) {
  setText("#translations-eyebrow", dict.manga.eyebrow);
  const titleEl = $("#translations-title");
  if (titleEl) {
    titleEl.innerHTML = `<span class="cap cap--lavender">${esc(dict.manga.cap)}</span>${esc(dict.manga.restTitle)}`;
  }
  setText("#translations-copy", dict.manga.copy);
}

function renderExperienceSection(dict) {
  setText("#experience-eyebrow", dict.experience.eyebrow);
  const titleEl = $("#experience-title");
  if (titleEl) {
    titleEl.innerHTML = `<span class="cap">${esc(dict.experience.cap)}</span>${esc(dict.experience.restTitle)}`;
  }
  setText("#experience-copy", dict.experience.copy);
  setText("#stack-label", dict.experience.stackLabel);

  const tlEl = $("#timeline-list");
  if (tlEl) {
    tlEl.innerHTML = dict.experience.timeline
      .map(
        (node, idx) => `
          <li class="tl-node" style="--i:${idx}">
            <div class="tl-node__card">
              <div class="tl-node__meta">
                <span class="tl-node__period">${esc(node.period)}</span>
                <span class="tl-node__kind">${esc(node.kind)}</span>
              </div>
              <h3>${esc(node.title)}</h3>
              <p>${esc(node.summary)}</p>
            </div>
            <span class="tl-node__dot" aria-hidden="true"></span>
          </li>
        `
      )
      .join("");
  }

  const stackEl = $("#stack-cloud");
  if (stackEl && !stackEl.dataset.hydrated) {
    stackEl.innerHTML = stackGroups
      .map((s) => `<span class="stack-pill">${esc(s)}</span>`)
      .join("");
    stackEl.dataset.hydrated = "true";
  }
}

function renderContactSection(dict) {
  setText("#contact-eyebrow", dict.contact.eyebrow);
  setText("#contact-title", dict.contact.title);
  setText("#contact-copy", dict.contact.copy);
  setText("#routes-title", dict.contact.routesTitle);
  setText("#footer-note", dict.contact.footerNote);
  setText("#footer-top-link", dict.contact.backTop);

  const socialsEl = $("#social-links");
  if (socialsEl) {
    socialsEl.innerHTML = dict.contact.socials
      .map(
        (soc) => `
          <a class="social-card" href="${esc(soc.href)}" target="_blank" rel="noopener noreferrer">
            <span class="social-card__ico"><svg aria-hidden="true"><use href="#${esc(soc.icon)}"/></svg></span>
            <span class="social-card__body">
              <strong>${esc(soc.label)}</strong>
              <span class="social-card__handle">${esc(soc.handle)}</span>
              <span class="social-card__desc">${esc(soc.desc)}</span>
            </span>
            <svg class="social-card__arr" aria-hidden="true"><use href="#i-arrow"/></svg>
          </a>
        `
      )
      .join("");
  }

  const routesEl = $("#short-routes");
  if (routesEl && !routesEl.dataset.hydrated) {
    routesEl.innerHTML = shortRoutes
      .map(
        (r) =>
          `<a class="route-pill" href="${esc(r.href)}"${renderLinkAttributes(r)}>${esc(r.label)}</a>`
      )
      .join("");
    routesEl.dataset.hydrated = "true";
  }
}

function applyLocale(locale, { announce = false, syncQuoteLang = false } = {}) {
  const next = SUPPORTED_LOCALES.includes(locale) ? locale : "en";
  currentLocale = next;
  const dict = content[next];

  document.documentElement.lang = next;
  document.title = dict.meta.title;

  const setMeta = (sel, val) => {
    const el = $(sel);
    if (el) el.setAttribute("content", val);
  };
  setMeta("#meta-description", dict.meta.description);
  setMeta("#og-locale", dict.meta.ogLocale);
  setMeta("#og-title", dict.meta.title);
  setMeta("#og-description", dict.meta.description);
  setMeta("#twitter-title", dict.meta.title);
  setMeta("#twitter-description", dict.meta.description);

  const skipEl = $("#skip-link");
  if (skipEl) skipEl.textContent = dict.aria.skipLink;
  const brandEl = $("#brand-link");
  if (brandEl) brandEl.setAttribute("aria-label", dict.aria.brandLink);
  const navEl = $("#primary-nav");
  if (navEl) navEl.setAttribute("aria-label", dict.aria.primaryNav);
  const dotsEl = $("#dots");
  if (dotsEl) dotsEl.setAttribute("aria-label", dict.aria.dotsNav);
  const switcherEl = $("#locale-switcher");
  if (switcherEl) switcherEl.setAttribute("aria-label", dict.aria.localeSwitcher);

  setText("#brand-subtitle", dict.brandSubtitle);
  setText("#nav-top", dict.nav.top);
  setText("#nav-library", dict.nav.library);
  setText("#nav-work", dict.nav.work);
  setText("#nav-translations", dict.nav.translations);
  setText("#nav-experience", dict.nav.experience);
  setText("#nav-contact", dict.nav.contact);

  document.querySelectorAll(".locale-button").forEach((btn) => {
    const active = btn.dataset.locale === next;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  setText("#hero-kicker", dict.hero.kicker);
  setText("#hero-lead", dict.hero.lead);
  setText("#hero-sub", dict.hero.sub);
  setText("#hero-cta-primary-text", dict.hero.ctaPrimary);
  setText("#hero-cta-secondary-text", dict.hero.ctaSecondary);
  setText("#hero-scroll-hint", dict.hero.scrollHint);
  renderHeroExtras(dict);

  renderSlicesCopy(dict);
  renderWorkSection(dict);
  renderMangaHeader(dict);
  renderExperienceSection(dict);
  renderContactSection(dict);

  // Sync panel data-label attributes before or after deck init
  Object.entries(dict.panelLabels).forEach(([id, label]) => {
    const panel = document.getElementById(id);
    if (panel) panel.dataset.label = label;
  });

  if (deckApi) {
    deckApi.updateDotLabels(dict.panelLabels);
    deckApi.refresh();
  }
  if (slicesApi) {
    slicesApi.setLocale(next, syncQuoteLang);
  }
  if (mangaApi) {
    mangaApi.setLocale(next);
  }

  if (announce) {
    setText("#locale-status", dict.aria.languageChanged);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore storage restrictions */
    }
  }
}

function bootstrap() {
  // Static cloud lists are already pre-rendered in index.html
  const stackEl = $("#stack-cloud");
  if (stackEl) stackEl.dataset.hydrated = "true";
  const routesEl = $("#short-routes");
  if (routesEl) routesEl.dataset.hydrated = "true";

  // If initial locale differs from pre-rendered English, update text before measuring layout
  if (currentLocale !== "en") {
    applyLocale(currentLocale, { announce: false, syncQuoteLang: true });
  }

  deckApi = initDeck({ slicesSectionId: "library", sliceSteps: 6 });
  slicesApi = initSlices(deckApi, currentLocale);
  mangaApi = initMangaShowcase(currentLocale);
  initAtmosphere();

  document.querySelectorAll(".locale-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetLocale = btn.dataset.locale;
      if (targetLocale && targetLocale !== currentLocale) {
        applyLocale(targetLocale, { announce: true, syncQuoteLang: true });
      }
    });
  });
}

bootstrap();
