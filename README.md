<div align="center">

# Damir Portnov — Portfolio

**JavaScript / TypeScript Full Stack Software Developer**

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-damir--portnov.com-24acf2?style=for-the-badge)](https://damir-portnov.com/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-damir--portnov-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/damir-portnov/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

</div>

---

## About

Personal portfolio website showcasing Damir Portnov's skills, work experience and projects as a Frontend & Blockchain Developer. The site is fully internationalized across **8 languages**, supports **8 visual themes**, and includes a working contact form with rate-limiting.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🌍 **Internationalization** | 8 locales — English, French, Ukrainian, German, Spanish, Polish, Italian, Czech |
| 🎨 **Theme Switcher** | 8 themes — Dark, Light, Green, Purple, Abyss, Tomorrow Night Blue, Monokai, Solarized Dark |
| 📧 **Contact Form** | Server Action powered by [Resend](https://resend.com) with input validation and XSS protection |
| 🛡️ **Rate Limiting** | IP-based sliding-window rate limiting via [Upstash Redis](https://upstash.com) |
| ⚡ **Performance** | Turbopack dev server, WebP/AVIF image formats, Vercel Speed Insights |
| 📱 **PWA Ready** | Web App Manifest, apple-touch icons and full favicon set |
| 🔤 **Typewriter Effect** | Animated greeting in the hero section |
| 💡 **Smooth Animations** | Intersection Observer–based reveal animations + Animate.css |

---

## 🗂 Page Sections

1. **Hero** — Animated introduction with typewriter text, CV download and quick-contact button
2. **Skills** — Hard skills (HTML, CSS, JavaScript, TypeScript, React, Redux, Next.js, Git, REST API, Testing, UI/UX) and Soft skills
3. **Work Experience** — Timeline of education and professional experience
4. **Projects** — Gallery of highlighted projects with technology tags and live/repo links
5. **Contact** — Email form that sends directly to the developer's inbox
6. **Footer** — Contact info and copyright

---

## 🚀 Tech Stack

**Core**
- [Next.js 16](https://nextjs.org/) (App Router, Server Actions, Server Components)
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)

**Styling**
- [Sass/SCSS](https://sass-lang.com/) with CSS custom properties for theming
- [Animate.css](https://animate.style/) for entrance animations
- [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) — primary typeface

**Internationalization**
- [next-intl](https://next-intl-docs.vercel.app/) — routing, messages and server/client utilities

**Email & Infrastructure**
- [Resend](https://resend.com) — transactional email delivery
- [Upstash Redis](https://upstash.com) — serverless rate limiting
- [Vercel](https://vercel.com) — hosting and edge deployment

**Tooling**
- [Bun](https://bun.sh) — fast package manager and runtime
- [ESLint](https://eslint.org/) + [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)
- [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/okonet/lint-staged) — pre-commit hooks

---

## 🗺 Project Structure

```
Portfolio/
├── app/
│   └── [locale]/          # Next.js App Router with locale segment
│       ├── layout.tsx     # Root layout (theme, fonts, i18n provider)
│       └── page.tsx       # Main page (Hero → Skills → Experience → Projects → Mail)
├── features/              # Feature-based modules
│   ├── hero-section/
│   ├── skills-section/
│   ├── experience-section/
│   ├── project-section/
│   ├── mail-section/      # Contact form + Server Action + Resend template
│   ├── header/            # Locale switcher + Theme switcher
│   └── footer/
├── shared/
│   ├── components/        # Reusable UI components (Button, AnimateOnView, TypeWriter, …)
│   ├── hooks/
│   ├── i18n/
│   │   ├── routing.ts     # Supported locales & default locale
│   │   └── locale/        # JSON translation files (en, fr, ua, de, es, pl, it, cs)
│   ├── lib/               # theme.ts, ratelimit.ts
│   ├── styles/            # Global SCSS, variables, animations, normalize
│   └── types/
├── public/                # Static assets (project screenshots, tech SVGs, CV PDF, favicons)
├── next.config.ts
├── proxy.ts               # next-intl middleware + theme cookie injection
└── package.json
```

---

## 🛠 Getting Started

### Prerequisites

- **Node.js** ≥ 18 or **Bun** ≥ 1.0

### Install dependencies

```bash
bun install
# or
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```env
# Resend — email delivery (https://resend.com)
RESEND_KEY=re_xxxxxxxxxxxxxxxxxxxx

# Upstash Redis — rate limiting (https://upstash.com)
UPSTASH_REDIS_REST_URL=https://your-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_token

# Set to "true" to enable rate limiting (optional, defaults to disabled)
ENABLE_RATE_LIMIT=true
```

### Run locally

```bash
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
bun run build
bun start
# or
npm run build
npm start
```

### Lint

```bash
bun run lint
# or
npm run lint
```

---

## 🌐 Deployment

The site is deployed on **Vercel**. Push to the main branch triggers an automatic deployment.

For the contact form and rate limiting to work in production, set the environment variables listed above in your Vercel project settings.

---

## 📂 Highlighted Projects

| Project | Description | Technologies |
|---|---|---|
| **[Iron-Helmet](https://long-way-up-project.vercel.app/lobby)** | Solana Web3 RPG — hero loadouts, dungeons & 3D/AR experience | React, Next.js, TypeScript, Tailwind |
| **[Music Sharing](https://github.com/JumboMiller/Music-Sharing)** | Full-stack music app with track management, playlists, and comments | Next.js, NestJS, TypeScript, Redux |
| **[Elemental Wars](https://github.com/JumboMiller/Front-EW)** | WAX blockchain RPG/NFT game website with minting & staking | React, WaxJS, Bootstrap |
| **[Crypto Mine](https://github.com/JumboMiller/HYIP-Project)** | BSC DeFi passive-income game — fully on-chain static files | React, Solidity/BSC |
| **[Chess](https://github.com/JumboMiller/TS-Chess)** | Browser chess with full rule implementation | React, TypeScript |
| **[Lingo](https://github.com/JumboMiller/Language-Learning-App)** | Gamified language-learning platform with AI voices & XP system | Next.js 14, TypeScript, Clerk, Tailwind |

---

## 📬 Contact

- **Email:** damirchot@gmail.com  
- **LinkedIn:** [linkedin.com/in/damir-portnov](https://www.linkedin.com/in/damir-portnov/)  
- **Site:** [damir-portnov.com](https://damir-portnov.com/)

---

<div align="center">
  <sub>© 2025 Damir Portnov</sub>
</div>
