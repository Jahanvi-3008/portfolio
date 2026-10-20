# Jahanvi — Personal Portfolio

A production-ready personal portfolio for Jahanvi, Backend Software Engineer at GeekyAnts.

**Stack:** React 18 · TypeScript · Vite · React Router · Framer Motion · Lucide React

---

## Local Development

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build & Preview

```bash
npm run build     # Creates ./dist
npm run preview   # Preview the built site locally
```

---

## Deployment

### Vercel (recommended)

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → Import the repo.
3. Framework preset: **Vite** (auto-detected).
4. Click **Deploy**.
5. SPA rewrites are configured in `vercel.json` — no additional setup needed.

### Netlify

1. Push to GitHub.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**.
3. Build command: `npm run build` · Publish directory: `dist`.
4. Click **Deploy**. SPA redirects are handled by `netlify.toml`.

---

## Configuration — What to Update Before Publishing

### 1. LinkedIn & GitHub URLs
Open `src/config/site.ts` and set:
```ts
linkedIn: 'https://linkedin.com/in/your-profile',
github:   'https://github.com/your-username',
```

### 2. Article URLs
Open `src/data/writing.ts` and uncomment + fill in the `url` field for each article.

### 3. Resume PDF
The file `public/Jahanvi_2026.pdf` is already included. To update, replace the file and keep the same filename, or update `resumeUrl` in `src/config/site.ts`.

### 4. SEO Metadata
Update `index.html`:
- `<title>` and `<meta name="description">` for your final wording.
- `<meta property="og:image" content="/og-image.png">` — convert the SVG at `public/og-image.svg` to a 1200×630 PNG and save it as `public/og-image.png` for correct social previews.

### 5. Domain & Canonical URL
Once you have a custom domain:
- Add `<link rel="canonical" href="https://your-domain.com" />` to `index.html`.
- Uncomment and update the `Sitemap:` line in `public/robots.txt`.

### 6. LinkedIn Profile Preview
After deployment, paste your live URL into the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) to verify the Open Graph preview. The `og:image` must be a publicly accessible PNG or JPEG — the SVG fallback may not render on all platforms.

---

## Project Structure

```
src/
├── App.tsx               # Router + AnimatePresence
├── main.tsx              # Entry point
├── config/site.ts        # ← Social URLs, email, metadata
├── data/
│   ├── projects.ts       # All 7 project entries
│   ├── skills.ts         # Skill groups
│   ├── achievements.ts   # Awards & milestones
│   └── writing.ts        # Article metadata + URLs
├── components/
│   ├── Layout/           # Navbar, Footer, Layout wrapper
│   └── home/             # Hero, Stats, FeaturedProjects, FeaturedWriting
├── pages/                # One file per route
├── hooks/useReveal.ts    # IntersectionObserver scroll reveal
└── styles/globals.css    # Complete design system
```

---

## Connecting to LinkedIn

1. Deploy the site to Vercel or Netlify.
2. Get your live URL (e.g., `https://jahanvi.vercel.app`).
3. Go to your LinkedIn profile → **Contact info** → Edit → **Website** → paste the URL.
4. Under your LinkedIn headline, you can also add it as a featured link.

---

## Notes

- No fake GitHub/demo links are created — project cards show professional work descriptions only.
- LinkedIn and GitHub profile links show a clear setup reminder until configured.
- Article links are omitted until real URLs are available — update `src/data/writing.ts`.
- Proficiency bars/percentages are intentionally absent.
