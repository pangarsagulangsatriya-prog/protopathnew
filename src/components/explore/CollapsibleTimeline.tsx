import React, { useState, useEffect } from 'react';
import { SequenceFrame } from '../../domain/types';
import { Play, Pause, ChevronUp, ChevronDown, Clock, SkipBack, SkipForward } from 'lucide-react';

interface CollapsibleTimelineProps {
  sequenceFrames: SequenceFrame[];
  currentFrameIndex: number;
  onSelectFrame: (index: number) => void;
  onHighlightEntities?: (entityIds: string[]) => void;
}

export const CollapsibleTimeline: React.FC<CollapsibleTimelineProps> = ({
  sequenceFrames,
  currentFrameIndex,
  onSelectFrame,
  onHighlightEntities,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);

  // Auto-play timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && sequenceFrames.length > 0) {
      const activeFrame = sequenceFrames[currentFrameIndex];
      const duration = (activeFrame?.durationMs || 1200) / playbackSpeed;

      timer = setTimeout(() => {
        const nextIndex = (currentFrameIndex + 1) % sequenceFrames.length;
        onSelectFrame(nextIndex);
        if (onHighlightEntities && sequenceFrames[nextIndex]) {
          onHighlightEntities(sequenceFrames[nextIndex].activeEntityIds);
        }
      }, duration);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentFrameIndex, sequenceFrames, playbackSpeed]);

  const currentFrame = sequenceFrames[currentFrameIndex] || sequenceFrames[0];

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying && !isExpanded) {
      // Auto-expand when play begins
      setIsExpanded(true);
    }
  };

  return (
    <div className="w-full bg-[#FFFFFF] border-t border-[#111111] font-sans text-[#111111] select-none transition-all duration-300">
      {/* COLLAPSED / CONTROL BAR */}
      <div className="flex items-center justify-between p-2 px-4 border-b border-[#111111]/10">
        <div className="flex items-center gap-3">
          <button
            onClick={handleTogglePlay}
            className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer ${
              isPlaying ? 'bg-[#111111] text-[#F7F7F3]' : 'bg-[#EFEFEB] text-[#111111] hover:bg-[#E6461A] hover:text-[#F7F7F3]'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
          </button>
          
          <div className="flex items-center gap-2 font-mono text-[11px] font-bold">
            <span className="text-[#E6461A]">0{currentFrame.order}</span>
            <span className="text-[#888888]">/</span>
            <span className="text-[#111111]">0{sequenceFrames.length}</span>
            <span className="ml-2 uppercase truncate max-w-[150px] md:max-w-[300px] text-[#505050]">
              {currentFrame.title}
            </span>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider bg-[#EFEFEB] hover:bg-[#111111] hover:text-[#F7F7F3] transition-colors cursor-pointer"
        >
          <span>{isExpanded ? 'COLLAPSE' : 'EXPAND'}</span>
          {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* EXPANDED STATE */}
      {isExpanded && (
        <div className="p-4 bg-[#F7F7F3] animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            
            {/* Horizontal Step List */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none pb-2 md:pb-0">
              {sequenceFrames.map((frame, idx) => {
                const isActive = idx === currentFrameIndex;
                return (
                  <button
                    key={frame.id}
                    onClick={() => {
                      onSelectFrame(idx);
                      if (onHighlightEntities) onHighlightEntities(frame.activeEntityIds);
                    }}
                    className={`px-3 py-1.5 text-[10px] font-mono font-bold uppercase whitespace-nowrap transition-colors cursor-pointer flex flex-col gap-1 border-l-2 ${
                      isActive
                        ? 'border-[#E6461A] bg-[#FFFFFF] text-[#111111] shadow-sm'
                        : 'border-[#111111]/20 text-[#505050] hover:bg-[#FFFFFF]'
                    }`}
                  >
                    <span>0{frame.order} {frame.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanatory Text & Speed Controls */}
            <div className="flex flex-col gap-2 min-w-[280px]">
              <div className="flex items-start gap-2 bg-[#FFFFFF] border border-[#111111]/20 p-2 font-sans text-[11px] leading-snug">
                <Clock className="w-3.5 h-3.5 text-[#E6461A] shrink-0 mt-0.5" />
                <span>{currentFrame.description}</span>
              </div>
              
              {isPlaying && (
                <div className="flex items-center gap-2 self-end font-mono text-[9px] font-bold">
                  <span className="text-[#888888]">SPEED:</span>
                  <div className="flex gap-1">
                    {[0.5, 1, 1.5].map((spd) => (
                      <button
                        key={spd}
                        onClick={() => setPlaybackSpeed(spd)}
                        className={`px-1.5 py-0.5 border cursor-pointer ${
                          playbackSpeed === spd ? 'border-[#E6461A] bg-[#E6461A] text-[#F7F7F3]' : 'border-[#111111]/20 text-[#505050] hover:bg-[#111111] hover:text-[#FFFFFF]'
                        }`}
                      >
                        {spd}x
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
