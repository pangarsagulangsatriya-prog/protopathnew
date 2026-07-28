# HYBRID VISUAL REFERENCE AUDIT

## 1. What works in the current UI
- The cleaner layout structure (Context Bar, Step Rail, Main Canvas, Inspector, Sequence Strip) introduced in P1 effectively organizes the complex data flow without overwhelming the user.
- The use of procedural SVG scales well and allows interactive highlighting (opacity changes) based on the active semantic step.
- Separation of concerns between Data, Situation, Body, and Output is clear.
- Typography and data representation in the Context Inspector are functional and legible.

## 2. What visual quality was lost
- **Anatomical Clarity**: The current procedural body is a highly abstracted primitive (e.g., simple geometric frame/stick figure) that fails to communicate complex physical torque, grip, weight distribution, and tremor.
- **Architectural Density**: The ChatGPT reference boards have a convincing, high-fidelity architectural quality (detailed stage grid, crisp vector intersections, explicit dimensions, robust red pressure fields) that the current web canvas lacks due to its minimalism.
- **Graphic Confidence**: The original boards feel like authoritative documents. The current SVG feels sparse, leaving too much empty canvas and compressing critical spatial information.
- **Output & Sequence Presentation**: The current sequence is hidden or disconnected, and the output is just a simple text block instead of a structured visual panel.

## 3. What must be retained from the ChatGPT reference boards
- **Strong black structural linework** and **clear orange-red pressure/locus notation**.
- **Anatomically readable bodies** showing specific posture, grip, and tension paths.
- **Precise stage measurements**, grids, axis, checkpoints, and object labels.
- **Callout leaders** and specific conflict annotations (e.g., "AUTHORITY VECTOR", "CONFLICT POINT").
- The **Spatial Output Panel** and the **Sequence Strip** (showing the chronological progression of the interaction).
- **Clear visual hierarchy** between the primary event (the conflict) and supporting contextual data.

## 4. What should remain interactive
- The active semantic step (Data, Situation, Body, Output) dictating emphasis/opacity on the canvas.
- Semantic zoom or layout modes (Action, Stage, Body, Full Board) to allow focused reading vs. architectural overview.
- The step rail and context inspector data binding to the canonical `NotationPair`.
- The sequence strip frames navigating the timeline or steps.

## 5. What should become curated image assets
- **Anatomically rich performer bodies** (Front/Three-Quarter, Side). These are too complex for SVG generation while maintaining high visual fidelity.
- **Full Architectural Boards** (Level C). The original ChatGPT boards should be registered as curated full-image assets for maximum resolution presentation, projection, or printing.
- **Complex object thumbnails** (e.g., the Mapillary street sign snapshot).

## 6. What should stay SVG
- **Geometric Stage Primitives**: Stage boundary, grid, scale bar, axis, measurement lines.
- **Data-Driven Elements**: Node markers, checkpoint locations, linear/solid objects, force vectors, pressure fields, conflict markers.
- **Body Anchors & Overlays**: The orange tension loops, tremor arcs, locus highlights, and force paths layered on top of the curated body images.
- **Dynamic Text**: Callout leaders, coordinate labels, object IDs.

## 7. Conflicts between the current source corpus and the Glitch board
- The **Glitch board** (ST.C1.3.2) indicates a "WRIST + SHOULDER TREMOR LOOP". However, the canonical dataset might not perfectly align with these exact descriptive strings or might classify the state differently (e.g., different anatomical loci or output labels).
- Therefore, the Glitch board must be assigned the review status `"content-mismatch-review-required"` in the asset registry, rather than being treated as the canonical truth, while the Freeze board (ST.C1.3.1) appears `"compatible-pending-review"`.
