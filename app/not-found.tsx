import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center border-t border-line/70">
      <div className="mx-auto w-full max-w-3xl px-5 py-28 text-center md:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-muted">
          <span className="mr-1.5 text-accent">•</span>
          Error 404
        </p>
        <h1 className="mt-8 text-7xl font-semibold leading-[0.9] tracking-[-0.03em] md:text-9xl">
          404
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-muted md:text-xl">
          This page drifted off the grid. Let&apos;s get you back to something
          worth looking at.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-white"
        >
          <MoveLeft className="size-4" />
          Back to home
        </Link>
      </div>
    </section>
  );
}