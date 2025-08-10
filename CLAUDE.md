# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static, single-page website for Red Pill Holding, a company showcasing their management team and portfolio companies (Red Pill Medical and Your Cell Regeneration). The site is built with vanilla HTML, CSS, and JavaScript and deployed on Vercel.

## Development Commands

Since this is a static website with no build process:
- **Local development**: Open `index.html` directly in a web browser, or use a local server like `python3 -m http.server 8000`
- **Deploy**: The site is configured for Vercel deployment (project ID: `prj_FJ9GACRte1pkNwOheonF7TF48rXC`)

## Architecture

### Core Components

**HTML Structure (`index.html`)**:
- Semantic HTML5 structure with header, main, and footer
- Modal system for team member bio popups
- External accessibility widget integration (Skynet Technologies)

**Styling (`styles.css`)**:
- Mobile-first responsive design with breakpoints at 480px, 768px, and 1024px
- CSS Grid for team member layout (4 columns → 3 → 2 → 1 on smaller screens) 
- Dual theme system (light/dark mode) using CSS classes
- Modern effects: backdrop-filter, gradients, hover animations
- Glass morphism design patterns with rgba backgrounds and blur effects

**JavaScript (`script.js`)**:
- Team member data stored as JavaScript objects with biographical information
- Modal system for displaying detailed team member bios
- Theme toggle functionality with localStorage persistence
- Company logo click handlers for external navigation
- Event-driven architecture using addEventListener patterns

### Key Features

1. **Theme System**: 
   - Default light mode with dark mode toggle
   - Theme preference saved to localStorage
   - Comprehensive CSS classes for both modes

2. **Team Member System**:
   - Data-driven approach with `teamBios` object containing member information
   - Modal popups triggered by clicking team member cards
   - Responsive photo handling and bio text formatting

3. **Responsive Design**:
   - Four breakpoint system (desktop → tablet → mobile → small mobile)
   - Grid layouts that adapt from 4 columns to single column
   - Navigation that hides text labels on mobile, showing only icons

## File Structure

```
/
├── index.html          # Main HTML structure
├── styles.css          # All styling (1000+ lines)
├── script.js           # JavaScript functionality  
├── images/             # Team member photos (PNG/JPG)
├── logos/              # Company logos
└── .vercel/            # Vercel deployment configuration
```

## Data Management

Team member information is stored in the `teamBios` object in `script.js`. Each member has:
- `name`: Full name
- `title`: Job title/position
- `photo`: Path to image file
- `bio`: HTML-formatted biographical text

Company links are stored in the `companyLinks` object mapping company IDs to URLs.

## Image Conventions

- Team photos: Located in `images/` directory, typically PNG format
- Company logos: Located in `logos/` directory
- Photos are displayed in 120px × 120px containers on desktop (responsive scaling)
- All images should be optimized for web use

## Browser Support

Designed for modern browsers supporting:
- CSS Grid and Flexbox
- Backdrop-filter (with -webkit- prefix)
- ES6 JavaScript features
- LocalStorage API