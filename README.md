# Damir Portnov — Portfolio

Personal portfolio site built with Next.js 16 App Router.
Includes i18n (8 locales), theme switching (8 themes), and a server-side contact form.

**Live:** https://damir-portnov.com
&ensp;|&ensp;
**LinkedIn:** https://www.linkedin.com/in/damir-portnov/

---

## Features

- **Internationalization** — 8 locales (en, fr, ua, de, es, pl, it, cs) via `next-intl`
- **Theme switcher** — 8 themes (Dark, Light, Green, Purple, Abyss, Tomorrow Night Blue, Monokai, Solarized Dark) stored in a cookie
- **Contact form** — Server Action + [Resend](https://resend.com); validates input, blocks HTML/script injection
- **Rate limiting** — IP-based sliding window (20 req / 1 min) via [Upstash Redis](https://upstash.com); opt-in via `ENABLE_RATE_LIMIT`
- **Image optimisation** — WebP / AVIF output via Next.js image pipeline
- **PWA assets** — Web App Manifest, apple-touch icon, full favicon set

---

## Tech Stack

| Layer | Libraries / Tools |
|---|---|
| Framework | Next.js 16 (App Router, Server Actions, Server Components) |
| UI | React 19, SCSS Modules, Animate.css, IBM Plex Mono |
| i18n | next-intl 4 |
| Email | Resend |
| Rate limiting | @upstash/ratelimit + @upstash/redis |
| Observability | @vercel/speed-insights |
| Tooling | Bun, TypeScript 5, ESLint 9, Husky, lint-staged |

---

## Getting Started

**Prerequisites:** Node.js ≥ 18 or Bun ≥ 1.0

```bash
bun install
```

### Environment variables

Create `.env.local` in the project root:

| Variable | Required | Description |
|---|---|---|
| `RESEND_KEY` | Yes | API key from [resend.com](https://resend.com) — powers the contact form |
| `UPSTASH_REDIS_REST_URL` | If rate limiting | Redis REST endpoint from [upstash.com](https://upstash.com) |
| `UPSTASH_REDIS_REST_TOKEN` | If rate limiting | Redis REST token |
| `ENABLE_RATE_LIMIT` | No | Set to `"true"` to activate rate limiting (default: disabled) |

```env
RESEND_KEY=re_xxxxxxxxxxxxxxxxxxxx

UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_token

ENABLE_RATE_LIMIT=true
```

Without `RESEND_KEY` the contact form will fail at runtime. Without the Upstash vars, rate limiting is silently skipped.

---

## Scripts

| Command | Description |
|---|---|
| `bun dev` | Dev server with Turbopack on `http://localhost:3000` |
| `bun run build` | Production build |
| `bun start` | Start production server (requires `build` first) |
| `bun run lint` | ESLint with auto-fix (also runs on pre-commit via lint-staged) |

---

## Project Structure

```
app/
└── [locale]/
    ├── layout.tsx        # Root layout — fonts, theme cookie, i18n provider
    └── page.tsx          # Single page, composes all sections

features/                 # One directory per page section
├── hero-section/
├── skills-section/
├── experience-section/
├── project-section/
├── mail-section/         # Contact form, Server Action, Resend email template
├── header/               # Locale switcher, theme switcher
└── footer/

shared/
├── components/           # Reusable UI (Button, AnimateOnView, TypeWriter, …)
├── i18n/
│   ├── routing.ts        # Locale list and default locale
│   └── locale/           # JSON message files per locale
├── lib/
│   ├── theme.ts          # Cookie-based theme persistence
│   └── ratelimit.ts      # Upstash rate limiter setup
└── styles/               # Global SCSS, CSS custom properties, animations

public/                   # Static assets — screenshots, tech icons (SVG), CV (PDF)
proxy.ts                  # Middleware — next-intl routing + theme cookie injection
next.config.ts
```

---

## Configuration

**Locales** — edit `shared/i18n/routing.ts`:
```ts
locales: ["en", "fr", "ua", "de", "es", "pl", "it", "cs"],
defaultLocale: "en"
```

**Themes** — defined in `shared/styles/_variables.scss` as a SCSS map; the active theme is read from the `theme` cookie and applied as `data-theme` on `<html>`.

**Rate limit** — `shared/lib/ratelimit.ts`: 20 requests / 1 minute sliding window, per IP. Change `RATE_LIMIT_REQUESTS` and `RATE_LIMIT_WINDOW` constants to adjust.

---

## Deployment

The site is deployed on Vercel. A push to `main` triggers an automatic deployment.

Add all required environment variables under **Project Settings → Environment Variables** in the Vercel dashboard before deploying.

---

## Projects

| Project | Stack | Link |
|---|---|---|
| Iron-Helmet | Next.js, TypeScript, Tailwind, Solana/Web3 | [live](https://long-way-up-project.vercel.app/lobby) |
| Music Sharing | Next.js, NestJS, TypeScript, MongoDB, Redux | [repo](https://github.com/JumboMiller/Music-Sharing) |
| Elemental Wars | React, WaxJS (WAX blockchain), Bootstrap | [repo](https://github.com/JumboMiller/Front-EW) |
| Crypto Mine | React, BSC smart contract | [repo](https://github.com/JumboMiller/HYIP-Project) |
| Chess | React, TypeScript | [repo](https://github.com/JumboMiller/TS-Chess) |
| Lingo | Next.js 14, TypeScript, Clerk, Tailwind, ElevenLabs AI | [repo](https://github.com/JumboMiller/Language-Learning-App) |

---

© 2025 Damir Portnov
