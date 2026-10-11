# Prodesk IT

Enterprise technology and digital infrastructure corporate landing page engineered with vanilla HTML5, CSS3, and JavaScript. Built from the ground up for zero-runtime overhead, strict accessibility (WCAG AA), zero cumulative layout shift (CLS), and Lighthouse 100/100 performance.

## Project Structure

```text
Prodesk_project/
├── assets/
│   └── images/
│       ├── hero-workspace.webp
│       ├── feature-cloud.webp
│       ├── feature-devops.webp
│       └── feature-security.webp
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── index.html
└── README.md
```

## Architectural Decisions

### 1. Semantic HTML5 & Accessibility
- Complete semantic hierarchy (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) with a single `<h1>` followed by sequential `<h2>` and `<h3>` tags.
- WCAG AA compliant navigation: "Skip to main content" bypass link, `aria-expanded`, `aria-controls`, `aria-label`, and `aria-pressed` state tracking.
- All interactive targets meet or exceed the 44px x 44px touch boundary.
- Accessible focus indicators (`:focus-visible`) preserved across all controls without removal.

### 2. BEM Methodology & Scope Control
- Entire CSS architecture adheres strictly to Block Element Modifier naming (`.navbar__link`, `.hero__title`, `.btn--primary`).
- Avoids ID or bare tag selectors for component styling to ensure low specificity and maintainability.

### 3. Design Tokens & Zero Hardcoding
- Centralized CSS Custom Properties defined in `:root` and `[data-theme="dark"]`.
- Complete color scale, typography scale (`rem`/`em` only), and spatial grid. Zero arbitrary hex values inside component blocks.
- Fully supports OS-level `prefers-color-scheme` with manual toggle override stored in `localStorage`.
- Synchronous inline script in `<head>` eliminates Flash of Unstyled Theme (FOUT).

### 4. Zero Cumulative Layout Shift (CLS) & Next-Gen Media
- All image elements define explicit `width` and `height` dimensions coupled with CSS `aspect-ratio` rules.
- Hero asset delivered in compressed WebP format with `fetchpriority="high"` and `decoding="async"` to optimize Largest Contentful Paint (LCP) without lazy-loading above-the-fold media.

## Running Locally

Serve via any standard static HTTP server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js npx
npx serve .
```

Open `http://localhost:8000` in any modern web browser.
