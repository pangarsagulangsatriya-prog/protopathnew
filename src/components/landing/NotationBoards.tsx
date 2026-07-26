import React, { useState, useEffect } from 'react';
import { Maximize2, X, MonitorPlay } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NotationBoardsProps {
  t: {
    title: string;
    openExhibition: string;
  };
}

const BOARDS = [
  {
    id: 'st-c1-3-1',
    src: '/assets/diagrams/st-c1-3-1__rt-c1-3-1.png',
    st: 'ST.C1.3.1',
    stLabel: 'AUTHORITY INTERRUPTION',
    rt: 'RT.C1.3.1',
    rtLabel: 'FREEZE RESPONSE',
    alt: 'Architectural notation board depicting an authority interruption resulting in a freeze response.'
  },
  {
    id: 'st-c1-3-2',
    src: '/assets/diagrams/st-c1-3-2__rt-c1-3-2.png',
    st: 'ST.C1.3.2',
    stLabel: 'CONFLICTING VECTORS',
    rt: 'RT.C1.3.2',
    rtLabel: 'GLITCH RESPONSE',
    alt: 'Architectural notation board depicting conflicting spatial vectors resulting in a glitch response.'
  }
];

export const NotationBoards: React.FC<NotationBoardsProps> = ({ t }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeImage) {
        setActiveImage(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeImage]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeImage]);

  return (
    <section className="mb-24" aria-label="Notation Boards">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight">
            {t.title}
          </h2>
        </div>
        <Link
          to="/exhibition"
          className="bg-[#111111] text-[#F7F7F3] px-4 py-2 text-[10px] md:text-[12px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#E6461A] transition-colors"
        >
          <MonitorPlay className="w-4 h-4" />
          <span>{t.openExhibition}</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BOARDS.map((board) => (
          <div key={board.id} className="flex flex-col">
            <button
              onClick={() => setActiveImage(board.src)}
              className="relative w-full aspect-[4/3] bg-[#EFEFEB] border border-[#111111] group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6461A]"
              aria-label={`Enlarge notation board ${board.st}`}
            >
              <img
                src={board.src}
                alt={board.alt}
                loading="lazy"
                className="w-full h-full object-contain p-4 mix-blend-multiply"
              />
              
              {/* Neutral loading skeleton (hidden via CSS when image loads, or just relies on background color) */}
              
              {/* Enlarge affordance overlay */}
              <div className="absolute inset-0 bg-[#F7F7F3]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex items-center gap-2 bg-[#111111] text-[#F7F7F3] px-3 py-1.5 text-[10px] font-bold uppercase">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>ENLARGE</span>
                </div>
              </div>
            </button>
            
            {/* Metadata (not covering the image) */}
            <div className="mt-3 font-mono text-[10px] md:text-[11px] bg-[#FFFFFF] border border-[#111111] p-3">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-[#111111]">{board.st}</span>
                <span className="text-[#505050] text-right">{board.stLabel}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-[#E6461A]">{board.rt}</span>
                <span className="text-[#505050] text-right">{board.rtLabel}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-[100] bg-[#111111]/95 flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged notation board"
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-2 bg-[#F7F7F3] text-[#111111] hover:bg-[#E6461A] hover:text-[#F7F7F3] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close enlarged view"
            autoFocus
          >
            <X className="w-6 h-6" />
          </button>
          
          <img
            src={activeImage}
            alt="Enlarged notation board"
            className="w-full h-full object-contain bg-[#F7F7F3] border-4 border-[#F7F7F3]"
          />
        </div>
      )}
    </section>
  );
};
