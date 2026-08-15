import { Mail, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { profile, navLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-white">
              <Terminal size={16} />
            </span>
            {profile.name} {profile.surname}
          </div>
          <p className="mt-3 max-w-xs text-sm text-text-muted">{profile.shortBio}</p>
        </div>

        <div>
          <p className="mb-3 font-mono-alt text-xs uppercase tracking-wide text-text-muted">
            Quick Links
          </p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-text-muted transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 font-mono-alt text-xs uppercase tracking-wide text-text-muted">
            Social Media
          </p>
          <div className="flex gap-3">
            {[
              { Icon: FaGithub, href: profile.social.github },
              { Icon: FaLinkedin, href: profile.social.linkedin },
              { Icon: FaInstagram, href: profile.social.instagram },
              { Icon: Mail, href: `mailto:${profile.email}` },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border py-5 text-center font-mono-alt text-xs text-text-muted">
        © {new Date().getFullYear()} {profile.name} {profile.surname}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
