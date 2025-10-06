import YoutubeEmbed from './components/YoutubeEmbed';
import Gallery from './components/Gallery';
import FAQList from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  // Terminal Green color for accents
  const TERMINAL_GREEN = '#00ff00';

  return (
    <div className="min-h-screen px-8 pt-24 pb-20 font-sans text-gray-300 sm:px-20">
      <main className="mx-auto flex w-full max-w-7xl flex-col items-center gap-20">
        {/* Section 1: Main Video Player (Now Full Width) */}
        <section className="mt-4 flex w-full flex-col items-center gap-6">
          <h1
            className={`text-4xl font-bold sm:text-5xl text-[${TERMINAL_GREEN}] text-center tracking-widest uppercase`}
          >
            {/* [GERONIMO] */}
          </h1>
          {/* The div now uses w-full and has no max-width, making it stretch */}
          <div
            className={`w-full border-2 border-[${TERMINAL_GREEN}] bg-gray-900/80 p-1 shadow-[0_0_15px_rgba(0,255,0,0.5)]`}
          >
            <YoutubeEmbed embedId="R6L96nSCx30" />\
          </div>
          <p className="text-sm text-gray-400 italic">
            &gt; Initialization complete. Primary transmission now playing.
          </p>
        </section>

        {/* --- */}

        {/* Section 2: Horizontal Gallery */}
        <section className="flex w-full flex-col gap-6">
          <h2
            className={`border-b text-3xl font-semibold border-[${TERMINAL_GREEN}] pb-2 text-[${TERMINAL_GREEN}] uppercase`}
          >
            [Dev updates]
          </h2>
          <Gallery />
        </section>

        {/* --- */}

        {/* Section 3: FAQ / Knowledge Base */}
        <section className="flex w-full flex-col gap-6">
          <h2
            className={`border-b text-3xl font-semibold border-[${TERMINAL_GREEN}] pb-2 text-[${TERMINAL_GREEN}] uppercase`}
          >
            [FAQ]
          </h2>
          <FAQList />
        </section>
      </main>

      <Footer />
    </div>
  );
}
