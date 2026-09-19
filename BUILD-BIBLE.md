# The Ai Khan — Scene-by-Scene Build Bible
**Domain:** https://theaikhan.com  
**Person:** Areeb Ahmed Khan (The Ai Khan)  
**Stack:** Next.js (App Router) · TypeScript · Tailwind · R3F/Three.js · custom GLSL · GSAP + ScrollTrigger · Lenis · Vercel  
**Goal:** Beat Awwwards-tier portfolios on *identity + proof + AEO*, not particle count.  
**Date:** 2026-09-19

---

## 0. North star

> One scroll = flying through **your** AI command center.  
> Every cinematic beat lands on a **real product, metric, or citable fact**.  
> WebGL is the theater. HTML is the script Google and AI engines read.

**Tagline (lock this):**  
`The Ai Khan — Areeb Ahmed Khan · AI systems, agents & products · Karachi`

**Primary entities to reinforce everywhere:**
- Name: Areeb Ahmed Khan
- Brand: The Ai Khan / The AI Khan
- Role: CTO & Cofounder, 12Pilot
- Company: Twelve Monday Technologies
- Location: Karachi, Sindh, Pakistan
- Proof: 12Pilot, IntezamTech AI automations, selected builds

---

## 1. Art direction

### Mood
Cinematic dark · command-center · electric · founder-OS (not generic creative-dev toy)

### Palette
| Token | Hex | Use |
|-------|-----|-----|
| `void` | `#050507` | Page background |
| `panel` | `#0C0C10` | Cards / HUD panels |
| `line` | `#1E1E28` | Borders / grid |
| `ink` | `#F4F4F5` | Primary text |
| `mute` | `#A1A1AA` | Secondary text |
| `signal` | `#7CFF6B` | Accent (acid green) — ONE accent only |
| `warn` | `#FF4D6D` | Rare error / boot glitch |

Optional alternate accent if green feels too “hacker”: violet `#A78BFA`. Pick one and never mix.

### Type
- Display / kinetic: **Syne** or **Clash Display** (bold wordmark)
- Body: **Geist Sans**
- Data / HUD / boot: **Geist Mono**

### Motion principles
1. One camera story (scroll drives camera — don’t fight it with random floaters)
2. Prefer *restraint between* big beats (quiet → punch → quiet)
3. Every WebGL moment has an HTML twin with the same facts
4. `prefers-reduced-motion`: skip WebGL scenes, show static chapters + full text
5. Mobile: lower DPR, fewer particles, no heavy postprocessing

### Signature motif
**Boot → Neural bloom → Name lockup → Systems map**  
Audio: short custom boot chirp (optional, muted by default, user toggles)

---

## 2. Information architecture

### Cinematic scroll spine (marketing home `/`)
Chapters as scroll scenes (see §3):
1. BOOT
2. IDENTITY
3. SYSTEMS
4. AGENTS
5. BUILDS
6. SIGNAL

### Crawlable AEO routes (must exist as real pages)
| Route | Purpose |
|-------|---------|
| `/` | Cinematic hub + SSR text fallback |
| `/about` | Full bio, roles, timeline |
| `/faq` | Quotable Q&A + FAQPage schema |
| `/projects` | Index of all proof |
| `/projects/12pilot` | CTO case study |
| `/projects/intezamtech` | Automations / LMS-ERP ops |
| `/projects/[slug]` | KIT, Nora Veld, WorkTrack Pro, AI HR, etc. |
| `/blog/who-is-the-ai-khan` | Definition article for AI engines |
| `/llms.txt` | Machine-readable entity summary |
| `/sitemap.xml` | All routes |
| `/robots.txt` | Allow all + sitemap |

**Hard rule:** Home WebGL can be client-only *visual*, but the first paint HTML must still contain H1, bio paragraph, and links to projects.

---

## 3. Scene-by-scene bible

Scroll progress `0 → 1` across the home canvas. Approximate share of scroll height:

| Scene | Scroll share | Duration feel |
|-------|--------------|---------------|
| 1 BOOT | 0.00–0.12 | 2–3s story |
| 2 IDENTITY | 0.12–0.28 | Hold on name |
| 3 SYSTEMS | 0.28–0.52 | Product nodes |
| 4 AGENTS | 0.52–0.72 | Automation swarm |
| 5 BUILDS | 0.72–0.88 | Portfolio strip |
| 6 SIGNAL | 0.88–1.00 | Contact lock |

---

### SCENE 1 — BOOT
**Intent:** Instant brand memory. “This is an OS, not a template.”

**Visual**
- Full-void black
- Monospace terminal overlay (HTML, not canvas text)
- Lines type on:
  ```
  THE_AI_KHAN v1.0
  loading entity………… OK
  syncing systems……… OK
  identity lock………… AREEB AHMED KHAN
  ```
