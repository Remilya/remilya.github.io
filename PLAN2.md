# Minimal Opener and Deksmo Archive Simulation

Status: **Implemented in the working tree. Not yet committed or deployed.**

This document supersedes the original four-stage "Localization Lab" proposal. It describes
the feature as actually built so that the specification, the code, and the review notes agree.
The divergence from the original proposal is recorded in the section below rather than erased.

## Summary

The gothic opener stays the centerpiece and carries a quiet welcome instead of corporate hero
copy. The portfolio then proves its value through an interactive Deksmo demonstration.

The demonstration is framed as a **recovered archive** rather than a live product, because the
original service was retired when its third-party processing APIs were discontinued. Presenting
it as an archive keeps the exhibit honest while still showing the real interface and workflow.

## Divergence from the original proposal

| Aspect | Originally proposed | As built |
| --- | --- | --- |
| Section id | `#localization-lab` | `#deksmo-archive` |
| Placement | Inline, directly after the opener | Compact intro after the opener; full simulator in a modal `<dialog>` |
| Stages | Four: Original, OCR, Translation, Typesetting | Three variants: Raw, Translated, Colorized |
| Assets | `assets/lab/deksmo-panel-*.webp`, 1600×2000, 4:5 | `assets/deksmo-archive/*.webp`, 840×1200 and 840×1252 |
| Config object | `localizationLabMedia` with `enabled` flag | `archiveMedia` keyed by variant |
| Locale namespace | `content.*.localizationLab` | `content.*.deksmoArchive` |
| Hero archive CTA key | `ctaArchive` | `ctaWork` |

Why the change:

- Only three genuine recovered preview assets exist. Fabricating an OCR-overlay and a separate
  typesetting frame would have meant inventing evidence for a product that no longer runs.
- The modal keeps a large, control-dense interface out of the normal scroll flow, so the page
  stays readable and the simulator becomes an explicit opt-in.
- The archive framing lets the exhibit name its own limitation instead of implying live processing.

## 1. Minimal opener

Implemented.

- The welcome is the page's single H1:
  - EN: `Welcome to Remilya.dev.`
  - TR: `Remilya.dev’e hoş geldiniz.`
- The kicker, professional claim, and workflow paragraph were removed along with their locale
  bindings and styles.
- Two actions remain:
  - `Enter the archive` / `Arşive gir` → `#deksmo-archive`
  - `Contact` / `İletişim` → `#contact`
- The first-20% overlay fade and the responsive desktop/mobile frame sequences are preserved.
- SEO description and positioning stay in metadata; the visible hero does not explain everything.

Hero locale shape:

```js
hero: {
  title: "Welcome to Remilya.dev.",
  ctaWork: "Enter the archive",
  ctaContact: "Contact"
}
```

## 2. Deksmo archive simulation

`#deksmo-archive` sits directly after the opener and before About.

Localized framing:

- Eyebrow: `RECOVERED SYSTEM / DEKSMO 1.6.1` · `KURTARILAN SİSTEM / DEKSMO 1.6.1`
- Heading: `A localization workbench, preserved as it was.` ·
  `Bir lokalizasyon çalışma alanı, olduğu haliyle korundu.`
- Status line: `ARCHIVED PRODUCT · INTERACTIVE SIMULATION` ·
  `ARŞİVLENMİŞ ÜRÜN · ETKİLEŞİMLİ SİMÜLASYON`

The section renders a compact introduction plus a single launch button. The simulator itself
opens in a native `<dialog>` and is not part of the normal page flow.

Inside the dialog:

- Console header with product identity, recovered version, and an `ARCHIVED / OFFLINE` state.
- Three view tabs: Editor, Settings, Console.
- Editor toolbar: Select, Compare, Color.
- Three result variants: Raw, Translated, Colorized.
- A comparison viewer with a draggable native range control and zoom in/out with a readout.
- A text inspector listing seven recovered elements with source and target strings.
- Two clearly labelled simulated actions: `AI Fill · Simulation` and
  `Clean + Apply Text · Simulation`.
- History controls for the raw, translated, and colorized previews.
- A footer note: `CLIENT-ONLY ARCHIVE · ZERO API REQUESTS`, plus a status message line.

