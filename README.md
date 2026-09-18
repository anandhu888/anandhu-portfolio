# Anandhu Chandran — DevOps Engineer Portfolio

A modern, high-performance, and responsive portfolio website designed specifically for **Anandhu Chandran**, DevOps Engineer. Built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**, with a cloud/infrastructure dark command center aesthetic.

> **Source of Truth**: All work experience, responsibilities, dates, companies, education, and technical skills reflect [Anandhu-DevOps-Engineer-Resume.pdf](./public/Anandhu-DevOps-Engineer-Resume.pdf) with **zero invented information**.

---

## ⚡ Live Features

- **DevOps Command Center Aesthetic**: Deep slate dark theme with cyan & emerald telemetry accents and monospace typography.
- **Git-Commit Career Timeline**: Visual timeline of DevOps roles at Muziris Softech (P) Ltd.
- **Interactive Technical Skills Matrix**: Categorized domain groups with small recognizable technology logos.
- **Core Technology Quick-Scanner**: Prominent technology icon grid for rapid recruiter review.
- **DevOps Automation & CI/CD**: Genuine production implementations covering CI/CD, target runner deployments, IaC, observability, and containerization.
- **Full SEO & Structured Data**: Dynamic `sitemap.xml`, `robots.txt`, Open Graph cards, and Schema.org `Person` JSON-LD.
- **Automated CI/CD Workflows**: Ready-to-use GitHub Actions for linting, type-checking, and build validation.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS v4 |
| **Icons** | Lucide React |
| **Fonts** | Geist Sans & Geist Mono (via `next/font/google`) |
| **CI/CD** | GitHub Actions (`.github/workflows/ci.yml`) |
| **Deployment** | Vercel / Cloudflare Pages / Static Hosting |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x, 20.x, or 22+
- npm 9+ (or pnpm / yarn)

### 1. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/anandhuchandran/anandhu-portfolio.git
cd anandhu-portfolio
npm install
```

### 2. Development Server
Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
Verify TypeScript compilation and build the optimized production output:

```bash
npm run build
```

To run the production server locally:
```bash
npm run start
```

### 4. Linting
Run ESLint to check for code quality and convention adherence:

```bash
npm run lint
```

---

## 🌐 Free Deployment Guide

### Option 1: Vercel (Recommended — Zero Configuration)
1. Push this repository to your GitHub account.
2. Sign up / log in to [vercel.com](https://vercel.com) using your GitHub account.
3. Click **"Add New Project"** and select `anandhu-portfolio`.
4. Leave all default settings (Next.js preset is automatically detected).
5. Click **"Deploy"**.
6. Your portfolio is live with free global CDN and automatic SSL certificate. Every push to `main` will automatically trigger a new deployment.

### Option 2: Cloudflare Pages
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages**.
2. Connect your GitHub repository.
3. Build command: `npx @cloudflare/next-on-pages@1` or standard Next.js build.
4. Enjoy unlimited bandwidth and lightning-fast edge delivery.

---

## 📁 Project Structure

```
anandhu-portfolio/
├── .github/
│   └── workflows/
│       ├── ci.yml                 # Lint, Type-check, and Build validation
│       └── deploy.yml             # CD deployment gate
├── public/
│   ├── Anandhu-DevOps-Engineer-Resume.pdf # Official downloadable resume PDF
│   └── ...
├── src/
│   ├── app/
│   │   ├── globals.css            # Dark theme, cyber grid, scrollbars, cursor
│   │   ├── layout.tsx             # Root layout, SEO metadata, JSON-LD Schema
│   │   ├── page.tsx               # Main portfolio page composing all sections
│   │   ├── robots.ts              # Search engine robots.txt generator
│   │   └── sitemap.ts             # Dynamic XML sitemap
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx         # Sticky navigation with status indicator
│   │   │   └── footer.tsx         # Engineering footer with links & status
│   │   ├── sections/
│   │   │   ├── hero.tsx           # Command center hero with live CTA & tech scanner
│   │   │   ├── about.tsx          # Professional summary & engineering specs
│   │   │   ├── skills.tsx         # Categorized skills matrix with tech logos & filters
│   │   │   ├── experience.tsx     # Git-commit timeline at Muziris Softech
│   │   │   ├── projects.tsx       # DevOps Automation & CI/CD professional work
│   │   │   ├── education.tsx      # Formal B.Tech & Higher Secondary education
│   │   └── ui/
│   │       ├── badge.tsx          # Reusable status badge
│   │       ├── card.tsx           # Glassmorphic card container
│   │       ├── section-heading.tsx# Uniform section header
│   │       ├── tech-icons.tsx     # Crisp, offline-ready technology SVG icons
│   │       └── social-icons.tsx   # Social link SVG icons
│   ├── data/
│   │   └── resume-data.ts         # Single source of truth from resume.pdf
│   └── types/
│       └── index.ts               # Strict TypeScript interfaces
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📄 License & Attribution
Designed and engineered for **Anandhu Chandran**. All career information, metrics, and experiences are verified from the original resume.
