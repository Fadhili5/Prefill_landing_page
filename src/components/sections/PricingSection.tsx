import { Button } from "@/components/ui/button";
import { Chrome, CheckCircle2 } from "lucide-react";

const benefits = [
  "Unlimited form fills",
  "Works with Chrome, Edge, Firefox",
  "URL pre-loading",
  "On-device privacy",
];

export default function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-16 bg-white">
      <div className="max-w-3xl mx-auto bg-slate-50 rounded-3xl shadow-xl border border-slate-200 p-10 text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">
          Start winning the registration race
        </h2>
        <p className="text-5xl font-bold text-primary">Free forever</p>
        <p className="text-slate-600">No credit card required • Unlimited form fills</p>
        <div className="flex flex-col gap-2 text-slate-600">
          {benefits.map((item) => (
            <div key={item} className="flex items-center gap-2 justify-center">
              <CheckCircle2 className="h-4 w-4 text-secondary" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <Button
          size="lg"
          className="bg-primary text-white hover:bg-primary/90 flex items-center gap-2 justify-center w-full sm:w-auto mx-auto"
        >
          <Chrome className="h-5 w-5" />
          Add to Chrome now
        </Button>
        <p className="text-sm text-slate-500">
          Available for Chrome • Edge • Firefox
        </p>
      </div>
    </section>
  );
}

