# P0: CHANGELOG

## Bug Fixes & Refactoring (Explore Route)

- **Timeline Scope Resolved**: The `SequenceTimeline` now properly derives frames from `activePair.sequenceFrameIds` instead of rendering every sequence frame in the entire database. Changing pairs correctly resets the timeline.
- **Multi-Entity Highlighting**: The entity selection state in `ExplorePage` was expanded from `activeEntityId?: string` to `activeEntityIds: string[]` (for automated timelines) and `selectedEntityId?: string` (for manual user clicks). `TransformationSpine`, `SourcePanel`, and `SequenceTimeline` now properly reflect simultaneous multi-entity states.
- **Real Selector Hierarchy**: The static `SCORE 01` and `CHECKPOINT C1.3` placeholders were replaced with fully functioning controlled `<select>` elements that dynamically scan `db.notationPairs` to generate available options.
- **Route Safety & Inspectors**: The dead `/raw` and `/lineage` routes were removed from the `Navigation` archive menu. Instead, they act as URL query modifiers (`?inspect=raw` and `?inspect=lineage`) inside the Explore route. This ensures browser back/forward history works natively and avoids 404 dead ends.
- **Mobile Scroll Traps Removed**: Replaced restrictive `h-[calc(100vh-50px)] overflow-hidden` layouts with standard `min-h-screen overflow-visible` scrolling for mobile devices. The multi-column layout was adjusted to break into two coordinated rows for tablets (`md`) to avoid squishing panels.
- **Typography Inheritance**: Removed `font-mono` from the `App.tsx` global wrapper and replaced it with `font-sans` (`Inter`). `font-mono` (`JetBrains Mono`) is now strictly constrained to code blocks, technical readouts, metadata labels, and coordinates.
- **Diagram Misrepresentation**: Expanded the `DiagramAsset` status types in `types.ts`. The Glitch Board (`st-c1-3-2`) is now explicitly marked as `content-mismatch-review-required` instead of `'available'`. The `StagePanel` intercepts this status and prominently displays a warning banner.
- **False Claims Removed**: "100% Active" and unsupported quantitative percentages in the abstract force relationships have been replaced with qualitative designators ("ACTIVE", "PRESENT", etc.).
- **Stage Panel Defaults**: The `StagePanel` now opens the `PLAN` tab (Stage Plan) by default instead of the denser `BOARD` (Architectural Board).
- **Streamlined Source Panel**: Non-essential large banners (like the permanent "Live Media Unavailable" block) were removed. Extensive text blocks (such as the verbatim data provocations) are now fully delegated to the Raw JSON Inspector Drawer.
