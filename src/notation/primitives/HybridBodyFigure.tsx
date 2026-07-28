import React from 'react';
import { BodyLocus } from './BodyLocus';
import { BodyVisualAsset, Point } from '../../domain/types';

interface HybridBodyFigureProps {
  baseX: number;
  baseY: number;
  activeLoci: string[];
  impulse: string;
  asset?: BodyVisualAsset;
  pose?: 'front' | 'side';
}

export const HybridBodyFigure: React.FC<HybridBodyFigureProps> = ({ 
  baseX, 
  baseY, 
  activeLoci, 
  impulse,
  asset,
  pose = 'front'
}) => {
  const isTremor = impulse === 'GLITCH';

  // Define anchor points for loci mapping
  const anchors: Record<string, Point> = asset?.anchorPoints || {
    'head': { x: 0, y: -90 },
    'cervical-spine': { x: 0, y: -70 },
    'shoulder': { x: pose === 'side' ? 0 : -35, y: -60 }, // Default to left shoulder for display if not specific
    'shoulder-right': { x: 35, y: -60 },
    'spine': { x: pose === 'side' ? -5 : 0, y: -20 },
    'pelvis': { x: pose === 'side' ? -5 : 0, y: 15 },
    'wrist': { x: pose === 'side' ? 40 : -60, y: 0 },
    'wrist-right': { x: 60, y: 0 },
    'gripPoint': { x: pose === 'side' ? 40 : -60, y: 0 },
    'centreOfGravity': { x: 0, y: 5 },
  };

  return (
    <g className="hybrid-body-figure" transform={`translate(${baseX}, ${baseY})`}>
      {/* 1. Base Layer: Image or Rich SVG Fallback */}
      {asset ? (
        <image 
          href={asset.src} 
          x={-asset.width / 2} 
          y={-asset.height + 80} 
          width={asset.width} 
          height={asset.height} 
          opacity={0.9} 
        />
      ) : (
        <g className="fallback-architectural-body" stroke="#111111" strokeWidth={1.5} fill="none">
          {pose === 'side' ? (
            /* SIDE ELEVATION */
            <>
              {/* Head & Neck */}
              <circle cx={0} cy={-90} r={12} fill="#F7F7F3" />
              <line x1={0} y1={-78} x2={0} y2={-70} />
              {/* Torso (Profile) */}
              <path d="M 0 -70 Q -10 -30 -5 20 Q 5 20 10 -10 Z" fill="#FFFFFF" />
              {/* Spine Line (Architectural marker - curved for side) */}
              <path d="M 0 -70 Q -10 -20 -5 20" stroke="#E6461A" strokeWidth={1} strokeDasharray="4,4" fill="none" />
              {/* Arm reaching forward to grip */}
              <path d="M 0 -60 L 20 -30 L 40 0" stroke="#111111" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
              {/* Legs */}
              <path d="M -5 20 L -5 70 L 5 110" stroke="#111111" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
              {/* Grip Indicator */}
              <circle cx={40} cy={0} r={4} fill="#111111" stroke="none" />
            </>
          ) : (
            /* FRONT / THREE-QUARTER ELEVATION */
            <>
              {/* Head & Neck */}
              <path d="M -12 -90 C -12 -105, 12 -105, 12 -90 C 12 -80, 8 -70, 0 -70 C -8 -70, -12 -80, -12 -90 Z" fill="#F7F7F3" />
              <rect x="-4" y="-70" width="8" height="10" />
              
              {/* Torso (Clavicle to Pelvis) */}
              <path d="M -25 -60 L 25 -60 L 18 10 L -18 10 Z" fill="#FFFFFF" />
              <path d="M -18 10 L 18 10 L 22 25 L -22 25 Z" fill="#F7F7F3" />
              
              {/* Spine Centerline (Architectural marker) */}
              <line x1={0} y1={-60} x2={0} y2={25} stroke="#E6461A" strokeWidth={1} strokeDasharray="4,4" />

              {/* Arms (holding object) */}
              <path d="M -25 -60 L -40 -30 L -55 0 L -60 0 L -45 -30 L -30 -60 Z" fill="#F7F7F3" />
              <path d="M 25 -60 L 40 -30 L 55 0 L 60 0 L 45 -30 L 30 -60 Z" fill="#F7F7F3" />
              
              {/* Legs */}
              <path d="M -22 25 L -10 25 L -12 70 L -16 110 L -24 110 L -20 70 Z" fill="#FFFFFF" />
              <path d="M 10 25 L 22 25 L 20 70 L 24 110 L 16 110 L 12 70 Z" fill="#FFFFFF" />
              
              {/* Grip Indicators */}
              <circle cx="-57" cy="0" r="4" fill="#111111" stroke="none" />
              <circle cx="57" cy="0" r="4" fill="#111111" stroke="none" />
            </>
          )}
        </g>
      )}

      {/* 2. Anchor Overlay Layer: Loci & Tension */}
      {/* Spine / Torso Loci */}
      {activeLoci.includes('spine') && anchors['spine'] && (
        <BodyLocus cx={anchors['spine'].x} cy={anchors['spine'].y} status="locked" label="SPINE" />
      )}
      {activeLoci.includes('pelvis') && anchors['pelvis'] && (
        <BodyLocus cx={anchors['pelvis'].x} cy={anchors['pelvis'].y} status="locked" label="PELVIS" />
      )}
      
      {/* Shoulder Loci */}
      {activeLoci.includes('shoulder') && (
        <>
          {anchors['shoulder'] && (
            <BodyLocus cx={anchors['shoulder'].x} cy={anchors['shoulder'].y} status={isTremor ? 'tremor' : 'locked'} label="SHOULDER" showLabel={true} />
          )}
          {anchors['shoulder-right'] && (
            <BodyLocus cx={anchors['shoulder-right'].x} cy={anchors['shoulder-right'].y} status={isTremor ? 'tremor' : 'locked'} />
          )}
        </>
      )}
      
      {/* Wrist Loci */}
      {activeLoci.includes('wrist') && (
        <>
          {anchors['wrist'] && (
            <BodyLocus cx={anchors['wrist'].x} cy={anchors['wrist'].y} status={isTremor ? 'tremor' : 'locked'} label="WRIST" showLabel={true} />
          )}
          {anchors['wrist-right'] && (
            <BodyLocus cx={anchors['wrist-right'].x} cy={anchors['wrist-right'].y} status={isTremor ? 'tremor' : 'locked'} />
          )}
        </>
      )}
      
      {/* 3. Force Paths (Connecting anchors) */}
      {isTremor && activeLoci.includes('shoulder') && activeLoci.includes('wrist') && anchors['shoulder'] && anchors['wrist'] && (
        <path 
          d={`M ${anchors['wrist'].x} ${anchors['wrist'].y} Q -50 -30 ${anchors['shoulder'].x} ${anchors['shoulder'].y}`} 
          fill="none" 
          stroke="#E6461A" 
          strokeWidth="1.5" 
          strokeDasharray="2,4" 
          opacity="0.8"
        />
      )}
    </g>
  );
};
