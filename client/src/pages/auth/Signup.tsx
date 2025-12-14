/**
 * Signup Page
 * 
 * Account creation flow.
 * - Collects user details
 * - Simulates account creation
 * - Redirects to dashboard
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function Signup() {
  const [, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem("dubbinger_user", "true");
      setLocation("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden p-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />
      
      <Card className="w-full max-w-md p-8 glass-card border-white/10 relative z-10 animate-in fade-in zoom-in-95 duration-500">
        <div className="text-center mb-8">
          <Link href="/">
            <a className="inline-flex items-center gap-2 mb-6 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-2xl group-hover:scale-105 transition-transform">D</div>
            </a>
          </Link>
          <h1 className="text-2xl font-bold font-heading mb-2">Create Account</h1>
          <p className="text-muted-foreground">Start dubbing your content today.</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" required className="bg-black/20 border-white/10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" required className="bg-black/20 border-white/10" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@company.com" required className="bg-black/20 border-white/10" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required className="bg-black/20 border-white/10" />
          </div>

          <Button type="submit" className="w-full bg-primary h-11 text-lg" disabled={isLoading}>
            {isLoading ? <Loader2 className="animate-spin mr-2" /> : null}
            Get Started
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account? <Link href="/login"><a className="text-primary hover:underline">Sign In</a></Link>
        </div>
      </Card>
    </div>
  );
}
