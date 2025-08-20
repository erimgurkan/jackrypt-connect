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
            Choose a plan that works
            <br />
            for you
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get started with Jackrypt today and enjoy more features with
            our pro plans.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-input/50 rounded-lg">
            <button className="px-4 py-2 rounded-md bg-card text-foreground font-medium">
              Monthly
            </button>
            <button className="px-4 py-2 rounded-md text-muted-foreground hover:text-foreground">
              Yearly (Save 50%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`futuristic-card p-8 relative ${
                plan.popular ? 'border-primary/50 shadow-lg shadow-primary/10' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.subtitle}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button variant={plan.buttonVariant} className="w-full">
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <CreditCard className="w-5 h-5" />
            <span className="text-sm">Pay with Ease</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;