import globeInHands from "@/assets/globe-in-hands.svg";

function Worldwide() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <img
        src={globeInHands}
        alt="Globe in Hands"
        width={140}
        height={140}
        className="mx-auto transition-transform duration-300 ease-out hover:scale-105 hover:rotate-3"
      />
      <h2 className="mt-4 text-[clamp(2rem,5vw,3rem)]">
        Find new clients{" "}
        <span className="bg-teal text-on-light inline-block -rotate-2 rounded px-3 pb-1">
          anywhere in the world
        </span>
      </h2>
      <p className="text-ink mx-auto mt-6 max-w-md text-lg font-light">
        Axon works in every market with a public web and Google Business
        presence.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3 text-4xl">
        {/* top 10 FIFA men's ranking (June 2026), in order */}
        {["🇦🇷", "🇪🇸", "🇫🇷", "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "🇵🇹", "🇧🇷", "🇲🇦", "🇳🇱", "🇧🇪", "🇩🇪"].map(
          (f) => (
            <span key={f}>{f}</span>
          ),
        )}
      </div>
    </section>
  );
}

export default Worldwide;
