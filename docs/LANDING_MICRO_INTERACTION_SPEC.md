# Landing Page Micro-Interaction Specification

## General Motion Principles
- **Duration**: `160ms` (`duration-[160ms]`) for all state transitions (hovers, focus, clicks).
- **Easing**: `ease-out` for most hover expansions; React Motion uses architectural bezier `[0.22, 1, 0.36, 1]`.
- **Accessibility**: All animations fallback to instantaneous changes or simplified variants when `prefers-reduced-motion: reduce` is enabled.

## Specific Components

### 1. Navigation Links
- **Default**: Text color is muted gray (`#888888`), underline is hidden (width: 0).
- **Hover**: 
  - Text color shifts to paper white (`#F7F7F3`).
  - An orange-red line (`#E6461A`) expands from left to right at the bottom edge.
- **Active State**: The orange-red line is statically fully expanded. No animated background sweeps are used.

### 2. Primary Buttons / CTAs
- **Interaction**:
  - `hover:-translate-y-[1px]` to create a subtle lift effect.
  - `active:translate-y-[1px]` to simulate a rigid physical press without bounce.
- **Icon Shift**: Embedded icons (e.g., Arrows) shift 3-5px on hover. E.g., `translate-x-1` or `translate-x-1 -translate-y-1`.
- **Duration**: `160ms`.

### 3. Hero Transformation Sequence
- **Load Animation**: The central connecting line draws sequentially across the 4 stages using a `1.2s` duration.
- **Hover on Stage Node**:
  - The hovered node scales up slightly `scale-[1.02]`.
  - The node's specific UI elements (dots, borders) shift to the accent color (`#E6461A`).
  - Unrelated nodes drop in opacity to `40%` to emphasize the hovered item.
  - A contextual tooltip appears instantly.
- **Static vs Animated**: Once loaded, no elements loop endlessly. The interaction relies entirely on user input (hover/click).

### 4. Completed Example Cards
- **Hover**:
  - The entire card translates up by `2px` (`hover:-translate-y-[2px]`).
  - A subtle `shadow-md` is added.
  - The inner abstract graphic scales slightly (`scale-[1.02]`) within its container.
  - The "OPEN EXAMPLE" action arrow shifts right by `3px`.

### 5. Project Status Pulse
- **Visual**: The "IN PROGRESS" status indicator uses a small orange-red circle.
- **Animation**: A trailing `animate-ping` (opacity 75%) pulses behind the main dot to indicate active status. Disabled on reduced motion.

### 6. Copy URL Utility
- **Interaction**: Clicking the "COPY PROJECT URL" row.
- **Feedback**: Text changes to "PROJECT LINK COPIED" and the icon changes to a checkmark.
- **Duration**: The state persists for `2000ms` before reverting automatically.
- **Accessibility**: Wrapped in `aria-live="polite"` for screen reader feedback.
