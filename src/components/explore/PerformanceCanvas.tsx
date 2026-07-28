import React from 'react';
import { TransformationStep } from './TransformationStepRail';
import { StageNotationCanvas } from '../../notation/StageNotationCanvas';
import { ActionViewCanvas } from './ActionViewCanvas';
import { BodyStudyView } from './BodyStudyView';
import { SequenceAnalyticalView } from './SequenceAnalyticalView';
import { ForceRelationView } from './ForceRelationView';
import { StagePlanView } from './StagePlanView';
import { buildStageNotationModel } from '../../notation/model/builder';
import { NotationPair, DiagramAsset, ProtoPathDatabase, AnalyticalView } from '../../domain/types';

interface PerformanceCanvasProps {
  activeStep: TransformationStep;
  pair: NotationPair;
  diagramAsset?: DiagramAsset;
  db: ProtoPathDatabase;
  activeView: AnalyticalView;
  currentFrameIndex?: number;
  onSelectFrame?: (idx: number) => void;
}

export const PerformanceCanvas: React.FC<PerformanceCanvasProps> = ({
  activeStep,
  pair,
  diagramAsset,
  db,
  activeView,
  currentFrameIndex = 0,
  onSelectFrame,
}) => {
  const notationModel = buildStageNotationModel(db, pair.id);

  // We need to resolve the active sequence frames to pass to the sequence view.
  // We'll get them from db based on pair.sequenceFrameIds
  const activeSequenceFrames = pair.sequenceFrameIds
    .map(id => db.sequenceFrames.find(f => f.id === id))
    .filter((f): f is NonNullable<typeof f> => f !== undefined)
    .sort((a, b) => a.order - b.order);

  const renderActiveView = () => {
    switch (activeView) {
      case 'architectural':
        return (
          <div className="w-full h-full flex flex-col bg-[#F7F7F3]">
            <div className="flex-[2] overflow-hidden relative border-b border-[#111111]/20 pb-4 shadow-inner">
              <StageNotationCanvas model={notationModel} activeStep={activeStep} mode="stage" />
            </div>
            <div className="flex-1 overflow-hidden bg-[#FFFFFF]">
              <SequenceAnalyticalView 
                model={notationModel} 
                db={db} 
                activeSequenceFrames={activeSequenceFrames} 
                isIntegrated={true} 
                currentFrameIndex={currentFrameIndex}
                onSelectFrame={onSelectFrame}
              />
            </div>
          </div>
        );
      case 'stage-plan':
        return <StagePlanView model={notationModel} activeStep={activeStep} />;
      case 'body':
        return <BodyStudyView model={notationModel} />;
      case 'forces':
        return <ForceRelationView model={notationModel} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full bg-[#F7F7F3] overflow-hidden relative flex flex-col font-sans select-none">
      <div className="flex-1 w-full h-full flex items-center justify-center relative overflow-hidden">
        <div className="w-full h-full p-4 flex items-center justify-center">
          {renderActiveView()}
        </div>
      </div>
    </div>
  );
};
