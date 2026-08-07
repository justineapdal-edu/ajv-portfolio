"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

interface SectionHeadingProps {
  index: string;
  label: string;
  heading?: ReactNode;
  description?: ReactNode;
  className?: string;
}

export function SectionHeading({
  index,
  label,
  heading,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-14 md:mb-20", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex items-center gap-4 border-t border-line/70 pt-5"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-muted">
          <span className="mr-1.5 text-accent">•</span>
          {index} / {label}
        </span>
        <span className="h-px flex-1 bg-line/70" />
      </motion.div>

      {heading && (
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
          className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl"
        >
          {heading}
        </motion.h2>
      )}

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
