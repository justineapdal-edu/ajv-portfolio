"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Image as ImageIcon, Palette, Share2 } from "lucide-react";
import { useState } from "react";
import type { DesignProject } from "@/data/projects";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { cn } from "@/lib/utils";
import { Lightbox } from "./Lightbox";

const kindIcon = {
  "Brand Identity": Palette,
  "Social Media": Share2,
  Poster: ImageIcon,
} as const;

const aspectClass = {
  tall: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[4/3]",
} as const;

export function DesignMasonry({
  projects,
  className,
}: {
  projects: DesignProject[];
  className?: string;
}) {
  const [active, setActive] = useState<DesignProject | null>(null);

  return (
    <>
      <div
        className={cn(
          "columns-1 gap-4 sm:columns-2 lg:columns-3",
          className,
        )}
      >
        {projects.map((project) => {
          const Icon = kindIcon[project.kind];
          return (
            <motion.button
              key={project.id}
              onClick={() => setActive(project)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className={cn(
                "group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-line bg-surface text-left transition-colors duration-300 hover:border-accent/50",
                aspectClass[project.aspect],
              )}
              aria-label={`Open ${project.title}`}
            >
              {project.image ? (
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  fallback={
                    <Placeholder project={project} Icon={Icon} />
                  }
                />
              ) : (
                <Placeholder project={project} Icon={Icon} />
              )}
            </motion.button>
          );
        })}
      </div>

      <Lightbox project={active} onClose={() => setActive(null)} />
    </>
  );
}

function Placeholder({
  project,
  Icon,
}: {
  project: DesignProject;
  Icon: (typeof kindIcon)[keyof typeof kindIcon];
}) {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, ${project.accent[0]}33, ${project.accent[1]}1a)`,
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
            {project.kind}
          </span>
          <Icon className="size-4 text-white/60 transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className="flex items-end justify-between gap-3">
          <span className="text-xl font-medium leading-tight tracking-tight md:text-2xl">
            {project.title}
          </span>
          <ArrowUpRight className="size-4 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
      </div>
    </>
  );
}
