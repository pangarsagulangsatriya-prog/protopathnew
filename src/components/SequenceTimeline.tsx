import React, { useState, useEffect } from 'react';
import { SequenceFrame } from '../domain/types';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  FastForward,
  Clock,
  Eye,
  Sliders,
} from 'lucide-react';

interface SequenceTimelineProps {
  sequenceFrames: SequenceFrame[];
  currentFrameIndex: number;
  onSelectFrame: (index: number) => void;
  onHighlightEntities?: (entityIds: string[]) => void;
}

export const SequenceTimeline: React.FC<SequenceTimelineProps> = ({
  sequenceFrames,
  currentFrameIndex,
  onSelectFrame,
  onHighlightEntities,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

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

  const handlePrev = () => {
    const prev = (currentFrameIndex - 1 + sequenceFrames.length) % sequenceFrames.length;
    onSelectFrame(prev);
    if (onHighlightEntities && sequenceFrames[prev]) {
      onHighlightEntities(sequenceFrames[prev].activeEntityIds);
    }
  };

  const handleNext = () => {
    const next = (currentFrameIndex + 1) % sequenceFrames.length;
    onSelectFrame(next);
    if (onHighlightEntities && sequenceFrames[next]) {
      onHighlightEntities(sequenceFrames[next].activeEntityIds);
    }
  };

  const currentFrame = sequenceFrames[currentFrameIndex] || sequenceFrames[0];

  return (
    <div className="w-full bg-[#111111] text-[#F7F7F3] border-t border-[#333333] p-2.5 font-mono text-xs select-none">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Playback Controls Left */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-3 py-1 bg-[#E6461A] text-[#F7F7F3] hover:bg-white hover:text-[#111111] font-extrabold text-[10px] tracking-wider uppercase flex items-center gap-1.5 transition-colors cursor-pointer border border-[#E6461A]"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
          </button>

          <button
            onClick={handlePrev}
            className="p-1 bg-[#222222] hover:bg-[#333333] border border-[#444444] cursor-pointer"
            title="Previous Frame"
          >
            <SkipBack className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleNext}
            className="p-1 bg-[#222222] hover:bg-[#333333] border border-[#444444] cursor-pointer"
            title="Next Frame"
          >
            <SkipForward className="w-3.5 h-3.5" />
          </button>

          {/* Speed Selector */}
          <div className="flex items-center gap-0.5 bg-[#222222] border border-[#444444] p-0.5 text-[9px]">
            {[0.5, 1, 2].map((spd) => (
              <button
                key={spd}
                onClick={() => setPlaybackSpeed(spd)}
                className={`px-1.5 py-0.5 font-bold cursor-pointer ${
                  playbackSpeed === spd ? 'bg-[#E6461A] text-[#F7F7F3]' : 'text-[#888888]'
                }`}
              >
                {spd}x
              </button>
            ))}
          </div>
        </div>

        {/* Center Sequence Frame Scrubber Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full scrollbar-none py-1">
          {sequenceFrames.map((frame, idx) => {
            const isActive = idx === currentFrameIndex;
            return (
              <button
                key={frame.id}
                onClick={() => {
                  onSelectFrame(idx);
                  if (onHighlightEntities) onHighlightEntities(frame.activeEntityIds);
                }}
                className={`px-2.5 py-1 text-[9.5px] font-bold border transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? 'bg-[#F7F7F3] text-[#111111] border-[#E6461A] ring-1 ring-[#E6461A]'
                    : 'bg-[#222222] text-[#A0A0A0] border-[#333333] hover:text-[#F7F7F3]'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#E6461A]' : 'bg-[#505050]'}`} />
                <span>0{frame.order} {frame.title}</span>
              </button>
            );
          })}
        </div>

        {/* Current Frame Explanation Right */}
        <div className="hidden xl:flex items-center gap-2 bg-[#1E1E1E] border border-[#333333] px-2.5 py-1 max-w-sm text-[9px] text-[#A0A0A0]">
          <Clock className="w-3.5 h-3.5 text-[#E6461A] shrink-0" />
          <div className="truncate">
            <span className="font-bold text-[#F7F7F3] mr-1">FRAME 0{currentFrame.order}:</span>
            <span>{currentFrame.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
