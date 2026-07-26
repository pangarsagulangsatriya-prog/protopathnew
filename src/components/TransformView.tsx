/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { UrbanDataPoint } from '../types';
import { ArrowRight, Cpu, Layers, HelpCircle, Activity, ShieldCheck } from 'lucide-react';

interface TransformViewProps {
  activePoint: UrbanDataPoint | null;
  dataPoints: UrbanDataPoint[];
  onPointSelect: (point: UrbanDataPoint) => void;
}

export const TransformView: React.FC<TransformViewProps> = ({
  activePoint,
  dataPoints,
  onPointSelect,
}) => {
  return (
    <div className="w-full h-full flex flex-col bg-brand-card border border-brand-dark p-3 font-mono select-none overflow-y-auto scrollbar-thin">
      <div className="flex justify-between items-center border-b border-brand-dark pb-1.5 mb-3">
        <span className="text-[11px] font-bold tracking-widest text-brand-dark flex items-center gap-1.5 uppercase">
          <Cpu className="w-4 h-4" />
          <span>TRANSLATION RESOLVER PIPELINE</span>
        </span>
        <span className="text-[9px] text-brand-dark/50 font-bold">
          MODE: [MATRIX_TRANSLATION]
        </span>
      </div>

      <p className="text-[9.5px] text-brand-dark/60 leading-relaxed mb-3">
        Select any raw urban data node below to inspect its step-by-step spatial score translation:
      </p>

      {/* Selectable nodes grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 mb-4">
        {dataPoints.map((pt) => {
          const isSelected = activePoint?.id === pt.id;
          return (
            <button
              key={pt.id}
              onClick={() => onPointSelect(pt)}
              className={`p-1.5 border text-left flex flex-col justify-between h-12 transition-all duration-150 cursor-pointer ${
                isSelected 
                  ? 'bg-brand-dark text-brand-card border-brand-dark scale-[1.01]' 
                  : 'bg-brand-card text-brand-dark border-brand-dark/15 hover:border-brand-dark'
              }`}
            >
              <span className="text-[8.5px] font-bold">[{pt.id}]</span>
              <span className="text-[8.5px] truncate uppercase tracking-tight">{pt.featureValue}</span>
            </button>
          );
        })}
      </div>

      {activePoint ? (
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-3 p-3 border border-brand-dark bg-brand-secondary/35">
          
          {/* Card 1: Raw Data */}
          <div className="w-full lg:w-[18%] bg-brand-card border border-brand-dark p-2.5 h-48 flex flex-col justify-between">
            <div>
              <div className="text-[8.5px] text-brand-dark/40 font-bold border-b border-brand-dark/10 pb-1 mb-1.5 uppercase">
                [01. DATA POINT]
              </div>
              <div className="text-[11px] font-bold text-brand-dark mb-0.5">
                {activePoint.id}
              </div>
              <div className="text-[9px] text-brand-dark/50 font-bold">
                ±{activePoint.distance}m
              </div>
              <div className="text-[8.5px] text-brand-dark/50 italic mt-1.5 leading-snug">
                Raw Mapillary vector trace detected.
              </div>
            </div>
            <div className="text-[8px] bg-brand-dark text-brand-card p-1 text-center font-bold uppercase truncate">
              {activePoint.featureValue}
            </div>
          </div>

          <ArrowRight className="w-4 h-4 text-brand-dark shrink-0 hidden lg:block rotate-90 lg:rotate-0" />

          {/* Card 2: Object Taxonomy */}
          <div className="w-full lg:w-[18%] bg-brand-card border border-brand-dark p-2.5 h-48 flex flex-col justify-between">
            <div>
              <div className="text-[8.5px] text-brand-dark/40 font-bold border-b border-brand-dark/10 pb-1 mb-1.5 uppercase">
                [02. TAXONOMY]
              </div>
              <div className="text-[10px] font-bold text-brand-dark mb-0.5 leading-tight truncate">
                {activePoint.taxonomy.replace('_OBJECT', '')}
              </div>
              <div className="text-[8.5px] text-brand-dark/60 leading-tight mt-1">
                {activePoint.taxonomy === 'SOLID_MASS_OBJECT' && 'Solid barriers that constrain the available walkway corridor width.'}
                {activePoint.taxonomy === 'TEXTURE_OBJECT' && 'Surface disruptions that create mechanical friction.'}
                {activePoint.taxonomy === 'GROUND_TEXTURE_OBJECT' && 'Unstable footing objects like manholes.'}
                {activePoint.taxonomy === 'REGULATORY_OBJECT' && 'Official signs exerting authority limits.'}
                {activePoint.taxonomy === 'SEMANTIC_OBJECT' && 'Visual billboards capturing gaze focus.'}
                {activePoint.taxonomy === 'MARKER_OBJECT' && 'Stage terminal coordinate anchoring.'}
              </div>
            </div>
            <div className="text-[8px] border border-brand-dark/20 p-1 text-center font-bold flex items-center justify-center gap-1 uppercase">
              <Layers className="w-2.5 h-2.5" />
              STAGE OBJECT
            </div>
          </div>

          <ArrowRight className="w-4 h-4 text-brand-dark shrink-0 hidden lg:block rotate-90 lg:rotate-0" />

          {/* Card 3: Situation */}
          <div className="w-full lg:w-[18%] bg-brand-card border border-brand-dark p-2.5 h-48 flex flex-col justify-between">
            <div>
              <div className="text-[8.5px] text-brand-dark/40 font-bold border-b border-brand-dark/10 pb-1 mb-1.5 uppercase">
                [03. SITUATION]
              </div>
              <div className="text-[10px] font-bold text-brand-dark mb-0.5 truncate leading-tight">
                {activePoint.situation}
              </div>
              <p className="text-[8.5px] leading-snug text-brand-dark/70 mt-1">
                {activePoint.situationDesc}
              </p>
            </div>
            <div className="text-[8px] border border-brand-dark/20 p-1 text-center font-bold flex items-center justify-center gap-1 uppercase">
              <HelpCircle className="w-2.5 h-2.5" />
              PRESSURE TYPE
            </div>
          </div>

          <ArrowRight className="w-4 h-4 text-brand-dark shrink-0 hidden lg:block rotate-90 lg:rotate-0" />

          {/* Card 4: Body Impulse */}
          <div className="w-full lg:w-[18%] bg-brand-card border border-brand-dark p-2.5 h-48 flex flex-col justify-between">
            <div>
              <div className="text-[8.5px] text-brand-dark/40 font-bold border-b border-brand-dark/10 pb-1 mb-1.5 uppercase">
                [04. BODY IMPULSE]
              </div>
              <div className="text-[10px] font-bold text-brand-dark mb-0.5 truncate leading-tight">
                {activePoint.impulse}
              </div>
              <p className="text-[8.5px] leading-snug text-brand-dark/70 mt-1 italic">
                {activePoint.bodyAction}
              </p>
            </div>
            <div className="text-[8px] border border-brand-dark/20 p-1 text-center font-bold flex items-center justify-center gap-1 uppercase">
              <Activity className="w-2.5 h-2.5" />
              PHYSICAL STIMULUS
            </div>
          </div>

          <ArrowRight className="w-4 h-4 text-brand-dark shrink-0 hidden lg:block rotate-90 lg:rotate-0" />

          {/* Card 5: Spatial Output */}
          <div className="w-full lg:w-[18%] bg-brand-dark text-brand-card p-2.5 h-48 flex flex-col justify-between">
            <div>
              <div className="text-[8.5px] text-brand-card/40 font-bold border-b border-brand-card/10 pb-1 mb-1.5 uppercase">
                [05. RESIDUE]
              </div>
              <div className="text-[10px] font-bold text-brand-card mb-0.5 leading-snug">
                {activePoint.spatialOutput}
              </div>
              <div className="text-[7.5px] text-brand-card/50 font-mono mt-1.5 leading-tight">
                // STABILITY: VERIFIED
                <br />
                // POSITION: ACCORD
              </div>
            </div>
            <div className="text-[8px] bg-brand-card text-brand-dark p-1 text-center font-bold flex items-center justify-center gap-1 uppercase">
              <ShieldCheck className="w-2.5 h-2.5" />
              OUTPUT STATE
            </div>
          </div>

        </div>
      ) : (
        <div className="flex-1 border border-brand-dark border-dashed flex flex-col items-center justify-center p-8 text-brand-dark/40 text-[10px] uppercase font-bold tracking-wider">
          Select an urban node to execute the translation.
        </div>
      )}
    </div>
  );
};
