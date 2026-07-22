# Northinge — Agency Website

A premium, responsive marketing website for a web design agency, built with **React**, **Vite**, **Tailwind CSS**, **React Router**, and **Framer Motion**.

Tagline: *We build websites that grow businesses.*

## What's included

- **5 pages**: Home, Portfolio (with category filtering), Services (with pricing), About, Contact (with validated form)
- Custom design system built on the brand palette (`#2563EB` primary / `#0F172A` ink / `#38BDF8` accent) with a Space Grotesk + Inter + IBM Plex Mono type system
- Animated growth-chart hero graphic, scroll-triggered reveals, animated stat counters, filterable portfolio grid, accordion FAQ, ripple-effect buttons, smooth page transitions
- Fully mobile-first and responsive, with visible keyboard focus states and `prefers-reduced-motion` support
- SEO: meta tags, Open Graph / Twitter cards, semantic headings, `robots.txt`, `sitemap.xml`
- All imagery is generated inline as SVG (project mockups, avatars, map, OG image, favicon) — no external image dependencies, so the project runs immediately with no missing assets

## Getting started

Requires [Node.js](https://nodejs.org/) 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server
npm run dev
```

Then open the URL shown in your terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

This outputs a production-ready build to the `dist/` folder. Preview it locally with:

```bash
npm run preview
```

## Project structure

```
src/
  components/     Reusable UI building blocks (Navbar, Footer, cards, buttons, etc.)
  pages/          One file per route: Home, Portfolio, Services, About, Contact
  data/           Content: services, projects, testimonials, FAQs, color palettes
  index.css       Global styles, Tailwind layers, custom utility classes
  App.jsx         Routing and page-transition setup
  main.jsx        App entry point
public/           Static assets: favicon, OG image, robots.txt, sitemap.xml
```

## Customizing

- **Brand name & copy**: update `src/components/Logo.jsx` and the text in `src/pages/*.jsx`
- **Colors**: edit the `primary`, `ink`, and `sky` values in `tailwind.config.js`
- **Fonts**: swap the Google Fonts `<link>` in `index.html` and the `fontFamily` values in `tailwind.config.js`
- **Projects / services / testimonials / FAQs**: edit the corresponding files in `src/data/`
- **Replacing placeholder visuals with real photos**: swap `<ProjectVisual />` in `src/components/ProjectCard.jsx` and `src/pages/Portfolio.jsx` for an `<img>` tag pointing to your own project photography
- **Contact form**: `src/pages/Contact.jsx` currently simulates a submission client-side. Wire the `handleSubmit` function up to your email service or backend of choice (e.g. Formspree, Resend, or a custom API route) to receive real submissions
- **Map**: the contact page map is an illustrated placeholder. Replace it with an embedded Google Maps iframe using your studio's real address

## Tech stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/) (icons)
