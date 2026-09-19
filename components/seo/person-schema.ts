import { site } from "@/content/site";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    alternateName: [site.brand, site.brandAlt],
    url: site.url,
    jobTitle: site.role,
    worksFor: {
      "@type": "Organization",
      name: site.company,
      url: site.links.twelvePilot,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    sameAs: site.sameAs,
    description: site.definition,
  };
}
