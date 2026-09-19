import { site } from "./site";

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  role?: string;
  stack?: string[];
  liveUrl?: string;
  proofUrl?: string;
  featured: boolean;
  stub?: boolean;
  caseStudy?: {
    sections: { heading: string; body: string }[];
  };
};

export const projects: Project[] = [
  {
    slug: "12pilot",
    title: "12Pilot",
    oneLiner:
      "LinkedIn outreach workspace — AI Outreach, prospecting, campaigns, Unibox, Content Hub.",
    role: "CTO & Cofounder",
    stack: ["SaaS", "AI outreach", "LinkedIn"],
    liveUrl: site.links.twelvePilot,
    proofUrl: site.links.twelvePilotAbout,
    featured: true,
    caseStudy: {
      sections: [
        {
          heading: "Product",
          body:
            "12Pilot is a LinkedIn outreach workspace built by Twelve Monday Technologies. It includes AI Outreach, prospecting, campaigns, Unibox, and Content Hub for teams running outbound on LinkedIn.",
        },
        {
          heading: "Role",
          body:
            "Areeb Ahmed Khan is CTO and Cofounder of 12Pilot, leading engineering and product direction for the platform.",
        },
        {
          heading: "Proof",
          body:
            "Team and leadership details are published on the official 12Pilot about page.",
        },
      ],
    },
  },
  {
    slug: "intezamtech",
    title: "IntezamTech",
    oneLiner:
      "AI apps, websites, ops (POS/inventory and related), and a large AI automation catalog.",
    role: "Builder / AI automation systems",
    stack: ["AI agents", "Ops systems", "Web products"],
    liveUrl: site.links.intezamtech,
    proofUrl: site.links.intezamAutomations,
    featured: true,
    caseStudy: {
      sections: [
        {
          heading: "Scope",
          body:
            "Work associated with IntezamTech spans AI applications, operational software (including POS/inventory-style systems), and a broad catalog of AI automations documented on the public AI automation pages.",
        },
        {
          heading: "Agents",
          body:
            "The automation catalog includes agents for support, enrichment, fulfillment, metadata, analysis, and email workflows. The home site highlights six; the full catalog lives on IntezamTech.",
        },
      ],
    },
  },
  {
    slug: "kit",
    title: "KIT",
    oneLiner: "3D keycap experience — selected build from portfolio work.",
    featured: true,
    stub: true,
    liveUrl: site.links.github,
    caseStudy: {
      sections: [
        {
          heading: "Overview",
          body:
            "KIT is a featured craft build (3D keycap) in the portfolio strip. Additional assets and a dedicated case study can be expanded in a later phase.",
        },
      ],
    },
  },
  {
    slug: "nora-veld",
    title: "Nora Veld",
    oneLiner: "Atelier-folio style site — selected client/craft build.",
    featured: true,
    stub: true,
    caseStudy: {
      sections: [
        {
          heading: "Overview",
          body:
            "Nora Veld / atelier-folio represents cinematic web craft in the builds chapter. Placeholder case — link and media to be added when public URLs are confirmed.",
        },
      ],
    },
  },
  {
    slug: "worktrack-pro",
    title: "WorkTrack Pro",
    oneLiner: "Work tracking product — featured in the builds chapter.",
    featured: true,
    stub: true,
    caseStudy: {
      sections: [
        {
          heading: "Overview",
          body:
            "WorkTrack Pro is among the products Areeb Ahmed Khan has built, alongside 12Pilot and IntezamTech-associated systems. This page is a light case stub until public product URLs and detail are added.",
        },
      ],
    },
  },
  {
    slug: "ai-hr",
    title: "AI HR",
    oneLiner: "HR tooling with biometric attendance — featured build.",
    featured: true,
    stub: true,
    caseStudy: {
      sections: [
        {
          heading: "Overview",
          body:
            "AI HR covers HR workflows including biometric attendance, listed among products in the FAQ and builds chapter. Stub case study — expand when public detail is available.",
        },
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectSlugs = projects.map((p) => p.slug);
