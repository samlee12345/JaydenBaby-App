# JaydenBaby tablet preview

A bilingual, portrait-first shop tablet web app built with Vite and vanilla JavaScript. English appears above Cantonese, and the layout responds to landscape rotation.

## Run locally

Install dependencies with `npm install`, then run `npm run dev`. Open the printed local URL. A tablet on the same Wi-Fi can use the printed network URL while the computer and server are running.

`npm run build` creates the static site in `dist`. `npm run preview` serves that build locally. No backend, authentication, or cloud deployment is configured.

## Included

- Home, brand and age filtering, bilingual search, product details.
- Two or three product comparison, add/remove controls and a three-product limit.
- Vehicle brand, model, year selection and a clearly unconfirmed ISOFIX result.
- Session storage retains selections on refresh; responsive CSS preserves state on rotation.
- After three minutes without interaction outside Home, selections reset to Home.
- Bundled Zain, Nunito and Noto Sans TC fonts; no runtime font service required.

## Data boundaries

`src/data.json` is a local snapshot of the supplied Google Sheets, imported on 2026-10-13. It is not synchronized automatically and the original sheets were not modified.

Product source: https://docs.google.com/spreadsheets/d/1XZ_BfwOFqfHBlEhoZyvcT7t8IZnjFY7dXckUlkfUmb4/edit

Vehicle source: https://docs.google.com/spreadsheets/d/1QeEzFsmeek_ZK39zFlIiCz_GJtHj6OEL8oWT3aQf4WY/edit

Products come from the English and Chinese clean tabs, paired by brand/model with explicit aliases for three translated names. Age grouping comes from the English age tab. The age-only Cybex Anoris T record is not imported because it has no main-catalogue counterpart. All 102 catalogue products are included. Staff selling notes and unverified editing-tab prices are omitted.

The vehicle import reads Compatibility A1:R6669 and deduplicates records by English brand/model, yielding 1,250 vehicle variants. It omits 424 rows where English and Chinese model text differs. These need manual review; some differences may be legitimate translations. Flags are not imported as ISOFIX locations because their definitions and physical seat mapping remain unconfirmed.

Product and vehicle drawings are generic illustrations, not photos. Product specifications and ADAC field text come from the supplied sheet and have not been independently verified. The results make no affirmative or negative ISOFIX claim. This is a functional preview, not a validated compatibility tool for customer deployment.

## Next content work

- Supply approved product photos and the official logo asset.
- Reconcile vehicle language mismatches and confirm seat-number mapping.
- Verify product specifications and ratings against the applicable regional model.
- Agree the final spreadsheet update process and tablet kiosk setup.
