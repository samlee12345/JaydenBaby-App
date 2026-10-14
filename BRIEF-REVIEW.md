# JaydenBaby brief review

Source: /Users/samanthalee/Downloads/JaydenBaby ISOFIX.pages
Reviewed all seven pages on 2026-10-13. Exported a temporary PDF for inspection without changing the original Pages file.

## Status and authority

The user requested a review and clarified that the deliverable should be a tablet app rather than a website. The current Vite build is a browser prototype, not an installed Android or iPad application. The supplied DotsBit proposal is reference material, not automatic approval to replace earlier user decisions, provision services, or adopt its entire scope and stack.

## Proposed scope in the brief

- Android tablets only, Flutter app delivered as an installation file. Explicitly excludes iPad/iPhone and app store submission.
- Normal app, not a locked kiosk. No staff PIN and no automatic Home reset.
- Customer flow: age/stage, brand or no preference, price band or lowest price, results, details, comparison of two seats.
- Vehicle flow: brand, model, year, anchor map or no-anchor result; separate vehicle-not-found state.
- Arrow locations depend on the supplied seat-number legend. Yes shows an arrow, No shows the seat without an arrow, dash means not present and hidden.
- Deduplicate vehicle records, flag disagreeing maps for manual resolution rather than selecting one. No child seat selection in ISOFIX flow.
- Download catalogue and images, retain the last successful version for Wi-Fi outages. First download and updates need a connection; explicit initial-download-unavailable state.
- Staff web admin: login, dashboard, product list/editor, vehicle list/editor, import preview/conflict resolution, interior image/arrow positioning, store settings. Nine admin screens and fourteen tablet screens.
- Products: HKD price, photos, stage, installation, rotation, customer description. Staff notes only in admin. ADAC displayed when populated. Missing prices/photos not fabricated.
- Brief proposes Flutter, Next.js, Supabase and Firebase Hosting, plus Figma design deliverables. These technologies and additional deliverables are not yet adopted.

## Reconciliation required

| Topic | Earlier instruction or current prototype | Brief |
| --- | --- | --- |
| Hardware | User mentioned iPad/tablet; unresolved hardware | Android only; no iPad |
| Language | User explicitly requires English above Cantonese together | Switch between languages |
| Orientation | User explicitly requires portrait primary, responsive landscape | Landscape layout |
| Comparison | Wireframe and prototype support up to three | Two seats |
| Product journey | Brand/age browsing with filters | Guided age, brand, price steps |
| Inactivity | Prototype resets after three minutes, assistant-selected | No timed reset |
| Maintenance | Snapshot of sheets; no backend yet | Staff admin and online catalogue sync |

Retain confirmed user language and orientation decisions unless they change them. Hardware is the first needed clarification before selecting the app framework and installation route. The brief's statement of flag meanings resolves its intended semantics, but not actual data conflicts or physical numbering. Do not publish anchor positions without the legend and reviewed records.

## Gaps between prototype and deliverable

No native project or installable package exists. No admin, authentication, database, import conflict workflow, media upload, catalogue sync, or offline app caching exists. Local bundled data is not equivalent to the specified synchronized offline catalogue. Guided price flow is absent. Generic illustrations replace photos in the prototype only. The prototype has useful styling, data normalization and interaction reference, but is not the completed tablet architecture.

The brief estimates about 145 products, while the reviewed clean catalogue has 102. Agree which catalogue is authoritative. Define how unresolved vehicle conflicts are shown to customers and which year/variant rules apply before enabling positive or negative results.
