'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';
import { IconSun, IconMoon, IconMenu2, IconX } from '@tabler/icons-react';

// ─── VK Monogram ───────────────────────────────────────────────────────────
// Precision geometric monogram that works from 16px to 32px
const VKMonogram = ({ size = 26 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="VK — Vaibhav Kaul"
    role="img"
  >
    {/* V stroke */}
    <path d="M3 5L9 22L14 10" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
    {/* K left stem */}
    <path d="M14 5V22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    {/* K upper arm */}
    <path d="M14 13.5L25 5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
    {/* K lower arm */}
    <path d="M14 13.5L25 22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
    {/* Accent dot */}
    <rect x="9" y="22" width="2.5" height="2.5" fill="rgb(var(--color-accent))" />
  </svg>
);

// ─── Navbar ─────────────────────────────────────────────────────────────────

const Navbar = () => {
  const [active, setActive] = useState('Work');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-[rgb(var(--color-border))] shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <Link
          href="/"
          onClick={() => {
            setActive('Work');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 text-text-primary hover:text-accent transition-colors duration-150 group"
          aria-label="Vaibhav Kaul — Portfolio Home"
        >
          <div className="p-1.5 rounded border border-[rgb(var(--color-border))] bg-surface/60 group-hover:border-accent/40 transition-colors">
            <VKMonogram size={22} />
          </div>
          <span className="font-mono text-sm font-semibold tracking-tight text-text-primary">Vaibhav Kaul</span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map(link => (
            <div key={link.id}>
              {link.external ? (
                <a
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs tracking-wider uppercase text-text-secondary hover:text-text-primary transition-colors py-1 flex items-center gap-1"
                >
                  {link.title}
                  <span className="text-[10px] text-text-muted">↗</span>
                </a>
              ) : (
                <a
                  href={`#${link.id}`}
                  onClick={() => setActive(link.title)}
                  className={`font-mono text-xs tracking-wider uppercase transition-colors py-1 relative ${
                    active === link.title
                      ? 'text-text-primary font-medium'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.title}
                  {active === link.title && (
                    <motion.span
                      layoutId="active-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                    />
                  )}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Action icons */}
        <div className="flex items-center gap-3">
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className="text-text-secondary hover:text-text-primary border border-[rgb(var(--color-border))] p-2 rounded bg-surface/40 hover:bg-surface transition-all"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <IconSun size={15} /> : <IconMoon size={15} />}
          </button>

          <button
            id="mobile-menu-btn"
            className="md:hidden text-text-secondary hover:text-text-primary border border-[rgb(var(--color-border))] p-2 rounded bg-surface/40 hover:bg-surface transition-all"
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <IconX size={17} /> : <IconMenu2 size={17} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (100% solid surface background) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ backgroundColor: 'rgb(var(--color-surface))' }}
            className="md:hidden overflow-hidden border-b border-[rgb(var(--color-border))] shadow-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <div key={link.id}>
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className="font-mono text-sm tracking-wider uppercase text-text-secondary hover:text-text-primary transition-colors py-2 flex items-center justify-between"
                    >
                      <span>{link.title}</span>
                      <span className="text-xs text-text-muted">↗</span>
                    </a>
                  ) : (
                    <a
                      href={`#${link.id}`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setActive(link.title);
                      }}
                      className={`font-mono text-sm tracking-wider uppercase py-2 flex items-center justify-between transition-colors ${
                        active === link.title
                          ? 'text-accent font-semibold'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      <span>{link.title}</span>
                      {active === link.title && <span className="text-accent text-xs">●</span>}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
