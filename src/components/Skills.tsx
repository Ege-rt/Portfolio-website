"use client";

import { motion } from "framer-motion";
import {
  FaPython,
  FaLinux,
  FaGitAlt,
  FaNetworkWired,
} from "react-icons/fa";
import { SiWireshark, SiCplusplus, SiEspressif } from "react-icons/si";
import { Radar } from "lucide-react";
import { skills } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  python: FaPython,
  linux: FaLinux,
  networking: FaNetworkWired,
  wireshark: SiWireshark,
  nmap: Radar,
  git: FaGitAlt,
  esp32: SiEspressif,
  cpp: SiCplusplus,
};

export default function Skills() {
  return (
    <section id="yetenekler" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="My Skills" title="Tools & Technologies I Use" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {skills.map((skill, i) => {
          const Icon = iconMap[skill.icon] ?? Radar;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-bg-surface px-4 py-6 text-center transition-colors hover:border-accent"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-surface-2 text-2xl text-text transition-colors group-hover:bg-accent-soft group-hover:text-accent">
                <Icon />
              </span>
              <p className="text-sm font-medium">{skill.name}</p>
              {skill.level && (
                <div className="h-1 w-full overflow-hidden rounded-full bg-bg-surface-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.05 + 0.2 }}
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                  />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
