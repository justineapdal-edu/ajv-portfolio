import type { Metadata } from "next";
import { TextPage, PageSection } from "@/components/ui/TextPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Justine Apdal",
  description:
    "How Justine Apdal collects, uses, and protects your information when you use this portfolio site and its contact form.",
};

export default function PrivacyPage() {
  return (
    <TextPage
      index="06"
      label="Privacy Policy"
      title="Privacy Policy"
      updated="September 21, 2026"
    >
      <PageSection title="1. Introduction">
        <p>
          This Privacy Policy explains what information is collected when you
          visit this portfolio site and use its contact form, how it is used,
          and the choices you have. By using this site, you agree to the
          practices described below.
        </p>
      </PageSection>

      <PageSection title="2. Information I Collect">
        <p>
          <strong className="text-foreground">Contact form.</strong> When you
          submit the contact form, I receive your name, email address, and the
          contents of your message. This information is used solely to respond
          to your inquiry.
        </p>
        <p>
          <strong className="text-foreground">Usage data.</strong> This site
          does not use cookies or third-party analytics for advertising. Your
          hosting provider may record standard, anonymized server logs (such as
          IP address and request metadata) as necessary to operate and secure
          the site.
        </p>
      </PageSection>

      <PageSection title="3. How Your Data Is Processed">
        <p>
          Contact form submissions are transmitted over HTTPS and delivered to
          my inbox through Resend, a third-party email delivery service.
          Resend processes your message only to transmit it and does not use
          your data for its own purposes. By submitting the form you consent to
          this processing.
        </p>
      </PageSection>

      <PageSection title="4. Data Retention">
        <p>
          Messages are retained only as long as needed to address your inquiry
          and any follow-ups, or as required by applicable law. You may request
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