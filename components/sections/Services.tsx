"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    id: "web",
    index: "01",
    title: "Web Development & Architecture",
    blurb:
      "End-to-end builds engineered for speed, scalability, and feel. From marketing sites to complex SaaS products, I ship production-grade code with clean architecture and obsessive performance budgets.",
    deliverables: [
      "Full-stack web applications",
      "E-commerce & SaaS platforms",
      "Design systems & UI engineering",
      "Performance, SEO & accessibility",
      "Headless CMS integrations",
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
  },
  {
    id: "design",
    index: "02",
    title: "Graphic Design & Visual Identity",
    blurb:
      "Identity systems and visual assets that give brands a distinct voice. Strategy-first design applied across logos, packaging, social media, and print — built to stay consistent everywhere it lives.",
    deliverables: [
      "Logo suites & brand guidelines",
      "Packaging & print collateral",
      "Social media content kits",
      "Art direction & poster design",
      "Presentation & deck design",
    ],
    tools: ["Figma", "Photoshop", "Illustrator", "InDesign"],
  },
  {
    id: "video",
    index: "03",
    title: "Video Editing & Motion Graphics",
    blurb:
      "Stories told in motion. From snappy social reels to full brand films, I edit to rhythm and emotion — adding motion design, color, and sound design that keeps viewers watching.",
    deliverables: [
      "Short-form reels & TikTok edits",
      "Brand films & promos",
      "Aftermovies & event coverage",
      "Motion graphics & kinetic type",
      "Color grading & audio cleanup",
    ],
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
  },
];

export function Services() {
  const [open, setOpen] = useState<string>("web");

  return (
    <section id="services" className="relative border-t border-line/70 py-28 md:py-44">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="03"
          label="What I Do"
          heading="Three crafts. One standard of care."
          description="Select a discipline to see how I work, what I deliver, and the tools behind each craft."
        />

        <div>
          {services.map((service) => {
            const isOpen = open === service.id;
            return (
              <div
                key={service.id}
                className="border-t border-line/70 last:border-b"
              >
                <button
                  onClick={() => setOpen(isOpen ? "" : service.id)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 py-8 text-left md:py-10"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-xs text-accent">
                      {service.index}
                    </span>
                    <h3
                      className={cn(
                        "text-xl font-medium tracking-tight transition-colors md:text-3xl",
                        isOpen
                          ? "text-foreground"
                          : "text-muted group-hover:text-foreground",
                      )}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="grid size-10 shrink-0 place-items-center rounded-full border border-line transition-colors group-hover:border-accent/60 group-hover:text-accent"
                  >
                    <Plus className="size-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 pb-10 md:grid-cols-2 md:pl-14">
                        <p className="max-w-md text-sm leading-relaxed text-muted">
                          {service.blurb}
                        </p>
                        <div>
                          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                            Deliverables
                          </p>
                          <ul className="space-y-2">
                            {service.deliverables.map((item) => (
                              <li
                                key={item}
                                className="flex items-baseline gap-3 text-sm text-foreground/90"
                              >
                                <span className="size-1 shrink-0 translate-y-[-1px] rounded-full bg-accent" />
                                {item}
                              </li>
                            ))}
                          </ul>
                          <p className="mb-3 mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                            Toolkit
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.tools.map((tool) => (
                              <span
                                key={tool}
                                className="rounded-full border border-line/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
