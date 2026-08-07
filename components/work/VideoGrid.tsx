"use client";

import { motion } from "framer-motion";
import { Clock, Play } from "lucide-react";
import { useState } from "react";
import type { VideoProject } from "@/data/projects";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { cn } from "@/lib/utils";
import { VideoModal } from "./VideoModal";

export function VideoGrid({
  projects,
  className,
}: {
  projects: VideoProject[];
  className?: string;
}) {
  const [active, setActive] = useState<VideoProject | null>(null);

  return (
    <>
      <div
        className={cn(
          "grid gap-6 md:grid-cols-2",
          className,
        )}
      >
        {projects.map((project) => (
          <motion.button
            key={project.id}
            onClick={() => setActive(project)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="group relative block w-full overflow-hidden rounded-xl border border-line bg-surface text-left transition-colors duration-300 hover:border-accent/50"
            aria-label={`Play ${project.title}`}
          >
            <div className="relative aspect-video overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(140deg, ${project.accent[0]}2e, ${project.accent[1]}17)`,
                }}
              />
              <div className="absolute inset-0 bg-grid opacity-50" />

              {project.thumbnail ? (
                <ImageWithFallback
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  fallback={null}
                />
              ) : null}

              <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/0" />

              <span className="absolute left-3 top-3 rounded-full border border-line/80 bg-background/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground backdrop-blur-sm">
                {project.format}
              </span>
              <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-line/80 bg-background/70 px-2.5 py-1 font-mono text-[10px] text-muted backdrop-blur-sm">
                <Clock className="size-3" />
                {project.duration}
              </span>

              <div className="absolute inset-0 grid place-items-center">
                <span className="grid size-14 place-items-center rounded-full bg-accent text-white shadow-lg shadow-accent/30 transition-transform duration-300 group-hover:scale-110">
                  <Play className="size-5 fill-current" />
                </span>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-medium tracking-tight">
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
          </motion.button>
        ))}
      </div>

      <VideoModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
