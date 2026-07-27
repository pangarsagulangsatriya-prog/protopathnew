import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ProtoPathDatabase } from './domain/types';
import { repository } from './repositories/notationRepository';
import { Navigation } from './components/Navigation';
import { LandingPage } from './pages/LandingPage';
import { getProtoVariants } from './motion/protoMotion';

// Lazy load heavy pages
const ExplorePage = React.lazy(() => import('./pages/ExplorePage').then(module => ({ default: module.ExplorePage })));
const MethodPage = React.lazy(() => import('./pages/MethodPage').then(module => ({ default: module.MethodPage })));
const ExhibitionPage = React.lazy(() => import('./pages/ExhibitionPage').then(module => ({ default: module.ExhibitionPage })));

// Archive Pages
const ArchiveLayout = React.lazy(() => import('./pages/archive/ArchiveLayout').then(module => ({ default: module.ArchiveLayout })));
const ArchiveHome = React.lazy(() => import('./pages/archive/ArchiveHome').then(module => ({ default: module.ArchiveHome })));
const ScorePage = React.lazy(() => import('./pages/archive/ScorePage').then(module => ({ default: module.ScorePage })));
const DatasetPage = React.lazy(() => import('./pages/archive/DatasetPage').then(module => ({ default: module.DatasetPage })));
const ComparePage = React.lazy(() => import('./pages/archive/ComparePage').then(module => ({ default: module.ComparePage })));

// Page transition wrapper
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const prefersReducedMotion = useReducedMotion();
  const variants = getProtoVariants(!!prefersReducedMotion);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants.routeWipe}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

// Fallback for lazy loading
const SuspenseFallback = () => (
  <div className="w-full h-screen flex items-center justify-center bg-[#F7F7F3]">
    <div className="flex items-center gap-2 text-[#111111] font-mono text-[10px] uppercase font-bold tracking-widest">
      <div className="w-2 h-2 bg-[#E6461A] animate-pulse" />
      <span>LOADING VIEW...</span>
    </div>
  </div>
);

const AppContent = () => {
  const [db, setDb] = useState<ProtoPathDatabase>(() => repository.loadDatabase());
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation State
  const [activePairId, setActivePairId] = useState<string>('pair-c1-3-1');
  const [lang, setLang] = useState<'EN' | 'ID'>(() => {
    const stored = localStorage.getItem('protopath_lang');
    if (stored === 'EN' || stored === 'ID') return stored;
    if (navigator.language.startsWith('id')) return 'ID';
    return 'EN';
  });

  const handleToggleLang = () => {
    const newLang = lang === 'EN' ? 'ID' : 'EN';
    setLang(newLang);
    localStorage.setItem('protopath_lang', newLang);
  };

  const handleUpdateDatabase = (newDb: ProtoPathDatabase) => {
    setDb(newDb);
  };
  
  const handleNavigate = (route: string) => {
    navigate(route);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/explore') {
      const params = new URLSearchParams(location.search);
      const pair = params.get('pair');
      if (pair) setActivePairId(pair);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#F7F7F3] text-[#111111] font-sans selection:bg-[#E6461A] selection:text-[#F7F7F3] flex flex-col">
      {location.pathname !== '/exhibition' && (
        <Navigation
          currentRoute={location.pathname}
          onNavigate={handleNavigate}
          lang={lang}
          onToggleLang={handleToggleLang}
        />
      )}

      <main className="flex-1 w-full relative overflow-hidden">
        <AnimatePresence mode="wait">
          {/* @ts-ignore - React Router v6 Routes type doesn't explicitly list key but it's required for AnimatePresence */}
          <Routes location={location} key={location.pathname.split('/')[1] || '/'}>
            
            <Route path="/" element={<PageWrapper><LandingPage db={db} onNavigate={handleNavigate} lang={lang} /></PageWrapper>} />
            
            <Route 
              path="/explore" 
              element={
                <PageWrapper>
                  <Suspense fallback={<SuspenseFallback />}>
                    <ExplorePage
                      db={db}
                      activePairId={activePairId}
                      onSelectPair={(id) => {
                        setActivePairId(id);
                        navigate(`/explore?pair=${id}`, { replace: true });
                      }}
                    />
                  </Suspense>
                </PageWrapper>
              } 
            />
            
            <Route 
              path="/method" 
              element={
                <PageWrapper>
                  <Suspense fallback={<SuspenseFallback />}>
                    <MethodPage />
                  </Suspense>
                </PageWrapper>
              } 
            />
            
            <Route 
              path="/exhibition" 
              element={
                <PageWrapper>
                  <Suspense fallback={<SuspenseFallback />}>
                    <ExhibitionPage db={db} onNavigate={handleNavigate} />
                  </Suspense>
                </PageWrapper>
              } 
            />
            
            {/* Archive Layout & Nested Routes */}
            <Route path="/archive" element={
              <PageWrapper>
                <Suspense fallback={<SuspenseFallback />}>
                  <ArchiveLayout lang={lang} />
                </Suspense>
              </PageWrapper>
            }>
              <Route index element={<ArchiveHome db={db} />} />
              <Route path="scores" element={
                <ScorePage 
                  db={db} 
                  onNavigate={handleNavigate} 
                  onSelectPair={(id) => {
                    setActivePairId(id);
                    navigate(`/explore?pair=${id}`);
                  }}
                />
              } />
              <Route path="score/:scoreId" element={
                <ScorePage 
                  db={db} 
                  onNavigate={handleNavigate} 
                  onSelectPair={(id) => {
                    setActivePairId(id);
                    navigate(`/explore?pair=${id}`);
                  }}
                />
              } />
              <Route path="datasets" element={<DatasetPage db={db} onUpdateDatabase={handleUpdateDatabase} />} />
              <Route path="compare" element={<ComparePage db={db} onCloseCompare={() => navigate('/archive')} />} />
              <Route path="lineage" element={<div className="p-8 font-bold font-mono">LINEAGE INSPECTOR (WIP)</div>} />
              <Route path="conflicts" element={<div className="p-8 font-bold font-mono">CONFLICTS (WIP)</div>} />
              <Route path="document" element={<div className="p-8 font-bold font-mono">DOCUMENT READER (WIP)</div>} />
              <Route path="*" element={<div className="p-8 font-bold font-mono text-center">404 - ARCHIVE SECTION NOT FOUND</div>} />
            </Route>

            {/* Legacy Route Redirects */}
            <Route path="/score" element={<Navigate to="/archive/scores" replace />} />
            <Route path="/score/:scoreId" element={<Navigate to="/archive/score/:scoreId" replace />} />
            <Route path="/dataset" element={<Navigate to="/archive/datasets" replace />} />
            
            <Route 
              path="*" 
              element={
                <PageWrapper>
                  <div className="p-8 text-center font-bold tracking-widest uppercase font-mono">404 - PAGE NOT FOUND</div>
                </PageWrapper>
              } 
            />

          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
