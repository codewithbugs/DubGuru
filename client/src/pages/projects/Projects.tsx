/**
 * Projects Page
 * 
 * Lists all user projects with filtering and management options.
 * Features:
 * - List view of all projects
 * - Status indicators (Completed, Processing, Draft)
 * - Filtering and Search
 */

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  MoreVertical, 
  FileVideo, 
  Clock, 
  Download, 
  Trash2, 
  Edit 
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Projects() {
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading mb-1">My Projects</h1>
          <p className="text-muted-foreground">Manage and organize your dubbed videos.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search projects..." className="pl-9 bg-black/20 border-white/10" />
          </div>
          <Button variant="outline" size="icon" className="border-white/10">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <ProjectCard 
          title="Chaupal Demo 1" 
          type="Dubbing" 
          lang="Punjabi → Hindi" 
          status="processing" 
          date="1 min ago"
        />
        <ProjectCard 
          title="TVF Demo 1" 
          type="Dubbing"
          lang="Hindi → Punjabi" 
          status="completed" 
          date="2 hours ago"
        />
        <ProjectCard 
          title="TVF Demo" 
          type="Dubbing"
          lang="Hindi → English" 
          status="completed" 
          date="2 hours ago"
        />
        <ProjectCard 
          title="Chaupal Demo" 
          type="Dubbing" 
          lang="Punjabi → Hindi" 
          status="completed" 
          date="1 day ago"
        />
      </div>
    </DashboardLayout>
  );
}

function ProjectCard({ title, type, lang, status, date }: any) {

  const getDownloadLink = () => {
    if(title === "TVF Demo") {
      return "/assets/tvf-dubguru-demo.mp4";
    } else if(title === "Chaupal Demo") {
      return "/assets/chaupal-dubguru-demo.mp4";
    } else if(title === "TVF Demo 1") {
      return "/assets/tvf-dubguru-demo1.mp4";
    }
    return "#";
  }

  return (
    <Card className="p-4 flex flex-col cursor-pointer md:flex-row items-start md:items-center justify-between gap-4 glass-card border-white/5 hover:border-white/10 transition-colors group">
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="w-16 h-10 md:w-24 md:h-16 bg-black/40 rounded flex items-center justify-center text-muted-foreground shrink-0 border border-white/5">
          <FileVideo className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{title}</h3>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {date}</span>
            <span>•</span>
            <span>{type}</span>
            <span>•</span>
            <span>{lang}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
        <StatusBadge status={status} />
        
        <div className="flex items-center cursor-pointer gap-2">
          {status === 'completed' && (
            <a href={getDownloadLink()} download>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground cursor-pointer hover:text-primary"
              >
                <Download className="w-4 h-4" />
              </Button>
            </a>
          )}
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 bg-card border-white/10">
              <DropdownMenuItem className="gap-2">
                <Edit className="w-4 h-4" /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive">
                <Trash2 className="w-4 h-4" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </Card>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    completed: "bg-green-500/10 text-green-500 border-green-500/20",
    processing: "bg-primary/10 text-primary border-primary/20",
    draft: "bg-white/5 text-muted-foreground border-white/10"
  };

  const labels = {
    completed: "Completed",
    processing: "Processing",
    draft: "Draft"
  };

  return (
    <span className={`text-xs px-2.5 py-1 rounded-full border font-medium capitalize ${(styles as any)[status]}`}>
      {(labels as any)[status]}
    </span>
  );
}
