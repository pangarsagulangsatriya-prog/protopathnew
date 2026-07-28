import React from 'react';
import { FullBoardAsset } from '../../domain/types';

interface LevelCViewerProps {
  asset: FullBoardAsset;
}

export const LevelCViewer: React.FC<LevelCViewerProps> = ({ asset }) => {
  return (
    <div className="w-full h-full bg-[#111111] flex items-center justify-center overflow-auto relative p-4">
      <img 
        src={asset.src} 
        alt={asset.alt}
        className="max-w-none max-h-none object-contain shadow-2xl transition-transform duration-300"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
  );
};
