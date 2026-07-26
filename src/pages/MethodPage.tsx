import React, { useState } from 'react';
import { BookOpen, GitCommit, ArrowRight, Layers, Search, CheckCircle } from 'lucide-react';

export const MethodPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'CHAIN' | 'TAXONOMY' | 'LOCI' | 'CODES'>('CHAIN');

  const readingChain = [
    {
      code: 'DATA PROVOCATION',
      desc: 'Raw urban feature observation imported from Mapillary without normalization or alteration.',
    },
    {
      code: 'STIMULUS',
      desc: 'Specific sensory vector or regulatory prohibition exerted upon the stage axis.',
    },
    {
      code: 'SITUATION',
      desc: 'Spatial condition created when stimulus encounters the primary axis and performer path.',
    },
    {
      code: 'BODY IMPULSE',
      desc: 'Kinetic body response generated at target anatomical loci under spatial pressure.',
    },
    {
      code: 'SPATIAL OUTPUT',
      desc: 'Residual posture, locked axis, or tremor loop remaining on stage.',
    },
  ];

  const impulses = [
    { token: 'FREEZE', desc: 'Arrests forward movement at spine and pelvis; holds prohibition as internal torque.' },
    { token: 'GLITCH', desc: 'Produces mechanical tremor at wrist and shoulder while drive remains active.' },
    { token: 'INJECTION', desc: 'Applies sudden directional impulse at feet or knees upon contact.' },
    { token: 'ACCELERATION', desc: 'Increases kinetic momentum along the primary linear axis.' },
    { token: 'COMPRESSION', desc: 'Constricts torso and ribcage under mass or elevation pressure.' },
    { token: 'ASYMMETRIC', desc: 'Creates lateral postural shift between left and right shoulders.' },
    { token: 'FIXATION', desc: 'Locks gaze or head orientation onto regulatory sign marker.' },
    { token: 'CONSTANT', desc: 'Maintains steady baseline tension without kinetic deviation.' },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F7F7F3] text-[#111111] font-mono p-4 md:p-8 select-none">
      {/* Header */}
      <div className="border-b-2 border-[#111111] pb-4 mb-6 flex flex-wrap justify-between items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#E6461A]" />
            <span className="text-xs font-bold text-[#E6461A] uppercase tracking-widest">
              METHODOLOGICAL FRAMEWORK
            </span>
          </div>
          <h1 className="text-xl md:text-2xl font-black uppercase tracking-tight mt-1">
            DATA TO BODY / STAGE TRANSLATION PROTOCOL
          </h1>
        </div>

        {/* Sub Navigation */}
        <div className="flex bg-[#EFEFEB] p-0.5 border border-[#111111]/30">
          {[
            { id: 'CHAIN', label: 'READING CHAIN' },
            { id: 'TAXONOMY', label: 'IMPULSE TAXONOMY' },
            { id: 'LOCI', label: 'ANATOMICAL LOCI' },
            { id: 'CODES', label: 'REFERENCE CODES' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1 text-[10px] font-bold uppercase transition-colors cursor-pointer ${
                activeTab === tab.id ? 'bg-[#111111] text-[#F7F7F3]' : 'text-[#505050] hover:text-[#111111]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* READING CHAIN TAB */}
      {activeTab === 'CHAIN' && (
        <div className="space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-lg font-black uppercase mb-2">THE 5-STEP TRANSLATION CHAIN</h2>
            <p className="text-xs text-[#505050] leading-relaxed">
              PROTO PATH establishes an unbroken, traceable lineage from raw urban sensor data to stage notation.
              Every derived physical action must point back to a specific raw source record.
            </p>
          </div>

          <div className="space-y-3">
            {readingChain.map((step, idx) => (
              <div
                key={idx}
                className="border border-[#111111] bg-[#FFFFFF] p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-[#111111] text-[#F7F7F3] font-black flex items-center justify-center text-xs">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-extrabold uppercase text-[#E6461A]">
                      {step.code}
                    </h3>
                    <p className="text-xs text-[#505050] mt-0.5">{step.desc}</p>
                  </div>
                </div>

                {idx < 4 && <ArrowRight className="w-5 h-5 text-[#111111] hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAXONOMY TAB */}
      {activeTab === 'TAXONOMY' && (
        <div className="space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-lg font-black uppercase mb-2">BODY IMPULSE TAXONOMY</h2>
            <p className="text-xs text-[#505050] leading-relaxed">
              Standardized body impulse tokens describing the performer's kinetic response to spatial conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {impulses.map((imp) => (
              <div key={imp.token} className="border border-[#111111] bg-[#FFFFFF] p-3">
                <span className="text-[9px] bg-[#E6461A] text-[#F7F7F3] px-1.5 py-0.5 font-bold uppercase">
                  TOKEN
                </span>
                <h3 className="text-sm font-black uppercase mt-1 text-[#111111]">{imp.token}</h3>
                <p className="text-[10px] text-[#505050] mt-2 leading-tight">{imp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* LOCI TAB */}
      {activeTab === 'LOCI' && (
        <div className="space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-lg font-black uppercase mb-2">ANATOMICAL LOCI MATRIX</h2>
            <p className="text-xs text-[#505050] leading-relaxed">
              Precise body regions that register spatial torque, tension, or vibration during performance.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {[
              'spine',
              'pelvis',
              'wrist',
              'shoulder',
              'cervical-spine',
              'clavicle',
              'sternum',
              'scapula',
              'elbow',
              'fingers',
              'hip',
              'knee',
            ].map((loc) => (
              <div key={loc} className="border border-[#111111] bg-[#FFFFFF] p-2.5 text-center">
                <span className="text-[8px] text-[#505050] font-bold uppercase block">LOCUS</span>
                <span className="text-xs font-bold uppercase text-[#111111]">{loc}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CODES TAB */}
      {activeTab === 'CODES' && (
        <div className="space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-lg font-black uppercase mb-2">REFERENCE CODE CONVENTIONS</h2>
            <p className="text-xs text-[#505050] leading-relaxed">
              Prefix conventions used across the Proto Path notation system.
            </p>
          </div>

          <div className="border border-[#111111] bg-[#FFFFFF] p-4 space-y-2 text-xs">
            <div className="flex justify-between border-b border-[#111111]/20 pb-1.5">
              <span className="font-extrabold text-[#E6461A]">DP.*</span>
              <span className="text-[#505050]">Data Provocation</span>
            </div>
            <div className="flex justify-between border-b border-[#111111]/20 pb-1.5">
              <span className="font-extrabold text-[#E6461A]">ST.*</span>
              <span className="text-[#505050]">Situation / Spatial Condition</span>
            </div>
            <div className="flex justify-between border-b border-[#111111]/20 pb-1.5">
              <span className="font-extrabold text-[#E6461A]">RT.*</span>
              <span className="text-[#505050]">Body Impulse Response</span>
            </div>
            <div className="flex justify-between border-b border-[#111111]/20 pb-1.5">
              <span className="font-extrabold text-[#E6461A]">C1.*</span>
              <span className="text-[#505050]">Score 01 Checkpoint Index</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
