"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { site } from "@/data/site";
import { EASE } from "@/lib/motion";
import { AvailabilityPill } from "@/components/ui/AvailabilityPill";
import { Magnetic } from "@/components/ui/MagneticButton";
import { Marquee } from "@/components/ui/Marquee";

const marqueeItems = [
  "Web Development",
  "Graphic Design",
  "Video Editing",
  "Brand Identity",
  "Motion Graphics",
  "UI / UX",
  "Frontend Engineering",
];

function Line({ children, delay }: { children: ReactNode; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className="block"
        initial={{ y: reduce ? 0 : "110%", opacity: reduce ? 1 : 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const years = new Date().getFullYear() - site.established;

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      <div aria-hidden className="noise absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_72%)]" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[520px] rounded-full bg-[#22d3ee]/[0.05] blur-[110px]" />
      </div>

      <div
        aria-hidden
        className="absolute right-10 top-1/2 hidden -translate-y-1/2 rotate-90 font-mono text-[10px] uppercase tracking-[0.4em] text-muted/70 lg:block"
      >
        Portfolio — Est. {site.established}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-16 pt-32 md:px-8 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
        >
          <AvailabilityPill label={site.availability} />
        </motion.div>

        <h1 className="mt-10 text-[clamp(2.75rem,9vw,7.75rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
          <Line delay={0.05}>Web Developer.</Line>
          <Line delay={0.12}>Graphic Specialist.</Line>
          <Line delay={0.19}>
            Video Editor<span className="text-accent">.</span>
          </Line>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          className="mt-14 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end"
        >
          <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
            I design and build fast, editorial-grade digital products at the
            intersection of engineering and visual storytelling — from
            full-stack web applications to identities and motion-driven video.
          </p>
          <div className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted md:items-end">
            <span>{site.location}</span>
            <span>{site.email}</span>
            <span>{years}+ years of craft</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.62, ease: EASE }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-white"
            >
              View Selected Work
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:text-accent"
            >
              Let&apos;s Talk
              <ArrowUpRight className="size-4" />
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <Marquee
        items={marqueeItems}
        className="relative z-10 border-t border-line/70 py-5"
      />
    </section>
  );
}
