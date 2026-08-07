"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import type { DesignProject } from "@/data/projects";
import { EASE } from "@/lib/motion";

interface LightboxProps {
  project: DesignProject | null;
  onClose: () => void;
}

export function Lightbox({ project, onClose }: LightboxProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close preview"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="relative w-full max-w-3xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-surface">
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(160deg, ${project.accent[0]}3d, ${project.accent[1]}1f)`,
                }}
              />
              <div className="absolute inset-0 bg-grid opacity-60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted">
                  {project.kind}
                </span>
                <span className="max-w-md text-3xl font-semibold tracking-tight md:text-5xl">
                  {project.title}
                </span>
                <ArrowUpRight className="size-6 text-accent" />
              </div>
            </div>

            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  {project.kind}
                </p>
                <h3 className="mt-1 text-xl font-medium tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                  {project.blurb}
                </p>
              </div>
              <button
                onClick={onClose}
                className="grid size-10 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Close preview"
              >
                <X className="size-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
