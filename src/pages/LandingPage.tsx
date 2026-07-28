import React from 'react';
import { ProjectIntro } from '../components/landing/ProjectIntro';
import { HeroTranslation } from '../components/landing/HeroTranslation';
import { ProjectStatusPanel } from '../components/landing/ProjectStatusPanel';
import { CompletedExamplesSection } from '../components/landing/CompletedExamplesSection';
import { HowSystemWorks } from '../components/landing/HowSystemWorks';
import { CurrentPrototypePreview } from '../components/landing/CurrentPrototypePreview';
import { FollowProjectSection } from '../components/landing/FollowProjectSection';
import { ProjectCredits } from '../components/landing/ProjectCredits';
import { copy } from '../locales/copy';
import { ProtoPathDatabase } from '../domain/types';

interface LandingPageProps {
  db: ProtoPathDatabase;
  onNavigate: (route: string) => void;
  lang: 'EN' | 'ID';
}

export const LandingPage: React.FC<LandingPageProps> = ({ db, onNavigate, lang }) => {
  const t = copy[lang];

  return (
    <main className="w-full bg-[#F7F7F3] text-[#111111] font-mono flex flex-col p-4 md:p-8 select-none mx-auto max-w-[1400px]">
      
      {/* 03 HERO + DATA-TO-BODY TRANSFORMATION */}
      <div className="mt-12 md:mt-16 xl:mt-24 mb-16">
        <ProjectIntro />
        <HeroTranslation t={t.hero} />
      </div>

      {/* 04 PROJECT STATUS */}
      <ProjectStatusPanel />

      {/* 05 SELECTED COMPLETED EXAMPLES */}
      <CompletedExamplesSection />

      {/* 06 HOW THE SYSTEM WORKS */}
      <HowSystemWorks />

      {/* 07 CURRENT PROTOTYPE PREVIEW */}
      <CurrentPrototypePreview />

      {/* 08 FOLLOW THE PROJECT / COLLABORATION */}
      <FollowProjectSection />

      {/* 09 FOOTER */}
      <footer className="mt-8 mb-12 border-t border-[#111111] pt-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-[#505050] text-[10px] font-mono uppercase tracking-widest">
          <div>PROTO PATH, AN ONGOING ARTISTIC-RESEARCH PROJECT.</div>
          <ProjectCredits t={t.credits} />
        </div>
        <span className="font-bold text-[#111111]">{t.footer.verified}</span>
      </footer>
      
    </main>
  );
};
