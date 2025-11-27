import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section id="cta" className="px-6 py-16">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-[#0F172A] to-[#1E1B4B] text-white p-12 text-center space-y-4 shadow-2xl relative overflow-hidden">
        <p className="text-sm uppercase tracking-[0.3em] text-white/70">
          Don’t let forms slow you down
        </p>
        <h2 className="text-4xl font-bold">
          Join 1,000+ HK students who never miss an opportunity
        </h2>
        <Button size="lg" className="bg-white text-primary hover:bg-white/90 border-none">
          Get Started Free
        </Button>
        <p className="text-white/80 text-sm flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-center sm:gap-2">
          <span className="flex items-center justify-center gap-1 text-amber-300">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="h-4 w-4 fill-current text-amber-300"
                aria-hidden
              />
            ))}
          </span>
          <span>Rated 4.8/5 by students</span>
        </p>
      </div>
    </section>
  );
}

