import { stats } from "@/data/stats";
import { StatCard } from "@/components/features/StatCard";

export default function CompetitiveSection() {
  return (
    <section id="competitive" className="px-6">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-[#6366F1] to-[#0078D4] text-white p-10 shadow-xl space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">
            Hong Kong Advantage
          </p>
          <h2 className="text-4xl font-bold mt-2">In Hong Kong, speed = success</h2>
          <p className="text-white/80 mt-3">
            When events fill in minutes, every second matters. Prefill AI gives you the
            speed advantage for workshops, scholarships, and club sign-ups.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 text-center">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

