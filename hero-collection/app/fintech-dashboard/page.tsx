import { Navbar } from "./components/navbar";
import { HeroText } from "./components/hero-text";
import { DashboardPreview } from "./components/dashboard-preview";

export default function FintechDashboardPage() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage: `
          radial-gradient(ellipse 160% 120% at 50% 115%, rgba(57, 255, 20, 0.9) 0%, rgba(57, 255, 20, 0.5) 18%, rgba(57, 255, 20, 0.2) 32%, rgba(57, 255, 20, 0.06) 48%, transparent 62%),
          radial-gradient(ellipse 140% 100% at 50% -25%, #0a0a0a 0%, rgba(10, 10, 10, 0.85) 35%, rgba(10, 10, 10, 0.4) 55%, transparent 72%)
        `,
      }}
    >
      <Navbar />
      <HeroText />
      <DashboardPreview />
    </div>
  );
}
