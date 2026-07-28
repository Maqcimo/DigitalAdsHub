# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**DigitalAdsHub** — French-language reference site for digital advertising specs, restrictions, and benchmarks targeting the French market. Audience: media buyers and agency staff at Øconnection (oconnection.fr).

- All user-facing content is in **French**, professional media-buying tone.
- Technical platform terms stay in English (Performance Max, Demand Gen, in-market, lookalike…).
- The character **Ø** is a brand marker — "Øverview", "Øconnection". Never substitute with "O".

## Architecture

Zero-build, vanilla JS/CSS/HTML — no npm, no bundler, no framework.

```
index.html              ← Single HTML shell; all page containers pre-declared
assets/
  js/app.js             ← All logic + all inline data (~1,360 lines)
  css/style.css         ← All styles
  data/overviews.json   ← Øverview PDF metadata (lazy-loaded)
  pdf/                  ← PDF files served as static files, loaded on demand
  img/                  ← Static images (WebP preferred, loading="lazy" below the fold)
```

### Data model (`app.js`)

All content is inline JS constants — no API, no CMS:

| Constant | Content |
|---|---|
| `P` | 11 Social Ads platforms (facebook, instagram, youtube, tiktok, linkedin, snapchat, reddit, pinterest, x, twitch, bereal). Each has `formats[]`, `restrictions[]`, `kpi{}`, `pixel{}`. |
| `PROG_LEVIERS` | 7 programmatic channels (Vidéo Online, BVOD, AVOD, SVOD, Display, Audio, DOOH) |
| `GADS_CAMPAGNES` | 5 Google Ads campaign types |
| `BM` | Benchmark data by sector |
| `METRICS_DATA` | Key metrics definitions |
| `TRAPS_DATA` | Common pitfalls |
| `LEGAL_DATA` | Legal/compliance rules |
| `STICKERS` | Interactive stickers list (Facebook/Instagram) |

### Navigation & routing

Nav order (left to right): **Accueil → Social Ads → Programmatique → Google Ads → Benchmarks → Øverview**

- Hash-based routing: `applyRoute(hash)` on load, `nav(page)` for in-app navigation.
- Pages rendered once and cached: `_rendered` Set (global pages) + `_platCache` Set (platform pages).
- `GLOBAL_PAGES` array lists all non-platform page IDs.
- `renderGlobal(page)` dispatches global pages; `renderPlatformAll(p)` renders a platform.
- Platform pages have 4 tabs (Formats / Restrictions / KPI / Pixel): `openPlatform(p, tab)` + `switchTab(tab)`.

### Search

`buildSearchIdx()` indexes all content at load; `doSearch(q)` queries it with accent- and case-insensitive fuzzy matching. Any new section's content must be added to the index.

### Øverview section

- Preset overviews: metadata in `assets/data/overviews.json`, PDFs in `assets/pdf/`.
- User-uploaded overviews: stored as base64 in `localStorage`.
- `viewOverview(i)` handles **both** paths (file path for presets, base64 for uploads) — preserve both code paths.
- New Øverview workflow: copy PDF to `assets/pdf/`, add entry at the **top** of `overviews.json` (newest first), keep numbering and date format consistent with existing entries.

## Development

No build step. Serve locally with:

```bash
python3 -m http.server 8080
```

## Critical: file size constraint

`index.html` was reduced from ~11.9 MB to under 200 KB. **It must never exceed 250 KB.**

- **Never** embed PDFs, images, fonts, or large data blobs as base64 in `index.html`.
- Before committing any change to `index.html`, check its size: `wc -c index.html`. Flag it if > 250 KB.

## Design system

**Font:** Space Grotesk (Google Fonts) — `var(--f-body)` / `var(--f-display)` (also Poppins for some nav elements).

**Key CSS variables:**
```
--bg:#f7f6f3   --surface:#fff   --border:#e5e1db   --text:#111
--muted:#706b65  --accent:#e8380d  --accent-light:#fff2ef
--ok:#1a7f4b   --warn:#8f5400   --err:#c0392b
--r:12px  --r-sm:8px  --r-xs:6px
```

**Reusable components** (always prefer these over new classes):

| Pattern | Classes |
|---|---|
| Section title with rule | `.sec-title` |
| Cards (content) | `.fmt-card`, `.g-card`, `.m-card`, `.kpi-card`, `.p-card` |
| Tags / badges | `.tag .tag-ok/.tag-warn/.tag-err/.tag-n` |
| Pills / chips | `.chip`, `.p-link`, `.hbc-pill` |
| Notice banners | `.notice .notice-info/.notice-warn/.notice-ok` |
| Recommendation block | `.reco` |
| Sub-tabs | `.sub-nav` + `.sub-tab` |
| Grids | `.formats-grid`, `.kpi-cards`, `.metrics-grid`, `.sticker-grid`, `.global-grid` |

**Golden rule: reuse existing classes.** Any new section must be visually indistinguishable from existing ones. Do not create new CSS classes for one-off styles.

## Adding content

- **New platform**: Add a key to `P`, add entry to `GLOBAL_PAGES` if needed, register in `renderGlobal()`.
- **New programmatic channel**: Add to `PROG_LEVIERS`.
- **New Google Ads campaign**: Add to `GADS_CAMPAGNES`.
- **New global section**: Add page ID to `GLOBAL_PAGES`, add render function, call from `renderGlobal()`, add to `buildSearchIdx()`.

## Definition of done

Every new or modified section must:

1. Work responsively at 375 px, 768 px, and 1024 px.
2. Be indexed by search (`buildSearchIdx()`).
3. Meet accessibility: semantic heading hierarchy, `alt` text, `aria-label` on icon-only buttons, keyboard operability with visible focus, WCAG AA contrast.
4. Not push `index.html` over 250 KB.

## Working conventions

- Commit messages: short, imperative, English, describing the user-visible change.
- Never change visual design, copy, or layout unless explicitly asked.
- For large tasks, propose a plan and wait for confirmation before executing.
- Explanations to the user can be in French; code, comments, and commit messages in English.
