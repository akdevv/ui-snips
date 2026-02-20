import Link from "next/link";

export default function NatureProductivityPage() {
  return (
    <div className="min-h-screen bg-[#F4F4F5] dark:bg-[#18181B]">
      <main className="mx-auto max-w-[1440px] px-4 py-16 sm:px-8 md:px-10 md:py-24">
        <Link
          href="/"
          className="mb-8 inline-block text-sm font-medium text-[#0D9488] hover:underline focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:ring-offset-2 dark:text-[#2DD4BF] dark:focus:ring-offset-[#18181B]"
        >
          ← Hero collections
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight text-[#0A0A0A] dark:text-[#FAFAFA] sm:text-4xl">
          Nature Productivity
        </h1>
        <p className="mt-4 text-[#3F3F46] dark:text-[#A1A1AA]">
          Collection placeholder. Add your content here.
        </p>
      </main>
    </div>
  );
}
