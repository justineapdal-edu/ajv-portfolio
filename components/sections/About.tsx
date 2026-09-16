"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const stats = [
  { value: "2+", label: "Years of craft" },
  { value: "40+", label: "Projects shipped" },
  { value: "3", label: "Creative disciplines" },
  { value: "100%", label: "Caffeine-driven" },
];

const milestones = [
  {
    id: "2019-first-code",
    year: "2019",
    kind: "Origin",
    title: "First code, first edit",
    place: "Self-taught · Home studio",
    desc: "Fell into the craft through web tutorials and a cracked copy of Premiere. Built the first site, cut the first reel — and never looked back.",
  },
  {
    id: "2022-2026",
    year: "2022",
    kind: "Education",
    title: "BS in Information Technology",
    place: "PUP San Juan",
    desc: "Grounded the creative work in solid engineering fundamentals — databases, networks, and systems thinking.",
  },
  {
    id: "2023-freelance",
    year: "2023",
    kind: "Experience",
    title: "Freelance web development",
    place: "Independent · Remote",
    desc: "Began shipping client sites end-to-end. Learned that the best products are equal parts engineering rigor and design taste.",
  },
  {
    id: "2024-graphic-design",
    year: "2024",
    kind: "Certification",
    title: "Graphic design specialization",
    place: "Certification program",
    desc: "Formalized the visual side — typography, color theory, brand systems — turning a side skill into a core discipline.",
  },
  {
    id: "2025-video-editor",
    year: "2025",
    kind: "Experience",
    title: "Video editor & motion designer",
    place: "Content studio",
    desc: "Cut reels, promos, and brand films while building the toolkit for motion design and color grading.",
  },
  {
    id: "2025-hackathon",
    year: "2025",
    kind: "Event",
    title: "Regional hackathon finalist",
    place: "Competition",
    desc: "Shipped a full product in 48 hours with a three-person team — design, code, and pitch.",
  },
  {
    id: "2026-open",
    year: "2026",
    kind: "Now",
    title: "Open for opportunities",
    place: "Remote · Worldwide",
    desc: "Looking for freelance projects and full-time roles where web, design, and video collide.",
  },
];

export function About() {
  return (
    <section id="about" className="relative border-t border-line/70 py-28 md:py-44">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="04"
          label="About"
          heading="Engineer by training. Storyteller by instinct."
        />

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
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

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-background p-6 md:p-8"
              >
                <p className="text-3xl font-semibold tracking-tight md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
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
                            <span className="font-mono text-xs text-accent">
                              {milestone.year}
                            </span>
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
