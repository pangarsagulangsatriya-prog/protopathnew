# P2 Notation Grammar

This document outlines the strict geometric grammar used to translate urban regulatory conditions into stage directions within the `StageNotationCanvas`.

## Primitive Grammars

### Stage Nodes & Axes
- **Solid Rectangle (Black)**: Canonical structural stage node (Start / End position).
- **Thick Solid Line**: Active traversal axis.
- **Dashed Line**: Residual or broken axis.
- **Thick Colored Line (Orange)**: Locked axis (movement arrested).

### Checkpoints
- **Solid Circle (White fill, Black stroke)**: Canonical active checkpoint on the primary axis.
- **Dashed Circle (Orange stroke, no fill)**: Unresolved checkpoint (missing explicit spatial coordinates).

### Forces & Vectors
- **Thick Black Arrow**: Active driver vector (e.g., Performer Forward Pull).
- **Thick Orange Arrow**: Dominant conflicting vector (e.g., Regulatory Prohibition).
- **Blocked Arrow**: Vector terminating in an orthogonal blocking stroke (signifying arrested force).

### Objects
- **White Circle with Orange Stroke**: Regulatory Object (e.g., prohibition sign).
- **Solid Black Square**: Solid Mass Object (e.g., physical barrier).
- **Dashed Square (Orange)**: Undeclared or unparseable object token.
