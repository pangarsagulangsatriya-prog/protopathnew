# P1 Responsive Specification

## Desktop (≥ 1280px)
- **Top Bar**: Sticky, single row, compact.
- **Main Layout**: CSS Grid (12 Columns).
- **Distribution**:
  - `xl:col-span-2` (16.6%): Transformation Step Rail
  - `xl:col-span-7` (58.3%): Main Performance Canvas
  - `xl:col-span-3` (25%): Context Inspector
- **Timeline**: Pinned to the bottom.

## Tablet (768px - 1279px)
- **Top Bar**: Sticky, items may wrap.
- **Main Layout**:
  - The Context Inspector vanishes from the default grid.
  - The Step Rail remains visible but expands slightly.
  - The Canvas takes up the remainder of the view height.
- **Mobile Drawer Hook**: When a step in the rail is selected, the Context Inspector appears from the bottom via an animated slide-up Drawer to conserve canvas real estate.

## Mobile (< 768px)
- **Top Bar**: Extremely compact, stacked.
- **Main Layout**: Pure vertical flow. The viewport lock (`h-[calc(100vh-50px)]`) is disabled.
- **Distribution**:
  - Context Bar
  - Step Rail (rendered horizontally, overflow-x auto)
  - Performance Canvas
  - Mobile Inspector Drawer
  - Timeline
- **Timeline**: Rendered as a horizontal step list to prevent vertical clutter.
