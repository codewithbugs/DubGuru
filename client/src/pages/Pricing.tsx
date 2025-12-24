/**
 * Pricing Page
 * 
 * Displays subscription tiers for the SaaS platform.
 * - Creator (Individual)
 * - Pro (Studio)
 * - Enterprise (Custom)
 */

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <Navbar />
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground">
            Choose the plan that fits your production needs. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter */}
          <PricingCard 
            title="Creator"
            price="$29"
            description="Perfect for individual content creators."
            features={[
              "60 minutes dubbing / month",
              "10 languages",
              "Watermark-free",
              "Standard support",
              "720p export"
            ]}
          />

          {/* Pro */}
          <PricingCard 
            title="Pro Studio"
            price="$99"
            highlighted
            description="For professional studios and agencies."
            features={[
              "300 minutes dubbing / month",
              "Multiple languages",
              "Voice cloning (3 voices)",
              "Priority support",
              "4K export",
              "SRT/VTT export"
            ]}
          />

          {/* Enterprise */}
          <PricingCard 
            title="Enterprise"
            price="Custom"
            description="For large organizations requiring security."
            features={[
              "Unlimited dubbing",
              "All languages + Dialects",
              "Unlimited voice cloning",
              "Dedicated account manager",
              "API Access",
              "On-premise deployment option"
            ]}
            action={<Link href="/enterprise"><Button variant="outline" className="w-full h-11 border-primary text-primary hover:bg-primary/10">Contact Sales</Button></Link>}
          />
        </div>
      </div>
    </div>
  );
}

function PricingCard({ title, price, description, features, highlighted = false, action }: any) {
  return (
    <Card className={`p-8 flex flex-col h-full relative ${highlighted ? 'border-primary bg-primary/5 shadow-2xl shadow-primary/10' : 'glass-card border-white/5'}`}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-4xl font-bold font-heading">{price}</span>
          {price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      <div className="flex-1 space-y-4 mb-8">
        {features.map((feature: string) => (
          <div key={feature} className="flex items-start gap-3 text-sm">
            <Check className="w-5 h-5 text-primary shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {action || (
        <Link href="/signup">
          <Button className={`w-full h-11 ${highlighted ? 'bg-primary hover:bg-primary/90' : 'bg-white/10 hover:bg-white/20'}`}>
            Get Started
          </Button>
        </Link>
      )}
    </Card>
  );
}
