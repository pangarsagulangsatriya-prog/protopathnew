import React, { useState } from 'react';
import { SourceFeature, DataProvocation } from '../domain/types';
import { Database, MapPin, Code, ShieldCheck, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';

interface SourcePanelProps {
  sourceFeature: SourceFeature | undefined;
  dataProvocation: DataProvocation | undefined;
  onOpenRawDrawer: () => void;
  onHighlightEntity: (entityId: string) => void;
  activeEntityId?: string;
}

export const SourcePanel: React.FC<SourcePanelProps> = ({
  sourceFeature,
  dataProvocation,
  onOpenRawDrawer,
  onHighlightEntity,
  activeEntityId,
}) => {
  const [mapZoom, setMapZoom] = useState<number>(1);

  if (!sourceFeature) {
    return (
      <div className="w-full h-full bg-[#FFFFFF] border border-[#111111] p-4 font-mono text-xs text-[#111111] flex flex-col justify-center items-center">
        <AlertCircle className="w-6 h-6 text-[#A6321B] mb-2" />
        <span className="font-bold">SOURCE RECORD MISSING</span>
        <span className="text-[10px] text-[#505050] text-center mt-1">
          No raw feature record attached to active notation pair.
        </span>
      </div>
    );
  }

  const isHighlighted = activeEntityId === sourceFeature.id;

  return (
    <div
      className={`w-full h-full bg-[#FFFFFF] border border-[#111111] p-3 font-mono text-[#111111] flex flex-col justify-between overflow-y-auto scrollbar-thin transition-colors ${
        isHighlighted ? 'ring-2 ring-[#E6461A] bg-[#FFF9F6]' : ''
      }`}
    >
      <div>
        {/* Panel Header */}
        <div className="flex items-center justify-between border-b border-[#111111] pb-2 mb-3">
          <div className="flex items-center gap-1.5">
            <Database className="w-4 h-4 text-[#E6461A]" />
            <span className="text-[11px] font-black uppercase tracking-wider">
              01 SOURCE DATA
            </span>
          </div>
          <span className="text-[9px] bg-[#EFEFEB] text-[#111111] px-1.5 py-0.5 border border-[#111111]/20 font-bold uppercase">
            RAW MAPILLARY
          </span>
        </div>

        {/* Dataset Provenance Banner */}
        <div className="bg-[#EFEFEB] border border-[#111111] p-2 mb-3 flex items-center justify-between text-[9.5px]">
          <div>
            <div className="text-[8px] text-[#505050] font-bold uppercase">DATASET IDENTITY</div>
            <div className="font-bold text-[#111111] truncate max-w-[160px]">
              {sourceFeature.sourceDatasetId}
            </div>
          </div>
          <div className="flex items-center gap-1 text-emerald-700 font-bold text-[8.5px] uppercase bg-emerald-50 border border-emerald-300 px-1.5 py-0.5">
            <ShieldCheck className="w-3 h-3" />
            <span>IMMUTABLE</span>
          </div>
        </div>

        {/* Mapillary Spatial View Box */}
        <div className="relative border border-[#111111] bg-[#F7F7F3] h-[180px] mb-3 overflow-hidden flex flex-col justify-between p-2 select-none group">
          {/* Simulated Map Grid */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                'radial-gradient(#111111 1px, transparent 1px), linear-gradient(to right, #111111 1px, transparent 1px), linear-gradient(to bottom, #111111 1px, transparent 1px)',
              backgroundSize: '20px 20px, 40px 40px, 40px 40px',
            }}
          />

          {/* Top Bar Map Indicator */}
          <div className="relative z-10 flex justify-between items-center text-[8.5px]">
            <span className="bg-[#111111] text-[#F7F7F3] px-1.5 py-0.5 font-bold uppercase">
              LOCATION OBSERVATION
            </span>
            <span className="bg-[#FFFFFF] border border-[#111111] px-1 py-0.5 font-bold text-[#505050]">
              STAGE AXIS 12.15m
            </span>
          </div>

          {/* Center Map Marker */}
          <div
            onClick={() => onHighlightEntity(sourceFeature.id)}
            className="relative z-10 self-center flex flex-col items-center cursor-pointer transform hover:scale-110 transition-transform"
          >
            <div className="w-10 h-10 rounded-full border-2 border-[#E6461A] bg-[#FFFFFF] flex items-center justify-center shadow-md animate-pulse">
              {/* Traffic Sign Symbol */}
              <div className="w-6 h-6 rounded-full border-2 border-[#E6461A] flex items-center justify-center relative">
                <div className="w-3 h-0.5 bg-[#E6461A] rotate-45 absolute" />
                <span className="text-[7px] font-black text-[#111111]">↱</span>
              </div>
            </div>
            <span className="text-[9px] font-extrabold bg-[#111111] text-[#F7F7F3] px-1.5 py-0.5 mt-1 border border-[#E6461A]">
              ±12.15m
            </span>
          </div>

          {/* Bottom Live Media Token Fallback Notice */}
          <div className="relative z-10 text-[8px] bg-[#FFFFFF]/90 border border-[#111111]/30 p-1 flex items-center gap-1 text-[#505050]">
            <AlertCircle className="w-3 h-3 text-amber-600 shrink-0" />
            <span className="truncate">LIVE MAPILLARY MEDIA UNAVAILABLE (TOKEN-FREE MODE)</span>
          </div>
        </div>

        {/* Raw Value Callout (EXACT) */}
        <div className="border border-[#111111] bg-[#FFFFFF] p-2.5 mb-3">
          <div className="text-[8px] text-[#505050] font-bold uppercase mb-1 flex justify-between">
            <span>EXACT RAW FEATURE VALUE</span>
            <span className="text-emerald-600 font-bold">RAW UNTOUCHED</span>
          </div>
          <div
            onClick={() => onHighlightEntity(sourceFeature.id)}
            className="text-[11px] font-bold text-[#E6461A] bg-[#EFEFEB] p-1.5 border border-[#111111]/20 break-all select-text font-mono cursor-pointer hover:border-[#E6461A]"
          >
            {sourceFeature.rawValue}
          </div>
        </div>

        {/* Feature Metadata Table */}
        <div className="border border-[#111111] divide-y divide-[#111111]/15 text-[9.5px] mb-3">
          <div className="p-1.5 flex justify-between bg-[#EFEFEB]">
            <span className="text-[#505050] font-bold">SOURCE FILE</span>
            <span className="font-bold text-[#111111]">{sourceFeature.sourceFile}</span>
          </div>
          <div className="p-1.5 flex justify-between">
            <span className="text-[#505050] font-bold">FEATURE TYPE</span>
            <span className="font-bold text-[#111111] uppercase">[{sourceFeature.featureType}]</span>
          </div>
          <div className="p-1.5 flex justify-between">
            <span className="text-[#505050] font-bold">COORDINATE</span>
            <span className="font-bold text-[#A6321B]">
              {sourceFeature.coordinate
                ? `${sourceFeature.coordinate.lon}, ${sourceFeature.coordinate.lat}`
                : 'NOT PROVIDED'}
            </span>
          </div>
          <div className="p-1.5 flex justify-between">
            <span className="text-[#505050] font-bold">DISTANCE</span>
            <span className="font-bold text-[#111111]">
              {sourceFeature.distanceMeters !== null
                ? `±${sourceFeature.distanceMeters} m`
                : 'NOT PROVIDED'}
            </span>
          </div>
          <div className="p-1.5 flex justify-between">
            <span className="text-[#505050] font-bold">LINKED PAIRS</span>
            <span className="font-bold text-[#E6461A]">2 NOTATION PAIRS</span>
          </div>
        </div>

        {/* Data Provocation Code */}
        {dataProvocation && (
          <div className="border border-[#111111] p-2 bg-[#F7F7F3] mb-3">
            <div className="text-[8px] text-[#505050] font-bold uppercase mb-0.5">
              DATA PROVOCATION REFERENCE
            </div>
            <div className="text-[10px] font-bold text-[#111111] flex items-center justify-between">
              <span>{dataProvocation.code}</span>
              <span className="text-[8.5px] bg-[#111111] text-[#F7F7F3] px-1 font-mono">
                {dataProvocation.sourceLabel}
              </span>
            </div>
            <p className="text-[8.5px] text-[#505050] mt-1 leading-tight">
              {dataProvocation.verbatimText}
            </p>
          </div>
        )}
      </div>

      {/* Raw JSON Drawer Trigger */}
      <button
        onClick={onOpenRawDrawer}
        className="w-full py-1.5 bg-[#111111] text-[#F7F7F3] hover:bg-[#E6461A] text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-[#111111]"
      >
        <Code className="w-3.5 h-3.5" />
        <span>INSPECT RAW JSON</span>
      </button>
    </div>
  );
};
