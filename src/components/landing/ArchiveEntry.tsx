import React from 'react';
import { Compass, Layers, Database, BookOpen, MonitorPlay, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArchiveEntryProps {
  t: {
    title: string;
    description: string;
    explore: string;
    scoreRegistry: string;
    dataset: string;
    method: string;
    exhibition: string;
  };
  navLabels: {
    explore: string;
    scoreRegistry: string;
    dataset: string;
    method: string;
    exhibition: string;
  };
}

export const ArchiveEntry: React.FC<ArchiveEntryProps> = ({ t, navLabels }) => {
  const cards = [
    { route: '/explore', label: navLabels.explore, desc: t.explore, icon: Compass },
    { route: '/score/score-01', label: navLabels.scoreRegistry, desc: t.scoreRegistry, icon: Layers },
    { route: '/dataset', label: navLabels.dataset, desc: t.dataset, icon: Database },
    { route: '/method', label: navLabels.method, desc: t.method, icon: BookOpen },
    { route: '/exhibition', label: navLabels.exhibition, desc: t.exhibition, icon: MonitorPlay },
  ];

  return (
    <section className="mb-24" aria-label="Research Archive Entry">
      <div className="max-w-3xl mb-8">
        <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight mb-3">
          {t.title}
        </h2>
        <p className="text-[13px] md:text-[14px] text-[#505050] leading-relaxed font-sans">
          {t.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.route}
              to={card.route}
              className="group block p-5 bg-[#FFFFFF] border border-[#111111] hover:bg-[#111111] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6461A]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 bg-[#EFEFEB] group-hover:bg-[#333333] flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4 text-[#111111] group-hover:text-[#F7F7F3]" />
                </div>
                <ArrowRight className="w-4 h-4 text-[#A0A0A0] group-hover:text-[#E6461A] transition-colors" />
              </div>
              <h3 className="font-bold text-[13px] uppercase tracking-wider text-[#111111] group-hover:text-[#F7F7F3] transition-colors mb-2">
                {card.label}
              </h3>
              <p className="text-[11px] text-[#505050] group-hover:text-[#A0A0A0] leading-relaxed font-sans transition-colors">
                {card.desc}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
