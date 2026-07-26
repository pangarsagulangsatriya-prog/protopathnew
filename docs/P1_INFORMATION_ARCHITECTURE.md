# P1 Information Architecture

## Overview
Phase 1 of the PROTO PATH platform focused on simplifying the Explore route from a technical console to a curated performative event. Information that was previously presented all at once has been broken down into a focused, sequential flow.

## The Transformation Step Rail
The core organizational mechanism is the four-part Transformation Step Rail.
1. **01 DATA**: Mapillary source features and raw provocations.
2. **02 SITUATION**: System-derived spatial conditions, vectors, and token structures.
3. **03 BODY**: Performer impulses, anatomical loci, and kinetic reactions.
4. **04 OUTPUT**: Final spatial outcomes, residues, and locked axes.

## Context Inspector 
Contextual metadata has been decoupled from the primary canvas. The Context Inspector now only renders information pertinent to the currently selected step in the rail. 

## Timeline Integration
The timeline is strictly pair-scoped. It defaults to a collapsed state (showing only the current frame and play controls). When expanded, it renders a horizontal step list to allow manual scrubbing without cluttering the bottom region.

## Source & Lineage Drawers
The massive datasets surrounding the source JSON are deferred entirely to the `RawJsonDrawer`. A scaffolding for a `LineageDrawer` has also been laid for deep tree inspections in future phases.
