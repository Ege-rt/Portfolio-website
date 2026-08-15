"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const infoRows: [string, string][] = [
  ["Age", String(profile.age)],
  ["Location", profile.location],
  ["Education", profile.education],
  ["Interests", profile.interests.join(", ")],
];

export default function About() {
  return (
    <section id="hakkimda" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="About Me" title="Briefly, who am I ?" />

      <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed text-text-muted">{profile.bio}</p>

          <dl className="mt-8 divide-y divide-border border-y border-border">
            {infoRows.map(([label, value]) => (
              <div key={label} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:gap-6">
                <dt className="w-36 shrink-0 font-mono-alt text-sm text-text-muted">{label}</dt>
                <dd className="font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-bg-surface shadow-xl"
        >
          <div className="flex items-center gap-1.5 border-b border-border bg-bg-surface-2 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            <span className="ml-3 font-mono-alt text-xs text-text-muted">about.py</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono-alt text-[13px] leading-relaxed">
            <code>
              <span className="text-text-muted">{"class "}</span>
              <span className="text-accent">Developer</span>
              <span className="text-text-muted">:</span>
              {"\n  "}
              <span className="text-text-muted">def</span>{" "}
              <span className="text-accent-2">__init__</span>
              <span className="text-text-muted">(self):</span>
              {"\n    self.name = "}
              <span className="text-success">
                &quot;{profile.name} {profile.surname}&quot;
              </span>
              {"\n    self.role = "}
              <span className="text-success">&quot;{profile.role}&quot;</span>
              {"\n    self.location = "}
              <span className="text-success">&quot;{profile.location}&quot;</span>
              {"\n    self.focus = ["}
              {profile.interests.map((i) => (
                <span key={i}>
                  {"\n      "}
                  <span className="text-success">&quot;{i}&quot;</span>,
                </span>
              ))}
              {"\n    ]"}
              {"\n\n  "}
              <span className="text-text-muted">def</span>{" "}
              <span className="text-accent-2">motto</span>
              <span className="text-text-muted">(self):</span>
              {"\n    "}
              <span className="text-text-muted">return</span>{" "}
              <span className="text-success">&quot;.&quot;</span>
            </code>
          </pre>
          <div className="flex items-center gap-2 border-t border-border px-4 py-2.5 text-xs text-text-muted">
            <Code2 size={13} className="text-accent" /> Python 3.12
          </div>
        </motion.div>
      </div>
    </section>
  );
}
