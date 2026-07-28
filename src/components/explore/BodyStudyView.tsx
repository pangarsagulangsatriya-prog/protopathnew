import React from 'react';
import { StageNotationModel } from '../../notation/model/types';
import { HybridBodyFigure } from '../../notation/primitives/HybridBodyFigure';

interface BodyStudyViewProps {
  model: StageNotationModel;
}

export const BodyStudyView: React.FC<BodyStudyViewProps> = ({ model }) => {
  return (
    <div className="w-full h-full flex flex-col p-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="font-mono text-[10px] font-bold text-[#505050] uppercase">Anatomical Locus Study</div>
          <div className="font-sans text-lg font-bold text-[#111111] uppercase mt-1">
            ACTIVE LOCI: {model.performer.anatomicalLoci.join(' + ')}
          </div>
        </div>
        <div className="flex gap-2">
          {['ALL', 'SPINE', 'PELVIS', 'WRIST', 'SHOULDER'].map(locus => (
            <div 
              key={locus} 
              className={`px-2 py-1 border font-mono text-[9px] font-bold uppercase ${
                locus === 'ALL' || model.performer.anatomicalLoci.includes(locus.toLowerCase())
                  ? 'border-[#E6461A] text-[#E6461A] bg-[#E6461A]/10'
                  : 'border-[#E5E5E0] text-[#A0A09A]'
              }`}
            >
              {locus}
            </div>
          ))}
        </div>
      </div>

      {/* Main View Area */}
      <div className="flex-1 flex gap-4 border border-[#111111] bg-[#FFFFFF] p-4 relative overflow-hidden">
        
        {/* Left: Front / Oblique Elevation */}
        <div className="flex-1 border border-[#E5E5E0] relative flex flex-col">
          <div className="p-3 border-b border-[#E5E5E0] bg-[#F7F7F3]">
            <div className="font-mono text-[10px] font-bold text-[#505050] uppercase">Front / Three-Quarter Elevation</div>
          </div>
          <div className="flex-1 relative flex items-center justify-center">
            <svg viewBox="-200 -250 400 400" className="w-full h-full">
              <HybridBodyFigure 
                baseX={0} 
                baseY={0} 
                activeLoci={model.performer.anatomicalLoci} 
                impulse={model.performer.bodyImpulse}
                pose="front"
              />
            </svg>
          </div>
          <div className="p-3 border-t border-[#E5E5E0] bg-[#F7F7F3]">
            <div className="font-mono text-[10px] text-[#505050]">
              <span className="font-bold">Target Locus:</span> <span className="text-[#E6461A] font-bold">{model.performer.anatomicalLoci.join(', ')}</span>
            </div>
          </div>
        </div>

        {/* Right: Side Profile Elevation */}
        <div className="flex-1 border border-[#E5E5E0] relative flex flex-col">
          <div className="p-3 border-b border-[#E5E5E0] bg-[#F7F7F3]">
            <div className="font-mono text-[10px] font-bold text-[#505050] uppercase">Profile Side Elevation</div>
          </div>
          <div className="flex-1 relative flex items-center justify-center">
            <svg viewBox="-200 -250 400 400" className="w-full h-full">
              <HybridBodyFigure 
                baseX={0} 
                baseY={0} 
                activeLoci={model.performer.anatomicalLoci} 
                impulse={model.performer.bodyImpulse}
                pose="side"
              />
            </svg>
          </div>
          <div className="p-3 border-t border-[#E5E5E0] bg-[#F7F7F3]">
            <div className="font-mono text-[10px] text-[#505050]">
              <span className="font-bold">Kinetic Quality:</span> <span className="text-[#111111] font-bold">{model.residuals.map(r => r.description).join(', ')}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
