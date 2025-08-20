import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-bg min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 lg:px-12">
        <div className="text-2xl font-bold text-foreground">
          Jackrypt
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" asChild className="text-foreground hover:text-primary">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button variant="hero" asChild className="gap-2">
            <Link to="/register">Get Started <Sparkles className="w-4 h-4" /></Link>
          </Button>
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
          Effortlessly streamline your business connections with Jackrypt.
          Network, collaborate, and scale your relationships—all in one place.
        </p>

        {/* CTA Button */}
        <Button variant="hero" size="lg" asChild className="gap-2 text-lg px-8 py-6">
          <Link to="/register">Start networking now <ArrowRight className="w-5 h-5" /></Link>
        </Button>

        {/* Dashboard Preview */}
        <div className="mt-16 w-full max-w-5xl">
          <div className="futuristic-card p-8 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Metric Cards */}
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Total connections</div>
                <div className="text-3xl font-bold text-foreground">159</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Total collaborations</div>
                <div className="text-3xl font-bold text-foreground">12,594</div>
                <div className="text-xs text-muted-foreground">
                  This is how much the connections have been
                  utilized throughout the year
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Active users</div>
                <div className="text-3xl font-bold text-foreground">789</div>
                <div className="text-xs text-muted-foreground">Your target</div>
                <div className="text-xs text-muted-foreground">
                  Total benchmark of your target how much the users
                  have been used your connections
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