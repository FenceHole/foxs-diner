# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   └── foxs-diner/         # Fox's Diner website (React + Vite, SEO-optimized)
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, lib/integrations/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## Fox's Diner Website (`artifacts/foxs-diner`)

A fully SEO-optimized, single-page marketing website for Fox's Diner in Munhall, PA.

### Features
- Full-screen hero with real diner exterior photo and KDKA award badge
- Dedicated KDKA PTL Diner Week 2025 feature section (crown jewel — final/best pick)
- Organized menu with Breakfast, Lunch/Dinner, and Drinks & Desserts tabs
- Real customer reviews from Google/Yelp
- Hours & location with Google Maps link
- Order Online CTA (links to foxsdinerpa.com/order)
- Footer with address, phone, social links

### SEO
- Title: "Fox's Diner | #1 Pittsburgh Diner | Munhall, PA | KDKA Featured"
- Full JSON-LD structured data (Restaurant schema with geo, hours, rating)
- Open Graph + Twitter Card meta tags
- Keyword-optimized headings and content
- Smooth scroll, mobile responsive

### Tech Stack
- React + Vite (static frontend)
- Framer Motion (animations)
- react-helmet-async (SEO/head management)
- Tailwind CSS v4 (warm vintage americana theme)
- Lucide React (icons)
- Oswald + DM Sans fonts

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly. Running `tsc` inside a single package will fail if its dependencies haven't been built yet.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite...etc, not `tsc`.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array. `tsc --build` uses this to determine build order and skip up-to-date packages.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references
