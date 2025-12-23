import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Type, 
  Mic2, 
  Settings, 
  LogOut, 
  FileVideo,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { label: "Overview", icon: LayoutDashboard, href: "/dashboard" },
    // { label: "Generate Captions", icon: Type, href: "/dashboard/captions" },
    { label: "AI Dubbing", icon: Mic2, href: "/dashboard/dubbing" },
    { label: "My Projects", icon: FileVideo, href: "/dashboard/projects" },
    { label: "Settings", icon: Settings, href: "/dashboard/settings" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 h-[100vh] w-64 bg-sidebar border-r border-sidebar-border z-50 transition-transform duration-300 ease-in-out md:translate-x-0 md:sticky flex flex-col",
        isSidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
      )}>
        <div className="p-6 flex items-center gap-2 border-b border-sidebar-border h-16 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
            D
          </div>
          <span className="text-xl font-bold font-heading tracking-tight text-white">
            DubGuru
          </span>
          <Button variant="ghost" size="icon" className="md:hidden ml-auto text-white/50" onClick={() => setSidebarOpen(false)}>
             <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="p-4 space-y-2 mt-4 flex-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <a className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive 
                    ? "bg-primary/10 text-primary border border-primary/20" 
                    : "text-sidebar-foreground/70 hover:text-white hover:bg-white/5"
                )}>
                  <item.icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-muted-foreground")} />
                  {item.label}
                </a>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-sidebar-border shrink-0">
          <Link href="/login">
            <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10">
              <LogOut className="w-5 h-5" />
              Sign Out
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="md:hidden h-16 border-b border-border flex items-center px-4 justify-between bg-background/80 backdrop-blur-md sticky top-0 z-30">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-6 h-6" />
          </Button>
          <span className="font-bold text-lg">DubGuru</span>
          <div className="w-10" /> {/* Spacer */}
        </header>

        <div className="flex-1 p-4 md:p-8 w-full max-w-[100vw] overflow-x-hidden animate-in fade-in-50 duration-500">
          {children}
        </div>
      </main>
    </div>
  );
}
