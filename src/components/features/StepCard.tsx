interface StepCardProps {
  index: number;
  title: string;
  description: string;
}

export function StepCard({ index, title, description }: StepCardProps) {
  return (
    <div className="relative rounded-3xl bg-white p-6 shadow-lg border border-slate-200">
      <span className="absolute -top-4 left-6 text-xs uppercase tracking-[0.4em] text-primary">
        Step {index}
      </span>
      <div className="mt-4 space-y-3">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

