import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HowSystemWorks: React.FC = () => {
  const navigate = useNavigate();

  const steps = [
    {
      id: '01',
      title: 'DATA',
      desc: 'Street objects and Mapillary observations',
      route: '/explore?step=data',
    },
    {
      id: '02',
      title: 'SITUATION',
      desc: 'Data becomes spatial pressure',
      route: '/explore?step=situation',
    },
    {
      id: '03',
      title: 'BODY',
      desc: 'Pressure triggers a specific impulse',
      route: '/explore?step=body',
    },
    {
      id: '04',
      title: 'OUTPUT',
      desc: 'The body leaves a spatial residue',
      route: '/explore?step=output',
    }
  ];

  return (
    <section className="mb-24">
      <div className="mb-12">
        <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight text-[#111111] mb-2">
          HOW THE SYSTEM WORKS
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {/* Decorative connecting line */}
        <div className="hidden lg:block absolute top-6 left-0 w-full h-[1px] bg-[#D9D9D3] z-0" />

        {steps.map((step, idx) => (
          <div 
            key={step.id} 
            className="flex flex-col gap-4 relative z-10 group cursor-pointer"
            onClick={() => navigate(step.route)}
          >
            <div className="w-12 h-12 bg-[#F7F7F3] border-2 border-[#111111] flex items-center justify-center font-mono text-[14px] font-bold text-[#111111] group-hover:bg-[#E6461A] group-hover:text-[#F7F7F3] group-hover:border-[#E6461A] transition-colors duration-[160ms]">
              {step.id}
            </div>
            <div>
              <h3 className="font-mono text-[13px] font-bold text-[#111111] uppercase tracking-wider mb-2 group-hover:text-[#E6461A] transition-colors duration-[160ms]">
                {step.title}
              </h3>
              <p className="font-serif text-[14px] text-[#505050] leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
