# The Ai Khan — theaikhan.com

Personal brand site for **Areeb Ahmed Khan** (The Ai Khan). Built with Next.js App Router, TypeScript, and Tailwind.

Source of truth: [BUILD-BIBLE.md](./BUILD-BIBLE.md).

## Phases

| Phase | Status | Scope |
|-------|--------|--------|
| **A** | Done | Crawlable routes, content modules, SEO/AEO, dark cinematic HTML chapters |
| **B** | Done | Lenis + GSAP scroll bridge; WebGL canvas + Boot terminal + Signal CTA |
| **C** | Done | Systems graph, Agents chips, Builds planes, Signal monolith; performance tiers |

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Environment

Optional:

```bash
NEXT_PUBLIC_SITE_URL=https://theaikhan.com
```

Defaults to production URL in `content/site.ts`.

## Deploy (Vercel)

- **Repo:** https://github.com/areeb26/theaikhan (Git connected — pushes to `main` auto-deploy)
- **Production:** https://theaikhan.vercel.app

### Custom domain `theaikhan.com`

At your DNS host (Spaceship), either:

1. **Recommended:** `A` record `@` → `76.76.21.21`, or  
2. Point nameservers to Vercel: `ns1.vercel-dns.com`, `ns2.vercel-dns.com`

Then run `vercel domains verify theaikhan.com` or check the Vercel dashboard.

After DNS propagates, submit `https://theaikhan.com/sitemap.xml` in Google Search Console.

## Routes

- `/` — Home (scroll chapters: Boot → Identity → Systems → Agents → Builds → Signal)
- `/about` · `/faq` · `/projects`
- `/projects/12pilot` · `/projects/intezamtech` · `/projects/worktrack-pro` · `/projects/ai-hr` · `/projects/kit` · `/projects/nora-veld`
- `/blog/who-is-the-ai-khan`
- `/llms.txt` · `/sitemap.xml` · `/robots.txt`

## Key paths

- `content/site.ts` — canonical copy and links
- `content/faq.ts` — AEO-stable FAQ answers
- `content/projects.ts` · `content/agents.ts`
- `components/seo/` — JSON-LD helpers
- `components/hud/` — Nav, Footer
