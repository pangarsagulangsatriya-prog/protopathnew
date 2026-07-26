import React, { useState, useEffect } from 'react';
import { ProtoPathDatabase } from './domain/types';
import { repository } from './repositories/notationRepository';
import { Navigation } from './components/Navigation';
import { LandingPage } from './pages/LandingPage';
import { ExplorePage } from './pages/ExplorePage';
import { ScorePage } from './pages/ScorePage';
import { DatasetPage } from './pages/DatasetPage';
import { MethodPage } from './pages/MethodPage';
import { ExhibitionPage } from './pages/ExhibitionPage';

export function App() {
  // Global Database state loaded from repository
  const [db, setDb] = useState<ProtoPathDatabase>(() => repository.loadDatabase());

  // Navigation State
  const [currentRoute, setCurrentRoute] = useState<string>('/');
  const [activePairId, setActivePairId] = useState<string>('pair-c1-3-1');
  const [lang, setLang] = useState<'EN' | 'ID'>('EN');
  const [compareMode, setCompareMode] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'explore' | 'raw' | 'lineage' | 'exhibition'>('explore');

  // Handle URL Hash or Path Navigation
  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    window.scrollTo(0, 0);
  };

  const handleUpdateDatabase = (newDb: ProtoPathDatabase) => {
    setDb(newDb);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F3] text-[#111111] font-mono selection:bg-[#E6461A] selection:text-[#F7F7F3] flex flex-col">
      {/* Global High-Density Navigation Header (Hidden on Exhibition Page) */}
      {currentRoute !== '/exhibition' && (
        <Navigation
          currentRoute={currentRoute}
          onNavigate={handleNavigate}
          lang={lang}
          onToggleLang={() => setLang(lang === 'EN' ? 'ID' : 'EN')}
          compareMode={compareMode}
          onToggleCompare={() => setCompareMode(!compareMode)}
          viewMode={viewMode}
          onChangeViewMode={setViewMode}
        />
      )}

      {/* Main View Router */}
      <main className="flex-1 w-full">
        {currentRoute === '/' && (
          <LandingPage db={db} onNavigate={handleNavigate} />
        )}

        {currentRoute === '/explore' && (
          <ExplorePage
            db={db}
            activePairId={activePairId}
            onSelectPair={setActivePairId}
            compareMode={compareMode}
            onToggleCompare={() => setCompareMode(!compareMode)}
            viewMode={viewMode}
            onChangeViewMode={setViewMode}
          />
        )}

        {currentRoute.startsWith('/score') && (
          <ScorePage
            db={db}
            onNavigate={handleNavigate}
            onSelectPair={(pairId) => {
              setActivePairId(pairId);
              handleNavigate('/explore');
            }}
          />
        )}

        {currentRoute === '/dataset' && (
          <DatasetPage db={db} onUpdateDatabase={handleUpdateDatabase} />
        )}

        {currentRoute === '/method' && <MethodPage />}

        {currentRoute === '/exhibition' && (
          <ExhibitionPage db={db} onNavigate={handleNavigate} />
        )}
      </main>
    </div>
  );
}

export default App;
