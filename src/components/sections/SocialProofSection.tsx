import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/features/TestimonialCard";
import { UniversityLogos } from "@/components/features/UniversityLogos";
import { Star } from "lucide-react";

export default function SocialProofSection() {
  return (
    <section id="social-proof" className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.3em]">
              Social proof
            </p>
            <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <span>4.8</span>
              <Star className="h-7 w-7 text-amber-400 fill-current" aria-hidden />
              <span className="text-base font-normal text-slate-600">
                (500+ reviews)
              </span>
            </h2>
          </div>
          <UniversityLogos />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

