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
} from '../domain/selectors';
import { ExploreContextBar } from '../components/explore/ExploreContextBar';
import { TransformationStepRail, TransformationStep } from '../components/explore/TransformationStepRail';
import { ContextInspector } from '../components/explore/ContextInspector';
import { PerformanceCanvas } from '../components/explore/PerformanceCanvas';
import { CollapsibleTimeline } from '../components/explore/CollapsibleTimeline';
import { CompareView } from '../components/CompareView';
import { RawJsonDrawer } from '../components/RawJsonDrawer';

interface ExplorePageProps {
  db: ProtoPathDatabase;
  activePairId: string;
  onSelectPair: (pairId: string) => void;
  compareMode: boolean;
  onToggleCompare: () => void;
  viewMode: 'explore' | 'raw' | 'lineage' | 'exhibition';
  onChangeViewMode: (mode: 'explore' | 'raw' | 'lineage' | 'exhibition') => void;
}

const STEPS: TransformationStep[] = ['data', 'situation', 'body', 'output'];

export const ExplorePage: React.FC<ExplorePageProps> = ({
  db,
  activePairId,
  onSelectPair,
  compareMode,
  onToggleCompare,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Step state
  const [activeStep, setActiveStep] = useState<TransformationStep>('data');
  
  // Timeline state
  const [currentFrameIndex, setCurrentFrameIndex] = useState<number>(0);

  // Inspector state derived from URL
  const inspectMode = searchParams.get('inspect');
  const isRawDrawerOpen = inspectMode === 'raw';
  const isLineageDrawerOpen = inspectMode === 'lineage';
  
  // Mobile Inspector Bottom Sheet (for mobile/tablet)
  const [isMobileInspectorOpen, setIsMobileInspectorOpen] = useState(false);

  const handleOpenRawDrawer = () => {
    setSearchParams(prev => { prev.set('inspect', 'raw'); return prev; });
  };
  
  const handleCloseDrawers = () => {
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

  // Timeline Filtering (Pair-scoped)
  const activeSequenceFrames = activePair.sequenceFrameIds
    .map(id => db.sequenceFrames.find(f => f.id === id))
    .filter((f): f is NonNullable<typeof f> => Boolean(f));

  // Reset state when pair changes
  useEffect(() => {
    setCurrentFrameIndex(0);
    setActiveStep('data');
  }, [activePair.id]);

  // Keyboard navigation for steps
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      const currentIndex = STEPS.indexOf(activeStep);
      
      switch (e.key) {
        case '1': setActiveStep('data'); break;
        case '2': setActiveStep('situation'); break;
        case '3': setActiveStep('body'); break;
        case '4': setActiveStep('output'); break;
        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault();
          if (currentIndex > 0) setActiveStep(STEPS[currentIndex - 1]);
          break;
        case 'ArrowDown':
        case 'ArrowRight':
          e.preventDefault();
          if (currentIndex < STEPS.length - 1) setActiveStep(STEPS[currentIndex + 1]);
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeStep]);

  if (compareMode) {
    return <CompareView db={db} onCloseCompare={onToggleCompare} />;
  }

  return (
    <div className="w-full min-h-screen xl:h-[calc(100vh-50px)] bg-[#F7F7F3] font-sans text-[#111111] flex flex-col justify-between overflow-visible xl:overflow-hidden select-none">
      
      {/* 1. TOP CONTEXT BAR */}
      <ExploreContextBar 
        db={db}
        activePair={activePair}
        onSelectPair={onSelectPair}
      />

      {/* 2. MAIN LAYOUT GRID */}
      {/* 
        Mobile: flex-col (rail horizontal, canvas, accordion)
        Tablet: grid 12 cols (2 rail, 10 canvas)
        Desktop: grid 12 cols (2 rail, 7 canvas, 3 inspector)
      */}
      <div className="flex-1 flex flex-col xl:grid xl:grid-cols-12 gap-0 overflow-visible xl:overflow-hidden relative">
        
        {/* Left: Step Rail (2 cols) */}
        <div className="xl:col-span-2 bg-[#FFFFFF] border-b xl:border-b-0 xl:border-r border-[#111111]/20 overflow-visible xl:overflow-y-auto scrollbar-thin z-20">
          <TransformationStepRail
            activeStep={activeStep}
            onStepSelect={(step) => {
              setActiveStep(step);
              setIsMobileInspectorOpen(true);
            }}
            sourceFeature={sourceFeature}
            dataProvocation={dataProvocation}
            situation={situation}
            bodyImpulse={bodyImpulse}
            spatialOutput={spatialOutput}
          />
        </div>

        {/* Center: Performance Canvas (10 cols on tablet, 7 cols on desktop) */}
        <div className="flex-1 h-[60vh] md:h-auto xl:col-span-7 overflow-hidden bg-[#F7F7F3]">
          <PerformanceCanvas
            activeStep={activeStep}
            pair={activePair}
            diagramAsset={diagramAsset}
            db={db}
          />
        </div>

        {/* Right: Context Inspector (3 cols on desktop, hidden in drawer on tablet/mobile) */}
        <div className="hidden xl:block xl:col-span-3 overflow-hidden bg-[#FFFFFF]">
          <ContextInspector
            activeStep={activeStep}
            sourceFeature={sourceFeature}
            dataProvocation={dataProvocation}
            situation={situation}
            bodyImpulse={bodyImpulse}
            spatialOutput={spatialOutput}
            diagramAsset={diagramAsset}
            onOpenRawDrawer={handleOpenRawDrawer}
          />
        </div>
      </div>

      {/* Mobile/Tablet Inspector Drawer */}
      {isMobileInspectorOpen && (
        <div className="xl:hidden fixed inset-x-0 bottom-0 top-[40vh] z-30 bg-[#FFFFFF] border-t border-[#111111] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex flex-col animate-in slide-in-from-bottom-full duration-300">
          <div className="flex items-center justify-between p-3 border-b border-[#111111]/20 bg-[#EFEFEB]">
            <span className="font-mono text-[10px] font-bold uppercase">INSPECTOR: {activeStep}</span>
            <button 
              onClick={() => setIsMobileInspectorOpen(false)}
              className="px-3 py-1 bg-[#111111] text-[#F7F7F3] font-mono text-[10px] font-bold uppercase"
            >
              CLOSE
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <ContextInspector
              activeStep={activeStep}
              sourceFeature={sourceFeature}
              dataProvocation={dataProvocation}
              situation={situation}
              bodyImpulse={bodyImpulse}
              spatialOutput={spatialOutput}
              diagramAsset={diagramAsset}
              onOpenRawDrawer={handleOpenRawDrawer}
            />
          </div>
        </div>
      )}

      {/* 3. COLLAPSIBLE TIMELINE (Bottom) */}
      <div className="z-40">
        <CollapsibleTimeline
          sequenceFrames={activeSequenceFrames}
          currentFrameIndex={currentFrameIndex}
          onSelectFrame={setCurrentFrameIndex}
        />
      </div>

      {/* RAW JSON DRAWER (Re-used for Metadata) */}
      <RawJsonDrawer
        sourceFeature={sourceFeature}
        isOpen={isRawDrawerOpen}
        onClose={handleCloseDrawers}
      />
      
      {/* LINEAGE DRAWER (Fallback) */}
      {isLineageDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-[#111111]/80 flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-[#FFFFFF] p-8 max-w-md w-full border border-[#111111] flex flex-col gap-4 shadow-2xl">
            <h2 className="font-bold font-mono text-xl">LINEAGE INSPECTOR</h2>
            <p className="text-[14px]">Lineage view is currently in draft status and will be fully implemented in a future phase.</p>
            <button 
              onClick={handleCloseDrawers}
              className="bg-[#111111] text-[#F7F7F3] px-4 py-2 text-[11px] font-bold font-mono tracking-widest mt-4 hover:bg-[#E6461A] transition-colors"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
