import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Database, Layers, GitCommit, FileJson, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MenuItem {
  route: string;
  label: string;
  icon: React.FC<any>;
}

interface ResearchArchiveMenuProps {
  label: string;
  items: MenuItem[];
  onNavigate: (route: string) => void;
  currentRoute: string;
}

export const ResearchArchiveMenu: React.FC<ResearchArchiveMenuProps> = ({
  label,
  items,
  onNavigate,
  currentRoute,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = items.some(
    (item) => currentRoute === item.route || currentRoute.startsWith(`${item.route}/`)
  );

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`px-2.5 py-1.5 min-h-[36px] min-w-[36px] flex items-center gap-1.5 text-[12px] font-bold tracking-wider transition-colors cursor-pointer border ${
          isActive
            ? 'bg-[#E6461A] text-[#F7F7F3] border-[#E6461A]'
            : 'bg-[#1E1E1E] text-[#A0A0A0] border-[#333333] hover:text-[#F7F7F3] hover:bg-[#2A2A2A]'
        }`}
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-48 bg-[#111111] border border-[#333333] shadow-lg z-50">
          <ul className="py-1">
            {items.map((item) => {
              const Icon = item.icon;
              const isItemActive =
                currentRoute === item.route ||
                currentRoute.startsWith(`${item.route}/`);

              return (
                <li key={item.route}>
                  <Link
                    to={item.route}
                    onClick={() => setIsOpen(false)}
                    className={`w-full text-left px-3 py-2.5 min-h-[36px] text-[12px] font-bold tracking-wide flex items-center gap-2 hover:bg-[#2A2A2A] transition-colors cursor-pointer ${
                      isItemActive ? 'text-[#E6461A]' : 'text-[#A0A0A0] hover:text-[#F7F7F3]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
