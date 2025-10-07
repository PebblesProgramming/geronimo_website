// components/Gallery.tsx
'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import customization from '../../public/geronimo/customization1.png';
import steampage1 from '../../public/geronimo/steampage1.png';
import steampage2 from '../../public/geronimo/steampage2.png';
import steampage3 from '../../public/geronimo/steampage3.jpg';
import random1 from '../../public/geronimo/Screenshot 2024-11-10 190305.png';
import random2 from '../../public/geronimo/Screenshot 2025-10-01 145215.png';
import TerminalModal from './Popup';
import UpdateArticle from './Article';
import { UpdateLog } from '../types/update';

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

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const TERMINAL_GREEN = '#00ff00';

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const [selectedLog, setSelectedLog] = useState<UpdateLog | null>(null);

  const handleCardClick = (log: UpdateLog) => {
    setSelectedLog(log);
  };

  const handleClose = () => {
    setSelectedLog(null);
  };

  return (
    <div className="relative">
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll('left')}
        className={`absolute top-1/2 left-0 z-10 -translate-y-1/2 bg-gray-900/70 p-3 text-[${TERMINAL_GREEN}] rounded-full border shadow-lg transition-all hover:bg-gray-700 border-[${TERMINAL_GREEN}]`}
      >
        <ArrowLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={() => scroll('right')}
        className={`absolute top-1/2 right-0 z-10 -translate-y-1/2 bg-gray-900/70 p-3 text-[${TERMINAL_GREEN}] rounded-full border shadow-lg transition-all hover:bg-gray-700 border-[${TERMINAL_GREEN}]`}
      >
        <ArrowRightIcon className="h-6 w-6" />
      </button>

      {/* Horizontal Scroll Container */}
      <div ref={scrollRef} className="scrollbar-hide flex gap-6 overflow-x-scroll p-4">
        {updateLogs.map((update, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(update)}
            className={`min-w-[300px] border sm:min-w-[400px] border-[${TERMINAL_GREEN}]/50 hover:border-[${TERMINAL_GREEN}] shadow-[0_0_15px_rgba(0,255,0,0.5)] transition-all duration-300`}
          >
            <div className="relative h-64">
              <Image
                src={update.imagePath}
                alt={'Alternative'}
                fill
                style={{ objectFit: 'cover' }}
                className="opacity-80 transition-opacity duration-300 hover:opacity-100"
              />
              <div
                className={`absolute bottom-0 w-full bg-black/70 p-2 text-sm backdrop-blur-sm text-[${TERMINAL_GREEN}] font-mono`}
              >
                {update.title}
                ///{update.date}
              </div>
            </div>
          </div>
        ))}
      </div>
      <TerminalModal
        isOpen={!!selectedLog}
        onClose={handleClose}
        title={selectedLog ? selectedLog.title : 'Update Log'}
      >
        {selectedLog && <UpdateArticle log={selectedLog} TERMINAL_GREEN={TERMINAL_GREEN} />}
      </TerminalModal>
    </div>
  );
};

export default Gallery;
