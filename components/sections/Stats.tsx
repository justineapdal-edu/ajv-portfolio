const stats = [
  { value: "2+", label: "Years of craft" },
  { value: "40+", label: "Projects shipped" },
  { value: "3", label: "Creative disciplines" },
  { value: "100%", label: "Caffeine-driven" },
];

export function Stats() {
  return (
    <section className="border-t border-line/70 py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden bg-line md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 bg-background px-6 py-8 text-center md:py-10"
            >
              <p className="text-3xl font-semibold tracking-tight md:text-5xl">
                {stat.value}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}