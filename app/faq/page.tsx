import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageScrollMotion } from "@/components/motion/PageScrollMotion";
import { PageShell } from "@/components/layout/PageShell";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { faqItems } from "@/content/faq";
import { pageTitle, site } from "@/content/site";

export const metadata: Metadata = {
  title: pageTitle("FAQ"),
  description:
    "Frequently asked questions about Areeb Ahmed Khan (The Ai Khan), 12Pilot, and how to work together.",
};

function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export default function FaqPage() {
  return (
    <PageScrollMotion>
    <PageShell title="FAQ" eyebrow={site.brand}>
      <JsonLd data={faqPageJsonLd()} />
      <dl className="space-y-6">
        {faqItems.map((item) => (
          <GlassPanel key={item.question}>
            <dt className="font-display text-xl font-semibold sm:text-2xl">{item.question}</dt>
            <dd className="mt-4 leading-relaxed text-mute">{item.answer}</dd>
          </GlassPanel>
        ))}
      </dl>
    </PageShell>
    </PageScrollMotion>
  );
}
