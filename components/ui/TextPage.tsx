import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

interface TextPageProps {
  index: string;
  label: string;
  title: string;
  updated?: string;
  children: ReactNode;
}

export function TextPage({ index, label, title, updated, children }: TextPageProps) {
  return (
    <section className="relative border-t border-line/70 pb-28 pt-32 md:pt-44">
      <div className="mx-auto w-full max-w-3xl px-5 md:px-8">
        <div className="flex items-center gap-4 border-t border-line/70 pt-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-muted">
            <span className="mr-1.5 text-accent">•</span>
            {index} / {label}
          </span>
          <span className="h-px flex-1 bg-line/70" />
        </div>

        <h1 className="mt-10 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl">
          {title}
        </h1>

        {updated && (
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            Last updated — {updated}
          </p>
        )}

        <div className="mt-14 space-y-10 text-base leading-relaxed text-muted md:text-[17px] md:leading-relaxed">
          {children}
        </div>

        <Link
          href="/"
          className="mt-16 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-accent transition-opacity hover:opacity-70"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>
      </div>
    </section>
  );
}

export function PageSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}