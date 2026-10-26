# Befroosh

**The All-in-One Instagram Sales & Direct Commerce Automation Platform**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Meta Partner](https://img.shields.io/badge/Meta-Approved%20Partner-0081fb?style=flat-square&logo=meta)](https://meta.com)

[Live Site](https://befrooosh.vercel.app) &bull; [GitHub Repository](https://github.com/parsanaderidev/befroosh) &bull; [Issue Tracker](https://github.com/parsanaderidev/befroosh/issues)

---

## Overview

Befroosh is a high-performance web platform built for digital creators, brands, and e-commerce merchants operating on Instagram. By leveraging official Meta Graph and Instagram Messaging APIs, Befroosh bridges the gap between social engagement and sales conversion—turning comments, story mentions, and direct messages into automated revenue pipelines without requiring external websites or exposing account credentials.

---

## Core Capabilities

### Direct Message & Comment Automation
- **Keyword Triggers**: Automatically deliver contextual replies and product links when followers comment target keywords on posts, reels, or livestreams.
- **High-Availability Response Engine**: Sub-second automated message dispatch ensuring zero lead drop-off and consistent response rates.
- **Story Mention Handling**: Capture user stories tagging your brand and initiate immediate relationship-building flows.

### In-Chat Storefront & Checkout
- **Native Product Catalogs**: Present interactive product cards, galleries, pricing tiers, and inventory variants directly inside Instagram Direct.
- **Frictionless Lead Capture**: Collect verified phone numbers, shipping details, and transaction receipts within the conversation.

### Security & Official Meta Compliance
- **Direct API Integration**: Operates exclusively through verified Meta and Instagram Graph API endpoints.
- **Credential Safety**: Never requests, collects, or stores Instagram account passwords, maintaining strict compliance with Meta platform terms.

### Revenue Analytics & Attribution
- **Funnel Visualization**: Monitor real-time click-through rates, conversation completion metrics, and revenue generated per post or reel.
- **Audience Directory**: Unified customer contact management with full engagement histories and purchasing behavior.

---

## Technical Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | Server-side rendering, streaming, Turbopack tooling |
| **Language** | TypeScript 5.x | Strict type contracts and interface consistency |
| **Styling** | Tailwind CSS v4 | Curated dark/light design tokens and fluid typography |
| **Runtime & Package Manager** | Bun | High-speed package resolution and development server |
| **Assets** | Optimized Vector Graphics | Official Meta, Instagram, and platform brand assets |

---

## Getting Started

### Prerequisites

Ensure you have one of the following installed:
- **[Bun](https://bun.sh/)** (recommended runtime)
- **[Node.js](https://nodejs.org/)** (v18.17.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/parsanaderidev/befroosh.git
   cd befroosh
   ```

2. Install dependencies:
   ```bash
   bun install
   # or: npm install
   ```

3. Launch the development server:
   ```bash
   bun dev
   # or: npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
bun run build
bun run start
```

---

## Repository Structure

```text
befroosh/
├── app/                  # Next.js App Router (pages, layout, styling)
│   ├── globals.css       # Core design tokens, gradients, animations
│   ├── layout.tsx        # Root HTML shell, fonts, and metadata
│   └── page.tsx          # Landing page composition
├── components/           # Reusable UI component modules
│   ├── Navbar.tsx        # Responsive navigation with mobile drawer and backdrop
│   ├── Hero.tsx          # Hero section with Meta Partner badge and headline
│   ├── CustomerMarquee.tsx # Infinite-scroll client marquee with gradient masks
│   ├── Features.tsx      # Core capability grid
│   ├── Comparison.tsx    # Benchmark comparisons vs traditional chatbots
│   ├── HowItWorks.tsx    # Three-step setup workflow
│   ├── Pricing.tsx       # Dynamic plan selector based on audience size
│   ├── FAQ.tsx           # Accordion frequently asked questions
│   ├── CTA.tsx           # Primary conversion callout banner
│   └── Footer.tsx        # Footer with author attribution and links
├── data/                 # Static content and structured JSON resources
├── public/               # Static assets, fonts, customer avatars, logos
├── LICENSE               # MIT License
└── README.md             # Project documentation
```

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for complete details.

---

## Author & Attribution

Developed by **Parsa Naderi**  
- Portfolio: [parsanaderi-dev.vercel.app](https://parsanaderi-dev.vercel.app)  
- GitHub: [@parsanaderidev](https://github.com/parsanaderidev)