- Background: sparse particle field waking up
- End state: particles collapse into a glowing core

**Motion**
- 0.00–0.04: CRT boot flicker (CSS or shader vignette)
- 0.04–0.10: typewriter lines (GSAP, accessible — real DOM text)
- 0.10–0.12: core bloom (shader) → camera eases forward

**HTML / AEO**
- Visually hidden or visible skip link: “Skip intro”
- SSR: `<h1>The Ai Khan — Areeb Ahmed Khan</h1>` already in document

**Assets**
- Optional: `boot.wav` (~0.8s), off by default
- Noise texture for vignette

**Exit cue**
- Wordmark begins forming from the core

---

### SCENE 2 — IDENTITY
**Intent:** Entity lock for humans + AI. Disambiguate from other Areeb Ahmed Khans.

**Visual**
- Giant kinetic type: **THE AI KHAN**
- Subline fades in: `Areeb Ahmed Khan`
- Secondary: `CTO & Cofounder · 12Pilot · Karachi`
- Soft neural mesh behind type (R3F). Face/monogram optional: silhouette or “AK” mark formed by particles (don’t require photoreal face if no good asset)

**Motion**
- Camera slow dolly-in
- Letters assemble with slight overshoot
- Parallax: type in screen space, mesh in world space

**Copy (on-screen HUD panel — real HTML)**
```
Areeb Ahmed Khan (The Ai Khan) builds AI systems, agents,
and products in Karachi. CTO & Cofounder of 12Pilot
(12Monday Technologies).
```

**Links in panel**
- LinkedIn · Instagram @areeb.theaikhan · GitHub areeb26 · 12pilot.net/about

**AEO**
- This paragraph = canonical definition (reuse on `/about` and `/faq`)

**Exit cue**
- Type splits / dissolves into a floating **systems constellation**

---

### SCENE 3 — SYSTEMS (products)
**Intent:** Proof you ship companies/products, not demos.

**Visual**
- 3D node graph / command map
- Primary nodes (large):
  1. **12Pilot** — CTO & Cofounder · LinkedIn outreach SaaS
  2. **IntezamTech** — AI apps · LMS/ERP-style ops · automations
  3. **Twelve Monday** — parent / product home
- Secondary nodes (smaller): WorkTrack Pro · AI HR
- Connecting beams pulse on scroll
- Hover/focus (desktop): panel slides in with 3 bullets + CTA

**Node content cards (HTML overlays synced to scroll)**

**12Pilot**
- Role: CTO & Cofounder
- What: AI outreach, Maps extractor, campaigns, Unibox
- Proof URL: https://12pilot.net · About: https://12pilot.net/about
- CTA: Open case study → `/projects/12pilot`

**IntezamTech**
- Role: Builder / AI automation systems
- What: AI agents catalog, POS/ops, custom software
- Proof URL: https://www.intezamtech.com · https://www.intezamtech.com/ai-automation
- CTA: → `/projects/intezamtech`

**Motion**
- Camera orbits slowly across the graph
- Active node scales up; others dim
- Scroll scrubbing selects node (GSAP timeline labels)

**AEO**
- Duplicate the same facts in a non-canvas `<section id="systems">` list below or in noscript/SSR block

**Exit cue**
- Graph particles stream into an “agent swarm” tunnel

---

### SCENE 4 — AGENTS
**Intent:** Show depth of AI automation work (Intezam catalog) without dumping 20 cards at once.

**Visual**
- Tunnel or ring of agent “chips” flying past camera
- Featured agents (pick 6 for motion; rest on `/projects/intezamtech`):
  1. Customer Support Agent
  2. Lead Enrichment Agent
  3. Certificate Fulfillment
  4. YouTube Metadata (EN + UR)
  5. AppSumo Analyzer
  6. Jarvis 3.0 / Email Labeling

**Motion**
- Scroll = fly-through
- Each agent chips to center briefly with name + one metric (e.g. “8+ hrs/day”)
- HUD counter: `AGENTS_INDEXED: 06 / 20+`

**Copy pattern**
`{AgentName} — {one-line job} · {metric}`

**AEO**
- Full list lives on `/projects/intezamtech` and `/ai` redirect optional
- Home only features 6 with link “See full agent catalog”

**Exit cue**
- Swarm collapses into a horizontal **film strip** of builds

---

### SCENE 5 — BUILDS
**Intent:** Craft flex (you already ship cinematic sites for clients) + personal products.

**Visual**
- Floating project panels (image/video planes in 3D) or horizontal scroll scrub
- Featured:
  1. 12Pilot (product UI reel)
  2. IntezamTech (site + agents)
  3. KIT (3D keycap)
  4. Nora Veld / atelier-folio
  5. WorkTrack Pro
  6. AI HR + biometric

