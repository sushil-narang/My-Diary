# My Diary

**My Diary** is the personal blog of **Sushil Narang** — an educator teaching
Artificial Intelligence courses at Chitkara University.

Built with [Next.js](https://nextjs.org) (App Router) and Markdown.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Writing an entry

Create a new `.md` file in the `posts/` folder. The filename becomes the URL
slug, and the frontmatter holds the metadata:

```markdown
---
title: My new entry
date: 2026-09-23
excerpt: A short summary shown on the home page.
tags:
  - Teaching
  - AI
---

Write your entry in **Markdown** here.
```

Save the file and the new entry appears on the home page and its topic page
automatically (and gets included in `npm run build`).

> Tip: keep `title` and `excerpt` values wrapped in double quotes — colons
> inside unquoted YAML values will break the build.

## Structure

```
app/            → pages (App Router)
  page.js       → animated landing page + post list
  icon.svg      → favicon
  posts/[slug]/ → single entry
  tags/         → topic directory + filtered lists
  about/        → about page
components/     → Nav, Footer, PostCard
                  LandingHero, TopicMarquee, Reveal, CountUp (landing page)
lib/posts.js    → Markdown loading & rendering
posts/          → your Markdown entries
public/         → illustrations (SVG)
```

## Landing page

The home page is a self-contained animated landing page — no external
libraries or image files required:

- **Kinetic hero** (`components/LandingHero.js`) — letter-by-letter title
  reveal, hand-drawn underline that draws itself, a rotating word, a
  pointer-following spotlight and an animated SVG notebook illustration.
- **Topic marquee** (`components/TopicMarquee.js`) — infinite CSS ribbon.
- **Stats band** (`components/CountUp.js`) — counters that tick up on scroll.
- **Scroll reveals** (`components/Reveal.js`) — sections fade in via
  `IntersectionObserver`.
- **Illustration** — `public/illustration-desk.svg`, shown in the About teaser.

Everything respects `prefers-reduced-motion` (animations switch off
automatically for visitors who ask for them).

## Deploying

- **Vercel** — import the repo, no config needed.
- **Anywhere else** — `npm run build` then `npm start`.
# My-Diary
