import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReducedMotion } from 'motion/react';
import { X, Info } from 'lucide-react';

export const WipAnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setHasMounted(true);
    const dismissed = localStorage.getItem('protopath_wip_dismissed');
    if (!dismissed) {
      setIsVisible(true);
      trackEvent('landing_wip_notice_seen');
    }
  }, []);

  const trackEvent = (eventName: string) => {
    // Analytics hook stub
    console.log(`[Analytics] ${eventName}`);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('protopath_wip_dismissed', 'true');
    trackEvent('landing_wip_notice_dismissed');
  };

  const handleRecover = () => {
    setIsVisible(true);
    localStorage.removeItem('protopath_wip_dismissed');
  };

  if (!hasMounted) return null;

  if (!isVisible) {
    return (
      <button
        onClick={handleRecover}
        aria-label="Show Work In Progress Information"
        className="fixed bottom-4 left-4 z-50 bg-[#111111] text-[#F7F7F3] p-2 hover:bg-[#E6461A] transition-colors duration-[160ms]"
      >
        <Info size={16} />
      </button>
    );
  }

  return (
    <div 
      role="region" 
      aria-label="Work In Progress Announcement"
      className={`w-full bg-[#F7F7F3] border-b border-[#111111] py-2 px-4 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4 z-50 relative ${prefersReducedMotion ? '' : 'animate-in slide-in-from-top-full duration-300'}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex items-center gap-2">
          {/* Status marker */}
          <div className="w-2 h-2 bg-[#E6461A] rounded-sm shrink-0" aria-hidden="true" />
          <span className="font-mono text-[10px] font-bold text-[#111111] uppercase tracking-wider">
            WORK IN PROGRESS
          </span>
        </div>
        <div className="font-sans text-[12px] text-[#111111] leading-tight max-w-2xl">
          <span className="font-bold">PROTO PATH IS AN ONGOING WORK IN PROGRESS.</span> THIS WEBSITE PRESENTS SELECTED COMPLETED EXAMPLES FROM A LARGER, EVOLVING SYSTEM.
        </div>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <a 
          href="https://www.instagram.com/gulangsatriya/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-mono text-[10px] font-bold text-[#505050] hover:text-[#111111] uppercase transition-colors duration-[160ms] flex items-center gap-1 group"
          onClick={() => trackEvent('landing_follow_instagram_clicked')}
        >
          FOLLOW THE PROCESS 
          <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-[160ms]">↗</span>
        </a>
        <button 
          onClick={() => {
            trackEvent('landing_enter_score_clicked');
            navigate('/explore');
          }}
          className="font-mono text-[10px] font-bold bg-[#111111] text-[#F7F7F3] px-3 py-1.5 uppercase hover:bg-[#E6461A] hover:translate-y-[1px] active:translate-y-[2px] transition-all duration-[160ms]"
        >
          EXPLORE CURRENT WORK
        </button>
        <button 
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className="text-[#505050] hover:text-[#111111] transition-colors duration-[160ms] ml-2"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};
