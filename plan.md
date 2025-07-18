# Build Blockers and Lint Issues Plan

## Problem
The Next.js build is failing due to ESLint errors: several service pages use `<a>` to navigate to `/contact/` instead of `<Link />` from `next/link`. This violates Next.js navigation best practices and must be fixed for the build to succeed.

## Files and Lines to Fix
- `pages/services/artificial-turf-installation.tsx` (lines 18, 348)
- `pages/services/drip-irrigation-systems.tsx` (lines 18, 396)
- `pages/services/grass-seeding-overseeding.tsx` (lines 18, 337)
- `pages/services/lawn-edging.tsx` (lines 18, 344)
- `pages/services/native-plant-landscaping.tsx` (lines 18, 466)
- `pages/services/palm-tree-trimming.tsx` (lines 18, 348)
- `pages/services/retaining-wall-construction.tsx` (lines 18, 388)
- `pages/services/shrub-pruning.tsx` (lines 18, 341)
- `pages/services/stonework-rock-features.tsx` (lines 18, 438)
- `pages/services/tree-planting.tsx` (lines 18, 357)
- `pages/services/walkways-pathways.tsx` (lines 18, 389)
- `pages/services/weed-control.tsx` (lines 18, 257)
- `pages/services/xeriscaping.tsx` (lines 18, 420)

## Solution
For each file and line listed above:
- Replace `<a href="/contact/">...</a>` with `<Link href="/contact/">...</Link>` from `next/link`.
- Ensure the `Link` import is present at the top of each file.
- Remove any unused `<a>` elements for `/contact/`.
- Confirm that the new `Link` behaves identically for users.

## Next Steps
1. Fix all instances in the files above.
2. Run `npm run lint` and `npm run build` to verify all errors are resolved.
3. Confirm navigation works as expected in the browser.

---

*This plan will be updated as issues are discovered or resolved.*
