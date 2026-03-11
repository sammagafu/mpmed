## MPMED‑SEZ Investor Portal

This repository contains the front‑end for the **MPMED‑SEZ Investor Portal** – a marketing and engagement site for the Ministry of Health’s pharmaceutical and medical‑devices Special Economic Zone in Tanzania.

The app is built with **Vue 3**, **TypeScript**, and **Vite**, using Vue Router, Pinia, and Bootstrap as the base, with a custom design system layered on top.

### Tech stack

- **Framework**: Vue 3 (`<script setup>` SFCs)
- **Language**: TypeScript
- **Build tool**: Vite
- **Routing**: Vue Router
- **State management**: Pinia
- **Styling**: Bootstrap + custom CSS design system (tokens, cards, sections)

### Getting started

```bash
pnpm install    # or npm install / yarn install
pnpm dev        # start dev server
pnpm build      # production build
pnpm preview    # preview production build
```

The main entry point is `src/main.ts`. Global styles and the design system live in `src/style.css`. Core layout and marketing sections are in `src/components` and `src/views`.
