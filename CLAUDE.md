# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Meals Planner** — a mobile-first web app for daily meal planning from a predefined list. Deployed via GitHub Pages.

## Stack

Plain HTML, CSS, and JavaScript. No build step, no bundler, no frameworks.

## Structure

```
index.html          — entry point, app shell
css/style.css       — all styles, mobile-first with responsive breakpoints
js/meals.js         — predefined meal lists (MEALS object, keyed by breakfast/lunch/dinner)
js/app.js           — app logic (picker UI, randomizer, DOM interaction)
```

## Development

Open `index.html` in a browser. No build or install needed. For live reload, use any static server (e.g. `npx serve` or `python3 -m http.server`).

## Deployment

Served from the `main` branch root via GitHub Pages. Push to `main` to deploy.

## Conventions

- Mobile-first responsive design using CSS media queries (breakpoint at 600px)
- Uses `dvh` viewport units for mobile browser compatibility
- Meal data lives in `js/meals.js` as a global `MEALS` object — edit this file to change available meals
- No external dependencies