**Motion**
- Scroll drives carousel; active panel fills frame with subtle camera shake/parallax
- Title + stack tags in HTML overlay

**Per-card fields**
- Title · One sentence · Stack · Role · Link (live + case study)

**AEO**
- Each card links to `/projects/[slug]` with full case writeup

**Exit cue**
- Panels fold into a final **signal panel** / contact monolith

---

### SCENE 6 — SIGNAL (contact / close)
**Intent:** Convert + finalize entity.

**Visual**
- Monolith / terminal desk in void
- Big CTA type: `TRANSMIT`
- Show: email / WhatsApp / Cal or form
- Social row: LinkedIn · Instagram · GitHub · 12Pilot

**Copy**
```
Building AI systems or need an automation partner?
Message The Ai Khan — Areeb Ahmed Khan, Karachi.
```

**Motion**
- Camera settles; ambient particles calm
- Cursor magnetic on CTA (desktop)

**AEO**
- Contact details in HTML footer sitewide
- Same `Person` schema `sameAs` links

---

## 4. Parallel HTML sections (SSR)

Even with a full-canvas home, include semantic sections in the React tree (can be visually integrated as HUD):

```
header (logo, About, Projects, FAQ, Contact)
main
  h1 The Ai Khan — Areeb Ahmed Khan
  p definition
  section#systems
  section#agents
  section#builds
  section#contact
footer
JSON-LD Person
```

For reduced motion / no-WebGL devices: render a **static cinematic layout** (full-bleed images, GSAP-lite fades only) with identical copy.

---

## 5. Page-level copy packs

### `/about` outline
1. H1: Areeb Ahmed Khan — The Ai Khan  
2. Lead definition paragraph (same as Scene 2)  
3. Now: CTO & Cofounder, 12Pilot · Twelve Monday Technologies  
4. Previously: COO, Islamic Desk  
5. What I build: AI agents, SaaS, ops systems  
6. Selected proof (links)  
7. Based in Karachi  
8. Contact  

### `/faq` (minimum quotable set)
- Who is Areeb Ahmed Khan?
- What is The Ai Khan?
- What did Areeb Ahmed Khan build?
- What is 12Pilot?
- Where is The Ai Khan based?
- How can I work with The Ai Khan?

Use `FAQPage` JSON-LD.

### `/projects/12pilot` outline
- H1: 12Pilot — CTO & Cofounder, Areeb Ahmed Khan  
- Problem / product / your role / features / links to live site + about team page  
- Metrics if you can share (users, seats, etc.)  
- Stack notes (high level)  
- Back to entity home  

### `/projects/intezamtech` outline
- Role clarity (builder / systems)  
- LMS/ERP-style ops + AI automation catalog summary  
- Link out to agent pages  
- Note: add your name on Intezam site later for reciprocal AEO  

### `/blog/who-is-the-ai-khan`
Longform definition: name variants, brand, products, location, how to verify (links). Written for machines to quote.

### `/llms.txt` (example)
```
# The Ai Khan
Name: Areeb Ahmed Khan
Brand: The Ai Khan
Site: https://theaikhan.com
Role: CTO & Cofounder of 12Pilot
Location: Karachi, Pakistan
Links: https://12pilot.net/about
       https://www.linkedin.com/in/areeb-ahmed-khan-aiautomation
       https://www.instagram.com/areeb.theaikhan
       https://github.com/areeb26
       https://www.intezamtech.com
```

---

## 6. Schema

### Person (sitewide layout)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Areeb Ahmed Khan",
  "alternateName": ["The Ai Khan", "The AI Khan"],
  "url": "https://theaikhan.com",
  "jobTitle": "CTO & Cofounder",
  "worksFor": {
    "@type": "Organization",
    "name": "12Pilot",
    "url": "https://12pilot.net"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Karachi",
    "addressRegion": "Sindh",
    "addressCountry": "PK"
  },
  "sameAs": [
    "https://www.linkedin.com/in/areeb-ahmed-khan-aiautomation",
    "https://www.instagram.com/areeb.theaikhan",
    "https://github.com/areeb26",
    "https://12pilot.net/about"
  ],
  "description": "Areeb Ahmed Khan (The Ai Khan) is an AI automation engineer and product developer in Karachi; CTO & Cofounder of 12Pilot."
}
```

Also: `FAQPage` on `/faq`, `WebSite` with `publisher`, `SoftwareApplication` on 12Pilot project page.

---

## 7. App / folder structure (Next.js)

```
app/
  layout.tsx          # fonts, Person JSON-LD, nav
  page.tsx            # cinematic home (server shell + client canvas)
  about/page.tsx
  faq/page.tsx
  projects/page.tsx
  projects/[slug]/page.tsx
  blog/who-is-the-ai-khan/page.tsx
  sitemap.ts
  robots.ts
  llms.txt/route.ts   # or public/llms.txt
