import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-bg min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-center items-center p-6 lg:px-12">
        <div className="text-2xl font-bold text-foreground">
          JACKRYPT
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 lg:px-12 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Manage networks smarter</span>
          <ArrowRight className="w-4 h-4 text-primary" />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          AI-Powered Networking
          <br />
          <span className="text-primary">With Precision</span>
        </h1>

        {/* Description */}
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
          Unlock the power of AI networking with Jackrypt. From streamlining connections to optimizing collaboration, we help entrepreneurs scale effortlessly.
        </p>

        {/* Get Started Button in Panel */}
        <div className="futuristic-card p-6 bg-card/50 backdrop-blur-sm border border-border/20">
          <Button 
            variant="default" 
            size="lg" 
            asChild 
            className="gap-2 text-lg px-8 py-6 bg-white text-black hover:bg-white/90 font-semibold"
          >
            <Link to="/register">
              <Sparkles className="w-5 h-5" />
              Get Started
            </Link>
          </Button>
        </div>

        {/* Interactive Startup Mockup */}
        <div className="mt-16 w-full max-w-4xl">
          <div className="futuristic-card p-8 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm">
            {/* Window Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/20">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm font-medium text-muted-foreground">Make a Startup</span>
              </div>
            </div>
            
            {/* Startup Creation Interface */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">Create Your Startup</h3>
                <p className="text-muted-foreground">Build your vision and connect with co-founders</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Create Side */}
                <div className="space-y-4 p-4 rounded-lg border border-border/20 bg-card/20">
                  <h4 className="font-semibold text-foreground">Start Your Journey</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Define your startup idea</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                      <span>Set required skills</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                      <span>Publish to network</span>
                    </div>
                  </div>
                </div>
                
                {/* Join Side */}
                <div className="space-y-4 p-4 rounded-lg border border-border/20 bg-card/20">
                  <h4 className="font-semibold text-foreground">Find Opportunities</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 rounded bg-background/50">
                      <span className="text-sm">AI SaaS Platform</span>
                      <Button size="sm" variant="outline" className="h-6 text-xs">Apply</Button>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-background/50">
                      <span className="text-sm">GreenTech Startup</span>
                      <Button size="sm" variant="outline" className="h-6 text-xs">Apply</Button>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-background/50">
                      <span className="text-sm">Fintech Revolution</span>
                      <Button size="sm" variant="outline" className="h-6 text-xs">Apply</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;