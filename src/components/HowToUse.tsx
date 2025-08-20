import { Calendar, Network, Settings, BarChart3, Zap } from "lucide-react";

const HowToUse = () => {
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Workflow Visualization */}
          <div className="relative">
            <div className="space-y-8">
              {/* Central Hub */}
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                  <Network className="w-10 h-10 text-primary" />
                </div>
              </div>

              {/* Connected Apps */}
              <div className="flex justify-center gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center mb-2">
                    <Settings className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center mb-2">
                    <span className="text-xs">G</span>
                  </div>
                  <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center mb-2">
                    <span className="text-xs">W</span>
                  </div>
                  <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center">
                    <span className="text-xs">F</span>
                  </div>
                </div>
              </div>

              {/* Connecting Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--neon-blue))" />
                      <stop offset="100%" stopColor="hsl(var(--neon-purple))" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M200 150 L300 100 M200 150 L300 200 M200 150 L100 100"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Network automation</h3>
              <p className="text-muted-foreground mb-4">
                Connect with your best & favorite entrepreneurs and services.
              </p>
            </div>
          </div>

          {/* Right Side - Calendar */}
          <div className="space-y-6">
            <div className="futuristic-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Calendar</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Keep track of your networking activities with our
                calendar view.
              </p>

              {/* Mini Calendar */}
              <div className="bg-input/50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium">August 2025</h4>
                  <div className="flex gap-2">
                    <button className="text-xs px-2 py-1 rounded hover:bg-muted/20">←</button>
                    <button className="text-xs px-2 py-1 rounded hover:bg-muted/20">→</button>
                  </div>
                </div>
                
                <div className="grid grid-cols-7 gap-1 text-xs text-center">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                    <div key={day} className="p-2 text-muted-foreground">{day}</div>
                  ))}
                  {Array.from({ length: 31 }, (_, i) => (
                    <div 
                      key={i + 1} 
                      className={`p-2 hover:bg-primary/20 rounded cursor-pointer ${
                        i + 1 === 15 ? 'bg-primary text-primary-foreground' : ''
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
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