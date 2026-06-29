import type { ReactNode } from "react";

/* ---------- shared bits ---------- */

function Gauge({
  label = "Great!",
  fill = 80,
}: {
  label?: string;
  fill?: number;
}) {
  const len = Math.PI * 30; // semicircle arc length ≈ 94
  return (
    <svg width="74" height="42" viewBox="0 0 74 42" aria-hidden>
      <path
        d="M7 38 A30 30 0 0 1 67 38"
        fill="none"
        stroke="#e6e6e6"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M7 38 A30 30 0 0 1 67 38"
        fill="none"
        stroke="#3fae6b"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={`${(fill / 100) * len} ${len}`}
      />
      <text
        x="37"
        y="36"
        textAnchor="middle"
        fontSize="13"
        fontWeight="800"
        fill="#1a1a1a"
        style={{ fontFamily: "inherit" }}
      >
        {label}
      </text>
    </svg>
  );
}

const eyebrowIcons: Record<string, ReactNode> = {
  research: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="10" cy="10" r="7" />
      <circle cx="10" cy="10" r="2.5" fill="currentColor" stroke="none" />
      <path d="M10 1v3M10 16v3M1 10h3M16 10h3" strokeLinecap="round" />
    </svg>
  ),
  analysis: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
    </svg>
  ),
  pitch: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    >
      <path d="M14 2l4 4-10 10-5 1 1-5z" />
    </svg>
  ),
  radar: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="10" cy="10" r="8" />
      <circle cx="10" cy="10" r="4" />
      <circle cx="10" cy="10" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
};

function DownArrow() {
  return (
    <svg
      width="40"
      height="70"
      viewBox="0 0 40 70"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-ink-muted mx-auto my-2"
      aria-hidden
    >
      <path d="M20 4 C 12 24, 28 40, 20 60" />
      <path d="M20 60 l-7 -10 M20 60 l7 -10" />
    </svg>
  );
}

function Row({
  eyebrow,
  icon,
  heading,
  body,
  mock,
  reverse = false,
}: {
  eyebrow: string;
  icon: keyof typeof eyebrowIcons;
  heading: ReactNode;
  body: ReactNode;
  mock: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className="grid items-center gap-8 rounded-3xl bg-white/[0.025] p-6 md:grid-cols-2 md:p-10">
      <div className={reverse ? "md:order-2" : ""}>
        <p className="text-yellow mb-4 flex items-center gap-2 text-sm font-bold tracking-[0.18em] uppercase">
          <span className="text-yellow">{eyebrowIcons[icon]}</span>
          {eyebrow}
        </p>
        <h3 className="text-ink-strong text-[clamp(1.6rem,3.5vw,2.3rem)] leading-[1.15] font-extrabold tracking-[-0.02em]">
          {heading}
        </h3>
        <p className="text-ink mt-4 max-w-md text-lg leading-relaxed font-light">
          {body}
        </p>
      </div>
      <div className={reverse ? "md:order-1" : ""}>{mock}</div>
    </div>
  );
}

const HL = ({ children }: { children: ReactNode }) => (
  <span className="text-ink-strong font-semibold underline decoration-2 underline-offset-2">
    {children}
  </span>
);

/* ---------- mock UIs ---------- */

