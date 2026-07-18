import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ProductShowcase from "@/components/ProductShowcase";
import ARDemo from "@/components/ARDemo";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="noise-bg">
      <Navbar />
      <Hero />
      <BrandMarquee />
      <Stats />
      <Features />
      <HowItWorks />
      <ProductShowcase />
      <ARDemo />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
