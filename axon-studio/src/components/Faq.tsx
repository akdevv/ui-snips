import { useState } from "react";

const items = [
  {
    q: "What is a credit?",
    a: "One credit unlocks one company — verified contact info, detected tech stack, an app/site screenshot, and an AI-readiness score. Credits refresh each month and roll into your Prospect List.",
  },
  {
    q: "What data does Axon pull?",
    a: "Public business data: name, location, phone, email, website, social profiles, reviews, detected tools and platforms, plus an AI-generated readiness analysis. No private or gated data — ever.",
  },
  {
    q: "How do I cancel?",
    a: "Cancel anytime from your account settings in two clicks. Your plan stays active until the end of the billing period; unused credits remain available until then.",
  },
  {
    q: "Can I export my leads?",
    a: "Yes — Pro and Advanced plans include one-click CSV export. Pull your whole Prospect List, with scores and opportunities, straight into your CRM.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="text-center text-[clamp(2rem,5vw,3rem)]">
        Frequently asked questions
      </h2>
      <div className="mt-12 space-y-4">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={it.q} className="bg-card rounded-md">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-6 text-left"
              >
                <span className="text-ink-strong text-lg font-bold">
                  {it.q}
                </span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`text-ink-muted shrink-0 transition-transform duration-200 ease-out ${isOpen ? "rotate-180" : ""}`}
                >
                  <circle cx="11" cy="11" r="9" />
                  <path
                    d="M7 9.5l4 4 4-4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-200 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="text-ink-muted -mt-1 px-6 pb-5">{it.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Faq;
