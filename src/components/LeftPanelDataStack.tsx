/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { UrbanDataPoint } from '../types';
import { Layers, Database, Compass } from 'lucide-react';

interface LeftPanelDataStackProps {
  dataPoints: UrbanDataPoint[];
  selectedPointId: string | null;
  activePointId: string | null;
  onPointSelect: (point: UrbanDataPoint) => void;
}

export const LeftPanelDataStack: React.FC<LeftPanelDataStackProps> = ({
  dataPoints,
  selectedPointId,
  activePointId,
  onPointSelect,
}) => {
  return (
    <div className="w-full h-full flex flex-col bg-brand-card overflow-hidden font-mono">
      {/* Header Panel */}
      <div className="px-3 py-2 bg-brand-dark text-brand-card text-[11px] font-bold tracking-widest flex items-center gap-2 select-none uppercase">
        <Database className="w-3.5 h-3.5" />
        <span>DATA STACK [PROVOCATION]</span>
      </div>

      <div className="px-3 py-1.5 border-b border-brand-dark bg-brand-secondary/45 flex justify-between items-center text-[9px] text-brand-dark/60">
        <span>SOURCE: MAPILLARY</span>
        <span className="font-bold text-brand-dark bg-brand-card px-1 border border-brand-dark">[10 POINTS]</span>
      </div>

      {/* List Container */}
      <div className="flex-1 overflow-y-auto divide-y divide-brand-dark/10 select-none">
        {dataPoints.map((pt) => {
          const isSelected = selectedPointId === pt.id;
          const isActive = activePointId === pt.id;

          return (
            <div
              key={pt.id}
              onClick={() => onPointSelect(pt)}
              className={`p-2.5 text-left transition-all duration-150 cursor-pointer ${
                isSelected 
                  ? 'bg-brand-dark text-brand-card' 
                  : isActive
                  ? 'bg-brand-secondary/60 border-l-4 border-brand-dark'
                  : 'hover:bg-brand-secondary/30'
              }`}
            >
              <div className="flex justify-between items-center mb-0.5">
                <span className={`text-[9px] font-bold ${isSelected ? 'text-brand-card' : 'text-brand-dark bg-brand-secondary px-1 border border-brand-dark/10'}`}>
                  [{pt.id}]
                </span>
                <span className={`text-[9px] ${isSelected ? 'text-brand-card/70' : 'text-brand-dark/50'}`}>
                  ±{pt.distance}m
                </span>
              </div>

              <div className={`text-[11px] truncate font-bold uppercase tracking-wider ${isSelected ? 'text-brand-card' : 'text-brand-dark'}`}>
                {pt.featureValue}
              </div>

              <div className="mt-1.5 flex flex-col gap-0.5 text-[8.5px] leading-tight">
                <div className={`flex items-center gap-1 ${isSelected ? 'text-brand-card/70' : 'text-brand-dark/60'}`}>
                  <Layers className="w-2.5 h-2.5 shrink-0" />
                  <span className="truncate">{pt.taxonomy}</span>
                </div>
                <div className={`flex items-center gap-1 ${isSelected ? 'text-brand-card/70' : 'text-brand-dark/60'}`}>
                  <Compass className="w-2.5 h-2.5 shrink-0" />
                  <span className="truncate">SITUATION: [{pt.situation}]</span>
                </div>
              </div>

              {/* Action and Impulse Highlight */}
              <div className="mt-1.5 flex justify-between items-center pt-1 border-t border-dashed border-brand-dark/10">
                <span className={`text-[8px] uppercase tracking-wider px-1 py-0.5 font-bold ${
                  isSelected 
                    ? 'bg-brand-card text-brand-dark' 
                    : 'bg-brand-dark text-brand-card'
                }`}>
                  {pt.impulse}
                </span>
                {isActive && (
                  <span className="animate-pulse text-[8px] bg-red-100 text-red-800 border border-red-300 px-1 font-bold uppercase">
                    ACTIVE PULSE
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
