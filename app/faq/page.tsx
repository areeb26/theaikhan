import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
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
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <JsonLd data={faqPageJsonLd()} />
      <h1 className="font-display text-4xl font-bold">FAQ</h1>
      <p className="mt-4 text-mute">
        Quotable answers about {site.name} ({site.brand}).
      </p>
      <dl className="mt-12 space-y-10">
        {faqItems.map((item) => (
          <div key={item.question}>
            <dt className="font-display text-xl font-semibold text-ink">
              {item.question}
            </dt>
            <dd className="mt-3 leading-relaxed text-mute">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </main>
  );
}
