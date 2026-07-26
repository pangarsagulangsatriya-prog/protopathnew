import React from 'react';

interface ProjectCreditsProps {
  t: {
    project: string;
    projectTitle: string;
    artisticLead: string;
    artisticLeadName: string;
    spatial: string;
    spatialName: string;
    movement: string;
    movementName: string;
    location: string;
    locationName: string;
    status: string;
    statusName: string;
  };
}

export const ProjectCredits: React.FC<ProjectCreditsProps> = ({ t }) => {
  const credits = [
    { label: t.project, value: t.projectTitle },
    { label: t.artisticLead, value: t.artisticLeadName },
    { label: t.spatial, value: t.spatialName },
    { label: t.movement, value: t.movementName },
    { label: t.location, value: t.locationName },
    { label: t.status, value: t.statusName },
  ];

  return (
    <section className="mb-12 border-t border-[#111111] pt-12" aria-label="Project Credits">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
        {credits.map((credit, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="text-[9px] text-[#888888] font-bold uppercase tracking-widest mb-1">
              {credit.label}
            </span>
            <span className="text-[12px] font-bold text-[#111111] uppercase tracking-wide">
              {credit.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
