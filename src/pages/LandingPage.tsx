import React, { useState } from 'react';
import { ProtoPathDatabase } from '../domain/types';
import { ArrowRight, Compass, BookOpen, MonitorPlay, Layers, Database, ShieldCheck, Check } from 'lucide-react';

interface LandingPageProps {
  db: ProtoPathDatabase;
  onNavigate: (route: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ db, onNavigate }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const transformationChain = [
    {
      step: '01 RAW RECORD',
      code: 'regulatory--no-right-turn--g1',
      desc: 'Mapillary urban regulatory feature observation at checkpoint ±12.15m',
      tag: 'RAW DATA',
    },
    {
      step: '02 AUTHORITY CONDITION',
      code: 'ST.C1.3.1 [AUTHORITY]',
      desc: 'Right-turn prohibition condition enters primary stage axis',
      tag: 'SITUATION',
    },
    {
      step: '03 PROHIBITION VECTOR',
      code: 'PROHIBITION VECTOR → 12.15m',
      desc: 'External regulatory force exerts directional pressure against forward pull',
      tag: 'STAGE VECTOR',
    },
    {
      step: '04 FROZEN BODY AXIS',
      code: 'RT.C1.3.1 [FREEZE RESPONSE]',
      desc: 'Body arrests forward drive at spine and pelvis; axial torque maintained',
      tag: 'BODY IMPULSE',
    },
    {
      step: '05 ARCHITECTURAL DIAGRAM',
      code: 'DIAGRAM / BOARD ST.C1.3.1',
      desc: 'Complete stage score notation rendered as an analytical drawing board',
      tag: 'NOTATION BOARD',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F7F7F3] text-[#111111] font-mono flex flex-col justify-between p-4 md:p-8 select-none">
      {/* Top Banner Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-[#111111] pb-4 mb-6 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#E6461A] text-[#F7F7F3] font-black flex items-center justify-center text-sm">
              PP
            </div>
            <h1 className="text-xl md:text-2xl font-black tracking-widest uppercase">
              PROTO PATH
            </h1>
          </div>
          <p className="text-xs text-[#505050] font-bold mt-1 uppercase">
            WHERE ARE YOU DEPART FROM? — URBAN DATA TO STAGE PERFORMANCE
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => onNavigate('/explore')}
            className="px-4 py-2 bg-[#111111] text-[#F7F7F3] hover:bg-[#E6461A] text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-[#111111] transition-colors cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            <span>ENTER EXPLORER</span>
          </button>
          <button
            onClick={() => onNavigate('/method')}
            className="px-3 py-2 bg-[#FFFFFF] text-[#111111] hover:bg-[#EFEFEB] text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-[#111111] transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>METHOD</span>
          </button>
          <button
            onClick={() => onNavigate('/exhibition')}
            className="px-3 py-2 bg-[#FFFFFF] text-[#111111] hover:bg-[#EFEFEB] text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-[#111111] transition-colors cursor-pointer"
          >
            <MonitorPlay className="w-4 h-4" />
            <span>EXHIBITION</span>
          </button>
        </div>
      </header>

      {/* Main Hero Transformation Chain Showcase */}
      <section className="my-auto py-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[10px] bg-[#111111] text-[#F7F7F3] px-2 py-0.5 font-bold uppercase tracking-widest">
            ONE-WAY TRANSFORMATION CHAIN
          </span>
          <h2 className="text-lg md:text-xl font-extrabold mt-2 uppercase tracking-tight">
            MAPILLARY RAW DATA → SPATIAL SITUATION → BODY IMPULSE → ARCHITECTURAL NOTATION
          </h2>
          <p className="text-xs text-[#505050] mt-2 leading-relaxed">
            Every score notation pair remains strictly anchored to its raw urban provenance chain.
            Trace how a simple regulatory sign produces physical body actions on stage.
          </p>
        </div>

        {/* Animated Interactive 5-State Transformation Chain */}
        <div className="max-w-5xl mx-auto border-2 border-[#111111] bg-[#FFFFFF] p-4 md:p-6 shadow-lg mb-8">
          <div className="flex justify-between items-center border-b border-[#111111] pb-3 mb-4">
            <span className="text-xs font-black uppercase text-[#E6461A] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E6461A] animate-pulse" />
              <span>TRANSFORMATION STAGE {activeStep + 1} OF 5</span>
            </span>
            <div className="flex gap-1">
              {transformationChain.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-6 h-6 text-[10px] font-bold border transition-colors cursor-pointer ${
                    activeStep === idx
                      ? 'bg-[#E6461A] text-[#F7F7F3] border-[#E6461A]'
                      : 'bg-[#EFEFEB] text-[#111111] border-[#111111]/30 hover:bg-[#111111] hover:text-[#F7F7F3]'
                  }`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Active Transformation Card Display */}
          <div className="bg-[#F7F7F3] border border-[#111111] p-5 md:p-8 text-center transition-all min-h-[200px] flex flex-col justify-center items-center">
            <span className="text-[9px] bg-[#111111] text-[#F7F7F3] px-2 py-0.5 font-bold uppercase mb-2">
              {transformationChain[activeStep].tag}
            </span>
            <div className="text-lg md:text-2xl font-black text-[#E6461A] tracking-wider mb-2 font-mono">
              {transformationChain[activeStep].code}
            </div>
            <p className="text-xs md:text-sm text-[#111111] max-w-lg leading-relaxed">
              {transformationChain[activeStep].desc}
            </p>
          </div>

          {/* Stepper Buttons */}
          <div className="flex justify-between items-center border-t border-[#111111] pt-4 mt-4">
            <button
              onClick={() => setActiveStep((s) => Math.max(s - 1, 0))}
              disabled={activeStep === 0}
              className="px-3 py-1.5 border border-[#111111] text-xs font-bold uppercase disabled:opacity-30 cursor-pointer hover:bg-[#111111] hover:text-[#F7F7F3]"
            >
              PREVIOUS
            </button>
            <span className="text-[10px] text-[#505050] font-bold">
              STEP {activeStep + 1} // {transformationChain[activeStep].step}
            </span>
            <button
              onClick={() => setActiveStep((s) => Math.min(s + 1, 4))}
              disabled={activeStep === 4}
              className="px-3 py-1.5 bg-[#111111] text-[#F7F7F3] text-xs font-bold uppercase disabled:opacity-30 cursor-pointer hover:bg-[#E6461A]"
            >
              NEXT
            </button>
          </div>
        </div>

        {/* Four Compact Project Indicators */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="border border-[#111111] bg-[#FFFFFF] p-3 text-center">
            <div className="text-2xl font-black text-[#111111]">{db.scores.length}</div>
            <div className="text-[9px] text-[#505050] font-bold uppercase mt-1">SCORES REGISTERED</div>
          </div>
          <div className="border border-[#111111] bg-[#FFFFFF] p-3 text-center">
            <div className="text-2xl font-black text-[#111111]">{db.datasets.length}</div>
            <div className="text-[9px] text-[#505050] font-bold uppercase mt-1">SOURCE DATASETS</div>
          </div>
          <div className="border border-[#111111] bg-[#FFFFFF] p-3 text-center">
            <div className="text-2xl font-black text-[#111111]">130</div>
            <div className="text-[9px] text-[#505050] font-bold uppercase mt-1">MFI VALUE TYPES</div>
          </div>
          <div className="border border-[#111111] bg-[#FFFFFF] p-3 text-center">
            <div className="text-2xl font-black text-[#E6461A]">{db.notationPairs.length}</div>
            <div className="text-[9px] text-[#505050] font-bold uppercase mt-1">NOTATION PAIRS</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#111111] pt-3 flex flex-wrap justify-between items-center text-[10px] text-[#505050]">
        <span>PROTO PATH — ARCHITECTURAL STAGE NOTATION ENGINE</span>
        <span className="font-bold text-[#111111]">MAPILLARY RAW DATA INTEGRITY: VERIFIED</span>
      </footer>
    </div>
  );
};