Actions that previously required the retired APIs are explicitly marked as simulated and respond
with `Archived simulation — this action required the retired Deksmo API.`

Visual direction: an archive examination desk rather than a generic SaaS widget. Restrained
violet and rose accents, fine borders, numbered markers, and a precise comparison handle.

Accessibility contract, as built:

- `role="tablist"` and `role="tab"` with `aria-selected` and `aria-controls` on the view tabs;
  inactive tabs carry `tabindex="-1"`.
- The comparison control is a labelled native `<input type="range">`.
- Variant and text-element buttons expose `aria-pressed`.
- The dialog is labelled via `aria-labelledby`, with a dedicated close control.
- Selected stage and slider position survive an EN/TR switch.
- No large live region; tab and pressed semantics communicate state.
- 44×44 px minimum controls and the shared focus outline are maintained.

## 3. Asset and data contract

Three locally hosted WebP assets, roughly 449 KB combined, with no runtime image-host dependency:

| File | Dimensions | Size |
| --- | --- | --- |
| `assets/deksmo-archive/raw.webp` | 840×1200 | ~186 KB |
| `assets/deksmo-archive/translated.webp` | 840×1252 | ~172 KB |
| `assets/deksmo-archive/colorized.webp` | 840×1252 | ~91 KB |

Media configuration is kept independent of localized copy:

```js
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
```

`labelKey` and `altKey` resolve against the active locale's `deksmoArchive` object, so labels and
alternative text stay translated without duplicating media paths per language.

Asset requirements: sRGB WebP, no watermarks, no private information, and nothing copyrighted that
cannot be displayed.

## 4. Loading and resilience

- Archive images use `loading="lazy"` and `decoding="async"`; the opener has fetch priority.
- Keeping the simulator in a modal means its markup and media stay outside the initial render path.
- The opener honours `prefers-reduced-motion` and `navigator.connection.saveData` by falling back
  to a poster-only path with no frame preloading.
- Remaining opener frames preload progressively after the initial batch of six.
- Reduced motion also disables decorative transforms and reveal animations.
- English hero, featured work, and contact content are pre-rendered in HTML.
- A `<noscript>` panel provides the positioning statement plus direct LinkedIn and GitHub links.
- CSS, JavaScript, and sequence assets share the `20260802g` cache version.

## 5. Interface and data model

- `hero` exposes `title`, `ctaWork`, and `ctaContact`. `kicker` and `lead` were removed.
- `archiveMedia` is a module-level constant, not locale data.
- `content.en.deksmoArchive` and `content.tr.deksmoArchive` hold all archive labels, ARIA strings,
  status messages, log lines, and alt text.
- DOM binding uses `data-archive-text`, `data-archive-aria`, `data-archive-tab`,
  `data-archive-variant`, `data-archive-tool`, `data-archive-zoom`, `data-archive-history`,
  `data-archive-simulated`, and `data-archive-text-index`.
- Project `status` and optional `media` fields are unchanged.
- No framework, backend, analytics service, or new runtime dependency.

## 6. Validation

Run `.\scripts\validate-site.ps1`. It enforces:

- JavaScript syntax via `node --check`
- required and referenced assets, including the three archive media files
- archive media budgets
- both 48-frame sequence contracts, desktop and mobile
- internal anchor targets
- metadata presence
- isolation of unavailable project URLs
- production file-size budgets

Current first-party initial-transfer estimate: **291 KB**, against a 2 MB ceiling.

## 7. Explicitly not pursued

These belong to the superseded proposal and should not be partially reintroduced:

- `assets/lab/` and the four-file 1600×2000 panel contract
- the `localizationLabMedia` object and its `enabled` flag
- separate OCR and Typesetting stages
- the `ctaArchive` locale key name
- fail-closed rendering with an `#work` CTA fallback
- per-stage crossfade and sequential stage preloading
- an Original/Typeset `<noscript>` evidence pair

## 8. Remaining open items

- Product screenshots for the featured case studies, blocked on real, safe source assets.
- Browser QA at 360×800, 390×844, 768×1024, 1440×900, and 1920×1080.
- Lighthouse budgets: Accessibility ≥ 95, no console errors, no missing assets, no broken anchors.
- Commit and push the working tree. Until that happens, `origin/main` still serves the previous
  96-frame JPEG opener, so none of the above is live.
