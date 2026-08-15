# 🚀 Personal Portfolio & Blog Website

A modern, responsive, and fully customizable personal portfolio and blog website built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Features a sleek cybersecurity/terminal-inspired aesthetic with dark/light mode support.

---

## ✨ Features

- **🎨 Modern Design:** Terminal/Cybersecurity-inspired aesthetic with rich accent colors and micro-interactions.
- **📱 Fully Responsive:** Optimized for all screen sizes (Mobile, Tablet, Desktop).
- **🌗 Dark / Light Mode:** Theme persistence using `localStorage`.
- **⚡ Interactive Elements:** Page boot loader, smooth scrolling, scroll progress bar, scroll-reveal animations, and typewriter effects.
- **👤 Dynamic Sections:**
  - **Hero & About:** Personal bio and quick overview.
  - **Projects:** Showcasing highlights (ByteSniff, Network Security Sentinel, NRF Box, Air Quality Monitor).
  - **Achievements & Certifications:** Interactive timeline display.
  - **Skills Matrix:** Technology stack with visual progress indicators.
  - **Blog Preview:** Cards for recent articles or write-ups.
  - **Contact Form:** Ready for EmailJS / Resend API integration.
  - **CV Downloader:** Direct access to PDF downloads.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Icons** | Lucide Icons, React Icons |
| **Typography** | Inter, Space Grotesk, JetBrains Mono |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── layout.tsx          # Fonts, metadata & theme provider
│   ├── page.tsx            # Main entry point merging all components
│   └── globals.css         # Tailwind tokens & dark/light CSS variables
├── components/
│   ├── Navbar.tsx          # Responsive navigation & theme toggle
│   ├── Loader.tsx          # Terminal boot loading animation
│   ├── Hero.tsx            # Hero section with typewriter effect
│   ├── About.tsx           # Bio section
│   ├── Projects.tsx        # Project showcase cards
│   ├── Skills.tsx           # Technical skills grid
│   ├── Achievements.tsx     # Timeline for awards & certificates
│   ├── Blog.tsx            # Blog post preview cards
│   ├── Contact.tsx         # Contact form component
│   └── Footer.tsx          # Footer links
├── data/
│   └── portfolio.ts        # 🔑 Centralized site configuration & data
└── lib/
    └── useTheme.ts         # Custom theme state management hook
