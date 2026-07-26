import React from 'react';
import { Compass, Database, MonitorPlay } from 'lucide-react';

interface PublicActionsProps {
  primaryLabel: string;
  secondaryLabel: string;
  onNavigate: (route: string) => void;
}

export const PublicActions: React.FC<PublicActionsProps> = ({
  primaryLabel,
  secondaryLabel,
  onNavigate,
}) => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mt-8 mb-12">
      <button
        onClick={() => onNavigate('/explore')}
        className="px-6 py-4 min-h-[44px] bg-[#E6461A] text-[#F7F7F3] hover:bg-[#111111] text-[13px] md:text-[14px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-[#E6461A] hover:border-[#111111] transition-colors cursor-pointer w-full sm:w-auto shadow-md"
      >
        <Compass className="w-5 h-5" />
        <span>{primaryLabel}</span>
      </button>
      
      <button
        onClick={() => onNavigate('/dataset')}
        className="px-6 py-4 min-h-[44px] bg-[#FFFFFF] text-[#111111] hover:bg-[#EFEFEB] text-[13px] md:text-[14px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-[#111111] transition-colors cursor-pointer w-full sm:w-auto"
      >
        <Database className="w-5 h-5 text-[#505050]" />
        <span>{secondaryLabel}</span>
      </button>

      <button
        onClick={() => onNavigate('/exhibition')}
        className="px-6 py-4 min-h-[44px] bg-[#FFFFFF] text-[#111111] hover:bg-[#EFEFEB] text-[13px] md:text-[14px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-[#111111] transition-colors cursor-pointer w-full sm:w-auto"
      >
        <MonitorPlay className="w-5 h-5 text-[#505050]" />
        <span className="sr-only sm:not-sr-only">EXHIBITION</span>
      </button>
    </div>
  );
};
