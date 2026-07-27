import React from 'react';
import { TransformationStep } from './TransformationStepRail';
import { StageNotationCanvas } from '../../notation/StageNotationCanvas';
import { buildStageNotationModel } from '../../notation/model/builder';
import { NotationPair, DiagramAsset, ProtoPathDatabase } from '../../domain/types';
import { Maximize2, AlertTriangle } from 'lucide-react';

interface PerformanceCanvasProps {
  activeStep: TransformationStep;
  pair: NotationPair;
  diagramAsset?: DiagramAsset;
  db: ProtoPathDatabase;
}

export const PerformanceCanvas: React.FC<PerformanceCanvasProps> = ({
  activeStep,
  pair,
  diagramAsset,
  db,
}) => {
  const hasMismatch = diagramAsset?.status === 'content-mismatch-review-required';
  const notationModel = buildStageNotationModel(db, pair.id);

  return (
    <div className="w-full h-full bg-[#F7F7F3] border border-[#111111] overflow-hidden relative flex flex-col font-sans select-none shadow-sm">
      {/* Optional Top Overlay / Canvas Tools */}
      <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
        <button className="p-1.5 bg-[#FFFFFF] border border-[#111111] hover:bg-[#EFEFEB] hover:text-[#E6461A] transition-colors cursor-pointer" title="Expand Canvas">
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {hasMismatch && (
        <div className="absolute top-2 left-2 z-10 bg-amber-100 border border-amber-500 text-amber-900 px-3 py-1.5 flex items-start gap-2 text-[10px] font-mono shadow-md max-w-[280px]">
          <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" />
          <div className="font-bold">CONTENT MISMATCH REVIEW REQUIRED</div>
        </div>
      )}

      <div className="flex-1 w-full h-full flex items-center justify-center p-4">
        <StageNotationCanvas model={notationModel} activeStep={activeStep} mode="full-board" />
      </div>
    </div>
  );
};
