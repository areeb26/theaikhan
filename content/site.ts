export const site = {
  name: "Areeb Ahmed Khan",
  brand: "The Ai Khan",
  brandAlt: "The AI Khan",
  tagline:
    "The Ai Khan — Areeb Ahmed Khan · AI systems, agents & products · Karachi",
  url: "https://theaikhan.com",
  role: "CTO & Cofounder",
  company: "12Pilot",
  parentCompany: "Twelve Monday Technologies",
  location: "Karachi, Sindh, Pakistan",
  previously: "COO, Islamic Desk",
  definition:
    "Areeb Ahmed Khan (The Ai Khan) is an AI automation engineer and product developer based in Karachi, Pakistan. He is CTO and Cofounder of 12Pilot, a LinkedIn outreach SaaS built by 12Monday Technologies. He builds AI systems, agents, and products — including work associated with IntezamTech (AI apps, ops systems, and a large AI automation catalog).",
  links: {
    linkedin: "https://www.linkedin.com/in/areeb-ahmed-khan-aiautomation",
    instagram: "https://www.instagram.com/areeb.theaikhan",
    github: "https://github.com/areeb26",
    twelvePilot: "https://12pilot.net",
    twelvePilotAbout: "https://12pilot.net/about",
    intezamtech: "https://www.intezamtech.com",
    intezamAutomations: "https://www.intezamtech.com/ai-automation",
    twelveMonday: "https://www.12monday.net",
  },
  sameAs: [
    "https://www.linkedin.com/in/areeb-ahmed-khan-aiautomation",
    "https://www.instagram.com/areeb.theaikhan",
    "https://github.com/areeb26",
    "https://12pilot.net/about",
    "https://www.intezamtech.com",
    "https://www.12monday.net",
  ],
} as const;

export function pageTitle(segment?: string) {
  const base = "The Ai Khan — Areeb Ahmed Khan";
  return segment ? `${base} | ${segment}` : base;
}
