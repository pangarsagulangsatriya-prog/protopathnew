import React from 'react';
import { SequenceFrame } from '../../domain/types';
import { Play, Pause, ChevronRight } from 'lucide-react';

interface MiniSequenceRailProps {
  sequenceFrames: SequenceFrame[];
  currentFrameIndex: number;
  onSelectFrame: (index: number) => void;
}

export const MiniSequenceRail: React.FC<MiniSequenceRailProps> = ({
  sequenceFrames,
  currentFrameIndex,
  onSelectFrame,
}) => {
  if (sequenceFrames.length === 0) return null;

  return (
    <div className="w-full bg-[#F7F7F3] border-t border-[#111111]/20 flex flex-col xl:flex-row shadow-sm">
      
      {/* 1. Playback Controls */}
      <div className="flex items-center gap-1 p-2 border-b xl:border-b-0 xl:border-r border-[#111111]/20 bg-[#FFFFFF]">
        <button className="p-1.5 hover:bg-[#EFEFEB] text-[#E6461A] transition-colors rounded">
          <Play className="w-4 h-4 fill-current" />
        </button>
        <button className="p-1.5 hover:bg-[#EFEFEB] transition-colors rounded">
          <Pause className="w-4 h-4" />
        </button>
        
        <div className="h-4 w-px bg-[#111111]/20 mx-2" />
        
        <div className="flex gap-1 text-[10px] font-mono font-bold text-[#505050]">
          <button className="px-1.5 py-0.5 hover:bg-[#EFEFEB] rounded">0.5x</button>
          <button className="px-1.5 py-0.5 bg-[#111111] text-[#F7F7F3] rounded">1x</button>
          <button className="px-1.5 py-0.5 hover:bg-[#EFEFEB] rounded">2x</button>
        </div>
      </div>

      {/* 2. Sequence Rail */}
      <div className="flex-1 flex overflow-x-auto items-center px-4 py-2 gap-2 bg-[#FFFFFF]">
        {sequenceFrames.map((frame, index) => {
          const isActive = index === currentFrameIndex;
          const isPast = index < currentFrameIndex;
          
          return (
            <React.Fragment key={frame.id}>
              <button
                onClick={() => onSelectFrame(index)}
                className={`flex items-center gap-2 px-3 py-1.5 transition-all font-mono text-[10px] font-bold border rounded-sm shrink-0
                  ${isActive 
                    ? 'border-[#E6461A] bg-[#E6461A]/10 text-[#111111]' 
                    : 'border-transparent text-[#505050] hover:bg-[#F7F7F3]'
                  }
                `}
              >
                <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#E6461A]' : isPast ? 'bg-[#111111]' : 'bg-[#E5E5E0]'}`} />
                <span className="uppercase">{String(frame.order).padStart(2, '0')} {frame.title}</span>
              </button>
              
              {index < sequenceFrames.length - 1 && (
                <ChevronRight className="w-3.5 h-3.5 text-[#A0A09A] shrink-0" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* 3. Frame Readout */}
      <div className="hidden md:flex items-center p-3 border-l border-[#111111]/20 bg-[#F7F7F3] min-w-[300px]">
        <div className="font-mono text-[9px] font-bold text-[#505050] mr-2 shrink-0">
          FRAME {String(sequenceFrames[currentFrameIndex].order).padStart(2, '0')}:
        </div>
        <div className="font-sans text-[11px] font-semibold text-[#111111] truncate">
          {sequenceFrames[currentFrameIndex].description}
        </div>
      </div>
    </div>
  );
};
