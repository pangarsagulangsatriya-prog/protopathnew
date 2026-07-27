import React from 'react';
import { PressureFieldModel } from '../model/types';

interface PressureFieldProps {
  field: PressureFieldModel;
  baseX: number;
  baseY: number;
}

export const PressureField: React.FC<PressureFieldProps> = ({ field, baseX, baseY }) => {
  // Map spatial extent to simple rect bounds relative to the conflict point
  return (
    <g className="pressure-field">
      <rect
        x={baseX - 90}
        y={baseY - 80}
        width={180}
        height={160}
        fill="url(#pressureHatch)"
        opacity={0.6}
      />
      <text
        x={baseX}
        y={baseY + 95}
        fontFamily="monospace"
        fontSize={9}
        fontWeight={700}
        fill="#E6461A"
        textAnchor="middle"
      >
        PRESSURE FIELD
      </text>
    </g>
  );
};
