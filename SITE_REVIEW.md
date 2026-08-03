# Remilya.dev Site Review and Improvement Guide

Review date: 2026-08-02

Implementation update, 2026-08-03: the improvement plan is now implemented. The original 96-frame, 197.87 MB watermarked opener was replaced with responsive 48-frame WebP sequences; the proposition and CTAs now sit inside that opener; unavailable project URLs were replaced with localized status text; contact, accessibility, reduced-motion/data-saver behavior, metadata, branded icons, social sharing art, dead-code cleanup, and validation were completed. The historical findings below remain as the review baseline. Product screenshots remain intentionally deferred until real, safe source assets are supplied, and full interactive browser/Lighthouse QA still needs to be run in a browser-capable environment.

## Current implementation status

- First viewport: localized operator-focused H1, concise workflow lead, and direct work/contact actions.
- Opener: a 48-frame 1920×1080 desktop set (4.21 MB) and a 48-frame 720×1280 mobile set (1.41 MB); `220vh` desktop, `190vh` mobile, `170vh` below 520 px; overlay fades during the first 20%.
- Trust: private Deksmo projects use non-link status labels; only verified public repository links remain.
- Contact: LinkedIn is primary and GitHub secondary, with finalized EN/TR copy.
- Accessibility: skip link, one H1, anchor offsets, 44 px targets, `aria-current`, one locale live region, localized translation actions, and stronger focus/contrast tokens.
- Resilience: English hero, two featured projects, and contact are pre-rendered; a useful no-JavaScript fallback remains available.
- Discovery: canonical, Open Graph, Twitter card, Person JSON-LD, SVG favicon, Apple icon, and a 1200×630 social image.
- Maintenance: GSAP, the hidden hero branch, spell-circle/parallax code, stale sequence status code, legacy CSS, and the baked-checkerboard asset were removed.
- Validation: run `.\scripts\validate-site.ps1` for syntax, asset, frame-contract, internal-link, metadata, URL, and size-budget checks.
- Localization proof: the proposed four-stage localization lab was resolved as the three-variant Deksmo archive simulation. See `PLAN2.md` for the as-built specification and the recorded divergence.

## Executive verdict

Remilya.dev has a distinctive identity and much better project writing than the average personal portfolio. The ultraviolet cathedral, restrained dark interface, bilingual content, and Deksmo-centered case studies feel intentional rather than template-driven.

The original review identified four high-impact problems:

1. The opener is extremely expensive: 26.29 MB is requested before the sequence becomes ready, then the loader queues all 96 frames, totaling 197.87 MB.
2. The first meaningful content and call to action are hidden behind a 300vh cinematic sequence, while the useful hero is disabled with CSS.
3. The hero frames contain a visible `Veo` watermark, which weakens the professional first impression.
4. Several prominent project links are unavailable to a public visitor.

The media weight, watermark, first-viewport hierarchy, unavailable destinations, accessibility foundation, conversion path, metadata, and code-cleanup items were resolved on 2026-08-03. Visual product proof remains the deliberate next content step once real screenshots can be shared.

## Review scope and limitation

The review covered:

- `index.html`, `styles.css`, and `main.js`
- responsive rules and reduced-motion behavior
- the deployed HTML at `https://remilya.dev/`, which responded successfully and matched the local `20260405d` CSS/JS version
- key visual assets, including the first and last sequence frames, the spell circle, and translation cover art
- asset and repository weights
- public-link availability from an unauthenticated connection
- JavaScript syntax with `node --check main.js`

An interactive browser preview was unavailable in the review environment. Visual conclusions are therefore based on the page structure, styles, scripts, inspected assets, and deployed HTML rather than a full live click-through. Complete the browser QA checklist near the end after implementing changes.

## Scorecard

| Area | Assessment | Short reason |
| --- | --- | --- |
| Brand and visual identity | Strong | Memorable ultraviolet/gothic direction with consistent typography and color |
| Content and project narrative | Strong foundation | Projects explain workflows and technical decisions, not just stacks |
| First-visit clarity | Weak | The visible opener says only “Welcome To Remilya.dev” and hides the actual value proposition |
| Conversion | Weak | No visible primary contact action, email path, availability statement, or project inquiry CTA |
| Performance | Critical | 197.87 MB image sequence and roughly 760 MiB of possible decoded frame memory |
| Accessibility | Needs work | No visible/accessibility-tree H1, small controls, missing skip link, and low-contrast small labels |
| Mobile experience | At risk | Responsive CSS exists, but the same huge sequence is sent to mobile and the fixed header is dense |
| SEO and sharing | Needs work | Good title/description, but no canonical, social preview metadata, structured data, or crawlable locale URLs |
| Maintainability | Mixed | Plain static stack is easy to deploy, but there is substantial dead hero code and unused CDN JavaScript |

