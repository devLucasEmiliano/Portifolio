# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev      # Start development server (Next.js with Turbopack)
bun run build    # Build for production
bun run start    # Run production build
bun run lint     # Run ESLint
```

## Architecture

This is a personal portfolio website built with **Next.js 16** (App Router) and **Tailwind CSS v4**.

### Tech Stack
- **Next.js 16** with App Router (`app/` directory)
- **React 19**
- **Tailwind CSS v4** - uses `@import "tailwindcss"` syntax and `@theme inline` for CSS variables
- **next-themes** for dark/light mode toggle
- **lucide-react** for icons
- **Radix UI** primitives available but not currently used for custom UI

### Project Structure
- `app/` - Next.js App Router pages and layouts
- `app/globals.css` - Tailwind v4 config with OKLCH color system and CSS variables
- `components/` - React components (page sections and providers)
- `lib/utils.ts` - `cn()` utility combining clsx + tailwind-merge

### Key Patterns
- Single-page portfolio with anchor navigation (Hero, About, Projects, Experience, Contact sections)
- Path alias `@/*` maps to project root
- Dark mode is default, managed via `ThemeProvider` wrapper and `next-themes`
- Color scheme uses OKLCH color space with semantic CSS variables (--background, --foreground, --primary, etc.)
