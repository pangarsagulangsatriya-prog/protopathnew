/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface BottomSequenceTimelineProps {
  currentDistance: number;
}

interface SequenceStep {
  distance: number;
  label: string;
  subLabel: string;
}

export const BottomSequenceTimeline: React.FC<BottomSequenceTimelineProps> = ({ currentDistance }) => {
  const steps: SequenceStep[] = [
    { distance: 0, label: '0m', subLabel: 'INJECT' },
    { distance: 1.87, label: '1.87m', subLabel: 'ACCELERATE' },
    { distance: 3.55, label: '3.55m', subLabel: 'ASYMMETRIC' },
    { distance: 7.16, label: '7.16m', subLabel: 'COMPRESS' },
    { distance: 12.15, label: '12.15m', subLabel: 'FREEZE/GLITCH' },
    { distance: 12.45, label: '12.45m', subLabel: 'FIXATE' },
    { distance: 14.31, label: '14.31m', subLabel: 'GLITCH' },
    { distance: 15.00, label: '15m', subLabel: 'ARRIVE' },
  ];

  // Helper to determine active step
  const getActiveStepIndex = () => {
    // Find closest step
    let closestIndex = 0;
    let minDiff = Infinity;
    steps.forEach((step, index) => {
      const diff = Math.abs(currentDistance - step.distance);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = index;
      }
    });
    return closestIndex;
  };

  const activeIndex = getActiveStepIndex();

  return (
    <div className="w-full bg-brand-card border border-brand-dark p-3 font-mono select-none">
      <div className="flex justify-between items-center border-b border-brand-dark/10 pb-1.5 mb-2.5">
        <span className="text-[9.5px] font-bold uppercase tracking-wider text-brand-dark flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SEQUENCE_TIMELINE (REAL-TIME PHYSICAL DEPLOYMENT)</span>
        </span>
        <span className="text-[9px] text-brand-dark/50 font-bold">
          CURSOR POSITION: <strong className="text-brand-dark">{currentDistance.toFixed(2)}m</strong> / 15.00m
        </span>
      </div>

      <div className="flex items-center justify-between overflow-x-auto gap-1.5 py-1 scrollbar-thin">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          const isPassed = currentDistance >= step.distance;

          return (
            <React.Fragment key={index}>
              <div 
                className={`flex-1 min-w-[85px] p-1.5 border transition-all duration-200 flex flex-col justify-between h-14 ${
                  isActive 
                    ? 'bg-brand-dark text-brand-card border-brand-dark scale-[1.02] shadow-sm' 
                    : isPassed
                    ? 'bg-brand-secondary text-brand-dark border-brand-dark/25'
                    : 'bg-brand-card text-brand-dark/40 border-brand-dark/10'
                }`}
              >
                <div className="flex justify-between items-center text-[8.5px] font-bold">
                  <span>STEP {String(index + 1).padStart(2, '0')}</span>
                  <span className={isActive ? 'text-brand-card' : isPassed ? 'text-brand-dark' : 'text-brand-dark/40'}>
                    {step.label}
                  </span>
                </div>
                
                <div className="text-[9px] font-bold uppercase tracking-wider truncate">
                  {step.subLabel}
                </div>

                <div className="w-full bg-brand-dark/10 h-0.5 mt-0.5 overflow-hidden relative">
                  {isActive && (
                    <div className="absolute inset-0 bg-brand-card animate-pulse" />
                  )}
                  {isPassed && !isActive && (
                    <div className="absolute inset-0 bg-brand-dark" />
                  )}
                </div>
              </div>

              {index < steps.length - 1 && (
                <ArrowRight 
                  className={`w-3.5 h-3.5 shrink-0 transition-colors duration-200 ${
                    currentDistance >= steps[index + 1].distance 
                      ? 'text-brand-dark' 
                      : 'text-brand-dark/20'
                  }`} 
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
