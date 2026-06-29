function ValueProp() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      {/* heading: yellow highlight block + underlined grey phrases */}
      <h2 className="text-[clamp(2rem,4.5vw,3rem)] leading-[1.2]">
        <span className="bg-yellow text-on-light inline-block rounded px-3 pb-1">
          Selling AI is easy
        </span>
        <br />
        <span className="text-ink-strong">if you know </span>
        <span className="text-ink-muted underline decoration-2 underline-offset-[6px]">
          who needs it
        </span>
        <br />
        <span className="text-ink-strong">and </span>
        <span className="text-ink-muted underline decoration-2 underline-offset-[6px]">
          what to build them
        </span>
      </h2>

      {/* sub */}
      <p className="text-ink-muted mt-9 text-xl font-light">
        Axon does more than find contact info…
      </p>

      {/* black pill */}
      <div className="text-ink-strong mt-5 inline-block rounded-lg border border-white/10 bg-[#161616] px-6 py-3 text-lg font-semibold">
        It finds companies with real problems AI can solve.
      </div>

      {/* callout with hand-drawn arrow + sketch marks */}
      <div className="mt-14 flex justify-center">
        <div className="text-yellow relative max-w-xl rounded-xl bg-[#2a2614] px-8 py-5 text-[clamp(1.1rem,2.5vw,1.45rem)] leading-snug font-semibold">
          Find clients for automation, chatbots, RAG search, AI agents and more!
          {/* arrow pointing in from the left */}
          <svg
            width="52"
            height="24"
            viewBox="0 0 52 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-yellow absolute top-1/2 right-full mr-5 hidden -translate-y-1/2 lg:block"
            aria-hidden
          >
            <path d="M2 12 H48" />
            <path d="M48 12 l-12 -7 M48 12 l-12 7" />
          </svg>
          {/* sketch marks, top-right */}
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-yellow absolute -top-4 -right-4"
            aria-hidden
          >
            <path d="M4 14 L12 6 M14 22 L22 14" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default ValueProp;
