import { ArrowUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { site } from "@/data/site";
import { SocialIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto w-full max-w-7xl px-5 pb-10 pt-16 md:px-8 md:pt-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-3 text-2xl font-semibold tracking-tight transition-colors hover:text-accent md:text-4xl"
            >
              {site.email}
              <ArrowUpRight className="size-7 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:size-9" />
            </a>
            <div className="mt-8 flex gap-3">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/60 hover:text-accent"
                >
                  <SocialIcon name={social.label} className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:justify-items-end">
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                Menu
              </p>
              <ul className="space-y-3">
                {site.nav.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                Legal
              </p>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
                Socials
              </p>
              <ul className="space-y-3">
                {site.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line/70 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            © {new Date().getFullYear()} {site.name} — All rights reserved
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            Built with Next.js · Tailwind · Framer Motion
          </p>
          <Link
            href="/#top"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
          >
            <ArrowUp className="size-3" />
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
