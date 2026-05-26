# Personal Portfolio — JdR2V

> Full-stack developer portfolio · SvelteKit · Steel palette · Built and deployed from Cali, Colombia

[![Live Site](https://img.shields.io/badge/Live_Site-0a0f1a?style=for-the-badge&logo=vercel&logoColor=60a5fa)](https://jdr2v.github.io/portfolio/)
[![SvelteKit](https://img.shields.io/badge/SvelteKit-ff3e00?style=for-the-badge&logo=svelte&logoColor=white)](https://kit.svelte.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Deploy](https://img.shields.io/badge/CI/CD-GitHub_Actions-2088ff?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/JdR2V/portfolio/actions)

---

## About

Personal portfolio site built from scratch in SvelteKit + TypeScript. Features a bilingual
EN/ES interface with language switching via a Svelte store (no page reload), scroll-triggered
GSAP animations, a working contact form powered by Resend, and automated deployment to
GitHub Pages via GitHub Actions on every push to `main`.

Designed in the "Steel" palette — deep navy (`#0a0f1a`) with a blue accent (`#60a5fa`)
and warm off-white text (`#f0eeea`). Typography: Playfair Display (display) + DM Mono (body).

---

## Features

- **Bilingual (EN/ES)** — language toggled via a Svelte writable store, no page refresh, animations unaffected
- **GSAP ScrollTrigger** — section content reveals on scroll, staggered entrance on hero
- **Working contact form** — sends email via [Resend](https://resend.com) API through a SvelteKit server route
- **Static site generation** — built with `@sveltejs/adapter-static` for GitHub Pages
- **CI/CD** — GitHub Actions workflow builds and deploys on every push to `main`
- **Responsive** — mobile-first layout, tested at 375px / 768px / 1280px
- **Accessible** — semantic HTML, keyboard navigable, WCAG-aware color contrast

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | SvelteKit + TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | GSAP + ScrollTrigger |
| Email | Resend API |
| Deployment | GitHub Pages |
| CI/CD | GitHub Actions |
| Fonts | Google Fonts (Playfair Display, DM Mono) |

---

## Getting started

```bash
# Clone
git clone https://github.com/JdR2V/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Environment variables

Create `.env` in the project root:

```env
VITE_RESEND_API_KEY=your_resend_api_key_here
```

The contact form won't send emails without this. Get a free key at [resend.com](https://resend.com).

---

## Project structure

```
src/
├── lib/
│   ├── assets/           ← Images, favicon, CV
│   ├── components/
│   │   ├── Nav.svelte
│   │   ├── Hero.svelte
│   │   ├── About.svelte
│   │   ├── Work.svelte
│   │   ├── Skills.svelte
│   │   ├── Contact.svelte
│   │   └── Footer.svelte
│   └── stores/
│       └── language.ts   ← Svelte writable store for EN/ES toggle
├── routes/
│   ├── +layout.svelte
│   ├── +layout.ts        ← export const prerender = true
│   ├── +page.svelte      ← Assembles all sections
│   ├── layout.css        ← Global styles + Tailwind v4 @theme tokens
│   └── api/
│       └── contact/
│           └── +server.ts ← POST handler → Resend API
static/
└── cv.pdf
.github/
└── workflows/
    └── deploy.yml        ← Build + deploy to gh-pages on push to main
```

---

## Deployment

Every push to `main` triggers the GitHub Actions workflow:

1. Checks out the repo
2. Installs dependencies with `npm ci`
3. Runs `npm run build` (static output → `./build`)
4. Pushes `./build` to the `gh-pages` branch via `peaceiris/actions-gh-pages`
5. GitHub Pages serves from `gh-pages`

The site is live at **[jdr2v.github.io/portfolio](https://jdr2v.github.io/portfolio/)** within ~2 minutes of a push.

To deploy your own fork, set `VITE_RESEND_API_KEY` as a repository secret under
**Settings → Secrets and variables → Actions**, and update the `base` path in
`svelte.config.js` to match your repository name.

---

## Design decisions

**Why SvelteKit over React?** Cleaner syntax for this use case, better fit for a static
portfolio, and a deliberate choice to learn a framework increasingly demanded in the
European market.

**Why a Svelte store for language switching?** The previous version (React) used
`window.location.reload()` to switch languages, which reset all animations. A shared
writable store updates every component simultaneously with no reload — animations
run once on first visit and are unaffected by language changes.

**Why `adapter-static`?** GitHub Pages serves static files only. The static adapter
pre-renders all routes at build time, producing a folder of HTML/CSS/JS with no
server required.

---

## License

MIT © [JdR2V](https://github.com/JdR2V)
