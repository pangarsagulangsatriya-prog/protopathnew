import React from 'react';
import { ProtoPathDatabase } from '../domain/types';
import { Layers, MapPin, Compass, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface ScorePageProps {
  db: ProtoPathDatabase;
  onNavigate: (route: string) => void;
  onSelectPair: (pairId: string) => void;
}

export const ScorePage: React.FC<ScorePageProps> = ({ db, onNavigate, onSelectPair }) => {
  const score = db.scores[0];

  const phases = [
    { id: 'phase-01', code: 'PHASE 01', title: 'DEPARTURE', status: 'COMPLETE' },
    { id: 'phase-02', code: 'PHASE 02', title: 'LINEAR FLOW', status: 'ACTIVE' },
    { id: 'phase-03', code: 'PHASE 03', title: 'ITERATION', status: 'IN PROGRESS' },
    { id: 'phase-04', code: 'PHASE 04', title: 'RESIDUAL', status: 'REGISTERED' },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F7F7F3] text-[#111111] font-mono p-4 md:p-8 select-none">
      {/* Header */}
      <div className="border-b-2 border-[#111111] pb-4 mb-6 flex flex-wrap justify-between items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#E6461A]" />
            <span className="text-xs font-bold text-[#E6461A] uppercase tracking-widest">
              SCORE REGISTRY
            </span>
          </div>
          <h1 className="text-xl md:text-2xl font-black uppercase tracking-tight mt-1">
            {score ? score.title : 'SCORE 01 — LENGKONG / PALASARI / KOSAMBI'}
          </h1>
          <p className="text-xs text-[#505050] font-bold mt-0.5">
            CHARACTER: {score?.character}
          </p>
        </div>

        <button
          onClick={() => onNavigate('/explore')}
          className="px-4 py-2 bg-[#111111] text-[#F7F7F3] hover:bg-[#E6461A] text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-[#111111] cursor-pointer"
        >
          <Compass className="w-4 h-4" />
          <span>OPEN IN EXPLORER</span>
        </button>
      </div>

      {/* Grid Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Bounds & Coordinates */}
        <div className="border border-[#111111] bg-[#FFFFFF] p-4">
          <div className="text-[10px] text-[#505050] font-bold uppercase mb-2">
            GEOGRAPHIC BOUNDS
          </div>
          <div className="space-y-1 text-xs font-bold">
            <div>Longitude Min: {score?.bounds.lonMin}</div>
            <div>Longitude Max: {score?.bounds.lonMax}</div>
            <div>Latitude Min: {score?.bounds.latMin}</div>
            <div>Latitude Max: {score?.bounds.latMax}</div>
          </div>
        </div>

        {/* Anchor Nodes */}
        <div className="border border-[#111111] bg-[#FFFFFF] p-4">
          <div className="text-[10px] text-[#505050] font-bold uppercase mb-2">
            AXIS STAGE NODES
          </div>
          <div className="space-y-2 text-xs">
            {score?.nodes.map((node) => (
              <div key={node.id} className="flex justify-between border-b border-[#111111]/10 pb-1">
                <span className="font-extrabold">{node.label}</span>
                <span className="text-[#505050]">{node.role} ({node.axisDistanceMeters}m)</span>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Metrics */}
        <div className="border border-[#111111] bg-[#FFFFFF] p-4">
          <div className="text-[10px] text-[#505050] font-bold uppercase mb-2">
            ASSET COVERAGE
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span>Notation Pairs:</span>
              <span className="font-extrabold text-[#E6461A]">{db.notationPairs.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Board Diagrams:</span>
              <span className="font-extrabold text-[#111111]">{db.diagramAssets.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Sequence Frames:</span>
              <span className="font-extrabold text-[#111111]">{db.sequenceFrames.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Phase Rail */}
      <div className="mb-6">
        <div className="text-xs font-black uppercase mb-2 text-[#505050]">
          SCORE EXECUTION PHASE RAIL
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {phases.map((ph) => (
            <div key={ph.id} className="border border-[#111111] bg-[#FFFFFF] p-3">
              <div className="text-[9px] bg-[#111111] text-[#F7F7F3] px-1.5 py-0.5 font-bold inline-block mb-1">
                {ph.code}
              </div>
              <div className="text-sm font-extrabold">{ph.title}</div>
              <span className="text-[8.5px] text-[#E6461A] font-bold uppercase block mt-2">
                {ph.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Notation Pair List */}
      <div className="border border-[#111111] bg-[#FFFFFF] p-4">
        <div className="text-xs font-black uppercase mb-3 border-b border-[#111111] pb-2">
          NOTATION PAIR REGISTRY
        </div>

        <div className="divide-y divide-[#111111]/20">
          {db.notationPairs.map((pair) => (
            <div
              key={pair.id}
              onClick={() => {
                onSelectPair(pair.id);
                onNavigate('/explore');
              }}
              className="py-3 flex flex-wrap items-center justify-between gap-2 hover:bg-[#F7F7F3] px-2 cursor-pointer transition-colors"
            >
              <div>
                <div className="text-xs font-black uppercase text-[#111111]">
                  {pair.title}
                </div>
                <div className="text-[10px] text-[#505050] mt-0.5">
                  Checkpoint: {pair.checkpointId} | Phase: {pair.phaseId}
                </div>
              </div>

              <button className="px-3 py-1 bg-[#111111] text-[#F7F7F3] text-[10px] font-bold uppercase flex items-center gap-1 hover:bg-[#E6461A]">
                <span>VIEW PAIR</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
