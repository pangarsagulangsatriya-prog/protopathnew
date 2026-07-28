import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export const ProjectIntro: React.FC = () => {
  const navigate = useNavigate();

  const trackEvent = (eventName: string) => {
    console.log(`[Analytics] ${eventName}`);
  };

  return (
    <section className="max-w-3xl mb-8 md:mb-12" aria-labelledby="project-intro">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-[#E6461A] rounded-sm shrink-0" />
        <span className="text-[10px] font-bold text-[#A0A0A0] uppercase tracking-widest inline-block">
          STATUS / WORK IN PROGRESS
        </span>
      </div>
      
      <h1 id="project-intro" className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight mb-2 leading-tight text-[#111111]">
        PROTO PATH
      </h1>
      <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-6 leading-tight text-[#505050]">
        WHERE DO YOU DEPART FROM?
      </h2>
      
      <div className="space-y-6">
        <p className="text-[16px] md:text-[18px] text-[#111111] leading-relaxed font-sans font-bold">
          Urban visual data translated into spatial situations, body impulses, and architectural performance notation.
        </p>
        
        <div className="text-[14px] md:text-[15px] text-[#505050] leading-relaxed font-serif space-y-4">
          <p>Proto Path is an evolving artistic-research system.</p>
          <p>
            The works currently presented here are selected completed examples: working scores, visual studies, and interface prototypes developed from Mapillary street data.
          </p>
          <p>The wider project remains open, growing, and in progress.</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 mt-10">
        <button
          onClick={() => {
            trackEvent('landing_enter_score_clicked');
            navigate('/explore');
          }}
          className="px-6 py-3 min-h-[44px] bg-[#111111] text-[#F7F7F3] hover:bg-[#E6461A] hover:-translate-y-[1px] active:translate-y-[1px] text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-[160ms] group"
        >
          <span>ENTER THE CURRENT SCORE</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-[160ms]" />
        </button>
        
        <a
          href="https://www.instagram.com/gulangsatriya/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('landing_follow_instagram_clicked')}
          className="px-6 py-3 min-h-[44px] bg-transparent text-[#111111] border border-[#111111] hover:bg-[#EFEFEB] hover:-translate-y-[1px] active:translate-y-[1px] text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-[160ms] group"
        >
          <span>FOLLOW THE PROCESS</span>
          <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-[160ms]" />
        </a>

        <button
          onClick={() => {
            trackEvent('landing_method_opened');
            navigate('/method');
          }}
          className="px-4 py-3 min-h-[44px] bg-transparent text-[#505050] hover:text-[#111111] text-[11px] font-bold uppercase tracking-wider flex items-center justify-center transition-colors duration-[160ms] underline underline-offset-4 decoration-[#D9D9D3] hover:decoration-[#111111]"
        >
          READ THE METHOD
        </button>
      </div>
    </section>
  );
};
