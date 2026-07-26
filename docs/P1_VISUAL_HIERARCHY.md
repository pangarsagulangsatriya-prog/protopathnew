# P1 Visual Hierarchy

## Core Philosophy
The interface operates as a stage notation system, not a SaaS dashboard. The **Performance Canvas** is the undeniable center of attention.

## Typography Scale
1. **Display / Primary State**: 24–36 px (`text-2xl`, `text-3xl`, `text-4xl`) - Reserved for hero text and major phase titles.
2. **Section Heading**: 14–18 px (`text-sm`, `text-lg`) - Used for step rail labels and context inspector blocks.
3. **Body Text**: 14–16 px (`text-sm`, `text-base` `font-sans`) - Used exclusively for reading (descriptions, conditions, spatial outcomes).
4. **Technical Code**: 10–13 px mono (`text-xs` `font-mono`) - Reserved for strict data (Coordinates, IDs, hashes, vectors).
5. **Micro Label**: 9–11 px (`text-[9px]`, `text-[10px]`) - Used for UI controls (NEXT/PREV) and extreme metadata tags.

## Surface and Borders
- Stripped heavy black borders from almost all internal UI elements.
- The layout relies heavily on negative space (margin/padding) to distinguish sections.
- Borders are exclusively used for boundaries between major semantic blocks (e.g. Left Rail | Canvas | Right Inspector).
- Active states use a single sharp `#E6461A` (orange/red) accent marker or border-left indicator.

## Motion & Emphasis
- Continuous pulsing (`animate-ping`) has been removed from the SVG Canvas.
- Emphasis is now managed purely via opacity transitions (`transition-opacity duration-300`). 
- Changing steps in the Rail elegantly dims inactive zones on the Architectural Board while focusing on the active zone.
