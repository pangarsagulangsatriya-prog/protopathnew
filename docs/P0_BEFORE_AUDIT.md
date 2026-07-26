# P0: EXPLORE ROUTE BEFORE AUDIT

## 1. Current Route Structure
- `/explore` is the primary route for the interface.
- It receives a `pair` query parameter to determine the active `activePairId`.
- The archive menu in `Navigation.tsx` lists `/lineage` and `/raw` as dedicated routes.
- However, `App.tsx` has no defined components for `/lineage` and `/raw`, causing them to fall back to a 404 "ARCHIVE SECTION NOT FOUND" screen.
- A custom state `viewMode` (`explore`, `raw`, `lineage`) exists inside `App.tsx` but operates mostly disjointedly from the URL and doesn't actually hide the main interface.

## 2. Active Controls vs Dead Controls
- **Active Controls**:
  - `Pair Selector` dropdown works and updates state.
  - `Next/Prev Pair` works and updates URL.
  - `Compare` toggle works.
  - Raw JSON Drawer trigger works.
- **Dead/Decorative Controls**:
  - `SCORE 01 (C1)` and `CHECKPOINT: C1.3 (12.15m)` are completely hard-coded `div` blocks and don't function as selectors.
  - `Archive Nav -> Raw Records` / `Lineage` lead to 404s.
  - `View Mode` selector (Explore, Raw, Lineage) is visible in desktop top bar but mostly changes local state without altering the primary route UI meaningfully beyond passing props.

## 3. Pair-to-Timeline Behavior
- `SequenceTimeline.tsx` receives `db.sequenceFrames`.
- This means it displays *every* sequence frame in the database across all pairs. 
- Changing pairs does not filter the timeline to the pair's specific frames, resulting in conflicting/stale sequence states.

## 4. Active Entity State Shape
- The current state is `const [activeEntityId, setActiveEntityId] = useState<string | undefined>(undefined)`.
- It only supports a single string.
- This creates issues because a single timeline frame often highlights multiple entities simultaneously (e.g. `[source-1, situation-1]`). The current code truncates this to just `ids[0]`.

## 5. Mobile Overflow Behavior
- `ExplorePage.tsx` relies on `h-[calc(100vh-50px)]` and `overflow-hidden`.
- On mobile devices (<768px), this locks all 3 column panels (Source, Spine, Stage) inside nested scroll zones. 
- The user cannot scroll the actual page vertically, leading to a "scroll trap" where they must fight internal container scrolling.

## 6. Diagram Asset Statuses
- Both `BOARD ST.C1.3.1` and `BOARD ST.C1.3.2` are marked simply as "available" without tracking conflict or review statuses.
- Specifically, the glitch board (C1.3.2) visually misrepresents itself as canonical, despite the prompt noting it should be `content-mismatch-review-required`.

## 7. Typography Inheritance
- `App.tsx` has `font-mono` applied directly on the global shell (`className="... font-mono"`).
- `ExplorePage.tsx` reinforces this with `font-mono text-[#111111]`.
- This forces large bodies of explanatory text, headings, and navigational links to render in `JetBrains Mono`, overriding the `Inter` public layer. Some fonts are incredibly tiny (`8px`-`9px`).
