"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

interface CustomSelectProps {
  name: string;
  value: string;
  options: string[];
  placeholder: string;
  onChange: (name: string, value: string) => void;
  className?: string;
}

export function CustomSelect({
  name,
  value,
  options,
  placeholder,
  onChange,
  className,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "focus-line-only flex w-full items-center justify-between gap-3 border-b border-line bg-transparent py-3 text-sm transition-colors focus:border-accent focus:outline-none",
          open && "border-accent",
        )}
      >
        <span className={value ? "text-foreground" : "text-muted/50"}>
          {value || placeholder}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="text-muted"
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label={name}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-xl border border-line bg-surface/95 py-1.5 shadow-2xl shadow-black/40 backdrop-blur"
          >
            {options.map((option) => (
              <li key={option} role="option" aria-selected={value === option}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(name, option);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 px-4 py-2 text-left text-sm transition-colors hover:bg-white/[0.06]",
                    value === option ? "text-white" : "text-muted",
                  )}
                >
                  <span className={value === option ? "text-accent" : undefined}>
                    {option}
                  </span>
                  {value === option && <Check className="size-4 text-accent" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}