"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { WebProject } from "@/data/projects";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { GithubIcon } from "@/components/ui/icons";

function MockContent({ project }: { project: WebProject }) {
  return (
    <div className="absolute inset-0 flex flex-col gap-3 p-5 md:p-7">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">
          {project.tags[0]}
        </span>
        <div className="flex gap-2">
          <span className="h-2 w-10 rounded bg-white/20" />
          <span className="h-2 w-10 rounded bg-white/20" />
          <span className="h-2 w-10 rounded bg-white/20" />
        </div>
      </div>
      <div className="mt-8">
        <div className="h-4 w-3/4 rounded bg-white/25" />
        <div className="mt-2 h-4 w-1/2 rounded bg-white/15" />
      </div>
      <div className="mt-auto grid grid-cols-3 gap-3">
        <span className="aspect-[4/3] rounded bg-white/10" />
        <span className="aspect-[4/3] rounded bg-white/10" />
        <span className="aspect-[4/3] rounded bg-white/10" />
      </div>
    </div>
  );
}

export function WebProjectCard({ project }: { project: WebProject }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-300 group-hover:border-neutral-700">
        <div className="flex items-center gap-2 border-b border-line/70 bg-background/60 px-4 py-3">
          <span className="size-2 rounded-full bg-[#ff5f57]" />
          <span className="size-2 rounded-full bg-[#febc2e]" />
          <span className="size-2 rounded-full bg-[#28c840]" />
          <span className="ml-3 flex-1 truncate rounded-md bg-line/50 px-3 py-1 font-mono text-[10px] text-muted">
            {project.liveUrl ?? "localhost:3000"}
          </span>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.accent[0]}1f, ${project.accent[1]}26)`,
            }}
          />
          <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

          {project.screenshot ? (
            <ImageWithFallback
              src={project.screenshot}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              fallback={<MockContent project={project} />}
            />
          ) : (
            <MockContent project={project} />
          )}

          <div className="absolute left-3 top-3 rounded-full border border-line/80 bg-background/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-muted backdrop-blur-sm">
            {project.year}
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-lg font-medium tracking-tight md:text-xl">
            {project.title}
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            {project.tags.length} skills
          </span>
        </div>

        <p className="text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 pt-1">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground transition-colors hover:text-accent"
            >
              Live Preview
              <ArrowUpRight className="size-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground transition-colors hover:text-accent"
            >
              <GithubIcon className="size-3.5" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
