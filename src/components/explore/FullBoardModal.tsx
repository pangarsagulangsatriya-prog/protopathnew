import React, { useState, useRef, useEffect } from 'react';
import { FullBoardAsset } from '../../domain/types';
import { X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

interface FullBoardModalProps {
  asset: FullBoardAsset;
  onClose: () => void;
}

export const FullBoardModal: React.FC<FullBoardModalProps> = ({ asset, onClose }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setScale(prev => Math.min(Math.max(prev - e.deltaY * 0.01, 0.5), 5));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#111111]/90 flex flex-col backdrop-blur-sm">
      {/* Top Bar */}
      <div className="h-14 bg-[#111111] border-b border-[#505050] flex items-center justify-between px-6 text-[#F7F7F3]">
        <div className="font-mono text-xs font-bold tracking-wider">
          FULL BOARD VIEWER: <span className="text-[#A0A09A]">{asset.id}</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border-r border-[#505050] pr-4">
            <button onClick={() => setScale(s => Math.max(s - 0.2, 0.5))} className="p-1 hover:text-[#E6461A] transition-colors"><ZoomOut className="w-4 h-4" /></button>
            <span className="font-mono text-[10px] w-8 text-center">{Math.round(scale * 100)}%</span>
            <button onClick={() => setScale(s => Math.min(s + 0.2, 5))} className="p-1 hover:text-[#E6461A] transition-colors"><ZoomIn className="w-4 h-4" /></button>
            <button onClick={() => { setScale(1); setPosition({x:0, y:0}); }} className="p-1 ml-2 hover:text-[#E6461A] transition-colors"><Maximize2 className="w-4 h-4" /></button>
          </div>
          <button onClick={onClose} className="p-1 hover:text-[#E6461A] transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Viewer Area */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-hidden relative cursor-grab active:cursor-grabbing"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div 
          className="absolute origin-center transition-transform duration-75 ease-out"
          style={{ 
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            top: '50%',
            left: '50%',
            marginTop: -asset.height / 2,
            marginLeft: -asset.width / 2,
            width: asset.width,
            height: asset.height
          }}
        >
          <img 
            src={asset.src} 
            alt={asset.alt}
            className="w-full h-full object-contain pointer-events-none"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};
