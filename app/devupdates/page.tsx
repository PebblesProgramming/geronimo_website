'use client';
import Image, { StaticImageData } from 'next/image';
import { CommandLineIcon, CalendarIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

// --- Lokale Afbeelding Imports (Pas Paden Aan Indien Nodig) ---
import customization from '../../public/geronimo/customization1.png';
import steampage1 from '../../public/geronimo/steampage1.png';
import steampage2 from '../../public/geronimo/steampage2.png';
import steampage3 from '../../public/geronimo/steampage3.jpg';
import random1 from '../../public/geronimo/Screenshot 2024-11-10 190305.png';
import random2 from '../../public/geronimo/Screenshot 2025-10-01 145215.png';

// --- Component Imports (Controleer de Paden) ---
import TerminalModal from '../components/Popup'; // Jouw naam voor de modal
import UpdateArticle from '../components/Article'; // Jouw naam voor het artikel component
import { UpdateLog } from '../types/update';

// --- Data (Alle Fouten Opgelost) ---
const updateLogs: UpdateLog[] = [
  {
    id: 1,
    title: 'PATCH DEPLOYMENT 1.0.3',
    date: '2025-10-01',
    excerpt: 'Critical fix for server stability and corrected minor visual glitches in Sector 4.',
    fullDetails:
      "Deployed a critical hotfix to address the 'ghosting' bug reported by Alpha Testers in the last 48 hours. Server stability is now at 99.8%. We've also optimized asset loading times by 12% across all platforms. A small celebration for the Dev Team is scheduled.",
    imagePath: customization,
    creationDate: new Date('2025-10-01T10:00:00Z'),
    updatedDate: new Date('2025-10-01T10:30:00Z'),
    author: 'PatchBot 1.0',
  },
  {
    id: 2,
    title: 'NEW MAP SECTOR UNLOCKED',
    date: '2025-09-15',
    excerpt:
      'Access granted to Sector GAMMA. Extreme weather conditions reported. Proceed with caution.',
    fullDetails:
      'New map Sector GAMMA is now available! This sector features new environmental hazards including sandstorms and radiation zones. Remember to update your hazmat suit configuration before deployment. New loot caches are scattered throughout the new zone.',
    imagePath: steampage1,
    creationDate: new Date('2025-09-15T15:00:00Z'),
    updatedDate: new Date('2025-09-15T15:00:00Z'),
  },
  {
    id: 3,
    title: 'WEAPONS RECALIBRATION',
    date: '2025-09-01',
    excerpt: 'Balancing update for all assault class weapons. See full details in the data log.',
    fullDetails:
      "Comprehensive analysis of weapon usage across all test groups showed an imbalance in the Assault Class. We've adjusted recoil and damage fall-off for the 'Vindicator' and slightly increased the stability of the 'Commando' rifle.",
    imagePath: steampage2,
    creationDate: new Date('2025-09-01T08:00:00Z'),
    updatedDate: new Date('2025-09-01T08:00:00Z'),
  },
  {
    id: 4,
    title: 'COMMUNITY FEEDBACK INTEGRATION',
    date: '2025-08-20',
    excerpt: 'Key suggestions from Operation Phoenix integrated into the core engine.',
    fullDetails:
      "We've listened to your feedback from Operation Phoenix! Key changes include improved squad UI communication, a dedicated 'Mark Target' button, and several quality-of-life changes to the inventory management system. Thank you for your continued support!",
    imagePath: steampage3,
    creationDate: new Date('2025-08-20T11:00:00Z'),
    updatedDate: new Date('2025-08-20T11:00:00Z'),
  },
  {
    id: 5,
    title: 'ENGINE OPTIMIZATION PASS',
    date: '2025-08-01',
    excerpt: 'Minor engine adjustments leading to reduced memory usage and frame stuttering.',
    fullDetails:
      'This is a backend update focusing purely on performance. Players should notice slightly improved frame rates, especially during high-action sequences, and a reduction in VRAM usage.',
    imagePath: random1,
    creationDate: new Date('2025-08-01T14:00:00Z'),
    updatedDate: new Date('2025-08-01T14:00:00Z'),
  },
  {
    id: 6,
    title: 'NEW CHARACTER PREVIEW',
    date: '2025-07-15',
    excerpt: 'Sneak peek at "The Ghost", a new stealth operative coming next quarter.',
    fullDetails:
      'Introducing "The Ghost" – a highly trained stealth specialist focused on infiltration and espionage. Details on her unique abilities and backstory will follow in the next transmission. Prepare for deep cover ops!',
    imagePath: random2,
    creationDate: new Date('2025-07-15T09:00:00Z'),
    updatedDate: new Date('2025-07-15T09:00:00Z'),
  },
];

export default function UpdatesPage() {
  const TERMINAL_GREEN = '#00ff00';

  const [selectedLog, setSelectedLog] = useState<UpdateLog | null>(null);

  const handleCardClick = (log: UpdateLog) => {
    setSelectedLog(log);
  };

  const handleClose = () => {
    setSelectedLog(null);
  };

  return (
    <div className="min-h-screen px-8 pt-24 pb-20 font-sans text-gray-300 sm:px-20">
      <main className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12">
        {/* Page Header */}
        <div className="w-full text-center">
          <h1
            className={`text-5xl font-bold text-[${TERMINAL_GREEN}] flex items-center justify-center gap-4 tracking-widest uppercase`}
          >
            <CommandLineIcon className="h-10 w-10" />
            [OPERATIONAL LOGS] — LATEST UPDATES
          </h1>
          <p className="mt-2 text-sm text-gray-500 italic">
            &gt; Displaying archive of all system changes and content deployments.
          </p>
        </div>

        {/* Updates Grid */}
        <section className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {updateLogs.map((log) => (
            <div
              key={log.id}
              onClick={() => handleCardClick(log)}
              className={`border bg-gray-900/70 border-[${TERMINAL_GREEN}]/30 cursor-pointer p-1 shadow-[0_0_15px_rgba(0,255,0,0.5)] hover:border-[${TERMINAL_GREEN}] flex flex-col transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.5)]`}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={log.imagePath}
                  alt={log.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>

              <div className="flex flex-grow flex-col gap-2 p-4">
                <h3 className={`text-xl font-bold text-[${TERMINAL_GREEN}] font-mono uppercase`}>
                  {log.title}
                </h3>
                <p className="flex items-center gap-1 text-sm text-gray-400">
                  <CalendarIcon className="h-4 w-4 text-gray-500" />
                  {log.date}
                </p>
                <p className="mt-2 text-sm text-gray-300 italic">{log.excerpt}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* TERMINAL MODAL met UpdateArticle */}
      <TerminalModal
        isOpen={!!selectedLog}
        onClose={handleClose}
        title={selectedLog ? selectedLog.title : 'Update Log'}
      >
        {selectedLog && <UpdateArticle log={selectedLog} TERMINAL_GREEN={TERMINAL_GREEN} />}
      </TerminalModal>
    </div>
  );
}
