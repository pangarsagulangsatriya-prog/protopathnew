import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { ProtoPathDatabase } from '../domain/types';
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
} from '../domain/selectors';
import { SourcePanel } from '../components/SourcePanel';
import { TransformationSpine } from '../components/TransformationSpine';
import { StagePanel } from '../components/StagePanel';
import { SequenceTimeline } from '../components/SequenceTimeline';
import { CompareView } from '../components/CompareView';
import { RawJsonDrawer } from '../components/RawJsonDrawer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Multi-entity selection state
  const [activeEntityIds, setActiveEntityIds] = useState<string[]>([]);
  const [selectedEntityId, setSelectedEntityId] = useState<string | undefined>(undefined);
  
  // Timeline state
  const [currentFrameIndex, setCurrentFrameIndex] = useState<number>(0);

  // Inspector state derived from URL
  const inspectMode = searchParams.get('inspect');
  const isRawDrawerOpen = inspectMode === 'raw';
  const isLineageDrawerOpen = inspectMode === 'lineage';

  const handleOpenRawDrawer = () => {
    setSearchParams(prev => { prev.set('inspect', 'raw'); return prev; });
  };
  
  const handleCloseInspector = () => {
    setSearchParams(prev => { prev.delete('inspect'); return prev; });
  };

  // Selectors
  const activePair = getPairById(db, activePairId) || db.notationPairs[0];
  const sourceFeature = getSourceFeaturesForPair(db, activePair.id)[0];
  const dataProvocation = getDataProvocationsForPair(db, activePair.id)[0];
  const situation = getSituationsForPair(db, activePair.id)[0];
  const bodyImpulse = getBodyImpulsesForPair(db, activePair.id)[0];
  const spatialOutput = getSpatialOutputsForPair(db, activePair.id)[0];
  const diagramAsset = getDiagramForPair(db, activePair.id);
  const prevPair = getPreviousPair(db, activePair.id);
  const nextPair = getNextPair(db, activePair.id);

  // Timeline Filtering (Pair-scoped)
  const activeSequenceFrames = activePair.sequenceFrameIds
    .map(id => db.sequenceFrames.find(f => f.id === id))
    .filter((f): f is NonNullable<typeof f> => Boolean(f));

  // Reset state when pair changes
  useEffect(() => {
    setCurrentFrameIndex(0);
    setActiveEntityIds([]);
    setSelectedEntityId(undefined);
  }, [activePair.id]);

  // Handle manual entity click
  const handleHighlightEntity = (entityId: string) => {
    if (selectedEntityId === entityId) {
      setSelectedEntityId(undefined);
      setActiveEntityIds([]);
    } else {
      setSelectedEntityId(entityId);
      setActiveEntityIds([entityId]);
    }
  };

  // Handle timeline auto-highlight
  const handleTimelineHighlight = (ids: string[]) => {
    setSelectedEntityId(undefined);
    setActiveEntityIds(ids);
  };

  // Build Hierarchy Options
  const availableScores = db.scores;
  
  // Current score from pair
  const currentScoreId = activePair.scoreId;
  
  // Get unique checkpoints for the current score
  const availableCheckpoints = Array.from(new Set(
    db.notationPairs.filter(p => p.scoreId === currentScoreId).map(p => p.checkpointId)
  ));
  
  // Get pairs for current checkpoint
  const pairsInCheckpoint = db.notationPairs.filter(p => p.checkpointId === activePair.checkpointId);

  // Handlers for Selectors
  const handleScoreChange = (scoreId: string) => {
    const firstPairInScore = db.notationPairs.find(p => p.scoreId === scoreId);
    if (firstPairInScore) onSelectPair(firstPairInScore.id);
  };

  const handleCheckpointChange = (checkpointId: string) => {
    const firstPairInCheckpoint = db.notationPairs.find(p => p.checkpointId === checkpointId);
    if (firstPairInCheckpoint) onSelectPair(firstPairInCheckpoint.id);
  };

  if (compareMode) {
    return <CompareView db={db} onCloseCompare={onToggleCompare} />;
  }

  return (
    <div className="w-full min-h-screen md:h-[calc(100vh-50px)] bg-[#F7F7F3] font-sans text-[#111111] flex flex-col justify-between overflow-visible md:overflow-hidden select-none">
      
      {/* Top Selector Bar */}
      <div className="bg-[#FFFFFF] border-b border-[#111111] px-3 py-1.5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
        <div className="flex flex-wrap items-center gap-2">
          
          <div className="flex items-center gap-1 bg-[#EFEFEB] px-2 py-1 border border-[#111111]/30">
            <label htmlFor="score-select" className="text-[9px] text-[#505050] font-bold uppercase">SCORE:</label>
            <select
              id="score-select"
              value={currentScoreId}
              onChange={(e) => handleScoreChange(e.target.value)}
              className="bg-transparent font-extrabold text-[10px] text-[#111111] cursor-pointer focus:outline-none"
            >
              {availableScores.map(s => (
                <option key={s.id} value={s.id}>{s.code} - {s.title}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1 bg-[#EFEFEB] px-2 py-1 border border-[#111111]/30">
            <label htmlFor="checkpoint-select" className="text-[9px] text-[#505050] font-bold uppercase">CHECKPOINT:</label>
            <select
              id="checkpoint-select"
              value={activePair.checkpointId}
              onChange={(e) => handleCheckpointChange(e.target.value)}
              className="bg-transparent font-extrabold text-[10px] text-[#E6461A] cursor-pointer focus:outline-none"
            >
              {availableCheckpoints.map(cpId => (
                <option key={cpId} value={cpId}>{cpId}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1">
            <label htmlFor="pair-select" className="text-[9px] text-[#505050] font-bold uppercase">PAIR:</label>
            <select
              id="pair-select"
              value={activePair.id}
              onChange={(e) => onSelectPair(e.target.value)}
              className="bg-[#111111] text-[#F7F7F3] font-mono font-bold text-[10.5px] px-2 py-1 border border-[#111111] cursor-pointer"
            >
              {pairsInCheckpoint.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-1.5 ml-auto">
          <button
            onClick={() => prevPair && onSelectPair(prevPair.id)}
            disabled={!prevPair}
            className="px-2 py-1 bg-[#EFEFEB] hover:bg-[#111111] hover:text-[#F7F7F3] border border-[#111111] disabled:opacity-30 text-[9.5px] font-bold flex items-center gap-1 cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">PREV PAIR</span>
          </button>
          <button
            onClick={() => nextPair && onSelectPair(nextPair.id)}
            disabled={!nextPair}
            className="px-2 py-1 bg-[#111111] text-[#F7F7F3] hover:bg-[#E6461A] border border-[#111111] disabled:opacity-30 text-[9.5px] font-bold flex items-center gap-1 cursor-pointer"
          >
            <span className="hidden sm:inline">NEXT PAIR</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Coordinated Board - Using two rows for tablets (md) */}
      <div className="flex-1 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-12 gap-2 p-2 overflow-visible md:overflow-hidden">
        
        {/* Source Panel */}
        <div className="h-[500px] md:h-full md:col-span-1 lg:col-span-3 overflow-visible md:overflow-hidden">
          <SourcePanel
            sourceFeature={sourceFeature}
            dataProvocation={dataProvocation}
            onOpenRawDrawer={handleOpenRawDrawer}
            onHighlightEntity={handleHighlightEntity}
            activeEntityIds={activeEntityIds}
            selectedEntityId={selectedEntityId}
          />
        </div>

        {/* Transformation Spine */}
        <div className="h-[600px] md:h-full md:col-span-1 lg:col-span-3 overflow-visible md:overflow-hidden">
          <TransformationSpine
            sourceFeature={sourceFeature}
            dataProvocation={dataProvocation}
            situation={situation}
            bodyImpulse={bodyImpulse}
            spatialOutput={spatialOutput}
            onHighlightEntity={handleHighlightEntity}
            activeEntityIds={activeEntityIds}
            selectedEntityId={selectedEntityId}
          />
        </div>

        {/* Stage Panel */}
        <div className="h-[700px] md:h-full md:col-span-2 lg:col-span-6 overflow-visible md:overflow-hidden">
          <StagePanel
            pair={activePair}
            situation={situation}
            bodyImpulse={bodyImpulse}
            spatialOutput={spatialOutput}
            diagramAsset={diagramAsset}
            activeEntityIds={activeEntityIds}
            selectedEntityId={selectedEntityId}
          />
        </div>
      </div>

      <SequenceTimeline
        sequenceFrames={activeSequenceFrames}
        currentFrameIndex={currentFrameIndex}
        onSelectFrame={setCurrentFrameIndex}
        onHighlightEntities={handleTimelineHighlight}
      />

      <RawJsonDrawer
        sourceFeature={sourceFeature}
        isOpen={isRawDrawerOpen}
        onClose={handleCloseInspector}
      />
      
      {/* Fallback for Lineage Drawer */}
      {isLineageDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-[#111111]/80 flex items-center justify-center p-4">
          <div className="bg-[#FFFFFF] p-8 max-w-md w-full border border-[#111111] flex flex-col gap-4">
            <h2 className="font-bold font-mono">LINEAGE INSPECTOR</h2>
            <p className="text-sm">Lineage view is currently in draft status and will be fully implemented in a future phase.</p>
            <button 
              onClick={handleCloseInspector}
              className="bg-[#111111] text-[#F7F7F3] px-4 py-2 text-[10px] font-bold font-mono tracking-widest mt-4"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
