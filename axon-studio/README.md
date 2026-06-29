# Axon Studio

A landing-page build for **Axon** — a fictional AI agent that scans Google Maps and
the web to find businesses _ready to adopt AI_, scores their AI-readiness, and helps
agencies pitch the right companies first.

<p align="center">
  <img src="./public/screenshots/01-hero-cover.png" alt="Axon Studio — hero and product mockup" width="900">
</p>

> Layout cloned 1:1 from [uglysitescraper.com](https://uglysitescraper.com) as a design
> study. All copy is original; the company is fictional.

## Stack

- **React 19** + **TypeScript**
- **Vite 8** — dev server & build
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **React Router 7** — Home / Login / Register
- **Hugeicons** · **Oxlint** · **Prettier**

## Run

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # type-check + production build
```

## Sections

One component per section (`src/components/`).

**Value proposition** — `ValueProp`
![Value proposition](./public/screenshots/02-value-prop-framed.png)

**Targeted research & AI analysis** — `Features`
![Targeted research and AI analysis](./public/screenshots/03-features-research-analysis-framed.png)

**Pitch generator & Opportunity Radar** — `Features`
![Pitch generator and opportunity radar](./public/screenshots/04-features-pitch-radar-framed.png)

**Worldwide coverage** — `Worldwide`
![Worldwide coverage](./public/screenshots/05-worldwide-framed.png)

**Pricing** — `Pricing`
![Pricing](./public/screenshots/07-pricing-framed.png)

**FAQ & footer** — `Faq` · `Footer`
![FAQ and footer](./public/screenshots/08-faq-footer-framed.png)

---

Part of the [ui-snips](../README.md) collection.
