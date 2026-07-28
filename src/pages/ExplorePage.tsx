import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { ProtoPathDatabase, AnalyticalView } from '../domain/types';
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
import { MiniSequenceRail } from '../components/explore/MiniSequenceRail';
import { AnalyticalTabs } from '../components/explore/AnalyticalTabs';
import { FullBoardModal } from '../components/explore/FullBoardModal';
import { getRenderPolicy, FULL_BOARD_REGISTRY } from '../domain/renderPolicy';

interface ExplorePageProps {
  db: ProtoPathDatabase;
  activePairId: string;
  onSelectPair: (pairId: string) => void;
}

const STEPS: TransformationStep[] = ['data', 'situation', 'body', 'output'];

export const ExplorePage: React.FC<ExplorePageProps> = ({
  db,
  activePairId,
  onSelectPair,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Sync state from URL or fallback
  const urlView = searchParams.get('view') as AnalyticalView | null;
  const urlStep = searchParams.get('step') as TransformationStep | null;
  const urlFrame = searchParams.get('frame');

  // Step state
  const [activeStep, setActiveStep] = useState<TransformationStep>(urlStep && STEPS.includes(urlStep) ? urlStep : 'data');
  
  // View state
  const validViews: AnalyticalView[] = ['architectural', 'stage-plan', 'body', 'forces'];
  const [activeView, setActiveView] = useState<AnalyticalView>(urlView && validViews.includes(urlView) ? urlView : 'architectural');

  // Timeline state
  const [currentFrameIndex, setCurrentFrameIndex] = useState<number>(urlFrame ? parseInt(urlFrame, 10) : 0);
  
  // Full Board Modal state
  const [isFullBoardOpen, setIsFullBoardOpen] = useState(false);

  // Mobile Inspector Bottom Sheet (for mobile/tablet)
  const [isMobileInspectorOpen, setIsMobileInspectorOpen] = useState(false);

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

  // Sync state to URL when changed (without pushing history unnecessarily if we don't want to)
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    let changed = false;
    
    if (params.get('view') !== activeView) {
      params.set('view', activeView);
      changed = true;
    }
    if (params.get('step') !== activeStep) {
      params.set('step', activeStep);
      changed = true;
    }
    if (params.get('frame') !== currentFrameIndex.toString()) {
      params.set('frame', currentFrameIndex.toString());
      changed = true;
    }

    if (changed) {
      setSearchParams(params, { replace: true });
    }
  }, [activeView, activeStep, currentFrameIndex, searchParams, setSearchParams]);

  // Reset state when pair changes, ONLY if not explicitly deep linking
  useEffect(() => {
    if (!searchParams.get('pair') && !searchParams.get('view')) {
      setCurrentFrameIndex(0);
      setActiveStep('data');
      setActiveView('action');
    }
  }, [activePair.id]);

  // Keyboard navigation for steps
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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

  return (
    <div className="w-full min-h-screen xl:h-[calc(100vh-50px)] bg-[#F7F7F3] font-sans text-[#111111] flex flex-col justify-between overflow-visible xl:overflow-hidden select-none">
      
      {/* 1. TOP CONTEXT BAR */}
      <ExploreContextBar 
        db={db}
        activePair={activePair}
        onSelectPair={(id) => {
          onSelectPair(id);
          // Update URL pair parameter when selecting from context bar
          const params = new URLSearchParams(searchParams);
          params.set('pair', id);
          setSearchParams(params);
        }}
      />

      {/* 2. MAIN LAYOUT GRID */}
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

        {/* Center: Performance Canvas (7 cols on desktop) */}
        <div className="flex-1 h-[60vh] md:h-auto xl:col-span-7 overflow-hidden bg-[#F7F7F3] flex flex-col">
          <AnalyticalTabs 
            activeView={activeView} 
            onSelectView={setActiveView} 
            onOpenFullBoard={() => setIsFullBoardOpen(true)} 
          />
          <div className="flex-1 overflow-hidden">
            <PerformanceCanvas
              activeStep={activeStep}
              pair={activePair}
              diagramAsset={diagramAsset}
              db={db}
              activeView={activeView}
              currentFrameIndex={currentFrameIndex}
              onSelectFrame={setCurrentFrameIndex}
            />
          </div>
        </div>

        {/* Right: Context Inspector (3 cols on desktop) */}
        <div className="hidden xl:flex flex-col xl:col-span-3 overflow-hidden bg-[#FFFFFF] border-l border-[#111111]/20">
          <ContextInspector
            activeStep={activeStep}
            sourceFeature={sourceFeature}
            dataProvocation={dataProvocation}
            situation={situation}
            bodyImpulse={bodyImpulse}
            spatialOutput={spatialOutput}
            diagramAsset={diagramAsset}
            onOpenRawDrawer={() => {}}
          />
          <div className="p-3 border-t border-[#111111]/20 mt-auto">
            <button 
              onClick={() => window.location.href = `/archive/score/${activePairId}`}
              className="w-full py-2 bg-[#EFEFEB] hover:bg-[#111111] hover:text-[#F7F7F3] border border-[#111111] font-mono text-[9px] font-bold uppercase transition-colors flex items-center justify-center gap-2"
            >
              <span>OPEN RESEARCH SOURCE</span>
            </button>
          </div>
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
            />
          </div>
        </div>
      )}

      {/* 3. COLLAPSIBLE TIMELINE (Bottom) */}
      <div className="z-40">
        <MiniSequenceRail
          sequenceFrames={activeSequenceFrames}
          currentFrameIndex={currentFrameIndex}
          onSelectFrame={setCurrentFrameIndex}
        />
      </div>

      {/* FULL BOARD MODAL OVERLAY */}
      {isFullBoardOpen && (
        <FullBoardModal 
          asset={
            getRenderPolicy(activePair, db).fullBoardAssetId 
              ? FULL_BOARD_REGISTRY[getRenderPolicy(activePair, db).fullBoardAssetId!] 
              : FULL_BOARD_REGISTRY['diagram-c1-3-1'] // fallback
          }
          onClose={() => setIsFullBoardOpen(false)} 
        />
      )}
    </div>
  );
};
