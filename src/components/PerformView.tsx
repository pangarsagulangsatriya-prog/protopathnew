/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { UrbanDataPoint } from '../types';
import { Play, Square, RefreshCw, ChevronLeft, ChevronRight, Timer } from 'lucide-react';

interface PerformViewProps {
  activePoint: UrbanDataPoint | null;
  dataPoints: UrbanDataPoint[];
  currentDistance: number;
  onJumpToDistance: (distance: number, point: UrbanDataPoint) => void;
}

export const PerformView: React.FC<PerformViewProps> = ({
  activePoint,
  dataPoints,
  currentDistance,
  onJumpToDistance,
}) => {
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // Filter out origin and terminal markers to get 8 real challenge checkpoints
  const checkpoints = dataPoints.filter(
    (pt) => pt.taxonomy !== 'MARKER_OBJECT' || pt.distance === 0 || pt.distance === 15
  );

  // Find active checkpoint index
  const activeCheckpointIndex = checkpoints.findIndex(
    (pt) => pt.id === (activePoint?.id || checkpoints[0].id)
  );

  const currentCheckpoint = checkpoints[activeCheckpointIndex] || checkpoints[0];

  // Timer counter
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const handleNext = () => {
    const nextIdx = (activeCheckpointIndex + 1) % checkpoints.length;
    onJumpToDistance(checkpoints[nextIdx].distance, checkpoints[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (activeCheckpointIndex - 1 + checkpoints.length) % checkpoints.length;
    onJumpToDistance(checkpoints[prevIdx].distance, checkpoints[prevIdx]);
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="w-full h-full flex flex-col bg-brand-card border border-brand-dark p-3 font-mono select-none overflow-y-auto scrollbar-thin">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-brand-dark pb-1.5 mb-3">
        <span className="text-[11px] font-bold tracking-widest text-brand-dark flex items-center gap-1.5 uppercase">
          <Timer className="w-4 h-4" />
          <span>PERFORMANCE SCRIPT &amp; STAGE DIRECTION</span>
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-brand-dark/50 font-bold uppercase">SESSION TIMER:</span>
          <span className="text-[10px] font-bold bg-brand-dark text-brand-card px-1.5 py-0.5">
            {formatTime(seconds)}
          </span>
          <button 
            onClick={() => { setSeconds(0); }} 
            className="p-1 hover:bg-brand-secondary/60 border border-brand-dark/15 active:bg-brand-secondary"
            title="Reset timer"
          >
            <RefreshCw className="w-3 h-3 text-brand-dark" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-3">
        {/* Left: Checkpoint List Selector */}
        <div className="w-full lg:w-1/3 flex flex-col border border-brand-dark divide-y divide-brand-dark/10 h-[340px] overflow-y-auto bg-brand-card scrollbar-thin">
          <div className="p-2 bg-brand-secondary/60 text-[10px] font-bold border-b border-brand-dark text-brand-dark uppercase tracking-wider select-none">
            CHECKPOINT REGISTRY
          </div>
          {checkpoints.map((cp, idx) => {
            const isActive = cp.id === currentCheckpoint.id;
            return (
              <button
                key={cp.id}
                onClick={() => onJumpToDistance(cp.distance, cp)}
                className={`p-2 text-left text-[10.5px] transition-all flex items-center justify-between cursor-pointer ${
                  isActive 
                    ? 'bg-brand-dark text-brand-card font-bold' 
                    : 'bg-brand-card text-brand-dark hover:bg-brand-secondary/30'
                }`}
              >
                <div>
                  <div className="font-bold">
                    CP {String(idx + 1).padStart(2, '0')} - [{cp.id}]
                  </div>
                  <div className={isActive ? 'text-brand-card/70' : 'text-brand-dark/50'}>
                    {cp.featureValue.replace('object--', '')}
                  </div>
                </div>
                <div className="font-bold shrink-0 ml-1">±{cp.distance}m</div>
              </button>
            );
          })}
        </div>

        {/* Right: Detailed Prompt Card (Stage Script) */}
        <div className="flex-1 border border-brand-dark bg-brand-card p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center border-b border-brand-dark pb-2.5 mb-3">
              <div>
                <span className="text-[9px] bg-brand-dark text-brand-card px-1.5 py-0.5 font-bold uppercase tracking-wider">
                  CHECKPOINT {String(activeCheckpointIndex + 1).padStart(2, '0')}
                </span>
                <h3 className="text-[12px] font-bold text-brand-dark mt-1.5 uppercase tracking-wide">
                  {currentCheckpoint.taxonomy.replace('_OBJECT', '')} CONTEXT
                </h3>
              </div>
              <div className="text-right">
                <div className="text-[8.5px] text-brand-dark/40 font-bold uppercase">STAGE LOCUS</div>
                <div className="text-[10px] font-bold text-brand-dark uppercase">
                  {currentCheckpoint.bodyLocus}
                </div>
              </div>
            </div>

            {/* Structured Specifications Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3 border-b border-brand-dark/10 pb-3 text-[10px]">
              <div>
                <div className="text-[8px] text-brand-dark/40 font-bold uppercase">Distance</div>
                <div className="font-bold text-brand-dark text-[11px]">±{currentCheckpoint.distance}m</div>
              </div>
              <div>
                <div className="text-[8px] text-brand-dark/40 font-bold uppercase">Object Category</div>
                <div className="font-bold text-brand-dark text-[10px] truncate">[{currentCheckpoint.taxonomy.replace('_OBJECT', '')}]</div>
              </div>
              <div>
                <div className="text-[8px] text-brand-dark/40 font-bold uppercase">Impulse / Stimulus</div>
                <div className="font-bold text-brand-dark text-[11px]">[{currentCheckpoint.impulse}]</div>
              </div>
              <div>
                <div className="text-[8px] text-brand-dark/40 font-bold uppercase">Spatial pressure</div>
                <div className="font-bold text-brand-dark text-[10px] truncate">[{currentCheckpoint.situation}]</div>
              </div>
            </div>

            {/* Instruction Body */}
            <div className="mb-3">
              <div className="text-[8px] text-brand-dark/40 font-bold uppercase mb-1">Performer Instructions</div>
              <div className="border border-brand-dark bg-brand-secondary/35 p-2.5 text-[10px] leading-relaxed text-brand-dark">
                {currentCheckpoint.movementInstruction.split('. ').map((sentence, idx) => (
                  <p key={idx} className="mb-1 last:mb-0">
                    ➔ {sentence}
                  </p>
                ))}
              </div>
            </div>

            {/* Spatial Output Residue */}
            <div>
              <div className="text-[8px] text-brand-dark/40 font-bold uppercase mb-1">Expected Output Residue</div>
              <div className="font-bold text-brand-dark text-[10px] flex items-center gap-2 border border-brand-dark/15 px-2 py-1.5 bg-brand-secondary/15">
                <span className="w-2 h-2 rounded-full bg-brand-dark animate-pulse" />
                <span>{currentCheckpoint.spatialOutput}</span>
              </div>
            </div>
          </div>

          {/* Pagination Controllers */}
          <div className="flex justify-between items-center border-t border-brand-dark pt-3 mt-4">
            <button
              onClick={handlePrev}
              className="px-2.5 py-1 border border-brand-dark hover:bg-brand-dark hover:text-brand-card transition-colors text-[10px] font-bold flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>PREVIOUS</span>
            </button>

            <span className="text-[9px] text-brand-dark/40 font-bold">
              PAGE {activeCheckpointIndex + 1} OF {checkpoints.length}
            </span>

            <button
              onClick={handleNext}
              className="px-2.5 py-1 border border-brand-dark hover:bg-brand-dark hover:text-brand-card transition-colors text-[10px] font-bold flex items-center gap-1 cursor-pointer"
            >
              <span>NEXT</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
