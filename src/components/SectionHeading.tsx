"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-10 flex items-end justify-between gap-4">
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-2 flex items-center gap-2 font-mono-alt text-sm text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      </motion.div>
      {action}
    </div>
  );
}
