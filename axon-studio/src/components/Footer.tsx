function Footer() {
  return (
    <footer className="px-6 py-16 text-center">
      <p className="text-ink-muted">
        © 2026 Axon Studio — Find the companies that are ready for AI.
      </p>
      <nav className="text-ink-strong mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-bold">
        {[
          "Terms of Use",
          "Privacy Policy",
          "Refund Policy",
          "FAQ",
          "Support",
        ].map((l) => (
          <a key={l} href="#" className="hover:text-yellow">
            {l}
          </a>
        ))}
      </nav>
    </footer>
  );
}

export default Footer;