## What is already working well

### 1. The site has a recognizable point of view

The dark ultraviolet palette, cathedral opener, Sora/IBM Plex Sans pairing, fine borders, and restrained glow effects create a coherent identity. This is not a generic card-grid portfolio. Keep that personality.

The CSS token setup at `styles.css:6-46` is a good base for refinement. Core colors, typefaces, widths, and motion easing are centralized.

### 2. The project writing is credible

The Deksmo case study explains the workflow, operator needs, queue states, recovery, and export requirements. The private legal-platform case includes an outcome rather than only a responsibility list. Supporting projects show breadth across web, desktop, browser extensions, data, AI, and localization.

This is the right content direction. It needs more visual proof and measurable context, not a complete rewrite.

### 3. Bilingual support is thoughtfully integrated

English and Turkish content cover navigation, metadata, project descriptions, experience, capabilities, and accessibility labels. The chosen locale is persisted and the document language is updated in `main.js:1116-1126`.

### 4. Responsive and motion preferences were considered

The layout collapses to single columns, the mobile navigation becomes horizontally scrollable, and `prefers-reduced-motion` disables reveals and activates a static opener fallback. This is a solid foundation even though the mobile payload still needs a major fix.

### 5. The static architecture is simple

There is no build chain required to publish the site. That is appropriate for a portfolio, makes GitHub Pages deployment easy, and reduces framework maintenance.

## What needs to change

## P0 — Fix before promoting the site

### 1. Replace or radically reduce the opener sequence

Status: **Resolved on 2026-08-03.** The current site uses separate 48-frame desktop and mobile WebP sequences totaling 4.21 MB and 1.41 MB respectively. Desktop frames are 1920×1080 for sharper large-screen scrolling; mobile remains 720×1280. The details below document the original implementation and why it was replaced.

Evidence:

- `index.html:120-149` configures 96 full-HD JPEG frames.
- The first 12 frames total 26.29 MB.
- All 96 deployed frames total 197.87 MB.
- `main.js:1528-1546` starts six loads every 24 ms without waiting for them to finish, so it quickly queues every remaining frame.
- `main.js:1380` retains all loaded images in memory. At 1920×1080×4 bytes×96 frames, decoded image data can approach 760 MiB before browser overhead.
- Tracked production files total about 200 MB, almost entirely because of this sequence.

Why it matters:

- Slow first load and poor Largest Contentful Paint on mobile connections.
- High data usage for a visitor who did not ask to play media.
- Memory pressure, tab crashes, stutter, or aggressive image eviction on mobile.
- The effect competes with the work it is meant to introduce.

Recommended change:

- Best option: replace the frame set with a short, optimized MP4/WebM and a poster image. The ignored source MP4 is about 10.3 MB already, far smaller than the frame set, and should be recompressed toward 4–8 MB for production.
- If scroll-scrubbing must remain frame-based, use 30–48 responsive AVIF/WebP frames, load only a small window around the current frame, and evict distant decoded images.
- Serve a static poster under 200 KB for reduced motion, touch devices, and `navigator.connection.saveData`.
- Do not preload the entire animation on page load.

Acceptance criteria:

- Initial page transfer at 360 px mobile width is under 2 MB.
- No more than 5–8 MB of optional opener media is fetched during a normal visit.
- Reduced-motion and data-saver visitors receive only the poster.
- The opener remains smooth on a mid-range mobile device without memory warnings.

### 2. Put the value proposition and CTA in the first viewport

Evidence:

- The useful hero contains a role, value proposition, GitHub, LinkedIn, and work CTA at `index.html:54-118`.
- That entire section is disabled by `.section--hero { display: none; }` at `styles.css:284-286`.
- The visible sequence occupies `300vh` at `styles.css:405-410` and shows only a welcome title.

Why it matters:

