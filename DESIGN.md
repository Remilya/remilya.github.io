# DESIGN.md — Remilya Portfolio (`Ultraviolet × Flandre Crystal`)

## Overview
Personal portfolio and archive for **Remilya (Kürşad)** — Creative Technologist, AI Systems builder, and game/manga localization creator.
The visual language is **"Ultraviolet × Flandre Crystal — Witch Aristocrat"**: a dark obsidian editorial canvas with hairline (`0.8px`) borders, Cinzel serif display headers, interactive Wii-Channel game/patch cartridges, Flandre Scarlet crystal-wing 3D manga cards, and terminal timelines.

- **Not a SaaS or corporate landing page**: Never use Bento grids, marketing KPI counters, fake testimonials, pricing cards, or rounded pill buttons.

---

## Colors

### Surface & Canvas Tokens
| Token | Value | Role |
| :--- | :--- | :--- |
| `--bg` | `#05040a` | Primary obsidian canvas background |
| `--bg-elevated` | `#0a0814` | Elevated section background |
| `--panel` | `rgba(12, 9, 24, 0.85)` | Primary card / panel fill |
| `--panel-strong` | `rgba(18, 13, 34, 0.94)` | High-emphasis card / terminal fill |
| `--panel-soft` | `rgba(255, 255, 255, 0.025)` | Subtle hover or tag fill |

### Text Hierarchy
| Token | Value | Role |
| :--- | :--- | :--- |
| `--text` | `#f0ecff` | Primary pale lavender-white copy |
| `--muted` | `#9b91b8` | Secondary copy & descriptions |
| `--subtle` | `#635985` | Eyebrow labels, indices, metadata |

### Accent & Flandre Crystal Spectrum
| Token | Value | Role |
| :--- | :--- | :--- |
| `--gold` | `#a855f7` | Primary Ultraviolet accent (historical token name, violet value) |
| `--gold-bright` | `#c084fc` | Hover highlight & active violet glow |
| `--rose` | `#dc2626` | Scarlet blood-crimson secondary accent |
| `--rose-soft` | `#f87171` | Soft crimson highlight |
| `--violet` | `#7c3aed` | Deep ultraviolet |
| `--violet-bright` | `#a78bfa` | Soft violet |
| `--flandre-red` / `--flandre-orange` / `--flandre-yellow` / `--flandre-green` / `--flandre-cyan` / `--flandre-blue` / `--flandre-purple` / `--flandre-pink` | `#ff2a54` / `#ff7b00` / `#ffea00` / `#00e676` / `#00e5ff` / `#2979ff` / `#aa00ff` / `#ff00aa` | 8-crystal Flandre Scarlet wing spectrum used on `#translations` cards (`:nth-child(1..8)`) |

### Borders
| Token | Value | Role |
| :--- | :--- | :--- |
| `--line` | `rgba(168, 85, 247, 0.14)` | Standard `0.8px` hairline cell divider |
| `--line-strong` | `rgba(168, 85, 247, 0.32)` | Active / hovered border |
| `--line-crimson` | `rgba(220, 38, 38, 0.25)` | Crimson accent hairline |

---

## Typography
- **Display (`--font-display`)**: `'Cinzel', Georgia, serif`
  - Used for `.brand-title`, `.section-heading h2`, `.about-card h3`, `.wii-card__title`, `.support-card h3`, `.translation-card__title`.
  - Always paired with `text-wrap: balance`.
- **Body (`--font-sans`)**: `'Plus Jakarta Sans', sans-serif`
  - Used for narrative paragraphs and descriptions (`max-width: 65ch`, `text-wrap: pretty`).
- **Monospace (`--font-mono`)**: `'JetBrains Mono', monospace`
  - Used for `.eyebrow`, `.tag`, `.wii-card__badge`, `.wii-card__action`, `.terminal-entry__period`, and `.support-card__links`.
  - Always paired with `font-variant-numeric: tabular-nums`.

---

## Elevation & Layout Architecture
- **Container**: `width: min(calc(100% - 2rem), var(--max-width))` where `--max-width: 1200px`.
- **Hairline Grid (`0.8px`)**: `.about-grid`, `.support-grid`, and `.capability-grid` use `gap: 0.8px; background: var(--line); border: 0.8px solid var(--line);` so cards form crisp editorial cells with `border-radius: 0px`.
- **Shadow (`--shadow`)**: `0 28px 90px rgba(0, 0, 0, 0.72), 0 0 60px rgba(139, 92, 246, 0.05)`.

---

## Core Components

### 1. Ultraviolet Hero Stage (`.ultraviolet-stage`)
- Minimal, atmospheric dark stage with `--hero-glow` radial gradients, subtle grid overlay, and screen-reader-only `h1`. No heavy 48-frame scroll-jacking canvas.

### 2. Wii-Channel Game & Patch Library (`.wii-grid` / `.wii-card`)
- Rounded cartridge screen (`border-radius: 14px`) exclusively for the `#library` section.
- On `:hover` and `:focus-visible`: lifts via `translateY(-7px) scale(1.025)`, pulses `wiiChannelPulse`, and sweeps a GPU-composited diagonal glass sheen (`transform: translate3d(...) rotate(24deg)`).

### 3. Public GitHub Programs (`.support-grid` / `.support-card`)
- Flex column card (`display: flex; flex-direction: column`) inside the `0.8px` hairline grid.
- Contains `.support-card__meta`, `.case-mark` (`img.case-logo` or `.case-glyph` + `h3`), a **single-sentence summary**, and bottom-aligned `.support-card__links` (`margin-top: auto`).

### 4. Flandre Crystal Manga Cards (`.translations-grid` / `.translation-card`)
- 3D perspective (`perspective: 1200px`) manga showcase cards with per-card crystal wing color variables (`--crystal-color`, `--crystal-glow`).
- `init3DCards()` caches `getBoundingClientRect()` on `mouseenter` and batches `--rx`, `--ry`, `--mx`, `--my` writes inside `requestAnimationFrame`.

---

## Do's and Don'ts

### Do
- Keep the **Ultraviolet (`#a855f7`) + Scarlet (`#dc2626`)** palette cohesive across all interactive states, particles, and borders.
- Keep `#work` (Programs) strictly limited to **public repositories on `github.com/Remilya`** with a **1-sentence description** and a direct GitHub link.
- Include explicit `width` and `height` attributes on all dynamic `<img>` elements (`renderLibrary`, `renderTranslations`, `renderSupportProjects`).
- Animate only `transform` and `opacity` for 60fps compositor performance.

### Don't
- **Never** introduce SaaS/corporate/Bento patterns, startup marketing copy, or unrequested dashboard widgets.
- **Never** list unpublished, local-only, or private tools in `#work`.
- **Never** reintroduce legacy gold (`#d4a84b` / `rgba(212, 168, 75, ...)`) values that clash with the Ultraviolet palette.
- **Never** call `getBoundingClientRect()` uncached inside `mousemove` or animate `left`/`top`.
