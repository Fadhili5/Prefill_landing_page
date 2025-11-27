import { steps } from "@/data/steps";
import { StepCard } from "@/components/features/StepCard";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.3em]">
            How it works
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            Configure once. Prefill forever.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <StepCard
              key={step.id}
              index={step.id}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