A recruiter, client, or collaborator should understand who Remilya is, what Remilya builds, and what to do next within a few seconds. At present, the visitor must scroll through a long visual before receiving that information.

Recommended change:

- Restore a compact semantic hero above or over the sequence.
- Use a direct headline such as: “I build operator-focused AI and localization tools.”
- Add two clear actions: `View selected work` and `Start a conversation`.
- Keep the cathedral as an atmospheric background or a shorter optional transition.
- Reduce the cinematic scroll span to approximately `130–160vh`, or move the sequence below the first content block.

Acceptance criteria:

- Role, value proposition, and one primary action are visible without scrolling at 360×800 and 1440×900.
- A visitor can reach selected work or contact in one action.
- The opening visual supports the message instead of replacing it.

### 3. Remove the visible Veo watermark

Status: **Resolved on 2026-08-03.** The replacement gothic archive media has no visible Veo watermark and avoids the previous prominent six-pointed geometry.

The first and last inspected hero frames both contain a visible `Veo` mark in the bottom-right corner. Because the sequence is the first thing visitors see, this reads as unfinished source media and reduces trust.

Replace the source with a clean, licensed export. Do not solve this only by placing UI over the corner; the asset itself should be presentation-ready.

Acceptance criteria:

- No third-party generation watermark is visible in any production frame, poster, thumbnail, or social preview.
- The replacement media has documented usage rights.

### 4. Repair or reclassify public links

Link check performed on 2026-08-02:

| Destination | Result from unauthenticated check | Action |
| --- | --- | --- |
| `https://remilya.dev/` | 200 | Keep |
| `https://deksmo.com/` | No DNS record from the review environment | Restore DNS/deployment or remove the “Live surface” link |
| `https://github.com/Remilya/Deksmo` | 404 | Publish/correct the repository or label the work private without a link |
| `https://github.com/Remilya/Deksmo-Vision` | 404 | Publish/correct or remove the repository link |
| `https://github.com/Remilya/DeksmoMedical` | 404 | Publish/correct or remove the repository link |
| `https://github.com/Remilya/DeksmoILACDB` | 404 | Publish/correct or remove the repository link |
| `https://github.com/Remilya/Watermark-Deksmo` | 200 | Keep |
| `https://github.com/Remilya/DeksmoScrap` | 200 | Keep |
| LinkedIn | Automated request was blocked by LinkedIn | Verify manually in a normal browser |
| Manga translation links | Automated HEAD requests returned 403 | Verify manually; this may be bot protection rather than broken pages |

A public portfolio should never present a private or unavailable repository as a clickable public destination. For private work, use a non-link label such as `Private repository — walkthrough available on request`.

## P1 — Improve trust, accessibility, and conversion

### 5. Add a visible, accessible H1

The normal hero H1 is inside the CSS-hidden section. The visible sequence heading is inside `aria-hidden="true"` at `index.html:142`, so it is excluded from the accessibility tree.

Use one visible H1 for the professional proposition. The decorative “Welcome to Remilya.dev” text can be a paragraph or an aria-hidden visual copy, but it should not be the only visible H1.

### 6. Turn contact into a real conversion section

The current contact section contains only the eyebrow and dynamically rendered GitHub/LinkedIn buttons. The `contact.title` and `contact.copy` values are empty in both locales.

Add:

- a short availability statement
- a direct email or contact form path
- the kinds of work being accepted
- expected response time if appropriate
- GitHub and LinkedIn as secondary profile links

Example:

> Building an AI workflow, operator tool, or localization product? Send a short brief and I’ll reply with fit and next steps.

### 7. Add visual evidence to case studies

Most project sections are text plus a logo. This describes the work but does not prove interface quality.

For each featured project, add:

- one strong product screenshot or short muted demo
- role and ownership
- project date and current status
- problem → constraints → decisions → result
- one or two real metrics where disclosure is allowed
- a clear distinction between shipped, experimental, private, and archived work

Do not add a large gallery to every card. One excellent image and a focused result are more useful than many decorative mockups.

### 8. Improve keyboard and screen-reader navigation

Make these changes:

- Add a `Skip to main content` link as the first focusable element.
- Add `scroll-margin-top` to anchored sections so the fixed header does not cover headings.
- Set `aria-current="location"` on the active navigation link, not only an `.is-active` class.
- Remove `aria-live="polite"` from large grids. Injecting entire project, capability, timeline, and translation sections into live regions can produce excessive announcements.
- Make the translation-card treatment work on `:focus-visible`, not only `:hover`.
- Ensure every interactive target is at least about 44×44 CSS px. Current desktop locale buttons and several navigation links are smaller.
- Increase the focus outline contrast. The current outline uses the translucent `--accent-dim` value.

