import React from 'react';
import { ForceVectorModel } from '../model/types';

interface ForceVectorProps {
  force: ForceVectorModel;
  baseX: number;
  baseY: number;
}

export const ForceVector: React.FC<ForceVectorProps> = ({ force, baseX, baseY }) => {
  const isDominant = force.strengthCategory === 'dominant';
  const color = isDominant ? '#E6461A' : '#111111';
  const strokeWidth = isDominant ? 3 : 2;
  const markerId = isDominant ? 'url(#arrowRed)' : 'url(#arrowBlack)';

  // Procedural mapping of text string direction to vectors relative to base coordinate.
  // In a full implementation, we'd use angles, but we map simple strings for the P2 engine.
  let x1 = baseX;
  let y1 = baseY;
  let x2 = baseX;
  let y2 = baseY;

  if (force.direction === 'forward') {
    x1 = baseX - 150;
    x2 = baseX + 30; // Points forward (rightward in SVG)
    y1 = baseY + 35;
    y2 = baseY + 35;
  } else if (force.direction === 'perpendicular-right') {
    x1 = baseX + 100;
    x2 = baseX + 25; // Points inward from the right
    y1 = baseY;
    y2 = baseY;
  }

  return (
    <g className="force-vector">
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={strokeWidth} markerEnd={markerId} />
      
      {/* Label placed roughly midway */}
      <text
        x={(x1 + x2) / 2}
        y={y1 - 10}
        fontFamily="monospace"
        fontSize={10}
        fontWeight={800}
        fill={color}
        textAnchor="middle"
      >
        {force.relation.toUpperCase()} ({force.strengthCategory.toUpperCase()})
      </text>

      {/* Blocked / Conflict visual */}
      {force.blocked && (
        <g transform={`translate(${x2 + 10}, ${y2})`}>
          <line x1={0} y1={-15} x2={0} y2={15} stroke={color} strokeWidth={3} />
        </g>
      )}
    </g>
  );
};
