# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Architecture

This is a personal portfolio website with a blog, built with Next.js 16 App Router, TailwindCSS v4, and TypeScript.

### Key Directories

- `app/` - Next.js App Router pages and layouts
- `components/` - React components (page-level and shared)
- `components/ui/` - shadcn/ui base components
- `lib/` - Utility functions (`cn` for class merging, date formatting)
- `posts/` - Blog posts as MDX files with frontmatter

### Blog System

Blog posts are MDX files in `posts/` with this frontmatter structure:

```yaml
---
title: "Post Title"
date: 2025-02-07T21:56
excerpt: "Brief description"
tags: ["tag1", "tag2"]
---
```

Posts are statically generated via `generateStaticParams()` in `app/blog/[slug]/page.tsx`. The blog list (`app/blog/page.tsx`) reads posts from the filesystem and sorts by date.

### Styling

- TailwindCSS v4 with CSS variables for theming (light/dark mode)
- Theme colors defined in `app/globals.css` using HSL CSS variables
- shadcn/ui components configured in `components.json`
- `cn()` utility from `lib/utils.ts` for conditional class merging

### Path Aliases

`@/*` maps to the project root (configured in `tsconfig.json`)

## Conventions

- Use kebab-case for file names