components/
  canvas/
    Experience.tsx    # R3F canvas root
    CameraRig.tsx     # scroll-linked camera
    scenes/
      Boot.tsx
      Identity.tsx
      Systems.tsx
      Agents.tsx
      Builds.tsx
      Signal.tsx
    shaders/
  hud/
    BootTerminal.tsx
    ChapterPanel.tsx
    Nav.tsx
  seo/
    JsonLd.tsx
  motion/
    SmoothScroll.tsx  # Lenis
    ScrollTimeline.tsx # GSAP
content/
  projects.ts
  agents.ts
  faq.ts
  site.ts             # canonical strings
public/
  og.png
  projects/...
  audio/boot.wav
```

---

## 8. Scroll / GSAP architecture

- Single Lenis instance on desktop; native scroll on weak mobile if needed
- One master GSAP timeline scrubbed to scroll progress (`scrub: true`)
- `ScrollTrigger.create({ trigger: '#scroll-root', start, end: '+=600%', scrub })` (tune length)
- Bridge pattern: GSAP writes `rig.progress` / camera keyframes; R3F `useFrame` reads (no React re-render per frame)
- Chapter labels: `boot|identity|systems|agents|builds|signal` for debugging

---

## 9. Performance tiers

| Tier | Detect | Visual budget |
|------|--------|---------------|
| High | desktop, ≥8GB, good GPU | Full particles, bloom, shadows off still preferred |
| Mid | default laptop | Half particles, no SSAO, DPR ≤ 1.5 |
| Low | mobile / low mem | Static posters + light CSS motion only |
| Reduced motion | OS setting | No WebGL; full HTML chapters |

Always: pause canvas when tab hidden; dispose geometries on route change.

---

## 10. Asset list (produce before polish)

**Must**
- [ ] Logo / wordmark THE AI KHAN (SVG)
- [ ] Monogram AK mark
- [ ] Portrait or stylized mark (optional)
- [ ] 12Pilot screenshots / short UI capture (5–10s silent mp4)
- [ ] Intezam + agent stills
- [ ] Project stills: KIT, Nora Veld, WorkTrack, AI HR
- [ ] OG image 1200×630 with name + brand
- [ ] Favicon

**Nice**
- [ ] Boot sound
- [ ] Loop ambient bed (very quiet)
- [ ] Custom cursor (desktop only)

---

## 11. Build phases

### Phase A — AEO skeleton (2–4 days)
Ship without WebGL:
- Routes, copy, schema, sitemap, FAQ, project pages
- Dark editorial layout
- Deploy on Vercel + connect `theaikhan.com`
- Submit Search Console

### Phase B — Cinematic spine (1–2 weeks)
- Lenis + GSAP timeline
- Scenes 1–2–6 first (boot, identity, signal)
- HUD panels with real HTML

### Phase C — Systems & agents (1–2 weeks)
- Node graph + agent fly-through
- Project film strip
- Performance tiers

### Phase D — Dominate
- Sound, custom shaders, polish
- Reciprocal links: GitHub website, LinkedIn featured, 12Pilot homepage mention, Intezam team page
- Test: ChatGPT / Perplexity “Who is Areeb Ahmed Khan?” / “What is The Ai Khan?”

---

## 12. Acceptance tests

**Design**
- [ ] Someone remembers the boot + name after one visit
- [ ] 12Pilot and Intezam are obvious within first scroll third
- [ ] Mobile doesn’t melt; reduced-motion works

**SEO**
- [ ] View-source shows H1 + bio without running JS
- [ ] `site:theaikhan.com` returns key routes
- [ ] Lighthouse perf sensible on mid mobile

**AEO**
- [ ] FAQ answers match `/faq` word-for-word
- [ ] Person JSON-LD validates
- [ ] AI chat tools can cite theaikhan.com for your name within weeks of indexing + citations

---

## 13. Do / Don’t

**Do**
- One accent color
- Real metrics only
- Same spelling everywhere
- Link out to 12pilot.net/about (your CTO proof)

**Don’t**
- Put the only copy inside CanvasTexture
- Autoplay loud audio
- Fake Awwwards badges
- Dilute with 40 projects — curate 6–8

---

## 14. One-sentence brief for collaborators

> Build a dark cinematic AI-command-center personal site for Areeb Ahmed Khan (The Ai Khan) on Next.js/Vercel: scroll-driven R3F scenes (Boot → Identity → Systems → Agents → Builds → Signal) with GSAP/Lenis, acid-green accent, and parallel crawlable About/FAQ/Projects pages so the spectacle also wins SEO and AI citation.

---

*End of build bible. Next implementation step: Phase A repo scaffold + content modules from this doc.*
