/**
 * Navbar Component
 * 
 * Main navigation bar for public-facing pages (Landing, Pricing, Enterprise).
 * Features:
 * - Responsive mobile menu with slide-in animation
 * - Transparent backdrop with blur effect
 * - Sticky positioning
 * - Links to key sections and auth pages
 */

import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Mic, Globe, Type, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  // Hide Navbar on dashboard pages as they have their own sidebar layout
  const isDashboard = location.startsWith("/dashboard");

  if (isDashboard) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
              D
            </div>
            <span className="text-xl font-bold font-heading tracking-tight text-white">
              Dubbinger<span className="text-primary">.</span>
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#features"><a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</a></Link>
          <Link href="/pricing"><a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Pricing</a></Link>
          <Link href="/enterprise"><a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Enterprise</a></Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="hover:bg-white/5">Log in</Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 z-40">
          <Link href="/#features"><a className="text-lg font-medium text-muted-foreground" onClick={() => setIsOpen(false)}>Features</a></Link>
          <Link href="/pricing"><a className="text-lg font-medium text-muted-foreground" onClick={() => setIsOpen(false)}>Pricing</a></Link>
          <Link href="/enterprise"><a className="text-lg font-medium text-muted-foreground" onClick={() => setIsOpen(false)}>Enterprise</a></Link>
          <div className="h-px bg-white/10 my-2" />
          <Link href="/login">
            <Button variant="ghost" className="w-full justify-start" onClick={() => setIsOpen(false)}>Log in</Button>
          </Link>
          <Link href="/signup">
            <Button className="w-full bg-primary" onClick={() => setIsOpen(false)}>Get Started</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
