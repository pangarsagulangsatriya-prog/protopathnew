import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Moon, Sun, MonitorPlay, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { getProtoVariants } from '../../motion/protoMotion';

interface ExhibitionPreviewProps {
  t?: any; // We'll pass localized text here later or hardcode based on prompt for now
}

const PREVIEW_BOARDS = [
  { id: 'ST.C1.3.1', src: '/assets/diagrams/st-c1-3-1__rt-c1-3-1.png', label: 'AUTHORITY INTERRUPTION / FREEZE' },
  { id: 'ST.C1.3.2', src: '/assets/diagrams/st-c1-3-2__rt-c1-3-2.png', label: 'CONFLICTING VECTORS / GLITCH' }
];

const LOOP_DURATION_MS = 6000;

export const ExhibitionPreview: React.FC<ExhibitionPreviewProps> = () => {
  const prefersReducedMotion = useReducedMotion();
  const variants = getProtoVariants(!!prefersReducedMotion);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(!prefersReducedMotion);
  const [isDark, setIsDark] = useState(false);
  const [showMetadata, setShowMetadata] = useState(true);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Handle intersection observer to pause when off-screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting && isPlaying) {
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, [isPlaying]);

  // Handle page visibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isPlaying) {
        setIsPlaying(false);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isPlaying]);

  // Handle loop timer
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % PREVIEW_BOARDS.length);
      }, LOOP_DURATION_MS);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const activeBoard = PREVIEW_BOARDS[currentIndex];

  return (
    <section className="mb-24" aria-label="Exhibition Mode Preview" ref={containerRef}>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight">
            EXHIBITION MODE
          </h2>
          <p className="text-[13px] md:text-[14px] text-[#505050] leading-relaxed font-sans mt-2 max-w-2xl">
            View the notation boards as a timed visual sequence for projection, rehearsal, or gallery display.
          </p>
        </div>
      </div>

      <div 
        className={`w-full aspect-video md:aspect-[21/9] border border-[#111111] relative overflow-hidden transition-colors duration-500 flex flex-col select-none ${
          isDark ? 'bg-[#111111] text-[#F7F7F3]' : 'bg-[#EFEFEB] text-[#111111]'
        }`}
      >
        {/* Top Metadata Bar */}
        <div className={`p-4 flex justify-between items-start z-10 transition-opacity duration-300 ${showMetadata ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col">
            <span className="font-mono font-bold text-[10px] md:text-[12px] tracking-widest">{activeBoard.id}</span>
            <span className="font-mono text-[9px] md:text-[10px] opacity-70 tracking-widest mt-1">{activeBoard.label}</span>
          </div>
          <div className="font-mono font-bold text-[10px] md:text-[12px] tracking-widest">
            {String(currentIndex + 1).padStart(2, '0')} / {String(PREVIEW_BOARDS.length).padStart(2, '0')}
          </div>
        </div>

        {/* Main Image Area */}
        <div className="flex-1 relative flex items-center justify-center p-4">
          <motion.img
            key={activeBoard.id}
            src={activeBoard.src}
            alt={activeBoard.label}
            initial="initial"
            animate="animate"
            variants={variants.fade}
            className={`w-full h-full object-contain ${isDark ? 'invert' : 'mix-blend-multiply'}`}
            loading="lazy"
          />
        </div>

        {/* Bottom Control Bar */}
        <div className={`border-t flex items-stretch h-12 z-10 transition-colors duration-500 ${isDark ? 'border-[#333333] bg-[#1A1A1A]' : 'border-[#D9D9D3] bg-[#F7F7F3]'}`}>
          
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className={`w-12 flex items-center justify-center border-r hover:bg-[#E6461A] hover:text-[#F7F7F3] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#E6461A] ${isDark ? 'border-[#333333]' : 'border-[#D9D9D3]'}`}
            aria-label={isPlaying ? 'Pause sequence' : 'Play sequence'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
          
          {/* Progress Rail */}
          <div className="flex-1 relative bg-transparent overflow-hidden">
            {isPlaying && !prefersReducedMotion && (
              <motion.div
                key={currentIndex}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: LOOP_DURATION_MS / 1000, ease: 'linear' }}
                className="absolute top-0 left-0 w-full h-1 bg-[#E6461A] origin-left"
              />
            )}
            {!isPlaying && (
              <div className="absolute top-0 left-0 w-full h-1 bg-[#E6461A]" />
            )}
          </div>

          <div className={`flex border-l ${isDark ? 'border-[#333333]' : 'border-[#D9D9D3]'}`}>
            <button 
              onClick={() => setShowMetadata(!showMetadata)}
              className={`px-3 md:px-4 text-[9px] font-mono font-bold tracking-widest uppercase border-r hover:bg-[#E6461A] hover:text-[#F7F7F3] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#E6461A] ${isDark ? 'border-[#333333]' : 'border-[#D9D9D3]'}`}
            >
              <span className="hidden sm:inline">DATA: </span>{showMetadata ? 'ON' : 'OFF'}
            </button>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="w-12 flex items-center justify-center hover:bg-[#E6461A] hover:text-[#F7F7F3] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#E6461A]"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <Link
          to="/exhibition"
          className="bg-[#111111] text-[#F7F7F3] px-5 py-3 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#E6461A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E6461A] focus-visible:ring-offset-[#F7F7F3]"
        >
          <Maximize className="w-3.5 h-3.5" />
          <span>ENTER FULL EXHIBITION MODE</span>
        </Link>
      </div>

    </section>
  );
};
