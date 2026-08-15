"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Download, Send, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { profile } from "@/data/portfolio";

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

const socialIcons = [
  { key: "github", Icon: FaGithub, href: profile.social.github },
  { key: "linkedin", Icon: FaLinkedin, href: profile.social.linkedin },
  { key: "instagram", Icon: FaInstagram, href: profile.social.instagram },
  { key: "mail", Icon: Mail, href: `mailto:${profile.email}` },
];

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="anasayfa" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 dot-grid grain-fade opacity-40" />
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-accent/20 blur-[110px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-pink-500/10 blur-[130px]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-surface px-4 py-1.5 text-sm text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            {profile.greeting}
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            {profile.name}
            <br />
            <span className="text-gradient">{profile.surname}</span>
          </h1>

          <p className="mt-4 h-8 font-mono-alt text-lg text-accent sm:text-xl">
            {typed}
            <span className="caret border-r-2 border-accent" />
          </p>

          <p className="mt-5 max-w-xl text-text-muted sm:text-lg">{profile.shortBio}</p>

          <div className="mt-6 flex items-center gap-4">
            {socialIcons.map(({ key, Icon, href }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={key}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-all hover:-translate-y-1 hover:border-accent hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projeler"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 font-medium text-white shadow-lg shadow-accent-glow transition-transform hover:scale-[1.03] active:scale-95"
            >
              Browse my projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Download my CV <Download size={16} />
            </a>
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Contact Me <Send size={16} />
            </a>
          </div>
        </motion.div>

        {/* Right column — visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center"
        >
          <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80">
            {/* Glow ring behind the photo */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent via-accent-2 to-pink-500 opacity-40 blur-xl" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent to-accent-2 opacity-70" />

            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-bg-surface shadow-2xl">
              <Image
                src="/images/profile.jpg"
                alt={`${profile.name} ${profile.surname}`}
                fill
                priority
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover"
              />
              <div className="scan-line absolute inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
