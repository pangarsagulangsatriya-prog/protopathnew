import React from 'react';
import { ProtoPathDatabase } from '../../domain/types';

interface ProjectMetricsProps {
  db: ProtoPathDatabase;
  t: {
    records: string;
    recordsDesc: string;
    corridor: string;
    corridorDesc: string;
    axis: string;
    axisDesc: string;
    stages: string;
    stagesDesc: string;
    boards: string;
    boardsDesc: string;
    meters: string;
  };
}

export const ProjectMetrics: React.FC<ProjectMetricsProps> = ({ db, t }) => {
  // Derive real values from database where applicable
  const totalRecords = db.datasets.reduce((sum, ds) => sum + ds.recordCount, 0) || 5018;
  const boardCount = db.scores.length || 2;

  const metrics = [
    {
      value: totalRecords.toLocaleString(),
      label: t.records,
      desc: t.recordsDesc,
      isHighlight: false,
    },
    {
      value: `100 ${t.meters}`,
      label: t.corridor,
      desc: t.corridorDesc,
      isHighlight: false,
    },
    {
      value: `15 ${t.meters}`,
      label: t.axis,
      desc: t.axisDesc,
      isHighlight: false,
    },
    {
      value: "5",
      label: t.stages,
      desc: t.stagesDesc,
      isHighlight: false,
    },
    {
      value: boardCount.toString(),
      label: t.boards,
      desc: t.boardsDesc,
      isHighlight: true,
    }
  ];

  return (
    <section className="mb-24" aria-label="Physical Project Metrics">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-0 border-t border-l border-[#111111]">
        {metrics.map((metric, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col border-r border-b border-[#111111] p-4 md:p-5 ${
              metric.isHighlight ? 'bg-[#111111] text-[#F7F7F3]' : 'bg-[#FFFFFF] text-[#111111]'
            }`}
          >
            <div className={`text-2xl md:text-3xl lg:text-4xl font-black mb-1 ${metric.isHighlight ? 'text-[#E6461A]' : 'text-[#111111]'}`}>
              {metric.value}
            </div>
            <div className={`text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-3 ${metric.isHighlight ? 'text-[#F7F7F3]' : 'text-[#111111]'}`}>
              {metric.label}
            </div>
            <div className={`text-[10px] md:text-[11px] leading-relaxed mt-auto font-sans ${metric.isHighlight ? 'text-[#A0A0A0]' : 'text-[#505050]'}`}>
              {metric.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
