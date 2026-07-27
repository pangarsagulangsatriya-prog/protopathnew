import React from 'react';
import { ProtoPathDatabase } from '../../domain/types';

interface ArchiveHomeProps {
  db: ProtoPathDatabase;
}

export const ArchiveHome: React.FC<ArchiveHomeProps> = ({ db }) => {
  return (
    <div className="p-8 max-w-7xl mx-auto font-mono text-[#111111]">
      <div className="border-b border-[#111111] pb-4 mb-8">
        <h1 className="text-2xl font-black uppercase tracking-widest">Research Archive</h1>
        <p className="text-xs text-[#505050] mt-2">
          Canonical index of {db.notationPairs.length} score units, {db.situations.length} situations, and {db.sequenceFrames.length} captured frames.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-sm font-bold bg-[#111111] text-[#F7F7F3] inline-block px-2 py-1 mb-4">
            RECENT SCORE UNITS
          </h2>
          <table className="w-full text-left text-[10px] border border-[#111111]/20">
            <thead className="bg-[#EFEFEB] border-b border-[#111111]/20">
              <tr>
                <th className="p-2 font-bold">ID</th>
                <th className="p-2 font-bold">Situations</th>
                <th className="p-2 font-bold">Frames</th>
              </tr>
            </thead>
            <tbody>
              {db.notationPairs.slice(0, 10).map(pair => (
                <tr key={pair.id} className="border-b border-[#111111]/10 hover:bg-[#F0F0F0]">
                  <td className="p-2 font-bold">{pair.id}</td>
                  <td className="p-2">{pair.situationIds.length}</td>
                  <td className="p-2">{pair.sequenceFrameIds.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="text-sm font-bold bg-[#111111] text-[#F7F7F3] inline-block px-2 py-1 mb-4">
            REVIEW QUEUE (CONFLICTS)
          </h2>
          <div className="border border-[#111111]/20 p-4 bg-[#F7F7F3] flex items-center justify-center h-32">
            <span className="text-[10px] font-bold text-[#888888]">NO ACTIVE CONFLICTS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
