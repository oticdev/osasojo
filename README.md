# Portfolio

Personal portfolio site: a single-page layout with smooth motion, dark theme, and sections for work, process, stack, and contact.

## What’s on the page

- **Hero** — introduction and primary call-to-action  
- **What I do** — services or focus areas  
- **Projects** — highlighted work  
- **How I work** — process and collaboration  
- **Stack** — tools and technologies  
- **About** — background and photo (`public/profile.jpg`)  
- **CTA / Footer** — contact and links  

Content and copy live in the React components under `src/components/`.

## Tech stack

- [React](https://react.dev/) 19 + [TypeScript](https://www.typescriptlang.org/)  
- [Vite](https://vite.dev/) 8  
- [Tailwind CSS](https://tailwindcss.com/) 4 (via `@tailwindcss/vite`)  
- [Framer Motion](https://www.framer.com/motion/) for animation  

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)

## Scripts

```bash
npm install    # install dependencies
npm run dev    # local dev server (Vite)
npm run build  # typecheck + production build → dist/
npm run preview # serve the production build locally
npm run lint   # ESLint
```

## Project layout

```
src/
  App.tsx           # page shell and section order
  components/       # Nav, Hero, sections, Footer
public/
  profile.jpg       # headshot for About (replace as needed)
```

## Customization

- Edit each section in `src/components/*.tsx` for your own text, links, and project entries.  
- Swap `public/profile.jpg` for your photo; keep the path or update the image `src` in `About.tsx`.  
- Adjust colors and typography via Tailwind classes and global styles in `src/App.css` (and Tailwind config if you add one).

## License

Private project (`private: true` in `package.json`). Change as you like if you open-source it.
