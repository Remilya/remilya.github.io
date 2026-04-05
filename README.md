# remilya.github.io

Static portfolio site for `remilya.dev`.

The site is a single-page GitHub Pages portfolio with a bilingual UI, a scroll-driven opener sequence, project showcases, translation work, capability summaries, experience history, and profile links.

## What The Website Supports

- `TR / EN` locale switching
- full-screen opener sequence built from a numbered image set
- responsive opener behavior for desktop and mobile
- featured project cards and supporting project cards
- manga translation showcase
- capabilities and stack overview
- split experience section:
  - work experience
  - education / training
- profile links with clickable GitHub and LinkedIn icons

## Main Sections

- `Opener Sequence`
  - scroll-driven canvas sequence using frames from `assets/sequences/1080p`
  - localized opener title
  - poster fallback behavior when needed
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
  - GitHub
  - LinkedIn

## Tech Notes

- `index.html`
  - page structure
  - Google Fonts and Bootstrap Icons imports
  - GSAP script tags are present, but the opener currently uses the native scroll driver in `main.js`
- `styles.css`
  - visual system
  - responsive layout
  - opener, cards, typography, and mobile header behavior
- `main.js`
  - locale content for `en` and `tr`
  - DOM text binding
  - rendering for projects, translations, experience, stack, and social links
  - opener sequence frame loading and scroll syncing

## Assets

- `assets/sequences/1080p/`
  - main image sequence used by the opener
- `assets/sequences/cathedral/`
  - older sequence output kept locally
- `assets/ep1-cover.webp`
- `assets/ep2-cover.webp`
- `assets/rezero-cover.jpg`
- `assets/spell-circle.png`
- `assets/logos/`
  - project and brand logos used by the site

## Sequence Workflow

The opener sequence is based on extracted numbered frames rather than MP4 playback in the browser.

- source frames currently come from `assets/sequences/1080p`
- the sequence uses:
  - frame count
  - frame padding
  - frame extension
  - filename template
- extraction helper:
  - `scripts/extract-cathedral-sequence.ps1`

## Local Development

This repo is plain static HTML/CSS/JS, so any static server works.

Examples:

```powershell
python -m http.server 5500
```

or use the VS Code Live Server extension.

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

## Notes

- The repo may also include local generation or reference files that are not meant for production.
