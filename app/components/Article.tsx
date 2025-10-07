import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { CalendarIcon, UserIcon, ClockIcon } from '@heroicons/react/24/solid'; // ClockIcon toegevoegd

// --- Type Definitie voor Props ---
interface UpdateArticleProps {
  log: {
    title: string;
    date: string; // De korte weergavedatum (gebruikt in de Metadata)
    imagePath: StaticImageData;
    fullDetails: string; // De lange artikeltekst (was 'content')
    creationDate: Date;
    updatedDate: Date;
    author?: string;
  };
  TERMINAL_GREEN: string;
}

const UpdateArticle: React.FC<UpdateArticleProps> = ({ log, TERMINAL_GREEN }) => {
  const {
    title,
    date,
    imagePath,
    fullDetails,
    creationDate,
    updatedDate,
    author = 'COMMAND CENTRAL',
  } = log;

  // Functie om de Date objecten mooi te formatteren
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('nl-NL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="flex flex-col">
      {/* 1. Volledige Breedte Afbeelding (Bovenrand) */}
      {/* De negatieve marges zorgen ervoor dat de afbeelding de padding van de modal negeert */}
      <div className="relative -mx-6 -mt-4 mb-4 h-64 w-full overflow-hidden">
        <Image
          src={imagePath}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* 2. Metadata (Datum, Auteur, Update Tijd) */}
      <div
        className={`mb-4 flex flex-col gap-1 border-b border-gray-700/50 pb-2 font-mono text-xs`}
      >
        <span className="flex items-center gap-1 text-gray-400">
          <UserIcon className="h-4 w-4 text-gray-500" />
          AUTHOR: <span className={`text-[${TERMINAL_GREEN}]/70`}>{author}</span>
        </span>

        <span className="flex items-center gap-1 text-gray-400">
          <CalendarIcon className="h-4 w-4 text-gray-500" />
          INITIAL DEPLOYMENT:{' '}
          <span className={`text-[${TERMINAL_GREEN}]`}>{formatDate(creationDate)}</span>
        </span>

        {/* Toont alleen de updatedatum als deze later is dan de creatiedatum */}
        {updatedDate > creationDate && (
          <span className="flex items-center gap-1 text-gray-400">
            <ClockIcon className="h-4 w-4 text-gray-500" />
            LAST UPDATE: <span className={`text-yellow-400`}>{formatDate(updatedDate)}</span>
          </span>
        )}
      </div>

      {/* 3. Hoofdtekst (Content) */}
      <article className="space-y-6 text-gray-300">
        {/* whitespace-pre-wrap behoudt nieuwe regels als je in de data \n of enter gebruikt */}
        <p className="text-base leading-relaxed whitespace-pre-wrap">{fullDetails}</p>

        <p className="border-t border-dashed border-gray-800 pt-4 font-mono text-xs text-gray-600 italic">
          &gt; Log Checksum Verified. [END OF TRANSMISSION]
        </p>
      </article>
    </div>
  );
};

export default UpdateArticle;
