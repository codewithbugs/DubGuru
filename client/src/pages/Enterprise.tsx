/**
 * Enterprise Page
 * 
 * Specialized landing page for high-value enterprise clients.
 * Focuses on:
 * - Security (Air-gapped, Encryption)
 * - Scalability
 * - Compliance (SOC2, GDPR)
 * - On-premise deployment options
 */

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Server, Lock, Activity, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Enterprise() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <Navbar />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <Shield className="w-4 h-4" /> Enterprise Grade Security
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 leading-tight">
              Deploy AI Dubbing <br />
              <span className="text-primary">On Your Infrastructure</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Complete data sovereignty. Run DubGuru's powerful AI models on your own private cloud or on-premise hardware. Zero data egress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary h-12 px-8 text-lg">
                Schedule Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 h-12 px-8 text-lg">
                View Documentation
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50" />
            <Card className="relative p-8 glass-card border-white/10">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                  <Server className="w-8 h-8 text-accent" />
                  <div>
                    <h3 className="font-bold">Air-Gapped Deployment</h3>
                    <p className="text-sm text-muted-foreground">Run completely offline without internet</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                  <Lock className="w-8 h-8 text-purple-400" />
                  <div>
                    <h3 className="font-bold">End-to-End Encryption</h3>
                    <p className="text-sm text-muted-foreground">Military-grade encryption for all assets</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                  <Activity className="w-8 h-8 text-green-400" />
                  <div>
                    <h3 className="font-bold">Unlimited Scale</h3>
                    <p className="text-sm text-muted-foreground">No rate limits or processing queues</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Specs Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-heading mb-8 text-center">Technical Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 glass-card">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Server className="w-5 h-5 text-primary" /> Hardware
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> NVIDIA A100 / H100 GPUs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 128GB+ System RAM</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 2TB+ NVMe Storage</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Ubuntu 22.04 LTS</li>
              </ul>
            </Card>
            <Card className="p-6 glass-card">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" /> Compliance
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> SOC2 Type II Ready</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> GDPR & HIPAA Compliant</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> SSO / SAML Integration</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Audit Logging</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
