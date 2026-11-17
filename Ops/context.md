# JaydenBaby operational context

Updated 2026-11-17.

## Continue work

- Source: Vite and vanilla JS in `src/`. GitHub Pages publishes `dist` from main via Actions. Local branch `codex/initial-preview` tracks main.
- Local preview for this session is http://localhost:5180/. Port 5173 belongs to another project. Use the URL printed by Vite, do not terminate another project's server.
- Final target: Android-only APK, directly installed, internet allowed. No app store, backend or APK yet.
- UI: portrait only, one language per screen, English/Traditional Chinese switch, official JaydenBaby logo, Zain/Nunito/Noto Sans TC, orange #FF8A59, mature graphite cards, top-left Back, maximum three comparison seats, no idle reset.
- Data remains 102 products and 1,250 vehicle variants from the supplied sheets. No data sync. Source details and prior requirements are in `design.md` and `BRIEF-REVIEW.md`.

## Media update

The user approved the plan on 2026-11-17: use supplied product photos, exterior vehicle photo above a separate seating/ISOFIX section, and research layout data. Actual exterior photos will be supplied later. The camera placeholder is intentional.

Drive sources:
- Product PNGs: https://drive.google.com/drive/folders/1iPj5D17YBRdgvAs2KhaPCTDg0u9bXDrp
- Layout illustrations: https://drive.google.com/drive/folders/1ufQbBdhaf3tiiy9tPBQo3n-sXXsSz2Kg

`media-inventory.json` records original names, IDs, URLs and app asset paths. Originals were downloaded read-only into ignored `Ops/source-images/`. PNGs were proportionally resized to a maximum 900px, preserving transparency; layout JPGs to 1100px. No AI generation, content retouching, background removal or Drive changes in this update.

| Product | ID | App photo |
| --- | --- | --- |
| Britax Römer Advansafix Pro | p3 | advansafix-pro.png |
| Britax Römer Dualfix Pro | p5 | dualfix-pro.png |
| Britax Römer Kidfix Pro | p7 | kidfix-pro.png |
| Britax Römer Swivel Grow Max Air | p8 | swivel-grow-max-air.png |

Swivel Grow Max Air is the home hero. All four photos appear in cards, details and comparison. Other products retain labelled illustration placeholders. Matching is by exact brand and product name in `src/media.js`, not photo order or approximate names.

Fifteen supplied layouts are stored in `src/assets/layouts`. Eleven exact existing catalogue entries use six of those files as model-family references, never verified configuration diagrams:
- BMW 5-Series E60, F10 and 2018 entries: supplied BMW 5 illustration.
- BMW 6-Series Cabrio and two-door Coupe: supplied BMW 6 illustration; explicitly exclude four-door Gran Coupe.
- BMW Z4: supplied Z4 illustration.
- Mercedes-Benz V-Class: supplied eight-seat example, not a claim every V-Class has eight seats.
- Porsche Panamera 2009, 2011 and E-Hybrid 2015: supplied four-seat example, not a claim every version has four seats.
- Tesla Model X Monopost 2019: supplied six-seat example. Exclude unspecified Model X and Bench entries.

Remaining nine illustrations are staged but not assigned: BMW 2 is body-style ambiguous; Land Rover filenames lack a model and the summary places its seven-seat file under six seats; Audi R8, Porsche Boxster/911, Toyota GR86, MIFA 7 and Zeekr 009 lack exact corresponding catalogue entries. Do not map MIFA 7 to MIFA9, or BMW 2 to every 2-Series.

No ISOFIX markers were added. All vehicle results still state confirmation needed. Missing layout matches show a pending state rather than a guessed arrangement. The supplied images have no verified anchor positions, year range, market or trim information. To publish actual locations, obtain exact variant/market mapping, physical seat numbering, anchor evidence and a review date. Keep those separate from the illustrative image.

## Research checked 2026-11-17

- [Britax Römer Fit Finder](https://www.britax-roemer.com/fitfinder): official tool accepts brand, model and type/year. Its description says results are based on tested vehicles, coverage is incomplete, and a test installation is recommended. Useful cross-check for specific Britax child-seat fit; not a complete generic anchor-position inventory or confirmed bulk-data API. No database scraped or imported.
- [BMW digital owner's manuals](https://www.bmwusa.com/owners-manuals.html): official lookup requests a VIN and supports selected model years. It demonstrates why exact vehicle identification matters. This US page is a reference route, not evidence for Hong Kong specifications or any particular anchor location.
- Google search hit a CAPTCHA. The attempted Tesla and Maxi-Cosi pages returned access denied. The attempted Euro NCAP installation page returned 404. These are not verified sources and no vehicle claims were derived from them.
- No verified, complete, reusable dataset covering all 1,250 catalogue variants was identified. Follow up with manufacturer manuals for the actual market and year, plus relevant child-seat fit lists and staff review. Source spreadsheet compatibility flags must not be silently reinterpreted as physical anchors.

## Validation

- `npm run build` passed.
- Existing `tests/browser-smoke.js` and `tests/language-navigation.js` passed through gstack browse.
- `Ops/media-checks.js` passed: four exact model/photo matches; images decode; detail and comparison photos; mixed photo/placeholder comparison; exterior placeholder above layout; English/Chinese unconfirmed captions; Tesla Bench exclusion; BMW Gran Coupe exclusion; no horizontal overflow.
- The media script is asynchronous. After running it with browse eval, inspect `window.jaydenMediaChecks`; require status `passed`.
- Screenshots inspected for home, catalogue and vehicle result at 820px portrait and home at 390px. Physical Android tablet remains untested.
