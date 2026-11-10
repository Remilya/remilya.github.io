# remilya.github.io

Personal portfolio, localization archive, and open-source software showcase for **Remilya** (`https://remilya.dev/`).

Built with zero runtime framework dependencies using semantic HTML5, modern CSS (`100svh`, `@container`, `scroll-snap`, `clip-path: polygon(...)`), and native ES modules (`main.js` + `js/*.js`) for instant GitHub Pages deployment.

## Architecture & Features

- **Bilingual (`TR / EN`) UI**: Instant FOUC-free language detection (`?lang=`, `localStorage`, or browser locale) with live metadata and ARIA updates.
- **6-Stage Full-Screen Scroll Deck (`js/deck.js`)**: Inertia-aware wheel/trackpad step paging, keyboard navigation (`ArrowUp/Down`, `PageUp/Down`, `Space`, `Home`, `End`), right-edge progress dots (`#dots`), and automatic free-scroll fallback on short viewports (`max-height: 540px`).
- **Persona-Style `15°` Diagonal Slice Stage (`js/slices.js`)**:
  - Showcases **Gensokyo 1:1 Interactive Atlas** (`2D` scroll + `Three.js 3D`, `114+` locations & `143` characters), **Higurashi When They Cry Hou & Hou+ TR** (`Chapters 1-10`, `456` scripts, `139,818` dialogue lines, `07th-Mod` compatible), **RAIDOU Remastered TR** (`20,183` lines, `103` textures, `4` SDF fonts), and **Scarlet Savior** (Touhou psychological horror Ren'Py visual novel for PC & Android).
  - Folds visited works into clickable `15°` slivers and settles all 4 works into an alternating `/ \ /` composite overview on Step 5.
- **Open-Source Tools (`#work`)**: Direct links and short routes for `VOICEVOX Expressive TTS` (Node.js bridge + TR/EN Katakana + 430+ anime phrases), `Scroll-Hero` (vanilla JS/ESM + FFmpeg CLI), `Watermark-Deksmo` (Python/CustomTkinter v1.2), and `Deksmo WebGrab` (Manifest V3 v1.3).
- **Manga Translations (`js/showcase.js`)**: Layered cover fan, keyboard/pointer swipe navigation, and translation notes for *Umineko Episode 1*, *Umineko Episode 2*, and *Re:Zero Arc 1*.
- **Short Routes**: Dedicated static redirect directories (`/Raidou/`, `/ScarletSavior/`, `/Voicevox/`, `/ScrollHero/`, `/Watermark/`, `/WebGrab/`) plus `404.html` slug resolution.

## Project Structure

- `index.html` - Pre-rendered semantic 6-stage markup, inline SVG icon sprite, OpenGraph/Twitter metadata, and `Person` JSON-LD.
- `styles.css` - Graphic color tokens (`DESIGN.md`), scroll-deck rules, `15°` polygon slice layout, container queries, and reduced-motion overrides.
- `main.js` - Application entrypoint & bilingual DOM binder.
- `js/content.js` - Complete `en` and `tr` dictionaries, Higurashi trilingual dialogue samples, stack tags, and route tables.
- `js/deck.js` - Scroll-deck stop table, wheel inertia filter, keyboard/focus sync, and resize observer.
- `js/slices.js` - `15°` polygon slice geometry engine and Higurashi quote switcher.
- `js/showcase.js` - Interactive Manga cover fan and subtle ambient `<canvas>` layer.
- `scripts/validate-site.ps1` - Automated syntax, asset, link, accessibility, and transfer-budget validator.

## Local Development

Serve the repository root with any static HTTP server (ES modules require `http://`, not `file://`):

```powershell
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Validation

Run the production validation suite before pushing:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\validate-site.ps1
```
