# P2 Data-to-Visual Mapping

The heart of the P2 Engine is the `buildStageNotationModel()` selector inside `src/notation/model/builder.ts`. This function takes the raw corpus entities associated with a specific Notation Pair and maps them to universal graphic instructions.

## The Model Extraction
When `buildStageNotationModel` is fed a Pair ID, it resolves:
1. `SourceFeature` -> Maps directly to the Data Overlay banner.
2. `Situation` -> Parses `objectTokens` (e.g. `REGULATORY_AUTHORITY`) into geometric categories (`ObjectCategory = 'REGULATORY_OBJECT'`). Evaluates `activeVectors` to declare dominant force vectors.
3. `BodyImpulse` -> Maps the abstract `impulse` token (`FREEZE` vs `GLITCH`) to the overarching state of the Body and Axis. Extracts `anatomicalLoci` arrays to command the skeleton renderer which joints to illuminate.
4. `SpatialOutput` -> Injects final lock statuses and residue into the terminal layer.
5. `DiagramAsset` -> Evaluates `status`. If `content-mismatch-review-required` is active, it passes that state to the Model so an error boundary or warning banner can be triggered outside the SVG space.

## Strict Data Fallbacks
If a specific `NotationPair` lacks coordinate mapping (`distanceMeters` is null), the engine will not crash. Instead, `CheckpointMarker` defaults to an `unresolved` state—a dashed ring floating independently of the axis, ensuring full systemic compatibility with incomplete future datasets. Unknown object tokens render as a dashed square with an `UNDECLARED` label.
