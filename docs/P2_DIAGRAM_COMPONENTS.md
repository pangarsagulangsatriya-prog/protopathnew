# P2 Diagram Components

The notation engine is composed of purely functional, data-driven SVGR components residing in `src/notation/primitives/`.

## 1. `StageAxis.tsx`
Renders the primary stage bounding line, nodes, and spatial measurement ticks based on `StageNode` coordinates mapped to SVG space (`1 meter = 40 pixels`).

## 2. `CheckpointMarker.tsx`
Plots the intersection coordinate where the urban event occurred. Implements error boundaries for missing coordinates, switching to a floating dashed representation.

## 3. `ForceVector.tsx`
Takes a start coordinate, target direction, and a `ForceStrength` classification to draw precise SVG path arrows. Highly abstracted to accept new vector paths without hard-coding pairs.

## 4. `StageObject.tsx`
A unified factory drawing geometries for environment objects based on their `ObjectCategory`. Currently supports `LINEAR_OBJECT`, `SOLID_MASS_OBJECT`, and `REGULATORY_OBJECT`, gracefully defaulting to `UNDECLARED_OBJECT` for unknown tokens.

## 5. `PressureField.tsx`
Uses SVG `<pattern>` fills to generate translucent hatched spatial zones that indicate ambient, non-vector pressure (like legal boundaries or gaze).

## 6. `BodyFigure.tsx` & `BodyLocus.tsx`
Constructs a procedural performer skeleton that accepts an array of active anatomical loci strings and maps them directly to specific joint coordinates in the diagram space.
