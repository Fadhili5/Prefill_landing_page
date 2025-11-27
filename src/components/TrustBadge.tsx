interface TrustBadgeProps {
  name: string;
}

export const TrustBadge = ({ name }: TrustBadgeProps) => {
  return (
    <div className="px-4 py-2 rounded-full border border-gray-200 bg-white text-slate-600 text-sm tracking-wide shadow-sm">
      {name}
    </div>
  );
};

