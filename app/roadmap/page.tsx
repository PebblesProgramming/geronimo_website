// app/roadmap/page.tsx
import { ClipboardDocumentListIcon } from '@heroicons/react/24/solid';

// Data voor de Tijdlijn
const roadmapStages = [
  {
    quarter: 'Q4 2024',
    title: 'Phase I: Initial Deployment (Complete)',
    status: 'Operational',
    details: [
      'Core gameplay loop finalization.',
      'Infrastructure server testing (Alpha).',
      'Art style and asset pipeline established.',
    ],
    className: 'bg-green-600',
  },
  {
    quarter: 'Q1 2025',
    title: 'Phase II: Beta Integration',
    status: 'In Progress',
    details: [
      'Private Beta access launch (selected operators).',
      'Community feedback integration (Priority 1).',
      'Advanced server scaling implementation.',
    ],
    className: 'bg-yellow-600',
  },
  {
    quarter: 'Q2 2025',
    title: 'Phase III: Content Expansion',
    status: 'Planned',
    details: [
      'New map sector deployment (Sector Gamma).',
      'Introduction of new weapon classes.',
      'Narrative lore update (Data package 3.0).',
    ],
    className: 'bg-blue-600',
  },
  {
    quarter: 'Q3 2025',
    title: 'Phase IV: Full Readiness',
    status: 'Planned',
    details: [
      'Open Beta commencement.',
      'Final performance optimization pass.',
      'Marketing campaign launch (Global).',
    ],
    className: 'bg-purple-600',
  },
];

export default function RoadmapPage() {
  const TERMINAL_GREEN = '#00ff00';

  return (
    <div className="min-h-screen px-8 pt-24 pb-20 font-sans text-gray-300 sm:px-20">
      <main className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12">
        {/* Page Header */}
        <div className="w-full text-center">
          <h1
            className={`text-5xl font-bold text-[${TERMINAL_GREEN}] flex items-center justify-center gap-4 tracking-widest uppercase`}
          >
            <ClipboardDocumentListIcon className="h-10 w-10" />
            [MISSION ROADMAP] — PROJECTIONS
          </h1>
          <p className="mt-2 text-sm text-gray-500 italic">
            &gt; Displaying all current and future operational milestones. Status: ACTIVE.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="w-full max-w-3xl pt-8">
          {/* Vertical Lijn Container */}
          <div className="border-[${TERMINAL_GREEN}]/50 relative border-l-4 border-dashed">
            {roadmapStages.map((stage, index) => (
              <div key={index} className="relative mb-10 ml-6">
                {/* De Bol: Absoluut gepositioneerd links van de lijn */}
                <div
                  className={`absolute -left-8 mt-1.5 h-4 w-4 rounded-full border-2 border-white/50 ${stage.className} shadow-[0_0_10px_rgba(0,255,0,0.7)]`}
                />

                {/* De Inhoud van de Stap */}
                <div
                  className={`border border-gray-700/50 bg-gray-900/70 p-6 hover:shadow-xl hover:shadow-[${TERMINAL_GREEN}]/10 transition-shadow duration-300`}
                >
                  <time
                    className={`mb-1 text-sm leading-none font-semibold text-[${TERMINAL_GREEN}] tracking-wider uppercase`}
                  >
                    {stage.quarter} - Status:{' '}
                    <span
                      className={`${stage.className} rounded-sm px-2 py-0.5 text-xs text-white`}
                    >
                      {stage.status}
                    </span>
                  </time>
                  <h3 className="mt-2 mb-4 text-2xl font-bold text-gray-100">{stage.title}</h3>

                  {/* Details in Lijstformaat */}
                  <ul className="list-inside list-disc space-y-1 pl-4 font-mono text-sm text-gray-400">
                    {stage.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>&gt; {detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
