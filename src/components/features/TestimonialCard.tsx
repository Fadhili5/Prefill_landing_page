import { Quote } from "lucide-react";

interface TestimonialCardProps {
  text: string;
  name: string;
  university: string;
}

export function TestimonialCard({ text, name, university }: TestimonialCardProps) {
  return (
    <div className="rounded-3xl bg-white p-6 border border-slate-200 shadow">
      <Quote className="h-6 w-6 text-primary mb-4" />
      <p className="text-slate-700 italic">“{text}”</p>
      <p className="mt-4 text-sm font-semibold text-slate-900">
        {name} · {university}
      </p>
    </div>
  );
}

