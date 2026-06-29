function Navbar() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <a href="/" className="flex items-center gap-2.5">
        {/* target-style mark */}
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          className="text-yellow"
          aria-hidden
        >
          <circle
            cx="17"
            cy="17"
            r="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
          <circle cx="17" cy="17" r="5" fill="currentColor" />
        </svg>
        <span className="text-[15px] font-extrabold leading-[0.95] tracking-tight text-ink-strong">
          Axon
          <br />
          Studio
        </span>
      </a>

      <button
        type="button"
        className="rounded-[2px] bg-card-alt px-5 py-2 text-sm font-semibold text-ink transition-colors duration-150 ease-out hover:bg-[#3a3946] active:scale-[0.97]"
      >
        Login
      </button>
    </header>
  );
}

export default Navbar;
