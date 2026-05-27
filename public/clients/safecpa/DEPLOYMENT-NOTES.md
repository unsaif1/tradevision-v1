# SafeCPA — Deployment Notes
## What Was Accomplished (VPS, 2026-05-18)

### GitHub: safecpa repo ✅
- Repo: github.com/unsaif1/safecpa — branch: main
- Commits:
  - Real testimonials (TaxBuzz Yehiya M. + Google Maps reviewer)
  - Contact info updated: email `safecpa@gmail.com`, phone `(407) 808-1480`, Orlando FL address
  - AI chatbot backend: `src/app/api/chatbot/route.ts` → OpenRouter `google/gemma-4-31b-it:free`
  - Mobile-first ChatWidget: full-screen bottom sheet / 380px desktop card
  - Cloudflare config: `wrangler.jsonc` + `open-next.config.ts`
- Build: `next build` ✅ clean on VPS
- **Next.js 16 `next export` is blocked** — `robots.ts`/`sitemap.ts` are dynamic routes incompatible with `output: 'export'`

---

### SaifHaven.com — Case Study Page ✅
- `public/clients/safecpa/index.html` — case study doc, committed ✓
- `public/clients/safecpa/test-site.html` — **full standalone static HTML landing page**, committed ✓

---

### Standalone Test Page — What It Includes
`public/clients/safecpa/test-site.html` is a production-ready static build:

- **Hero + Trust card** — AICPA badge + testimonial quote + service tags
- **Stats strip** — 15+ yrs · 500+ clients · 99% on-time · AICPA
- **Services** — Tax Prep, Bookkeeping, Business Advisory (each with icon + desc)
- **Why Us** — 5 bullet check-list + dark Navy trust card
- **Testimonials grid** — 4 × 5-star cards from TaxBuzz / Google / SaaS CEO
- **Booking** — Calendly link btn (replace URL with real Calendly handle)
- **Contact form** — Name/Email/Subject/Message → shows success toast
- **Contact details** — (407) 808-1480 · safecpa@gmail.com · Orlando FL 32819
- **Chat bubble** — floating chat widget (demo mode for now)
- **Footer** — full business info + "Hosted on SaifHaven.com" tag

---

### What's Still Needed to Go Live

#### Option A: Full Next.js + Chatbot (needs Cloudflare auth)
```bash
# On local Mac with Claude Code:
cd safecpa

# 1. Set env vars in .env.local
OPENROUTER_API_KEY=sk-or-v1-xxx  # from openrouter.ai/settings/keys
NEXT_PUBLIC_GA4_ID=G-XXXXXXX
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/safecpa/30min

# 2. Fix robots.ts / sitemap.ts for static export, OR:
#    Use wrangler deploy directly (no `next export` needed)
npx wrangler login
npx wrangler deploy   # uses open-next built .open-next output
```

#### Option B: Static HTML on SaifHaven.com (no backend needed)
The `test-site.html` is ready to use. To actually publish on SaifHaven.com as a subpage:
- Add a routing rule to the SaifHaven Cloudflare setup to serve `/safe-cpa/*` paths, OR
- Drop it at `public/index.html` temporarily to replace SaifHaven's own landing

#### CLOUDFLARE_API_TOKEN needed
- The VPS has `wrangler` installed but **no stored token** — needs `wrangler login` (opens OAuth popup)
- The `safecpa.com` domain may not be owned by you; use `saifhaven.com` as the host

---

### Repo Status
```
safecpa (github.com/unsaif1/safecpa)  branch: main
  ✅ Build clean
  ⚠️  Claude Code credits exhausted on VPS (— please work from local Mac)
  ⚠️  wrangler CLI needs CLOUDFLARE_API_TOKEN or interactive login
```
