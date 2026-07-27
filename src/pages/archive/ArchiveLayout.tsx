import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { FileText, Layers, Database, GitBranch, AlertCircle } from 'lucide-react';
import { copy, Language } from '../../locales/copy';

interface ArchiveLayoutProps {
  lang: Language;
}

export const ArchiveLayout: React.FC<ArchiveLayoutProps> = ({ lang }) => {
  const t = copy[lang].nav;
  const location = useLocation();

  const archiveNavItems = [
    { route: '/archive', label: 'DASHBOARD', icon: Layers, exact: true },
    { route: '/archive/document', label: 'DOCUMENT', icon: FileText },
    { route: '/archive/scores', label: t.scoreRegistry, icon: Layers },
    { route: '/archive/datasets', label: t.dataset, icon: Database },
    { route: '/archive/lineage', label: 'LINEAGE', icon: GitBranch },
    { route: '/archive/conflicts', label: 'CONFLICTS', icon: AlertCircle },
  ];

  return (
    <div className="flex flex-col w-full h-full bg-[#F7F7F3]">
      {/* High-density Archive Sub-Navigation */}
      <div className="w-full bg-[#EFEFEB] border-b border-[#111111]/20 px-3 py-1.5 flex flex-wrap items-center gap-2 overflow-x-auto scrollbar-none">
        <span className="text-[9px] font-bold text-[#888888] uppercase tracking-widest mr-2">
          ARCHIVE / RESEARCH
        </span>
        {archiveNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.exact 
            ? location.pathname === item.route
            : location.pathname.startsWith(item.route);

          return (
            <NavLink
              key={item.route}
              to={item.route}
              className={`px-3 py-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider transition-colors border ${
                isActive
                  ? 'bg-[#111111] text-[#F7F7F3] border-[#111111]'
                  : 'bg-[#FFFFFF] text-[#505050] border-[#111111]/20 hover:text-[#111111] hover:border-[#111111]'
              }`}
            >
              <Icon className="w-3 h-3" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>

      {/* Archive Page Content */}
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};
