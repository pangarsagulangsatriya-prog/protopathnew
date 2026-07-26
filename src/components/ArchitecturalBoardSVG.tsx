import React from 'react';

interface ArchitecturalBoardSVGProps {
  pairId: string;
  className?: string;
  activeStep?: 'data' | 'situation' | 'body' | 'output';
}

export const ArchitecturalBoardSVG: React.FC<ArchitecturalBoardSVGProps> = ({
  pairId,
  className = '',
  activeStep,
}) => {
  const isGlitch = pairId === 'pair-c1-3-2';
  
  // Calculate opacities based on active step
  const getOpacity = (zone: 'data' | 'situation' | 'body' | 'output') => {
    if (!activeStep) return 1; // If no active step provided, fully visible
    if (activeStep === zone) return 1;
    return 0.3; // Dim inactive zones
  };

  return (
    <svg
      viewBox="0 0 1440 1080"
      className={`w-full h-auto bg-[#F7F7F3] text-[#111111] font-sans select-none ${className}`}
      style={{ border: '1px solid #111111' }}
    >
      <defs>
        {/* Pressure field hatched pattern */}
        <pattern
          id="pressureHatch"
          width="10"
          height="10"
          patternTransform="rotate(45 0 0)"
          patternUnits="userSpaceOnUse"
        >
          <line x1="0" y1="0" x2="0" y2="10" stroke="#E6461A" strokeWidth="1.2" opacity="0.4" />
        </pattern>
        {/* Arrowhead markers */}
        <marker
          id="arrowRed"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#E6461A" />
        </marker>
        <marker
          id="arrowBlack"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#111111" />
        </marker>
      </defs>

      {/* --- OUTER BORDER --- */}
      <rect x="10" y="10" width="1420" height="1060" fill="none" stroke="#111111" strokeWidth="2" />

      {/* --- TITLE HEADER --- */}
      <g transform="translate(20, 20)">
        <rect x="0" y="0" width="1400" height="60" fill="#F7F7F3" stroke="#111111" strokeWidth="1.5" />
        <text
          x="700"
          y="28"
          fontFamily="monospace"
          fontSize="20"
          fontWeight="900"
          letterSpacing="4"
          textAnchor="middle"
          fill="#111111"
        >
          PROTO PATH — ARCHITECTURAL STAGE NOTATION
        </text>
        <text
          x="700"
          y="48"
          fontFamily="monospace"
          fontSize="12"
          fontWeight="700"
          letterSpacing="2"
          textAnchor="middle"
          fill="#505050"
        >
          {isGlitch
            ? 'ST.C1.3.2 — CONFLICTING VECTORS / RT.C1.3.2 — GLITCH RESPONSE'
            : 'ST.C1.3.1 — AUTHORITY INTERRUPTION / RT.C1.3.1 — FREEZE RESPONSE'}
        </text>
      </g>

      {/* --- MAIN THREE ZONES --- */}

      {/* ZONE 1: DATA TO SPATIAL CONDITION */}
      <g transform="translate(20, 90)" style={{ opacity: getOpacity('data'), transition: 'opacity 0.3s' }}>
        <rect x="0" y="0" width="280" height="680" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
        <rect x="0" y="0" width="280" height="26" fill="#EFEFEB" stroke="#111111" strokeWidth="1" />
        <text x="10" y="17" fontFamily="monospace" fontSize="9" fontWeight="800" fill="#111111">
          ZONE 1 — DATA TO {isGlitch ? 'VECTOR CONFLICT' : 'SPATIAL CONDITION'}
        </text>

        {/* Data Provocation */}
        <g transform="translate(15, 40)">
          <text x="0" y="0" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#505050">
            MAPILLARY REGULATORY DATA SOURCE
          </text>
          <g transform="translate(30, 15)">
            <circle cx="40" cy="40" r="35" fill="none" stroke="#E6461A" strokeWidth="8" />
            <line x1="18" y1="62" x2="62" y2="18" stroke="#E6461A" strokeWidth="8" />
            <path d="M 30 50 L 30 30 Q 30 25 35 25 L 50 25" fill="none" stroke="#111111" strokeWidth="6" />
            <path d="M 45 18 L 58 25 L 45 32 Z" fill="#111111" />
            <text x="90" y="35" fontFamily="monospace" fontSize="11" fontWeight="800" fill="#111111">
              REGULATORY
            </text>
            <text x="90" y="48" fontFamily="monospace" fontSize="10" fontWeight="700" fill="#E6461A">
              NO RIGHT TURN
            </text>
          </g>

          {/* Map Observation thumbnail */}
          <g transform="translate(10, 115)">
            <rect x="0" y="0" width="230" height="80" fill="#F7F7F3" stroke="#111111" strokeWidth="1" strokeDasharray="3,3" />
            <path d="M 10 20 L 220 70 M 30 70 L 200 10 M 120 10 L 120 70" stroke="#D9D9D3" strokeWidth="2" />
            <circle cx="120" cy="40" r="6" fill="#E6461A" />
            <text x="135" y="44" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill="#111111">
              MAPILLARY POINT (±12.15m)
            </text>
          </g>

          {/* Callout string */}
          <g transform="translate(0, 215)">
            <rect x="0" y="0" width="250" height="30" fill="#FFFFFF" stroke="#E6461A" strokeWidth="1.5" />
            <text x="125" y="19" fontFamily="monospace" fontSize="11" fontWeight="800" fill="#E6461A" textAnchor="middle">
              regulatory--no-right-turn--g1
            </text>
          </g>

          {/* Stage translation symbol */}
          <g transform="translate(0, 260)">
            <line x1="0" y1="0" x2="250" y2="0" stroke="#D9D9D3" strokeWidth="1" />
            <text x="0" y="20" fontFamily="monospace" fontSize="10" fontWeight="800" fill="#111111">
              STAGE TRANSLATION (SYMBOL)
            </text>

            <g transform="translate(15, 45)">
              <rect x="0" y="15" width="10" height="10" fill="#111111" />
              <line x1="10" y1="20" x2="190" y2="20" stroke="#111111" strokeWidth="2" />
              <circle cx="100" cy="20" r="5" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
              <circle cx="160" cy="20" r="7" fill="none" stroke="#E6461A" strokeWidth="2" />
              <text x="160" y="23" fontFamily="monospace" fontSize="9" fontWeight="900" fill="#E6461A" textAnchor="middle">R</text>
              <line x1="200" y1="20" x2="167" y2="20" stroke="#E6461A" strokeWidth="2" markerEnd="url(#arrowRed)" />
              <rect x="190" y="15" width="10" height="10" fill="#111111" />
            </g>

            <text x="125" y="95" fontFamily="sans-serif" fontSize="9" fill="#505050" textAnchor="middle">
              {isGlitch ? 'TWO VECTORS COLLIDE AT PERFORMER BODY' : 'PROHIBITION VECTOR ENTERS PRIMARY AXIS FROM RIGHT'}
            </text>
          </g>

          {/* Narrative box */}
          <g transform="translate(0, 380)">
            <rect x="0" y="0" width="250" height="230" fill="#F7F7F3" stroke="#111111" strokeWidth="1" />
            <text x="10" y="20" fontFamily="monospace" fontSize="10" fontWeight="800" fill="#111111">
              TRANSLATION READOUT
            </text>
            <text x="10" y="45" fontFamily="sans-serif" fontSize="10" fill="#111111">
              Category: <tspan fontWeight="800" fill="#E6461A">{isGlitch ? 'PARADOX' : 'AUTHORITY'}</tspan>
            </text>
            <text x="10" y="65" fontFamily="sans-serif" fontSize="10" fill="#111111">
              Impulse: <tspan fontWeight="800" fill="#E6461A">{isGlitch ? 'GLITCH' : 'FREEZE'}</tspan>
            </text>
            <text x="10" y="90" fontFamily="sans-serif" fontSize="9" fill="#505050">
              {isGlitch
                ? 'Simultaneous forward pull and right-turn prohibition demand contradictory physical actions at checkpoint 12.15m.'
                : 'Right-turn prohibition imposes rigid authority pressure onto the primary stage axis, halting forward progression.'}
            </text>
            <text x="10" y="150" fontFamily="monospace" fontSize="9" fontWeight="700" fill="#111111">
              Loci: {isGlitch ? 'WRIST + SHOULDER' : 'SPINE + PELVIS'}
            </text>
            <text x="10" y="170" fontFamily="monospace" fontSize="9" fontWeight="700" fill="#E6461A">
              Residue: {isGlitch ? 'TREMOR LOOP' : 'LOCKED AXIS'}
            </text>
          </g>
        </g>
      </g>

      {/* ZONE 2: STAGE GROUND PLAN */}
      <g transform="translate(310, 90)" style={{ opacity: getOpacity('situation'), transition: 'opacity 0.3s' }}>
        <rect x="0" y="0" width="700" height="680" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
        <rect x="0" y="0" width="700" height="26" fill="#EFEFEB" stroke="#111111" strokeWidth="1" />
        <text x="10" y="17" fontFamily="monospace" fontSize="9" fontWeight="800" fill="#111111">
          ZONE 2 — STAGE GROUND PLAN (SCALE 1:1)
        </text>

        {/* Grid Background */}
        <g transform="translate(20, 50)">
          <rect x="0" y="0" width="660" height="520" fill="#F7F7F3" stroke="#D9D9D3" strokeWidth="1" strokeDasharray="4,4" />

          {/* Grid lines */}
          {Array.from({ length: 13 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 55} y1="0" x2={i * 55} y2="520" stroke="#D9D9D3" strokeWidth="0.8" opacity="0.5" />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 52} x2="660" y2={i * 52} stroke="#D9D9D3" strokeWidth="0.8" opacity="0.5" />
          ))}

          {/* Compass & Scale */}
          <g transform="translate(20, 20)">
            <circle cx="15" cy="15" r="12" fill="none" stroke="#111111" strokeWidth="1" />
            <line x1="15" y1="27" x2="15" y2="3" stroke="#111111" strokeWidth="1.5" />
            <text x="15" y="-2" fontFamily="monospace" fontSize="9" fontWeight="800" textAnchor="middle">N</text>
            <text x="15" y="45" fontFamily="monospace" fontSize="8" fill="#505050" textAnchor="middle">TOP VIEW</text>
          </g>

          {/* PRIMARY AXIS & LINEAR OBJECT */}
          <g transform="translate(40, 260)">
            {/* Pressure Zone fill */}
            <rect x="380" y="-80" width="180" height="160" fill="url(#pressureHatch)" opacity="0.6" />

            {/* Main Stage Axis */}
            <line x1="0" y1="0" x2="580" y2="0" stroke="#111111" strokeWidth="2.5" />

            {/* Double Line for Linear Object */}
            <line x1="0" y1="-6" x2="580" y2="-6" stroke="#111111" strokeWidth="1" />
            <line x1="0" y1="6" x2="580" y2="6" stroke="#111111" strokeWidth="1" />

            {/* NODE A (Origin) */}
            <rect x="-10" y="-10" width="20" height="20" fill="#111111" />
            <text x="0" y="-20" fontFamily="monospace" fontSize="10" fontWeight="900" textAnchor="middle">NODE A — ORIGIN</text>
            <text x="0" y="25" fontFamily="monospace" fontSize="9" fill="#505050" textAnchor="middle">0.00m</text>

            {/* NODE B (Terminal) */}
            <rect x="570" y="-10" width="20" height="20" fill="#111111" />
            <text x="580" y="-20" fontFamily="monospace" fontSize="10" fontWeight="900" textAnchor="middle">NODE B — TERMINAL</text>
            <text x="580" y="25" fontFamily="monospace" fontSize="9" fill="#505050" textAnchor="middle">15.00m</text>

            {/* CHECKPOINT 12.15m */}
            <line x1="470" y1="-120" x2="470" y2="120" stroke="#111111" strokeWidth="1" strokeDasharray="3,3" />
            <circle cx="470" cy="0" r="8" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
            <text x="470" y="-130" fontFamily="monospace" fontSize="10" fontWeight="800" textAnchor="middle">
              CHECKPOINT 12.15 m
            </text>

            {/* PERFORMER POSITION */}
            <g transform="translate(430, 0)">
              {/* Head / Torso top down */}
              <circle cx="0" cy="0" r="14" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
              {/* Shoulders */}
              <line x1="0" y1="-22" x2="0" y2="22" stroke="#111111" strokeWidth="3" />
              {/* Arms gripping bar */}
              <path d="M 0 -20 L 20 -6" stroke="#111111" strokeWidth="2" />
              <path d="M 0 20 L 20 6" stroke="#111111" strokeWidth="2" />
              <circle cx="20" cy="-6" r="3" fill="#111111" />
              <circle cx="20" cy="6" r="3" fill="#111111" />

              {/* Glitch Tremor rings if Glitch mode */}
              {isGlitch && (
                <>
                  <circle cx="10" cy="-15" r="12" fill="none" stroke="#E6461A" strokeWidth="1.5" strokeDasharray="2,2" />
                  <circle cx="10" cy="15" r="12" fill="none" stroke="#E6461A" strokeWidth="1.5" strokeDasharray="2,2" />
                  <path d="M 15 -25 L 20 -20 L 25 -25" fill="none" stroke="#E6461A" strokeWidth="2" />
                  <path d="M 15 25 L 20 20 L 25 25" fill="none" stroke="#E6461A" strokeWidth="2" />
                  <text x="-40" y="-35" fontFamily="monospace" fontSize="9" fontWeight="800" fill="#E6461A">SHOULDER TREMOR</text>
                  <text x="-40" y="45" fontFamily="monospace" fontSize="9" fontWeight="800" fill="#E6461A">WRIST TREMOR</text>
                </>
              )}

              <text x="0" y="-45" fontFamily="sans-serif" fontSize="9" fontWeight="800" textAnchor="middle">
                PERFORMER AT 12.15m
              </text>
            </g>

            {/* REGULATORY OBJECT (R) */}
            <g transform="translate(510, 0)">
              <circle cx="0" cy="0" r="12" fill="#FFFFFF" stroke="#E6461A" strokeWidth="2.5" />
              <text x="0" y="4" fontFamily="monospace" fontSize="12" fontWeight="900" fill="#E6461A" textAnchor="middle">R</text>
              <text x="0" y="-20" fontFamily="monospace" fontSize="9" fontWeight="800" fill="#E6461A" textAnchor="middle">
                REGULATORY OBJECT
              </text>
            </g>

            {/* AUTHORITY VECTOR (PROHIBITION) */}
            <line x1="570" y1="0" x2="495" y2="0" stroke="#E6461A" strokeWidth="3" markerEnd="url(#arrowRed)" />
            <text x="535" y="-12" fontFamily="monospace" fontSize="10" fontWeight="900" fill="#E6461A" textAnchor="middle">
              PROHIBITION VECTOR
            </text>

            {/* FORWARD DRIVE VECTOR */}
            <line x1="200" y1="35" x2="380" y2="35" stroke="#111111" strokeWidth="3" markerEnd="url(#arrowBlack)" />
            <text x="290" y="52" fontFamily="monospace" fontSize="10" fontWeight="800" fill="#111111" textAnchor="middle">
              FORWARD DRIVE (PULL)
            </text>

            {/* CONFLICT / PRESSURE ANNOTATION */}
            <g transform="translate(470, 70)">
              <circle cx="0" cy="0" r="10" fill="none" stroke="#E6461A" strokeWidth="1.5" strokeDasharray="3,3" />
              {isGlitch ? (
                <text x="0" y="4" fontFamily="monospace" fontSize="11" fontWeight="900" fill="#E6461A" textAnchor="middle">X</text>
              ) : (
                <circle cx="0" cy="0" r="3" fill="#E6461A" />
              )}
              <text x="0" y="25" fontFamily="monospace" fontSize="9" fontWeight="800" fill="#E6461A" textAnchor="middle">
                {isGlitch ? 'VECTOR CONFLICT (AT BODY)' : 'CONFLICT POINT (AUTHORITY VS DRIVE)'}
              </text>
            </g>
          </g>

          {/* Dimension Lines */}
          <g transform="translate(40, 470)">
            <line x1="0" y1="0" x2="470" y2="0" stroke="#111111" strokeWidth="1.5" />
            <line x1="0" y1="-5" x2="0" y2="5" stroke="#111111" strokeWidth="1.5" />
            <line x1="470" y1="-5" x2="470" y2="5" stroke="#111111" strokeWidth="1.5" />
            <text x="235" y="-8" fontFamily="monospace" fontSize="10" fontWeight="800" textAnchor="middle">12.15 m</text>

            <line x1="470" y1="0" x2="580" y2="0" stroke="#111111" strokeWidth="1.5" />
            <line x1="580" y1="-5" x2="580" y2="5" stroke="#111111" strokeWidth="1.5" />
            <text x="525" y="-8" fontFamily="monospace" fontSize="10" fontWeight="800" textAnchor="middle">2.85 m</text>

            <line x1="0" y1="25" x2="580" y2="25" stroke="#111111" strokeWidth="2" />
            <text x="290" y="40" fontFamily="monospace" fontSize="11" fontWeight="900" textAnchor="middle">TOTAL STAGE AXIS = 15.00 m</text>
          </g>
        </g>
      </g>

      {/* ZONE 3: BODY RESPONSE AND SPATIAL OUTPUT */}
      <g transform="translate(1020, 90)">
        {/* A. FRONT / THREE-QUARTER STUDY (BODY) */}
        <g style={{ opacity: getOpacity('body'), transition: 'opacity 0.3s' }}>
          <rect x="0" y="0" width="400" height="510" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
          <rect x="0" y="0" width="400" height="26" fill="#EFEFEB" stroke="#111111" strokeWidth="1" />
          <text x="10" y="17" fontFamily="monospace" fontSize="9" fontWeight="800" fill="#111111">
            ZONE 3 — BODY RESPONSE
          </text>

        {/* A. FRONT / THREE-QUARTER STUDY */}
        <g transform="translate(20, 40)">
          <text x="0" y="0" fontFamily="monospace" fontSize="10" fontWeight="800" fill="#111111">
            A. FRONT / THREE-QUARTER STUDY
          </text>

          {/* Performer Figure Graphic */}
          <g transform="translate(120, 110)">
            {/* Head */}
            <circle cx="0" cy="-70" r="18" fill="none" stroke="#111111" strokeWidth="1.5" />
            {/* Spine Axis */}
            <line x1="0" y1="-52" x2="0" y2="60" stroke="#E6461A" strokeWidth="1.5" strokeDasharray="3,3" />
            {/* Shoulders */}
            <line x1="-35" y1="-40" x2="35" y2="-40" stroke="#111111" strokeWidth="2.5" />
            {/* Arms holding horizontal bar */}
            <line x1="-35" y1="-40" x2="-60" y2="0" stroke="#111111" strokeWidth="2" />
            <line x1="35" y1="-40" x2="60" y2="0" stroke="#111111" strokeWidth="2" />
            {/* Horizontal Bar (Linear Object) */}
            <rect x="-110" y="-4" width="220" height="8" fill="#111111" />

            {/* Pelvis & Legs */}
            <line x1="-20" y1="20" x2="20" y2="20" stroke="#111111" strokeWidth="2" />
            <line x1="-12" y1="20" x2="-15" y2="80" stroke="#111111" strokeWidth="2" />
            <line x1="12" y1="20" x2="15" y2="80" stroke="#111111" strokeWidth="2" />

            {/* Active Loci Highlights */}
            {!isGlitch ? (
              <>
                <circle cx="0" cy="-20" r="8" fill="#E6461A" opacity="0.3" />
                <circle cx="0" cy="-20" r="4" fill="#E6461A" />
                <circle cx="0" cy="15" r="8" fill="#E6461A" opacity="0.3" />
                <circle cx="0" cy="15" r="4" fill="#E6461A" />
                <text x="75" y="-15" fontFamily="monospace" fontSize="9" fontWeight="900" fill="#E6461A">
                  SPINE + PELVIS
                </text>
                <text x="75" y="-30" fontFamily="monospace" fontSize="9" fontWeight="800" fill="#111111">
                  LOCKED AXIS
                </text>
              </>
            ) : (
              <>
                <circle cx="-60" cy="0" r="8" fill="#E6461A" opacity="0.3" />
                <circle cx="-60" cy="0" r="4" fill="#E6461A" />
                <circle cx="60" cy="0" r="8" fill="#E6461A" opacity="0.3" />
                <circle cx="60" cy="0" r="4" fill="#E6461A" />
                <circle cx="-35" cy="-40" r="8" fill="#E6461A" opacity="0.3" />
                <circle cx="35" cy="-40" r="8" fill="#E6461A" opacity="0.3" />
                <text x="75" y="-10" fontFamily="monospace" fontSize="9" fontWeight="900" fill="#E6461A">
                  WRIST + SHOULDER
                </text>
                <text x="75" y="-25" fontFamily="monospace" fontSize="9" fontWeight="800" fill="#111111">
                  TREMOR LOOP
                </text>
              </>
            )}

            {/* Force Arrow */}
            <line x1="100" y1="0" x2="65" y2="0" stroke="#E6461A" strokeWidth="3" markerEnd="url(#arrowRed)" />
            <circle cx="110" cy="0" r="8" fill="#FFFFFF" stroke="#E6461A" strokeWidth="2" />
            <text x="110" y="3" fontFamily="monospace" fontSize="10" fontWeight="900" fill="#E6461A" textAnchor="middle">R</text>
          </g>
        </g>

        {/* B. SIDE ELEVATION STUDY */}
        <g transform="translate(20, 310)">
          <text x="0" y="0" fontFamily="monospace" fontSize="10" fontWeight="800" fill="#111111">
            B. SIDE ELEVATION STUDY
          </text>

          <g transform="translate(120, 110)">
            {/* Head Side */}
            <circle cx="0" cy="-70" r="16" fill="none" stroke="#111111" strokeWidth="1.5" />
            {/* Spine */}
            <path d="M 0 -54 Q 5 -20 0 20" fill="none" stroke="#E6461A" strokeWidth="2" strokeDasharray="3,3" />
            {/* Arm pushing/pulling bar */}
            <path d="M 0 -38 L 30 0" stroke="#111111" strokeWidth="2" />
            <line x1="30" y1="-80" x2="30" y2="80" stroke="#111111" strokeWidth="4" />
            {/* Legs Side */}
            <line x1="0" y1="20" x2="-5" y2="80" stroke="#111111" strokeWidth="2" />

            {/* Blocked Vector Arrow */}
            <line x1="30" y1="50" x2="50" y2="50" stroke="#111111" strokeWidth="2" />
            <line x1="50" y1="40" x2="50" y2="60" stroke="#111111" strokeWidth="2" />

            <text x="60" y="53" fontFamily="monospace" fontSize="8" fontWeight="800" fill="#111111">
              {isGlitch ? 'UNCLEAN RESOLUTION' : 'ARRESTED FORWARD MOVEMENT'}
            </text>
          </g>
        </g>

        </g>

        {/* SPATIAL OUTPUT & RESIDUAL BOX (OUTPUT) */}
        <g transform="translate(15, 530)" style={{ opacity: getOpacity('output'), transition: 'opacity 0.3s' }}>
          <rect x="-15" y="-15" width="400" height="165" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
          <rect x="-15" y="-15" width="400" height="26" fill="#EFEFEB" stroke="#111111" strokeWidth="1" />
          <text x="-5" y="2" fontFamily="monospace" fontSize="9" fontWeight="800" fill="#111111">
            ZONE 4 — SPATIAL OUTPUT
          </text>
          
          <rect x="0" y="30" width="370" height="105" fill="#111111" stroke="#111111" strokeWidth="1" />
          <text x="15" y="55" fontFamily="monospace" fontSize="10" fontWeight="900" fill="#F7F7F3">
            SPATIAL OUTPUT: {isGlitch ? 'TREMOR LOOP' : 'LOCKED AXIS'}
          </text>

          <text x="15" y="80" fontFamily="sans-serif" fontSize="10" fill="#D9D9D3">
            {isGlitch
              ? 'Wrist and shoulder vibrate under simultaneous forward drive and prohibition pressure.'
              : 'Forward movement stops while axial alignment and internal muscle torque remain active.'}
          </text>

          <line x1="15" y1="95" x2="355" y2="95" stroke="#D9D9D3" strokeWidth="0.5" opacity="0.4" />

          <text x="15" y="115" fontFamily="monospace" fontSize="9" fontWeight="800" fill="#E6461A">
            RESIDUAL:
          </text>
          <text x="75" y="115" fontFamily="monospace" fontSize="9" fill="#FFFFFF">
            {isGlitch
              ? 'GRIP AND DRIVE REMAIN SIMULTANEOUSLY ACTIVE'
              : 'GRIP AND LINEAR TENSION MAINTAINED'}
          </text>
        </g>
      </g>

      {/* --- BOTTOM ROW: SEQUENCE STRIP & LEGEND --- */}
      <g transform="translate(20, 785)">
        <rect x="0" y="0" width="1400" height="260" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />

        {/* SEQUENCE STRIP */}
        <g transform="translate(15, 15)">
          <text x="0" y="10" fontFamily="monospace" fontSize="11" fontWeight="900" fill="#111111">
            SEQUENCE STRIP — PROTO PATH PROGRESSION
          </text>

          {/* Frames 1-3 (or 1-4) */}
          <g transform="translate(0, 25)">
            {/* Frame 01 */}
            <g transform="translate(0, 0)">
              <rect x="0" y="0" width="220" height="190" fill="#F7F7F3" stroke="#111111" strokeWidth="1" />
              <rect x="5" y="5" width="30" height="18" fill="#111111" />
              <text x="20" y="18" fontFamily="monospace" fontSize="10" fontWeight="900" fill="#FFFFFF" textAnchor="middle">01</text>
              <text x="45" y="18" fontFamily="monospace" fontSize="10" fontWeight="800" fill="#111111">APPROACH</text>
              <line x1="20" y1="100" x2="200" y2="100" stroke="#111111" strokeWidth="2" />
              <circle cx="110" cy="100" r="10" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
              <line x1="80" y1="120" x2="140" y2="120" stroke="#111111" strokeWidth="2" markerEnd="url(#arrowBlack)" />
              <text x="110" y="160" fontFamily="sans-serif" fontSize="8" fill="#505050" textAnchor="middle">
                Performer pulls linear object toward Node B
              </text>
            </g>

            <path d="M 230 95 L 250 95" stroke="#111111" strokeWidth="2" markerEnd="url(#arrowBlack)" />

            {/* Frame 02 */}
            <g transform="translate(260, 0)">
              <rect x="0" y="0" width="220" height="190" fill="#F7F7F3" stroke="#111111" strokeWidth="1" />
              <rect x="5" y="5" width="30" height="18" fill="#111111" />
              <text x="20" y="18" fontFamily="monospace" fontSize="10" fontWeight="900" fill="#FFFFFF" textAnchor="middle">02</text>
              <text x="45" y="18" fontFamily="monospace" fontSize="10" fontWeight="800" fill="#111111">AUTHORITY</text>
              <line x1="20" y1="100" x2="200" y2="100" stroke="#111111" strokeWidth="2" />
              <circle cx="110" cy="100" r="10" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
              <line x1="190" y1="100" x2="135" y2="100" stroke="#E6461A" strokeWidth="2" markerEnd="url(#arrowRed)" />
              <text x="110" y="160" fontFamily="sans-serif" fontSize="8" fill="#505050" textAnchor="middle">
                Prohibition vector enters primary stage axis
              </text>
            </g>

            <path d="M 490 95 L 510 95" stroke="#111111" strokeWidth="2" markerEnd="url(#arrowBlack)" />

            {/* Frame 03 */}
            <g transform="translate(520, 0)">
              <rect x="0" y="0" width="220" height="190" fill="#F7F7F3" stroke="#111111" strokeWidth="1.5" strokeDasharray={isGlitch ? 'none' : 'none'} />
              <rect x="5" y="5" width="30" height="18" fill={isGlitch ? '#111111' : '#E6461A'} />
              <text x="20" y="18" fontFamily="monospace" fontSize="10" fontWeight="900" fill="#FFFFFF" textAnchor="middle">03</text>
              <text x="45" y="18" fontFamily="monospace" fontSize="10" fontWeight="800" fill="#111111">
                {isGlitch ? 'VECTOR CONFLICT' : 'FREEZE OUTPUT'}
              </text>
              <line x1="20" y1="100" x2="200" y2="100" stroke="#111111" strokeWidth="2" />
              <circle cx="110" cy="100" r="10" fill={isGlitch ? '#FFFFFF' : '#E6461A'} stroke="#111111" strokeWidth="1.5" />
              {!isGlitch && <circle cx="110" cy="100" r="18" fill="none" stroke="#E6461A" strokeWidth="1.5" strokeDasharray="3,3" />}
              <text x="110" y="160" fontFamily="sans-serif" fontSize="8" fill="#505050" textAnchor="middle">
                {isGlitch ? 'Two vectors meet at body; grip remains closed' : 'Body freezes on axis; alignment maintained'}
              </text>
            </g>

            {isGlitch && (
              <>
                <path d="M 750 95 L 770 95" stroke="#111111" strokeWidth="2" markerEnd="url(#arrowBlack)" />
                {/* Frame 04 for Glitch */}
                <g transform="translate(780, 0)">
                  <rect x="0" y="0" width="220" height="190" fill="#F7F7F3" stroke="#E6461A" strokeWidth="2" />
                  <rect x="5" y="5" width="30" height="18" fill="#E6461A" />
                  <text x="20" y="18" fontFamily="monospace" fontSize="10" fontWeight="900" fill="#FFFFFF" textAnchor="middle">04</text>
                  <text x="45" y="18" fontFamily="monospace" fontSize="10" fontWeight="800" fill="#E6461A">GLITCH OUTPUT</text>
                  <line x1="20" y1="100" x2="200" y2="100" stroke="#111111" strokeWidth="2" />
                  <circle cx="110" cy="100" r="10" fill="#E6461A" stroke="#111111" strokeWidth="1.5" />
                  <path d="M 95 90 L 100 110 L 105 90 L 110 110 L 115 90" fill="none" stroke="#E6461A" strokeWidth="2" />
                  <text x="110" y="160" fontFamily="sans-serif" fontSize="8" fill="#E6461A" fontWeight="700" textAnchor="middle">
                    Wrist + shoulder tremor; axis held
                  </text>
                </g>
              </>
            )}
          </g>
        </g>

        {/* LEGEND */}
        <g transform="translate(1030, 15)">
          <rect x="0" y="0" width="355" height="225" fill="#F7F7F3" stroke="#111111" strokeWidth="1" />
          <text x="15" y="20" fontFamily="monospace" fontSize="11" fontWeight="900" fill="#111111">
            LEGEND &amp; SYMBOLS
          </text>

          <g transform="translate(15, 40)">
            <line x1="0" y1="10" x2="40" y2="10" stroke="#111111" strokeWidth="2.5" />
            <text x="50" y="14" fontFamily="monospace" fontSize="9" fontWeight="700">PRIMARY STAGE AXIS</text>

            <line x1="0" y1="30" x2="40" y2="30" stroke="#111111" strokeWidth="1" />
            <line x1="0" y1="34" x2="40" y2="34" stroke="#111111" strokeWidth="1" />
            <text x="50" y="36" fontFamily="monospace" fontSize="9" fontWeight="700">LINEAR OBJECT (15.00m)</text>

            <line x1="0" y1="55" x2="30" y2="55" stroke="#E6461A" strokeWidth="2" markerEnd="url(#arrowRed)" />
            <text x="50" y="58" fontFamily="monospace" fontSize="9" fontWeight="700" fill="#E6461A">REGULATORY PRESSURE</text>

            <line x1="0" y1="78" x2="30" y2="78" stroke="#111111" strokeWidth="2" markerEnd="url(#arrowBlack)" />
            <text x="50" y="81" fontFamily="monospace" fontSize="9" fontWeight="700">BODY MOVEMENT / DRIVE</text>

            <rect x="10" y="98" width="12" height="12" fill="#111111" />
            <text x="50" y="108" fontFamily="monospace" fontSize="9" fontWeight="700">NODE (A / B)</text>

            <circle cx="16" cy="128" r="6" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
            <text x="50" y="131" fontFamily="monospace" fontSize="9" fontWeight="700">CHECKPOINT (12.15m)</text>

            <circle cx="16" cy="151" r="5" fill="#E6461A" />
            <text x="50" y="154" fontFamily="monospace" fontSize="9" fontWeight="700" fill="#E6461A">ACTIVE BODY LOCUS</text>

            <rect x="0" y="168" width="30" height="14" fill="url(#pressureHatch)" stroke="#E6461A" strokeWidth="0.5" />
            <text x="50" y="178" fontFamily="monospace" fontSize="9" fontWeight="700" fill="#E6461A">PRESSURE FIELD</text>
          </g>
        </g>
      </g>
    </svg>
  );
};
