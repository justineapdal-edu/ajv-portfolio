"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  designProjects,
  videoProjects,
  webProjects,
  workTabs,
  type WorkTabId,
} from "@/data/projects";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WebProjectCard } from "@/components/work/WebProjectCard";
import { DesignMasonry } from "@/components/work/DesignMasonry";
import { VideoGrid } from "@/components/work/VideoGrid";

function PanelLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-6 flex items-center gap-4 md:mb-8">
      <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-muted">
        <span className="mr-1.5 text-accent">•</span>
        {index} / {label}
      </span>
      <span className="h-px flex-1 bg-line/60" />
    </div>
  );
}

export function WorkSection() {
  const [active, setActive] = useState<WorkTabId>("all");

  const panel = (() => {
    if (active === "web") {
      return (
        <div className="grid gap-8 md:grid-cols-2">
          {webProjects.map((project) => (
            <WebProjectCard key={project.id} project={project} />
          ))}
        </div>
      );
    }

    if (active === "design") {
      return <DesignMasonry projects={designProjects} />;
    }

    if (active === "video") {
      return <VideoGrid projects={videoProjects} />;
    }

    return (
      <div className="space-y-20 md:space-y-28">
        <section>
          <PanelLabel index="01" label="Web Development" />
          <div className="grid gap-8 md:grid-cols-2">
            {webProjects.map((project) => (
              <WebProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section>
          <PanelLabel index="02" label="Graphic Design" />
          <DesignMasonry projects={designProjects} />
        </section>

        <section>
          <PanelLabel index="03" label="Video Editing" />
          <VideoGrid projects={videoProjects} />
        </section>
      </div>
    );
  })();

  return (
    <section id="work" className="relative border-t border-line/70 py-28 md:py-44">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="02"
          label="Selected Work"
          heading="A body of work across code, pixels & frames."
          description="Filter by discipline to explore recent projects — production web builds, visual identities, and motion-driven video."
        />

        <div className="mb-10 flex flex-wrap items-center gap-1 border-b border-line/70 md:mb-14">
          {workTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                "relative px-4 py-3 font-mono text-[11px] uppercase tracking-[0.25em] transition-colors",
                active === tab.id
                  ? "text-foreground"
                  : "text-muted hover:text-foreground",
              )}
            >
              {tab.label}
              {active === tab.id && (
                <motion.span
                  layoutId="work-tab-indicator"
                  className="absolute inset-x-0 bottom-0 h-px bg-accent"
                  transition={{ duration: 0.4, ease: EASE }}
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            {panel}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
