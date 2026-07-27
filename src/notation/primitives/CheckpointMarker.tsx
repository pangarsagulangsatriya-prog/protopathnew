import React from 'react';

interface CheckpointMarkerProps {
  distanceMeters: number | null;
  label: string;
  scale: number;
}

export const CheckpointMarker: React.FC<CheckpointMarkerProps> = ({
  distanceMeters,
  label,
  scale,
}) => {
  if (distanceMeters === null) {
    // Render Unresolved Checkpoint Marker
    return (
      <g className="checkpoint-marker unresolved">
        <circle cx={0} cy={0} r={12} fill="none" stroke="#E6461A" strokeWidth={1.5} strokeDasharray="3,3" />
        <text y={25} fontFamily="monospace" fontSize={9} fill="#E6461A" textAnchor="middle" fontWeight={800}>
          UNRESOLVED POSITION
        </text>
      </g>
    );
  }

  const px = distanceMeters * scale;

  return (
    <g className="checkpoint-marker" transform={`translate(${px}, 0)`}>
      <line x1={0} y1={-120} x2={0} y2={120} stroke="#111111" strokeWidth={1} strokeDasharray="3,3" />
      <circle cx={0} cy={0} r={8} fill="#FFFFFF" stroke="#111111" strokeWidth={2} />
      <text y={-130} fontFamily="monospace" fontSize={10} fontWeight={800} fill="#111111" textAnchor="middle">
        CHECKPOINT {label}
      </text>
    </g>
  );
};
