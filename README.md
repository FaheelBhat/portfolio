# Faheel Hassan - Personal Portfolio

[![React](https://img.shields.io/badge/React-18.3-%2361DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-%23646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-%2306B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15-black?logo=framer)](https://www.framer.com/motion/)

A modern, fully responsive personal portfolio website built with **React.js**, **Tailwind CSS**, and **Framer Motion** — featuring smooth animations, dark/light mode toggle, glassmorphism design, and interactive project filtering.

## Live Demo

- **Portfolio Website:** [https://faheelbhat.com](https://faheelbhat.com)
- **GitHub Repo:** [https://github.com/FaheelBhat/portfolio](https://github.com/FaheelBhat/portfolio)

## About Me

I'm **Faheel Hassan** — an MCA Graduate and Full Stack Developer with experience in frontend and backend development, AI/ML projects, dashboards, and data-driven applications. I specialize in React.js, Node.js, Python, SQL, and Power BI, building responsive applications and scalable solutions.

- Role: Full Stack Developer | Data Analyst
- Location: Srinagar, Jammu & Kashmir, India
- Email: [faheelhassan533@gmail.com](mailto:faheelhassan533@gmail.com)
- Phone: +91 9541614670

## Features

- Animated typing effect in Hero section
- Interactive particle background
- Dark/Light mode toggle with smooth transitions
- Glassmorphism card design throughout
- Animated skill progress bars
- Project filtering system (Full Stack, Data Analytics, AI/ML)
- Animated counters in About section
- Smooth scroll navigation with active section highlighting
- Contact form with validation and toast notifications
- Responsive mobile menu
- Sticky navbar with blur backdrop
- Back-to-top button
- Loading screen animation
- SEO optimized meta tags
- Fully responsive across all devices

## Tech Stack

### Frontend
- **React 18** — Component-based UI library
- **Vite** — Fast build tool and dev server
- **Tailwind CSS 3** — Utility-first CSS framework
- **Framer Motion** — Animation library for React
- **React Icons** — Icon library (Feather, Font Awesome, Simple Icons)
- **React Type Animation** — Typing effect for hero section

### Tools & Dev
- **ESLint** — Code linting
- **PostCSS / Autoprefixer** — CSS processing
- **Git / GitHub** — Version control

## Project Structure

```
portfolio/
├── public/
│   └── profile.jpg          # Profile photo
├── src/
│   ├── components/           # Reusable components
│   │   ├── BackToTop.jsx
│   │   ├── Footer.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticleBackground.jsx
│   │   └── Toast.jsx
│   ├── hooks/                # Custom React hooks
│   │   └── useTheme.js
│   ├── sections/             # Page sections
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx               # Main app component
│   ├── index.css             # Global styles + Tailwind directives
│   └── main.jsx              # App entry point
├── index.html
├── netlify.toml              # Netlify deployment config
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/FaheelBhat/portfolio.git
cd portfolio
npm install
```

## Development

Start the local dev server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The optimized production build will be output to the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

## Deployment

The project is configured for **Netlify** deployment via `netlify.toml`.

You can also deploy manually:
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting provider

## Sections Overview

| Section | Description |
|---------|-------------|
| **Hero** | Animated typing effect, social links, profile image with glow |
| **About** | Bio, experience cards, education, animated stat counters |
| **Skills** | Categorized skill cards with animated progress bars |
| **Experience** | Timeline layout for work history |
| **Projects** | Filterable project cards with tech stack badges |
| **Education** | Degree, certification, and technologies learned |
| **Contact** | Contact info, social links, validated contact form |

## Social Links

- **GitHub:** [https://github.com/FaheelBhat](https://github.com/FaheelBhat)
- **LinkedIn:** [https://linkedin.com/in/Faheel-bhat](https://linkedin.com/in/Faheel-bhat)
- **Portfolio:** [https://faheelbhat.com](https://faheelbhat.com)
- **Email:** [faheelhassan533@gmail.com](mailto:faheelhassan533@gmail.com)

## License

This project is open source and available under the [MIT License](LICENSE).

---

Designed & Built by **Faheel Hassan** &copy; 2026
