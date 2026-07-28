import React from 'react';
import { useReducedMotion } from 'motion/react';

export const ProjectStatusPanel: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const qualitativeStates = [
    { label: 'RESEARCHING', status: 'ACTIVE' },
    { label: 'BUILDING', status: 'ACTIVE' },
    { label: 'TESTING', status: 'ACTIVE' },
    { label: 'PUBLISHING', status: 'INCREMENTAL' },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] border-y border-[#111111] mb-24 font-mono overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#111111]">
        
        {/* Status */}
        <div className="p-6 md:p-8 flex flex-col justify-between group">
          <div className="text-[10px] font-bold text-[#505050] uppercase mb-4 tracking-widest">
            STATUS
          </div>
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <div className={`w-3 h-3 bg-[#E6461A] rounded-full ${prefersReducedMotion ? '' : 'animate-ping opacity-75 absolute'}`} />
              <div className="w-3 h-3 bg-[#E6461A] rounded-full relative z-10" />
            </div>
            <div className="text-lg font-extrabold uppercase text-[#111111]">
              IN PROGRESS
            </div>
          </div>
        </div>

        {/* Current Material */}
        <div className="p-6 md:p-8 flex flex-col justify-between hover:bg-[#F7F7F3] transition-colors duration-[160ms]">
          <div className="text-[10px] font-bold text-[#505050] uppercase mb-4 tracking-widest">
            CURRENT PUBLIC MATERIAL
          </div>
          <div className="text-sm font-bold uppercase text-[#111111] leading-tight">
            SELECTED COMPLETED EXAMPLES
          </div>
        </div>

        {/* Next Development */}
        <div className="p-6 md:p-8 flex flex-col justify-between hover:bg-[#F7F7F3] transition-colors duration-[160ms]">
          <div className="text-[10px] font-bold text-[#505050] uppercase mb-4 tracking-widest">
            NEXT DEVELOPMENT
          </div>
          <div className="text-sm font-bold uppercase text-[#111111] leading-tight">
            NEW SCORES, NEW DATASETS, NEW FIELD TRANSLATIONS
          </div>
        </div>

        {/* Open To */}
        <div className="p-6 md:p-8 flex flex-col justify-between hover:bg-[#F7F7F3] transition-colors duration-[160ms]">
          <div className="text-[10px] font-bold text-[#505050] uppercase mb-4 tracking-widest">
            OPEN TO
          </div>
          <div className="text-sm font-bold uppercase text-[#111111] leading-tight">
            RESEARCH EXCHANGE, CURATORIAL CONVERSATION, PERFORMANCE COLLABORATION
          </div>
        </div>
      </div>

      {/* Progress Line */}
      <div className="border-t border-[#111111] p-6 md:p-8 bg-[#F7F7F3]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {qualitativeStates.map((state, idx) => (
            <div key={idx} className="flex-1 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase text-[#111111] tracking-widest">{state.label}</span>
                <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 ${
                  state.status === 'ACTIVE' ? 'bg-[#111111] text-[#F7F7F3]' : 'bg-[#EFEFEB] text-[#505050]'
                }`}>
                  {state.status}
                </span>
              </div>
              <div className="w-full h-1 bg-[#EFEFEB]">
                <div className={`h-full bg-[#111111] ${state.status === 'ACTIVE' ? 'w-full' : 'w-1/3'}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
