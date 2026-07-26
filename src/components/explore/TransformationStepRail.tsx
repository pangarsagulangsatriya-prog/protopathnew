import React from 'react';
import {
  SourceFeature,
  DataProvocation,
  Situation,
  BodyImpulse,
  SpatialOutput,
} from '../../domain/types';

export type TransformationStep = 'data' | 'situation' | 'body' | 'output';

interface TransformationStepRailProps {
  activeStep: TransformationStep;
  onStepSelect: (step: TransformationStep) => void;
  sourceFeature?: SourceFeature;
  dataProvocation?: DataProvocation;
  situation?: Situation;
  bodyImpulse?: BodyImpulse;
  spatialOutput?: SpatialOutput;
}

export const TransformationStepRail: React.FC<TransformationStepRailProps> = ({
  activeStep,
  onStepSelect,
  sourceFeature,
  dataProvocation,
  situation,
  bodyImpulse,
  spatialOutput,
}) => {
  const steps: {
    id: TransformationStep;
    num: string;
    label: string;
    code: string | undefined;
    description: string | undefined;
    status: string;
  }[] = [
    {
      id: 'data',
      num: '01',
      label: 'DATA',
      code: dataProvocation?.code || sourceFeature?.featureType,
      description: dataProvocation?.verbatimText || sourceFeature?.rawValue,
      status: sourceFeature?.validationStatus === 'valid' ? 'VALID' : 'UNVERIFIED',
    },
    {
      id: 'situation',
      num: '02',
      label: 'SITUATION',
      code: situation?.code,
      description: situation?.title,
      status: situation?.category || 'PENDING',
    },
    {
      id: 'body',
      num: '03',
      label: 'BODY',
      code: bodyImpulse?.code,
      description: bodyImpulse?.title,
      status: bodyImpulse?.impulse || 'PENDING',
    },
    {
      id: 'output',
      num: '04',
      label: 'OUTPUT',
      code: spatialOutput?.label,
      description: spatialOutput?.description,
      status: spatialOutput?.residue.length ? 'RESIDUAL TENSION' : 'RESOLVED',
    },
  ];

  return (
    <div className="flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible w-full font-mono select-none">
      {steps.map((step) => {
        const isActive = activeStep === step.id;
        return (
          <button
            key={step.id}
            onClick={() => onStepSelect(step.id)}
            className={`flex flex-col flex-shrink-0 w-64 md:w-full text-left transition-all border-l-4 p-3 cursor-pointer ${
              isActive
                ? 'border-[#E6461A] bg-[#FFF9F6]'
                : 'border-transparent hover:border-[#111111]/20 hover:bg-[#EFEFEB] opacity-60 hover:opacity-100'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-[10px] font-black px-1.5 py-0.5 ${isActive ? 'bg-[#E6461A] text-[#F7F7F3]' : 'bg-[#111111] text-[#F7F7F3]'}`}>
                {step.num}
              </span>
              <span className="text-[11px] font-bold uppercase text-[#111111]">{step.label}</span>
            </div>
            
            <div className={`text-[11px] font-bold truncate mt-1 ${isActive ? 'text-[#E6461A]' : 'text-[#505050]'}`}>
              {step.code || 'NO CODE'}
            </div>

            {isActive && (
              <div className="mt-2 pt-2 border-t border-[#E6461A]/20">
                <div className="text-[12px] font-sans text-[#111111] leading-snug mb-2 line-clamp-3">
                  {step.description || 'No description available.'}
                </div>
                <div className="text-[9px] font-bold uppercase text-[#505050]">
                  [{step.status}]
                </div>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};
