import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyProperty from "@/components/WhyProperty";
import Retail from "@/components/Retail";
import Luxury from "@/components/Luxury";
import Dining from "@/components/Dining";
import Attractions from "@/components/Attractions";
import Events from "@/components/Events";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyProperty />
      <Retail />
      <Luxury />
      <Dining />
      <Attractions />
      <Events />
      <CTA />
<Footer />
    </main>
  );
}