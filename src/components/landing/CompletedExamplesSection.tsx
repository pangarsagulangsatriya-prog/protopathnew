import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ExampleCardProps {
  code: string;
  title: string;
  description: string;
  status: 'COMPLETED EXAMPLE' | 'WORKING PROTOTYPE' | 'LEGACY VARIANT' | 'REVIEW REQUIRED';
  preview: React.ReactNode;
  route: string;
}

const ExampleCard: React.FC<ExampleCardProps> = ({ code, title, description, status, preview, route }) => {
  const navigate = useNavigate();

  const getStatusColor = () => {
    switch(status) {
      case 'COMPLETED EXAMPLE': return 'bg-[#111111] text-[#F7F7F3]';
      case 'WORKING PROTOTYPE': return 'bg-[#E6461A] text-[#F7F7F3]';
      case 'LEGACY VARIANT': return 'bg-[#D9D9D3] text-[#505050]';
      case 'REVIEW REQUIRED': return 'bg-[#A6321B] text-[#F7F7F3]';
      default: return 'bg-[#111111] text-[#F7F7F3]';
    }
  };

  const handleOpen = () => {
    // Analytics hook stub
    console.log(`[Analytics] landing_example_opened: ${code}`);
    navigate(route);
  };

  return (
    <div className="flex flex-col bg-[#FFFFFF] border border-[#111111] group transition-all duration-[160ms] hover:-translate-y-[2px] hover:shadow-md">
      {/* Status Bar */}
      <div className={`px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest font-mono flex justify-between items-center ${getStatusColor()}`}>
        <span>{status}</span>
        <span>{code}</span>
      </div>

      {/* Preview Area (Abstracted representations to keep component lightweight) */}
      <div className="h-[180px] bg-[#F7F7F3] border-b border-[#111111] relative overflow-hidden flex items-center justify-center p-4">
        <div className="w-full h-full relative transition-transform duration-[160ms] group-hover:scale-[1.02]">
          {preview}
        </div>
      </div>

      {/* Info Area */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-sans text-sm font-bold uppercase text-[#111111] leading-tight mb-2">
          {title}
        </h3>
        <p className="font-serif text-[13px] text-[#505050] leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Action */}
        <button 
          onClick={handleOpen}
          className="flex items-center gap-2 text-[10px] font-bold font-mono uppercase text-[#111111] group/btn transition-colors duration-[160ms] hover:text-[#E6461A]"
        >
          <span>OPEN EXAMPLE</span>
          <ArrowRight size={14} className="group-hover/btn:translate-x-[3px] transition-transform duration-[160ms]" />
        </button>
      </div>
    </div>
  );
};

export const CompletedExamplesSection: React.FC = () => {
  const examples: ExampleCardProps[] = [
    {
      code: 'ST.C1.3.1',
      title: 'AUTHORITY INTERRUPTION / FREEZE RESPONSE',
      description: 'A no-right-turn sign dictates a vector of prohibition, forcing the body to lock its primary axis.',
      status: 'COMPLETED EXAMPLE',
      route: '/explore?pair=pair-c1-3-1',
      preview: (
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
          <circle cx="50" cy="50" r="20" fill="none" stroke="#111111" strokeWidth="2" />
          <line x1="20" y1="50" x2="80" y2="50" stroke="#E6461A" strokeWidth="3" />
          <rect x="45" y="45" width="10" height="10" fill="#111111" />
        </svg>
      )
    },
    {
      code: 'ST.C1.3.2',
      title: 'CONFLICTING VECTORS / GLITCH RESPONSE',
      description: 'Two contradictory urban signs create an unresolved spatial situation, inducing a physical glitch.',
      status: 'COMPLETED EXAMPLE',
      route: '/explore?pair=pair-c1-3-2',
      preview: (
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
          <path d="M 30 30 L 70 70 M 30 70 L 70 30" stroke="#111111" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="#E6461A" strokeWidth="2" />
          <path d="M 45 45 Q 60 40 55 55" fill="none" stroke="#A6321B" strokeWidth="2" />
        </svg>
      )
    },
    {
      code: 'VIEW.SP',
      title: 'STAGE PLAN',
      description: 'Pure architectural top-down projection mapping spatial vectors on a 15-meter axis.',
      status: 'WORKING PROTOTYPE',
      route: '/explore?pair=pair-c1-3-1',
      preview: (
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
          <rect x="10" y="30" width="80" height="40" fill="none" stroke="#111111" strokeWidth="1" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="#D9D9D3" strokeWidth="1" />
          <circle cx="30" cy="50" r="4" fill="#E6461A" />
        </svg>
      )
    },
    {
      code: 'VIEW.BS',
      title: 'BODY STUDY',
      description: 'Somatic isolation analysis showing internal tension, primary weight transfer, and skeletal locks.',
      status: 'WORKING PROTOTYPE',
      route: '/explore?pair=pair-c1-3-1',
      preview: (
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
          <circle cx="50" cy="30" r="8" fill="none" stroke="#111111" strokeWidth="1.5" />
          <line x1="50" y1="38" x2="50" y2="70" stroke="#111111" strokeWidth="1.5" />
          <circle cx="50" cy="55" r="4" fill="#E6461A" />
        </svg>
      )
    },
    {
      code: 'VIEW.SQ',
      title: 'SEQUENCE STRIP',
      description: 'Linear progression of states capturing the transformation from approach to output residue.',
      status: 'WORKING PROTOTYPE',
      route: '/explore?pair=pair-c1-3-1',
      preview: (
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-60 flex gap-2">
          <rect x="10" y="25" width="20" height="50" fill="none" stroke="#111111" strokeWidth="1" />
          <rect x="40" y="25" width="20" height="50" fill="none" stroke="#111111" strokeWidth="1" />
          <rect x="70" y="25" width="20" height="50" fill="none" stroke="#E6461A" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      code: 'VIEW.FR',
      title: 'FORCE RELATION',
      description: 'Abstract field analysis separating regulatory prohibition from forward drive and torque.',
      status: 'WORKING PROTOTYPE',
      route: '/explore?pair=pair-c1-3-1',
      preview: (
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
          <defs>
            <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0,0 6,3 0,6" fill="#111111" />
            </marker>
          </defs>
          <line x1="20" y1="80" x2="80" y2="20" stroke="#111111" strokeWidth="2" markerEnd="url(#arrow)" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="#E6461A" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      code: 'VIEW.AB',
      title: 'FULL ARCHITECTURAL BOARD',
      description: 'The complete integrated notation combining stage plan, vectors, and progression sequence.',
      status: 'COMPLETED EXAMPLE',
      route: '/explore?pair=pair-c1-3-1',
      preview: (
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
          <rect x="10" y="10" width="80" height="80" fill="none" stroke="#111111" strokeWidth="2" />
          <rect x="20" y="20" width="60" height="30" fill="#EFEFEB" />
          <rect x="20" y="60" width="60" height="20" fill="none" stroke="#E6461A" strokeWidth="1" />
        </svg>
      )
    }
  ];

  return (
    <section className="mb-24">
      <div className="mb-12">
        <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight text-[#111111] mb-2">
          SELECTED COMPLETED EXAMPLES
        </h2>
        <p className="font-sans text-[15px] text-[#505050] max-w-2xl">
          These examples are complete studies within a project that remains open and evolving.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {examples.map((ex, i) => (
          <ExampleCard key={i} {...ex} />
        ))}
      </div>
    </section>
  );
};
