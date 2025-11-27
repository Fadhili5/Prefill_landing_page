import { FeatureCard } from "@/components/features/FeatureCard";
import { Zap, Brain, Shield, Link2 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Field Matching",
    description:
      "Smart AI analyzes each form and maps your data to the right fields—even when layouts change.",
  },
  {
    icon: Link2,
    title: "Pre-loaded URLs",
    description:
      "Save your most important forms. When registration opens, Prefill AI is one click away.",
  },
  {
    icon: Zap,
    title: "Instant Fill",
    description:
      "Fill entire forms in under two seconds so you never miss limited seats again.",
  },
  {
    icon: Shield,
    title: "Data Security",
    description:
      "Your profile stays local with encryption. No sensitive data ever touches our servers.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-16 bg-[#F3F4F6]">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.3em]">
            Key Features
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            Built for students who compete
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

