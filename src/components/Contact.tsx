"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // NOT: Gerçek gönderim için EmailJS ya da Resend entegrasyonunu buraya ekle.
    // Örnek: await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY);
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus("sent");
    e.currentTarget.reset();
    setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="Contact" title="Let's talk" />

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between rounded-2xl border border-border bg-bg-surface p-6"
        >
          <div>
            <p className="text-text-muted">
              Feel free to contact me regarding projects, internships or collaboration opportunities. I am always open to discussing technical topics and exchanging ideas.
            </p>

            <div className="mt-6 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-xl border border-border p-3 transition-colors hover:border-accent"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Mail size={17} />
                </span>
                <div>
                  <p className="text-xs text-text-muted">E-mail</p>
                  <p className="text-sm font-medium">{profile.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-border p-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <MapPin size={17} />
                </span>
                <div>
                  <p className="text-xs text-text-muted">Location</p>
                  <p className="text-sm font-medium">{profile.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            {[
              { Icon: FaGithub, href: profile.social.github },
              { Icon: FaLinkedin, href: profile.social.linkedin },
              { Icon: FaInstagram, href: profile.social.instagram },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-all hover:-translate-y-1 hover:border-accent hover:text-accent"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="grid gap-4 rounded-2xl border border-border bg-bg-surface p-6 sm:grid-cols-2"
        >
          <div className="sm:col-span-1">
            <label className="mb-1.5 block text-sm text-text-muted">Name</label>
            <input
              required
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-1.5 block text-sm text-text-muted">E-mail</label>
            <input
              required
              name="email"
              type="email"
              placeholder="your.email@example.com"
              className="w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1.5 block text-sm text-text-muted">Subject</label>
            <input
              required
              name="subject"
              type="text"
              placeholder="What is your message about?"
              className="w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1.5 block text-sm text-text-muted">Message</label>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Type your message here..."
              className="w-full resize-none rounded-xl border border-border bg-bg px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
            />
          </div>
          <button
            type="submit"
            disabled={status !== "idle"}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 font-medium text-white shadow-lg shadow-accent-glow transition-transform hover:scale-[1.02] disabled:opacity-70 sm:col-span-2 sm:w-fit"
          >
            {status === "idle" && (
              <>
                Send Message <Send size={16} />
              </>
            )}
            {status === "sending" && (
              <>
                Sending <Loader2 size={16} className="animate-spin" />
              </>
            )}
            {status === "sent" && (
              <>
                Sent <CheckCircle2 size={16} />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
