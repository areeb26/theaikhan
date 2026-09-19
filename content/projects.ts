import { site } from "./site";
import { featuredAgents } from "./agents";

export type ProjectMetric = { label: string; value: string };

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
  heroMetric?: ProjectMetric;
  metrics?: ProjectMetric[];
  caseStudy?: {
    sections: { heading: string; body: string }[];
  };
  certificateProof?: {
    headline: string;
    app: string;
    automation: string;
    surfaces: string[];
    metrics: ProjectMetric[];
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
    heroMetric: { label: "Product", value: "LinkedIn outreach OS" },
    metrics: [
      { label: "Role", value: "CTO & Cofounder" },
      { label: "Parent", value: "12Monday Technologies" },
    ],
    caseStudy: {
      sections: [
        {
          heading: "What it is",
          body:
            "12Pilot is the LinkedIn outreach workspace from Twelve Monday Technologies — AI Outreach, prospecting, campaigns, Unibox, and Content Hub for teams running outbound on LinkedIn.",
        },
        {
          heading: "What I do there",
          body:
            "Areeb Ahmed Khan is CTO and Cofounder, leading engineering and product direction for the platform.",
        },
        {
          heading: "Verify",
          body:
            "Leadership and team details are on the official 12Pilot about page.",
        },
      ],
    },
  },
  {
    slug: "intezamtech",
    title: "IntezamTech",
    oneLiner:
      "AI apps, ops systems, and a large automation catalog — including certificate issuance at scale.",
    role: "Builder · AI automation systems",
    stack: ["AI agents", "Certificate automation", "Ops systems"],
    liveUrl: site.links.intezamtech,
    proofUrl: site.links.intezamAutomations,
    featured: true,
    heroMetric: { label: "Certificates issued", value: "3,400+" },
    metrics: [
      { label: "Issuance time", value: "15+ min → seconds" },
      { label: "Hours saved", value: "~850" },
    ],
    certificateProof: {
      headline: "Name-on-certificate app + issuance automation",
      app:
        "Built a name-on-certificate application where learners generate personalized certificates.",
      automation:
        "Automated issuance so certificates flow into Seerat ki Dunya and Sarf ki Dunya without manual handoffs.",
      surfaces: ["Seerat ki Dunya", "Sarf ki Dunya"],
      metrics: [
        { label: "Certificates", value: "3,400+" },
        { label: "Before → after", value: "15+ min → seconds" },
        { label: "Hours saved", value: "~850" },
      ],
    },
    caseStudy: {
      sections: [
        {
          heading: "Beyond certificates",
          body:
            "Work associated with IntezamTech also spans AI applications, operational software (POS/inventory-style systems), and a broad public automation catalog.",
        },
      ],
    },
  },
  {
    slug: "kit",
    title: "KIT",
    oneLiner: "3D keycap experience — craft-forward WebGL build.",
    featured: true,
    stub: true,
    liveUrl: site.links.github,
    caseStudy: {
      sections: [
        {
          heading: "Craft",
          body:
            "KIT is a featured 3D keycap interaction — part of the cinematic web builds portfolio.",
        },
      ],
    },
  },
  {
    slug: "nora-veld",
    title: "Nora Veld",
    oneLiner: "Atelier-folio — editorial site craft.",
    featured: true,
    stub: true,
    caseStudy: {
      sections: [
        {
          heading: "Craft",
          body:
            "Nora Veld / atelier-folio showcases editorial layout and motion for a creative brand.",
        },
      ],
    },
  },
  {
    slug: "worktrack-pro",
    title: "WorkTrack Pro",
    oneLiner: "Work tracking product in the builds lineup.",
    featured: true,
    stub: true,
    caseStudy: {
      sections: [
        {
          heading: "Product",
          body:
            "WorkTrack Pro sits alongside 12Pilot and IntezamTech-associated systems in the product portfolio.",
        },
      ],
    },
  },
  {
    slug: "ai-hr",
    title: "AI HR",
    oneLiner: "HR workflows including biometric attendance.",
    featured: true,
    stub: true,
    caseStudy: {
      sections: [
        {
          heading: "Product",
          body:
            "AI HR covers HR operations including biometric attendance tooling.",
        },
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectSlugs = projects.map((p) => p.slug);

export const intezamAgentPreview = featuredAgents;
