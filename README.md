# 🚀 Nuxt 3 Starter Project

This is a **Nuxt 3** starter project built with:

- **Node.js 20.5**
- **pnpm** package manager
- **TypeScript**
- Ready for future integrations (i18n, Tailwind, etc.)

---

## 📦 Requirements

Before you begin, make sure you have installed:

- [Node.js 20.5+](https://nodejs.org/)
- [pnpm](https://pnpm.io/) (v8+ recommended)

## Setup

Make sure to install dependencies:

```bash
# pnpm
pnpm install

```

Start the local development server:

```bash
# pnpm
pnpm dev

```

## Production

Build the application for production:

```bash
# pnpm
pnpm build

```

Locally preview production build:

```bash
# pnpm

pnpm preview

```

## 📂 Project Directory Structure

.
├── .nuxt/ # Auto-generated build files
├── node_modules/
├── public/ # Static assets
├── assets/
│ └── css/
│ └── main.css
├── pages/ # Application pages (auto-routed)
├── components/ # Reusable Vue components
├── composables/ # Vue 3 composables
├── layouts/ # App layouts
├── plugins/ # Nuxt plugins
├── locales/ # Translation files (optional)
├── i18n.config.ts # i18n setup
├── app.vue # Root component
├── nuxt.config.ts # Nuxt configuration
├── tailwind.config.js # Tailwind configuration
├── i18n.config.ts # i18n configuration
├── package.json
├── pnpm-lock.yaml
└── README.md
