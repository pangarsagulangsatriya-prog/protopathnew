# P2 Layer and Zoom Rules

The `StageNotationCanvas` uses a semantic layer system orchestrated by the `activeStep` prop passed down from the `PerformanceCanvas` rail navigation, as well as a `mode` preset.

## Layers

1. **DATA LAYER**: The raw source condition (Mapillary data).
2. **SITUATION LAYER**: Renders the spatial container: `StageAxis`, `StageObject`, `CheckpointMarker`, `PressureField`, and `ForceVector`.
3. **BODY LAYER**: Renders the `BodyFigure` and abstracts out the kinetic loci into an independent side panel.
4. **OUTPUT LAYER**: Renders the ultimate spatial lock and residue states in the lower quadrant.

## Contextual Fading
The `<g>` containers for these layers utilize a strict opacity toggle based on the `activeStep` state. If a layer does not match the active step, it dims to `0.3` opacity (with a CSS transition duration of `0.3s`), keeping the board whole but visually emphasizing the correct structural logic.

## Semantic Zoom Modes
Currently, `StageNotationCanvas` defaults to `mode="full-board"` within the Explore Page, acting as a complete architectural presentation sheet. 
Future expansions for mobile or specialized gallery viewports will use the `mode` prop to programmatically strip away text labels, hide side-panels, and collapse to a pure geometry `STAGE` or `ACTION` mode.
