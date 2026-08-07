"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { VideoProject } from "@/data/projects";
import { EASE } from "@/lib/motion";

interface VideoModalProps {
  project: VideoProject | null;
  onClose: () => void;
}

export function VideoModal({ project, onClose }: VideoModalProps) {
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
            className="absolute inset-0 bg-background/85 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close video"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="relative w-full max-w-4xl"
          >
            <div className="overflow-hidden rounded-xl border border-line bg-black">
              {project.videoUrl ? (
                <video
                  controls
                  autoPlay
                  playsInline
                  poster={project.thumbnail}
                  className="aspect-video w-full"
                  preload="none"
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="relative aspect-video w-full overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(140deg, ${project.accent[0]}40, ${project.accent[1]}1f)`,
                    }}
                  />
                  <div className="absolute inset-0 bg-grid opacity-50" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                    <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted">
                      {project.format} · {project.duration}
                    </span>
                    <span className="max-w-lg text-xl font-medium tracking-tight md:text-2xl">
                      {project.title}
                    </span>
                    <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted/70">
                      Add an .mp4 and set videoUrl to enable playback
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  {project.format} · {project.duration}
                </p>
                <h3 className="mt-1 text-xl font-medium tracking-tight">
                  {project.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-line/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={onClose}
                className="grid size-10 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                aria-label="Close video"
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
