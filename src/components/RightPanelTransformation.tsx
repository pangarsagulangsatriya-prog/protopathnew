/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { UrbanDataPoint } from '../types';
import { Network, ArrowDown, Activity, ChevronRight, Binary } from 'lucide-react';

interface RightPanelTransformationProps {
  activePoint: UrbanDataPoint | null;
}

export const RightPanelTransformation: React.FC<RightPanelTransformationProps> = ({ activePoint }) => {
  if (!activePoint) {
    return (
      <div className="w-full h-full flex flex-col bg-brand-card overflow-hidden font-mono text-center select-none">
        <div className="px-3 py-2 bg-brand-dark text-brand-card text-[11px] font-bold tracking-widest flex items-center gap-2 uppercase">
          <Network className="w-3.5 h-3.5" />
          <span>TRANSFORMATION SCORE</span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-brand-dark/40 gap-2 bg-brand-secondary/10">
          <Binary className="w-7 h-7 animate-pulse text-brand-dark" />
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark">AWAITING STAGE PULSE</p>
          <p className="text-[9px] leading-relaxed max-w-[180px]">
            Click an object on stage or press PLAY IMPULSE to run the translation machine.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col bg-brand-card overflow-hidden font-mono">
      {/* Header Panel */}
      <div className="px-3 py-2 bg-brand-dark text-brand-card text-[11px] font-bold tracking-widest flex items-center justify-between select-none uppercase">
        <div className="flex items-center gap-2">
          <Network className="w-3.5 h-3.5" />
          <span>TRANSFORMATION SCORE</span>
        </div>
        <span className="text-[8.5px] bg-brand-card text-brand-dark px-1 font-bold border border-brand-dark/15">
          {activePoint.id}
        </span>
      </div>

      <div className="px-3 py-1.5 border-b border-brand-dark bg-brand-secondary/45 flex justify-between items-center text-[9px] text-brand-dark/60 select-none">
        <span>TRANSLATION RESOLVER</span>
        <span className="font-bold text-brand-dark uppercase">{activePoint.impulse} MODE</span>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-2.5 flex flex-col gap-2.5 select-none scrollbar-thin">
        
        {/* Step 1: DATA PROVOCATION */}
        <div className="border border-brand-dark bg-brand-card p-2.5 flex flex-col">
          <div className="flex justify-between items-center border-b border-brand-dark/10 pb-1 mb-1">
            <span className="text-[8.5px] font-bold tracking-widest uppercase text-brand-dark">
              1. DATA PROVOCATION
            </span>
            <span className="text-[8px] text-brand-dark/40 font-bold">[{activePoint.id}]</span>
          </div>
          <div className="text-[9px] leading-relaxed text-brand-dark/85">
            <div><span className="font-semibold text-brand-dark">source</span>=Mapillary</div>
            <div><span className="font-semibold text-brand-dark">type</span>=feature</div>
            <div><span className="font-semibold text-brand-dark">distance</span>=±{activePoint.distance}m</div>
            <div><span className="font-semibold text-brand-dark">feature</span>={activePoint.taxonomy.toLowerCase().replace('_object', '')}</div>
            <div><span className="font-semibold text-brand-dark">value</span>=&quot;{activePoint.featureValue}&quot;</div>
          </div>
        </div>

        <div className="flex justify-center -my-1">
          <ArrowDown className="w-3.5 h-3.5 text-brand-dark animate-bounce" />
        </div>

        {/* Step 2: OBJECT TRANSLATION */}
        <div className="border border-brand-dark bg-brand-card p-2.5 flex flex-col">
          <div className="flex justify-between items-center border-b border-brand-dark/10 pb-1 mb-1">
            <span className="text-[8.5px] font-bold tracking-widest uppercase text-brand-dark">
              2. OBJECT TRANSLATION
            </span>
            <span className="text-[8px] text-brand-dark/40 font-bold">[TAXONOMY_TRANSFORM]</span>
          </div>
          <div className="text-[10px] font-bold text-brand-dark mb-0.5">
            [{activePoint.taxonomy}]
          </div>
          <div className="text-[9px] leading-relaxed text-brand-dark/60">
            {activePoint.taxonomy === 'SOLID_MASS_OBJECT' && 'solid structural volume / height impediment / physical pressure'}
            {activePoint.taxonomy === 'TEXTURE_OBJECT' && 'ground plane transition / material friction / foot-strike alteration'}
            {activePoint.taxonomy === 'GROUND_TEXTURE_OBJECT' && 'unstable floor surface / slip-potential vector / posture hazard'}
            {activePoint.taxonomy === 'REGULATORY_OBJECT' && 'authority vector / prohibition marker / directional command'}
            {activePoint.taxonomy === 'SEMANTIC_OBJECT' && 'visual advertiser / commercial noise / ocular gaze driver'}
            {activePoint.taxonomy === 'MARKER_OBJECT' && 'origin or contact terminal axis anchor'}
          </div>
        </div>

        <div className="flex justify-center -my-1">
          <ArrowDown className="w-3.5 h-3.5 text-brand-dark" />
        </div>

        {/* Step 3: SITUATION */}
        <div className="border border-brand-dark bg-brand-card p-2.5 flex flex-col">
          <div className="flex justify-between items-center border-b border-brand-dark/10 pb-1 mb-1">
            <span className="text-[8.5px] font-bold tracking-widest uppercase text-brand-dark">
              3. SITUATION
            </span>
            <span className="text-[8px] text-brand-dark/40 font-bold">[SPATIAL_PRESSURE]</span>
          </div>
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[8px] bg-brand-dark text-brand-card px-1 font-bold">
              [ST.{activePoint.id.replace('DP.', '')}]
            </span>
            <span className="text-[10px] font-bold text-brand-dark">
              [{activePoint.situation}]
            </span>
          </div>
          <div className="text-[9px] leading-relaxed text-brand-dark/70">
            {activePoint.situationDesc}
          </div>
        </div>

        <div className="flex justify-center -my-1">
          <ArrowDown className="w-3.5 h-3.5 text-brand-dark" />
        </div>

        {/* Step 4: BODY IMPULSE */}
        <div className="border border-brand-dark bg-brand-card p-2.5 flex flex-col">
          <div className="flex justify-between items-center border-b border-brand-dark/10 pb-1 mb-1">
            <span className="text-[8.5px] font-bold tracking-widest uppercase text-brand-dark">
              4. BODY IMPULSE
            </span>
            <span className="text-[8px] text-brand-dark/40 font-bold">[PHYSICAL_RESPONSE]</span>
          </div>
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[8px] bg-brand-dark text-brand-card px-1 font-bold">
              [BI.{activePoint.id.replace('DP.', '')}]
            </span>
            <span className="text-[10px] font-bold text-brand-dark">
              [{activePoint.impulse}]
            </span>
          </div>
          <div className="text-[9px] leading-relaxed text-brand-dark/70 italic">
            {activePoint.bodyAction}
          </div>
          <div className="mt-1.5 text-[7.5px] text-brand-dark/40 font-bold uppercase">
            Body Locus: {activePoint.bodyLocus}
          </div>
        </div>

        <div className="flex justify-center -my-1">
          <ArrowDown className="w-3.5 h-3.5 text-brand-dark animate-pulse" />
        </div>

        {/* Step 5: SPATIAL OUTPUT */}
        <div className="border border-brand-dark bg-brand-dark text-brand-card p-2.5 flex flex-col">
          <div className="flex justify-between items-center border-b border-brand-card/10 pb-1 mb-1">
            <span className="text-[8.5px] font-bold tracking-widest uppercase text-brand-card">
              5. SPATIAL OUTPUT
            </span>
            <span className="text-[8px] text-brand-card/40 font-bold">[RESIDUE_STATE]</span>
          </div>
          <div className="flex items-center gap-1 mb-1.5">
            <Activity className="w-3 h-3 text-brand-card shrink-0" />
            <span className="text-[9.5px] font-bold uppercase tracking-wider text-brand-card">
              {activePoint.spatialOutput}
            </span>
          </div>
          <div className="text-[8px] font-mono text-brand-card/50 leading-tight">
            // METRIC DETECTED: POSTURE_VARIANCE_CRITICAL
            <br />
            // AXIAL ALIGNMENT LOCKED: TRUE
          </div>
        </div>

      </div>
    </div>
  );
};
