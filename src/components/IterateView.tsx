/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { IterationLoop, BodyImpulseType } from '../types';
import { ITERATION_LOOPS } from '../data';
import { RefreshCw, Play, Layers, HelpCircle, AlertTriangle } from 'lucide-react';

interface IterateViewProps {
  onExecuteLoop: (loop: IterationLoop) => void;
  selectedLoopId: string | null;
  onSelectLoop: (loop: IterationLoop) => void;
  isPlaying: boolean;
}

export const IterateView: React.FC<IterateViewProps> = ({
  onExecuteLoop,
  selectedLoopId,
  onSelectLoop,
  isPlaying,
}) => {
  const activeLoop = ITERATION_LOOPS.find((l) => l.id === selectedLoopId) || ITERATION_LOOPS[0];

  return (
    <div className="w-full h-full flex flex-col bg-brand-card border border-brand-dark p-3 font-mono select-none overflow-y-auto scrollbar-thin">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-brand-dark pb-1.5 mb-3">
        <span className="text-[11px] font-bold tracking-widest text-brand-dark flex items-center gap-1.5 uppercase">
          <RefreshCw className="w-4 h-4" />
          <span>ITERATIVE REPLAY MOTOR &amp; PHASE 03 RULES</span>
        </span>
        <span className="text-[9px] text-brand-dark/50 font-bold uppercase">
          ITERATION REGISTER: ACTIVE
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 flex-1">
        
        {/* Left: Loop Selector List */}
        <div className="w-full lg:w-1/3 flex flex-col border border-brand-dark h-[280px] overflow-y-auto divide-y divide-brand-dark/10 bg-brand-card scrollbar-thin">
          <div className="p-2 bg-brand-secondary/60 text-[10px] font-bold border-b border-brand-dark text-brand-dark uppercase tracking-wider select-none">
            SELECT REPETITION LOOP
          </div>
          {ITERATION_LOOPS.map((loop) => {
            const isSelected = loop.id === activeLoop.id;
            return (
              <button
                key={loop.id}
                onClick={() => onSelectLoop(loop)}
                className={`p-2.5 text-left transition-all cursor-pointer ${
                  isSelected 
                    ? 'bg-brand-dark text-brand-card' 
                    : 'bg-brand-card text-brand-dark hover:bg-brand-secondary/30'
                }`}
              >
                <div className="text-[11px] font-bold mb-0.5 uppercase tracking-wide">{loop.name}</div>
                <p className={`text-[9.5px] leading-tight ${isSelected ? 'text-brand-card/70' : 'text-brand-dark/50'}`}>
                  {loop.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right: Loop Parameter Registry Display */}
        <div className="flex-1 border border-brand-dark bg-brand-card p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center border-b border-brand-dark pb-2.5 mb-3">
              <div>
                <span className="text-[9px] bg-brand-dark text-brand-card px-1.5 py-0.5 font-bold uppercase tracking-wider">
                  PHASE 03 REGISTRY
                </span>
                <h3 className="text-[12px] font-bold text-brand-dark mt-2 uppercase">
                  {activeLoop.name}
                </h3>
              </div>
              <div className="text-right">
                <div className="text-[8.5px] text-brand-dark/40 font-bold uppercase">REPEATED IMPULSES</div>
                <div className="flex gap-1 mt-1 justify-end">
                  {activeLoop.impulses.map((imp, idx) => (
                    <span 
                      key={idx} 
                      className="text-[8px] bg-brand-secondary text-brand-dark border border-brand-dark/15 px-1 py-0.5 font-bold uppercase"
                    >
                      {imp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Parameter Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mb-4">
              
              {/* Card 1: Variable Count */}
              <div className="border border-brand-dark p-2.5 bg-brand-card flex flex-col justify-between">
                <div className="text-[8px] text-brand-dark/40 font-bold uppercase mb-0.5">
                  Variable Count
                </div>
                <div className="text-xl font-black text-brand-dark">
                  {activeLoop.variableCount}x
                </div>
                <p className="text-[8.5px] text-brand-dark/50 leading-tight mt-1">
                  Number of repeating step cycles before register locks.
                </p>
              </div>

              {/* Card 2: Locking Rule */}
              <div className="border border-brand-dark p-2.5 bg-brand-card md:col-span-2 flex flex-col justify-between">
                <div className="text-[8px] text-brand-dark/40 font-bold uppercase mb-0.5">
                  Axis Locking Rule
                </div>
                <div className="text-[10px] font-bold text-brand-dark leading-snug">
                  {activeLoop.lockingRule}
                </div>
                <p className="text-[8px] text-brand-dark/40 mt-1 uppercase">
                  [METER: CONSTRAINT_INDEX_MAX]
                </p>
              </div>

            </div>

            {/* Card 3: Output Residue */}
            <div className="border border-brand-dark bg-brand-secondary/35 p-3 mb-3">
              <div className="text-[8px] text-brand-dark/40 font-bold uppercase mb-0.5">
                Residual Spatial Output
              </div>
              <div className="text-[10px] font-bold text-brand-dark flex items-center gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-brand-dark shrink-0 animate-pulse" />
                <span>{activeLoop.outputResidue}</span>
              </div>
            </div>

          </div>

          {/* Action Trigger Button */}
          <div className="border-t border-brand-dark pt-3 flex justify-end">
            <button
              onClick={() => onExecuteLoop(activeLoop)}
              disabled={isPlaying}
              className={`px-3 py-1.5 bg-brand-dark text-brand-card text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 border border-brand-dark hover:bg-brand-card hover:text-brand-dark transition-colors cursor-pointer ${
                isPlaying ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <Play className="w-3 h-3 fill-current" />
              <span>{isPlaying ? 'SIMULATION RUNNING...' : 'EXECUTE LOOP SIMULATION'}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
