"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Shield, Radar, Cpu, Wind } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const visualMap: Record<string, { icon: React.ElementType; gradient: string }> = {
  bytesniff: { icon: Shield, gradient: "from-violet-600/40 via-fuchsia-600/20 to-transparent" },
  sentinel: { icon: Radar, gradient: "from-indigo-600/40 via-violet-600/20 to-transparent" },
  nrfbox: { icon: Cpu, gradient: "from-emerald-600/30 via-teal-600/20 to-transparent" },
  airquality: { icon: Wind, gradient: "from-sky-600/30 via-cyan-600/20 to-transparent" },
};

export default function Projects() {
  return (
    <section id="projeler" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="My Projects"
        title="Projects I am working on"
        action={
          <a
            href={"https://github.com/"}
            target="_blank"
            rel="noreferrer"
            className="hidden shrink-0 rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            All Projects <ArrowUpRight size={14} />
          </a>
        }
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, i) => {
          const visual = visualMap[project.image] ?? visualMap.bytesniff;
          const Icon = visual.icon;
          return (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glow-border group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-surface transition-shadow hover:shadow-xl"
            >
              <div
                className={`relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br ${visual.gradient} bg-bg-surface-2`}
              >
                <Icon size={40} className="text-white/70 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                {project.featured && (
                  <span className="absolute left-3 top-3 rounded-full bg-bg/70 px-2.5 py-1 font-mono-alt text-[10px] uppercase tracking-wide text-accent backdrop-blur">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-bg-surface-2 px-2 py-0.5 font-mono-alt text-[11px] text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-3 flex-1 text-sm text-text-muted">{project.description}</p>

                <div className="mt-4 flex items-center gap-3 border-t border-border pt-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="text-text-muted transition-colors hover:text-accent"
                    >
                      <FaGithub size={16} />
                    </a>
                  )}
                  <a
                    href={project.link ?? project.github ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto flex items-center gap-1 text-sm font-medium text-accent"
                  >
                    View Details <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
