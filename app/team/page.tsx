import Image from 'next/image';
import { UserGroupIcon } from '@heroicons/react/24/solid';
import team from '../../public/geronimo/team.jpg';

export default function TeamPage() {
  const TERMINAL_GREEN = '#00ff00';
  // TERMINAL_GREEN kan niet direct in classNames gebruikt worden, tenzij je een safelist configureert of kiest voor een hardgecodeerde kleur (bv. #00ff00)
  const TERMINAL_GREEN_HEX = '#00ff00';
  const TERMINAL_GREEN_TAILWIND = 'text-green-400'; // Gebruik een standaard kleur voor de headers als alternatief voor direct gebruik van custom hex

  return (
    <div className="min-h-screen px-8 pt-24 pb-20 font-sans text-gray-300 sm:px-20">
      <main className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12">
        {/* Page Header */}
        <div className="w-full text-center">
          <h1
            className={`text-5xl font-bold ${TERMINAL_GREEN_TAILWIND} flex items-center justify-center gap-4 tracking-widest uppercase`}
            style={{ color: TERMINAL_GREEN_HEX, textShadow: '0 0 10px rgba(0, 255, 0, 0.5)' }}
          >
            <UserGroupIcon className="h-10 w-10" />
            [THE OPERATORS]
          </h1>
          <p className="mt-2 text-sm text-gray-500 italic">
            &gt; Authentication Level: ALPHA. Accessing highly classified personnel files.
          </p>
        </div>

        {/* Content Section: Image and Text */}
        <section className="border-[${TERMINAL_GREEN}]/30 grid w-full items-center gap-12 border-t border-b py-10 md:grid-cols-2">
          {/* Text Block */}
          <div className="flex flex-col gap-4 font-mono">
            <h2 className={`text-3xl font-semibold text-[${TERMINAL_GREEN}]`}>
              THE DARK MATTER CELL
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              The operatives behind DarkMatterStudios are a dedicated, high-risk unit specializing
              in digital infiltration and world-building. Our mission is to engineer immersive
              experiences that push the boundaries of reality. Each member is selected for their
              technical expertise, tactical vision, and unwavering commitment to the operational
              mandate. We are silent, precise, and highly motivated.
            </p>
            <p className="text-sm leading-relaxed text-gray-400">
              We operate under a strict code of stealth and professionalism. Our objective is clear:
              deliver a product of unparalleled quality, utilizing cutting-edge technology and a
              narrative structure designed for deep engagement.
            </p>
            <p className={`text-sm italic text-[${TERMINAL_GREEN}] mt-4`}>
              &gt; EXECUTE PROTOCOL: IMMERSION.
            </p>
          </div>

          {/* Image */}
          <div
            className={`relative h-96 w-full border-2 border-[${TERMINAL_GREEN}] shadow-[0_0_15px_rgba(0,255,0,0.5)]`}
          >
            <Image
              src={team}
              alt="The DarkMatterStudios Team"
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-90 transition-opacity duration-300"
              priority
            />
          </div>
        </section>
      </main>
    </div>
  );
}
