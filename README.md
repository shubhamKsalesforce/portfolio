# Shubham Kundu — Portfolio

Personal portfolio site built with **Next.js 16** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**.

Showcases 7+ years of Salesforce / Vlocity / OmniStudio experience, including work history at Cloobees, Deloitte, Capgemini, and IBM, plus 20+ Salesforce certifications.

## Local development

Requires Node.js ≥ 20.9.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Production build

```bash
npm run build
npm start
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx     # Root layout + SEO metadata
│   ├── page.tsx       # Home page composition
│   └── globals.css    # Tailwind v4 + theme tokens
├── components/        # Hero, Skills, Experience, Certifications, Navbar, Footer
└── lib/cv-data.ts     # All CV content lives here — edit this to update the site
```

To update content, edit `src/lib/cv-data.ts` — sections re-render automatically.

## Deployment

Deployed via [Vercel](https://vercel.com). Pushes to `main` trigger a production build.
