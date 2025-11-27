import { motion } from "framer-motion";

export function FormFillingDemo() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg space-y-4">
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>Prefill AI.io</span>
        <span>Secure</span>
      </div>
      <div className="space-y-3">
        {["Full name", "Email", "Student ID", "Phone"].map((field, index) => (
          <motion.div
            key={field}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500"
          >
            {field} ••••
          </motion.div>
        ))}
      </div>
    </div>
  );
}

