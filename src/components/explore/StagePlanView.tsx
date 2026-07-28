import React from 'react';
import { StageNotationModel } from '../../notation/model/types';
import { StageNotationCanvas } from '../../notation/StageNotationCanvas';
import { TransformationStep } from './TransformationStepRail';

interface StagePlanViewProps {
  model: StageNotationModel;
  activeStep: TransformationStep;
}

export const StagePlanView: React.FC<StagePlanViewProps> = ({ model, activeStep }) => {
  return (
    <div className="w-full h-full flex flex-col bg-[#FFFFFF] border border-[#111111] overflow-hidden p-6 animate-in fade-in duration-300">
      
      {/* Header Section */}
      <div className="flex flex-col gap-2 mb-4">
        <div className="flex items-center justify-between">
          <div className="bg-[#111111] text-[#FFFFFF] font-mono text-[9px] font-bold tracking-wider px-2 py-1 uppercase">
            SVG Stage Plan (Generated)
          </div>
          <div className="font-mono text-[10px] font-bold text-[#E6461A] uppercase">
            Checkpoint {model.checkpoint.distanceMeters} M
          </div>
        </div>
        <div className="font-sans text-lg font-bold text-[#111111] uppercase tracking-wide">
          Primary Stage Axis — Scale 1:1
        </div>
      </div>

      {/* SVG Canvas Area */}
      <div className="flex-1 bg-[#F7F7F3] border border-[#111111]/20 relative overflow-hidden flex items-center justify-center p-4">
        <StageNotationCanvas model={model} activeStep={activeStep} mode="stage" />
      </div>

      {/* Bottom Parameter Boxes */}
      <div className="flex gap-4 mt-4 h-[80px] shrink-0">
        
        {/* Axis Parameters */}
        <div className="flex-1 border border-[#111111] bg-[#F7F7F3] p-3 flex flex-col justify-center">
          <div className="font-mono text-[10px] font-bold text-[#505050] uppercase mb-1">
            Axis Parameters:
          </div>
          <div className="font-sans text-[11px] text-[#111111]">
            Length: {model.axis.lengthMeters}.00m | Primary Object: {model.axis.type === 'linear-bar' ? 'Linear Bar' : model.axis.type} | Anchor: Node A
          </div>
        </div>

        {/* Interruption Vector */}
        <div className="flex-[0.7] border border-[#111111] bg-[#F7F7F3] p-3 flex flex-col justify-center">
          <div className="font-mono text-[10px] font-bold text-[#505050] uppercase mb-1">
            Interruption Vector:
          </div>
          <div className="font-sans text-[11px] font-semibold text-[#E6461A]">
            {model.forces.find(f => f.category === 'AUTHORITY')?.label || 'None Active'}
          </div>
        </div>
        
      </div>
    </div>
  );
};