### 9. Fix small-text contrast

Approximate contrast against the dark surfaces:

- `--text-dim` (`#9588aa`) is acceptable at roughly 5.7:1 or better.
- `--accent` (`#a855f7`) is acceptable at roughly 4.8:1 or better.
- `--scarlet` (`#dc2626`) ranges from roughly 3.9:1 to 4.2:1 and is used for text as small as `0.65rem`.
- `--bernkastel` (`#7c3aed`) ranges from roughly 3.3:1 to 3.6:1 and is also used for small metadata.

Brighten scarlet and deep-violet text tokens, reserve the darker versions for decoration, and retest against `--void`, `--abyss`, and `--surface`.

### 10. Fix translation-card localization and interaction

The locale data includes `readLabel`, but the card overlay hardcodes `READ →` in CSS at `styles.css:2068-2084`. Turkish visitors therefore still see English. The overlay also appears only on hover.

Render the label from localized HTML/JS, show it on keyboard focus, and disable or soften the 3D mouse treatment when reduced motion is requested.

### 11. Make essential content resilient without JavaScript

The work, translation, capability, timeline, and social-link containers are empty in the HTML and populated by `main.js`. If the script fails or is blocked, the portfolio loses its most important content.

At minimum, render the English core content in HTML and let JavaScript enhance or replace it for locale switching. Add a useful `<noscript>` message and direct profile/contact links.

## P2 — SEO, sharing, and code cleanup

### 12. Complete page metadata

The existing title and description are a good start. Add:

- canonical URL
- favicon and Apple touch icon
- Open Graph title, description, image, URL, and type
- Twitter/X card metadata
- `Person` and selected `CreativeWork` or `SoftwareApplication` JSON-LD
- a dedicated, clean social preview image
- sitemap and robots files if the site grows beyond one page

For bilingual search visibility, use crawlable URLs such as `/en/` and `/tr/` with reciprocal `hreflang` links. A localStorage-only language switch does not give each language a stable shareable/indexable URL.

### 13. Remove unused GSAP downloads

`index.html:18-19` loads GSAP and ScrollTrigger, but neither is referenced in `main.js`. Remove both requests unless a real feature uses them. This reduces external dependencies and avoids downloading unused JavaScript.

### 14. Remove dead hero code and assets

The hidden conventional hero still has HTML, CSS, locale data, render functions, and a scroll parallax listener. Several sequence status DOM bindings also point to elements that do not exist.

After choosing the final opener structure:

- delete the unused hero branch rather than keeping it hidden
- remove unused element bindings and locale properties
- remove `initSpellCircleParallax()` if the spell circle stays hidden
- remove or replace the 982 KB RGB `spell-circle.png`; it contains a baked checkerboard rather than transparency and is currently inside the hidden hero
- remove stale “legacy compatibility” CSS when confirmed unused

### 15. Clarify positioning without losing range

“Creative Technologist” fits the aesthetic but is broad. The work suggests a more valuable concrete position: operator-focused AI tools, localization systems, and complex product interfaces.

Use one primary positioning sentence, then let the capability sections show range. This helps visitors remember a specialty instead of only a long stack.

### 16. Add lightweight quality checks

The project does not need a heavy framework. Add a small repeatable check workflow for:

- HTML validation
- JavaScript syntax
- broken internal links and asset paths
- public external-link checks
- Lighthouse performance/accessibility/SEO budgets
- file-size budgets that fail when a single production asset is unexpectedly large

## Recommended target page flow

1. **Compact hero:** name, concrete specialty, one-sentence value, `View work`, and `Contact`.
2. **Selected work:** Deksmo and the strongest client case, each with a screenshot and result.
3. **Optional cinematic moment:** a short cathedral sequence or video, now supporting the story rather than blocking it.
4. **Supporting systems:** smaller projects with public/private/status labels.
5. **Capabilities:** three clear service/product areas; avoid repeating the entire stack.
6. **Translation work:** retain it as evidence of localization depth and personality.
7. **Experience and training:** concise timeline with dates and context.
8. **Contact:** availability, inquiry prompt, email, and profile links.

