import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // TODO: Implement form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-6 lg:px-12 contact-section-bg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Step into the future of professional
          <br />
          networking
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Experience the innovative platform that transforms how
          you build professional relationships. Elevate your career and business
          with meaningful connections.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="futuristic-card p-8 text-left">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-input border-border"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-input border-border"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your professional goals and networking needs..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-input border-border resize-none"
                />
              </div>
              
              <Button type="submit" variant="hero" className="w-full gap-2">
                Send Message <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <div className="futuristic-card p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h3 className="text-xl font-semibold mb-4">Ready to Start?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of professionals who are already building meaningful connections with Jackrypt.
              </p>
              <Button variant="hero" size="lg" className="gap-2">
                Get started <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="space-y-4 text-left">
              <h4 className="font-semibold">Why Choose Jackrypt?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Smart matching with compatible professionals</li>
                <li>• Connect with verified entrepreneurs and experts</li>
                <li>• Project collaboration tools</li>
                <li>• Secure and private platform</li>
                <li>• 24/7 dedicated support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;