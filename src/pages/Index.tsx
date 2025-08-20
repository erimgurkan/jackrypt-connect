// Update this page (the content is just a fallback if you fail to update the page)

import Marquee from "@/components/Marquee";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowToUse from "@/components/HowToUse";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Marquee text="JACKRYPT MAKES LIFE EASIER" />
      <Hero />
      <About />
      <HowToUse />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Index;
