/**
 * Home Page (Landing)
 * 
 * The main entry point for the application.
 * Highlights:
 * - Hero section with custom generated abstract background
 * - Features grid using glassmorphism cards
 * - Clear Call-to-Actions (CTAs) for conversion
 * - Responsive layout for all device sizes
 */

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check, Mic, Globe, Type, Play } from "lucide-react";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/abstract_sound_wave_technology_background.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/90 z-10" />
          {/* Custom generated asset for visual depth */}
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-60 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-20" />
        </div>

        <div className="container mx-auto relative z-30 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now supporting 40+ languages
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6 max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Break language barriers with <span className="text-primary neon-text">AI Dubbing</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Generate professional captions and lifelike dubs in minutes. 
            The all-in-one platform for global creators and enterprises.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link href="/dashboard">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 h-12 px-8 text-lg rounded-full">
                Start Creating Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 h-12 px-8 text-lg rounded-full">
              <Play className="mr-2 w-4 h-4" /> Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 bg-secondary/30 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Powerful Features</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Everything you need to globalize your content without hiring a studio.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Type className="w-8 h-8 text-primary" />}
              title="Smart Captions"
              description="Auto-generate accurate captions in 40+ languages with custom styling controls."
            />
            <FeatureCard 
              icon={<Mic className="w-8 h-8 text-accent" />}
              title="AI Dubbing"
              description="Clone voices or choose from our premium library for natural-sounding dubs."
            />
            <FeatureCard 
              icon={<Globe className="w-8 h-8 text-purple-400" />}
              title="Global Reach"
              description="Translate and localize content instantly to reach audiences worldwide."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-background">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-white text-xs font-bold">D</div>
            <span className="font-bold">DubGuru</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 DubGuru AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="glass-card p-8 flex flex-col gap-4 border-white/5 hover:-translate-y-2 transition-transform duration-300">
      <div className="p-3 bg-white/5 rounded-xl w-fit mb-2">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-heading">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </Card>
  );
}
