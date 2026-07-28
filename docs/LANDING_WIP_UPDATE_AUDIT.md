# LANDING PAGE WIP UPDATE AUDIT

## 1. Current Landing Page Assessment
- **Structure:** The current landing page (`LandingPage.tsx`) contains multiple sections: Hero, Project Context, Field to Stage, Notation Boards, Physical Project Metrics, Exhibition Preview, Archive Entry, Project Credits, and Footer.
- **Copy:** Currently positioned as a definitive project overview without a strong, upfront "Work In Progress" disclaimer. The hero section lacks immediate clarification of the ongoing nature.
- **Micro-Interactions:** Basic framer-motion fades are used (`variants.fade`). Lacks specific micro-interactions for buttons, cards, and state transitions (e.g., hover effects with specific durations, colors, and line expansions as requested).
- **Navigation:** Header includes paths like `/exhibition` and other archive-related tools which need to be simplified to PROJECT, EXPLORE, METHOD, EXHIBITION, ARCHIVE.

## 2. Global Navigation
- **File:** `Navigation.tsx` handles the main header.
- **Requirement:** Needs to be updated to a simpler public navigation structure. Needs mobile drawer adjustments. The new WIP Announcement Bar needs to sit *above* this global navigation.

## 3. Animation System
- **File:** `src/motion/protoMotion.ts` contains the current animation variants.
- **Requirement:** Need to respect `useReducedMotion`. Must remove looping animations, bouncing, or excessive gradients/glassmorphism if they exist. Needs subtle transitions (140-180ms) for buttons and navigations. Scroll transitions should use opacity 0 → 1, translateY 8px → 0 (240-360ms).

## 4. Assets & Images
- **Requirement:** Do not use stock photographs. The Hero Visual needs to be an interactive 4-stage horizontal transformation (Raw Feature -> Situation -> Body -> Output). Needs to connect to the actual score/explore steps.
- **Metadata:** Open Graph image and canonical URLs need updating in `index.html`.

## 5. Required Action Items
1. Add a dismissible WIP Announcement Bar above the main navigation (stored in localStorage).
2. Redesign the Hero section with a 4-stage interactive horizontal transformation chain.
3. Add a "PROJECT STATUS" qualitative progress panel.
4. Add a "SELECTED COMPLETED EXAMPLES" section displaying current features with statuses.
5. Add a "FOLLOW THE PROJECT" CTA section.
6. Refine micro-interactions (navigation hover, button shifts, transformation chain linking, card hovers, status pulsing, copy URL).
7. Ensure responsive behavior (Desktop, Tablet, Mobile) without overflow.
8. Enforce accessibility (semantic markup, reduced motion, ARIA live regions, focus rings).
9. Update `index.html` metadata (canonical URL, Open Graph, description).
10. Add testing (unit, visual smoke tests) and verify implementation.
