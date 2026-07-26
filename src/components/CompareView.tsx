import React, { useState } from 'react';
import { ProtoPathDatabase } from '../domain/types';
import { ArchitecturalBoardSVG } from './ArchitecturalBoardSVG';
import { SlidersHorizontal, ArrowRight, Check, Zap, AlertTriangle } from 'lucide-react';

interface CompareViewProps {
  db: ProtoPathDatabase;
  onCloseCompare: () => void;
}

export const CompareView: React.FC<CompareViewProps> = ({ db, onCloseCompare }) => {
  const [syncZoom, setSyncZoom] = useState<boolean>(true);

  const pairA = db.notationPairs.find((p) => p.id === 'pair-c1-3-1');
  const pairB = db.notationPairs.find((p) => p.id === 'pair-c1-3-2');

  const sitA = db.situations.find((s) => pairA?.situationIds.includes(s.id));
  const sitB = db.situations.find((s) => pairB?.situationIds.includes(s.id));

  const impA = db.bodyImpulses.find((i) => pairA?.bodyImpulseIds.includes(i.id));
  const impB = db.bodyImpulses.find((i) => pairB?.bodyImpulseIds.includes(i.id));

  const outA = db.spatialOutputs.find((o) => pairA?.spatialOutputIds.includes(o.id));
  const outB = db.spatialOutputs.find((o) => pairB?.spatialOutputIds.includes(o.id));

  return (
    <div className="w-full h-full bg-[#FFFFFF] border border-[#111111] p-3 font-mono text-[#111111] flex flex-col justify-between overflow-y-auto scrollbar-thin select-none">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-[#111111] pb-2 mb-3">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-amber-600" />
          <span className="text-xs font-black uppercase tracking-wider">
            SYNCHRONIZED PAIR COMPARISON ENGINE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-1.5 text-[9.5px] cursor-pointer font-bold">
            <input
              type="checkbox"
              checked={syncZoom}
              onChange={(e) => setSyncZoom(e.target.checked)}
              className="accent-[#E6461A]"
            />
            <span>SYNCHRONIZE BOARD VIEWPORTS</span>
          </label>
          <button
            onClick={onCloseCompare}
            className="px-2.5 py-1 bg-[#111111] text-[#F7F7F3] text-[9.5px] font-bold hover:bg-[#E6461A] cursor-pointer"
          >
            EXIT COMPARE MODE
          </button>
        </div>
      </div>

      {/* Shared Source Feature Banner */}
      <div className="bg-[#EFEFEB] border border-[#111111] p-2 mb-3 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-2">
          <span className="bg-[#111111] text-[#F7F7F3] px-1.5 py-0.5 font-bold text-[8.5px]">
            SHARED SOURCE IDENTITY
          </span>
          <span className="font-bold text-[#E6461A] font-mono">
            regulatory--no-right-turn--g1
          </span>
        </div>
        <span className="text-[9px] text-[#505050] font-bold">
          2 DERIVED RESPONSES FROM 1 RAW FEATURE
        </span>
      </div>

      {/* Side-by-Side Comparison Boards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-4">
        {/* PAIR A */}
        <div className="border-2 border-[#111111] p-3 bg-[#F7F7F3] flex flex-col justify-between">
          <div className="border-b border-[#111111] pb-1.5 mb-2 flex justify-between items-center">
            <div>
              <span className="text-[8.5px] bg-[#111111] text-[#F7F7F3] px-1.5 py-0.5 font-bold uppercase">
                PAIR A — ST.C1.3.1 / RT.C1.3.1
              </span>
              <h4 className="text-[11px] font-extrabold uppercase mt-1">
                AUTHORITY INTERRUPTION / FREEZE RESPONSE
              </h4>
            </div>
            <span className="text-[9px] bg-amber-100 text-amber-800 px-1 font-bold border border-amber-300">
              AUTHORITY
            </span>
          </div>

          <div className="w-full h-52 bg-[#FFFFFF] border border-[#111111] mb-3 p-1 flex items-center justify-center">
            <ArchitecturalBoardSVG pairId="pair-c1-3-1" className="w-full h-full" />
          </div>

          <div className="space-y-1.5 text-[9.5px] border-t border-[#111111]/20 pt-2">
            <div className="flex justify-between">
              <span className="text-[#505050] font-bold">Category:</span>
              <span className="font-extrabold text-[#E6461A]">AUTHORITY</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#505050] font-bold">Impulse Token:</span>
              <span className="font-extrabold text-[#111111]">FREEZE</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#505050] font-bold">Anatomical Locus:</span>
              <span className="font-bold text-[#111111]">spine, pelvis</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#505050] font-bold">Spatial Output:</span>
              <span className="font-bold text-[#E6461A]">Locked axis</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#505050] font-bold">Residual State:</span>
              <span className="font-bold text-[#111111]">grip and linear tension maintained</span>
            </div>
          </div>
        </div>

        {/* PAIR B */}
        <div className="border-2 border-[#111111] p-3 bg-[#F7F7F3] flex flex-col justify-between">
          <div className="border-b border-[#111111] pb-1.5 mb-2 flex justify-between items-center">
            <div>
              <span className="text-[8.5px] bg-[#E6461A] text-[#F7F7F3] px-1.5 py-0.5 font-bold uppercase">
                PAIR B — ST.C1.3.2 / RT.C1.3.2
              </span>
              <h4 className="text-[11px] font-extrabold uppercase mt-1">
                CONFLICTING VECTORS / GLITCH RESPONSE
              </h4>
            </div>
            <span className="text-[9px] bg-red-100 text-red-800 px-1 font-bold border border-red-300">
              PARADOX
            </span>
          </div>

          <div className="w-full h-52 bg-[#FFFFFF] border border-[#111111] mb-3 p-1 flex items-center justify-center">
            <ArchitecturalBoardSVG pairId="pair-c1-3-2" className="w-full h-full" />
          </div>

          <div className="space-y-1.5 text-[9.5px] border-t border-[#111111]/20 pt-2">
            <div className="flex justify-between">
              <span className="text-[#505050] font-bold">Category:</span>
              <span className="font-extrabold text-[#E6461A]">PARADOX</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#505050] font-bold">Impulse Token:</span>
              <span className="font-extrabold text-[#111111]">GLITCH</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#505050] font-bold">Anatomical Locus:</span>
              <span className="font-bold text-[#111111]">wrist, shoulder</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#505050] font-bold">Spatial Output:</span>
              <span className="font-bold text-[#E6461A]">Tremor loop</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#505050] font-bold">Residual State:</span>
              <span className="font-bold text-[#111111]">grip, drive, and primary axis remain active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Difference Spine Breakdown */}
      <div className="border border-[#111111] bg-[#111111] text-[#F7F7F3] p-3 text-[10px]">
        <div className="text-amber-400 font-extrabold uppercase mb-2 border-b border-[#333333] pb-1 flex justify-between">
          <span>DIFFERENCE SPINE — DERIVATION ANALYSIS</span>
          <span>SEQUENCE TRANSITION: FREEZE → GLITCH</span>
        </div>
        <p className="text-[#D9D9D3] leading-relaxed">
          While both notation pairs are anchored to the exact same Mapillary regulatory feature record (
          <code className="text-[#E6461A]">regulatory--no-right-turn--g1</code> at checkpoint 12.15m),
          Pair A translates authority pressure into an axial body arrest (Freeze), whereas Pair B interprets
          the continuous forward pull against prohibition as a localized kinetic tremor loop (Glitch).
        </p>
      </div>
    </div>
  );
};
