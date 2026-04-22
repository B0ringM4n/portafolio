# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

**Requires Node.js v22.18.0** (see `.nvmrc`; v20 does not work). Prefix commands with the correct PATH:

```bash
PATH="/Users/b0ringm4n/.nvm/versions/node/v22.18.0/bin:$PATH" yarn dev    # dev server (Turbopack)
PATH="/Users/b0ringm4n/.nvm/versions/node/v22.18.0/bin:$PATH" yarn build  # static export → out/
PATH="/Users/b0ringm4n/.nvm/versions/node/v22.18.0/bin:$PATH" yarn lint   # ESLint 9
```

Package manager is **yarn** (v1.22.22). No tests are configured.

## Architecture

Single-page portfolio site using **Next.js 16 App Router** with **static export** (`output: 'export'` in `next.config.ts`). No API routes or server-side data fetching. Output goes to `out/`.

### Data-driven content

All site content is typed data in `src/data/` (siteConfig, projects, techStack, navigation). Types live in `src/types/index.ts`. To update content, edit these data files — components read from them directly.

### Dark mode

CSS-class strategy: `.dark` on `<html>`. An inline script in `layout.tsx` reads `localStorage` before React hydrates to prevent flash of wrong theme. The `useTheme` hook manages runtime state. Components that differ by theme must check the `mounted` flag to avoid hydration mismatches.

### Shader gradient (Three.js)

`ShaderBackground` uses `next/dynamic` with `ssr: false` to load `ShaderScene` (depends on `@shadergradient/react`, Three.js, `@react-three/fiber`). These libraries must never be imported at the top level of a server-renderable module. Console warnings about `THREE.Clock deprecated` are internal to `@shadergradient` and can be ignored.

### Animations

`FadeInOnScroll` and `StaggerChildren` in `src/components/animation/` wrap Framer Motion scroll-triggered variants. Use these wrappers for consistency rather than raw `motion.*` elements.

### Tailwind CSS 4

Custom design tokens are defined as CSS variables in `globals.css` and mapped via `@theme inline` to Tailwind utilities: `bg-background`, `text-foreground`, `text-accent` (orange), `text-accent-teal`, `text-accent-lavender`, `bg-section-dark`, `bg-card`, `text-muted`, `border-border`, and font families `font-sans`/`font-mono`/`font-serif`. Use these semantic tokens instead of raw hex values.
