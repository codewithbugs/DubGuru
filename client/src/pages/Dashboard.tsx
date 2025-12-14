/**
 * Dashboard Overview
 * 
 * The main hub for logged-in users.
 * Features:
 * - Quick stats summary
 * - Recent project history
 * - Direct actions to create new projects
 */

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Clock, FileVideo, ArrowRight, Activity } from "lucide-react";
import { Link } from "wouter";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-heading mb-1">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Creator.</p>
        </div>
        <Link href="/dashboard/captions">
          <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
            <Plus className="w-4 h-4 mr-2" /> New Project
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard label="Total Minutes Dubbed" value="124m" icon={<Activity className="text-primary" />} />
        <StatCard label="Languages Used" value="8" icon={<Activity className="text-accent" />} />
        <StatCard label="Projects Completed" value="12" icon={<Activity className="text-purple-400" />} />
      </div>

      {/* Recent Projects */}
      <h2 className="text-xl font-bold font-heading mb-4 flex items-center gap-2">
        <Clock className="w-5 h-5 text-muted-foreground" /> Recent Projects
      </h2>
      
      <div className="grid gap-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="p-4 flex items-center justify-between glass-card border-white/5 hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-16 h-10 bg-black/40 rounded flex items-center justify-center text-muted-foreground">
                <FileVideo className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium group-hover:text-primary transition-colors">Product Demo {2025 - i}</h3>
                <p className="text-sm text-muted-foreground">Edited 2 hours ago • English to Spanish</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-500 border border-green-500/20">Completed</span>
              <Button variant="ghost" size="icon">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}

function StatCard({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) {
  return (
    <Card className="p-6 glass-card border-white/5">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-white/5 rounded-lg">{icon}</div>
        <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">+12%</span>
      </div>
      <div className="text-3xl font-bold font-heading mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </Card>
  );
}
