import { useState } from "react";

type Plan = {
  name: string;
  icon: string;
  monthly: number;
  popular?: boolean;
  features: { label: string; on: boolean; accent?: boolean }[];
};

const plans: Plan[] = [
  {
    name: "STARTER",
    icon: "🥚",
    monthly: 29,
    features: [
      { label: "250 credits per month", on: true },
      { label: "0 bonus credits", on: false },
      { label: "Email enrichment", on: true },
      { label: "App screenshots", on: true },
      { label: "AI readiness analysis", on: true },
      { label: "Radar automation", on: true },
      { label: "CSV export", on: false },
      { label: "Prospect Manager", on: false },
    ],
  },
  {
    name: "PRO",
    icon: "🐤",
    monthly: 59,
    popular: true,
    features: [
      { label: "500 credits per month", on: true },
      { label: "100 bonus credits per month", on: true, accent: true },
      { label: "Email enrichment", on: true },
      { label: "App screenshots", on: true },
      { label: "AI readiness analysis", on: true },
      { label: "Radar automation", on: true },
      { label: "CSV export", on: true },
      { label: "Prospect Manager", on: true },
    ],
  },
  {
    name: "ADVANCED",
    icon: "🦢",
    monthly: 119,
    features: [
      { label: "1,000 credits per month", on: true },
      { label: "300 bonus credits per month", on: true, accent: true },
      { label: "Email enrichment", on: true },
      { label: "App screenshots", on: true },
      { label: "AI readiness analysis", on: true },
      { label: "Radar automation", on: true },
      { label: "CSV export", on: true },
      { label: "Prospect Manager", on: true },
    ],
  },
];

function Check({ on }: { on: boolean }) {
  return on ? (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className="text-yellow shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="2" width="14" height="14" rx="3" />
      <path
        d="M5.5 9l2.5 2.5 4.5-5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className="text-ink-muted/50 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="2" width="14" height="14" rx="3" />
      <path d="M6 6l6 6M12 6l-6 6" strokeLinecap="round" />
    </svg>
  );
}

function Pricing() {
  const [annual, setAnnual] = useState(false);
  const price = (m: number) => (annual ? Math.round(m * 0.6) : m);

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h2 className="text-[clamp(2rem,5vw,3rem)]">
        <span className="bg-yellow text-on-light inline-block rounded px-3 pb-1">
          Select a plan
        </span>{" "}
        to start landing AI clients
      </h2>
      <p className="text-ink-muted mx-auto mt-5 max-w-md text-lg font-light">
        One credit = one company with contact info, tech profile, and
        AI-readiness score.
      </p>

      {/* toggle */}
      <div className="mt-8 inline-flex items-center gap-3 text-sm">
        <button
          onClick={() => setAnnual(false)}
          className={`rounded-md px-4 py-2 font-semibold transition ${!annual ? "bg-card-alt text-ink-strong" : "text-ink-muted"}`}
        >
          Monthly
        </button>
        <button
          onClick={() => setAnnual(true)}
          className={`px-1 font-semibold transition ${annual ? "text-ink-strong" : "text-ink-muted"}`}
        >
          Annual{" "}
          <span className="text-green-soft block text-xs font-medium">
            save 40%
          </span>
        </button>
      </div>

      {/* cards */}
      <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`bg-card relative rounded-2xl p-7 text-left ${p.popular ? "ring-yellow ring-2" : "ring-1 ring-white/5"}`}
          >
            {p.popular && (
              <span className="bg-yellow text-on-light absolute -top-3 left-1/2 -translate-x-1/2 rounded-md px-3 py-1 text-xs font-extrabold">
                🔥 POPULAR
              </span>
            )}
            <div className="text-3xl">{p.icon}</div>
            <p className="text-ink-muted mt-3 text-sm font-bold tracking-[0.15em]">
              {p.name}
            </p>
            <p className="mt-2">
              <span className="text-ink-strong text-4xl font-extrabold">
                ${price(p.monthly)}
              </span>
              <span className="text-ink-muted">/mo</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {p.features.map((f) => (
                <li key={f.label} className="flex items-center gap-2.5">
                  <Check on={f.on} />
                  <span
                    className={
                      f.accent
                        ? "text-yellow font-semibold"
                        : f.on
                          ? "text-ink"
                          : "text-ink-muted"
                    }
                  >
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>
            <button className="bg-yellow text-on-light mt-7 w-full rounded-[2px] py-3 font-bold transition-transform duration-150 ease-out hover:brightness-95 active:scale-[0.97]">
              Select Plan
            </button>
          </div>
        ))}
      </div>

      <p className="text-ink-muted mt-10 text-sm">
        *Additional credits can be purchased at any time.
      </p>
    </section>
  );
}

export default Pricing;
