import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Contact", href: "#" },
  { label: "FAQs", href: "#" },
];

export function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-4xl items-center justify-between rounded-2xl border border-white/8 bg-[#1a1a1a]/95 px-4 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-sm">
        <a href="/" className="flex shrink-0" aria-label="Home">
          <Image
            src="/fintech-dashboard.svg"
            alt="Logo"
            width={40}
            height={40}
            className="h-8 w-8"
          />
        </a>

        <ul className="flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm font-medium text-[#a1a1aa] transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="shrink-0 cursor-pointer rounded-xl bg-linear-to-b from-white to-neutral-200 px-5 py-2.5 text-sm font-semibold text-[#0a0a0a] shadow-[0_1px_0_0_rgba(255,255,255,0.8)_inset] transition-opacity hover:opacity-90"
        >
          Start for free
        </button>
      </div>
    </nav>
  );
}
