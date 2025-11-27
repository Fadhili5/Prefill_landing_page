interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center space-y-1">
      <p className="text-4xl font-bold text-white">{value}</p>
      <p className="text-white/80">{label}</p>
    </div>
  );
}

