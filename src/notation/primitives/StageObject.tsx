import React from 'react';
import { StageObject as StageObjectModel } from '../model/types';

interface StageObjectProps {
  object: StageObjectModel;
  scale: number;
}

export const StageObject: React.FC<StageObjectProps> = ({ object, scale }) => {
  const px = object.distanceMeters !== undefined ? object.distanceMeters * scale : 0;

  switch (object.category) {
    case 'LINEAR_OBJECT':
      return (
        <g className="stage-object linear" transform={`translate(${px}, 0)`}>
          {/* Typically spans the axis, drawn in StageAxis for the primary path, but if isolated: */}
          <line x1={0} y1={-6} x2={100} y2={-6} stroke="#111111" strokeWidth={1} />
          <line x1={0} y1={6} x2={100} y2={6} stroke="#111111" strokeWidth={1} />
        </g>
      );
    case 'REGULATORY_OBJECT':
      return (
        <g className="stage-object regulatory" transform={`translate(${px}, 0)`}>
          <circle cx={40} cy={0} r={12} fill="#FFFFFF" stroke="#E6461A" strokeWidth={2.5} />
          <text x={40} y={4} fontFamily="monospace" fontSize={12} fontWeight={900} fill="#E6461A" textAnchor="middle">
            R
          </text>
          <text x={40} y={-20} fontFamily="monospace" fontSize={9} fontWeight={800} fill="#E6461A" textAnchor="middle">
            REGULATORY OBJECT
          </text>
        </g>
      );
    case 'SOLID_MASS_OBJECT':
      return (
        <g className="stage-object solid-mass" transform={`translate(${px}, 0)`}>
          <rect x={-20} y={-20} width={40} height={40} fill="#111111" />
          <text x={0} y={-25} fontFamily="monospace" fontSize={9} fontWeight={800} fill="#111111" textAnchor="middle">
            SOLID MASS
          </text>
        </g>
      );
    case 'UNDECLARED_OBJECT':
    default:
      return (
        <g className="stage-object fallback" transform={`translate(${px}, 0)`}>
          <rect x={-15} y={-15} width={30} height={30} fill="none" stroke="#E6461A" strokeWidth={1.5} strokeDasharray="2,2" />
          <text x={0} y={4} fontFamily="monospace" fontSize={10} fontWeight={900} fill="#E6461A" textAnchor="middle">
            ?
          </text>
          <text x={0} y={-20} fontFamily="monospace" fontSize={8} fontWeight={700} fill="#E6461A" textAnchor="middle">
            UNDECLARED: {object.label}
          </text>
        </g>
      );
  }
};
