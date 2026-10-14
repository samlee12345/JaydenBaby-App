# JaydenBaby Tablet App Design

Status: Browser prototype built and tested. User clarified the final deliverable must be a tablet app. Installed-app platform and expanded brief scope need reconciliation.

## Preview implementation

- Vite and vanilla JavaScript with a local data snapshot. No backend or automatic spreadsheet synchronization.
- 102 bilingual products, brand/age/search filters, details, and comparison of two or three seats.
- 1,250 vehicle variants, selected by brand, model and year. ISOFIX results remain unconfirmed.
- 424 source rows with differing English/Chinese model text omitted pending manual review; some may be legitimate translations.
- Generic labelled illustrations replace missing photos. Text wordmark awaits an approved logo asset.
- Bundled Zain, Nunito and Noto Sans TC. Dark button text on the orange accent.
- Home/Back, state retention on rotation and refresh, three-minute idle reset.
- Palette: orange #FF8A59, white #FCFCF9, peach #FFF0E8, sage #EAF0E7, dark text #303E37.
- README.md documents setup and data boundaries. VALIDATION.md records browser checks.

## Purpose and scope

A customer-facing tablet experience for exploring car seats, comparing up to three models, and checking vehicle ISOFIX locations. No App Store distribution is planned. The earlier single-function constraint has been withdrawn.

## Confirmed visual direction

- Headers: Zain.
- Body text: Nunito.
- Accent: rgb(255, 138, 89), equivalent to #FF8A59. Use for primary buttons and selected accents.
- Cards: large, rounded, with soft shadows where they help distinguish interactive content or group information.
- Keep the overall interface spacious and easy to read on a shop tablet.

## Responsive tablet layout

Confirmed: portrait is the primary standing orientation. Landscape must also be fully supported.

- Reflow content to fit the available width, rather than stretching or shrinking the portrait screen.
- In portrait, stack primary cards and place large images or seating diagrams above supporting details.
- In landscape, use side-by-side cards and image/detail columns where space permits; product grids can show more columns.
- Preserve the current screen, filters, selected vehicle, and comparison selections when rotating.
- Keep text and touch targets comfortably sized in both orientations. Allow vertical scrolling for longer content without clipping controls.
- Check all flows in both orientations, including the three-model comparison and bilingual labels.

## Typography and color implementation notes

- Use bundled Noto Sans TC for Cantonese text alongside Zain and Nunito.
- Check button-label contrast against the orange accent. Choose a readable foreground rather than assuming white text will work.
- Use clear labels and icons alongside status colors.

## Screen flow from the wireframe

User accepted retaining the existing PDF flow and authorized building the preview.

Welcome → Home with Car Seat Information and Check ISOFIX.

Car Seat Information:
- Brand → product grid → product details.
- Age group → products grouped by brand → product details.
- Compare → select up to three models → comparison table.

Check ISOFIX:
- Vehicle brand → model → year or generation → seating diagram and result.

## Proposed interaction principles

- Large touch targets and short, clear explanations.
- Consistent Home and Back controls.
- Automatic return to the welcome screen after inactivity; timing to be decided.
- Distinct results for confirmed ISOFIX presence, confirmed absence, and unavailable information.

## Content and data

### Current spreadsheet sources

The two newly supplied workbooks are the current working references. Keep both read-only. The previous workbook below is historical context.

Vehicle compatibility: https://docs.google.com/spreadsheets/d/1QeEzFsmeek_ZK39zFlIiCz_GJtHj6OEL8oWT3aQf4WY/edit

- Title: CarSeatCompatibility - 副本 (For app development).
- Compatibility tab (sheetId 0) now separates Traditional Chinese and English vehicle brands, models, and notes. It retains child seat brand/model, i-Size, seven compatibility flags, and a Car image column.
- Sample reviewed: A1:AF12. Example discrepancy at D10:E12: Chinese-side model says 147 while English-side model says 148. Resolve identity mismatches before displaying paired labels.
- cross check and Car add to list remain present; no automatic merging or assumption of final status.
- Product-specific compatibility still does not establish a universal anchor inventory. Seat numbering and flag meanings remain open.

Product catalogue: https://docs.google.com/spreadsheets/d/1XZ_BfwOFqfHBlEhoZyvcT7t8IZnjFY7dXckUlkfUmb4/edit

