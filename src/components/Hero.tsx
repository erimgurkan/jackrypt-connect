import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-bg min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 lg:px-12">
        <div className="text-2xl font-bold text-foreground">
          JACKRYPT
        </div>
        <div className="flex gap-4">
          <Button className="professional-button">
            Join Network
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 lg:px-12 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <TrendingUp className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Connect with entrepreneurs</span>
          <ArrowRight className="w-4 h-4 text-primary" />
        </div>

        {/* Main Heading - AutoAI Style */}
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-foreground">Professional Networking</span>
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Made Simple
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
          Connect with like-minded entrepreneurs and build your dream team with JACKRYPT.
          <br />
          Find collaborators, join projects, and grow your professional network.
        </p>

        {/* CTA Button */}
        <Button 
          size="lg" 
          asChild 
          className="professional-button text-lg px-8 py-4 mb-16"
        >
          <Link to="/register">
            Start networking now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>

        {/* Dashboard Mockup - AutoAI Style */}
        <div className="w-full max-w-6xl">
          <div className="professional-card p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm">
            {/* Window Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/20">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm font-medium text-muted-foreground">JACKRYPT Dashboard</span>
              </div>
              <div className="text-xs text-muted-foreground">autoaiworks.com</div>
            </div>
            
            {/* Dashboard Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Metrics Cards */}
              <div className="lg:col-span-2 grid grid-cols-3 gap-4">
                <div className="bg-secondary/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">159</div>
                  <div className="text-xs text-muted-foreground">Total links</div>
                </div>
                <div className="bg-secondary/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">12,594</div>
                  <div className="text-xs text-muted-foreground">Total clicks</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    This is how much the links have been clicked throughout the year
                  </div>
                </div>
                <div className="bg-secondary/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">789</div>
                  <div className="text-xs text-muted-foreground">Active users</div>
                  <div className="text-xs text-muted-foreground mt-1">Your target: 1,500</div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="bg-secondary/20 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-muted-foreground">120</span>
                  <span className="text-xs text-muted-foreground">500</span>
                </div>
                <div className="w-full bg-background/50 rounded-full h-2 mb-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '24%'}}></div>
                </div>
                <div className="text-xs text-muted-foreground">
                  Total benchmark of your target how much the users have been used your links
                </div>
              </div>
            </div>

            {/* Analytics Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Chart Area */}
              <div className="bg-secondary/20 rounded-lg p-6">
                <h4 className="text-sm font-medium text-foreground mb-4">Analytics</h4>
                <div className="h-32 flex items-end justify-between gap-1">
                  {/* Simulated Chart Bars */}
                  {[40, 60, 45, 80, 65, 90, 55, 75, 85, 70, 95, 50].map((height, i) => (
                    <div 
                      key={i} 
                      className="bg-primary/60 rounded-t flex-1" 
                      style={{height: `${height}%`}}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>Jan</span>
                  <span>Dec</span>
                </div>
              </div>
              
              {/* Performance Metrics */}
              <div className="bg-secondary/20 rounded-lg p-6">
                <h4 className="text-sm font-medium text-foreground mb-4">Recent Activities</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">New user registered</span>
                    <span className="text-xs text-muted-foreground">2h ago</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Campaign optimized</span>
                    <span className="text-xs text-muted-foreground">4h ago</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">System maintenance</span>
                    <span className="text-xs text-muted-foreground">1d ago</span>
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