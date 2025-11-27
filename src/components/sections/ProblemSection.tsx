import { AlertTriangle, CopyCheck, Timer } from "lucide-react";

const painPoints = [
  {
    icon: Timer,
    text: "Event full in 5 minutes while you're still typing",
  },
  {
    icon: CopyCheck,
    text: "Copying the same info across 20+ registration forms",
  },
  {
    icon: AlertTriangle,
    text: "Missing opportunities because others were faster",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="px-6 py-16 bg-[#F3F4F6]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold text-slate-900">You know this feeling…</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map((point) => {
            const Icon = point.icon;

            return (
              <div
                key={point.text}
                className="rounded-2xl bg-white p-6 shadow-md text-slate-700 space-y-3"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <p>{point.text}</p>
              </div>
            );
          })}
        </div>
        <p className="text-primary font-semibold">There’s a better way →</p>
      </div>
    </section>
  );
}

