import { useState } from "react";
import eggIcon from "@/assets/plan-egg.svg";
import chickIcon from "@/assets/plan-chick.svg";
import duckIcon from "@/assets/plan-duck.svg";

type Plan = {
  name: string;
  icon: keyof typeof planIcons;
  monthly: number;
  popular?: boolean;
  features: { label: string; on: boolean; accent?: boolean }[];
};

const planIcons = {
  egg: eggIcon,
  chick: chickIcon,
  goose: duckIcon,
};

const plans: Plan[] = [
  {
    name: "STARTER",
    icon: "egg",
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
    icon: "chick",
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
    icon: "goose",
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
      <h2 className="mx-auto max-w-xl text-[clamp(2rem,5vw,3rem)]">
        <span className="bg-yellow text-on-light inline-block -rotate-2 rounded px-3 pb-1">
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
          className={`rounded-sm px-4 py-2 font-semibold transition ${!annual ? "bg-card text-ink-strong -rotate-2" : "text-ink-muted"}`}
        >
          Monthly
        </button>
        <button
          onClick={() => setAnnual(true)}
          className={`rounded-sm px-4 py-2 font-semibold transition ${annual ? "bg-card text-ink-strong -rotate-2" : "text-ink-muted"}`}
        >
          Annual
          <span className="text-green-soft block text-xs font-medium">
            save 40%
          </span>
        </button>
      </div>

      {/* cards */}
      <div className="mx-auto mt-12 grid max-w-4xl items-stretch gap-6 md:grid-cols-3 md:gap-0">
        {plans.map((p, i) => (
          <div
            key={p.name}
            className={`bg-card relative flex flex-col rounded-md px-7 pt-10 pb-7 text-left ${
              p.popular
                ? "ring-yellow z-10 ring-2 md:-mx-6 md:shadow-2xl"
                : "z-0 ring-1 ring-white/5 md:origin-bottom md:scale-[0.94]"
            } ${i === 0 ? "md:-rotate-2 md:pr-12" : ""} ${i === 2 ? "md:rotate-2 md:pl-12" : ""}`}
          >
            {p.popular && (
              <span className="bg-yellow text-on-light absolute -top-3 right-6 rotate-3 rounded-xs px-4 py-1.5 text-xs font-extrabold">
                🔥 POPULAR
              </span>
            )}
            <img src={planIcons[p.icon]} alt="" width={46} height={46} />
            <p className="text-ink-muted mt-3 text-sm font-bold tracking-[0.15em]">
              {p.name}
              {annual ? " (ANNUAL)" : ""}
            </p>
            <p className="mt-2 flex items-baseline gap-2">
              {annual && (
                <span className="text-ink-muted/50 text-2xl font-extrabold line-through">
                  ${p.monthly}
                </span>
              )}
              <span
                className={`text-4xl font-extrabold ${annual ? "text-green-soft" : "text-ink-strong"}`}
              >
                ${price(p.monthly)}
              </span>
              <span className="text-ink-muted">/mo</span>
            </p>
            {annual && (
              <p className="text-ink-strong mt-2 text-sm font-bold">
                Billed Annually at ${price(p.monthly) * 12}
              </p>
            )}
            <ul className="mt-6 flex-1 space-y-3 text-sm">
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
            <button className="bg-yellow mt-8 w-full cursor-pointer rounded-xs py-4 text-base font-bold transition-transform duration-150 ease-out hover:brightness-95 active:scale-[0.97]">
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
