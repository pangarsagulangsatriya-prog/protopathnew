import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { getProtoVariants } from '../../motion/protoMotion';

interface PanelContent {
  title: string;
  publicDesc: string;
  label: string;
}

interface FieldToStageProps {
  t: {
    panel1: PanelContent;
    panel2: PanelContent;
    panel3: PanelContent;
    viewTechnical: string;
  };
}

export const FieldToStage: React.FC<FieldToStageProps> = ({ t }) => {
  const prefersReducedMotion = useReducedMotion();
  const variants = getProtoVariants(!!prefersReducedMotion);

  // We manage the "open" state for each panel individually for hover/focus
  const [lockedPanel, setLockedPanel] = useState<number | null>(null);
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);
  
  // A global toggle for the "VIEW TECHNICAL LINEAGE" button
  const [allOpen, setAllOpen] = useState(false);

  useEffect(() => {
    if (allOpen) {
      setLockedPanel(null); // Clear individual locks if all open
    }
  }, [allOpen]);

  const handlePanelInteraction = (idx: number, type: 'enter' | 'leave' | 'click' | 'focus' | 'blur') => {
    if (allOpen) return;

    if (type === 'click') {
      setLockedPanel(prev => prev === idx ? null : idx);
    } else if (type === 'enter' || type === 'focus') {
      setHoveredPanel(idx);
    } else if (type === 'leave' || type === 'blur') {
      setHoveredPanel(null);
    }
  };

  const isPanelOpen = (idx: number) => allOpen || lockedPanel === idx || hoveredPanel === idx;

  return (
    <section className="mb-24" aria-label="From Field to Stage Translation">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#111111]">
        
        {/* PANEL 1: FIELD CAPTURE */}
        <div 
          className="border-b md:border-b-0 md:border-r border-[#111111] bg-[#FFFFFF] flex flex-col h-full group"
          onMouseEnter={() => handlePanelInteraction(1, 'enter')}
          onMouseLeave={() => handlePanelInteraction(1, 'leave')}
          onClick={() => handlePanelInteraction(1, 'click')}
        >
          <button 
            className="p-5 border-b border-[#111111] bg-[#F7F7F3] text-left focus:outline-none focus-visible:bg-[#EFEFEB] w-full"
            onFocus={() => handlePanelInteraction(1, 'focus')}
            onBlur={() => handlePanelInteraction(1, 'blur')}
            aria-expanded={isPanelOpen(1)}
          >
            <h3 className="font-extrabold text-[14px] tracking-widest">{t.panel1.title}</h3>
            <p className="text-[#505050] text-[13px] mt-2 font-sans">{t.panel1.publicDesc}</p>
          </button>
          
          <div className="p-8 flex-1 flex items-center justify-center min-h-[200px] cursor-pointer">
            <motion.div 
              initial="initial" whileInView="animate" viewport={{ once: true }} variants={variants.fade}
              className="relative w-20 h-20 border-4 border-[#A6321B] rounded-full flex items-center justify-center bg-white shadow-sm"
            >
              <div className="w-10 h-10 relative flex items-center justify-center">
                <div className="w-6 h-1.5 bg-[#111111] absolute" />
                <div className="w-2.5 h-2.5 border-t-[1.5px] border-r-[1.5px] border-[#111111] transform rotate-45 absolute right-2" />
                <div className="w-16 h-1 bg-[#A6321B] transform rotate-45 absolute" />
              </div>
            </motion.div>
          </div>
          
          {isPanelOpen(1) && (
            <motion.div 
              initial="initial" animate="animate" variants={variants.metadataReveal}
              className="p-4 border-t border-[#111111] bg-[#111111] text-[#F7F7F3] text-[10px] tech-label"
            >
              <div className="flex justify-between mb-1">
                <span className="text-[#888888]">RAW_ID:</span>
                <span className="font-bold">regulatory--no-right-turn--g1</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-[#888888]">LOCATION:</span>
                <span className="font-bold">NODE_A + 12.15M</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* PANEL 2: SEMANTIC READING */}
        <div 
          className="border-b md:border-b-0 md:border-r border-[#111111] bg-[#FFFFFF] flex flex-col h-full group"
          onMouseEnter={() => handlePanelInteraction(2, 'enter')}
          onMouseLeave={() => handlePanelInteraction(2, 'leave')}
          onClick={() => handlePanelInteraction(2, 'click')}
        >
          <button 
            className="p-5 border-b border-[#111111] bg-[#F7F7F3] text-left focus:outline-none focus-visible:bg-[#EFEFEB] w-full"
            onFocus={() => handlePanelInteraction(2, 'focus')}
            onBlur={() => handlePanelInteraction(2, 'blur')}
            aria-expanded={isPanelOpen(2)}
          >
            <h3 className="font-extrabold text-[14px] tracking-widest">{t.panel2.title}</h3>
            <p className="text-[#505050] text-[13px] mt-2 font-sans">{t.panel2.publicDesc}</p>
          </button>
          
          <div className="p-8 flex-1 flex items-center justify-center min-h-[200px] cursor-pointer">
            <svg viewBox="0 0 100 100" className="w-24 h-24 overflow-visible">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#D9D9D3" strokeWidth="1" strokeDasharray="4 2" />
              <line x1="10" y1="50" x2="90" y2="50" stroke="#111111" strokeWidth="2" />
              <motion.line 
                x1="50" y1="10" x2="50" y2="50" 
                stroke="#E6461A" strokeWidth="3" markerEnd="url(#arrow)" 
                initial="initial" whileInView="animate" viewport={{ once: true }} variants={variants.lineDraw}
              />
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#E6461A" />
                </marker>
              </defs>
            </svg>
          </div>
          
          {isPanelOpen(2) && (
            <motion.div 
              initial="initial" animate="animate" variants={variants.metadataReveal}
              className="p-4 border-t border-[#111111] bg-[#111111] text-[#F7F7F3] text-[10px] tech-label"
            >
              <div className="flex justify-between mb-1">
                <span className="text-[#888888]">SITUATION:</span>
                <span className="font-bold">ST.C1.3.1</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-[#888888]">VECTOR:</span>
                <span className="font-bold text-[#E6461A]">INTERRUPTION [LATERAL]</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* PANEL 3: PERFORMANCE TRANSLATION */}
        <div 
          className="bg-[#FFFFFF] flex flex-col h-full group"
          onMouseEnter={() => handlePanelInteraction(3, 'enter')}
          onMouseLeave={() => handlePanelInteraction(3, 'leave')}
          onClick={() => handlePanelInteraction(3, 'click')}
        >
          <button 
            className="p-5 border-b border-[#111111] bg-[#F7F7F3] text-left focus:outline-none focus-visible:bg-[#EFEFEB] w-full"
            onFocus={() => handlePanelInteraction(3, 'focus')}
            onBlur={() => handlePanelInteraction(3, 'blur')}
            aria-expanded={isPanelOpen(3)}
          >
            <h3 className="font-extrabold text-[14px] tracking-widest">{t.panel3.title}</h3>
            <p className="text-[#505050] text-[13px] mt-2 font-sans">{t.panel3.publicDesc}</p>
          </button>
          
          <div className="p-8 flex-1 flex items-center justify-center min-h-[200px] cursor-pointer">
            <svg viewBox="0 0 100 150" className="w-20 h-32 overflow-visible">
              <line x1="50" y1="20" x2="50" y2="130" stroke="#111111" strokeWidth="2" />
              <motion.circle cx="50" cy="50" r="4" fill="#E6461A" initial="initial" whileInView="animate" viewport={{ once: true }} variants={variants.fade} />
              <motion.line x1="50" y1="50" x2="80" y2="30" stroke="#E6461A" strokeWidth="1" strokeDasharray="2 2" initial="initial" whileInView="animate" viewport={{ once: true }} variants={variants.lineDraw} />
              <motion.circle cx="50" cy="100" r="4" fill="#E6461A" initial="initial" whileInView="animate" viewport={{ once: true }} variants={variants.fade} />
              <motion.line x1="50" y1="100" x2="20" y2="120" stroke="#E6461A" strokeWidth="1" strokeDasharray="2 2" initial="initial" whileInView="animate" viewport={{ once: true }} variants={variants.lineDraw} />
            </svg>
          </div>
          
          {isPanelOpen(3) && (
            <motion.div 
              initial="initial" animate="animate" variants={variants.metadataReveal}
              className="p-4 border-t border-[#111111] bg-[#111111] text-[#F7F7F3] text-[10px] tech-label"
            >
              <div className="flex justify-between mb-1">
                <span className="text-[#888888]">RESPONSE:</span>
                <span className="font-bold">RT.C1.3.1</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-[#888888]">LOCUS:</span>
                <span className="font-bold text-[#E6461A]">SPINE / PELVIS [LOCKED]</span>
              </div>
            </motion.div>
          )}
        </div>
        
      </div>
      
      {/* Progressive Disclosure Toggle */}
      <div className="flex justify-center -mt-[1px] relative z-10">
        <button
          onClick={() => setAllOpen(!allOpen)}
          className="bg-[#111111] text-[#F7F7F3] px-4 py-2 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#E6461A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6461A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F7F3]"
        >
          {t.viewTechnical}
          {allOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>
      </div>
    </section>
  );
};
