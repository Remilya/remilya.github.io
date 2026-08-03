# remilya.github.io

Static portfolio site for `remilya.dev`.

The site is a single-page GitHub Pages portfolio with a bilingual UI, a scroll-driven opener sequence, an on-demand archived Deksmo simulation, project showcases, translation work, capability summaries, experience history, and profile links.

## What The Website Supports

- `TR / EN` locale switching
- full-screen opener sequence built from a numbered image set
- responsive opener behavior for desktop and mobile
- on-demand client-side Deksmo editor simulation with no backend dependency
- featured project cards and supporting project cards
- manga translation showcase
- capabilities and stack overview
- split experience section:
  - work experience
  - education / training
- profile links with clickable GitHub and LinkedIn icons

## Main Sections

- `Opener Sequence`
  - scroll-driven canvas sequence with responsive WebP frame sets
  - landscape frames from `assets/sequences/desktop`
  - portrait frames from `assets/sequences/mobile` at widths up to 720 px
  - minimal localized welcome and archive/contact actions in the overlay
  - poster-only fallback for reduced motion and data-saver preferences
- `Deksmo Archive`
  - compact archive introduction that keeps the full simulator out of the normal page flow
  - recovered editor presentation opens only from an explicit archive action in a native modal dialog
  - raw, translated, and colorized preview states
  - accessible comparison slider, editor tabs, text inspection, zoom, and history controls
  - clearly identified simulated controls for actions that previously required discontinued APIs
- `About`
  - identity/profile summary
- `Work`
  - flagship case studies
  - supporting systems / side projects
- `Translations`
  - Umineko and Re:Zero translation cards
- `Capabilities`
  - service and systems capability cards
  - stack cloud generated from project tags
- `Experience`
  - left column: work timeline
  - right column: education and supporting training
- `Profiles / Links`
  - LinkedIn (primary contact route)
  - GitHub

## Tech Notes

- `index.html`
  - page structure
  - Google Fonts and Bootstrap Icons imports
  - canonical/social metadata, favicon links, and Person JSON-LD
  - pre-rendered English hero, featured work, and contact fallback
- `styles.css`
  - visual system
  - responsive layout
  - opener, cards, typography, and mobile header behavior
- `main.js`
  - locale content for `en` and `tr`
  - DOM text binding
  - rendering for projects, translations, experience, stack, and social links
  - opener sequence frame loading and scroll syncing
  - localized archive content and client-only simulator state
  - reduced-motion/data-saver poster selection

## Assets

- `assets/sequences/desktop/`
  - 48 landscape WebP frames at 1920×1080 (about 4.21 MB total)
- `assets/sequences/mobile/`
  - 48 portrait WebP frames at 720×1280 (about 1.41 MB total)
- `assets/favicon.svg`
- `assets/apple-touch-icon.png`
- `assets/remilya-social.jpg`
  - 1200×630 branded social preview derived from desktop frame 024
- `assets/deksmo-archive/`
  - three locally hosted WebP states from the historical Deksmo editor demo
  - approximately 460 KB combined; no runtime image-host dependency
- `assets/ep1-cover.webp`
- `assets/ep2-cover.webp`
- `assets/rezero-cover.jpg`
- `assets/logos/`
  - project and brand logos used by the site

## Sequence Workflow

The opener sequence is based on two responsive sets of extracted WebP frames rather than MP4 playback in the browser.

- desktop and mobile visitors download only the frame set selected for their viewport
- each set contains 48 numbered frames using the `frame-001.webp` format
- six frames are loaded before the sequence becomes interactive
- reduced-motion and data-saver visits load only the selected responsive poster
- the sequence uses:
  - frame count
  - frame padding
  - frame extension
  - filename template
- extraction helper:
  - `scripts/extract-responsive-opener.ps1`

Example using the local source videos:

```powershell
.\scripts\extract-responsive-opener.ps1 `
  -DesktopInput ".\Gothic_archive_arcane_mechanism_1080p_202608030047.mp4" `
  -MobileInput ".\Gothic_archive_arcane_mechanism_202608030013.mp4"
```

To regenerate only the desktop sequence, omit `-MobileInput`. Desktop defaults to 1920×1080 at WebP quality 68; mobile remains 720×1280 at quality 62.

MP4 source files are intentionally ignored by Git; the optimized WebP frames are the production assets.

## Local Development

This repo is plain static HTML/CSS/JS, so any static server works.

Examples:

```powershell
python -m http.server 5500
```

or use the VS Code Live Server extension.

## Validation

Run the lightweight production checks before publishing:

```powershell
.\scripts\validate-site.ps1
```

The command checks JavaScript syntax, required and referenced assets, internal anchors, metadata, unavailable project URLs, local-reference isolation, archive-media budgets, both 48-frame contracts, and production file-size budgets. The current first-party initial-transfer estimate must remain below 2 MB.

## Current Content Model

Most site content is stored directly in `main.js` inside the locale objects.

That includes:

- navigation labels
- section headings
- project data
- translations data
- experience timeline entries
- training list entries
- social links

Projects may define two optional fields:

- `status`: localized text for private, demo-on-request, or other availability states; it does not require a URL
- `media`: a real case-study image object with `src`, `alt`, and optional dimensions; it is rendered only when supplied

Project links may define `external: false` for same-page destinations. External links continue to open in a new tab; the archived Deksmo card uses an internal action to open its interactive simulation.

Deksmo is presented in the past tense as an archived product. The simulator stays hidden until requested and preserves its interface and workflow without claiming that its discontinued processing APIs are operational.

Do not add a public link for a private or unavailable repository. Deksmo, Vision, Medical, and ILACDB intentionally use status text; Watermark-Deksmo and DeksmoScrap retain public repository links.

## Related Documents

- `PLAN2.md` — as-built specification for the minimal opener and the Deksmo archive simulation, including the three-variant `archiveMedia` contract and the superseded localization-lab proposal.
- `SITE_REVIEW.md` — review baseline, implementation status, and the outstanding QA checklist.

## Notes

- The repo may also include local generation or reference files that are not meant for production.
