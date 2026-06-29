import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import Features from "@/components/Features";
import Worldwide from "@/components/Worldwide";
import AcademyCta from "@/components/AcademyCta";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ValueProp />
      <Features />
      <Worldwide />
      <AcademyCta />
      <Pricing />
      <Faq />
      <Footer />
    </>
  );
}

export default HomePage;
