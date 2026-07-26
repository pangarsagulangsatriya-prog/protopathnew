import React, { useState } from 'react';
import { SourceFeature, DataProvocation } from '../domain/types';
import { Database, MapPin, Code, AlertCircle } from 'lucide-react';

interface SourcePanelProps {
  sourceFeature: SourceFeature | undefined;
  dataProvocation: DataProvocation | undefined;
  onOpenRawDrawer: () => void;
  onHighlightEntity: (entityId: string) => void;
  activeEntityIds?: string[];
  selectedEntityId?: string;
}

export const SourcePanel: React.FC<SourcePanelProps> = ({
  sourceFeature,
  dataProvocation,
  onOpenRawDrawer,
  onHighlightEntity,
  activeEntityIds = [],
  selectedEntityId,
}) => {
  if (!sourceFeature) {
    return (
      <div className="w-full h-full bg-[#FFFFFF] border border-[#111111] p-4 font-sans text-xs text-[#111111] flex flex-col justify-center items-center">
        <AlertCircle className="w-6 h-6 text-[#A6321B] mb-2" />
        <span className="font-bold">SOURCE RECORD MISSING</span>
        <span className="text-[10px] text-[#505050] text-center mt-1">
          No raw feature record attached to active notation pair.
        </span>
      </div>
    );
  }

  const isSelected = selectedEntityId === sourceFeature.id;
  const isRelated = activeEntityIds.includes(sourceFeature.id);

  return (
    <div
      className={`w-full h-full bg-[#FFFFFF] border border-[#111111] p-3 font-sans text-[#111111] flex flex-col justify-between overflow-y-auto scrollbar-thin transition-colors ${
        isSelected ? 'ring-2 ring-[#E6461A] bg-[#FFF9F6]' : isRelated ? 'bg-[#FFF9F6]' : ''
      }`}
    >
      <div>
        {/* Panel Header */}
        <div className="flex items-center justify-between border-b border-[#111111] pb-2 mb-3">
          <div className="flex items-center gap-1.5 font-mono">
            <Database className="w-4 h-4 text-[#E6461A]" />
            <span className="text-[11px] font-black uppercase tracking-wider">
              01 SOURCE DATA
            </span>
          </div>
          <span className="text-[9px] bg-[#EFEFEB] font-mono text-[#111111] px-1.5 py-0.5 border border-[#111111]/20 font-bold uppercase">
            RAW MAPILLARY
          </span>
        </div>

        {/* Dataset Provenance Banner */}
        <div className="bg-[#EFEFEB] border border-[#111111] p-2 mb-3 flex items-center justify-between text-[9.5px]">
          <div>
            <div className="text-[8px] text-[#505050] font-bold font-mono uppercase">DATASET IDENTITY</div>
            <div className="font-bold text-[#111111] font-mono truncate max-w-[160px]">
              {sourceFeature.sourceDatasetId}
            </div>
          </div>
        </div>

        {/* Mapillary Spatial View Box */}
        <div className="relative border border-[#111111] bg-[#F7F7F3] h-[180px] mb-3 overflow-hidden flex flex-col justify-between p-2 select-none group">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                'radial-gradient(#111111 1px, transparent 1px), linear-gradient(to right, #111111 1px, transparent 1px), linear-gradient(to bottom, #111111 1px, transparent 1px)',
              backgroundSize: '20px 20px, 40px 40px, 40px 40px',
            }}
          />

          <div className="relative z-10 flex justify-between items-center text-[8.5px] font-mono">
            <span className="bg-[#111111] text-[#F7F7F3] px-1.5 py-0.5 font-bold uppercase">
              LOCATION OBSERVATION
            </span>
            <span className="bg-[#FFFFFF] border border-[#111111] px-1 py-0.5 font-bold text-[#505050]">
              STAGE AXIS {sourceFeature.distanceMeters}m
            </span>
          </div>

          <div
            onClick={() => onHighlightEntity(sourceFeature.id)}
            className="relative z-10 self-center flex flex-col items-center cursor-pointer transform hover:scale-110 transition-transform"
          >
            <div className="w-10 h-10 rounded-full border-2 border-[#E6461A] bg-[#FFFFFF] flex items-center justify-center shadow-md animate-pulse">
              <div className="w-6 h-6 rounded-full border-2 border-[#E6461A] flex items-center justify-center relative">
                <div className="w-3 h-0.5 bg-[#E6461A] rotate-45 absolute" />
                <span className="text-[7px] font-black font-sans text-[#111111]">↱</span>
              </div>
            </div>
            <span className="text-[9px] font-extrabold font-mono bg-[#111111] text-[#F7F7F3] px-1.5 py-0.5 mt-1 border border-[#E6461A]">
              ±{sourceFeature.distanceMeters}m
            </span>
          </div>
        </div>

        {/* Raw Value Callout (EXACT) */}
        <div className="border border-[#111111] bg-[#FFFFFF] p-2.5 mb-3">
          <div className="text-[8px] text-[#505050] font-bold font-mono uppercase mb-1 flex justify-between">
            <span>EXACT RAW FEATURE VALUE</span>
          </div>
          <div
            onClick={() => onHighlightEntity(sourceFeature.id)}
            className="text-[11px] font-bold text-[#E6461A] bg-[#EFEFEB] p-1.5 border border-[#111111]/20 break-all select-text font-mono cursor-pointer hover:border-[#E6461A]"
          >
            {sourceFeature.rawValue}
          </div>
        </div>

        {/* Feature Metadata Table */}
        <div className="border border-[#111111] divide-y divide-[#111111]/15 text-[9.5px] font-mono mb-3">
          <div className="p-1.5 flex justify-between">
            <span className="text-[#505050] font-bold">COORDINATE</span>
            <span className="font-bold text-[#A6321B]">
              {sourceFeature.coordinate
                ? `${sourceFeature.coordinate.lon}, ${sourceFeature.coordinate.lat}`
                : 'NOT PROVIDED'}
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={onOpenRawDrawer}
        className="w-full py-1.5 bg-[#111111] font-mono text-[#F7F7F3] hover:bg-[#E6461A] text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-[#111111]"
      >
        <Code className="w-3.5 h-3.5" />
        <span>VIEW SOURCE DETAILS</span>
      </button>
    </div>
  );
};
