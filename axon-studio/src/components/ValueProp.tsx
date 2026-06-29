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

      {/* white pill */}
      <div className="text-on-light mt-5 inline-block rounded-lg bg-white px-3 py-1 text-lg font-semibold shadow-sm">
        It finds companies with real problems AI can solve.
      </div>

      {/* callout with hand-drawn arrow + sketch marks */}
      <div className="mt-14 flex justify-center">
        <div className="text-yellow relative max-w-xl rounded-xl bg-[#2a2614] px-8 py-5 text-[clamp(1.1rem,2.5vw,1.45rem)] leading-snug font-semibold">
          Find clients for automation, chatbots, RAG search, AI agents and more!
          {/* hand-drawn arrow */}
          <svg
            width="48"
            height="48"
            viewBox="0 0 80 112"
            fill="none"
            className="text-yellow absolute top-1/2 right-full mr-3 hidden -translate-y-1/2 -rotate-90 lg:block"
            aria-hidden
          >
            <g
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M50 10 C 59 40, 53 64, 43 88"
                fill="none"
                strokeWidth="9"
              />
              <path
                d="M44 100 C 35 86, 25 75, 16 66 C 13 63, 16 59, 21 61 C 31 67, 39 73, 45 77 C 51 73, 59 67, 68 61 C 72 59, 75 64, 71 67 C 61 77, 51 89, 44 100 Z"
                strokeWidth="3"
              />
            </g>
          </svg>
          {/* hand-drawn emphasis marks, top-right */}
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            className="text-yellow absolute -top-5 -right-3 rotate-6"
            aria-hidden
          >
            <path d="M4 15 C 7 11, 10 8, 14 6" />
            <path d="M12 24 C 15 20, 18 17, 22 15" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default ValueProp;
