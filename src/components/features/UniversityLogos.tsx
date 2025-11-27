const universities = ["HKU", "CUHK", "HKUST", "PolyU", "CityU", "HKBU"];

export function UniversityLogos() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {universities.map((uni) => (
        <div
          key={uni}
          className="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm text-slate-600 shadow-sm"
        >
          {uni}
        </div>
      ))}
    </div>
  );
}

