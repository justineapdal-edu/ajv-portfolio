import type { Metadata } from "next";
import { TextPage, PageSection } from "@/components/ui/TextPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ — Justine Apdal",
  description:
    "Frequently asked questions about working with Justine Apdal on web development, graphic design, and video editing projects.",
};

const faqs = [
  {
    q: "What services do you offer?",
    a: "I work across web development (fast, accessible Next.js / React sites), graphic design (logos, brand identities, social assets), and video editing (edits, motion graphics, and reels). Many projects blend two or all three.",
  },
  {
    q: "How does the process work?",
    a: "It starts with a conversation about your goals. From there I send a short proposal outlining scope, deliverables, and timeline. Once agreed, I build, send drafts for feedback, and refine until you're happy — then hand over final files with documentation where relevant.",
  },
  {
    q: "How long does a typical project take?",
    a: "A landing page or brand identity usually takes 1–3 weeks, while larger or multi-service projects can run longer. You'll get a clear timeline in the proposal before any work begins.",
  },
  {
    q: "How much does a project cost?",
    a: "Pricing depends on scope and complexity, so I quote per project rather than publishing flat rates. Reach out through the contact form with a rough idea of what you need and I'll come back with a tailored estimate.",
  },
  {
    q: "Do you work with clients outside the Philippines?",
    a: "Yes — I work remotely with clients around the world and regularly coordinate across time zones.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Usually just your goals, any references or content you already have, and brand assets if they exist. I can help shape the rest with you.",
  },
  {
    q: "How can I contact you?",
    a: (
      <>
        The quickest way is the contact form on this site. You can also email me
        directly at{" "}
        <a
          className="text-accent hover:underline"
          href={`mailto:${site.email}`}
        >
          {site.email}
        </a>
        .
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <TextPage
      index="08"
      label="FAQ"
      title="Frequently Asked Questions"
      updated="September 21, 2026"
    >
      <PageSection title="Work & Process">
        {faqs.map((faq) => (
          <div key={faq.q}>
            <h3 className="font-medium tracking-tight text-foreground">
              {faq.q}
            </h3>
            <p className="mt-2">{faq.a}</p>
          </div>
        ))}
      </PageSection>
    </TextPage>
  );
}