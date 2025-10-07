import { ClipboardDocumentListIcon } from '@heroicons/react/24/solid';
import React, { ReactNode } from 'react';

// De gekozen 'terminal green' kleur als variabele
const TERMINAL_GREEN_HEX = '#00ff00';

interface TerminalH1Props {
  children: ReactNode;
}

/**
 * Hoofdcomponent voor de H1 pagina titel met terminal neon glow.
 * @param {ReactNode} children - De tekst van de titel.
 * @param {React.ComponentType} icon - Het Heroicon component om te tonen (optioneel).
 */
export function TerminalH1({ children }: TerminalH1Props) {
  // Tailwind fallback class voor de kleur (nodig voor hover/active states)
  const TERMINAL_GREEN_TAILWIND = 'text-green-400';

  return (
    <h1
      className={`text-5xl font-bold ${TERMINAL_GREEN_TAILWIND} flex items-center justify-center gap-4 tracking-widest uppercase`}
      style={{
        color: TERMINAL_GREEN_HEX,
        textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
      }}
    >
      {children}
    </h1>
  );
}

// ----------------------------------------------------------------------

interface TerminalH2Props {
  children: ReactNode;
}

/**
 * Component voor de H2 sectie titel (zoals 'Unity Rework').
 * Dit bootst de H2-stijl van de afbeelding na (heldere, strakke, leesbare tekst).
 * @param {ReactNode} children - De tekst van de titel.
 */
export function TerminalH2({ children }: TerminalH2Props) {
  return <h3 className="mt-2 mb-4 text-2xl font-bold text-gray-100">{children}</h3>;
}
