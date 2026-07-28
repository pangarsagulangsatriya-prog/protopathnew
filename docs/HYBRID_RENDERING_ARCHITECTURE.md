# Hybrid Rendering Architecture

## Overview
PROTO PATH implements a 3-level rendering policy to accurately visualize stage notation and body conditions, balancing data-driven precision with graphic richness.

## The 3 Levels

### 1. Level A: Simple SVG
Used for basic data inspection when anatomical complexity is low. Renders stage primitives (axes, pressure fields) and simple stick-figure bodies.

### 2. Level B: Hybrid SVG + Image Layering
Used when complex body impulses (`GLITCH`, `FREEZE`, `COMPRESSION`) are active.
- **Layer 0 (Background)**: SVG grid and architectural scale.
- **Layer 1 (Body Asset)**: A transparent PNG/WebP of an anatomical body pose (e.g., `freeze-front.webp`). If the asset is missing, it falls back to a **rich geometric SVG skeleton** that is more detailed than Level A.
- **Layer 2 (Data Anchors)**: Procedural SVG loci loops, tremor arcs, and tension lines dynamically anchored to the image (e.g., mapping an orange loop specifically to the left wrist).

### 3. Level C: Full Architectural Board Image
Used for fullscreen presentation, exhibition, or archival printing. These are highly detailed static boards curated externally (e.g., `st-c1-3-1__rt-c1-3-1.png`). 
- When viewed, they may trigger a **content-mismatch-review-required** warning if the canonical dataset differs from the text baked into the image.

## Component Structure
- `StageNotationCanvas`: The master container, managing `mode` (`action`, `stage`, `body`, `full-board`) and spatial organization.
- `HybridBodyFigure`: The component responsible for Layer 1 and Layer 2, rendering the body asset or fallback skeleton and attaching anchors.
- `LevelCViewer`: A pan/zoom container for Level C static boards.
- `renderPolicy.ts`: The central registry that decides which mode is `preferred` based on the active `bodyImpulse` tokens.
