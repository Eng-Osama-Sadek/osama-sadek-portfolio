# Osama Sadek — Developer Portfolio

Portfolio of **Osama Sadek**, Senior Full-Stack Developer & AI Automation Engineer, with 17+ years of engineering experience (11+ in software). It showcases 24 projects across AI/LLM, mobile, backend, engineering tools and web platforms.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-EC4899?logo=framer&logoColor=white)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel)

## Highlights

- 8+ production applications serving 500+ daily active users
- 10,000+ daily requests at 99.5% uptime
- 70% reduction in document processing time (RAG + LLM)
- 42 engineering workflows digitized
- 100+ engineers and technicians led
- 92% accuracy in AI patent evaluation, 60% route-planning efficiency gain

## Features

- **"Midnight Lab" design system**: dark theme, gradient-animated name, aurora background blobs
- **Projects explorer**: all 24 projects with category filters, live search, tech tags and metric badges, each linking to its repository
- **Glassmorphism navbar** with smooth anchor navigation
- **Animated stats bar** with the key career metrics
- **SEO**: metadata, Open Graph, canonical URL, JSON-LD (Person), `sitemap.xml`, `robots.txt`
- **Accessibility**: semantic HTML, skip-to-content link, visible focus ring, reduced-motion support

## Tech Stack

| Area | Tools |
|------|-------|
| Framework | Next.js 14 (App Router), React 18, TypeScript (strict) |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Deployment | Vercel |

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # metadata, JSON-LD, skip link
│   ├── page.tsx          # navbar, hero, stats, projects, contact
│   ├── globals.css       # design tokens, keyframes
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   └── Projects.tsx      # filterable, searchable project grid
├── data/
│   └── projects.ts       # all 24 projects
├── public/
│   └── cv/Osama_Sadek_CV.pdf   # add your CV here
├── tailwind.config.ts
├── next.config.js
└── vercel.json
```

## Getting Started

**Requirements:** Node.js 18 or newer.

```bash
git clone https://github.com/Eng-Osama-Sadek/osama-sadek-portfolio.git
cd osama-sadek-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Run the production build |

## Customization

- **Projects:** edit `data/projects.ts`. Each entry has a title, category, repo link, tech list, description and an optional metric badge.
- **Content and contact links:** edit `app/page.tsx`.
- **Colors:** edit the tokens in `tailwind.config.ts` and `app/globals.css`.
- **CV:** place your PDF at `public/cv/Osama_Sadek_CV.pdf` so the Download CV button works.

## Deployment

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com), choose **Add New Project**, and import the repository.
3. Click **Deploy**. Later pushes to `main` deploy automatically.
4. For a custom domain, open **Settings → Domains** in Vercel and follow the DNS instructions.

## Roadmap

- [ ] Three.js neural-network hero
- [ ] English / Arabic (RTL) switch and light theme
- [ ] About, Skills, Experience timeline and Case Studies sections
- [ ] Contact form
- [ ] Project detail modal
- [ ] Custom cursor and smooth scrolling

## Contact

- Email: [osamasadekadam321@gmail.com](mailto:osamasadekadam321@gmail.com)
- LinkedIn: [osama-sadek-9a2951187](https://linkedin.com/in/osama-sadek-9a2951187)
- GitHub: [Eng-Osama-Sadek](https://github.com/Eng-Osama-Sadek)
- WhatsApp: +20 106 813 4714
- Location: Assiut, Egypt (open to remote work worldwide)

## License

© Osama Sadek. All rights reserved.
