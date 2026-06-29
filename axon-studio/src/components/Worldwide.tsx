function Worldwide() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <div className="text-5xl">🌍</div>
      <h2 className="mt-6 text-[clamp(2rem,5vw,3rem)]">
        Find new clients{" "}
        <span className="bg-teal text-on-light inline-block rounded px-3 pb-1">
          anywhere in the world
        </span>
      </h2>
      <p className="text-ink mx-auto mt-6 max-w-md text-lg font-light">
        Axon works in every market with a public web and Google Business
        presence.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3 text-3xl">
        {["🇺🇸", "🇬🇧", "🇨🇦", "🇦🇺", "🇩🇪", "🇫🇷", "🇮🇳", "🇧🇷", "🇯🇵", "🇲🇽"].map(
          (f) => (
            <span key={f}>{f}</span>
          ),
        )}
      </div>
    </section>
  );
}

export default Worldwide;
