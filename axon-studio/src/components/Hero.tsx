// Inline highlight helpers — mirror the inspiration's word-box / pill motif.
const RedBox = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-red text-ink-strong inline-block rounded px-2.5 whitespace-nowrap">
    {children}
  </span>
);
const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-ink-strong text-on-light inline-block rounded px-2.5 py-0.5 whitespace-nowrap">
    {children}
  </span>
);

const WarnChip = ({ children }: { children: React.ReactNode }) => (
  <span className="text-red-soft inline-flex items-center gap-1.5">
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <circle
        cx="9"
        cy="9"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 4.5v5M9 12.5v.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
    {children}
  </span>
);

function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-6 pb-16 text-center">
      {/* stars + quote */}
      <div className="rise text-yellow text-base tracking-[0.3em]">★★★★★</div>
      <p
        className="rise text-yellow mt-3 text-lg font-medium"
        style={{ animationDelay: "60ms" }}
      >
        "Booked 3 new clients in my first week."
      </p>

      {/* headline */}
      <h1
        className="rise mx-auto mt-6 max-w-2xl text-[clamp(2.25rem,5vw,3.25rem)]"
        style={{ animationDelay: "120ms" }}
      >
        This AI agent finds the businesses that are{" "}
        <RedBox>ready for AI</RedBox> to help you{" "}
        <span className="text-yellow whitespace-nowrap">win them first</span>
      </h1>

      {/* sub */}
      <p
        className="rise text-ink-strong mx-auto mt-6 max-w-lg text-[clamp(1rem,2.2vw,1.25rem)] leading-relaxed font-light"
        style={{ animationDelay: "180ms" }}
      >
        An AI agent that scans Google Maps and the web in{" "}
        <Pill>any market</Pill> and <Pill>any industry</Pill> to surface
        companies showing…
      </p>

      {/* signal chips */}
      <div
        className="rise mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-lg font-medium"
        style={{ animationDelay: "240ms" }}
      >
        <WarnChip>No automation</WarnChip>
        <WarnChip>Manual operations</WarnChip>
        <WarnChip>Legacy tools</WarnChip>
      </div>

      {/* CTA + demo aside */}
      <div
        className="rise relative mt-10 flex items-center justify-center"
        style={{ animationDelay: "300ms" }}
      >
        <button
          type="button"
          className="bg-yellow text-on-light rounded-[2px] px-8 py-3.5 text-lg font-bold transition-transform duration-150 ease-out hover:brightness-95 active:scale-[0.97]"
        >
          Start Finding Clients
        </button>
        <div className="text-ink-muted pointer-events-none absolute top-0 left-1/2 ml-[11.5rem] hidden lg:block">
          <span className="block -rotate-6 text-sm whitespace-nowrap italic">
            90 sec. demo
          </span>
          <svg
            width="60"
            height="66"
            viewBox="0 0 60 66"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-1 ml-3"
            aria-hidden
          >
            <path d="M50 4 C 55 28, 43 50, 18 59" />
            <path d="M18 59 l 13 -4 M18 59 l 3 -13" />
          </svg>
        </div>
      </div>

      {/* product dashboard mock (placeholder for real screenshot/demo) */}
      <div
        className="rise bg-yellow mx-auto mt-14 max-w-4xl rounded-2xl p-2 text-left shadow-2xl"
        style={{ animationDelay: "360ms" }}
      >
        <div className="overflow-hidden rounded-xl bg-white text-[#1a1a1a]">
          {/* top nav */}
          <div className="flex items-center gap-4 bg-[#1b1b22] px-4 py-3 text-white">
            <span className="flex items-center gap-1.5 text-sm font-extrabold">
              ◎ Axon
            </span>
            <nav className="hidden gap-4 text-xs text-white/60 sm:flex">
              <span className="font-semibold text-white underline underline-offset-4">
                Scout
              </span>
              <span>Prospect List</span>
              <span>Radar</span>
              <span>Past Searches</span>
            </nav>
            <span className="ml-auto h-6 w-6 rounded-full bg-white/20" />
          </div>
          {/* body */}
          <div className="p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Industry Niche", "dental clinics, law firms"],
                ["Region", "Austin, TX"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="mb-1 text-xs font-medium text-gray-500">
                    {label}
                  </p>
                  <div className="rounded-md border border-gray-200 px-3 py-2.5 text-sm text-gray-400">
                    e.g. {value}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-500">
              <span>
                Results: <b className="text-gray-800">15</b>
              </span>
              <span>
                Country: <b className="text-gray-800">United States</b>
              </span>
              <button className="bg-yellow text-on-light ml-auto inline-flex items-center gap-1.5 rounded px-4 py-2 text-sm font-bold">
                <span>🔍</span> Run Scout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
