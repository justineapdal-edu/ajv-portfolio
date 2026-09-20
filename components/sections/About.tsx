"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import Image from "next/image";
import { cn } from "@/lib/utils";

const milestones = [
  {
    id: "education-2022-b",
    period: "September 2020 – April 2022",
    year: "2022",
    kind: "Part-time",
    title: "Digital Marketing Specialist",
    place: "Henceforth Group of Companies",
    desc: "Responsible for planning and executing digital marketing strategies to support brand awareness and audience engagement",
  },
  {
    id: "internship-2026-b",
    period: "February – June",
    year: "2026",
    kind: "Internship",
    title: "Software Developer Intern",
    place: "Golden Suntech Solutions Inc.",
    desc: "Responsible for developing and maintaining Odoo Modules, collaborating with cross-functional teams to deliver high-quality software solutions.",
  },
  {
    id: "education-2022",
    period: "September",
    year: "2026",
    kind: "Education",
    title: "BS in Information Technology",
    place: "PUP San Juan",
    desc: "Grounded the creative work in solid engineering fundamentals — databases, networks, and systems thinking.",
  },

];

export function About() {
  return (
    <section id="about" className="relative border-t border-line/70 py-28 md:py-44">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-stretch md:gap-16">
          <div>
            <SectionHeading
              index="04"
              label="About"
              heading="Engineer by training. Storyteller by instinct."
            />
            <div className="space-y-6">
              <Reveal>
                <p className="text-lg leading-relaxed text-foreground/90">
                  I&apos;m Justine — a web developer, graphic specialist, and
                  video editor based in the Philippines. My background is in
                  Information Technology, but my work lives at the intersection
                  of clean code, sharp design, and motion.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="text-base leading-relaxed text-muted">
                  Whether it&apos;s a fast Next.js application, a visual identity
                  that gives a brand a voice, or a reel that keeps people
                  watching, I bring the same standard: detail, discipline, and a
                  genuine obsession with the final experience.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.12} className="h-full">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-line bg-surface/40 md:aspect-auto md:h-full">
              <Image
                src="/portrait-ajv.jpg"
                alt="Portrait of Justine Apdal"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-24 md:mt-32">
          <Reveal className="mb-12 flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-muted">
              <span className="mr-1.5 text-accent">•</span>
              Timeline / Milestones
            </span>
            <span className="h-px flex-1 bg-line/60" />
          </Reveal>

          <Stagger className="relative">
            <div className="absolute bottom-2 left-1/2 top-2 hidden w-px -translate-x-1/2 bg-line md:block" />
            <div className="absolute bottom-2 left-[7px] top-2 w-px bg-line md:hidden" />
            <div className="space-y-10 md:space-y-0">
              {milestones.map((milestone, i) => {
                const left = i % 2 === 0;
                return (
                  <StaggerItem key={milestone.id}>
                    <div className="relative md:grid md:grid-cols-2 md:py-8">
                      <span className="absolute left-0 top-1.5 z-10 grid size-4 place-items-center rounded-full border border-line bg-background md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                        <span className="size-1.5 rounded-full bg-accent" />
                      </span>
                      <div
                        className={cn(
                          "pl-10 md:pl-0",
                          left
                            ? "md:col-start-1 md:flex md:justify-end md:pr-16"
                            : "md:col-start-2 md:pl-16",
                        )}
                      >
                        <div className={cn("md:max-w-md", left && "md:text-right")}>
                          <div
                            className={cn(
                              "flex flex-wrap items-center gap-3",
                              left && "md:justify-end",
                            )}
                          >
                            <div className="flex flex-col leading-none">
                              <span className="font-mono text-xs text-accent">
                                {milestone.year}
                              </span>
                              <span className="mt-0.5 font-mono text-[11px] tracking-[0.2em] text-muted">
                                {milestone.period}
                              </span>
                            </div>
                            <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                              {milestone.kind}
                            </span>
                          </div>
                          <h4 className="mt-2 text-lg font-medium tracking-tight md:text-xl">
                            {milestone.title}
                          </h4>
                          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                            {milestone.place}
                          </p>
                          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                            {milestone.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
