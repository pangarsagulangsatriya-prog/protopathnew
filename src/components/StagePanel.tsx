import React, { useState } from 'react';
import {
  NotationPair,
  Situation,
  BodyImpulse,
  SpatialOutput,
  DiagramAsset,
  AnatomicalLocus,
} from '../domain/types';
import { ArchitecturalBoardSVG } from './ArchitecturalBoardSVG';
import {
  Layout,
  User,
  Image as ImageIcon,
  Zap,
  ZoomIn,
  ZoomOut,
  Maximize2,
  RotateCcw,
  Info,
  CheckCircle,
  X,
} from 'lucide-react';

interface StagePanelProps {
  pair: NotationPair;
  situation: Situation | undefined;
  bodyImpulse: BodyImpulse | undefined;
  spatialOutput: SpatialOutput | undefined;
  diagramAsset: DiagramAsset | undefined;
}

export const StagePanel: React.FC<StagePanelProps> = ({
  pair,
  situation,
  bodyImpulse,
  spatialOutput,
  diagramAsset,
}) => {
  const [activeTab, setActiveTab] = useState<'PLAN' | 'BODY' | 'BOARD' | 'FORCES'>('BOARD');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [selectedLocus, setSelectedLocus] = useState<AnatomicalLocus | 'ALL'>('ALL');
  const [showMetadataModal, setShowMetadataModal] = useState<boolean>(false);

  const isGlitch = pair.id === 'pair-c1-3-2';

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 0.25, 0.5));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div className="w-full h-full bg-[#FFFFFF] border border-[#111111] p-3 font-mono text-[#111111] flex flex-col justify-between overflow-hidden select-none">
      {/* Top Tab Bar & Board Controls */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#111111] pb-2 mb-2 gap-2">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 bg-[#EFEFEB] p-0.5 border border-[#111111]/20">
          {[
            { id: 'BOARD', label: 'ARCHITECTURAL BOARD', icon: ImageIcon },
            { id: 'PLAN', label: 'STAGE PLAN', icon: Layout },
            { id: 'BODY', label: 'BODY STUDY', icon: User },
            { id: 'FORCES', label: 'FORCE RELATION', icon: Zap },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#111111] text-[#F7F7F3]'
                    : 'text-[#505050] hover:text-[#111111]'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Board Zoom & Info Controls */}
        {activeTab === 'BOARD' && (
          <div className="flex items-center gap-1">
            <button
              onClick={handleZoomIn}
              className="p-1 bg-[#EFEFEB] hover:bg-[#111111] hover:text-[#F7F7F3] border border-[#111111]/30 cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-1 bg-[#EFEFEB] hover:bg-[#111111] hover:text-[#F7F7F3] border border-[#111111]/30 cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleResetZoom}
              className="px-1.5 py-1 text-[9px] font-bold bg-[#EFEFEB] hover:bg-[#111111] hover:text-[#F7F7F3] border border-[#111111]/30 cursor-pointer"
              title="Reset Zoom (100%)"
            >
              {Math.round(zoomLevel * 100)}%
            </button>
            <button
              onClick={() => setShowMetadataModal(true)}
              className="px-2 py-1 bg-[#E6461A] text-[#F7F7F3] text-[9px] font-bold flex items-center gap-1 border border-[#111111] cursor-pointer"
            >
              <Info className="w-3 h-3" />
              <span>ALT / METADATA</span>
            </button>
          </div>
        )}
      </div>

      {/* Main Content Stage Viewport */}
      <div className="flex-1 bg-[#F7F7F3] border border-[#111111] overflow-auto relative flex items-center justify-center p-2 scrollbar-thin">
        {/* TAB 1: ARCHITECTURAL BOARD */}
        {activeTab === 'BOARD' && (
          <div
            className="w-full h-full flex items-center justify-center transition-transform duration-200"
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
          >
            <ArchitecturalBoardSVG pairId={pair.id} className="max-w-full max-h-full" />
          </div>
        )}

        {/* TAB 2: STAGE PLAN */}
        {activeTab === 'PLAN' && (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-[#FFFFFF] text-[#111111]">
            <div className="border-b border-[#111111] pb-2 mb-3 flex justify-between items-center">
              <div>
                <span className="text-[9px] bg-[#111111] text-[#F7F7F3] px-1.5 py-0.5 font-bold uppercase">
                  SVG STAGE PLAN (GENERATED)
                </span>
                <h3 className="text-xs font-bold mt-1 uppercase">
                  PRIMARY STAGE AXIS — SCALE 1:1
                </h3>
              </div>
              <span className="text-[10px] font-bold text-[#E6461A]">
                CHECKPOINT 12.15 M
              </span>
            </div>

            {/* Generated Interactive Stage Vector Graphic */}
            <div className="flex-1 flex items-center justify-center border border-[#111111]/20 p-4 bg-[#F7F7F3] relative overflow-hidden">
              <svg viewBox="0 0 800 240" className="w-full h-auto">
                {/* Stage Boundary */}
                <rect x="10" y="10" width="780" height="220" fill="#FFFFFF" stroke="#111111" strokeWidth="1" strokeDasharray="3,3" />

                {/* Grid Lines */}
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={i} x1={i * 90 + 40} y1="10" x2={i * 90 + 40} y2="230" stroke="#D9D9D3" strokeWidth="1" />
                ))}

                {/* Primary Stage Axis */}
                <line x1="50" y1="120" x2="750" y2="120" stroke="#111111" strokeWidth="3" />
                <line x1="50" y1="114" x2="750" y2="114" stroke="#111111" strokeWidth="1" />
                <line x1="50" y1="126" x2="750" y2="126" stroke="#111111" strokeWidth="1" />

                {/* Node A (Origin 0m) */}
                <rect x="40" y="110" width="20" height="20" fill="#111111" />
                <text x="50" y="95" fontFamily="monospace" fontSize="10" fontWeight="900" textAnchor="middle">NODE A (0m)</text>

                {/* Node B (Terminal 15m) */}
                <rect x="740" y="110" width="20" height="20" fill="#111111" />
                <text x="750" y="95" fontFamily="monospace" fontSize="10" fontWeight="900" textAnchor="middle">NODE B (15m)</text>

                {/* Checkpoint 12.15m (Position x = 50 + (12.15/15)*700 = 617) */}
                <line x1="617" y1="20" x2="617" y2="220" stroke="#111111" strokeWidth="1" strokeDasharray="2,2" />
                <circle cx="617" cy="120" r="10" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
                <text x="617" y="40" fontFamily="monospace" fontSize="10" fontWeight="800" textAnchor="middle">CHECKPOINT 12.15m</text>

                {/* Performer Figure Top Down */}
                <circle cx="580" cy="120" r="14" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
                <line x1="580" y1="98" x2="580" y2="142" stroke="#111111" strokeWidth="3" />
                <text x="580" y="80" fontFamily="sans-serif" fontSize="9" fontWeight="800" textAnchor="middle">PERFORMER</text>

                {/* Regulatory Object (R) */}
                <circle cx="670" cy="120" r="12" fill="#FFFFFF" stroke="#E6461A" strokeWidth="2.5" />
                <text x="670" y="124" fontFamily="monospace" fontSize="11" fontWeight="900" fill="#E6461A" textAnchor="middle">R</text>

                {/* Pressure Field */}
                <rect x="580" y="70" width="130" height="100" fill="rgba(230, 70, 26, 0.15)" stroke="#E6461A" strokeWidth="1" strokeDasharray="3,3" />

                {/* Prohibition Force Vector */}
                <line x1="740" y1="120" x2="640" y2="120" stroke="#E6461A" strokeWidth="3" />
                <polygon points="635,120 645,115 645,125" fill="#E6461A" />
                <text x="680" y="60" fontFamily="monospace" fontSize="9" fontWeight="800" fill="#E6461A" textAnchor="middle">PROHIBITION VECTOR</text>

                {/* Forward Drive Vector */}
                <line x1="300" y1="160" x2="500" y2="160" stroke="#111111" strokeWidth="3" />
                <polygon points="505,160 495,155 495,165" fill="#111111" />
                <text x="400" y="180" fontFamily="monospace" fontSize="9" fontWeight="800" textAnchor="middle">FORWARD DRIVE (PULL)</text>
              </svg>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 text-[9.5px]">
              <div className="border border-[#111111] p-2 bg-[#F7F7F3]">
                <span className="text-[#505050] font-bold block">AXIS PARAMETERS:</span>
                <span>Length: 15.00m | Primary Object: Linear Bar | Anchor: Node A</span>
              </div>
              <div className="border border-[#111111] p-2 bg-[#F7F7F3]">
                <span className="text-[#505050] font-bold block">INTERRUPTION VECTOR:</span>
                <span className="text-[#E6461A] font-bold">
                  {isGlitch ? 'Conflicting Paradox Vectors' : 'Right-Turn Regulatory Prohibition'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: BODY STUDY */}
        {activeTab === 'BODY' && (
          <div className="w-full h-full p-4 flex flex-col bg-[#FFFFFF] text-[#111111]">
            <div className="flex justify-between items-center border-b border-[#111111] pb-2 mb-3">
              <div>
                <span className="text-[9px] bg-[#111111] text-[#F7F7F3] px-1.5 py-0.5 font-bold uppercase">
                  ANATOMICAL LOCUS STUDY
                </span>
                <h3 className="text-xs font-bold mt-1 uppercase">
                  ACTIVE LOCI: {bodyImpulse?.anatomicalLoci.join(' + ').toUpperCase()}
                </h3>
              </div>

              {/* Locus Filter Buttons */}
              <div className="flex gap-1 text-[9px] font-bold">
                {['ALL', 'SPINE', 'PELVIS', 'WRIST', 'SHOULDER'].map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setSelectedLocus(loc as any)}
                    className={`px-2 py-0.5 border cursor-pointer ${
                      selectedLocus === loc
                        ? 'bg-[#E6461A] text-[#F7F7F3] border-[#E6461A]'
                        : 'bg-[#EFEFEB] text-[#111111] border-[#111111]/30 hover:bg-[#111111] hover:text-[#F7F7F3]'
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 border border-[#111111]/20 p-3 bg-[#F7F7F3]">
              {/* Front Study */}
              <div className="border border-[#111111] p-3 bg-[#FFFFFF] flex flex-col justify-between">
                <div className="text-[10px] font-extrabold border-b border-[#111111] pb-1 mb-2">
                  FRONT / THREE-QUARTER ELEVATION
                </div>
                <div className="flex-1 flex items-center justify-center p-2">
                  <svg viewBox="0 0 160 220" className="h-44 w-auto">
                    <circle cx="80" cy="30" r="16" fill="none" stroke="#111111" strokeWidth="1.5" />
                    <line x1="80" y1="46" x2="80" y2="150" stroke="#E6461A" strokeWidth="1.5" strokeDasharray="2,2" />
                    <line x1="45" y1="56" x2="115" y2="56" stroke="#111111" strokeWidth="2.5" />
                    <line x1="10" y1="90" x2="150" y2="90" stroke="#111111" strokeWidth="5" />
                    <line x1="45" y1="56" x2="25" y2="90" stroke="#111111" strokeWidth="2" />
                    <line x1="115" y1="56" x2="135" y2="90" stroke="#111111" strokeWidth="2" />
                    <line x1="65" y1="120" x2="60" y2="200" stroke="#111111" strokeWidth="2" />
                    <line x1="95" y1="120" x2="100" y2="200" stroke="#111111" strokeWidth="2" />

                    {/* Active Loci */}
                    {bodyImpulse?.anatomicalLoci.includes('spine') && (
                      <circle cx="80" cy="80" r="7" fill="#E6461A" className="animate-pulse" />
                    )}
                    {bodyImpulse?.anatomicalLoci.includes('pelvis') && (
                      <circle cx="80" cy="120" r="7" fill="#E6461A" className="animate-pulse" />
                    )}
                    {bodyImpulse?.anatomicalLoci.includes('wrist') && (
                      <>
                        <circle cx="25" cy="90" r="7" fill="#E6461A" className="animate-pulse" />
                        <circle cx="135" cy="90" r="7" fill="#E6461A" className="animate-pulse" />
                      </>
                    )}
                    {bodyImpulse?.anatomicalLoci.includes('shoulder') && (
                      <>
                        <circle cx="45" cy="56" r="7" fill="#E6461A" className="animate-pulse" />
                        <circle cx="115" cy="56" r="7" fill="#E6461A" className="animate-pulse" />
                      </>
                    )}
                  </svg>
                </div>
                <div className="text-[9px] text-[#505050] border-t border-[#111111]/10 pt-1">
                  Target Locus: <span className="font-bold text-[#E6461A]">{bodyImpulse?.anatomicalLoci.join(', ')}</span>
                </div>
              </div>

              {/* Side Study */}
              <div className="border border-[#111111] p-3 bg-[#FFFFFF] flex flex-col justify-between">
                <div className="text-[10px] font-extrabold border-b border-[#111111] pb-1 mb-2">
                  PROFILE SIDE ELEVATION
                </div>
                <div className="flex-1 flex items-center justify-center p-2">
                  <svg viewBox="0 0 160 220" className="h-44 w-auto">
                    <circle cx="70" cy="30" r="16" fill="none" stroke="#111111" strokeWidth="1.5" />
                    <path d="M 70 46 Q 78 90 70 140" fill="none" stroke="#E6461A" strokeWidth="2" strokeDasharray="2,2" />
                    <path d="M 70 56 L 110 90" stroke="#111111" strokeWidth="2" />
                    <line x1="110" y1="20" x2="110" y2="180" stroke="#111111" strokeWidth="4" />
                    <line x1="70" y1="130" x2="65" y2="200" stroke="#111111" strokeWidth="2" />

                    <line x1="110" y1="130" x2="145" y2="130" stroke="#111111" strokeWidth="2" />
                    <line x1="145" y1="120" x2="145" y2="140" stroke="#111111" strokeWidth="2" />
                  </svg>
                </div>
                <div className="text-[9px] text-[#505050] border-t border-[#111111]/10 pt-1">
                  Kinetic Quality: <span className="font-bold text-[#111111]">{bodyImpulse?.kineticQualities.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: FORCE RELATION */}
        {activeTab === 'FORCES' && (
          <div className="w-full h-full p-4 flex flex-col bg-[#FFFFFF] text-[#111111]">
            <div className="border-b border-[#111111] pb-2 mb-3">
              <span className="text-[9px] bg-[#111111] text-[#F7F7F3] px-1.5 py-0.5 font-bold uppercase">
                ABSTRACT FORCE RELATION MATRIX
              </span>
              <h3 className="text-xs font-bold mt-1 uppercase">
                VECTOR INTERACTION AT CHECKPOINT 12.15 M
              </h3>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="border border-[#111111] p-3 bg-[#F7F7F3] flex flex-col justify-between">
                <div className="text-[10px] font-bold border-b border-[#111111] pb-1 mb-2">
                  FORCE VECTOR DIAGRAM
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <svg viewBox="0 0 200 160" className="w-full h-32">
                    <circle cx="100" cy="80" r="30" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
                    <text x="100" y="84" fontFamily="monospace" fontSize="10" fontWeight="900" textAnchor="middle">BODY</text>
                    <line x1="10" y1="80" x2="65" y2="80" stroke="#111111" strokeWidth="3" markerEnd="url(#arrowBlack)" />
                    <text x="35" y="70" fontFamily="monospace" fontSize="8" fontWeight="800">DRIVE (PULL)</text>
                    <line x1="190" y1="80" x2="135" y2="80" stroke="#E6461A" strokeWidth="3" markerEnd="url(#arrowRed)" />
                    <text x="160" y="70" fontFamily="monospace" fontSize="8" fontWeight="800" fill="#E6461A">PROHIBITION</text>
                  </svg>
                </div>
              </div>

              <div className="border border-[#111111] p-3 bg-[#111111] text-[#F7F7F3] text-[9.5px] flex flex-col justify-between">
                <div>
                  <div className="text-amber-400 font-extrabold uppercase mb-2 border-b border-[#333333] pb-1">
                    VECTOR BALANCE READOUT
                  </div>
                  <div className="space-y-1.5">
                    <div>
                      <span className="text-[#888888]">Forward Vector:</span> <span className="font-bold text-[#F7F7F3]">100% Active</span>
                    </div>
                    <div>
                      <span className="text-[#888888]">Prohibition Vector:</span> <span className="font-bold text-[#E6461A]">External Pressure</span>
                    </div>
                    <div>
                      <span className="text-[#888888]">Junction Point:</span> <span className="font-bold text-[#F7F7F3]">Pelvis / Spine Axis</span>
                    </div>
                    <div>
                      <span className="text-[#888888]">System Output:</span>{' '}
                      <span className="font-bold text-amber-400">{spatialOutput?.label}</span>
                    </div>
                  </div>
                </div>
                <div className="text-[8px] text-[#888888] pt-2 border-t border-[#333333]">
                  STATUS: FORCE EQUILIBRIUM MAINTAINED UNDER TORQUE
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ALT TEXT / METADATA MODAL */}
      {showMetadataModal && diagramAsset && (
        <div className="fixed inset-0 bg-[#111111]/70 z-50 flex items-center justify-center p-4">
          <div className="bg-[#FFFFFF] border-2 border-[#111111] w-full max-w-xl p-5 font-mono text-[#111111] shadow-2xl relative">
            <button
              onClick={() => setShowMetadataModal(false)}
              className="absolute top-3 right-3 p-1 bg-[#111111] text-[#F7F7F3] hover:bg-[#E6461A] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 border-b border-[#111111] pb-2 mb-3">
              <Info className="w-4 h-4 text-[#E6461A]" />
              <h3 className="text-sm font-black uppercase">
                DIAGRAM ASSET METADATA &amp; ACCESSIBILITY
              </h3>
            </div>

            <div className="space-y-3 text-[11px]">
              <div>
                <span className="text-[#505050] font-bold block text-[9px] uppercase">ASSET ID</span>
                <span className="font-bold">{diagramAsset.id}</span>
              </div>
              <div>
                <span className="text-[#505050] font-bold block text-[9px] uppercase">SOURCE FILE PATH</span>
                <span className="font-bold bg-[#EFEFEB] p-1 border border-[#111111]/20 block">{diagramAsset.src}</span>
              </div>
              <div>
                <span className="text-[#505050] font-bold block text-[9px] uppercase">ACCESSIBILITY ALT TEXT</span>
                <p className="bg-[#F7F7F3] p-2 border border-[#111111] leading-relaxed text-[10px]">
                  {diagramAsset.alt}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[9.5px]">
                <div>
                  <span className="text-[#505050] font-bold block">STATUS:</span>
                  <span className="font-bold text-emerald-600 uppercase">{diagramAsset.status}</span>
                </div>
                <div>
                  <span className="text-[#505050] font-bold block">HOTSPOT MANIFEST:</span>
                  <span className="font-bold text-[#A6321B]">NONE ATTACHED</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#111111] flex justify-end">
              <button
                onClick={() => setShowMetadataModal(false)}
                className="px-4 py-1.5 bg-[#111111] text-[#F7F7F3] font-bold text-xs hover:bg-[#E6461A] cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
