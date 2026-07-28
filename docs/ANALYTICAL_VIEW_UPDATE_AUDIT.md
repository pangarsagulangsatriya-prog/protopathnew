# Analytical View Update Audit

## 1. Current State Evaluation
The application currently renders a `PerformanceCanvas` containing a `StageNotationCanvas`. The view is primarily a single large SVG canvas with some basic toggle buttons overlaid (STAGE, ACTION, BODY, BOARD).
- **Stage Plan**: The stage is present but currently cramped into a fixed `viewBox`.
- **Body Study**: The body is rendered as part of the canvas, but it lacks anatomical fidelity (stick figures/fallback skeletons) and detailed anchors.
- **Sequence Strip**: The Sequence is a small collapsible component (`CollapsibleTimeline`), but there's no dedicated large "Sequence View".
- **Force Relation**: The current UI has a very abstract representation of forces layered over the main stage, but lacks a dedicated analytical view for forces with a state matrix.

## 2. Missing Visual Quality
Based on the attached ChatGPT references:
- **Tabs**: The reference screenshots show clear, dedicated tabs (`STAGE PLAN`, `BODY STUDY`, `FORCE RELATION`) inside the main layout, not floating icon buttons.
- **Hierarchy**: The current architecture treats modes as an internal state of `PerformanceCanvas` rather than high-level views synchronized with the URL.
- **Sequence View**: Missing a dedicated analytical view describing the sequence step-by-step.
- **Forces View**: Missing the "Force Relation Matrix" which explicitly breaks down Vector Interaction (Forward Vector: 100% Active -> change this to qualitative per prompt) and Resultant State.
- **Full Board**: The Full Board is currently just a mode in the canvas overlay, rather than a distinctly separate high-resolution modal/viewer.

## 3. Required Tab Structure
- `ACTION`: Default view, hybrid rendering, fast read (5 seconds).
- `STAGE`: Data-driven SVG, restored architectural richness (grid, measurements).
- `BODY`: Image + SVG loci, forces, grips, weights.
- `SEQUENCE`: Dedicated tab for timeline breakdown, alongside the mini sequence rail.
- `FORCES`: State matrix, body junction, no unsupported percentages.
- `FULL BOARD ↗`: Separate high-res viewer action.

## 4. State & URL Synchronization
We need to manage `activeView` alongside `activePairId` and `activeStep`.
The `ExplorePage` needs to lift `viewMode` state up to the URL or at least the top level, allowing the tabs to control it, rather than `PerformanceCanvas` managing its own floating state.

## 5. Next Steps for Implementation
1. **State & Tabs**: Lift view state to `ExplorePage`. Add the tab bar component above the canvas. Update routing to support `?view=xxx`.
2. **Action View**: Modify `StageNotationCanvas` to support an ultra-focused Action mode.
3. **Stage View**: Refine `StageNotationCanvas` grid, dimensions, and layout scaling.
4. **Body View**: Expand `HybridBodyFigure` and create a dedicated `BodyViewCanvas` if necessary, or refine the `body` mode in `StageNotationCanvas`.
5. **Sequence View**: Create `SequenceViewCanvas.tsx`.
6. **Forces View**: Create `ForcesViewCanvas.tsx` with the force model and matrix.
7. **Full Board**: Move `LevelCViewer` into a separate fullscreen modal or dedicated route, launched via the `FULL BOARD ↗` tab button.
