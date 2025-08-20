import { Calendar, Network, Settings, BarChart3, Zap } from "lucide-react";

const HowToUse = () => {
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Collaboration Image */}
          <div className="space-y-6">
            <div className="futuristic-card p-6">
              <img 
                src="/lovable-uploads/70e34a94-0ae4-4968-aea8-a3b941f35ca3.png" 
                alt="Collaborate Smarter, Achieve Faster - Jackrypt networking platform"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Right Side - Planet Image */}
          <div className="space-y-6">
            <div className="futuristic-card p-6">
              <img 
                src="/lovable-uploads/9336bbf2-9da6-486b-b257-0f7513aa8985.png" 
                alt="Green Planet - Environmental Technology Initiative"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="text-sm font-medium text-primary">The Process</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            AI Networking in 3 Simple
            <br />
            Steps
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Follow these steps to streamline connections, boost collaboration, and
            scale with Jackrypt.
          </p>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 bg-card rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold">Identify & Integrate</h3>
              <p className="text-muted-foreground">
                Pinpoint key connections and seamlessly
                integrate AI-powered networking.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 bg-card rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold">Network & Optimize</h3>
              <p className="text-muted-foreground">
                Leverage AI to handle connections efficiently,
                reducing manual effort and errors.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 bg-card rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold">Monitor & Scale</h3>
              <p className="text-muted-foreground">
                Continuously improve networks with
                insights, ensuring growth and adaptability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;