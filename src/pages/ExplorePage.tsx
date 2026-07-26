import React, { useState } from 'react';
import { ProtoPathDatabase, NotationPair } from '../domain/types';
import {
  getPairById,
  getSourceFeaturesForPair,
  getDataProvocationsForPair,
  getSituationsForPair,
  getBodyImpulsesForPair,
  getSpatialOutputsForPair,
  getDiagramForPair,
  getPreviousPair,
  getNextPair,
  getLineagePath,
} from '../domain/selectors';
import { SourcePanel } from '../components/SourcePanel';
import { TransformationSpine } from '../components/TransformationSpine';
import { StagePanel } from '../components/StagePanel';
import { SequenceTimeline } from '../components/SequenceTimeline';
import { CompareView } from '../components/CompareView';
import { RawJsonDrawer } from '../components/RawJsonDrawer';
import { ChevronLeft, ChevronRight, Play, Pause, RefreshCw, SlidersHorizontal, Layers } from 'lucide-react';

interface ExplorePageProps {
  db: ProtoPathDatabase;
  activePairId: string;
  onSelectPair: (pairId: string) => void;
  compareMode: boolean;
  onToggleCompare: () => void;
  viewMode: 'explore' | 'raw' | 'lineage' | 'exhibition';
  onChangeViewMode: (mode: 'explore' | 'raw' | 'lineage' | 'exhibition') => void;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({
  db,
  activePairId,
  onSelectPair,
  compareMode,
  onToggleCompare,
  viewMode,
  onChangeViewMode,
}) => {
  const [activeEntityId, setActiveEntityId] = useState<string | undefined>(undefined);
  const [currentFrameIndex, setCurrentFrameIndex] = useState<number>(0);
  const [isRawDrawerOpen, setIsRawDrawerOpen] = useState<boolean>(false);

  // Active Pair and Selectors
  const activePair = getPairById(db, activePairId) || db.notationPairs[0];
  const sourceFeature = getSourceFeaturesForPair(db, activePair.id)[0];
  const dataProvocation = getDataProvocationsForPair(db, activePair.id)[0];
  const situation = getSituationsForPair(db, activePair.id)[0];
  const bodyImpulse = getBodyImpulsesForPair(db, activePair.id)[0];
  const spatialOutput = getSpatialOutputsForPair(db, activePair.id)[0];
  const diagramAsset = getDiagramForPair(db, activePair.id);
  const prevPair = getPreviousPair(db, activePair.id);
  const nextPair = getNextPair(db, activePair.id);

  const handleHighlightEntity = (entityId: string) => {
    setActiveEntityId(activeEntityId === entityId ? undefined : entityId);
  };

  // If Compare Mode is active, render CompareView
  if (compareMode) {
    return <CompareView db={db} onCloseCompare={onToggleCompare} />;
  }

  return (
    <div className="w-full h-[calc(100vh-50px)] bg-[#F7F7F3] font-mono text-[#111111] flex flex-col justify-between overflow-hidden select-none">
      {/* Top Selector Bar */}
      <div className="bg-[#FFFFFF] border-b border-[#111111] px-3 py-1.5 flex flex-wrap items-center justify-between gap-2 text-xs">
        {/* Score & Checkpoint Selectors */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-[#EFEFEB] px-2 py-1 border border-[#111111]/30">
            <span className="text-[9px] text-[#505050] font-bold uppercase">SCORE:</span>
            <span className="font-extrabold text-[10px] text-[#111111]">SCORE 01 (C1)</span>
          </div>

          <div className="flex items-center gap-1 bg-[#EFEFEB] px-2 py-1 border border-[#111111]/30">
            <span className="text-[9px] text-[#505050] font-bold uppercase">CHECKPOINT:</span>
            <span className="font-extrabold text-[10px] text-[#E6461A]">C1.3 (12.15m)</span>
          </div>

          {/* Pair Selector Dropdown */}
          <div className="flex items-center gap-1">
            <span className="text-[9px] text-[#505050] font-bold uppercase">PAIR:</span>
            <select
              value={activePair.id}
              onChange={(e) => onSelectPair(e.target.value)}
              className="bg-[#111111] text-[#F7F7F3] font-mono font-bold text-[10.5px] px-2 py-1 border border-[#111111] cursor-pointer"
            >
              {db.notationPairs.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Pair Navigation Next/Prev */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => prevPair && onSelectPair(prevPair.id)}
            disabled={!prevPair}
            className="px-2 py-1 bg-[#EFEFEB] hover:bg-[#111111] hover:text-[#F7F7F3] border border-[#111111] disabled:opacity-30 text-[9.5px] font-bold flex items-center gap-1 cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>PREV PAIR</span>
          </button>
          <button
            onClick={() => nextPair && onSelectPair(nextPair.id)}
            disabled={!nextPair}
            className="px-2 py-1 bg-[#111111] text-[#F7F7F3] hover:bg-[#E6461A] border border-[#111111] disabled:opacity-30 text-[9.5px] font-bold flex items-center gap-1 cursor-pointer"
          >
            <span>NEXT PAIR</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Coordinated 3-Column Board */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-2 p-2 overflow-hidden">
        {/* Left Source Panel (26% -> 3 cols) */}
        <div className="md:col-span-3 h-full overflow-hidden">
          <SourcePanel
            sourceFeature={sourceFeature}
            dataProvocation={dataProvocation}
            onOpenRawDrawer={() => setIsRawDrawerOpen(true)}
            onHighlightEntity={handleHighlightEntity}
            activeEntityId={activeEntityId}
          />
        </div>

        {/* Center Transformation Spine (22% -> 3 cols) */}
        <div className="md:col-span-3 h-full overflow-hidden">
          <TransformationSpine
            sourceFeature={sourceFeature}
            dataProvocation={dataProvocation}
            situation={situation}
            bodyImpulse={bodyImpulse}
            spatialOutput={spatialOutput}
            onHighlightEntity={handleHighlightEntity}
            activeEntityId={activeEntityId}
          />
        </div>

        {/* Right Stage & Body Panel (52% -> 6 cols) */}
        <div className="md:col-span-6 h-full overflow-hidden">
          <StagePanel
            pair={activePair}
            situation={situation}
            bodyImpulse={bodyImpulse}
            spatialOutput={spatialOutput}
            diagramAsset={diagramAsset}
          />
        </div>
      </div>

      {/* Bottom Sequence Timeline */}
      <SequenceTimeline
        sequenceFrames={db.sequenceFrames}
        currentFrameIndex={currentFrameIndex}
        onSelectFrame={setCurrentFrameIndex}
        onHighlightEntities={(ids) => ids.length > 0 && setActiveEntityId(ids[0])}
      />

      {/* Raw JSON Inspector Modal Drawer */}
      <RawJsonDrawer
        sourceFeature={sourceFeature}
        isOpen={isRawDrawerOpen}
        onClose={() => setIsRawDrawerOpen(false)}
      />
    </div>
  );
};
