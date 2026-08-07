"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Download,
  Mail,
  Send,
} from "lucide-react";
import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { site } from "@/data/site";
import { EASE } from "@/lib/motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/icons";

const inputClass =
  "w-full border-b border-line bg-transparent py-3 text-sm text-foreground transition-colors placeholder:text-muted/50 focus:border-accent focus:outline-none";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}

const initialForm = {
  name: "",
  email: "",
  type: "",
  budget: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setError(null);

    const subject = encodeURIComponent(
      `Project inquiry — ${form.type || "General"} from ${form.name}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Project Type: ${form.type || "Not specified"}`,
        `Budget: ${form.budget || "Not specified"}`,
        ``,
        `Message:`,
        form.message,
      ].join("\n"),
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative border-t border-line/70 py-28 md:py-44">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="05"
          label="Let's Connect"
          heading="Let's build something together."
          description="Have a project, a role, or just an idea worth exploring? Drop a message — I usually reply within 24 hours."
        />

        <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          <div className="flex flex-col gap-8">
            <motion.a
              href={`mailto:${site.email}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="group inline-flex w-fit items-center gap-3 text-xl font-medium tracking-tight transition-colors hover:text-accent md:text-2xl"
            >
              <Mail className="size-5 text-accent" />
              {site.email}
              <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
            >
              <a
                href={site.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-accent/60 hover:text-accent"
              >
                <Download className="size-4" />
                Download Résumé
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.14, ease: EASE }}
              className="mt-2 flex gap-3"
            >
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid size-11 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent/60 hover:text-accent"
                >
                  <SocialIcon name={social.label} className="size-4" />
                </a>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="max-w-xs font-mono text-[11px] uppercase leading-loose tracking-[0.2em] text-muted"
            >
              {site.availability}
              <br />
              {site.location}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-xl border border-accent/40 bg-accent/[0.06] p-10 text-center">
                <span className="grid size-12 place-items-center rounded-full bg-accent text-white">
                  <Check className="size-5" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                  Email draft opened
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                  Your message is ready in your mail client. Hit send and I&apos;ll
                  get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm(initialForm);
                  }}
                  className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-accent hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-8 rounded-xl border border-line/70 bg-surface/40 p-6 md:p-8"
                noValidate
              >
                <div className="grid gap-8 md:grid-cols-2">
                  <Field label="Name">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={inputClass}
                      required
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={inputClass}
                      required
                    />
                  </Field>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <Field label="Project Type">
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none`}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>Web Development</option>
                      <option>Graphic Design</option>
                      <option>Video Editing</option>
                      <option>Something else</option>
                    </select>
                  </Field>
                  <Field label="Budget">
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none`}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      <option>Under $1,000</option>
                      <option>$1,000 — $5,000</option>
                      <option>$5,000+</option>
                      <option>Not sure yet</option>
                    </select>
                  </Field>
                </div>

                <Field label="Message">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project, timeline, and goals..."
                    className={`${inputClass} resize-none`}
                    required
                  />
                </Field>

                {error && (
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-white"
                >
                  Send Message
                  <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
