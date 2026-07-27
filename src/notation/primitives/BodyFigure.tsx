import React from 'react';
import { BodyLocus } from './BodyLocus';

interface BodyFigureProps {
  baseX: number;
  baseY: number;
  activeLoci: string[];
  impulse: string;
}

export const BodyFigure: React.FC<BodyFigureProps> = ({ baseX, baseY, activeLoci, impulse }) => {
  // Skeleton maps Locus ID to coordinates relative to Body Origin
  const skeletonMap: Record<string, { cx: number, cy: number }> = {
    'head': { cx: 0, cy: -70 },
    'cervical-spine': { cx: 0, cy: -50 },
    'shoulder': { cx: -35, cy: -40 },
    'shoulder-right': { cx: 35, cy: -40 }, // Using symmetric pairs where needed
    'spine': { cx: 0, cy: -10 },
    'pelvis': { cx: 0, cy: 15 },
    'wrist': { cx: -60, cy: 0 },
    'wrist-right': { cx: 60, cy: 0 },
  };

  const isTremor = impulse === 'GLITCH';

  return (
    <g className="body-figure" transform={`translate(${baseX}, ${baseY})`}>
      {/* Head */}
      <circle cx={skeletonMap['head'].cx} cy={skeletonMap['head'].cy} r={18} fill="none" stroke="#111111" strokeWidth={1.5} />
      
      {/* Spine Axis */}
      <line x1={0} y1={-52} x2={0} y2={40} stroke="#E6461A" strokeWidth={1.5} strokeDasharray="3,3" />
      
      {/* Shoulders */}
      <line x1={-35} y1={-40} x2={35} y2={-40} stroke="#111111" strokeWidth={2.5} />
      
      {/* Arms holding horizontal bar */}
      <line x1={-35} y1={-40} x2={-60} y2={0} stroke="#111111" strokeWidth={2} />
      <line x1={35} y1={-40} x2={60} y2={0} stroke="#111111" strokeWidth={2} />
      
      {/* Pelvis & Legs */}
      <line x1={-20} y1={20} x2={20} y2={20} stroke="#111111" strokeWidth={2} />
      <line x1={-12} y1={20} x2={-15} y2={80} stroke="#111111" strokeWidth={2} />
      <line x1={12} y1={20} x2={15} y2={80} stroke="#111111" strokeWidth={2} />

      {/* Map Active Loci */}
      {activeLoci.includes('spine') && <BodyLocus cx={skeletonMap['spine'].cx} cy={skeletonMap['spine'].cy} status="locked" label="SPINE" />}
      {activeLoci.includes('pelvis') && <BodyLocus cx={skeletonMap['pelvis'].cx} cy={skeletonMap['pelvis'].cy} status="locked" label="PELVIS" />}
      
      {/* Split loci for symmetric joints based on tremor vs locked */}
      {activeLoci.includes('shoulder') && (
        <>
          <BodyLocus cx={skeletonMap['shoulder'].cx} cy={skeletonMap['shoulder'].cy} status={isTremor ? 'tremor' : 'locked'} label="SHOULDER" showLabel={true} />
          <BodyLocus cx={skeletonMap['shoulder-right'].cx} cy={skeletonMap['shoulder-right'].cy} status={isTremor ? 'tremor' : 'locked'} />
        </>
      )}
      
      {activeLoci.includes('wrist') && (
        <>
          <BodyLocus cx={skeletonMap['wrist'].cx} cy={skeletonMap['wrist'].cy} status={isTremor ? 'tremor' : 'locked'} label="WRIST" showLabel={true} />
          <BodyLocus cx={skeletonMap['wrist-right'].cx} cy={skeletonMap['wrist-right'].cy} status={isTremor ? 'tremor' : 'locked'} />
        </>
      )}
      
    </g>
  );
};
