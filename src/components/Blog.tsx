"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="Blog" title="My Writings and Notes" />

      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="flex flex-col rounded-2xl border border-border bg-bg-surface p-5 transition-colors hover:border-accent/50"
          >
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-bg-surface-2 px-2 py-0.5 font-mono-alt text-[11px] text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{post.title}</h3>
            <p className="mt-2 flex-1 text-sm text-text-muted">{post.excerpt}</p>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-text-muted">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} /> {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} /> {post.readTime}
              </span>
            </div>
            <a
              href={`#`}
              className="mt-3 flex items-center gap-1 text-sm font-medium text-accent"
            >
              Read More <ArrowUpRight size={14} />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
