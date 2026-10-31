import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Problem from "@/components/Problem";
import Steps from "@/components/Steps";
import WhyUs from "@/components/WhyUs";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Problem />
        <Steps />
        <WhyUs />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
