# P0: TEST REPORT

## 1. Automated Checks

- **TypeScript Compiler (`tsc`)**: Passed. All type definitions match the structural refactor (e.g., `DiagramAsset`'s strict string unions, multi-entity array typings).
- **ESLint (`eslint`)**: Passed. No unresolved imports or syntax errors.
- **Vite Build (`npm run build`)**: Passed. The bundle generated successfully with code-splitting applied to heavy pages (`ExplorePage`, `ScorePage`, `DatasetPage`, `MethodPage`, `ExhibitionPage`). Total build time ~2.0s.

*(Note: Native `vitest` unit testing has not yet been set up in this repository, so the validation relies on strict typing and the successful production build).*

## 2. Manual Acceptance Testing

| Feature | Status | Notes |
| :--- | :--- | :--- |
| **Dead Route Removal** | ✅ PASSED | The `/raw` and `/lineage` routes no longer exist in the menu. Clicking them now updates the URL query (`?inspect=raw`) and triggers the inspector drawers on the Explore page without unmounting the route. |
| **Timeline Pair Isolation** | ✅ PASSED | Changing the active pair via the selector completely resets the timeline. The timeline frames map strictly to `activePair.sequenceFrameIds`. No frames bleed over from other pairs. |
| **Multi-Entity Highlighting** | ✅ PASSED | `SequenceTimeline` frames can pass an array of `activeEntityIds`. E.g., `['situation-c1-3-1', 'dp-c1-3-1']`. Both the Data Provocation step and the Situation step correctly highlight simultaneously. Clicking a single step manually toggles the intense "selected" state. |
| **Hierarchical Selectors** | ✅ PASSED | The Score (`C1`) and Checkpoint (`12.15m`) text blocks were replaced with working `<select>` dropdowns. They dynamically populate based on the active dataset's notation pairs. |
| **Mobile Scroll Traps** | ✅ PASSED | On mobile viewports (<768px), the UI stacks cleanly vertically. The `h-[calc(...)]` overflow prison was removed. Users can simply scroll down the page naturally. |
| **Typography Integrity** | ✅ PASSED | The overarching `font-mono` rule in `App.tsx` was replaced with `font-sans` (`Inter`). Explanatory text block readability is vastly improved. Code strings, structural tags, and coordinates remain heavily monospace. |
| **Diagram Mismatch Banner** | ✅ PASSED | The "Glitch Response" Pair (`C1.3.2`) correctly tags its diagram asset as `content-mismatch-review-required` and the Stage Panel surfaces an explicit, styled warning when viewing that board. |

## 3. Pending / Deferred (P1)

- The `/explore` layout remains vertically dense. Extensive layout restructuring and fluid CSS Grid implementations will be addressed in P1.
- Lineage Inspector (`?inspect=lineage`) currently only yields a fallback modal. A robust lineage visualizer needs to be built.
- `vitest` configuration and structural unit tests covering `NotationRepository` should be established.
