import React from 'react';
import { StageNotationModel } from '../../notation/model/types';
import { TransformationStep } from './TransformationStepRail';
import { StageNotationCanvas } from '../../notation/StageNotationCanvas';

interface ActionViewCanvasProps {
  model: StageNotationModel;
  activeStep: TransformationStep;
}

export const ActionViewCanvas: React.FC<ActionViewCanvasProps> = ({
  model,
  activeStep,
}) => {
  return (
    <div className="w-full h-full relative flex flex-col">
      {/* SVG Background Layer */}
      <div className="absolute inset-0 z-0">
        <StageNotationCanvas model={model} activeStep={activeStep} mode="action" />
      </div>

      {/* HTML Fast-Read Overlay (Left) */}
      <div className="absolute top-4 left-4 z-10 w-64 flex flex-col gap-2 pointer-events-none">
        <div className="bg-[#FFFFFF] border border-[#111111] p-3 shadow-sm pointer-events-auto">
          <div className="font-mono text-[9px] font-bold text-[#505050] uppercase mb-1">Situation</div>
          <div className="font-sans text-sm font-semibold leading-tight text-[#111111]">{model.sourceState.featureType} interruption</div>
        </div>
        
        <div className="bg-[#FFFFFF] border border-[#111111] p-3 shadow-sm pointer-events-auto">
          <div className="font-mono text-[9px] font-bold text-[#505050] uppercase mb-1">Body Impulse</div>
          <div className="font-sans text-sm font-bold text-[#E6461A] leading-tight">{model.performer.bodyImpulse} RESPONSE</div>
        </div>
      </div>

      {/* HTML Fast-Read Overlay (Right) */}
      <div className="absolute bottom-4 right-4 z-10 w-72 flex flex-col gap-2 pointer-events-none">
        <div className="bg-[#111111] text-[#F7F7F3] border border-[#111111] p-4 shadow-sm pointer-events-auto">
          <div className="font-mono text-[9px] font-bold text-[#A0A09A] uppercase mb-1">Output State</div>
          <div className="font-sans text-lg font-bold leading-tight">{model.spatialOutput.label.toUpperCase()}</div>
          <div className="mt-2 font-mono text-[10px] text-[#A0A09A]">
            RESIDUAL: {model.residuals.map(r => r.description).join(', ').toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};
