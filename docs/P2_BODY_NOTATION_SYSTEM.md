# P2 Body Notation System

Instead of relying on monolithic SVG human contours, the P2 Engine utilizes a structural geometric grammar mapped to the standard array of `AnatomicalLocus` strings defined in the corpus.

## Anchor Mapping
The skeletal system assigns strict SVG spatial coordinates to core joints (`head`, `cervical-spine`, `spine`, `pelvis`, `shoulder`, `wrist`).

## Grammar Identifiers
When a locus is extracted from the `BodyImpulse` entity, it is assigned a status in the `BodyFigure.tsx` primitive, which dictates its geometric presentation via `BodyLocus.tsx`:

| State | Graphic | Meaning |
|---|---|---|
| **Locked** | Solid Orange Circle + Semitransparent Orange Halo | Extreme tension, arrested movement. (e.g., Freeze response) |
| **Tremor** | Expanding dashed geometric rings | Kinetic loop, micro-displacement, unresolved torque. (e.g., Glitch response) |
| **Latent** | Dim, outlined gray circle | Joint is structurally present but not currently in tension. |

## Symmetric Splitting
For loci that exist as pairs in reality (`shoulder`, `wrist`), the diagram engine automatically mirrors the locus grammar across both sides of the figure, ensuring the visual remains balanced without needing verbose data definitions for `left-shoulder` and `right-shoulder` unless unilaterally specified in the raw score.
