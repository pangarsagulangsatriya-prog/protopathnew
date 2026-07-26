import React from 'react';
import {
  SourceFeature,
  DataProvocation,
  Situation,
  BodyImpulse,
  SpatialOutput,
  DiagramAsset,
} from '../../domain/types';
import { TransformationStep } from './TransformationStepRail';
import { Code, AlertCircle } from 'lucide-react';

interface ContextInspectorProps {
  activeStep: TransformationStep;
  sourceFeature?: SourceFeature;
  dataProvocation?: DataProvocation;
  situation?: Situation;
  bodyImpulse?: BodyImpulse;
  spatialOutput?: SpatialOutput;
  diagramAsset?: DiagramAsset;
  onOpenRawDrawer: () => void;
}

export const ContextInspector: React.FC<ContextInspectorProps> = ({
  activeStep,
  sourceFeature,
  dataProvocation,
  situation,
  bodyImpulse,
  spatialOutput,
  diagramAsset,
  onOpenRawDrawer,
}) => {
  return (
    <div className="w-full h-full bg-[#FFFFFF] border-l border-[#111111]/20 p-4 font-sans text-[#111111] overflow-y-auto scrollbar-thin">
      
      {/* DATA INSPECTOR */}
      {activeStep === 'data' && (
        <div className="animate-in fade-in duration-300">
          <h2 className="font-mono text-[11px] font-black uppercase mb-4 border-b border-[#111111] pb-2">01 SOURCE DATA METADATA</h2>
          
          <div className="space-y-4">
            <div>
              <div className="font-mono text-[9px] font-bold text-[#505050] mb-1">EXACT RAW FEATURE VALUE</div>
              <div className="font-mono text-[13px] text-[#E6461A] font-bold break-words bg-[#F7F7F3] p-2 border border-[#111111]/10">
                {sourceFeature?.rawValue || 'UNAVAILABLE'}
              </div>
            </div>

            <div>
              <div className="font-mono text-[9px] font-bold text-[#505050] mb-1">DATA PROVOCATION</div>
              <div className="text-[14px] leading-relaxed">
                {dataProvocation?.verbatimText || 'No provocation linked.'}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 font-mono text-[10px]">
              <div>
                <span className="text-[#505050] block mb-0.5 font-bold">TYPE</span>
                <span>{sourceFeature?.featureType || '--'}</span>
              </div>
              <div>
                <span className="text-[#505050] block mb-0.5 font-bold">DATASET</span>
                <span className="truncate block" title={sourceFeature?.sourceDatasetId}>{sourceFeature?.sourceDatasetId || '--'}</span>
              </div>
              <div>
                <span className="text-[#505050] block mb-0.5 font-bold">STAGE AXIS DISTANCE</span>
                <span>{sourceFeature?.distanceMeters != null ? `±${sourceFeature.distanceMeters}m` : '--'}</span>
              </div>
              <div>
                <span className="text-[#505050] block mb-0.5 font-bold">STATUS</span>
                <span className="text-emerald-700 font-bold">{sourceFeature?.validationStatus || '--'}</span>
              </div>
            </div>

            <button
              onClick={onOpenRawDrawer}
              className="mt-6 w-full py-2 bg-[#111111] text-[#F7F7F3] hover:bg-[#E6461A] transition-colors font-mono text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <Code className="w-4 h-4" />
              <span>VIEW RAW JSON</span>
            </button>
          </div>
        </div>
      )}

      {/* SITUATION INSPECTOR */}
      {activeStep === 'situation' && (
        <div className="animate-in fade-in duration-300">
          <h2 className="font-mono text-[11px] font-black uppercase mb-4 border-b border-[#111111] pb-2">02 SITUATION CONDITION</h2>
          
          <div className="space-y-4">
            <div>
              <div className="font-mono text-[13px] text-[#111111] font-bold mb-2">{situation?.code || 'NO CODE'}</div>
              <div className="text-[15px] leading-relaxed">
                {situation?.spatialCondition || 'No spatial condition recorded.'}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 font-mono text-[10px] mt-4 pt-4 border-t border-[#111111]/10">
              <div>
                <span className="text-[#505050] block mb-0.5 font-bold">CATEGORY</span>
                <span className="bg-[#EFEFEB] px-1.5 py-0.5">{situation?.category || '--'}</span>
              </div>
              <div>
                <span className="text-[#505050] block mb-0.5 font-bold">OBJECT TOKENS</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {situation?.objectTokens.length ? situation.objectTokens.map(token => (
                    <span key={token} className="bg-[#F7F7F3] border border-[#111111]/20 px-1.5 py-0.5">{token}</span>
                  )) : '--'}
                </div>
              </div>
              <div>
                <span className="text-[#505050] block mb-0.5 font-bold">ACTIVE VECTORS</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {situation?.activeVectors.length ? situation.activeVectors.map(vec => (
                    <span key={vec} className="text-[#E6461A] border border-[#E6461A]/30 bg-[#FFF9F6] px-1.5 py-0.5">{vec}</span>
                  )) : '--'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* BODY INSPECTOR */}
      {activeStep === 'body' && (
        <div className="animate-in fade-in duration-300">
          <h2 className="font-mono text-[11px] font-black uppercase mb-4 border-b border-[#111111] pb-2">03 BODY IMPULSE</h2>
          
          <div className="space-y-4">
            <div>
              <div className="font-mono text-[13px] text-[#111111] font-bold mb-2 flex items-center justify-between">
                <span>{bodyImpulse?.code || 'NO CODE'}</span>
                <span className="text-[10px] bg-[#111111] text-[#F7F7F3] px-2 py-0.5">{bodyImpulse?.impulse || 'IMPULSE'}</span>
              </div>
              <div className="text-[15px] leading-relaxed">
                {bodyImpulse?.bodyAction || 'No body action recorded.'}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 font-mono text-[10px] mt-4 pt-4 border-t border-[#111111]/10">
              <div>
                <span className="text-[#505050] block mb-0.5 font-bold">ANATOMICAL LOCI</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {bodyImpulse?.anatomicalLoci.length ? bodyImpulse.anatomicalLoci.map(locus => (
                    <span key={locus} className="border-b border-[#111111] pb-0.5 uppercase">{locus}</span>
                  )) : '--'}
                </div>
              </div>
              <div>
                <span className="text-[#505050] block mb-0.5 font-bold">KINETIC QUALITIES</span>
                <div className="flex flex-wrap gap-1 mt-1 text-[#505050]">
                  {bodyImpulse?.kineticQualities.length ? bodyImpulse.kineticQualities.join(' • ') : '--'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OUTPUT INSPECTOR */}
      {activeStep === 'output' && (
        <div className="animate-in fade-in duration-300">
          <h2 className="font-mono text-[11px] font-black uppercase mb-4 border-b border-[#111111] pb-2">04 SPATIAL OUTPUT</h2>
          
          <div className="space-y-4">
            <div>
              <div className="font-mono text-[13px] text-[#E6461A] font-bold mb-2">{spatialOutput?.label || 'OUTPUT STATE'}</div>
              <div className="text-[15px] leading-relaxed">
                {spatialOutput?.description || 'No spatial description available.'}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 font-mono text-[10px] mt-4 pt-4 border-t border-[#111111]/10">
              <div>
                <span className="text-[#505050] block mb-1 font-bold">RESIDUAL TENSION</span>
                {spatialOutput?.residue.length ? (
                  <ul className="list-disc pl-4 space-y-1 text-[#111111]">
                    {spatialOutput.residue.map((res, i) => <li key={i}>{res}</li>)}
                  </ul>
                ) : (
                  <span className="text-[#888888]">NONE</span>
                )}
              </div>
              
              {diagramAsset && (
                <div className="mt-2">
                  <span className="text-[#505050] block mb-1 font-bold">DIAGRAM STATUS</span>
                  {diagramAsset.status === 'content-mismatch-review-required' ? (
                    <div className="flex items-start gap-1.5 text-amber-600 bg-amber-50 p-2 border border-amber-200">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <div>CONTENT MISMATCH REVIEW REQUIRED</div>
                    </div>
                  ) : (
                    <div className="text-emerald-700 font-bold uppercase">{diagramAsset.status}</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
