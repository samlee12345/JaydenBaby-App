# Preview validation

Validated on 2026-10-13 using gstack browse against the local Vite server.

- Production build passed.
- Browser smoke checks passed in 1180 × 820 landscape and 820 × 1180 portrait: full 102-product catalogue, brand search, combined product search, product details, comparison selection limit, three-column comparison, removal, vehicle brand/model/year flow, unconfirmed result and help dialog.
- Rotation kept the result screen and selections. Reload restored the result from session storage.
- Age group filter returned 15 infant carriers. No-result search displayed a recovery action. Clear filters restored all 102 products.
- No horizontal page overflow at 390 × 844, 820 × 1180 or 1180 × 820. Comparison tables can scroll horizontally on narrow screens.
- Zain and Nunito loaded successfully. Fonts are bundled with the site.
- Browser console showed no application errors.
- Visually inspected home, browsing and result layouts in tablet orientations.

The browser smoke script is tests/browser-smoke.js and can be run through the gstack browse eval command against an open preview. It changes local preview selections only.

Not yet verified on a physical iPad. The idle reset is implemented at three minutes but was not timed in the browser test. Product specifications, photographs, regional variants, and ISOFIX position mappings still need content approval before customer deployment.
