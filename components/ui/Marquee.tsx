import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const row = [...items, ...items];
  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <div className="animate-marquee inline-flex w-max items-center gap-8 will-change-transform">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-8 font-mono text-xs uppercase tracking-[0.3em] text-muted md:text-sm"
          >
            {item}
            <span className="text-accent">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
