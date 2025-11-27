import { Button } from "@/components/ui/button";
import { Check, ChevronRight, PlayCircle } from "lucide-react";

export default function DemoVideoSection() {
  return (
    <section id="demo" className="px-6 py-16 bg-[#F3F4F6]">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Watch how fast it really is</h2>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          <div className="bg-slate-900 aspect-video flex items-center justify-center text-white/80">
            <Button variant="outline" className="bg-white/10 backdrop-blur flex items-center gap-2 text-white border-white/40">
              <PlayCircle className="h-5 w-5" />
              Play 30s demo
            </Button>
          </div>
          <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs text-slate-700 flex items-center gap-1">
            <span>0:00 - Form opens</span>
            <ChevronRight className="h-3 w-3" aria-hidden />
            <span>0:02 - Submitted</span>
            <Check className="h-3.5 w-3.5 text-emerald-500" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}

