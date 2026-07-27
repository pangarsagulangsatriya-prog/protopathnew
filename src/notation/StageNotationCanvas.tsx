import React from 'react';
import { StageNotationModel } from './model/types';
import { StageAxis } from './primitives/StageAxis';
import { CheckpointMarker } from './primitives/CheckpointMarker';
import { StageObject } from './primitives/StageObject';
import { ForceVector } from './primitives/ForceVector';
import { PressureField } from './primitives/PressureField';
import { BodyFigure } from './primitives/BodyFigure';

interface StageNotationCanvasProps {
  model: StageNotationModel;
  activeStep?: 'data' | 'situation' | 'body' | 'output';
  mode?: 'action' | 'stage' | 'body' | 'full-board'; // Semantic zoom/layout modes
}

export const StageNotationCanvas: React.FC<StageNotationCanvasProps> = ({
  model,
  activeStep,
  mode = 'full-board',
}) => {
  // Common scale: 1 meter = 40 pixels
  const SCALE = 40;
  
  // Calculate opacities based on active step (for full-board emphasis)
  const getOpacity = (zone: 'data' | 'situation' | 'body' | 'output') => {
    if (!activeStep) return 1;
    if (activeStep === zone) return 1;
    return 0.3;
  };

  const isGlitch = model.performer.bodyImpulse === 'GLITCH';
  
  // Base coordinates for the primary stage view
  const stageOriginX = 50;
  const stageOriginY = 250;
  const performerX = stageOriginX + (model.checkpoint.distanceMeters ?? 0) * SCALE - 40; // Offset body slightly left of checkpoint
  const performerY = stageOriginY;

  return (
    <svg
      viewBox="0 0 1000 600"
      className="w-full h-auto bg-[#F7F7F3] text-[#111111] font-sans select-none"
    >
      <defs>
        <pattern id="pressureHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="10" stroke="#E6461A" strokeWidth="1.2" opacity="0.4" />
        </pattern>
        <marker id="arrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#E6461A" />
        </marker>
        <marker id="arrowBlack" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#111111" />
        </marker>
      </defs>

      {/* BACKGROUND GRID */}
      <g opacity={0.3}>
        {Array.from({ length: 21 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="600" stroke="#D9D9D3" strokeWidth="1" strokeDasharray="4,4" />
        ))}
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 50} x2="1000" y2={i * 50} stroke="#D9D9D3" strokeWidth="1" strokeDasharray="4,4" />
        ))}
      </g>

      {/* TITLE & HEADER */}
      <g transform="translate(20, 20)">
        <text x="0" y="10" fontFamily="monospace" fontSize="14" fontWeight="900" fill="#111111">
          PROTO PATH / DATA-DRIVEN NOTATION ENGINE
        </text>
        <text x="0" y="30" fontFamily="monospace" fontSize="10" fill="#505050">
          ID: {model.id} / REVIEW STATUS: {model.reviewStatus.toUpperCase()}
        </text>
      </g>

      {/* --- LAYER 1: DATA CONTEXT (Upper Left) --- */}
      <g transform="translate(50, 80)" style={{ opacity: getOpacity('data'), transition: 'opacity 0.3s' }}>
        <rect x="0" y="0" width="200" height="60" fill="#FFFFFF" stroke="#111111" strokeWidth="1" />
        <text x="10" y="15" fontFamily="monospace" fontSize="9" fontWeight="800">SOURCE: {model.sourceState.featureType}</text>
        <text x="10" y="35" fontFamily="monospace" fontSize="11" fontWeight="800" fill="#E6461A">{model.sourceState.rawValue}</text>
      </g>

      {/* --- LAYER 2: STAGE PLAN (Center) --- */}
      <g style={{ opacity: getOpacity('situation'), transition: 'opacity 0.3s' }}>
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
            {/* Shift regulatory objects slightly off axis for clarity */}
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

      {/* --- LAYER 3: BODY RESPONSE (Center-Left / Right) --- */}
      <g style={{ opacity: getOpacity('body'), transition: 'opacity 0.3s' }}>
        <BodyFigure 
          baseX={performerX} 
          baseY={performerY} 
          activeLoci={model.performer.anatomicalLoci} 
          impulse={model.performer.bodyImpulse} 
        />
        
        {/* Abstract Body Detail Block (Right side) */}
        <g transform="translate(750, 150)">
          <rect x="0" y="0" width="200" height="300" fill="#FFFFFF" stroke="#111111" strokeWidth="1" />
          <text x="10" y="20" fontFamily="monospace" fontSize="10" fontWeight="800">BODY IMPULSE</text>
          <text x="10" y="45" fontFamily="monospace" fontSize="12" fontWeight="900" fill="#E6461A">{model.performer.bodyImpulse}</text>
          
          <g transform="translate(100, 180)">
             <BodyFigure 
              baseX={0} 
              baseY={0} 
              activeLoci={model.performer.anatomicalLoci} 
              impulse={model.performer.bodyImpulse} 
            />
          </g>
        </g>
      </g>

      {/* --- LAYER 4: SPATIAL OUTPUT (Bottom) --- */}
      <g transform="translate(50, 480)" style={{ opacity: getOpacity('output'), transition: 'opacity 0.3s' }}>
        <rect x="0" y="0" width="600" height="90" fill="#111111" />
        <text x="15" y="25" fontFamily="monospace" fontSize="11" fontWeight="900" fill="#F7F7F3">
          SPATIAL OUTPUT: {model.spatialOutput.label}
        </text>
        <text x="15" y="45" fontFamily="sans-serif" fontSize="11" fill="#D9D9D3">
          {model.spatialOutput.description}
        </text>
        <text x="15" y="70" fontFamily="monospace" fontSize="9" fontWeight="800" fill="#E6461A">
          RESIDUAL: {model.residuals.map(r => r.description).join(' / ')}
        </text>
      </g>

    </svg>
  );
};
