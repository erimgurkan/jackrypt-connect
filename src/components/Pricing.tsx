import { Button } from "@/components/ui/button";
import { Check, CreditCard } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter Pack",
      subtitle: "For most startups/businesses",
      price: "$97",
      period: "/month",
      features: [
        "AI Networking for entrepreneur support",
        "Automated connection building",
        "Lead gen & collaboration automation",
        "Basic analytics dashboard",
        "Community support"
      ],
      buttonText: "Message us to Get Started",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      subtitle: "For small businesses",
      price: "$140",
      period: "/month",
      features: [
        "Advanced AI Networking",
        "AI connection automation",
        "Business funnel automation",
        "Advanced analytics & insights",
        "Priority support",
        "Export & manage network data"
      ],
      buttonText: "Message us to Get started",
      buttonVariant: "hero" as const,
      popular: true
    },
    {
      name: "Business",
      subtitle: "For large organizations",
      price: "$200",
      period: "/month",
      features: [
        "Custom AI Networking",
        "End-to-end AI-powered network automation",
        "Dedicated AI agent",
        "Enterprise-grade analytics & reporting",
        "Dedicated account manager",
        "Custom AI solutions & API access"
      ],
      buttonText: "Contact team",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="text-sm font-medium text-primary">Simple Pricing</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join Jackrypt Today
            <br />
            Completely Free
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access all of Jackrypt's powerful AI networking features at no cost.
            Connect, collaborate, and scale your business effortlessly.
          </p>

          {/* Billing Toggle - Remove */}
        </div>

        {/* Free Access Card */}
        <div className="max-w-2xl mx-auto">
          <div className="futuristic-card p-8 text-center border-primary/50 shadow-lg shadow-primary/10">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Free Access</h3>
              <p className="text-muted-foreground mb-6">
                Everything you need to build and scale your network
              </p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-primary">$0</span>
                <span className="text-muted-foreground">/forever</span>
              </div>
            </div>

            <div className="space-y-4 mb-8 text-left">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">AI-powered networking and connections</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Unlimited startup creation and collaboration</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Business automation tools</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Analytics and insights dashboard</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">Community support and resources</span>
              </div>
            </div>

            <Button variant="hero" className="w-full">
              Get Started - It's Free!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;