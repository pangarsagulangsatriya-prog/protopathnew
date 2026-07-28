import React from 'react';
import { StageNotationModel } from './model/types';
import { StageAxis } from './primitives/StageAxis';
import { CheckpointMarker } from './primitives/CheckpointMarker';
import { StageObject } from './primitives/StageObject';
import { ForceVector } from './primitives/ForceVector';
import { PressureField } from './primitives/PressureField';
import { HybridBodyFigure } from './primitives/HybridBodyFigure';
import { getRenderPolicy } from '../domain/renderPolicy';

interface StageNotationCanvasProps {
  model: StageNotationModel;
  activeStep?: 'data' | 'situation' | 'body' | 'output';
  mode?: 'action' | 'stage' | 'body' | 'full-board';
}

export const StageNotationCanvas: React.FC<StageNotationCanvasProps> = ({
  model,
  activeStep,
  mode = 'stage',
}) => {
  // Common scale: 1 meter = 40 pixels
  const SCALE = 40;
  
  const getOpacity = (zone: 'data' | 'situation' | 'body' | 'output') => {
    if (!activeStep) return 1;
    if (activeStep === zone) return 1;
    return 0.3;
  };

  const isGlitch = model.performer.bodyImpulse === 'GLITCH';
  
  // Base coordinates for the primary stage view
  const stageOriginX = 150;
  const stageOriginY = 300;
  const performerX = stageOriginX + (model.checkpoint.distanceMeters ?? 0) * SCALE - 40;
  const performerY = stageOriginY;
  
  const totalLengthPx = (model.axis.lengthMeters || 15) * SCALE;

  // ViewBox rules based on mode
  let viewBox = "0 0 1200 700";
  if (mode === 'body') {
    viewBox = `${performerX - 150} ${performerY - 200} 300 350`;
  } else if (mode === 'action') {
    viewBox = "100 150 900 400";
  }

  return (
    <svg
      viewBox={viewBox}
      className="w-full h-auto bg-[#F7F7F3] text-[#111111] font-sans select-none border border-[#111111]/20 shadow-sm"
    >
      <defs>
        <pattern id="pressureHatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#E6461A" strokeWidth="1.2" opacity="0.5" />
        </pattern>
        <marker id="arrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#E6461A" />
        </marker>
        <marker id="arrowBlack" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#111111" />
        </marker>
      </defs>

      {/* BACKGROUND GRID (Only in Stage or Full Board mode) */}
      {(mode === 'stage' || mode === 'full-board') && (
        <g opacity={0.4}>
          {Array.from({ length: 25 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="700" stroke="#D9D9D3" strokeWidth="1" strokeDasharray="2,2" />
          ))}
          {Array.from({ length: 15 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 50} x2="1200" y2={i * 50} stroke="#D9D9D3" strokeWidth="1" strokeDasharray="2,2" />
          ))}
          
          {/* Scale Bar */}
          <g transform="translate(900, 50)">
            <text x="0" y="-10" fontFamily="monospace" fontSize="10" fill="#505050">GRID: 1m x 1m (SCALE {SCALE}px)</text>
            <line x1="0" y1="0" x2={SCALE * 5} y2="0" stroke="#111111" strokeWidth="1" />
            {[0, 1, 2, 3, 4, 5].map(m => (
              <g key={`scale-${m}`} transform={`translate(${m * SCALE}, 0)`}>
                <line x1="0" y1="0" x2="0" y2="-5" stroke="#111111" strokeWidth="1" />
                <text x="0" y="-10" fontSize="8" textAnchor="middle">{m}m</text>
              </g>
            ))}
          </g>
        </g>
      )}

      {/* TITLE & HEADER */}
      {(mode === 'stage' || mode === 'full-board') && (
        <g transform="translate(30, 30)">
          <text x="0" y="10" fontFamily="monospace" fontSize="18" fontWeight="900" fill="#111111">
            PROTO PATH — ARCHITECTURAL STAGE NOTATION
          </text>
          <text x="0" y="30" fontFamily="monospace" fontSize="12" fontWeight="800" fill="#505050" letterSpacing="1">
            {model.id.toUpperCase()} / CHECKPOINT {model.checkpoint.distanceMeters}M
          </text>
        </g>
      )}

      {/* --- LAYER 1: DATA CONTEXT (Upper Left) --- */}
      <g transform="translate(30, 80)" style={{ opacity: getOpacity('data'), transition: 'opacity 0.3s' }}>
        <rect x="0" y="0" width="220" height="70" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
        <rect x="0" y="0" width="220" height="20" fill="#F7F7F3" stroke="#111111" strokeWidth="1.5" />
        <text x="10" y="14" fontFamily="monospace" fontSize="9" fontWeight="800" fill="#505050">DATA PROVOCATION</text>
        <text x="10" y="40" fontFamily="monospace" fontSize="11" fontWeight="800" fill="#111111">SOURCE: {model.sourceState.featureType}</text>
        <text x="10" y="58" fontFamily="monospace" fontSize="12" fontWeight="900" fill="#E6461A">{model.sourceState.rawValue}</text>
      </g>

      {/* --- LAYER 2: STAGE PLAN (Center) --- */}
      <g style={{ opacity: getOpacity('situation'), transition: 'opacity 0.3s' }}>
        
        {/* Dimension Lines (Below axis) */}
        {(mode === 'stage' || mode === 'full-board') && (
          <g transform={`translate(${stageOriginX}, ${stageOriginY + 120})`} stroke="#111111" strokeWidth="1" fill="none">
            {/* Total axis line */}
            <line x1="0" y1="30" x2={totalLengthPx} y2="30" strokeDasharray="4,4" />
            <line x1="0" y1="25" x2="0" y2="35" />
            <line x1={totalLengthPx} y1="25" x2={totalLengthPx} y2="35" />
            <text x={totalLengthPx / 2} y="20" fontFamily="monospace" fontSize="10" fill="#505050" textAnchor="middle">
              {model.axis.lengthMeters} m TOTAL STAGE AXIS
            </text>

            {/* Checkpoint line */}
            <line x1="0" y1="0" x2={(model.checkpoint.distanceMeters ?? 0) * SCALE} y2="0" />
            <line x1="0" y1="-5" x2="0" y2="5" />
            <line x1={(model.checkpoint.distanceMeters ?? 0) * SCALE} y1="-5" x2={(model.checkpoint.distanceMeters ?? 0) * SCALE} y2="5" />
            <text x={((model.checkpoint.distanceMeters ?? 0) * SCALE) / 2} y="-10" fontFamily="monospace" fontSize="10" fill="#505050" textAnchor="middle">
              {model.checkpoint.distanceMeters} m ORIGIN TO CHECKPOINT
            </text>
          </g>
        )}

        {/* Pressure Fields */}
        {model.pressureFields.map(pf => (
          <PressureField key={pf.id} field={pf} baseX={performerX + 80} baseY={performerY} />
        ))}

        {/* Axis & Checkpoint */}
        <g transform={`translate(${stageOriginX}, ${stageOriginY})`}>
          <StageAxis lengthMeters={model.axis.lengthMeters} nodes={model.axis.nodes} state={model.axis.state} />
          <CheckpointMarker distanceMeters={model.checkpoint.distanceMeters} label={model.checkpoint.label} scale={SCALE} />
        </g>

        {/* Objects */}
        {model.objects.map(obj => (
          <g key={obj.id} transform={`translate(${stageOriginX}, ${stageOriginY})`}>
            <g transform={obj.category === 'REGULATORY_OBJECT' ? `translate(40, -40)` : ''}>
              <StageObject object={obj} scale={SCALE} />
            </g>
          </g>
        ))}

        {/* Forces */}
        {model.forces.map(force => (
          <ForceVector key={force.id} force={force} baseX={performerX} baseY={performerY} />
        ))}
      </g>

      {/* --- LAYER 3: BODY RESPONSE (Center / Right) --- */}
      <g style={{ opacity: getOpacity('body'), transition: 'opacity 0.3s' }}>
        <HybridBodyFigure 
          baseX={performerX} 
          baseY={performerY} 
          activeLoci={model.performer.anatomicalLoci} 
          impulse={model.performer.bodyImpulse} 
        />
        
        {/* Abstract Body Detail Block (Right side) - Only in Stage/Full Board */}
        {(mode === 'stage' || mode === 'full-board') && (
          <g transform="translate(850, 150)">
            <rect x="0" y="0" width="280" height="340" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
            <rect x="0" y="0" width="280" height="24" fill="#F7F7F3" stroke="#111111" strokeWidth="1.5" />
            <text x="10" y="16" fontFamily="monospace" fontSize="10" fontWeight="800" fill="#505050">ZONE 3 — BODY RESPONSE STUDY</text>
            
            <text x="10" y="45" fontFamily="monospace" fontSize="11" fontWeight="800">DRIVE ACTIVE (FORWARD)</text>
            <text x="270" y="45" fontFamily="monospace" fontSize="11" fontWeight="800" fill="#E6461A" textAnchor="end">{model.performer.bodyImpulse}</text>
            
            {/* Embedded Hybrid Body for detail view */}
            <g transform="translate(140, 200)">
               <HybridBodyFigure 
                baseX={0} 
                baseY={0} 
                activeLoci={model.performer.anatomicalLoci} 
                impulse={model.performer.bodyImpulse} 
              />
            </g>
          </g>
        )}
      </g>

      {/* --- LAYER 4: SPATIAL OUTPUT PANEL (Bottom Right) --- */}
      {(mode === 'stage' || mode === 'full-board') && (
        <g transform="translate(680, 520)" style={{ opacity: getOpacity('output'), transition: 'opacity 0.3s' }}>
          <rect x="0" y="0" width="450" height="150" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
          <rect x="0" y="0" width="450" height="24" fill="#F7F7F3" stroke="#111111" strokeWidth="1.5" />
          <text x="225" y="16" fontFamily="monospace" fontSize="11" fontWeight="800" fill="#111111" textAnchor="middle">
            SPATIAL OUTPUT PANEL
          </text>
          
          <g transform="translate(15, 45)" fontFamily="monospace" fontSize="11">
            <text x="0" y="0" fill="#505050" fontWeight="800">SPATIAL OUTPUT:</text>
            <text x="120" y="0" fill="#E6461A" fontWeight="900">{model.spatialOutput.label.toUpperCase()}</text>
            
            <line x1="0" y1="15" x2="420" y2="15" stroke="#E5E5E0" strokeWidth="1" />
            
            <text x="0" y="35" fill="#505050" fontWeight="800">BODY STATE:</text>
            <text x="120" y="35" fill="#111111" fontWeight="800">{model.spatialOutput.description.toUpperCase()}</text>

            <line x1="0" y1="50" x2="420" y2="50" stroke="#E5E5E0" strokeWidth="1" />
            
            <text x="0" y="70" fill="#505050" fontWeight="800">AXIS STATE:</text>
            <text x="120" y="70" fill="#111111" fontWeight="800">PRIMARY LINE MAINTAINED</text>
            
            <line x1="0" y1="85" x2="420" y2="85" stroke="#E5E5E0" strokeWidth="1" />

            <text x="0" y="105" fill="#505050" fontWeight="800">RESIDUAL:</text>
            <text x="120" y="105" fill="#E6461A" fontWeight="800">{model.residuals.map(r => r.description).join(' / ').toUpperCase()}</text>
          </g>
        </g>
      )}
    </svg>
  );
};