function ResultsGridMock() {
  const items = [
    ["Bright Smile Co", "Great!", 85],
    ["Cedar Park Dental", "Good!", 62],
    ["Hill Country Ortho", "Great!", 88],
    ["Lone Star Dental", "Good!", 58],
  ] as const;
  return (
    <div className="rounded-xl bg-white p-4 text-left text-[#1a1a1a] shadow-2xl">
      <p className="mb-3 text-sm font-bold">
        35 Prospects Found For:{" "}
        <span className="font-normal text-gray-500">
          Dental Clinics in Austin, TX
        </span>
      </p>
      <div className="grid grid-cols-2 gap-3">
        {items.map(([name, score, fill]) => (
          <div key={name} className="rounded-lg border border-gray-200 p-2">
            <p className="mb-2 truncate text-xs font-semibold">{name}</p>
            <div className="flex items-center gap-2">
              <div className="h-12 w-16 rounded bg-gradient-to-br from-slate-600 to-slate-900" />
              <Gauge label={score} fill={fill} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProspectDetailMock() {
  return (
    <div className="rounded-xl bg-white p-5 text-left text-[#1a1a1a] shadow-2xl">
      <div className="flex items-center justify-between border-b border-gray-100 pb-2">
        <p className="font-bold">Lumen Dental Studio</p>
        <span className="rounded border border-gray-200 px-2 py-0.5 text-xs text-gray-500">
          Not Contacted ▾
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3 text-[11px]">
        <div className="h-20 rounded bg-gradient-to-br from-sky-700 to-slate-900" />
        <div className="flex flex-col items-center">
          <span className="mb-1 font-semibold">AI Readiness</span>
          <Gauge fill={85} />
        </div>
        <div className="space-y-1 text-gray-600">
          <p>📞 512-555-0148</p>
          <p>✉ hello@lumendental.com</p>
          <p>🌐 lumendental.com</p>
          <p>★ 3.5 (3 reviews)</p>
        </div>
      </div>
      <div className="mt-3 rounded-lg bg-gray-50 p-3 text-[11px]">
        <p className="mb-1 font-bold">Opportunities:</p>
        <ul className="space-y-1 text-gray-600">
          <li>✷ Still booking by phone — no online scheduling</li>
          <li>✷ No CRM detected — leads tracked in spreadsheets</li>
          <li>✷ Manual invoicing, no automation</li>
          <li>✷ Support handled by one inbox, no chatbot</li>
        </ul>
      </div>
    </div>
  );
}

function GeneratorMock() {
  const field = (label: string, value: string) => (
    <div>
      <p className="mb-1 text-[11px] text-gray-500">{label}</p>
      <div className="flex items-center justify-between rounded border border-gray-200 px-3 py-2 text-sm">
        <span className="truncate">{value}</span>
        <span className="ml-2 shrink-0 text-[11px] text-gray-400">⧉ Copy</span>
      </div>
    </div>
  );
  return (
    <div className="space-y-3 rounded-xl bg-white p-5 text-left text-[#1a1a1a] shadow-2xl">
      {field("Prospect Email", "jordan@lumendental.com")}
      {field("Subject Line", "Quick idea for your booking flow?")}
      <p className="rounded border border-gray-200 px-3 py-2 text-sm leading-relaxed text-gray-600">
        Hi Jordan — noticed Lumen Dental still takes bookings by phone. A small
        AI scheduler could cut no-shows and free up your front desk…
      </p>
      <button className="bg-yellow text-on-light ml-auto flex items-center gap-1.5 rounded px-3 py-1.5 text-sm font-bold">
        ✦ Generate Different
      </button>
    </div>
  );
}

function RadarEmailMock() {
  return (
    <div className="rounded-xl bg-white p-4 text-left text-[#1a1a1a] shadow-2xl">
      <p className="text-sm font-semibold">
        32 New Prospects Found — Dental Clinics in Austin, TX
      </p>
      <p className="mb-3 text-[11px] text-gray-500">Axon Studio · to me</p>
      <div className="rounded-lg bg-[#0e0e12] p-4 text-center text-white">
        <p className="text-[11px] opacity-70">◎ Axon</p>
        <p className="mt-1 font-bold">Your Radar Found</p>
        <p className="text-yellow font-extrabold">
          32 Great Prospects This Week
        </p>
      </div>
      <div className="mt-3 rounded-lg border border-gray-200 p-3">
        <p className="text-sm font-bold">Bright Smile Co</p>
        <p className="text-[11px] text-gray-500">brightsmile.co · Austin, TX</p>
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          {["No CRM", "Manual booking", "Legacy stack"].map((t) => (
            <span
              key={t}
              className="rounded bg-red-50 px-2 py-0.5 text-[10px] font-medium text-red-600"
            >
              🔥 {t}
            </span>
          ))}
          <span className="ml-auto">
            <Gauge fill={88} />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------- section ---------- */

function Features() {
  return (
    <section className="mx-auto max-w-6xl space-y-2 px-4 py-16 sm:px-6">
      <Row
        eyebrow="Targeted Research"
        icon="research"
        heading={
          <>
            Find more than just contact details.{" "}
            <span className="decoration-yellow underline decoration-4 underline-offset-4">
              Find opportunities.
            </span>
          </>
        }
        body="Search by industry, region, tech stack, headcount, reviews, AI-readiness score and more."
        mock={<ResultsGridMock />}
      />
      <DownArrow />
      <Row
        reverse
        eyebrow="AI Opportunity Analysis"
        icon="analysis"
        heading="Get a detailed analysis of every prospect"
        body={
          <>
            Find <HL>manual workflows</HL> and <HL>missed automations</HL> to
            make sharp, relevant pitches. This{" "}
            <span className="bg-ink-strong text-on-light rounded px-1.5">
              boosts open and reply rates
            </span>
            .
          </>
        }
        mock={<ProspectDetailMock />}
      />
      <DownArrow />
      <Row
        eyebrow="Pitch Generator"
        icon="pitch"
        heading={
          <>
            Personalized outreach in{" "}
            <span className="bg-ink-strong text-on-light rounded px-1.5">
              one click
            </span>
          </>
        }
        body={
          <>
            Generate <HL>tailored pitch emails</HL> grounded in each company's
            real gaps.
          </>
        }
        mock={<GeneratorMock />}
      />
      <DownArrow />
      <Row
        reverse
        eyebrow="Opportunity Radar"
        icon="radar"
        heading={
          <>
            Get new prospects <HL>delivered to your inbox</HL> each month on
            autopilot
          </>
        }
        body={
          <>
            Pick your niche, set your region, and Opportunity Radar{" "}
            <span className="bg-ink-strong text-on-light rounded px-1.5">
              does the prospecting for you
            </span>{" "}
            on autopilot.
          </>
        }
        mock={<RadarEmailMock />}
      />
    </section>
  );
}

export default Features;
