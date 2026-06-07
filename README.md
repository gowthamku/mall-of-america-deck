# Mall of America Digital Deck

A modern, responsive digital presentation website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Overview

This project recreates a premium digital leasing and destination presentation experience inspired by Mall of America. The website highlights retail opportunities, luxury experiences, dining destinations, attractions, and events through a visually engaging and responsive interface.

The focus of the project was to create a clean, modern, and presentation-driven experience using reusable components, smooth animations, and optimized media assets.

## Live Demo

https://mall-of-america-deck-dun.vercel.app

## Tech Stack

* Next.js
* TypeScript
* Tailwind CSS
* Framer Motion
* React
* Vercel

## Features

* Responsive design for desktop and mobile devices
* Full-screen hero section with video background
* Smooth scroll navigation
* Reusable component architecture
* Framer Motion scroll animations
* Glassmorphism and premium UI elements
* Optimized image rendering using Next.js Image component
* Modern landing-page style presentation layout

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Retail.tsx
│   ├── Luxury.tsx
│   ├── Dining.tsx
│   ├── Attractions.tsx
│   ├── Events.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── FadeIn.tsx
│
public/
├── images/
└── videos/
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Design Decisions

* Used a premium visual style with dark and light contrasting sections.
* Organized content into dedicated sections for retail, luxury, dining, attractions, and events.
* Added subtle motion effects to improve user engagement without distracting from content.
* Applied glassmorphism and layered image layouts to create depth and a modern presentation feel.
* Focused on component reusability and clean project structure for maintainability.

## AI Tools Used

ChatGPT was used for:

* UI and layout brainstorming
* Component architecture suggestions
* Animation ideas using Framer Motion
* Tailwind CSS styling assistance
* Code refinement and debugging support

All final implementation decisions, customization, and integration were completed manually.

## Future Improvements

* Improved accessibility support
* CMS integration for dynamic content
* Additional interactive animations
* Contact and leasing inquiry forms
* Enhanced mobile interactions

## Author

Gowtham Kumar Kummari
