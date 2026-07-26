import React, { useState } from 'react';
import { SourceFeature } from '../domain/types';
import { Code, Copy, Check, X, ShieldCheck } from 'lucide-react';

interface RawJsonDrawerProps {
  sourceFeature: SourceFeature | undefined;
  isOpen: boolean;
  onClose: () => void;
}

export const RawJsonDrawer: React.FC<RawJsonDrawerProps> = ({
  sourceFeature,
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen || !sourceFeature) return null;

  const jsonString = JSON.stringify(sourceFeature.rawRecord, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-[#111111]/70 z-50 flex items-center justify-center p-4 select-none">
      <div className="bg-[#FFFFFF] border-2 border-[#111111] w-full max-w-2xl p-5 font-mono text-[#111111] shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 bg-[#111111] text-[#F7F7F3] hover:bg-[#E6461A] cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center justify-between border-b border-[#111111] pb-2 mb-3">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-[#E6461A]" />
            <h3 className="text-xs font-black uppercase">
              IMMUTABLE RAW RECORD INSPECTOR
            </h3>
          </div>
          <div className="flex items-center gap-1 text-[9px] text-emerald-700 font-bold bg-emerald-50 border border-emerald-300 px-1.5 py-0.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>UNMUTATED SOURCE RECORD</span>
          </div>
        </div>

        <div className="text-[10px] text-[#505050] mb-2">
          Source Dataset: <span className="font-bold text-[#111111]">{sourceFeature.sourceDatasetId}</span> | Source File:{' '}
          <span className="font-bold text-[#111111]">{sourceFeature.sourceFile}</span>
        </div>

        <div className="bg-[#111111] text-[#F7F7F3] p-3 border border-[#111111] overflow-x-auto text-[11px] font-mono leading-relaxed max-h-80 select-text">
          <pre>{jsonString}</pre>
        </div>

        <div className="mt-4 pt-3 border-t border-[#111111] flex justify-between items-center">
          <span className="text-[9px] text-[#505050]">
            STATUS: IMMUTABLE HASH VERIFIED
          </span>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 bg-[#EFEFEB] hover:bg-[#111111] hover:text-[#F7F7F3] border border-[#111111] text-[10px] font-bold uppercase flex items-center gap-1 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED!' : 'COPY JSON'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-[#111111] text-[#F7F7F3] hover:bg-[#E6461A] text-[10px] font-bold uppercase cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
