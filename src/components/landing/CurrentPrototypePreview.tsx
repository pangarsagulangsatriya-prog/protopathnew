import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, ArrowRight } from 'lucide-react';

export const CurrentPrototypePreview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="mb-24 relative overflow-hidden bg-[#111111] text-[#F7F7F3] border border-[#333333] group cursor-pointer" onClick={() => navigate('/explore')}>
      <div className="absolute inset-0 z-0 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <pattern id="grid-dark" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#333333" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-dark)" />
        </svg>
      </div>

      <div className="relative z-10 p-8 md:p-12 xl:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="text-[10px] font-bold text-[#A0A0A0] uppercase mb-4 tracking-widest flex items-center gap-2">
            <Compass size={14} className="text-[#E6461A]" />
            CURRENT PROTOTYPE PREVIEW
          </div>
          <h2 className="font-sans text-2xl md:text-3xl font-extrabold uppercase tracking-tight leading-tight mb-4 max-w-xl text-[#F7F7F3]">
            INTERACTIVE SCORE VIEWER
          </h2>
          <p className="font-serif text-[15px] md:text-base text-[#D9D9D3] leading-relaxed max-w-xl">
            Explore the current prototype mapping system. Switch between architectural boards, stage plans, body studies, and sequence views.
          </p>
        </div>

        <button className="bg-[#E6461A] text-[#F7F7F3] px-6 py-4 font-bold text-[11px] uppercase tracking-wider flex items-center gap-2 transition-all duration-[160ms] hover:bg-[#c93d17] hover:-translate-y-[1px] active:translate-y-[1px] shrink-0 shadow-md">
          ENTER THE PROTOTYPE
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-[160ms]" />
        </button>
      </div>
    </section>
  );
};
