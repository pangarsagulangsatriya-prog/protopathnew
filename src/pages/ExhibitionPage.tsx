import React, { useState, useEffect } from 'react';
import { ProtoPathDatabase } from '../domain/types';
import { StageNotationCanvas } from '../notation/StageNotationCanvas';
import { buildStageNotationModel } from '../notation/model/builder';
import {
  Maximize2,
  Info,
} from 'lucide-react';

interface ExhibitionPageProps {
  db: ProtoPathDatabase;
  onNavigate: (route: string) => void;
}

export const ExhibitionPage: React.FC<ExhibitionPageProps> = ({ db, onNavigate }) => {
  const [activePairIndex, setActivePairIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const currentPair = db.notationPairs[activePairIndex] || db.notationPairs[0];
  const notationModel = buildStageNotationModel(db, currentPair.id);

  // Autoplay
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => {
        setActivePairIndex((idx) => (idx + 1) % db.notationPairs.length);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, activePairIndex, db.notationPairs.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      } else if (e.code === 'ArrowRight') {
        setActivePairIndex((idx) => (idx + 1) % db.notationPairs.length);
      } else if (e.code === 'ArrowLeft') {
        setActivePairIndex((idx) => (idx - 1 + db.notationPairs.length) % db.notationPairs.length);
      } else if (e.code === 'Escape') {
        onNavigate('/explore');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [db.notationPairs.length, onNavigate]);

  return (
    <div
      className="w-full h-screen font-mono flex flex-col justify-between p-4 transition-colors select-none bg-[#111111] text-[#F7F7F3]"
    >
      {/* Top Floating Control Bar */}
      <div className="flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('/')}
            className="px-3 py-1 text-xs font-bold border transition-colors cursor-pointer bg-[#222222] text-[#F7F7F3] border-[#444444] hover:bg-[#E6461A]"
          >
            ← EXIT EXHIBITION MODE
          </button>

          <span className="text-xs font-black uppercase tracking-widest text-[#E6461A]">
            EXHIBITION DISPLAY
          </span>
        </div>
      </div>

      {/* Main Exhibition Board Viewport */}
      <div className="flex-1 flex items-center justify-center relative my-2 overflow-hidden">
        <div className="w-full h-full max-w-6xl max-h-[80vh] flex items-center justify-center p-2">
          <StageNotationCanvas model={notationModel} mode="full-board" />
        </div>

        {/* Floating Minimal Info Box */}
        <div className="absolute bottom-4 left-4 border p-4 max-w-md font-mono text-xs z-20 bg-[#111111]/90 text-[#F7F7F3] border-[#444444]">
          <div className="text-[9px] bg-[#E6461A] text-[#F7F7F3] px-1.5 py-0.5 font-bold inline-block mb-1">
            NOTATION BOARD 0{activePairIndex + 1}
          </div>
          <h2 className="text-sm font-black uppercase mb-1">{currentPair.title}</h2>
          <div className="text-[9px] opacity-60 mt-2">
            KEYBOARD: [SPACE] PLAY/PAUSE • [LEFT/RIGHT] NAVIGATE • [ESC] EXIT
          </div>
        </div>
      </div>

      {/* Bottom Exhibition Timeline Controller */}
      <div className="flex items-center justify-between border-t border-[#333333] pt-3 z-10">
        <div className="flex items-center gap-2 text-xs font-bold text-[#888888]">
          <span>{isPlaying ? 'AUTOPLAY ACTIVE' : 'MANUAL NAVIGATION'}</span>
        </div>
        <div className="text-xs font-bold">
          BOARD {activePairIndex + 1} / {db.notationPairs.length}
        </div>
      </div>
    </div>
  );
};
