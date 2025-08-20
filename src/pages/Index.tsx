// Update this page (the content is just a fallback if you fail to update the page)

import Marquee from "@/components/Marquee";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowToUse from "@/components/HowToUse";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen hero-bg text-foreground page-transition">
      <Marquee text="Network - Connect - Scale" />
      <div className="section-transition">
        <Hero />
      </div>
      <div className="section-transition">
        <About />
      </div>
      <div className="section-transition">
        <HowToUse />
      </div>
      <div className="section-transition">
        <Pricing />
      </div>
      <div className="section-transition">
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-border/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground font-medium">
            JACKRYPT 2025. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
