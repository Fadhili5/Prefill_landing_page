import { motion } from "framer-motion";

export function SpeedComparison() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl space-y-4">
      <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.3em]">
        Manual vs Prefill AI
      </p>
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-slate-700">Manual filling</span>
            <span className="text-rose-500 font-semibold">2–3 minutes</span>
          </div>
          <div className="h-2 rounded-full bg-slate-100 mt-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "95%" }}
              transition={{ duration: 1 }}
              className="h-full rounded-full bg-rose-200"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-slate-700">Prefill AI</span>
            <span className="text-emerald-500 font-semibold">5-8 seconds</span>
          </div>
          <div className="h-2 rounded-full bg-slate-100 mt-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "15%" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full rounded-full bg-emerald-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

