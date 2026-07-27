import React from 'react';
import { ProtoPathDatabase } from '../domain/types';
import { ProjectIntro } from '../components/landing/ProjectIntro';
import { PublicActions } from '../components/landing/PublicActions';
import { HeroTranslation } from '../components/landing/HeroTranslation';
import { ProjectContext } from '../components/landing/ProjectContext';
import { FieldToStage } from '../components/landing/FieldToStage';
import { NotationBoards } from '../components/landing/NotationBoards';
import { ProjectMetrics } from '../components/landing/ProjectMetrics';
import { ExhibitionPreview } from '../components/landing/ExhibitionPreview';
import { ArchiveEntry } from '../components/landing/ArchiveEntry';
import { ProjectCredits } from '../components/landing/ProjectCredits';
import { copy, Language } from '../locales/copy';
import { useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { getProtoVariants } from '../motion/protoMotion';

interface LandingPageProps {
  db: ProtoPathDatabase;
  lang: Language;
  onNavigate?: (route: string) => void; // Keeping for compatibility if needed, but we use useNavigate now
}

export const LandingPage: React.FC<LandingPageProps> = ({ db, lang, onNavigate }) => {
  const t = copy[lang];
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const variants = getProtoVariants(!!prefersReducedMotion);
  
  const handleNavigate = onNavigate || ((route: string) => {
    navigate(route);
    window.scrollTo(0, 0);
  });

  return (
    <main className="w-full bg-[#F7F7F3] text-[#111111] font-mono flex flex-col p-4 md:p-8 select-none mx-auto max-w-7xl">
      
      {/* 1. HERO (Intro + Actions) */}
      <div className="mt-8">
        <ProjectIntro 
          eyebrow={t.hero.eyebrow}
          mainTitle={t.hero.mainTitle}
          desc1={t.hero.desc1}
          desc2={t.hero.desc2}
        />
        <PublicActions 
          enterScoreLabel={t.actions.enterScore}
          readMethodLabel={t.actions.readMethod}
          openArchiveLabel={t.actions.openArchive}
          onNavigate={handleNavigate}
        />
      </div>

      {/* 2. PROJECT CONTEXT */}
      <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={variants.fade}>
        <ProjectContext t={t.projectContext} />
      </motion.div>

      {/* 3. ONE RECORD / ONE TRANSFORMATION (Visual SVG Translation) */}
      <motion.section 
        aria-label="Transformation Sequence" 
        className="mb-24"
        initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={variants.fade}
      >
        <div className="mb-6">
          <span className="text-[10px] bg-[#111111] text-[#F7F7F3] px-2 py-1 font-bold uppercase tracking-widest inline-block mb-3">
            {t.process.oneWay}
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight max-w-3xl leading-tight">
            {t.process.chain}
          </h2>
        </div>
        <HeroTranslation t={t.hero} />
      </motion.section>

      {/* 4. FROM FIELD TO STAGE */}
      <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={variants.fade}>
        <FieldToStage t={t.fieldToStage} />
      </motion.div>

      {/* 5. NOTATION BOARDS */}
      <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={variants.fade}>
        <NotationBoards t={t.notationBoards} />
      </motion.div>

      {/* 6. PHYSICAL PROJECT METRICS */}
      <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={variants.fade}>
        <ProjectMetrics db={db} t={t.metrics} />
      </motion.div>

      {/* 6.5 EXHIBITION PREVIEW */}
      <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={variants.fade}>
        <ExhibitionPreview />
      </motion.div>

      {/* 7. RESEARCH ARCHIVE ENTRY */}
      <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={variants.fade}>
        <ArchiveEntry t={t.archiveEntry} navLabels={t.nav} />
      </motion.div>

      {/* 8. TEAM / STATUS / CREDITS */}
      <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={variants.fade}>
        <ProjectCredits t={t.credits} />
      </motion.div>

      {/* 9. FOOTER */}
      <footer className="border-t border-[#111111] pt-6 mt-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] text-[#505050]">
        <span>{t.footer.title}</span>
        <span className="font-bold text-[#111111]">{t.footer.verified}</span>
      </footer>
      
    </main>
  );
};
