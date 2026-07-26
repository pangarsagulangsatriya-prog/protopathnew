import React from 'react';

interface ProjectContextProps {
  t: {
    label: string;
    heading: string;
    body: string;
    nodes: { start: string; end: string };
    mapLabels: { city: string; area: string; scale: string; sample: string; source: string };
  };
}

export const ProjectContext: React.FC<ProjectContextProps> = ({ t }) => {
  return (
    <section className="mt-16 mb-24 max-w-5xl" aria-label="Project Context">
      <div className="mb-8">
        <span className="text-[10px] bg-[#111111] text-[#F7F7F3] px-2 py-1 font-bold uppercase tracking-widest inline-block mb-4">
          {t.label}
        </span>
        <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight max-w-3xl leading-tight">
          {t.heading}
        </h2>
        <p className="text-[14px] md:text-[15px] text-[#505050] mt-4 leading-relaxed max-w-3xl font-sans">
          {t.body}
        </p>
      </div>

      <div className="w-full bg-[#FFFFFF] border border-[#111111] p-4 md:p-8 shadow-sm font-mono overflow-x-auto">
        <div className="min-w-[600px] h-[300px] relative">
          
          {/* Legend and Metadata */}
          <div className="absolute top-0 left-0 text-[9px] text-[#505050] uppercase space-y-1">
            <div className="font-bold text-[#111111]">{t.mapLabels.city}</div>
            <div>{t.mapLabels.area}</div>
            <div className="mt-2 text-[#E6461A] flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#E6461A] block"></span>
              <span>{t.mapLabels.sample}</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full border border-[#111111] block"></span>
              <span>{t.mapLabels.source}</span>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 text-[9px] text-[#505050] uppercase text-right">
            SCALE: {t.mapLabels.scale}
          </div>

          {/* Abstract Corridor Map SVG */}
          <svg viewBox="0 0 800 200" className="w-full h-full mt-8 overflow-visible">
            {/* Zones Background */}
            <rect x="50" y="50" width="200" height="100" fill="#F7F7F3" stroke="#D9D9D3" strokeWidth="1" strokeDasharray="4 2" />
            <rect x="250" y="50" width="300" height="100" fill="#F7F7F3" stroke="#D9D9D3" strokeWidth="1" strokeDasharray="4 2" />
            <rect x="550" y="50" width="200" height="100" fill="#F7F7F3" stroke="#D9D9D3" strokeWidth="1" strokeDasharray="4 2" />
            
            {/* Zone Labels */}
            <text x="150" y="40" fontSize="10" fill="#888888" textAnchor="middle" fontFamily="monospace">LENGKONG</text>
            <text x="400" y="40" fontSize="10" fill="#888888" textAnchor="middle" fontFamily="monospace">PALASARI</text>
            <text x="650" y="40" fontSize="10" fill="#888888" textAnchor="middle" fontFamily="monospace">KOSAMBI</text>

            {/* Main Corridor Route */}
            <path d="M 50 100 L 750 100" fill="none" stroke="#111111" strokeWidth="2" />
            
            {/* Measurement Ticks */}
            {Array.from({ length: 15 }).map((_, i) => (
              <line key={i} x1={50 + i * 50} y1="95" x2={50 + i * 50} y2="105" stroke="#111111" strokeWidth="1" />
            ))}
            
            {/* Nodes */}
            <circle cx="50" cy="100" r="4" fill="#111111" />
            <text x="50" y="125" fontSize="10" fill="#111111" textAnchor="middle" fontFamily="monospace" fontWeight="bold">{t.nodes.start}</text>
            
            <circle cx="750" cy="100" r="4" fill="#111111" />
            <text x="750" y="125" fontSize="10" fill="#111111" textAnchor="middle" fontFamily="monospace" fontWeight="bold">{t.nodes.end}</text>

            {/* Highlighted Stage Axis (15m sample) */}
            <line x1="300" y1="100" x2="450" y2="100" stroke="#E6461A" strokeWidth="4" />
            
            {/* Selected Feature at 12.15m (relative to the sample, so roughly at 421.5 on this scale) */}
            <circle cx="421.5" cy="100" r="6" fill="#F7F7F3" stroke="#E6461A" strokeWidth="2" />
            <circle cx="421.5" cy="100" r="2" fill="#E6461A" />
            
            <line x1="421.5" y1="100" x2="421.5" y2="60" stroke="#E6461A" strokeWidth="1" strokeDasharray="2 2" />
            <text x="421.5" y="55" fontSize="9" fill="#E6461A" textAnchor="middle" fontFamily="monospace" fontWeight="bold">12.15m</text>
            
          </svg>
        </div>
      </div>
    </section>
  );
};
