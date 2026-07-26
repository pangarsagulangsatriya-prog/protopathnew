import React, { useState, useEffect } from 'react';
import { ProtoPathDatabase } from '../domain/types';
import { ArchitecturalBoardSVG } from '../components/ArchitecturalBoardSVG';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Maximize2,
  Sun,
  Moon,
  Info,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
} from 'lucide-react';

interface ExhibitionPageProps {
  db: ProtoPathDatabase;
  onNavigate: (route: string) => void;
}

export const ExhibitionPage: React.FC<ExhibitionPageProps> = ({ db, onNavigate }) => {
  const [activePairIndex, setActivePairIndex] = useState<number>(0);
  const [theme, setTheme] = useState<'DARK' | 'LIGHT'>('DARK');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showMeta, setShowMeta] = useState<boolean>(true);

  const currentPair = db.notationPairs[activePairIndex] || db.notationPairs[0];

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
      className={`w-full h-screen font-mono flex flex-col justify-between p-4 transition-colors select-none ${
        theme === 'DARK' ? 'bg-[#111111] text-[#F7F7F3]' : 'bg-[#F7F7F3] text-[#111111]'
      }`}
    >
      {/* Top Floating Control Bar */}
      <div className="flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('/explore')}
            className={`px-3 py-1 text-xs font-bold border transition-colors cursor-pointer ${
              theme === 'DARK'
                ? 'bg-[#222222] text-[#F7F7F3] border-[#444444] hover:bg-[#E6461A]'
                : 'bg-[#FFFFFF] text-[#111111] border-[#111111] hover:bg-[#E6461A] hover:text-[#F7F7F3]'
            }`}
          >
            ← EXIT EXHIBITION MODE
          </button>

          <span className="text-xs font-black uppercase tracking-widest text-[#E6461A]">
            EXHIBITION DISPLAY
          </span>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === 'DARK' ? 'LIGHT' : 'DARK')}
            className={`p-1.5 border cursor-pointer ${
              theme === 'DARK'
                ? 'bg-[#222222] text-[#F7F7F3] border-[#444444]'
                : 'bg-[#FFFFFF] text-[#111111] border-[#111111]'
            }`}
            title="Toggle Light / Dark Mode"
          >
            {theme === 'DARK' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setShowMeta(!showMeta)}
            className={`px-2.5 py-1 text-xs font-bold border cursor-pointer ${
              showMeta
                ? 'bg-[#E6461A] text-[#F7F7F3] border-[#E6461A]'
                : theme === 'DARK'
                ? 'bg-[#222222] text-[#A0A0A0] border-[#444444]'
                : 'bg-[#FFFFFF] text-[#505050] border-[#111111]'
            }`}
          >
            METADATA OVERLAY
          </button>
        </div>
      </div>

      {/* Main Exhibition Board Viewport */}
      <div className="flex-1 flex items-center justify-center relative my-2 overflow-hidden">
        <div className="w-full h-full max-w-6xl max-h-[80vh] flex items-center justify-center p-2">
          <ArchitecturalBoardSVG pairId={currentPair.id} className="w-full h-full" />
        </div>

        {/* Floating Metadata Overlay Box */}
        {showMeta && (
          <div
            className={`absolute bottom-4 left-4 border p-4 max-w-md font-mono text-xs z-20 ${
              theme === 'DARK'
                ? 'bg-[#111111]/90 text-[#F7F7F3] border-[#444444]'
                : 'bg-[#FFFFFF]/90 text-[#111111] border-[#111111]'
            }`}
          >
            <div className="text-[9px] bg-[#E6461A] text-[#F7F7F3] px-1.5 py-0.5 font-bold inline-block mb-1">
              NOTATION BOARD 0{activePairIndex + 1}
            </div>
            <h2 className="text-sm font-black uppercase mb-1">{currentPair.title}</h2>
            <p className="text-[10.5px] opacity-80 leading-relaxed mb-2">
              {currentPair.description}
            </p>
            <div className="text-[9px] opacity-60">
              KEYBOARD: [SPACE] PLAY/PAUSE • [LEFT/RIGHT] NAVIGATE • [ESC] EXIT
            </div>
          </div>
        )}
      </div>

      {/* Bottom Exhibition Timeline Controller */}
      <div className="flex items-center justify-between border-t border-[#333333] pt-3 z-10">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-3 py-1 bg-[#E6461A] text-[#F7F7F3] font-bold text-xs uppercase flex items-center gap-1 cursor-pointer"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isPlaying ? 'PAUSE' : 'AUTOPLAY'}</span>
          </button>

          <button
            onClick={() =>
              setActivePairIndex((idx) => (idx - 1 + db.notationPairs.length) % db.notationPairs.length)
            }
            className={`p-1 border cursor-pointer ${
              theme === 'DARK' ? 'bg-[#222222] border-[#444444]' : 'bg-[#FFFFFF] border-[#111111]'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => setActivePairIndex((idx) => (idx + 1) % db.notationPairs.length)}
            className={`p-1 border cursor-pointer ${
              theme === 'DARK' ? 'bg-[#222222] border-[#444444]' : 'bg-[#FFFFFF] border-[#111111]'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="text-xs font-bold">
          BOARD {activePairIndex + 1} / {db.notationPairs.length}
        </div>
      </div>
    </div>
  );
};
