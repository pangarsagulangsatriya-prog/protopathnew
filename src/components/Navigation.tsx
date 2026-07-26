import React, { useState, useEffect } from 'react';
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
  Menu,
  X,
  GitCommit,
  FileJson
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { copy, Language } from '../locales/copy';
import { ResearchArchiveMenu } from './landing/ResearchArchiveMenu';

interface NavigationProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  lang: Language;
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = copy[lang].nav;

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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

  const handleMobileNavigate = (route: string) => {
    onNavigate(route);
    setIsMobileMenuOpen(false);
  };

  const publicNavItems = [
    { route: '/', label: t.project, icon: Home },
    { route: '/method', label: t.process, icon: BookOpen },
    { route: '/explore', label: t.explore, icon: Compass },
    { route: '/exhibition', label: t.exhibition, icon: MonitorPlay },
  ];

  const archiveNavItems = [
    { route: '/score/score-01', label: t.scoreRegistry, icon: Layers },
    { route: '/dataset', label: t.dataset, icon: Database },
  ];

  return (
    <>
      <header className="w-full bg-[#111111] text-[#F7F7F3] border-b border-[#333333] px-3 py-2 flex flex-wrap items-center justify-between gap-2 text-xs font-mono select-none z-50">
        {/* Brand Identity */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            onClick={() => {
              if (isMobileMenuOpen) setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 cursor-pointer group min-h-[36px]"
          >
            <div className="w-6 h-6 bg-[#E6461A] text-[#F7F7F3] flex items-center font-black text-xs justify-center font-mono shrink-0">
              PP
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold tracking-widest text-[#F7F7F3] group-hover:text-[#E6461A] transition-colors uppercase text-[11px]">
                PROTO PATH
              </span>
              <span className="hidden sm:inline text-[8.5px] text-[#888888] tracking-wider uppercase">
                ARCHITECTURAL STAGE NOTATION
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1.5 px-2 py-0.5 bg-[#222222] border border-[#333333] text-[9px] text-[#A0A0A0]">
            <CheckCircle className="w-3 h-3 text-emerald-400" />
            <span>{t.verified}</span>
          </div>
        </div>

        {/* Desktop Center Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          {publicNavItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              currentRoute === item.route ||
              (item.route !== '/' && currentRoute.startsWith(item.route));

            return (
              <Link
                key={item.route}
                to={item.route}
                className={`relative px-3 py-1.5 min-h-[36px] flex items-center gap-1.5 text-[12px] font-bold tracking-wider transition-colors cursor-pointer border ${
                  isActive
                    ? 'text-[#F7F7F3] border-[#333333]'
                    : 'bg-[#1E1E1E] text-[#A0A0A0] border-[#333333] hover:text-[#F7F7F3] hover:bg-[#2A2A2A]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active-bg"
                    className="absolute inset-0 bg-[#E6461A] z-0"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                <Icon className="w-3.5 h-3.5 shrink-0 relative z-10" />
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
          
          <ResearchArchiveMenu 
            label={t.researchArchive} 
            items={archiveNavItems} 
            onNavigate={onNavigate} 
            currentRoute={currentRoute} 
          />
        </nav>

        {/* Right Utility Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* View Mode Selector (Explore Page) */}
          {currentRoute === '/explore' && (
            <div className="hidden xl:flex items-center bg-[#1E1E1E] border border-[#333333] p-0.5 min-h-[36px]">
              {(['explore', 'raw', 'lineage'] as const).map((mode) => {
                const searchParams = new URLSearchParams(window.location.search);
                const currentInspect = searchParams.get('inspect') || 'explore';
                const isActive = mode === 'explore' ? currentInspect === 'explore' : currentInspect === mode;
                
                return (
                  <button
                    key={mode}
                    onClick={() => {
                      if (mode === 'explore') {
                        searchParams.delete('inspect');
                      } else {
                        searchParams.set('inspect', mode);
                      }
                      onNavigate(`/explore?${searchParams.toString()}`);
                    }}
                    className={`px-3 py-1.5 min-h-[36px] text-[10px] font-bold uppercase transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#F7F7F3] text-[#111111]'
                        : 'text-[#A0A0A0] hover:text-[#F7F7F3]'
                    }`}
                  >
                    {mode}
                  </button>
                );
              })}
            </div>
          )}

          {/* Compare Toggle */}
          {currentRoute === '/explore' && (
            <button
              onClick={onToggleCompare}
              className={`px-3 py-1.5 min-h-[36px] text-[11px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer border ${
                compareMode
                  ? 'bg-amber-500 text-[#111111] border-amber-500'
                  : 'bg-[#1E1E1E] text-[#A0A0A0] border-[#333333] hover:text-[#F7F7F3]'
              }`}
              title="Compare Pair A vs Pair B"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden sm:inline">COMPARE</span>
            </button>
          )}

          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            className="px-3 py-1.5 min-h-[36px] bg-[#1E1E1E] text-[#A0A0A0] hover:text-[#F7F7F3] border border-[#333333] text-[12px] font-bold flex items-center gap-1.5 cursor-pointer"
            title="Toggle Language EN / ID"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 shrink-0" />
            <span>{lang}</span>
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="p-2 min-h-[36px] min-w-[36px] flex items-center justify-center bg-[#1E1E1E] text-[#A0A0A0] hover:text-[#F7F7F3] border border-[#333333] cursor-pointer hidden sm:flex"
            title="Toggle Fullscreen"
            aria-label="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 min-h-[36px] min-w-[36px] flex items-center justify-center bg-[#1E1E1E] text-[#A0A0A0] hover:text-[#F7F7F3] border border-[#333333] cursor-pointer md:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex md:hidden font-mono">
          <div className="fixed inset-0 bg-[#000000]/80" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative w-4/5 max-w-sm h-full bg-[#111111] border-r border-[#333333] flex flex-col shadow-2xl overflow-y-auto">
            <div className="p-4 border-b border-[#333333] flex justify-between items-center sticky top-0 bg-[#111111] z-10">
              <span className="font-extrabold tracking-widest text-[#F7F7F3] uppercase text-[12px]">
                PROTO PATH
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 min-h-[36px] min-w-[36px] flex items-center justify-center text-[#A0A0A0] hover:text-[#F7F7F3] cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 flex flex-col gap-6">
              <div>
                <h3 className="text-[10px] text-[#888888] font-bold mb-3 uppercase tracking-wider">PUBLIC</h3>
                <nav className="flex flex-col gap-1">
                  {publicNavItems.map((item) => {
                    const Icon = item.icon;
                    const isActive =
                      currentRoute === item.route ||
                      (item.route !== '/' && currentRoute.startsWith(item.route));

                    return (
                      <Link
                        key={item.route}
                        to={item.route}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`px-3 py-3 min-h-[44px] flex items-center gap-3 text-[13px] font-bold tracking-wider transition-colors cursor-pointer border-l-2 ${
                          isActive
                            ? 'bg-[#1E1E1E] text-[#E6461A] border-[#E6461A]'
                            : 'text-[#A0A0A0] border-transparent hover:text-[#F7F7F3] hover:bg-[#1A1A1A]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div>
                <h3 className="text-[10px] text-[#888888] font-bold mb-3 uppercase tracking-wider">{t.researchArchive}</h3>
                <nav className="flex flex-col gap-1">
                  {archiveNavItems.map((item) => {
                    const Icon = item.icon;
                    const isActive =
                      currentRoute === item.route ||
                      (item.route !== '/' && currentRoute.startsWith(item.route));

                    return (
                      <button
                        key={item.route}
                        onClick={() => handleMobileNavigate(item.route)}
                        className={`px-3 py-3 min-h-[44px] flex items-center gap-3 text-[13px] font-bold tracking-wider transition-colors cursor-pointer border-l-2 ${
                          isActive
                            ? 'bg-[#1E1E1E] text-[#E6461A] border-[#E6461A]'
                            : 'text-[#A0A0A0] border-transparent hover:text-[#F7F7F3] hover:bg-[#1A1A1A]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
