import { Sparkles, Users, Target, Zap } from "lucide-react";

const About = () => {
  const logos = [
    "Asana", "TIDAL", "Innovaccer", "Linear", "Raycast", "Labelbox"
  ];

  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Trust Badges */}
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
            TRUSTED BY THE BEST IN THE INDUSTRY
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            {logos.map((logo, index) => (
              <div key={index} className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Features Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-medium text-primary">Networking Features</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Network - Connect - Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the power of professional networking with Jackrypt. From
            finding the right connections to building successful collaborations, we help
            entrepreneurs and professionals grow their networks effortlessly.
          </p>
        </div>

        {/* Search Interface */}
        <div className="max-w-2xl mx-auto">
          <div className="futuristic-card p-8 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for entrepreneurs, skills, or projects..."
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 hover:bg-muted/20 rounded-lg cursor-pointer transition-colors">
                <Users className="w-5 h-5 text-neon-blue" />
                <span className="text-foreground">Find Co-founders</span>
              </div>
              <div className="flex items-center gap-3 p-3 hover:bg-muted/20 rounded-lg cursor-pointer transition-colors">
                <Target className="w-5 h-5 text-neon-purple" />
                <span className="text-foreground">Join Projects</span>
              </div>
              <div className="flex items-center gap-3 p-3 hover:bg-muted/20 rounded-lg cursor-pointer transition-colors">
                <Zap className="w-5 h-5 text-neon-cyan" />
                <span className="text-foreground">Skill Matching</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;