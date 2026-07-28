import React from 'react';
import { AnalyticalView } from '../../domain/types';
import { Maximize2, Activity, Grid, ZoomIn, Layers, Zap } from 'lucide-react';

interface AnalyticalTabsProps {
  activeView: AnalyticalView;
  onSelectView: (view: AnalyticalView) => void;
  onOpenFullBoard: () => void;
}

export const AnalyticalTabs: React.FC<AnalyticalTabsProps> = ({
  activeView,
  onSelectView,
  onOpenFullBoard
}) => {
  const tabs: { id: AnalyticalView; label: string; icon: React.FC<{className?: string}> }[] = [
    { id: 'architectural', label: 'ARCHITECTURAL BOARD', icon: Grid },
    { id: 'stage-plan', label: 'STAGE PLAN', icon: Activity },
    { id: 'body', label: 'BODY STUDY', icon: ZoomIn },
    { id: 'forces', label: 'FORCE RELATION', icon: Zap },
  ];

  return (
    <div className="w-full bg-[#FFFFFF] border-b border-[#111111] flex items-center justify-between px-2 overflow-x-auto select-none">
      <div className="flex items-center min-w-max">
        {tabs.map((tab) => {
          const isActive = activeView === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectView(tab.id)}
              className={`px-4 py-3 flex items-center gap-2 border-r border-[#E5E5E0] font-mono text-[10px] font-bold uppercase transition-colors ${
                isActive 
                  ? 'bg-[#111111] text-[#F7F7F3]' 
                  : 'text-[#505050] hover:bg-[#F7F7F3] hover:text-[#111111]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
      
      <button
        onClick={onOpenFullBoard}
        className="px-4 py-3 flex items-center gap-2 font-mono text-[10px] font-bold uppercase text-[#E6461A] hover:bg-[#EFEFEB] transition-colors ml-4 shrink-0"
        title="Open Full Architectural Board"
      >
        <span>FULL BOARD ↗</span>
      </button>
    </div>
  );
};
