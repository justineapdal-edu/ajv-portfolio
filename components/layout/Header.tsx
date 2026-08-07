"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { AvailabilityPill } from "@/components/ui/AvailabilityPill";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/70 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center border border-line bg-surface/60 font-mono text-sm font-medium tracking-tight transition-colors group-hover:border-accent/60 group-hover:text-accent">
            {site.initials}
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:block">
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-mono text-[11px] uppercase tracking-[0.25em] text-muted transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <AvailabilityPill className="hidden lg:inline-flex" />
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-colors hover:bg-accent hover:text-white sm:inline-flex"
          >
            Let&apos;s Talk
            <ArrowUpRight className="size-3.5" />
          </a>
          <button
            className="grid size-9 place-items-center border border-line text-foreground md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <div className="flex h-16 items-center justify-between border-b border-line/70 px-5">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
                Menu
              </span>
              <button
                className="grid size-9 place-items-center border border-line"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-4" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center px-5">
              {site.nav.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: EASE }}
                  className="group flex items-center justify-between border-b border-line/60 py-5"
                >
                  <span className="text-3xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                    {link.label}
                  </span>
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                </motion.a>
              ))}
            </nav>

            <div className="flex flex-col gap-4 px-5 pb-8">
              <AvailabilityPill className="self-start" />
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                {site.email}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
