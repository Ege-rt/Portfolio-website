<div align="center">

# ⚡ Ege Rıdvan Tokmak — Personal Portfolio & Blog

**A High-Performance, Cyber-Themed Developer Portfolio & Blog Platform**

[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

---

*Fully responsive, dark/light mode enabled personal web application showcasing cybersecurity projects, technical skills, and interactive system logs.*

</div>

---

## ✨ Features Overview

- 🛡️ **Cyber-Themed Design:** Terminal-inspired aesthetic featuring custom accent glows, smooth transitions, and typewriter hero interactions.
- 📱 **Adaptive Layout:** Flawlessly rendered across Mobile, Tablet, and Desktop displays.
- 🌗 **Persistent Theme Switcher:** Instant Dark/Light mode toggle backed by `localStorage`.
- 🚀 **Interactive Components:** Custom boot loader sequence, scroll progress indicators, and dynamic scroll-reveal animations.
- 👤 **Comprehensive Sections:**
  - **Hero & Bio:** Profile summary and quick statistics.
  - **Project Showcase:** Highlights including *ByteSniff*, *Network Security Sentinel*, *NRF Box*, and *Air Quality Monitor*.
  - **Timeline:** Interactive milestone tracker for competition awards and certificates.
  - **Skills Matrix:** Visual proficiency meters for Python, C/C++, Embedded Hardware, and Networking.
  - **Contact Gateway:** Direct contact form ready for EmailJS / Resend integration.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Icons** | Lucide Icons & React Icons |
| **Typography** | Inter, Space Grotesk, JetBrains Mono |
| **Deployment** | Vercel |

---

## 📁 Project Architecture

```text
src/
├── app/
│   ├── layout.tsx          # Master metadata, fonts & theme provider
│   ├── page.tsx            # Main application pipeline
│   └── globals.css         # Design tokens & color system
├── components/
│   ├── Navbar.tsx          # Navigation header & theme controller
│   ├── Loader.tsx          # Terminal boot sequence animation
│   ├── Hero.tsx            # Interactive hero section
│   ├── About.tsx           # Background & personal bio
│   ├── Projects.tsx        # Dynamic project grid
│   ├── Skills.tsx           # Hardware & Software technical stack
│   ├── Achievements.tsx     # Certifications & achievements timeline
│   ├── Contact.tsx         # User inquiry form
│   └── Footer.tsx          # Footer with social links
└── data/
    └── portfolio.ts        # 🔑 Centralized data store
