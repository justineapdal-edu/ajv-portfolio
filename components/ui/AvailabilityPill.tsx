import { cn } from "@/lib/utils";

export function AvailabilityPill({
  className,
  label = "Available",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <span
      title="Available for freelance & full-time work"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-muted",
        className,
      )}
    >
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
      </span>
      {label}
    </span>
  );
}
