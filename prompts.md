# Sprint Engineering Prompts Log

This document records the prompt progression and technical directives used throughout the iterative development of the **Prodesk IT** corporate web application.

---

## 1. Project Initialization & Phase 1: Core Architecture

### Prompt 1.1 — Architecture & Layout Specification
> "Initialize a clean, production-ready static web project for a corporate IT and cloud solutions agency named 'Prodesk IT'. 
> - Build using vanilla HTML5, CSS3, and minimal vanilla JavaScript (no build tools, libraries, or external frameworks).
> - Establish a semantic layout using `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` elements with proper heading hierarchy (single `<h1>`, then sequential `<h2>` and `<h3>`).
> - Implement a mobile-first responsive grid across 320px, 768px, and 1024px+ viewports with zero horizontal scrolling.
> - Build a responsive navbar with logo aligned left and navigation links on the right. For screens below 768px, collapse navigation into an accessible hamburger menu with `aria-expanded` and `aria-controls` support, closing on link click or Escape key press.
> - Create a Hero section with headline, subheadline, dual primary/secondary CTA buttons, and a visual placeholder.
> - Implement a 3-column Services grid using CSS Grid `repeat(auto-fit, minmax(16rem, 1fr))` to collapse naturally to a single column on mobile without complex media query overrides."

---

## 2. Phase 2: Interaction Design, Typography & Polish

### Prompt 2.1 — Google Fonts & Relative Typography Scale
> "Refactor the typography system to use Google Fonts:
> - Preconnect to Google Fonts and load `Poppins` (weights 600, 700) for headings and `Inter` (weights 400, 500, 600) for body text with `display=swap`.
> - Replace all absolute pixel typography and spacing across stylesheets with relative `rem` and `em` units to respect user browser scaling."

### Prompt 2.2 — Design Tokens & Accessible Interactive States
> "Centralize all color and spacing tokens in `:root` using CSS Custom Properties (`--color-primary`, `--color-secondary`, `--color-bg`, `--color-surface`, `--color-text`, `--color-text-muted`, `--color-border`). Ensure zero hardcoded hex values exist in component rules.
> - Add smooth CSS transition states on all interactive elements (buttons, nav links, footer links, and cards).
> - Implement distinct `:hover`, `:active`, and high-contrast `:focus-visible` states without stripping native keyboard focus indicators.
> - Add a subtle CSS `@keyframes` fade-in-up animation on load for the hero headline, and include a `@media (prefers-reduced-motion: reduce)` override to disable motion for users requesting reduced motion."

---

## 3. Phase 3: Enterprise Scalability, Performance & Dark Mode

### Prompt 3.1 — BEM CSS Architecture Refactor
> "Refactor the CSS stylesheet to strictly follow the Block Element Modifier (BEM) naming convention (`.navbar__link`, `.hero__title`, `.card__desc`, `.btn--primary`). Eliminate bare tag or ID selectors for styling to maintain predictable specificity."

### Prompt 3.2 — Zero CLS & Next-Gen Media Optimization
> "Optimize media delivery for Core Web Vitals and zero Cumulative Layout Shift (CLS):
> - Convert and compress visual assets into next-gen WebP format under `assets/images/`.
> - Ensure all image tags specify explicit `width` and `height` attributes alongside CSS `aspect-ratio` rules.
> - Prioritize above-the-fold hero rendering with `fetchpriority="high"` and `decoding="async"`, strictly avoiding lazy loading on the hero image."

### Prompt 3.3 — System-Level Dark Mode & Zero-FOUT Persistence
> "Engineer an enterprise-grade dark mode architecture:
> - Add an accessible toggle button in the navbar with dynamic SVG icons and `aria-pressed` state tracking.
> - Define dark theme custom property tokens with WCAG AA compliant contrast ratios.
> - Persist user theme preference in `localStorage` inside defensive `try/catch` blocks, syncing with the OS `prefers-color-scheme` media query when no preference is saved.
> - Place a tiny synchronous bootstrapper script in the `<head>` to evaluate and apply `data-theme` before initial paint, eliminating Flash of Unstyled Theme (FOUT)."

### Prompt 3.4 — SEO, Open Graph & Best Practices
> "Add complete SEO, social graph, and metadata requirements:
> - Unique page title, descriptive meta description, canonical link tag, robots meta tag, Open Graph (`og:*`), and Twitter Card tags.
> - Inline SVG favicon data URI to avoid 404 console errors.
> - Ensure all touch targets meet or exceed 44px x 44px."

---

## 4. Documentation & QA Deliverables

### Prompt 4.1 — Project Documentation
> "Create a clear `README.md` covering project overview, directory structure, architectural decisions (accessibility, BEM, design tokens, zero CLS, theme persistence), and local execution commands using lightweight static servers."

### Prompt 4.2 — Technical QA Walkthrough Script
> "Prepare a concise 2-to-3-minute technical QA video script. Structure it with clear on-screen actions (DevTools viewport testing, keyboard navigation, theme toggle inspection, and Lighthouse audit) and matching narration lines demonstrating engineering decisions."
