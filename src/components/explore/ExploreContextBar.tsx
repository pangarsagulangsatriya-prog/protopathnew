import React from 'react';
import { ProtoPathDatabase, NotationPair } from '../../domain/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ExploreContextBarProps {
  db: ProtoPathDatabase;
  activePair: NotationPair;
  onSelectPair: (pairId: string) => void;
}

export const ExploreContextBar: React.FC<ExploreContextBarProps> = ({
  db,
  activePair,
  onSelectPair,
}) => {
  const score = db.scores.find((s) => s.id === activePair.scoreId);
  const scoreCode = score?.code || 'SCORE 01';
  
  // E.g. "phase-02" -> "PHASE 02"
  const phaseLabel = activePair.phaseId.replace('-', ' ').toUpperCase();
  
  // Calculate Unit X / N based on pairs in the same checkpoint
  const pairsInCheckpoint = db.notationPairs.filter(p => p.checkpointId === activePair.checkpointId);
  const currentUnitIndex = pairsInCheckpoint.findIndex(p => p.id === activePair.id) + 1;
  const totalUnits = pairsInCheckpoint.length;

  return (
    <div className="bg-[#FFFFFF] border-b border-[#111111] px-4 py-2 sticky top-0 z-40 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-wide text-[#111111]">
      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
        <div className="font-bold">{scoreCode}</div>
        <div className="text-[#505050] hidden sm:block">/</div>
        <div className="font-bold">{phaseLabel}</div>
        <div className="text-[#505050] hidden sm:block">/</div>
        <div className="font-bold text-[#E6461A] bg-[#FFF9F6] px-1">{activePair.checkpointId} {activePair.title}</div>
        <div className="text-[#505050] hidden md:block">/</div>
        <div className="font-bold text-[#505050] hidden md:block">UNIT {String(currentUnitIndex).padStart(2, '0')} / {String(totalUnits).padStart(2, '0')}</div>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <button
          onClick={() => activePair.previousPairId && onSelectPair(activePair.previousPairId)}
          disabled={!activePair.previousPairId}
          className="text-[#505050] hover:text-[#111111] disabled:opacity-30 font-bold flex items-center gap-1 cursor-pointer transition-colors"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">PREVIOUS</span>
        </button>
        <button
          onClick={() => activePair.nextPairId && onSelectPair(activePair.nextPairId)}
          disabled={!activePair.nextPairId}
          className="text-[#111111] hover:text-[#E6461A] disabled:opacity-30 font-extrabold flex items-center gap-1 cursor-pointer transition-colors"
        >
          <span>NEXT</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
