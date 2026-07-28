import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { getProtoVariants } from '../../motion/protoMotion';

interface HeroTranslationProps {
  t: {
    stepUrban: string;
    stepVector: string;
    stepBody: string;
    stepNotation: string;
  };
}

type StageType = 'data' | 'situation' | 'body' | 'output' | null;

export const HeroTranslation: React.FC<HeroTranslationProps> = ({ t }) => {
  const prefersReducedMotion = useReducedMotion();
  const variants = getProtoVariants(!!prefersReducedMotion);
  const navigate = useNavigate();
  
  const [hoveredStage, setHoveredStage] = useState<StageType>(null);

  const getOpacity = (stage: StageType) => {
    if (!hoveredStage) return 'opacity-100';
    return hoveredStage === stage ? 'opacity-100' : 'opacity-40';
  };

  const getScale = (stage: StageType) => {
    if (!hoveredStage) return 'scale-100';
    return hoveredStage === stage ? 'scale-[1.02]' : 'scale-100';
  };

  const handleStageClick = (step: string) => {
    navigate(`/explore?step=${step}`);
  };

  return (
    <div 
      className="w-full bg-[#F7F7F3] border border-[#111111] p-4 md:p-8 mb-12 shadow-sm relative font-mono select-none"
      aria-label="Interactive Hero Translation Sequence."
    >
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-0 h-full min-h-[300px] relative">
        
        {/* Animated Connector Line */}
        <div className="hidden lg:block absolute left-24 right-24 top-1/2 h-[1px] bg-[#E5E5E0] -translate-y-1/2 z-0">
          {!prefersReducedMotion && (
            <motion.div 
              className={`h-full bg-[#111111] ${hoveredStage ? 'bg-[#E6461A] transition-colors duration-[160ms]' : ''}`}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          )}
          {prefersReducedMotion && (
            <div className={`h-full bg-[#111111] w-full ${hoveredStage ? 'bg-[#E6461A] transition-colors duration-[160ms]' : ''}`} />
          )}
        </div>

        {/* 1. RAW FEATURE */}
        <div 
          className={`flex-1 flex flex-col items-center justify-center relative z-10 transition-all duration-[160ms] cursor-pointer group ${getOpacity('data')} ${getScale('data')}`}
          onMouseEnter={() => setHoveredStage('data')}
          onMouseLeave={() => setHoveredStage(null)}
          onClick={() => handleStageClick('data')}
        >
          <span className={`text-[10px] font-bold uppercase mb-4 px-2 py-1 transition-colors duration-[160ms] ${hoveredStage === 'data' ? 'bg-[#E6461A] text-[#F7F7F3]' : 'bg-[#111111] text-[#F7F7F3]'}`}>
            RAW FEATURE
          </span>
          <div className="relative w-24 h-24 border-2 border-[#111111] bg-[#FFFFFF] rounded-full flex items-center justify-center shadow-sm group-hover:border-[#E6461A] transition-colors duration-[160ms]">
            <div className="w-12 h-12 relative flex items-center justify-center">
              <div className="w-8 h-2 bg-[#111111] rounded-sm absolute" />
              <div className="w-3 h-3 border-t-2 border-r-2 border-[#111111] transform rotate-45 absolute right-2" />
              <div className="w-20 h-1.5 bg-[#A6321B] transform rotate-45 absolute" />
            </div>
          </div>
          <div className="mt-4 text-[9px] text-center text-[#505050] break-all px-2 max-w-full tech-label relative">
            regulatory--no-right-turn--g1
            {hoveredStage === 'data' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#111111] text-[#F7F7F3] text-[9px] px-2 py-1 whitespace-nowrap z-20">
                Source Mapillary Image
              </div>
            )}
          </div>
        </div>

        {/* 2. SITUATION */}
        <div 
          className={`flex-1 flex flex-col items-center justify-center relative z-10 transition-all duration-[160ms] cursor-pointer group ${getOpacity('situation')} ${getScale('situation')}`}
          onMouseEnter={() => setHoveredStage('situation')}
          onMouseLeave={() => setHoveredStage(null)}
          onClick={() => handleStageClick('situation')}
        >
          <span className={`text-[10px] font-bold uppercase mb-4 px-2 py-1 transition-colors duration-[160ms] ${hoveredStage === 'situation' ? 'bg-[#E6461A] text-[#F7F7F3]' : 'bg-[#111111] text-[#F7F7F3]'}`}>
            SITUATION
          </span>
          <div className="relative w-full max-w-[160px] h-24 flex items-center bg-[#FFFFFF] border-2 border-[#111111] px-4 group-hover:border-[#E6461A] transition-colors duration-[160ms]">
            <div className="w-full h-[1px] bg-[#111111] relative">
              <div className="absolute left-0 w-[1px] h-4 bg-[#111111] -top-2" />
              <div className="absolute right-0 w-[1px] h-4 bg-[#111111] -top-2" />
              <div className="absolute left-0 -bottom-4 text-[9px] tech-label">0m</div>
              <div className="absolute right-0 -bottom-4 text-[9px] tech-label">15m</div>
            </div>
            <svg className="absolute left-4 w-[calc(100%-2rem)] h-12 top-1/2 -translate-y-1/2 overflow-visible">
              <line x1="0" y1="24" x2="100%" y2="24" stroke="#E6461A" strokeWidth="2" />
              <polygon points="100%,24 calc(100% - 6px),20 calc(100% - 6px),28" fill="#E6461A" />
            </svg>
          </div>
          <div className="mt-4 text-[9px] text-center text-[#505050] break-all px-2 max-w-full tech-label relative">
            AUTHORITY INTERRUPTION
            {hoveredStage === 'situation' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#111111] text-[#F7F7F3] text-[9px] px-2 py-1 whitespace-nowrap z-20">
                Spatial Pressure Extracted
              </div>
            )}
          </div>
        </div>

        {/* 3. BODY */}
        <div 
          className={`flex-1 flex flex-col items-center justify-center relative z-10 transition-all duration-[160ms] cursor-pointer group ${getOpacity('body')} ${getScale('body')}`}
          onMouseEnter={() => setHoveredStage('body')}
          onMouseLeave={() => setHoveredStage(null)}
          onClick={() => handleStageClick('body')}
        >
          <span className={`text-[10px] font-bold uppercase mb-4 px-2 py-1 transition-colors duration-[160ms] ${hoveredStage === 'body' ? 'bg-[#E6461A] text-[#F7F7F3]' : 'bg-[#111111] text-[#F7F7F3]'}`}>
            BODY
          </span>
          <div className="relative w-24 h-40 bg-[#FFFFFF] border-2 border-[#111111] flex items-center justify-center group-hover:border-[#E6461A] transition-colors duration-[160ms]">
            <svg viewBox="0 0 100 200" className="w-12 h-24 overflow-visible">
              <circle cx="50" cy="30" r="12" fill="none" stroke="#D9D9D3" strokeWidth="2" />
              <line x1="50" y1="42" x2="50" y2="120" stroke="#D9D9D3" strokeWidth="2" />
              <line x1="30" y1="60" x2="70" y2="60" stroke="#D9D9D3" strokeWidth="2" />
              <line x1="50" y1="120" x2="35" y2="180" stroke="#D9D9D3" strokeWidth="2" />
              <line x1="50" y1="120" x2="65" y2="180" stroke="#D9D9D3" strokeWidth="2" />

              <circle cx="50" cy="80" r="6" fill="#111111" className="group-hover:fill-[#E6461A] transition-colors duration-[160ms]" />
              <rect x="42" y="78" width="16" height="4" fill="#E6461A" />
              
              <circle cx="50" cy="120" r="8" fill="#111111" className="group-hover:fill-[#E6461A] transition-colors duration-[160ms]" />
              <rect x="38" y="118" width="24" height="4" fill="#E6461A" />
            </svg>
          </div>
          <div className="mt-4 text-[9px] text-center text-[#505050] tech-label relative">
            FREEZE
            {hoveredStage === 'body' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#111111] text-[#F7F7F3] text-[9px] px-2 py-1 whitespace-nowrap z-20">
                Somatic Response
              </div>
            )}
          </div>
        </div>

        {/* 4. OUTPUT */}
        <div 
          className={`flex-[1.2] flex flex-col items-center justify-center relative z-10 transition-all duration-[160ms] cursor-pointer group ${getOpacity('output')} ${getScale('output')}`}
          onMouseEnter={() => setHoveredStage('output')}
          onMouseLeave={() => setHoveredStage(null)}
          onClick={() => handleStageClick('output')}
        >
          <span className={`text-[10px] font-bold uppercase mb-4 px-2 py-1 transition-colors duration-[160ms] ${hoveredStage === 'output' ? 'bg-[#E6461A] text-[#F7F7F3]' : 'bg-[#111111] text-[#F7F7F3]'}`}>
            OUTPUT
          </span>
          <div className="relative w-full max-w-[200px] h-40 bg-[#FFFFFF] border-2 border-[#111111] overflow-hidden group-hover:border-[#E6461A] transition-colors duration-[160ms]">
            <svg viewBox="0 0 240 200" className="w-full h-full">
              <pattern id="grid-hero" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#D9D9D3" strokeWidth="0.5" />
              </pattern>
              <rect width="240" height="200" fill="url(#grid-hero)" />

              <rect x="40" y="40" width="160" height="120" fill="none" stroke="#111111" strokeWidth="1" strokeDasharray="4 2" />
              <line x1="40" y1="100" x2="200" y2="100" stroke="#111111" strokeWidth="2" />
              <path d="M 120 40 L 120 160" fill="none" stroke="#A6321B" strokeWidth="1.5" />
              
              <circle cx="120" cy="100" r="15" fill="none" stroke="#E6461A" strokeWidth="2" />
              <circle cx="120" cy="100" r="4" fill="#111111" className="group-hover:fill-[#E6461A] transition-colors duration-[160ms]" />
              
              <text x="145" y="65" fontSize="10" fill="#111111" fontFamily="monospace">LOCKED AXIS</text>
            </svg>
          </div>
          <div className="mt-4 text-[9px] text-center text-[#505050] tech-label relative">
            LOCKED AXIS
            {hoveredStage === 'output' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#111111] text-[#F7F7F3] text-[9px] px-2 py-1 whitespace-nowrap z-20">
                Architectural Notation
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
