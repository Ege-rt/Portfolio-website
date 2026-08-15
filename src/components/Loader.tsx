"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  "$ whoami",
  "ege_ridvan_tokmak",
  "$ initializing portfolio...",
  "$ modules yüklendi: security, dev, iot",
  "$ hazır.",
];

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < lines.length) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 260);
      return () => clearTimeout(t);
    }
    const done = setTimeout(() => setVisible(false), 380);
    return () => clearTimeout(done);
  }, [lineIndex]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="w-[min(90vw,420px)] rounded-lg border border-border bg-bg-surface p-5 font-mono-alt text-sm shadow-2xl">
            <div className="mb-3 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            </div>
            <div className="space-y-1.5">
              {lines.slice(0, lineIndex).map((line, i) => (
                <p key={i} className="text-text-muted">
                  <span className="text-accent">{line.startsWith("$") ? "" : ""}</span>
                  {line}
                </p>
              ))}
              <span className="inline-block h-4 w-2 bg-accent caret align-middle" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
