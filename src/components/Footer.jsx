'use client';

import { motion } from 'motion/react';
import { IconBrandGithub, IconBrandLinkedinFilled, IconDownload } from '@tabler/icons-react';
import { resume } from '../assets/';

// ─── Social / contact links ─────────────────────────────────────────────────

const LINKS = [
  {
    id: 'github-link',
    href: 'https://github.com/SVK04',
    icon: IconBrandGithub,
    label: 'GitHub',
    external: true,
    variant: 'default',
  },
  {
    id: 'linkedin-link',
    href: 'https://www.linkedin.com/in/vaibhav-kaul-448889246/',
    icon: IconBrandLinkedinFilled,
    label: 'LinkedIn',
    external: true,
    variant: 'default',
  },
];

// ─── Footer / Identity ──────────────────────────────────────────────────────

const Footer = () => (
  <footer className="border-t border-[rgb(var(--color-border))]" role="contentinfo" aria-label="Identity and contact">
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        {/* Section label */}
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-8">{'//'} Identity</p>

        {/* Name — large monospace treatment */}
        <div className="mb-6">
          <h2
            className="font-mono font-bold leading-none tracking-tight text-text-primary"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 5.5rem)' }}
          >
            VAIBHAV
          </h2>
          <h2
            className="font-mono font-normal leading-none tracking-tight text-text-secondary"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 5.5rem)' }}
          >
            VIRENDAR KAUL
          </h2>
        </div>

        {/* Role + location */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <span className="font-mono text-sm text-text-secondary border border-[rgb(var(--color-border))] px-3 py-1">
            Software Developer
          </span>
          <span className="font-mono text-sm text-text-secondary/60">
            Vadodara, Gujarat, India&nbsp;&nbsp;·&nbsp;&nbsp;Open to Remote
          </span>
        </div>

        {/* CTA links */}
        <div className="flex flex-wrap gap-3">
          {LINKS.map(({ id, href, icon: Icon, label, external, variant }) => (
            <a
              key={id}
              id={id}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className={`flex items-center gap-2 font-mono text-sm border px-4 py-2 transition-colors duration-150 ${
                variant === 'accent'
                  ? 'border-accent/50 text-accent hover:bg-accent/8 hover:border-accent'
                  : 'border-[rgb(var(--color-border))] text-text-secondary hover:border-accent/40 hover:text-accent'
              }`}
            >
              <Icon size={13} aria-hidden="true" />
              {label}
            </a>
          ))}

          {/* Resume — accent-bordered call-to-action */}
          <a
            id="resume-download-link"
            href={resume}
            download="Vaibhav_Kaul_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm border border-accent/50 text-accent px-4 py-2 hover:bg-accent/5 hover:border-accent transition-colors duration-150"
          >
            <IconDownload size={14} aria-hidden="true" />
            Resume.pdf
          </a>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-[rgb(var(--color-border))] mt-16 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="font-mono text-xs text-text-secondary/50">© {new Date().getFullYear()} Vaibhav Virendar Kaul</p>
        <p className="font-mono text-xs text-text-secondary/50">Built with Next.js & Tailwind CSS</p>
      </div>
    </div>
  </footer>
);

export default Footer;
