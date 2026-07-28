import React from 'react';
import { StageNotationModel } from '../../notation/model/types';
import { StageNotationCanvas } from '../../notation/StageNotationCanvas';

interface ForceRelationViewProps {
  model: StageNotationModel;
}

export const ForceRelationView: React.FC<ForceRelationViewProps> = ({ model }) => {
  return (
    <div className="w-full h-full flex bg-[#FFFFFF] border border-[#111111] overflow-hidden">
      
      {/* LEFT: Force Field (SVG Canvas) */}
      <div className="flex-1 bg-[#F7F7F3] border-r border-[#111111] relative overflow-hidden flex items-center justify-center p-4">
        {/* We can re-use StageNotationCanvas in forces mode, which focuses on the core area */}
        <StageNotationCanvas model={model} activeStep={undefined} mode="forces" />
        
        {/* Overlay Label */}
        <div className="absolute top-4 left-4 font-mono text-[10px] font-bold text-[#505050] uppercase">
          Force Field Mapping
        </div>
      </div>

      {/* RIGHT: Force Analysis Panel (HTML) */}
      <div className="w-[320px] shrink-0 flex flex-col overflow-y-auto">
        <div className="p-4 border-b border-[#111111] bg-[#111111] text-[#FFFFFF]">
          <div className="font-mono text-[10px] font-bold text-[#A0A09A] uppercase mb-1">Analytical View</div>
          <div className="font-sans text-sm font-bold uppercase">Force Relation Analysis</div>
        </div>

        <div className="p-4 flex-1 flex flex-col gap-6">
          
          {/* Active Vectors List */}
          <section>
            <h3 className="font-mono text-[10px] font-bold text-[#505050] uppercase mb-3 border-b border-[#E5E5E0] pb-1">
              Active Vectors
            </h3>
            <div className="flex flex-col gap-2">
              {model.forces.map(force => (
                <div key={force.id} className="p-2 border border-[#E5E5E0] bg-[#F7F7F3] flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase">{force.category}</span>
                    <span className="font-mono text-[9px] font-bold text-[#E6461A] bg-[#E6461A]/10 px-1">{force.magnitude}N</span>
                  </div>
                  <div className="font-sans text-xs text-[#111111]">{force.label}</div>
                  <div className="font-mono text-[9px] text-[#505050] mt-1 flex items-center gap-1">
                    <span>DIR:</span>
                    <span>X: {force.directionX}</span>
                    <span>Y: {force.directionY}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Torque / Body Loci Map */}
          <section>
            <h3 className="font-mono text-[10px] font-bold text-[#505050] uppercase mb-3 border-b border-[#E5E5E0] pb-1">
              Body Locus Tension Map
            </h3>
            <div className="flex flex-col gap-2">
              {model.performer.anatomicalLoci.map((locus, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#E6461A] shrink-0" />
                  <div>
                    <div className="font-mono text-[10px] font-bold uppercase text-[#111111]">{locus}</div>
                    <div className="font-sans text-[11px] text-[#505050] leading-tight mt-0.5">
                      {model.performer.bodyImpulse === 'GLITCH' 
                        ? 'Experiences uncorrected tremor drift from vector conflict.'
                        : 'Locked under tension holding conflicting vectors.'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Output Summary */}
          <section className="mt-auto pt-4 border-t border-[#111111]/20">
            <h3 className="font-mono text-[10px] font-bold text-[#505050] uppercase mb-2">
              Resultant Kinetic Quality
            </h3>
            <ul className="flex flex-col gap-1">
              {model.residuals.map((r, idx) => (
                <li key={idx} className="font-sans text-xs text-[#111111] font-semibold flex items-center gap-2">
                  <span className="text-[#E6461A]">■</span> {r.description}
                </li>
              ))}
            </ul>
          </section>

        </div>
      </div>

    </div>
  );
};
