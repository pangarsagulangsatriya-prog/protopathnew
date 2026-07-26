import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { RotateCcw } from 'lucide-react';
import { getProtoVariants } from '../../motion/protoMotion';

interface HeroTranslationProps {
  t: {
    stepUrban: string;
    stepVector: string;
    stepBody: string;
    stepNotation: string;
    replay: string;
  };
}

export const HeroTranslation: React.FC<HeroTranslationProps> = ({ t }) => {
  const prefersReducedMotion = useReducedMotion();
  const variants = getProtoVariants(!!prefersReducedMotion);
  
  // Stages: 0: Init, 1: Record, 2: Vector, 3: Body, 4: Notation
  const [stage, setStage] = useState(4);
  const [isLocked, setIsLocked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-play on mount if not reduced motion
  useEffect(() => {
    if (prefersReducedMotion) return;
    setStage(0);
    const sequence = [
      setTimeout(() => setStage(1), 400),
      setTimeout(() => setStage(2), 1200),
      setTimeout(() => setStage(3), 2000),
      setTimeout(() => setStage(4), 2800),
    ];
    return () => sequence.forEach(clearTimeout);
  }, [prefersReducedMotion]);

  const handleReplay = () => {
    setIsLocked(false);
    setStage(0);
    setTimeout(() => setStage(1), 100);
    setTimeout(() => setStage(2), 800);
    setTimeout(() => setStage(3), 1600);
    setTimeout(() => setStage(4), 2400);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if this section is somewhat in view or focused, 
      // but for simplicity we bind globally if locked or hovered
      if (e.key === 'ArrowRight') {
        setStage(s => Math.min(4, s + 1));
        setIsLocked(true);
      } else if (e.key === 'ArrowLeft') {
        setStage(s => Math.max(1, s - 1));
        setIsLocked(true);
      } else if (e.key === ' ') {
        e.preventDefault();
        handleReplay();
      } else if (e.key === 'Escape') {
        setIsLocked(false);
        setStage(4); // Return to overview
      }
    };
    
    const element = containerRef.current;
    if (!element) return;
    
    // We attach to the container to prevent global spacebar scrolling hijacking unless focused
    element.addEventListener('keydown', handleKeyDown);
    return () => element.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleScrub = (e: React.MouseEvent | React.TouchEvent, idx: number) => {
    if (!isLocked) setStage(idx);
  };

  const handleClickStage = (idx: number) => {
    setStage(idx);
    setIsLocked(true);
  };

  return (
    <div 
      ref={containerRef}
      tabIndex={0}
      className="w-full bg-[#FFFFFF] border border-[#111111] p-4 md:p-8 mb-12 shadow-sm relative font-mono select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6461A]"
      aria-label="Interactive Hero Translation Sequence. Use left and right arrows to scrub, space to replay, escape to unlock."
    >
      
      {/* Controls & Scrubber */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        {/* Scrubber Rail */}
        <div className="flex items-center gap-1 w-full sm:max-w-md h-8 relative group" onMouseLeave={() => !isLocked && setStage(4)}>
          {[1, 2, 3, 4].map(idx => (
            <button
              key={idx}
              onMouseEnter={(e) => handleScrub(e, idx)}
              onTouchStart={(e) => handleScrub(e, idx)}
              onClick={() => handleClickStage(idx)}
              className={`flex-1 h-2 transition-colors duration-200 cursor-pointer border-y border-[#111111] ${
                stage >= idx ? 'bg-[#E6461A]' : 'bg-[#EFEFEB] hover:bg-[#D9D9D3]'
              } ${isLocked && stage === idx ? 'border-2 border-[#111111]' : ''}`}
              aria-label={`Go to stage ${idx}`}
            />
          ))}
          {/* Active Label Hint */}
          <div className="absolute -bottom-6 left-0 text-[9px] font-bold text-[#505050] tracking-widest uppercase">
            {isLocked ? 'STATE: LOCKED [ESC TO RELEASE]' : 'SCRUB SEQUENCE'}
          </div>
        </div>

        <button 
          onClick={handleReplay}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#111111] text-[#F7F7F3] hover:bg-[#E6461A] transition-colors cursor-pointer text-[10px] font-bold uppercase shrink-0"
        >
          <RotateCcw className="w-3 h-3" />
          <span>{t.replay}</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-2 h-full min-h-[400px]">
        
        {/* 1. URBAN RECORD (Sign) */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          <span className={`text-[10px] font-bold uppercase mb-4 px-2 py-1 transition-colors ${stage === 1 ? 'bg-[#111111] text-[#F7F7F3]' : 'bg-[#EFEFEB] text-[#505050]'}`}>{t.stepUrban}</span>
          <motion.div
            initial="initial"
            animate={stage >= 1 ? "animate" : "initial"}
            variants={variants.fade}
            className={`relative w-24 h-24 border-4 rounded-full flex items-center justify-center shadow-sm transition-colors duration-300 ${stage === 1 ? 'border-[#111111] bg-[#F7F7F3]' : 'border-[#A6321B] bg-white'}`}
          >
            <div className="w-12 h-12 relative flex items-center justify-center">
              <div className="w-8 h-2 bg-[#111111] rounded-sm absolute" />
              <div className="w-3 h-3 border-t-2 border-r-2 border-[#111111] transform rotate-45 absolute right-2" />
              <div className="w-20 h-1.5 bg-[#A6321B] transform rotate-45 absolute" />
            </div>
          </motion.div>
          <motion.div 
            initial="initial" animate={stage >= 1 ? "animate" : "initial"} variants={variants.metadataReveal}
            className="mt-4 text-[9px] text-center text-[#505050] break-all px-2 max-w-full tech-label"
          >
            regulatory--no-right-turn--g1
          </motion.div>
        </div>

        <div className="hidden lg:block w-8 border-t border-dashed border-[#D9D9D3]" />

        {/* 2. SPATIAL VECTOR (Stage Axis) */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          <span className={`text-[10px] font-bold uppercase mb-4 px-2 py-1 transition-colors ${stage === 2 ? 'bg-[#111111] text-[#F7F7F3]' : 'bg-[#EFEFEB] text-[#505050]'}`}>{t.stepVector}</span>
          <div className="relative w-full max-w-[200px] h-24 flex items-center">
            
            <motion.div initial="initial" animate={stage >= 2 ? "animate" : "initial"} variants={variants.fade} className="absolute left-0 w-full h-full">
              <div className="absolute left-0 w-full h-[1px] bg-[#111111] top-1/2 -translate-y-1/2" />
              <div className="absolute left-0 w-[1px] h-4 bg-[#111111] top-1/2 -translate-y-1/2" />
              <div className="absolute right-0 w-[1px] h-4 bg-[#111111] top-1/2 -translate-y-1/2" />
              <div className="absolute left-0 -bottom-4 text-[9px] tech-label">0m</div>
              <div className="absolute right-0 -bottom-4 text-[9px] tech-label">15m</div>
            </motion.div>
            
            <svg className="absolute left-0 w-[81%] h-12 top-1/2 -translate-y-1/2 overflow-visible">
              <motion.line
                x1="0" y1="24" x2="100%" y2="24"
                stroke="#E6461A" strokeWidth="3"
                initial="initial"
                animate={stage >= 2 ? "animate" : "initial"}
                variants={variants.lineDraw}
              />
              <motion.polygon
                points="100%,24 calc(100% - 6px),20 calc(100% - 6px),28"
                fill="#E6461A"
                initial="initial"
                animate={stage >= 2 ? "animate" : "initial"}
                variants={variants.fade}
              />
            </svg>
            <motion.div 
              initial="initial" animate={stage >= 2 ? "animate" : "initial"} variants={variants.metadataReveal}
              className={`absolute left-[81%] -top-4 text-[10px] font-bold transform -translate-x-1/2 whitespace-nowrap tech-label transition-colors ${stage === 2 ? 'text-[#111111]' : 'text-[#E6461A]'}`}
            >
              12.15m
            </motion.div>
          </div>
        </div>

        <div className="hidden lg:block w-8 border-t border-dashed border-[#D9D9D3]" />

        {/* 3. BODY RESPONSE (Skeleton Lock) */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          <span className={`text-[10px] font-bold uppercase mb-4 px-2 py-1 transition-colors ${stage === 3 ? 'bg-[#111111] text-[#F7F7F3]' : 'bg-[#EFEFEB] text-[#505050]'}`}>{t.stepBody}</span>
          <div className="relative w-24 h-48 flex items-center justify-center">
            <svg viewBox="0 0 100 200" className="w-full h-full overflow-visible">
              <motion.g initial="initial" animate={stage >= 3 ? "animate" : "initial"} variants={variants.fade}>
                <circle cx="50" cy="30" r="12" fill="none" stroke="#D9D9D3" strokeWidth="2" />
                <line x1="50" y1="42" x2="50" y2="120" stroke="#D9D9D3" strokeWidth="2" />
                <line x1="30" y1="60" x2="70" y2="60" stroke="#D9D9D3" strokeWidth="2" />
                <line x1="50" y1="120" x2="35" y2="180" stroke="#D9D9D3" strokeWidth="2" />
                <line x1="50" y1="120" x2="65" y2="180" stroke="#D9D9D3" strokeWidth="2" />
              </motion.g>

              <motion.g 
                initial="initial"
                animate={stage >= 3 ? "animate" : "initial"}
                variants={variants.freeze}
              >
                <circle cx="50" cy="80" r="6" fill="#111111" />
                <rect x="42" y="78" width="16" height="4" fill={stage === 3 ? "#111111" : "#E6461A"} className="transition-colors duration-300" />
                
                <circle cx="50" cy="120" r="8" fill="#111111" />
                <rect x="38" y="118" width="24" height="4" fill={stage === 3 ? "#111111" : "#E6461A"} className="transition-colors duration-300" />
                
                <path d="M 35 70 Q 20 80 35 90" fill="none" stroke="#E6461A" strokeWidth="1" strokeDasharray="2,2" />
                <path d="M 65 70 Q 80 80 65 90" fill="none" stroke="#E6461A" strokeWidth="1" strokeDasharray="2,2" />
              </motion.g>
            </svg>
          </div>
          <motion.div 
            initial="initial" animate={stage >= 3 ? "animate" : "initial"} variants={variants.metadataReveal}
            className="mt-2 text-[9px] text-center text-[#505050] tech-label"
          >
            RT.C1.3.1 [FREEZE]
          </motion.div>
        </div>

        <div className="hidden lg:block w-8 border-t border-dashed border-[#D9D9D3]" />

        {/* 4. STAGE NOTATION (Architectural Drawing) */}
        <div className="flex-[1.5] flex flex-col items-center justify-center relative">
          <span className={`text-[10px] font-bold uppercase mb-4 px-2 py-1 transition-colors ${stage === 4 ? 'bg-[#111111] text-[#F7F7F3]' : 'bg-[#EFEFEB] text-[#505050]'}`}>{t.stepNotation}</span>
          <div className="relative w-full max-w-[240px] h-48 bg-[#F7F7F3] border border-[#111111] overflow-hidden">
            <svg viewBox="0 0 240 200" className="w-full h-full">
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#D9D9D3" strokeWidth="0.5" />
              </pattern>
              <rect width="240" height="200" fill="url(#grid)" />

              <motion.g
                initial="initial"
                animate={stage >= 4 ? "animate" : "initial"}
                variants={variants.lineDraw}
              >
                <rect x="40" y="40" width="160" height="120" fill="none" stroke="#111111" strokeWidth="1" strokeDasharray="4 2" />
                <line x1="40" y1="100" x2="200" y2="100" stroke="#111111" strokeWidth="2" />
                <path d="M 120 40 L 120 160" fill="none" stroke="#A6321B" strokeWidth="1.5" />
                
                <circle cx="120" cy="100" r="15" fill="none" stroke="#E6461A" strokeWidth="2" />
                <circle cx="120" cy="100" r="4" fill="#111111" />
                <line x1="120" y1="100" x2="160" y2="60" stroke="#111111" strokeWidth="1" />
              </motion.g>

              <motion.g
                initial="initial"
                animate={stage >= 4 ? "animate" : "initial"}
                variants={variants.fade}
              >
                <text x="165" y="55" fontSize="8" fill="#111111" fontFamily="monospace">LOCUS: SPINE</text>
                <text x="165" y="65" fontSize="8" fill="#111111" fontFamily="monospace">STATE: LOCKED</text>
                
                <rect x="10" y="10" width="4" height="4" fill="#111111" />
                <rect x="226" y="10" width="4" height="4" fill="#111111" />
                <rect x="10" y="186" width="4" height="4" fill="#111111" />
                <rect x="226" y="186" width="4" height="4" fill="#111111" />
              </motion.g>
            </svg>
          </div>
          <motion.div 
            initial="initial" animate={stage >= 4 ? "animate" : "initial"} variants={variants.metadataReveal}
            className="mt-2 text-[9px] text-center text-[#505050] tech-label"
          >
            BOARD ST.C1.3.1
          </motion.div>
        </div>

      </div>
      
      {/* Hidden description for accessibility */}
      <div className="sr-only">
        This is an interactive transformation sequence. Stage 1 shows the raw urban record (a no right turn sign). Stage 2 shows its translation into a spatial vector on a 15 meter axis. Stage 3 shows how a human body registers this as pressure, locking the spine and pelvis. Stage 4 shows the final architectural notation diagram capturing all these elements.
      </div>
    </div>
  );
};
