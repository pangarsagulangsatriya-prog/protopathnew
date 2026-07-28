import React, { useState } from 'react';
import { TransformationStep } from './TransformationStepRail';
import { StageNotationCanvas } from '../../notation/StageNotationCanvas';
import { buildStageNotationModel } from '../../notation/model/builder';
import { NotationPair, DiagramAsset, ProtoPathDatabase } from '../../domain/types';
import { getRenderPolicy, FULL_BOARD_REGISTRY } from '../../domain/renderPolicy';
import { LevelCViewer } from './LevelCViewer';
import { Maximize2, AlertTriangle, Minimize2, ZoomIn, Grid } from 'lucide-react';

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
  const policy = getRenderPolicy(pair, db);
  const fullBoardAsset = policy.fullBoardAssetId ? FULL_BOARD_REGISTRY[policy.fullBoardAssetId] : undefined;
  const hasMismatch = policy.reviewStatus === 'content-mismatch-review-required';
  
  const [viewMode, setViewMode] = useState<'action' | 'stage' | 'body' | 'full-board'>('stage');
  const notationModel = buildStageNotationModel(db, pair.id);

  return (
    <div className="w-full h-full bg-[#F7F7F3] border border-[#111111] overflow-hidden relative flex flex-col font-sans select-none shadow-sm">
      {/* View Mode Controls Overlay */}
      <div className="absolute top-4 right-4 z-10 flex items-center bg-[#FFFFFF] border border-[#111111] shadow-sm">
        <button 
          onClick={() => setViewMode('stage')}
          className={`p-2 flex items-center gap-2 border-r border-[#111111] transition-colors ${viewMode === 'stage' ? 'bg-[#111111] text-[#F7F7F3]' : 'hover:bg-[#EFEFEB]'}`}
          title="Stage View"
        >
          <Grid className="w-4 h-4" />
          <span className="font-mono text-[10px] font-bold">STAGE</span>
        </button>
        <button 
          onClick={() => setViewMode('action')}
          className={`p-2 flex items-center gap-2 border-r border-[#111111] transition-colors ${viewMode === 'action' ? 'bg-[#111111] text-[#F7F7F3]' : 'hover:bg-[#EFEFEB]'}`}
          title="Action View"
        >
          <Minimize2 className="w-4 h-4" />
          <span className="font-mono text-[10px] font-bold">ACTION</span>
        </button>
        <button 
          onClick={() => setViewMode('body')}
          className={`p-2 flex items-center gap-2 border-r border-[#111111] transition-colors ${viewMode === 'body' ? 'bg-[#111111] text-[#F7F7F3]' : 'hover:bg-[#EFEFEB]'}`}
          title="Body Detail"
        >
          <ZoomIn className="w-4 h-4" />
          <span className="font-mono text-[10px] font-bold">BODY</span>
        </button>
        {fullBoardAsset && (
          <button 
            onClick={() => setViewMode('full-board')}
            className={`p-2 flex items-center gap-2 transition-colors ${viewMode === 'full-board' ? 'bg-[#111111] text-[#F7F7F3]' : 'hover:bg-[#EFEFEB]'}`}
            title="Full Board Image"
          >
            <Maximize2 className="w-4 h-4" />
            <span className="font-mono text-[10px] font-bold">BOARD</span>
          </button>
        )}
      </div>

      {hasMismatch && viewMode === 'full-board' && (
        <div className="absolute top-4 left-4 z-10 bg-[#FFFFFF] border border-[#E6461A] text-[#111111] px-4 py-2 flex items-start gap-3 text-xs font-mono shadow-md max-w-sm">
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-[#E6461A]" />
          <div>
            <div className="font-bold text-[#E6461A]">REVIEW REQUIRED: CONTENT MISMATCH</div>
            <div className="text-[10px] mt-1 text-[#505050]">The supplied architectural board contains notations that may differ from the canonical database payload.</div>
          </div>
        </div>
      )}

      <div className="flex-1 w-full h-full flex items-center justify-center relative overflow-hidden">
        {viewMode === 'full-board' && fullBoardAsset ? (
          <LevelCViewer asset={fullBoardAsset} />
        ) : (
          <div className="w-full h-full p-4 flex items-center justify-center">
            <StageNotationCanvas model={notationModel} activeStep={activeStep} mode={viewMode} />
          </div>
        )}
      </div>
    </div>
  );
};
