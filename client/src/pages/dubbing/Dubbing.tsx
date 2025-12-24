/**
 * AI Dubbing Studio
 * 
 * A comprehensive interface for dubbing video content.
 * Workflow:
 * 1. Upload Source: Select video file
 * 2. Configure: Select source language (input) and target language (output), plus voice style (Clone vs Studio)
 * 3. Processing: Detailed visualization of the dubbing pipeline (Demucs separation, TTS, Lip-sync)
 * 4. Result: Preview and download the final asset
 */

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Mic2, Wand2, Globe2, PlayCircle, Loader2, Check, User, ChevronRight, CheckCircle2 } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

type Step = "upload" | "configure" | "processing" | "completed";

export default function Dubbing() {
  const [step, setStep] = useState<Step>("upload");
  const [progress, setProgress] = useState(0);


    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
      (fileInputRef.current as any).click();
    };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    // Optional validation
    if (!file.type.startsWith("video/")) {
      alert("Please select a video file");
      return;
    }

    console.log("Selected video:", file);

    // Move to next step
    setStep("configure");
  };

  const startDubbing = () => {
    setStep("processing");
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setStep("completed");
          return 100;
        }
        return prev + 1; // Slower progress for dubbing
      });
    }, 3500);
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-heading mb-2">AI Dubbing Studio</h1>
        <p className="text-muted-foreground">Translate and dub your videos into multiple languages with realistic AI voices.</p>
      </div>

       {/* Progress Stepper */}
       <div className="flex items-center justify-between mb-8 px-4 relative max-w-4xl mx-auto">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-white/10 -z-10" />
            {["Upload Source", "Configure Voice", "Processing", "Download"].map((s, i) => {
              const stepIdx = ["upload", "configure", "processing", "completed"].indexOf(step);
              const isCompleted = i < stepIdx;
              const isCurrent = i === stepIdx;
              
              return (
                <div key={s} className="flex flex-col items-center gap-2 bg-background px-2">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors",
                    isCompleted ? "bg-primary text-white" : 
                    isCurrent ? "bg-primary/20 text-primary border-2 border-primary" : 
                    "bg-white/10 text-muted-foreground"
                  )}>
                    {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                  </div>
                  <span className={cn("text-xs font-medium", isCurrent ? "text-primary" : "text-muted-foreground")}>{s}</span>
                </div>
              );
            })}
        </div>

      <div className="max-w-4xl mx-auto">
        {step === "upload" && (
           <Card className="p-10 border-dashed border-2 border-white/10 bg-white/5 flex flex-col items-center justify-center min-h-[400px] animate-in zoom-in-95 duration-500">
           <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 animate-bounce">
             <Upload className="w-10 h-10 text-primary" />
           </div>
           <h3 className="text-2xl font-bold mb-2">Upload Source Video</h3>
           <p className="text-muted-foreground mb-8 text-center max-w-md">
             Supported formats: MP4, MOV, AVI (Max 1GB)
           </p>
           
           <div className="flex gap-4 w-full max-w-md">
             <>
              <input
                ref={fileInputRef}
                type="file"
                accept="video/*"
                className="hidden"
                onChange={handleFileChange}
              />

              <Button
                onClick={handleButtonClick}
                className="w-full bg-primary h-12 text-lg"
              >
                Select Video
              </Button>
            </>
           </div>
         </Card>
        )}

        {step === "configure" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in slide-in-from-right-8 duration-500">
            <Card className="p-6 glass-card border-white/10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-primary" /> Languages
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Source Language</Label>
                  <Select defaultValue="ad">
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ad">Auto Detect</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="hi">Hindi</SelectItem>
                      <SelectItem value="pa">Punjabi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Target Language</Label>
                  <Select defaultValue="es">
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Punjabi</SelectItem>
                      <SelectItem value="mx">Hindi</SelectItem>
                      {/* <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="jp">Japanese</SelectItem> */}
                    </SelectContent>
                  </Select>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <h4 className="font-bold text-sm mb-1 text-primary">Estimated Cost</h4>
                  <div className="flex justify-between items-end">
                    <span className="text-sm text-muted-foreground">10 mins duration</span>
                    <span className="text-xl font-bold">20 Credits</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 glass-card border-white/10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Mic2 className="w-5 h-5 text-accent" /> Voice Selection
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-primary/50 bg-primary/10 cursor-pointer relative">
                  <div className="absolute top-2 right-2 text-primary"><CheckCircle2 className="w-4 h-4" /></div>
                  <div className="font-bold mb-1 flex items-center gap-2">
                    <Wand2 className="w-4 h-4 text-primary" /> AI Voice Clone
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Clones the speaker's original voice in the new language. Best for authenticity.
                  </p>
                </div>

                <div className="p-4 rounded-lg border border-white/10 bg-white/5 cursor-pointer hover:border-white/20">
                  <div className="font-bold mb-1 flex items-center gap-2">
                    <User className="w-4 h-4" /> Studio Voice
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Select a professional AI voice actor.
                  </p>
                  <Select disabled>
                    <SelectTrigger className="h-9"><SelectValue placeholder="Select actor" /></SelectTrigger>
                    <SelectContent><SelectItem value="1">Adam (Male, Deep)</SelectItem></SelectContent>
                  </Select>
                </div>
              </div>

              <Button onClick={startDubbing} className="w-full mt-6 bg-primary h-12 text-lg shadow-lg shadow-primary/20">
                Generate Dub <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>
        )}

        {step === "processing" && (
           <Card className="p-12 flex flex-col items-center justify-center min-h-[400px] text-center animate-in fade-in duration-500 glass-card">
           <div className="relative w-40 h-40 mb-10 flex items-center justify-center">
             <div className="absolute inset-0 rounded-full border-4 border-white/5"></div>
             <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
             <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-3xl font-bold">{progress}%</span>
             </div>
           </div>
           
           <h3 className="text-2xl font-bold mb-4">Dubbing in progress...</h3>
           <div className="w-full max-w-md space-y-4 bg-black/20 p-6 rounded-xl border border-white/5">
             <ProcessingStep label="Separating vocal tracks" status={progress > 10 ? 'done' : 'active'} />
             <ProcessingStep label="Translating script" status={progress > 30 ? 'done' : progress > 10 ? 'active' : 'pending'} />
             <ProcessingStep label="Synthesizing new voice" status={progress > 60 ? 'done' : progress > 30 ? 'active' : 'pending'} />
             <ProcessingStep label="Syncing lip movements" status={progress > 90 ? 'done' : progress > 60 ? 'active' : 'pending'} />
           </div>
         </Card>
        )}

        {step === "completed" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in zoom-in-95 duration-500">
             <Card className="p-6 bg-black border-white/10 flex items-center justify-center aspect-video relative group">
                <PlayCircle className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform cursor-pointer" />
                <div className="absolute bottom-4 left-4 text-sm font-medium bg-black/50 px-2 py-1 rounded">Preview (Spanish)</div>
             </Card>

             <Card className="p-8 flex flex-col justify-center glass-card border-white/10">
                <div className="flex items-center gap-3 mb-6 text-green-500">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="font-bold text-lg">Dubbing Complete</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Project_Demo_ES.mp4</h3>
                <p className="text-muted-foreground mb-8">Duration: 02:14 • Size: 45MB</p>
                
                <div className="space-y-3">
                  <Button className="w-full bg-primary h-11">Download Video</Button>
                  <Button variant="outline" className="w-full h-11">Download Audio Only</Button>
                  <Button variant="ghost" onClick={() => setStep("upload")} className="w-full">Start New Project</Button>
                </div>
             </Card>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

function ProcessingStep({ label, status }: { label: string, status: 'done' | 'active' | 'pending' }) {
  return (
    <div className="flex items-center gap-3">
       <div className={cn(
         "w-5 h-5 rounded-full flex items-center justify-center text-[10px]",
         status === 'done' ? "bg-green-500 text-black" :
         status === 'active' ? "border-2 border-primary text-primary" :
         "border-2 border-white/10 text-muted-foreground"
       )}>
         {status === 'done' && <Check className="w-3 h-3" />}
       </div>
       <span className={cn(
         "text-sm font-medium",
         status === 'done' ? "text-white" :
         status === 'active' ? "text-primary animate-pulse" :
         "text-muted-foreground"
       )}>{label}</span>
    </div>
  );
}
