export function ParticleBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(40)].map((_, idx) => (
        <div
          key={idx}
          className="absolute w-1 h-1 rounded-full bg-white/40 animate-ping"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 4 + 2}s`,
          }}
        />
      ))}
    </div>
  );
}

