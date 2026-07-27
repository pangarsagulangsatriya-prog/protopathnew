import React from 'react';

interface BodyLocusProps {
  cx: number;
  cy: number;
  status: 'locked' | 'active' | 'latent' | 'tremor';
  label?: string;
  showLabel?: boolean;
}

export const BodyLocus: React.FC<BodyLocusProps> = ({ cx, cy, status, label, showLabel }) => {
  return (
    <g className={`body-locus ${status}`} transform={`translate(${cx}, ${cy})`}>
      {/* Base Marker */}
      <circle cx={0} cy={0} r={4} fill="#E6461A" />
      
      {/* Status Grammar Rings */}
      {status === 'locked' && (
        <circle cx={0} cy={0} r={8} fill="#E6461A" opacity={0.3} />
      )}
      
      {status === 'tremor' && (
        <>
          <circle cx={0} cy={0} r={10} fill="none" stroke="#E6461A" strokeWidth={1.5} strokeDasharray="2,2" />
          <circle cx={0} cy={0} r={14} fill="none" stroke="#E6461A" strokeWidth={1} strokeDasharray="2,2" opacity={0.6} />
        </>
      )}

      {showLabel && label && (
        <text
          x={-15}
          y={status === 'tremor' ? -20 : -10}
          fontFamily="monospace"
          fontSize={8}
          fontWeight={900}
          fill="#E6461A"
          textAnchor="end"
        >
          {label}
        </text>
      )}
    </g>
  );
};