## File-by-file change guide

### `index.html`

- Restore or rebuild a semantic first-viewport hero.
- Add the skip link and a visible H1.
- Shorten or reposition the sequence.
- Replace the frame-canvas markup with optimized video/poster markup if using the recommended approach.
- Add contact heading/copy and a direct contact method.
- Add canonical, social metadata, icons, and structured data.
- Remove unused GSAP scripts.
- Add a useful no-JavaScript fallback.

### `styles.css`

- Remove the conflicting `.section--hero { display: none; }` rule after finalizing the hero.
- Add anchored-section `scroll-margin-top`.
- Increase small control hit areas.
- Strengthen focus styles and small-label contrast.
- Add `:focus-visible` parity for translation cards.
- Include all decorative transforms/animations in the reduced-motion override.
- Delete dead hero and legacy rules after verifying the final markup.

### `main.js`

- Replace the all-frame preloader or add a bounded frame cache.
- Respect reduced motion, data saver, device capability, and viewport size before loading optional media.
- Fix/remove unavailable project URLs.
- Use `readLabel` instead of hardcoded CSS text.
- Set `aria-current` in active navigation.
- Avoid using large live regions for initial content rendering.
- Remove unused hero/status bindings and parallax work.
- Consider moving locale content into separate JSON modules only if the content continues to grow; the current single file is still manageable after cleanup.

### `assets/`

- Replace watermarked opener media.
- Remove the 197.87 MB full-HD frame set after migration.
- Add optimized product screenshots with explicit dimensions.
- Add a social preview image.
- Replace or delete the non-transparent spell-circle file.

### `README.md`

- Document the final media strategy.
- Add performance budgets and the validation commands.
- Document how public/private project statuses should be represented.

## Suggested implementation order

### Pass 1 — Trust and speed

- [x] Fix unavailable links.
- [x] Replace the watermarked 96-frame opener.
- [x] Put role, proposition, and CTA in the first viewport.
- [x] Remove unused GSAP requests.
- [x] Add a real contact path.

### Pass 2 — Proof and accessibility

- [ ] Add one strong visual to each featured case study when real source assets are supplied.
- [x] Add visible H1, skip link, anchor offsets, larger hit targets, and stronger focus styles.
- [x] Fix small-label contrast.
- [x] Fix localized/focusable translation overlays.
- [x] Remove inappropriate live regions.

### Pass 3 — Discovery and cleanup

- [x] Add canonical, Open Graph, icons, JSON-LD, and social image.
- [x] Keep `/` as the single canonical URL for this iteration.
- [x] Remove dead hero code and stale assets.
- [x] Add lightweight syntax, link, asset, frame, metadata, and size-budget validation.
- [ ] Add automated Lighthouse checks when browser CI is available.

## Browser QA checklist

Test at minimum at 360×800, 390×844, 768×1024, 1440×900, and 1920×1080.

- [ ] The first viewport explains who Remilya is and what Remilya builds.
- [ ] Primary CTA and contact path are visible and keyboard reachable.
- [ ] Header does not obscure anchor targets.
- [ ] Mobile navigation can be discovered and used without accidental horizontal page scrolling.
- [ ] English and Turkish layouts do not overflow.
- [ ] All public links work in a logged-out/private browser window.
- [ ] Tab order is logical and focus is always visible.
- [ ] Screen-reader heading order is H1 → H2 → H3 without skipped structural levels.
- [ ] Reduced motion removes the sequence, card tilt, cursor trail, floating particles, and pulsing signature.
- [ ] 200% zoom remains usable.
- [ ] Images do not cause layout shift.
- [ ] There are no console errors or failed asset requests.
- [ ] Mobile Lighthouse: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- [ ] LCP < 2.5 s, CLS < 0.1, and INP < 200 ms under a realistic mobile throttle.

## Keep these parts

- Keep the ultraviolet/gothic visual identity.
- Keep bilingual English/Turkish support.
- Keep Deksmo as the portfolio anchor.
- Keep the detailed, operator-focused project language.
- Keep translation work; it reinforces localization credibility and personality.
- Keep the plain static deployment unless the content model truly outgrows it.

The right next version is not a generic redesign. It is the same distinctive site with a much lighter opener, a clearer first message, stronger proof, working destinations, and a direct route to contact.
