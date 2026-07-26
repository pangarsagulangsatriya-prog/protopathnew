import React from 'react';

interface ProjectIntroProps {
  eyebrow: string;
  mainTitle: string;
  desc1: string;
  desc2: string;
}

export const ProjectIntro: React.FC<ProjectIntroProps> = ({
  eyebrow,
  mainTitle,
  desc1,
  desc2,
}) => {
  return (
    <section className="max-w-3xl mb-8 md:mb-12" aria-labelledby="project-intro">
      <span className="text-[11px] md:text-[12px] bg-[#111111] text-[#F7F7F3] px-2 py-1 font-bold uppercase tracking-widest inline-block mb-4">
        {eyebrow}
      </span>
      <h1 id="project-intro" className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight mb-6 leading-tight">
        {mainTitle}
      </h1>
      <div className="space-y-4">
        <p className="text-[15px] md:text-[17px] text-[#111111] leading-relaxed font-sans font-medium">
          {desc1}
        </p>
        <p className="text-[15px] md:text-[17px] text-[#505050] leading-relaxed font-sans">
          {desc2}
        </p>
      </div>
    </section>
  );
};
