import { useMemo } from "react";

export function SpiceParticles({ count = 18 }: { count?: number }) {
  const parts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        size: 2 + Math.random() * 5,
        duration: 12 + Math.random() * 18,
        delay: Math.random() * -20,
        hue: Math.random() > 0.5 ? "var(--saffron)" : "var(--spice-red)",
        opacity: 0.3 + Math.random() * 0.4,
        key: i,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {parts.map((p) => (
        <span
          key={p.key}
          className="absolute rounded-full animate-float-up"
          style={{
            left: `${p.left}%`,
            bottom: 0,
            width: p.size,
            height: p.size,
            background: p.hue,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            filter: "blur(0.5px)",
            boxShadow: `0 0 6px ${p.hue}`,
          }}
        />
      ))}
    </div>
  );
}
