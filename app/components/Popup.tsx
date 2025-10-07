'use client';

import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

// Definieer de props voor de Modal
interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  const TERMINAL_GREEN = '#00ff00';

  return (
    // 1. Overlay (Donkere Achtergrond)
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* 2. De Modal Container */}
      <div
        className={`relative w-11/12 max-w-2xl border-4 border-double bg-gray-900/95 p-6 shadow-2xl border-[${TERMINAL_GREEN}] shadow-[0_0_25px_rgba(0,255,0,0.8)] transition-all duration-300`}
        // Zorg dat klikken op de modal zelf de overlay NIET sluit
        onClick={(e) => e.stopPropagation()}
      >
        {/* 3. Header en Sluitknop */}
        <div className="border-[${TERMINAL_GREEN}]/50 mb-4 flex items-center justify-between border-b pb-3">
          <h2 className={`font-mono text-2xl uppercase text-[${TERMINAL_GREEN}]`}>:: {title}</h2>
          <button
            onClick={onClose}
            className={`border border-transparent p-1 text-gray-400 transition-colors hover:border-red-500/50 hover:text-red-500`}
            aria-label="Close modal"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* 4. Content Area */}
        <div className="scrollbar-hide max-h-[70vh] overflow-y-auto text-sm leading-relaxed text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TerminalModal;
