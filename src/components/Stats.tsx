"use client";

import { motion } from "framer-motion";
import { Terminal, Trophy, BadgeCheck, Code2 } from "lucide-react";
import { stats } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  terminal: Terminal,
  trophy: Trophy,
  badge: BadgeCheck,
  code: Code2,
};

export default function Stats() {
  return (
    <section className="relative mx-auto -mt-2 max-w-6xl px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-bg-surface p-6 shadow-sm sm:grid-cols-4 sm:gap-6"
      >
        {stats.map((stat, i) => {
          const Icon = iconMap[stat.icon];
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-3"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Icon size={20} />
              </span>
              <div>
                <p className="font-display text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-text-muted">{stat.label}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
