import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import GenerateCaptions from "@/pages/captions/GenerateCaptions";
import Dubbing from "@/pages/dubbing/Dubbing";
import Projects from "@/pages/projects/Projects";
import Settings from "@/pages/settings/Settings";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import Pricing from "@/pages/Pricing";
import Enterprise from "@/pages/Enterprise";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/enterprise" component={Enterprise} />
      
      {/* Dashboard Routes */}
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/dashboard/captions" component={GenerateCaptions} />
      <Route path="/dashboard/dubbing" component={Dubbing} />
      <Route path="/dashboard/projects" component={Projects} />
      <Route path="/dashboard/settings" component={Settings} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
