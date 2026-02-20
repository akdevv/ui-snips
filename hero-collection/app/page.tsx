import Link from "next/link";

const collections = [
  { title: "Fintech Dashboard", href: "/fintech-dashboard", image: "/fintech-dashboard.jpg" },
  { title: "Real Estate Search", href: "/real-estate-search", image: "/real-estate-search.jpg" },
  { title: "Social Content", href: "/social-content", image: "/social-content.jpg" },
  { title: "SaaS Growth", href: "/saas-growth", image: "/saas-growth.jpg" },
  { title: "AI Mobile App", href: "/ai-mobile-app", image: "/ai-mobile-app.jpg" },
  { title: "Nature Productivity", href: "/nature-productivity", image: "/nature-productivity.jpg" },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F4F5] dark:bg-[#18181B]">
      <main className="mx-auto max-w-[1440px] px-4 py-16 sm:px-8 md:px-10 md:py-24">
        <h1 className="mb-10 text-center text-2xl font-semibold tracking-tight text-[#0A0A0A] dark:text-[#FAFAFA] sm:mb-12 sm:text-3xl">
          Hero collections
        </h1>
        <ul className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5" role="list">
          {collections.map(({ title, href, image }) => (
            <li key={href}>
              <Link
                href={href}
                className="block overflow-hidden rounded-lg bg-white transition-shadow hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:ring-offset-2 dark:bg-[#27272A] dark:focus:ring-offset-[#18181B]"
                aria-label={`View ${title} collection`}
              >
                <div className="relative aspect-square w-full overflow-hidden bg-[#F4F4F5] dark:bg-[#3F3F46]">
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="truncate px-3 py-2.5 text-sm font-medium text-[#0A0A0A] dark:text-[#FAFAFA]">
                  {title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
