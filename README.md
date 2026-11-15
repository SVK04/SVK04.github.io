# Vaibhav Kaul — Portfolio

Personal portfolio site for Vaibhav Kaul, Backend & AI Engineer. Live at **<https://vaibhav-kaul.web.app>**.

## Sections

- **Hero** — introduction and headline
- **Work** — selected projects with architecture flows and tech stacks
- **Experience** — professional history
- **Stack** — technical skills
- **About** — background and engineering signals
- **Contact** — form that sends email through EmailJS
- Light and dark themes, with the choice saved in the browser

## Tech stack

- [Next.js](https://nextjs.org/) (App Router), exported as a static site
- React 19
- Tailwind CSS 3
- [Motion](https://motion.dev/) for animations
- [EmailJS](https://www.emailjs.com/) for the contact form
- Firebase Hosting

## Getting started

Requires Node.js 22+ and Yarn.

```bash
git clone https://github.com/SVK04/SVK04.github.io.git
cd SVK04.github.io
yarn install
cp .env.example .env   # fill in your EmailJS keys
yarn dev
```

Then open <http://localhost:3000>.

## Scripts

| Command          | What it does                         |
| ---------------- | ------------------------------------ |
| `yarn dev`       | Start the dev server                 |
| `yarn build`     | Build the static site into `out/`    |
| `yarn lint`      | Run ESLint                           |
| `yarn format`    | Format `src` with Prettier           |
| `yarn seo-audit` | Run Lighthouse against the live site |

## Editing content

Projects, experience, skills and nav links live in `src/constants/index.js`. Edit that file to update the site's content. The resume is `public/resume.pdf`.

## Deployment

Every push to `master` builds the site and deploys it to Firebase Hosting through GitHub Actions (`.github/workflows/deploy.yml`). The EmailJS keys come from repository secrets: `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID` and `EMAILJS_PUBLIC_KEY`.
