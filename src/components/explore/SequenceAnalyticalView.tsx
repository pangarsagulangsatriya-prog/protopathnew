import React from 'react';
import { StageNotationModel } from '../../notation/model/types';
import { ProtoPathDatabase, SequenceFrame } from '../../domain/types';

interface SequenceAnalyticalViewProps {
  model: StageNotationModel;
  db: ProtoPathDatabase;
  activeSequenceFrames: SequenceFrame[];
  isIntegrated?: boolean;
  currentFrameIndex?: number;
  onSelectFrame?: (idx: number) => void;
}

export const SequenceAnalyticalView: React.FC<SequenceAnalyticalViewProps> = ({ 
  model, 
  db,
  activeSequenceFrames,
  isIntegrated = false,
  currentFrameIndex = 0,
  onSelectFrame
}) => {
  return (
    <div className={`w-full h-full flex flex-col bg-[#F7F7F3] overflow-hidden ${isIntegrated ? 'p-2' : 'p-6'}`}>
      
      {/* Header */}
      {!isIntegrated && (
        <div className="mb-8">
          <div className="font-mono text-[10px] font-bold text-[#505050] uppercase">Proto Path Progression</div>
          <div className="font-sans text-lg font-bold text-[#111111] uppercase mt-1">
            SEQUENCE ANALYSIS: {model.id}
          </div>
        </div>
      )}

      {isIntegrated && (
        <div className="mb-2 px-2">
          <div className="font-mono text-[10px] font-bold text-[#111111] uppercase tracking-wider">SEQUENCE STRIP - PROTO PATH PROGRESSION</div>
        </div>
      )}

      {/* Sequence Strip Container */}
      <div className="flex-1 flex gap-6 overflow-x-auto pb-4 items-center justify-center">
        {activeSequenceFrames.map((frame, idx) => {
          const isLast = idx === activeSequenceFrames.length - 1;
          const isActive = idx === currentFrameIndex;
          
          return (
            <React.Fragment key={frame.id}>
              {/* Frame Card */}
              <button
                onClick={() => onSelectFrame?.(idx)}
                className={`min-w-[280px] w-[280px] h-[320px] bg-[#FFFFFF] border flex flex-col shadow-sm shrink-0 transition-all text-left outline-none ${
                  isActive 
                    ? 'border-[#E6461A] ring-2 ring-[#E6461A]/20 scale-[1.02]' 
                    : 'border-[#111111] hover:border-[#E6461A]/50 hover:-translate-y-1 hover:shadow-md cursor-pointer opacity-75 hover:opacity-100'
                }`}
              >
                
                {/* Card Header */}
                <div className={`w-full flex items-center gap-2 p-3 border-b border-[#111111] text-[#FFFFFF] transition-colors ${
                  isActive ? 'bg-[#E6461A]' : 'bg-[#111111]'
                }`}>
                  <div className="font-mono text-[10px] font-bold bg-[#FFFFFF] text-[#111111] px-1.5 py-0.5">
                    {String(frame.order).padStart(2, '0')}
                  </div>
                  <div className="font-mono text-[11px] font-bold uppercase truncate">
                    {frame.title}
                  </div>
                </div>

                {/* Abstract Visual Box (Simplified Sequence Iconography) */}
                <div className="h-[120px] border-b border-[#E5E5E0] bg-[#F7F7F3] flex items-center justify-center relative">
                  <svg viewBox="0 0 200 80" className="w-full h-full">
                    {/* Axis */}
                    <line x1="20" y1="40" x2="180" y2="40" stroke="#111111" strokeWidth="2" />
                    
                    {/* Variations based on frame order/title */}
                    {idx === 0 && (
                      <g>
                        <circle cx="100" cy="40" r="8" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
                      </g>
                    )}
                    {idx === 1 && (
                      <g>
                        <circle cx="100" cy="40" r="8" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
                        <line x1="140" y1="40" x2="115" y2="40" stroke="#E6461A" strokeWidth="2" />
                        <polygon points="115,40 120,36 120,44" fill="#E6461A" />
                      </g>
                    )}
                    {idx >= 2 && (
                      <g>
                        <circle cx="100" cy="40" r="10" fill="#E6461A" opacity="0.2" />
                        <circle cx="100" cy="40" r="8" fill="#E6461A" stroke="#111111" strokeWidth="2" strokeDasharray={model.performer.bodyImpulse === 'GLITCH' ? "2,2" : ""} />
                        <line x1="140" y1="40" x2="115" y2="40" stroke="#E6461A" strokeWidth="2" />
                      </g>
                    )}
                  </svg>
                </div>

                {/* Text Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div className="font-sans text-xs text-[#505050] font-medium leading-relaxed">
                    {frame.description}
                  </div>
                  
                  {/* Residue / State Info (Optional for specific frames) */}
                  {isLast && (
                    <div className="mt-4 pt-3 border-t border-[#E5E5E0]">
                      <div className="font-mono text-[9px] font-bold text-[#E6461A] mb-1 uppercase">Output Residue</div>
                      <div className="font-sans text-[10px] text-[#111111] font-bold uppercase leading-tight">
                        {model.residuals.map(r => r.description).join(' • ')}
                      </div>
                    </div>
                  )}
                </div>
              </button>

              {/* Arrow connecting frames */}
              {!isLast && (
                <div className="flex shrink-0 text-[#111111] opacity-50 px-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
      
    </div>
  );
};
