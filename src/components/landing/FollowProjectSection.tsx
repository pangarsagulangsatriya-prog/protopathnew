import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy, CheckCircle2, ArrowUpRight, ArrowRight } from 'lucide-react';

export const FollowProjectSection: React.FC = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText('https://www.protopathproject.com/').then(() => {
      setCopied(true);
      // Analytics hook stub
      console.log(`[Analytics] landing_project_url_copied`);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const trackInstagramClick = () => {
    console.log(`[Analytics] landing_follow_instagram_clicked`);
  };

  return (
    <section className="w-full bg-[#111111] text-[#F7F7F3] border-y border-[#333333] mb-24 font-mono overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#333333]">
        
        {/* Left Side: Follow / Core Message */}
        <div className="p-8 md:p-12 xl:p-16 flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-bold text-[#A0A0A0] uppercase mb-6 tracking-widest flex items-center gap-2">
              <div className="w-2 h-2 bg-[#E6461A] rounded-sm shrink-0" />
              STATUS: CONTINUING
            </div>
            
            <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight leading-tight mb-6 max-w-xl">
              FOLLOW THE PROJECT AS IT DEVELOPS
            </h2>
            
            <p className="font-serif text-[15px] md:text-base text-[#D9D9D3] leading-relaxed max-w-xl mb-12">
              Proto Path will continue through new urban observations, performance scores, visual systems, and collaborations. Follow the process, contact the artist, or open a conversation around research, performance, curation, and spatial practice.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a 
              href="https://www.instagram.com/gulangsatriya/" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={trackInstagramClick}
              className="bg-[#E6461A] text-[#F7F7F3] px-6 py-3 font-bold text-[11px] uppercase tracking-wider flex items-center gap-2 group transition-all duration-[160ms] hover:bg-[#c93d17] hover:-translate-y-[1px] active:translate-y-[1px]"
            >
              FOLLOW @GULANGSATRIYA
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-[160ms]" />
            </a>

            <button 
              onClick={() => {
                console.log(`[Analytics] landing_enter_score_clicked`);
                navigate('/explore');
              }}
              className="bg-transparent border border-[#505050] text-[#F7F7F3] px-6 py-3 font-bold text-[11px] uppercase tracking-wider flex items-center gap-2 group transition-all duration-[160ms] hover:border-[#F7F7F3] hover:-translate-y-[1px] active:translate-y-[1px]"
            >
              EXPLORE CURRENT PROTOTYPE
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-[160ms]" />
            </button>
          </div>
        </div>

        {/* Right Side: Networking & Utilities */}
        <div className="flex flex-col divide-y divide-[#333333]">
          
          <div className="p-8 md:p-12 xl:p-16 flex-1 flex flex-col justify-center hover:bg-[#1A1A1A] transition-colors duration-[160ms]">
            <div className="text-[10px] font-bold text-[#A0A0A0] uppercase mb-4 tracking-widest">
              OPEN TO CONVERSATION
            </div>
            <p className="font-sans text-sm md:text-[15px] text-[#D9D9D3] leading-relaxed mb-6">
              Proto Path welcomes conversations with performers, choreographers, theatre-makers, spatial practitioners, researchers, curators, technologists, and urban-data communities.
            </p>
            <a 
              href="https://www.instagram.com/gulangsatriya/" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={trackInstagramClick}
              className="inline-flex font-mono text-[11px] font-bold text-[#E6461A] uppercase tracking-wider items-center gap-1 group hover:text-[#c93d17] transition-colors duration-[160ms] w-fit"
            >
              CONNECT VIA INSTAGRAM
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-[160ms]" />
            </a>
          </div>

          <div className="p-8 md:px-12 md:py-8 flex items-center justify-between hover:bg-[#1A1A1A] transition-colors duration-[160ms] cursor-pointer group" onClick={handleCopyUrl}>
            <div className="font-bold text-[11px] text-[#F7F7F3] tracking-widest uppercase">
              {copied ? 'PROJECT LINK COPIED' : 'COPY PROJECT URL'}
            </div>
            <div className="text-[#505050] group-hover:text-[#F7F7F3] transition-colors duration-[160ms]" aria-live="polite">
              {copied ? <CheckCircle2 size={16} className="text-[#E6461A]" /> : <Copy size={16} />}
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};
