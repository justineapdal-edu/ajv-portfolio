import type { Metadata } from "next";
import { TextPage, PageSection } from "@/components/ui/TextPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions — Justine Apdal",
  description:
    "The terms governing contact form submissions and project inquiries made through this portfolio site.",
};

export default function TermsPage() {
  return (
    <TextPage
      index="07"
      label="Terms"
      title="Terms & Conditions"
      updated="September 21, 2026"
    >
      <PageSection title="1. Using This Site">
        <p>
          By accessing this website, you agree to be bound by these Terms and
          Conditions. If you do not agree with any part of these terms, please
          do not use the site.
        </p>
      </PageSection>

      <PageSection title="2. Use of Content">
        <p>
          All content on this site — including code, design, graphics, text, and
          media — is the property of Justine Apdal unless otherwise noted. You
          may not copy, reproduce, redistribute, or use this content for
          commercial purposes without prior written permission.
        </p>
      </PageSection>

      <PageSection title="3. Contact Form Submissions">
        <p>
          Submitting the contact form does not create a binding agreement.
          Information submitted is used to respond to your inquiry as described
          in the{" "}
          <a className="text-accent hover:underline" href="/privacy">
            Privacy Policy
          </a>
          . Contracts for work are formed only upon execution of a written
          proposal or agreement between both parties. Scope, deliverables,
          timelines, and pricing are defined exclusively in the terms of that
          agreement.
        </p>
      </PageSection>

      <PageSection title="4. Your Responsibilities">
        <p>
          You agree that the information you submit is accurate and that you
          will not use the contact form to send unlawful, harassing, or
          misleading content.
        </p>
      </PageSection>

      <PageSection title="5. Disclaimer">
        <p>
          This site is provided &quot;as is&quot; without warranties of any kind, express
          or implied. While I aim for accuracy, I do not guarantee that the site
          is error-free, uninterrupted, or free from technical faults.
        </p>
      </PageSection>

      <PageSection title="6. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, Justine Apdal shall not be
          liable for any indirect, incidental, or consequential damages arising
          from the use of, or inability to use, this website.
        </p>
      </PageSection>

      <PageSection title="7. Governing Law">
        <p>
          These terms are governed by the laws of the Republic of the
          Philippines, and any disputes shall be subject to the exclusive
          jurisdiction of its courts.
        </p>
      </PageSection>

      <PageSection title="8. Contact">
        <p>
          Questions about these terms can be directed to{" "}
          <a
            className="text-accent hover:underline"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
          .
        </p>
      </PageSection>
    </TextPage>
  );
}