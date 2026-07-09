# Zuleidy Briceño — Developer Portfolio

A personal portfolio site built with React and Tailwind CSS, showcasing 12+ years of full-stack development experience across Salesforce, .NET, and enterprise CRM/portal solutions.

**Live site:** _add deployed URL here_

## Tech Stack

- **React 19** — component-based UI
- **Vite** — dev server and build tooling
- **Tailwind CSS 4** — utility-first styling, including dark mode
- **ESLint** — code linting (`eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`)

No backend or database — this is a static, client-rendered single-page site.

## Key Features

- **Dark/light theme toggle** — persists the user's preference to `localStorage` and respects the OS `prefers-color-scheme` on first load, with a flash-free inline script in `index.html`.
- **Scroll-reveal animations** — a custom `useReveal` hook (backed by `IntersectionObserver`) fades and slides sections into view as the user scrolls, via a reusable `<Reveal>` wrapper component.
- **Responsive, single-page layout** — sticky navbar with anchor-link navigation to Experience, Skills, Projects, Education, and Contact sections.
- **Data-driven content sections** — Skills, Experience highlights, Education, and Certifications are rendered from local JS data arrays, making content easy to update without touching markup.
- **Custom theming with gradient accents** — indigo/violet/fuchsia gradient branding, animated blob background effects, and hover micro-interactions throughout.

## Sections

| Section | Description |
|---|---|
| Hero | Name, title, and summary with call-to-action buttons |
| Experience | Career highlights and stats (projects delivered, code reviews, etc.) |
| Skills | Core competencies grouped by category (Backend, Frontend, CRM & Platforms, Security & SSO, Cloud & Storage, etc.) |
| Projects | Cards linking out to GitHub repos for personal projects |
| Education | Degrees, certifications, and languages |
| Contact | Email, phone, and LinkedIn links |

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build to dist/
npm run preview    # preview the production build
npm run lint        # run ESLint
```

## Project Structure

```
src/
├── components/     # Navbar, Hero, Experience, Skills, Projects, Education, Contact, Footer, ThemeToggle, Avatar, Reveal
├── hooks/          # useTheme, useReveal
├── assets/         # profile photo, hero image
├── App.jsx         # page composition
└── main.jsx        # entry point
```
