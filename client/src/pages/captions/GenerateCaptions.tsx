/**
 * Generate Captions Page
 * 
 * A wizard-style flow for generating video captions.
 * Steps:
 * 1. Upload: Drag & Drop interface
 * 2. Configure: Source and target language selection
 * 3. Processing: Simulated AI processing with progress steps
 * 4. Editor: Visual editor for captions (timing, text, styles)
 * 5. Completed: Success state with download options
 */

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Type, Download, Play, Pause, AlignLeft, AlignCenter, AlignRight, FileText, Loader2, CheckCircle2, ArrowRight, Languages, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type Step = "upload" | "configure" | "processing" | "editor" | "completed";

export default function GenerateCaptions() {
  const [step, setStep] = useState<Step>("upload");
  const [progress, setProgress] = useState(0);
  const [sourceLang, setSourceLang] = useState("auto");
  const [targetLang, setTargetLang] = useState<string[]>(["en"]);

  const startProcessing = () => {
    setStep("processing");
    setProgress(0);
    // Simulate processing steps
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setStep("editor");
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-heading mb-2">Generate Captions</h1>
        <p className="text-muted-foreground">Upload video, select languages, and generate professional subtitles.</p>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Progress Stepper */}
        <div className="flex items-center justify-between mb-8 px-4 relative">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-white/10 -z-10" />
            {["Upload", "Configure", "Processing", "Editor", "Export"].map((s, i) => {
              const stepIdx = ["upload", "configure", "processing", "editor", "completed"].indexOf(step);
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

        {step === "upload" && (
          <UploadSection onUpload={() => setStep("configure")} />
        )}

        {step === "configure" && (
          <ConfigureSection 
            onNext={startProcessing} 
            sourceLang={sourceLang} 
            setSourceLang={setSourceLang}
            targetLang={targetLang}
            setTargetLang={setTargetLang}
          />
        )}

        {step === "processing" && (
          <ProcessingSection progress={progress} />
        )}

        {step === "editor" && (
          <EditorSection onComplete={() => setStep("completed")} />
        )}
        
        {step === "completed" && (
          <CompletedSection />
        )}
      </div>
    </DashboardLayout>
  );
}

function UploadSection({ onUpload }: { onUpload: () => void }) {
  return (
    <Card className="p-10 border-dashed border-2 border-white/10 bg-white/5 flex flex-col items-center justify-center min-h-[400px] animate-in zoom-in-95 duration-500">
      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 animate-bounce">
        <Upload className="w-10 h-10 text-primary" />
      </div>
      <h3 className="text-2xl font-bold mb-2">Upload your video</h3>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        Drag and drop your video file here, or click to browse. 
        Supported formats: MP4, MOV, AVI (Max 500MB)
      </p>
      
      <div className="flex gap-4 w-full max-w-md">
        <Button onClick={onUpload} className="w-full bg-primary h-12 text-lg">
          Select File
        </Button>
      </div>
      <div className="mt-6 flex items-center gap-4 w-full max-w-md">
        <div className="h-[1px] bg-white/10 flex-1" />
        <span className="text-muted-foreground text-sm">OR PASTE URL</span>
        <div className="h-[1px] bg-white/10 flex-1" />
      </div>
      <div className="mt-6 w-full max-w-md flex gap-2">
        <Input placeholder="https://youtube.com/..." className="bg-black/20 border-white/10 h-11" />
        <Button variant="secondary" className="h-11">Import</Button>
      </div>
    </Card>
  );
}

function ConfigureSection({ onNext, sourceLang, setSourceLang, targetLang, setTargetLang }: any) {
  return (
    <Card className="p-8 max-w-2xl mx-auto glass-card border-white/10 animate-in slide-in-from-right-8 duration-500">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Languages className="w-6 h-6 text-primary" /> Language Configuration
      </h2>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Source Language (Audio)</Label>
          <Select value={sourceLang} onValueChange={setSourceLang}>
            <SelectTrigger className="h-11 bg-black/20"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="auto">Auto Detect</SelectItem>
              <SelectItem value="en">Hindi</SelectItem>
              <SelectItem value="es">Punjabi</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">The language spoken in the video.</p>
        </div>

        <div className="space-y-2">
          <Label>Target Language (Captions)</Label>
          <Select value={targetLang[0]} onValueChange={(v) => setTargetLang([v])}>
            <SelectTrigger className="h-11 bg-black/20"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="en">Hindi</SelectItem>
              <SelectItem value="es">Punjabi</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">We will translate the captions to this language.</p>
        </div>

        <div className="pt-4 flex justify-end">
          <Button onClick={onNext} className="bg-primary h-11 px-8">
            Generate Captions <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </Card>
  );
}

function ProcessingSection({ progress }: { progress: number }) {
  return (
    <Card className="p-12 flex flex-col items-center justify-center min-h-[400px] text-center animate-in fade-in duration-500">
      <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="60"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-white/5"
          />
          <circle
            cx="64"
            cy="64"
            r="60"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={377}
            strokeDashoffset={377 - (377 * progress) / 100}
            className="text-primary transition-all duration-300 ease-linear"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
          {progress}%
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-2">Generating Captions...</h3>
      <div className="flex flex-col gap-2 mt-4 w-full max-w-xs text-left">
        <StepIndicator label="Uploading video" done={progress > 20} />
        <StepIndicator label="Extracting audio" done={progress > 40} />
        <StepIndicator label="Transcribing speech" done={progress > 70} />
        <StepIndicator label="Translating text" done={progress > 90} />
      </div>
    </Card>
  );
}

function StepIndicator({ label, done }: { label: string, done: boolean }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <div className={cn("w-4 h-4 rounded-full flex items-center justify-center border", done ? "bg-green-500 border-green-500 text-black" : "border-white/20")}>
        {done && <CheckCircle2 className="w-3 h-3" />}
      </div>
      <span className={cn(done ? "text-white" : "text-muted-foreground")}>{label}</span>
    </div>
  );
}

function EditorSection({ onComplete }: { onComplete: () => void }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSegment, setActiveSegment] = useState(1);
  const [fontSize, setFontSize] = useState([24]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom-8 duration-700">
      {/* Video Preview */}
      <div className="lg:col-span-2 space-y-4">
        <Card className="aspect-video bg-black relative overflow-hidden group border-white/10">
          <div className="absolute inset-0 flex items-center justify-center">
            {!isPlaying && (
              <Button 
                size="icon" 
                className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                onClick={() => setIsPlaying(true)}
              >
                <Play className="w-8 h-8 fill-white text-white ml-1" />
              </Button>
            )}
          </div>
          
          {/* Overlay Captions */}
          <div className="absolute bottom-12 left-0 right-0 text-center px-10 pointer-events-none">
            <span 
              className="bg-black/60 text-white px-4 py-2 rounded font-medium shadow-lg backdrop-blur-sm inline-block transition-all duration-300"
              style={{ fontSize: `${fontSize[0]}px` }}
            >
              Break language barriers with AI Dubbing
            </span>
          </div>

          {/* Player Controls */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/80 to-transparent flex items-center px-4 gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="icon" variant="ghost" className="h-8 w-8 text-white" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
            <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-primary" />
            </div>
            <span className="text-xs text-white/80">00:12 / 01:45</span>
          </div>
        </Card>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Button variant="outline" size="sm"><Download className="w-4 h-4 mr-2" /> Export SRT</Button>
            <Button variant="outline" size="sm"><FileText className="w-4 h-4 mr-2" /> Export VTT</Button>
          </div>
          <Button onClick={onComplete} className="bg-primary text-white shadow-lg shadow-primary/20">
            Generate Video <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Editor Sidebar */}
      <Card className="flex flex-col h-[600px] border-white/10 bg-card/50 backdrop-blur-sm">
        <Tabs defaultValue="transcript" className="flex-1 flex flex-col">
          <div className="p-4 border-b border-white/10">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="transcript">Transcript</TabsTrigger>
              <TabsTrigger value="style">Style</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="transcript" className="flex-1 overflow-auto p-4 space-y-2 mt-0">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i}
                onClick={() => setActiveSegment(i)}
                className={cn(
                  "p-3 rounded-lg border cursor-pointer transition-all",
                  activeSegment === i 
                    ? "bg-primary/10 border-primary/50" 
                    : "bg-white/5 border-transparent hover:bg-white/10"
                )}
              >
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>00:0{i * 2}:00</span>
                  <span>00:0{i * 2 + 2}:00</span>
                </div>
                <p className="text-sm">Break language barriers with AI Dubbing technology.</p>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="style" className="p-6 space-y-6 mt-0">
            <div className="space-y-2">
              <Label>Font Family</Label>
              <Select defaultValue="inter">
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="inter">Inter</SelectItem>
                  <SelectItem value="roboto">Roboto</SelectItem>
                  <SelectItem value="outfit">Outfit</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Font Size: {fontSize[0]}px</Label>
              <Slider value={fontSize} onValueChange={setFontSize} min={12} max={48} step={1} />
            </div>

            <div className="space-y-2">
              <Label>Alignment</Label>
              <div className="flex p-1 bg-white/5 rounded-lg border border-white/10">
                <Button variant="ghost" size="sm" className="flex-1 h-8"><AlignLeft className="w-4 h-4" /></Button>
                <Button variant="secondary" size="sm" className="flex-1 h-8"><AlignCenter className="w-4 h-4" /></Button>
                <Button variant="ghost" size="sm" className="flex-1 h-8"><AlignRight className="w-4 h-4" /></Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Color</Label>
              <div className="flex gap-2">
                {['bg-white', 'bg-yellow-400', 'bg-cyan-400', 'bg-green-400', 'bg-pink-500'].map(c => (
                  <button key={c} className={cn("w-8 h-8 rounded-full border-2 border-white/20 hover:scale-110 transition-transform", c)} />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}

function CompletedSection() {
  return (
    <Card className="p-12 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500 max-w-2xl mx-auto glass-card border-white/10">
      <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
        <CheckCircle2 className="w-10 h-10" />
      </div>
      <h3 className="text-3xl font-bold mb-4">Video Generated Successfully!</h3>
      <p className="text-muted-foreground mb-8 text-lg">
        Your video has been processed with the new captions. You can now download it or share it directly.
      </p>
      
      <div className="flex gap-4">
        <Button size="lg" className="bg-primary h-12 px-8 text-white shadow-lg shadow-primary/20">
          <Download className="mr-2 w-5 h-5" /> Download Video (MP4)
        </Button>
        <Button size="lg" variant="outline" className="h-12 px-8" onClick={() => window.location.reload()}>
          Create Another
        </Button>
      </div>
    </Card>
  );
}
