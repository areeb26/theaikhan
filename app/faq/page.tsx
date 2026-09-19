import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
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
    <PageShell title="FAQ" eyebrow="AEO">
      <JsonLd data={faqPageJsonLd()} />
      <p className="-mt-6 text-mute">
        Quotable answers about {site.name} ({site.brand}).
      </p>
      <dl className="mt-10 space-y-6">
        {faqItems.map((item) => (
          <GlassPanel key={item.question} className="!p-6 sm:!p-8">
            <dt className="font-display text-lg font-semibold text-ink sm:text-xl">
              {item.question}
            </dt>
            <dd className="mt-3 leading-relaxed text-mute">{item.answer}</dd>
          </GlassPanel>
        ))}
      </dl>
    </PageShell>
  );
}
