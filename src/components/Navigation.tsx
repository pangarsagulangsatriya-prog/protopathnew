import React, { useState } from 'react';
import {
  Compass,
  Database,
  BookOpen,
  MonitorPlay,
  Layers,
  Globe,
  Maximize,
  Minimize,
  SlidersHorizontal,
  Home,
  CheckCircle,
} from 'lucide-react';

interface NavigationProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  lang: 'EN' | 'ID';
  onToggleLang: () => void;
  compareMode: boolean;
  onToggleCompare: () => void;
  viewMode: 'explore' | 'raw' | 'lineage' | 'exhibition';
  onChangeViewMode: (mode: 'explore' | 'raw' | 'lineage' | 'exhibition') => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentRoute,
  onNavigate,
  lang,
  onToggleLang,
  compareMode,
  onToggleCompare,
  viewMode,
  onChangeViewMode,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  const navItems = [
    { route: '/', label: 'OVERVIEW', icon: Home },
    { route: '/explore', label: 'EXPLORER', icon: Compass },
    { route: '/score/score-01', label: 'SCORE C1', icon: Layers },
    { route: '/dataset', label: 'DATASET', icon: Database },
    { route: '/method', label: 'METHOD', icon: BookOpen },
    { route: '/exhibition', label: 'EXHIBITION', icon: MonitorPlay },
  ];

  return (
    <header className="w-full bg-[#111111] text-[#F7F7F3] border-b border-[#333333] px-3 py-2 flex flex-wrap items-center justify-between gap-2 text-xs font-mono select-none z-50">
      {/* Brand Identity */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onNavigate('/')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-6 h-6 bg-[#E6461A] text-[#F7F7F3] flex items-center font-black text-xs justify-center font-mono">
            PP
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold tracking-widest text-[#F7F7F3] group-hover:text-[#E6461A] transition-colors uppercase text-[11px]">
              PROTO PATH
            </span>
            <span className="text-[8.5px] text-[#888888] tracking-wider uppercase">
              ARCHITECTURAL STAGE NOTATION
            </span>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-1.5 px-2 py-0.5 bg-[#222222] border border-[#333333] text-[9px] text-[#A0A0A0]">
          <CheckCircle className="w-3 h-3 text-emerald-400" />
          <span>DATA INTEGRITY: VERIFIED</span>
        </div>
      </div>

      {/* Center Nav Links */}
      <nav className="flex items-center gap-1 overflow-x-auto scrollbar-none">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            currentRoute === item.route ||
            (item.route !== '/' && currentRoute.startsWith(item.route));

          return (
            <button
              key={item.route}
              onClick={() => onNavigate(item.route)}
              className={`px-2.5 py-1 flex items-center gap-1.5 text-[10px] font-bold tracking-wider transition-colors cursor-pointer border ${
                isActive
                  ? 'bg-[#E6461A] text-[#F7F7F3] border-[#E6461A]'
                  : 'bg-[#1E1E1E] text-[#A0A0A0] border-[#333333] hover:text-[#F7F7F3] hover:bg-[#2A2A2A]'
              }`}
            >
              <Icon className="w-3 h-3" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Right Utility Controls */}
      <div className="flex items-center gap-1.5 shrink-0">
        {/* View Mode Selector (Explore Page) */}
        {currentRoute === '/explore' && (
          <div className="hidden lg:flex items-center bg-[#1E1E1E] border border-[#333333] p-0.5">
            {(['explore', 'raw', 'lineage'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => onChangeViewMode(mode)}
                className={`px-2 py-0.5 text-[9px] font-bold uppercase transition-colors cursor-pointer ${
                  viewMode === mode
                    ? 'bg-[#F7F7F3] text-[#111111]'
                    : 'text-[#A0A0A0] hover:text-[#F7F7F3]'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        )}

        {/* Compare Toggle */}
        {currentRoute === '/explore' && (
          <button
            onClick={onToggleCompare}
            className={`px-2 py-1 text-[9.5px] font-bold flex items-center gap-1 transition-colors cursor-pointer border ${
              compareMode
                ? 'bg-amber-500 text-[#111111] border-amber-500'
                : 'bg-[#1E1E1E] text-[#A0A0A0] border-[#333333] hover:text-[#F7F7F3]'
            }`}
            title="Compare Pair A vs Pair B"
          >
            <SlidersHorizontal className="w-3 h-3" />
            <span>COMPARE</span>
          </button>
        )}

        {/* Language Toggle */}
        <button
          onClick={onToggleLang}
          className="px-2 py-1 bg-[#1E1E1E] text-[#A0A0A0] hover:text-[#F7F7F3] border border-[#333333] text-[9.5px] font-bold flex items-center gap-1 cursor-pointer"
          title="Toggle Language EN / ID"
        >
          <Globe className="w-3 h-3" />
          <span>{lang}</span>
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={toggleFullscreen}
          className="p-1 bg-[#1E1E1E] text-[#A0A0A0] hover:text-[#F7F7F3] border border-[#333333] cursor-pointer"
          title="Toggle Fullscreen"
        >
          {isFullscreen ? <Minimize className="w-3.5 h-3.5" /> : <Maximize className="w-3.5 h-3.5" />}
        </button>
      </div>
    </header>
  );
};
