import { HugeiconsIcon } from "@hugeicons/react";
import { AlertCircleIcon } from "@hugeicons/core-free-icons";
import arrow from "@/assets/arrow.svg";
import DemoPreview from "@/components/DemoPreview";

const RedBox = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-red text-ink-strong inline-block -rotate-3 rounded px-2.5 whitespace-nowrap">
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
    <HugeiconsIcon icon={AlertCircleIcon} size={18} />
    {children}
  </span>
);

function Hero() {
  return (
    <section className="px-6 pt-6 pb-16 text-center">
      <div className="mx-auto max-w-3xl">
        {/* stars + quote */}
        <div className="rise text-yellow tracking-[0.3em]">★★★★★</div>
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
            className="bg-yellow text-on-light transform-gpu cursor-pointer rounded-xs px-8 py-3.5 text-lg font-bold transition-transform duration-200 ease-out hover:scale-[1.03] hover:-rotate-2 active:scale-[0.97] active:rotate-0"
          >
            Start Finding Clients
          </button>
          <div className="text-ink-muted pointer-events-none absolute top-6 left-1/2 ml-96 hidden lg:block">
            <span className="block -rotate-6 text-sm whitespace-nowrap italic">
              90 sec. demo
            </span>
            <img src={arrow} alt="arrow" width={30} className="mt-1 ml-4" />
          </div>
        </div>
      </div>

      <DemoPreview />
    </section>
  );
}

export default Hero;
