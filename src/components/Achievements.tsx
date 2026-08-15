"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  BadgeCheck,
  FileText,
  ExternalLink,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import { achievements, type Achievement } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const COLLAPSED_LIMIT = 6;

function AchievementCard({ item, index }: { item: Achievement; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = item.type === "award" ? Trophy : BadgeCheck;

  const hasTopics = !!item.topics && item.topics.length > 0;
  const isLong = hasTopics && item.topics!.length > COLLAPSED_LIMIT;
  const visibleTopics =
    hasTopics && isLong && !expanded ? item.topics!.slice(0, COLLAPSED_LIMIT) : item.topics;

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pb-10 last:pb-0"
    >
      <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg-surface text-accent">
        <Icon size={15} />
      </span>
      <div className="rounded-2xl border border-border bg-bg-surface p-5 transition-colors hover:border-accent/50">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-display text-lg font-semibold">{item.title}</h3>
          <span className="font-mono-alt text-xs text-text-muted">{item.date}</span>
        </div>
        <p className="mt-1 text-sm font-medium text-accent">{item.issuer}</p>
        <p className="mt-2 text-sm text-text-muted">{item.description}</p>

        {hasTopics && (
          <div className="mt-4 rounded-xl border border-border bg-bg-surface-2 p-4">
            <p className="mb-2 flex items-center gap-2 font-mono-alt text-xs uppercase tracking-wide text-text-muted">
              <BookOpen size={13} className="text-accent" />
              Neler Öğrenildi
            </p>
            <ul className="grid gap-1.5 sm:grid-cols-2">
              {visibleTopics!.map((topic) => (
                <li key={topic} className="flex items-start gap-2 text-sm text-text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {topic}
                </li>
              ))}
            </ul>

            {isLong && (
              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                className="mt-3 flex items-center gap-1.5 text-xs font-medium text-accent"
              >
                {expanded ? "Daha Az Göster" : `Tümünü Gör (+${item.topics!.length - COLLAPSED_LIMIT})`}
                <ChevronDown
                  size={13}
                  className={`transition-transform ${expanded ? "rotate-180" : ""}`}
                />
              </button>
            )}
          </div>
        )}

        {item.fileUrl && (
          <a
            href={item.fileUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <FileText size={15} />
            Sertifikayı Görüntüle
            <ExternalLink size={13} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section id="basarilar" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="Başarılar" title="Ödüller & sertifikalar" />

      <div className="relative border-l border-border pl-8">
        {achievements.map((item, i) => (
          <AchievementCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
