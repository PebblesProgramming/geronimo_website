// app/updates/page.tsx
import Image from 'next/image';
import { CommandLineIcon, CalendarIcon } from '@heroicons/react/24/solid';

const updateLogs = [
  {
    id: 1,
    title: 'PATCH DEPLOYMENT 1.0.3',
    date: '2025-10-01',
    excerpt: 'Critical fix for server stability and corrected minor visual glitches in Sector 4.',
    imagePath: '/update-log-1.jpg', // Zorg dat deze in /public staat
  },
  {
    id: 2,
    title: 'NEW MAP SECTOR UNLOCKED',
    date: '2025-09-15',
    excerpt:
      'Access granted to Sector GAMMA. Extreme weather conditions reported. Proceed with caution.',
    imagePath: '/update-log-2.jpg', // Zorg dat deze in /public staat
  },
  {
    id: 3,
    title: 'WEAPONS RECALIBRATION',
    date: '2025-09-01',
    excerpt: 'Balancing update for all assault class weapons. See full details in the data log.',
    imagePath: '/update-log-3.jpg', // Zorg dat deze in /public staat
  },
  {
    id: 4,
    title: 'COMMUNITY FEEDBACK INTEGRATION',
    date: '2025-08-20',
    excerpt: 'Key suggestions from Operation Phoenix integrated into the core engine.',
    imagePath: '/update-log-4.jpg', // Zorg dat deze in /public staat
  },
];

export default function UpdatesPage() {
  const TERMINAL_GREEN = '#00ff00';

  // Functie voor een klikbare kaart (voor toekomstige popup)
  const handleCardClick = (id: number) => {
    console.log(`Open full update log for ID: ${id}`);
    // Hier kun je een staat (state) instellen om een modale venster te tonen
    // Voor nu is het alleen een console log.
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
        <section className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {updateLogs.map((log) => (
            <div
              key={log.id}
              onClick={() => handleCardClick(log.id)}
              className={`border bg-gray-900/70 border-[${TERMINAL_GREEN}]/30 cursor-pointer p-1 shadow-[0_0_8px_rgba(0,255,0,0.2)] hover:border-[${TERMINAL_GREEN}] flex flex-col transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.5)]`}
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
    </div>
  );
}
