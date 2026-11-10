# DESIGN.md - Remilya Portfolio (`Electric Ultraviolet // Rokkenjima Archive`)

## Overview
Personal portfolio, localization archive, and open-source showcase for **Remilya (İlker Ağırkaya)** at `https://remilya.dev/`.

The visual system pairs **Remilya's OC mascot identity (`R / REMILYA` android catgirl emblem)** and an **Electric Ultraviolet dark color spectrum** with **Persona-style `15°` diagonal polygon stage choreography** and **full-screen `100svh` Scroll-Deck pacing**.

---

## Core Visual Rules
1. **Electric Ultraviolet Dark Series (Zero White Washout)**: Every stage and all four `15°` diagonal slices stay in deep, saturated Ultraviolet tones (`#5b21b6` -> `#2e1065` -> `#4c1d95` -> `#7e22ce`) separated by `8px` obsidian-black `#080312` diagonal cuts. Stark white backgrounds and pale pastel fills are avoided.
2. **Opaque Graphic Surfaces & Crisp Cuts**: Never use blurry SaaS glassmorphism (`backdrop-filter: blur`). Surfaces use solid opaque fills, `2px-3px solid` ultraviolet borders (`#8b5cf6` / `#c4b5fd`), and `4px-10px` hard offset shadows.
3. **Authentic Mascot Branding & Bespoke Vector Glyphs**: Hero centerpiece, navbar emblem, favicons (`favicon-64.png`, `favicon.svg`, `apple-touch-icon.png`), and OpenGraph card feature Remilya's custom OC mascot logo; UI icons live in an inline `<svg><symbol>` sprite (`#i-torii`, `#i-quill`, `#i-katana`, `#i-scarlet`, `#i-voice`, `#i-reel`).
4. **Compositor-Friendly Motion**: Scroll-deck transitions, diagonal `clip-path: polygon(...)` sweeps, timeline line draws (`scaleX`), and `<canvas id="cursorFx">` electric ultraviolet butterflies respect `prefers-reduced-motion: reduce`.

---

## Color Tokens

| Token | Hex | Role |
| :--- | :--- | :--- |
| `--ink` | `#080312` | Primary Obsidian-Ultraviolet page canvas, `8px` diagonal slice seams, and hard dark buttons |
| `--ink-raise` | `#110622` | Deep Ultraviolet raised cards and alternating stage canvas |
| `--ink-panel` | `#1b0a36` | Elevated Ultraviolet panel frames and badge fills |
| `--paper` / `--paper-pure` | `#ede9fe` / `#f5f3ff` | Soft Ultraviolet Mist & crisp display typography |
| `--uv-core` | `#5b21b6` | **Slice 1 (`Gensokyo 1:1`)** Core Electric Violet fill |
| `--uv-midnight` | `#2e1065` | **Slice 2 (`Higurashi TR`)** Midnight Ultraviolet fill |
| `--uv-indigo` | `#4c1d95` | **Slice 3 (`RAIDOU TR`)** Royal Indigo Ultraviolet fill |
| `--uv-electric` | `#7e22ce` | **Slice 4 (`Scarlet Savior`)** Vivid Electric Ultraviolet fill |
| `--violet` / `--amethyst` | `#7c3aed` / `#9333ea` | Primary CTAs, active tabs, and hard offset shadows |
| `--uv-border` / `--lavender` | `#8b5cf6` / `#c4b5fd` | Card borders, kickers, mono route pills, and `.cap` accents |

---

## Stage Architecture (`100svh` Scroll Deck)
1. **`#top` - Hero**: Asymmetric two-column poster + Remilya OC Mascot (`assets/remilya-mascot.webp`) over a rotated ultraviolet Persona frame with project chips underneath.
2. **`#library` - Featured Projects (`5-Stop Sticky 15° Polygon Stage`)**:
   - **Stop 1 (`#5b21b6`)**: Gensokyo 1:1 Interactive Atlas (`remilya.dev/Gensokyo/`)
   - **Stop 2 (`#2e1065`)**: Higurashi When They Cry TR (`remilya.dev/Higurashi/`) + embedded YouTube showcase video & live `TR / EN / 日本語` dialogue switcher
   - **Stop 3 (`#4c1d95`)**: RAIDOU Remastered TR (`100%` PC Turkish patch)
   - **Stop 4 (`#7e22ce`)**: Scarlet Savior (`itch.io` Ren'Py psychological horror visual novel)
   - **Stop 5 (`is-comp`)**: Alternating `+15° / -15°` (`/ \ /`) 4-shard Electric Ultraviolet panorama; prior slices fold into clickable `.is-sliver` tabs on steps `2-4`.
3. **`#work` - Open-Source Tools**: Crisp `2×2` graphic cards for `VOICEVOX Expressive TTS`, `Scroll-Hero`, `Watermark-Deksmo`, and `Deksmo WebGrab`.
4. **`#translations` - Manga Translations**: Interactive 3-volume cover fan + active dossier for *Umineko Episode 1*, *Umineko Episode 2*, and *Re:Zero Arc 1*.
5. **`#experience` - Background & Tools**: Connected 4-node graphic timeline + core technology strip.
6. **`#contact` - Contact & Short Routes**: Social cards + permanent `remilya.dev` short-route index.
