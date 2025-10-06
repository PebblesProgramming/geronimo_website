// components/Gallery.tsx
'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import customization from '../../public/geronimo/customization1.png';
import steampage1 from '../../public/geronimo/steampage1.png';
import steampage2 from '../../public/geronimo/steampage2.png';
import steampage3 from '../../public/geronimo/steampage3.jpg';
import random1 from '../../public/geronimo/Screenshot 2024-11-10 190305.png';
import random2 from '../../public/geronimo/Screenshot 2025-10-01 145215.png';

const images = [
  {
    src: steampage2,
    alt: 'Mission Briefing',
    info: '[LOG #001] Briefing complete. Enemy territory mapped.',
  },
  {
    src: random2,
    alt: 'Night Operation',
    info: '[LOG #002] Night operation commenced. Low visibility. Proceed with caution.',
  },
  {
    src: steampage1,
    alt: 'Night Operation',
    info: '[LOG #002] Night operation commenced. Low visibility. Proceed with caution.',
  },
  {
    src: customization,
    alt: 'Night Operation',
    info: '[LOG #002] Night operation commenced. Low visibility. Proceed with caution.',
  },
  {
    src: random1,
    alt: 'Night Operation',
    info: '[LOG #002] Night operation commenced. Low visibility. Proceed with caution.',
  },
  {
    src: steampage3,
    alt: 'Squad Infiltration',
    info: '[LOG #003] Infiltration team is inside. Awaiting target confirmation.',
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
        {images.map((image, index) => (
          <div
            key={index}
            className={`min-w-[300px] border sm:min-w-[400px] border-[${TERMINAL_GREEN}]/50 hover:border-[${TERMINAL_GREEN}] shadow-[0_0_15px_rgba(0,255,0,0.5)] transition-all duration-300`}
          >
            <div className="relative h-64">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="opacity-80 transition-opacity duration-300 hover:opacity-100"
              />
              <div
                className={`absolute bottom-0 w-full bg-black/70 p-2 text-sm backdrop-blur-sm text-[${TERMINAL_GREEN}] font-mono`}
              >
                {image.info}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
