"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SpeedComparison } from "@/components/animations/SpeedComparison";
import { Badge } from "@/components/ui/Badge";
import { Chrome, PlayCircle, Rocket, Search } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const queries = [
  "Fill my university application form",
  "Complete event registration automatically",
  "Auto-fill scholarship forms with my data",
];

export default function HeroSection() {
  const [currentQuery, setCurrentQuery] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentQuery((prev) => (prev + 1) % queries.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#0078D4] via-[#4F46E5] to-[#6366F1] text-white"
    >
      <div className="absolute inset-0 bg-grid-white/[0.08] opacity-40 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 py-24 lg:px-12 relative z-10 grid gap-12 lg:grid-cols-2 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-6"
        >
          <Badge className="bg-white/20 border-white/30 text-white uppercase tracking-[0.3em]">
            <Rocket className="h-3.5 w-3.5" aria-hidden />
            <span>Used by 1,000+ HK students to secure event spots faster</span>
          </Badge>
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="block">Stop Losing Spots</span>
              <span className="block text-white/80">While Filling Forms</span>
            </h1>
            <p className="text-lg text-white/80">
              AI-powered extension that auto-fills registration forms before others
              even start. Perfect for HK students competing for limited event seats,
              workshops, and opportunities.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button className="bg-white text-primary hover:bg-slate-100 shadow-lg flex items-center gap-2">
              <Chrome className="h-5 w-5" />
              Add to Chrome – It’s Free
            </Button>
            <Button
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 flex items-center gap-2"
            >
              <PlayCircle className="h-5 w-5" />
              See 2-Second Demo
            </Button>
          </div>
          <div className="rounded-full bg-white/15 border border-white/20 px-5 py-3 flex items-center gap-3 max-w-md">
            <Search className="h-4 w-4" />
            <span className="text-sm">{queries[currentQuery]}</span>
          </div>
        </motion.div>

        <div className="space-y-6">
          <SpeedComparison />
          <div className="rounded-3xl bg-white/10 border border-white/20 px-6 py-4 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">
              Extension preview
            </p>
            <p className="text-2xl font-semibold">Prefill AI lives in your toolbar</p>
            <p className="text-white/80 text-sm mt-2">
              Manual: 2–3 minutes • Prefill AI: 5-8 seconds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

