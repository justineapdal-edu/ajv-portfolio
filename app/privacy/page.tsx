import type { Metadata } from "next";
import { TextPage, PageSection } from "@/components/ui/TextPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Justine Apdal",
  description:
    "How Justine Apdal collects, uses, and protects your information when you use the contact form on this portfolio site.",
};

export default function PrivacyPage() {
  return (
    <TextPage
      index="06"
      label="Privacy Policy"
      title="Privacy Policy"
      updated="September 21, 2026"
    >
      <PageSection title="1. What This Policy Covers">
        <p>
          This policy explains how your information is handled when you use the
          contact form on this site. This site does not use cookies or tracking
          scripts, and nothing is collected automatically while you browse.
        </p>
      </PageSection>

      <PageSection title="2. Information You Submit">
        <p>
          When you submit the contact form, I receive your name, your email
          address, and the contents of your message. This information is used
          solely to respond to your inquiry and any follow-up conversation.
        </p>
      </PageSection>

      <PageSection title="3. How Your Message Is Delivered">
        <p>
          Form submissions are sent over HTTPS to a server route on this site,
          which forwards the message to my inbox through Resend, a third-party
          email delivery service. Resend receives your message only to transmit
          it and does not use it for its own purposes.
        </p>
      </PageSection>

      <PageSection title="4. Data Retention">
        <p>
          Messages are kept only as long as needed to address your inquiry and
          any follow-ups, or as required by applicable law. You may request
          deletion of your correspondence at any time at{" "}
          <a
            className="text-accent hover:underline"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
          .
        </p>
      </PageSection>

      <PageSection title="5. Your Rights">
        <p>
          Depending on your location, you may have the right to access, correct,
          or delete the personal data I hold about you, and to withdraw consent
          to processing. To exercise any of these rights, contact me at{" "}
          <a
            className="text-accent hover:underline"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
          .
        </p>
      </PageSection>

      <PageSection title="6. Third-Party Links">
        <p>
          This site contains links to external services, including social media
          profiles. I am not responsible for the privacy practices of these
          third parties.
        </p>
      </PageSection>

      <PageSection title="7. Changes to This Policy">
        <p>
          I may update this policy from time to time. Any changes will be posted
          on this page with a revised &quot;last updated&quot; date.
        </p>
      </PageSection>
    </TextPage>
  );
}