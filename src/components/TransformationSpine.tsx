import React, { useState } from 'react';
import {
  SourceFeature,
  DataProvocation,
  Situation,
  BodyImpulse,
  SpatialOutput,
} from '../domain/types';
import { GitCommit, ArrowDown } from 'lucide-react';

interface TransformationSpineProps {
  sourceFeature: SourceFeature | undefined;
  dataProvocation: DataProvocation | undefined;
  situation: Situation | undefined;
  bodyImpulse: BodyImpulse | undefined;
  spatialOutput: SpatialOutput | undefined;
  onHighlightEntity: (entityId: string) => void;
  activeEntityIds?: string[];
  selectedEntityId?: string;
}

export const TransformationSpine: React.FC<TransformationSpineProps> = ({
  sourceFeature,
  dataProvocation,
  situation,
  bodyImpulse,
  spatialOutput,
  onHighlightEntity,
  activeEntityIds = [],
  selectedEntityId,
}) => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const toggleExpand = (stepIndex: number) => {
    setExpandedStep(expandedStep === stepIndex ? null : stepIndex);
  };

  const isSelected = (id: string | undefined) => !!id && selectedEntityId === id;
  const isRelated = (id: string | undefined) => !!id && activeEntityIds.includes(id);

  const getHighlightClass = (id: string | undefined) => {
    if (isSelected(id)) return 'border-[#E6461A] bg-[#FFF9F6] shadow-sm ring-2 ring-[#E6461A]';
    if (isRelated(id)) return 'border-[#E6461A] bg-[#FFF9F6]';
    return 'border-[#111111] bg-[#F7F7F3] hover:bg-[#EFEFEB]';
  };

  return (
    <div className="w-full h-full bg-[#FFFFFF] border border-[#111111] p-3 font-sans text-[#111111] flex flex-col overflow-y-auto scrollbar-thin select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#111111] pb-2 mb-3">
        <div className="flex items-center gap-1.5 font-mono">
          <GitCommit className="w-4 h-4 text-[#E6461A]" />
          <span className="text-[11px] font-black uppercase tracking-wider">
            TRANSFORMATION SPINE
          </span>
        </div>
        <span className="text-[9px] bg-[#EFEFEB] px-1.5 py-0.5 border border-[#111111]/20 font-bold font-mono uppercase">
          READING CHAIN
        </span>
      </div>

      {/* Chain Container */}
      <div className="flex-1 flex flex-col gap-2 relative">
        {/* CARD 01: RAW FEATURE */}
        <div
          onClick={() => {
            if (sourceFeature) onHighlightEntity(sourceFeature.id);
            toggleExpand(1);
          }}
          className={`p-2.5 border transition-all cursor-pointer ${getHighlightClass(sourceFeature?.id)}`}
        >
          <div className="flex items-center justify-between mb-1 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] bg-[#111111] text-[#F7F7F3] px-1.5 py-0.5 font-bold">
                01
              </span>
              <span className="text-[10px] font-extrabold uppercase">RAW FEATURE</span>
            </div>
            <span className="text-[8px] text-emerald-700 font-bold bg-emerald-50 px-1 border border-emerald-300">
              VALID
            </span>
          </div>
          <div className="text-[11px] font-bold text-[#E6461A] truncate font-mono">
            {sourceFeature ? sourceFeature.rawValue : 'NO SOURCE RECORD'}
          </div>
          {expandedStep === 1 && sourceFeature && (
            <div className="mt-2 text-[8.5px] border-t border-[#111111]/20 pt-1.5 text-[#505050] space-y-1 font-mono">
              <div>Type: {sourceFeature.featureType}</div>
              <div>Dataset: {sourceFeature.sourceDatasetId}</div>
              <div>Distance: ±{sourceFeature.distanceMeters}m</div>
            </div>
          )}
        </div>

        {/* CONNECTOR 1 -> 2 */}
        <div className="flex justify-center">
          <ArrowDown className="w-3.5 h-3.5 text-[#E6461A]" />
        </div>

        {/* CARD 02: DATA PROVOCATION */}
        <div
          onClick={() => {
            if (dataProvocation) onHighlightEntity(dataProvocation.id);
            toggleExpand(2);
          }}
          className={`p-2.5 border transition-all cursor-pointer ${getHighlightClass(dataProvocation?.id)}`}
        >
          <div className="flex items-center justify-between mb-1 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] bg-[#111111] text-[#F7F7F3] px-1.5 py-0.5 font-bold">
                02
              </span>
              <span className="text-[10px] font-extrabold uppercase">DATA PROVOCATION</span>
            </div>
            <span className="text-[9px] font-bold text-[#111111]">
              {dataProvocation ? dataProvocation.code : 'DP.C1.3'}
            </span>
          </div>
          <p className="text-[9.5px] text-[#505050] line-clamp-2 leading-tight">
            {dataProvocation ? dataProvocation.verbatimText : 'Mapillary traffic regulation'}
          </p>
          {expandedStep === 2 && dataProvocation && (
            <div className="mt-2 text-[8.5px] border-t border-[#111111]/20 pt-1.5 text-[#505050] font-mono">
              Linked Source Features: {dataProvocation.sourceFeatureIds.length} record(s)
            </div>
          )}
        </div>

        {/* CONNECTOR 2 -> 3 */}
        <div className="flex justify-center">
          <ArrowDown className="w-3.5 h-3.5 text-[#E6461A]" />
        </div>

        {/* CARD 03: SITUATION */}
        <div
          onClick={() => {
            if (situation) onHighlightEntity(situation.id);
            toggleExpand(3);
          }}
          className={`p-2.5 border transition-all cursor-pointer ${getHighlightClass(situation?.id)}`}
        >
          <div className="flex items-center justify-between mb-1 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] bg-[#111111] text-[#F7F7F3] px-1.5 py-0.5 font-bold">
                03
              </span>
              <span className="text-[10px] font-extrabold uppercase">SITUATION</span>
            </div>
            <span className="text-[8.5px] bg-[#E6461A] text-[#F7F7F3] px-1 font-bold">
              [{situation ? situation.category : 'SITUATION'}]
            </span>
          </div>
          <div className="text-[10.5px] font-bold text-[#111111] mb-0.5 font-sans">
            {situation ? situation.title : 'Situation Condition'}
          </div>
          <p className="text-[9px] text-[#505050] line-clamp-2 leading-tight font-sans">
            {situation ? situation.spatialCondition : 'Spatial condition description.'}
          </p>
          {expandedStep === 3 && situation && (
            <div className="mt-2 text-[8.5px] border-t border-[#111111]/20 pt-1.5 text-[#505050] space-y-1 font-mono">
              <div>Code: {situation.code}</div>
              <div>Object Tokens: {situation.objectTokens.join(', ')}</div>
              <div>Active Vectors: {situation.activeVectors.join(', ')}</div>
            </div>
          )}
        </div>

        {/* CONNECTOR 3 -> 4 */}
        <div className="flex justify-center">
          <ArrowDown className="w-3.5 h-3.5 text-[#E6461A]" />
        </div>

        {/* CARD 04: BODY IMPULSE */}
        <div
          onClick={() => {
            if (bodyImpulse) onHighlightEntity(bodyImpulse.id);
            toggleExpand(4);
          }}
          className={`p-2.5 border transition-all cursor-pointer ${getHighlightClass(bodyImpulse?.id)}`}
        >
          <div className="flex items-center justify-between mb-1 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] bg-[#111111] text-[#F7F7F3] px-1.5 py-0.5 font-bold">
                04
              </span>
              <span className="text-[10px] font-extrabold uppercase">BODY IMPULSE</span>
            </div>
            <span className="text-[8.5px] bg-[#111111] text-[#F7F7F3] px-1 font-bold">
              [{bodyImpulse ? bodyImpulse.impulse : 'IMPULSE'}]
            </span>
          </div>
          <div className="text-[10.5px] font-bold text-[#111111] mb-0.5 font-sans">
            {bodyImpulse ? bodyImpulse.title : 'Body Impulse Response'}
          </div>
          <p className="text-[9px] text-[#505050] line-clamp-2 leading-tight font-sans">
            {bodyImpulse ? bodyImpulse.bodyAction : 'Kinetic body action description.'}
          </p>
          {expandedStep === 4 && bodyImpulse && (
            <div className="mt-2 text-[8.5px] border-t border-[#111111]/20 pt-1.5 text-[#505050] space-y-1 font-mono">
              <div>Code: {bodyImpulse.code}</div>
              <div>Anatomical Loci: {bodyImpulse.anatomicalLoci.join(', ')}</div>
              <div>Qualities: {bodyImpulse.kineticQualities.join(', ')}</div>
            </div>
          )}
        </div>

        {/* CONNECTOR 4 -> 5 */}
        <div className="flex justify-center">
          <ArrowDown className="w-3.5 h-3.5 text-[#E6461A]" />
        </div>

        {/* CARD 05: SPATIAL OUTPUT */}
        <div
          onClick={() => {
            if (spatialOutput) onHighlightEntity(spatialOutput.id);
            toggleExpand(5);
          }}
          className={`p-2.5 border transition-all cursor-pointer ${getHighlightClass(spatialOutput?.id)}`}
        >
          <div className="flex items-center justify-between mb-1 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] bg-[#111111] text-[#F7F7F3] px-1.5 py-0.5 font-bold">
                05
              </span>
              <span className="text-[10px] font-extrabold uppercase">SPATIAL OUTPUT</span>
            </div>
            <span className="text-[8.5px] text-[#E6461A] font-bold">STAGE STATE</span>
          </div>
          <div className="text-[10.5px] font-bold text-[#111111] font-sans">
            {spatialOutput ? spatialOutput.label : 'Spatial Output'}
          </div>
          <p className="text-[9px] text-[#505050] line-clamp-2 leading-tight mt-0.5 font-sans">
            {spatialOutput ? spatialOutput.description : 'Description of spatial output.'}
          </p>
        </div>

        {/* CONNECTOR 5 -> 6 */}
        <div className="flex justify-center">
          <ArrowDown className="w-3.5 h-3.5 text-[#E6461A]" />
        </div>

        {/* CARD 06: RESIDUAL */}
        <div
          onClick={() => toggleExpand(6)}
          className="p-2.5 border border-[#111111] bg-[#111111] text-[#F7F7F3] transition-all cursor-pointer hover:bg-[#222222]"
        >
          <div className="flex items-center justify-between mb-1 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] bg-[#E6461A] text-[#F7F7F3] px-1.5 py-0.5 font-bold">
                06
              </span>
              <span className="text-[10px] font-extrabold uppercase">RESIDUAL STATE</span>
            </div>
            <span className="text-[8px] text-[#A0A0A0]">PHYSICAL RESIDUE</span>
          </div>
          <div className="text-[9.5px] font-bold text-amber-400 font-mono">
            {spatialOutput && spatialOutput.residue.length > 0
              ? spatialOutput.residue.join(' • ')
              : 'RESIDUAL TENSION MAINTAINED'}
          </div>
        </div>
      </div>
    </div>
  );
};
