import { TbTrendingUp } from "react-icons/tb";

export function HeroText() {
  return (
    <section className="px-4 pt-44 text-center">
      <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
        <span className="block tracking-[-0.02em]">The Faster Way to</span>
        <span className="-mt-3 block">
          Grow{" "}
          <span className="inline-flex items-center align-middle">
            <span className="inline-flex rounded-xl bg-linear-to-b from-neutral-600 to-neutral-800 p-1 shadow-[0_2px_8px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-white/10">
              <span className="inline-flex rounded-lg bg-linear-to-b from-emerald-400 to-emerald-600 p-2 shadow-[0_0_12px_rgba(52,211,153,0.35),inset_0_1px_0_rgba(255,255,255,0.2)]">
                <TbTrendingUp
                  className="h-5 w-5 text-white drop-shadow-sm sm:h-6 sm:w-6"
                  aria-hidden
                />
              </span>
            </span>
          </span>{" "}
          Your Revenue
        </span>
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/50 sm:text-xl">
        From lead to close — we optimize every step of your revenue engine.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        <button
          type="button"
          className="rounded-xl cursor-pointer bg-white px-8 py-3.5 text-base font-semibold text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
        >
          Start for free
        </button>
        <button
          type="button"
          className="rounded-xl cursor-pointer bg-linear-to-b from-neutral-500 to-neutral-800 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:from-neutral-400 hover:to-neutral-700 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
        >
          Get demo
        </button>
      </div>
    </section>
  );
}
