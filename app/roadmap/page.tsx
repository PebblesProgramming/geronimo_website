// app/roadmap/page.tsx
import { ClipboardDocumentListIcon } from '@heroicons/react/24/solid';

// Data voor de Tijdlijn
const roadmapStages = [
  {
    quarter: 'Q3 2025',
    title: 'Unity Rework',
    status: 'Operational',
    details: [
      'Core gameplay loop finalization.',
      'Infrastructure server testing (Alpha).',
      'Art style and asset pipeline established.',
    ],
    // Nieuwe classes voor kleur-coördinatie
    colorClass: 'text-green-500 border-green-500 shadow-green-500',
    dotClass: 'bg-green-500 shadow-green-500',
  },
  {
    quarter: 'Q4 2025',
    title: 'The grunt work',
    status: 'In Progress',
    details: [
      'Core gameplay loop finalization.',
      'Infrastructure server testing (Alpha).',
      'Art style and asset pipeline established.',
    ],
    colorClass: 'text-yellow-500 border-yellow-500 shadow-yellow-500',
    dotClass: 'bg-yellow-500 shadow-yellow-500',
  },
  {
    quarter: 'March 25th 2026',
    title: 'RELEASE',
    status: 'Planned',
    details: [
      'Private Beta access launch (selected operators).',
      'Community feedback integration (Priority 1).',
      'Advanced server scaling implementation.',
    ],
    colorClass: 'text-blue-500 border-blue-500 shadow-blue-500',
    dotClass: 'bg-blue-500 shadow-blue-500',
  },
  {
    quarter: 'Q2 2026',
    title: 'Modding and Civilians',
    status: 'Planned',
    details: [
      'New map sector deployment (Sector Gamma).',
      'Introduction of new weapon classes.',
      'Narrative lore update (Data package 3.0).',
    ],
    colorClass: 'text-blue-500 border-blue-500 shadow-blue-500',
    dotClass: 'bg-blue-500 shadow-blue-500',
  },
];

export default function RoadmapPage() {
  // TERMINAL_GREEN kan niet direct in classNames gebruikt worden, tenzij je een safelist configureert of kiest voor een hardgecodeerde kleur (bv. #00ff00)
  const TERMINAL_GREEN_HEX = '#00ff00';
  const TERMINAL_GREEN_TAILWIND = 'text-green-400'; // Gebruik een standaard kleur voor de headers als alternatief voor direct gebruik van custom hex

  return (
    // Zorg voor een donkere achtergrond (bg-black of bg-gray-950) om de neon-look te verbeteren
    <div className="min-h-screen bg-black px-8 pt-24 pb-20 font-sans text-gray-300 sm:px-20">
      <main className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12">
        {/* Page Header */}
        <div className="w-full text-center">
          <h1
            className={`text-5xl font-bold ${TERMINAL_GREEN_TAILWIND} flex items-center justify-center gap-4 tracking-widest uppercase`}
            style={{ color: TERMINAL_GREEN_HEX, textShadow: '0 0 10px rgba(0, 255, 0, 0.5)' }}
          >
            <ClipboardDocumentListIcon className="h-10 w-10" />
            [MISSION ROADMAP]
          </h1>
          <p className="mt-2 text-sm text-gray-500 italic">
            &gt; Displaying all current and future operational milestones. Status: ACTIVE.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="w-full max-w-3xl pt-8">
          {/* Vertical Lijn Container: Verander de border-kleur en -stijl */}
          {/* border-l-4: De breedte van de lijn. Verwijder de "border-dashed" voor een rechte lijn zoals in de afbeelding */}
          <div className="relative border-l-4 border-gray-700/50">
            {roadmapStages.map((stage, index) => (
              // Verander 'ml-6' naar 'pl-10' om de inhoud te verschuiven in plaats van de hele div
              <div key={index} className="relative mb-10 pl-10">
                {/* De Bol: Absoluut gepositioneerd links van de lijn */}
                <div
                  className={`absolute top-1/2 -left-2 z-10 h-4 w-4 -translate-y-1/2 rounded-full border-2 ${stage.dotClass} border-black shadow-[0_0_8px_var(--tw-shadow-color)]`}
                  // De -left-2 (4px / 2 = 2px, dus 0.5rem - 0.5rem/2 = 0.5rem - 2px, -left-2 is -0.5rem) centreert de 4px lijn over het 16px (w-4) bolletje.
                  // top-1/2 -translate-y-1/2 voor verticale centrering van de bol tov de hele div (wat de kaart is)
                />

                {/* De Inhoud van de Stap: Gebruik de kleur voor de border en de glow */}
                <div
                  className={`rounded-sm border-2 bg-gray-900/90 p-6 transition-all duration-300 ${stage.colorClass} hover:shadow-[0_0_15px_var(--tw-shadow-color)]`}
                >
                  {/* Tijd/Quarter: Gebruik TERMINAL_GREEN voor de tijd */}
                  <time
                    className={`mb-1 text-sm leading-none font-semibold uppercase`}
                    style={{ color: TERMINAL_GREEN_HEX }}
                  >
                    {stage.quarter} - Status:{' '}
                    {/* Status Badge: Gekleurde tekst op een donkere achtergrond (zoals in de afbeelding) */}
                    <span
                      className={`rounded-sm bg-white px-2 py-0.5 text-xs font-bold text-black uppercase`}
                      style={{ color: stage.colorClass.split(' ')[0] }} // Haal de kleur uit colorClass, bv. 'text-green-500'
                    >
                      {stage.status}
                    </span>
                  </time>
                  <h3 className="mt-2 mb-4 text-2xl font-bold text-gray-100">{stage.title}</h3>

                  {/* Details in Lijstformaat */}
                  <ul className="space-y-1 pl-0 font-mono text-sm text-gray-400">
                    {stage.details.map((detail, detailIndex) => (
                      // Gebruik flex en een span voor de bullet om ze strak uit te lijnen
                      <li key={detailIndex} className="flex items-start">
                        <span className="mr-2 text-white/80">&gt;</span> <span>{detail}</span>
                      </li>
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