- Title: Carseat Guide book for staff - 副本. Although introduced as ISOFIX screening, inspected contents are product specifications and age group lists.
- final clean data 20260910 (sheetId 750538381) and 「final clean data」Chinese 20260910 (sheetId 1295906995): each has 102 product records across 20 brands in A1:I103. Both were read through row 1000. All Photo cell values in these product records are blank; embedded imagery was not assessed.
- group by age (sheetId 1181178132) and 「group by age」的Chinese (sheetId 1296714954): each has 103 product entries and eight group headings in A1:I112. Both were read through row 1000. Reconcile with the main catalogue before implementation. Categories include infant, toddler, booster, and multiple multi-stage ranges; they do not directly match the five wireframe buttons.
- editing data (sheetId 0): sampled A1:AK8. Has paired language columns and prices, but many fields are unfilled or English text sits under Chinese headers. Model pair C3:D3 differs, Sperber-Fix 61 versus Sperber-Fix 62. Do not treat as an approved overwrite of clean tabs.
- Match translations by a stable product ID or explicit mapping. Some model names are translated and age tabs differ in row order, so neither exact text equality nor row position is a reliable general join.
- Staff Selling Notes need rewriting as customer-facing descriptions. Source claims and ratings remain unverified. ADAC fields mix numeric scores, certification text, and unavailable statuses; retain distinct states rather than displaying them all as scores.

Proposed import: use the clean English/Chinese product tabs as the catalogue, age tabs as grouping references, and Compatibility as a separate vehicle dataset. Confirm which product tab should govern when editing and clean tabs disagree. Missing content stays visibly unavailable; do not fabricate images or specifications.

### Historical initial spreadsheet source

User-selected source: https://docs.google.com/spreadsheets/d/1lZ07sBZBS6KSiINci8aM3FwwAzTkzHqWW-KwRqlRVVY/edit

Workbook: CarSeatCompatibility. Read-only source; do not edit the original as part of app work without an explicit request. Metadata and the first 12 rows of each tab were inspected, not the complete dataset.

- Compatibility (sheetId 0): vehicle brand/model, notes, i-Size field, child seat brand/model, seven seat-position compatibility fields, and a Car image column. A1 currently reads ZR-V although sampled column A values are vehicle brands; normalize the header in the app import, not in the source.
- cross check (sheetId 1424134933): similar compatibility structure; sampled entries include Silver Cross models. Treat as reference pending confirmation of which tab is authoritative; do not merge automatically.
- Car add to list (sheetId 1641378721): mixed checklist and proposed compatibility records. Treat as staging pending confirmation.

The sampled records describe a vehicle and specific child seat combination. Do not interpret Y/N as a universal vehicle ISOFIX inventory. Confirm the meaning of Y, N, dash, blank, and Seat 1 through Seat 7 before drawing anchor positions or presenting compatibility claims.

Use the sheet for initial vehicle and model content in the preview. Product photos, age/height ranges, rotation, ratings, Cantonese descriptions, and verified anchor diagrams were not established by these sampled rows. Keep unavailable fields explicit rather than inventing details. Live synchronization and a backend are not yet selected.

Confirmed: English and Cantonese in Traditional Chinese appear together, with English above the corresponding Cantonese text. No language toggle is needed.

- Apply this order to headings, buttons, navigation, descriptions, comparison labels, and result messages.
- Keep each English/Cantonese pair visually grouped and both languages comfortably readable.
- Allow cards and buttons to grow for bilingual text in both orientations; do not truncate essential wording.

Product specifications, ratings, vehicle details, and anchor locations in the wireframe are examples requiring verification. Decide who maintains the data before choosing whether a separate backend is necessary.

## Next decisions

- Target tablet screen size; portrait and landscape support are confirmed.
- Review Noto Sans TC and bilingual wording on the actual tablet.
- Data verification and maintenance process.
- Offline requirements.

## Working sequence

Design document → clickable tablet prototype → verified data → working app.

Source wireframe: /Users/samanthalee/Downloads/ISOFIX app R1.pdf
Reference repository: https://github.com/samlee12345/car-seat-checker


## New Pages brief review

Source: /Users/samanthalee/Downloads/JaydenBaby ISOFIX.pages . Full review in BRIEF-REVIEW.md.

The brief proposes an installed Android-only Flutter app plus staff web admin, guided age/brand/price selection, two-seat comparison, downloadable catalogue/media caching, and conflict-aware vehicle imports. It also specifies a language switch, landscape layout and no timed reset. These differ from some earlier user instructions and the current prototype. Do not automatically adopt document requirements over direct user choices. English above Cantonese together and portrait with landscape support remain the confirmed design instructions. Confirm Android versus iPad before implementing the installed app. No native packaging or backend has been built.
