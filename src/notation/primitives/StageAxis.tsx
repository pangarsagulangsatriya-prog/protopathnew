import React from 'react';
import { StageNode } from '../model/types';

interface StageAxisProps {
  lengthMeters: number;
  nodes: StageNode[];
  state: 'active' | 'blocked' | 'locked' | 'residual';
}

export const StageAxis: React.FC<StageAxisProps> = ({
  lengthMeters,
  nodes,
  state,
}) => {
  // We'll map 1 meter = 40 SVG units
  const scale = 40;
  const pixelLength = lengthMeters * scale;

  return (
    <g className="stage-axis">
      {/* Primary Axis Line */}
      <line
        x1={0}
        y1={0}
        x2={pixelLength}
        y2={0}
        stroke={state === 'locked' ? '#E6461A' : '#111111'}
        strokeWidth={state === 'active' ? 2.5 : 4}
        strokeDasharray={state === 'residual' ? '8,4' : 'none'}
      />

      {/* Measurement Ticks */}
      {Array.from({ length: Math.ceil(lengthMeters) + 1 }).map((_, i) => (
        <g key={`tick-${i}`} transform={`translate(${i * scale}, 0)`}>
          <line x1={0} y1={-4} x2={0} y2={4} stroke="#111111" strokeWidth={1} opacity={0.5} />
          {i % 5 === 0 && (
            <text y={15} fontFamily="monospace" fontSize={8} fill="#505050" textAnchor="middle">
              {i}m
            </text>
          )}
        </g>
      ))}

      {/* Nodes */}
      {nodes.map(node => (
        <g key={node.id} transform={`translate(${node.distanceMeters * scale}, 0)`}>
          <rect x={-8} y={-8} width={16} height={16} fill="#111111" />
          <text y={-15} fontFamily="monospace" fontSize={10} fontWeight={900} fill="#111111" textAnchor="middle">
            {node.label}
          </text>
        </g>
      ))}
    </g>
  );
};
