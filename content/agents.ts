export type Agent = {
  name: string;
  job: string;
  featured: boolean;
};

export const agents: Agent[] = [
  {
    name: "Customer Support Agent",
    job: "Automated customer support workflows",
    featured: true,
  },
  {
    name: "Lead Enrichment Agent",
    job: "Prospect and lead data enrichment",
    featured: true,
  },
  {
    name: "Certificate Fulfillment",
    job: "Certificate generation and delivery",
    featured: true,
  },
  {
    name: "YouTube Metadata",
    job: "Metadata workflows (EN + UR)",
    featured: true,
  },
  {
    name: "AppSumo Analyzer",
    job: "Deal and listing analysis",
    featured: true,
  },
  {
    name: "Jarvis / Email Labeling",
    job: "Email triage and labeling",
    featured: true,
  },
];

export const featuredAgents = agents.filter((a) => a.featured);
