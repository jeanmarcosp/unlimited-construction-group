# Unlimited Construction Group — Website

Modern marketing site for Unlimited Construction Group, a licensed general contractor in
Miami, FL (est. 2000, license CGC1524964).

**Phase 1 scope:** a responsive visual redesign shell — Home, Services, About, and Contact
pages built from the business's real content with cleaned-up copy. The contact form is a
styled UI placeholder (not yet wired to a backend). Real project photography drops in
later; image placeholders mark where.

## Tech Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) (JavaScript)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [lucide-react](https://lucide.dev/) icons

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server with hot reload at http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Project Structure

```
src/
├── data/content.js     # Single source of truth: business info, copy, services
├── components/         # Reusable UI (Navbar, Footer, Hero, ServiceCard, ...)
└── pages/              # Home, Services, About, Contact
public/images/          # Logo + image assets (swap placeholders here)
```

## Editing Content

Business details and all page copy live in `src/data/content.js` — update phone, email,
address, services, and marketing copy there without touching components.

## Adding Real Images

Placeholders render via `src/components/Placeholder.jsx` and inline placeholder blocks.
Drop real photos into `public/images/` and replace the corresponding `<Placeholder />`
usages with `<img>` tags.
