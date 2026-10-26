<div align="center">

# Befroosh (بفروش)

**The All-in-One Instagram Sales & Smart DM Automation Platform**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Meta Partner](https://img.shields.io/badge/Meta-Approved%20Partner-0081fb?style=flat-square&logo=meta)](https://meta.com)

[**Live Demo / Portfolio**](https://parsanaderi-dev.vercel.app) • [**Report Bug**](https://github.com/parsanaderidev/befroosh/issues) • [**Request Feature**](https://github.com/parsanaderidev/befroosh/issues)

</div>

---

## 📌 Overview

**Befroosh** is a modern, high-conversion web application designed for Instagram creators, influencers, and e-commerce stores. Built on top of official Meta & Instagram Graph APIs, it transforms standard direct messages and comments into automated sales funnels, lead generation pipelines, and in-chat storefronts without requiring external websites or account passwords.

---

## ✨ Key Features

### ⚡ Smart DM & Comment Automation
- **Instant Keyword Triggers**: Automatically dispatch tailored direct messages when followers leave specific keywords on posts, reels, or stories.
- **100% Response Rate Engine**: Eliminate manual response latency with sub-second message dispatch and customer routing.
- **Story Mention Handling**: Capture user stories tagging your brand and initiate warm follow-up sequences.

### 🛍️ In-Chat Storefront
- **Direct Catalog Showcase**: Display product cards, galleries, pricing, and variants straight inside Instagram Direct.
- **Frictionless Checkout**: Collect delivery addresses, customer phone numbers, and payment receipts without forcing customers off Instagram.

### 🛡️ Official Meta Partner Integration
- **Zero Risk Architecture**: Authenticates strictly via official Instagram Graph APIs.
- **No Password Required**: Never requests or stores Instagram passwords, ensuring 100% account safety and Meta compliance.

### 📊 Real-Time Analytics & Funnels
- **Conversion Tracking**: Monitor click-through rates, message open rates, customer lead captures, and revenue attribution.
- **Customer Directory**: Centralized contact directory with interaction histories and follower metrics.

### 🌟 Social Proof Marquee
- Features live customer integration showcases highlighting top creators and digital storefronts using Befroosh.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[Next.js 16](https://nextjs.org/)** | React Framework with App Router, Turbopack, and SSR |
| **[TypeScript](https://www.typescriptlang.org/)** | Static typing and robust code contracts |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first CSS framework with curated dark/light tokens |
| **[Bun](https://bun.sh/)** | Ultra-fast JavaScript runtime and package manager |
| **Custom Vector Graphics** | Pixel-perfect SVGs and official brand assets for Meta and Instagram |

---

## 🚀 Getting Started

### Prerequisites

- **[Bun](https://bun.sh/)** (recommended) or **[Node.js](https://nodejs.org/)** (`v18.17.0` or higher)

### 1. Clone the Repository

```bash
git clone https://github.com/parsanaderidev/befroosh.git
cd befroosh
```

### 2. Install Dependencies

Using Bun:
```bash
bun install
```

Using npm / pnpm:
```bash
npm install
# or
pnpm install
```

### 3. Run Development Server

```bash
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore the live application with instant hot module reloading.

### 4. Build for Production

```bash
bun run build
bun run start
```

---

## 📂 Project Structure

```text
befroosh/
├── app/                  # Next.js App Router (pages, layout, globals.css)
│   ├── globals.css       # Core design tokens, gradients, animations
│   ├── layout.tsx        # Root layout with font and metadata configurations
│   └── page.tsx          # Main landing page assembling hero, features, comparison
├── components/           # Reusable UI component modules
│   ├── Navbar.tsx        # Responsive navigation with category menus
│   ├── Hero.tsx          # Dynamic hero section with Meta badge & Instagram headline
│   ├── CustomerMarquee.tsx # Infinite-scroll creator marquee with gradient masks
│   ├── Features.tsx      # Feature card grid showcasing Befroosh capabilities
│   ├── Comparison.tsx    # Comparison tables vs. traditional chatbots & manual DMs
│   ├── HowItWorks.tsx    # Step-by-step 3-stage onboarding workflow
│   ├── Pricing.tsx       # Interactive tier slider based on audience size
│   ├── FAQ.tsx           # Accordion FAQ addressing common sales questions
│   ├── CTA.tsx           # Conversion-focused bottom banner
│   └── Footer.tsx        # Site footer with creator attribution & social channels
├── data/                 # Structured JSON data (customers, plans, FAQs)
├── public/               # Static assets, fonts, brand logos, customer avatars
└── LICENSE               # MIT Open Source License
```

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for more information.

---

## 👨‍💻 Creator & Attribution

Crafted with care by **Parsa Naderi**  
🌐 **Portfolio**: [parsanaderi-dev.vercel.app](https://parsanaderi-dev.vercel.app)  
🐙 **GitHub**: [@parsanaderidev](https://github.com/parsanaderidev)
