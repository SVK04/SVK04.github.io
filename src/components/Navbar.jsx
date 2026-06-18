'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';
import { IconSun, IconMoon, IconMenu2, IconX } from '@tabler/icons-react';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-[rgb(var(--color-border))]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => {
            setActive('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-mono text-base font-bold tracking-widest text-text-primary hover:text-accent transition-colors duration-150"
        >
          SVK04<span className="text-accent">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden sm:flex items-center gap-8 list-none">
          {navLinks.map(link => (
            <li key={link.id}>
              {link.external ? (
                <a
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-mono text-sm tracking-widest uppercase transition-colors duration-150 text-text-secondary hover:text-text-primary`}
                >
                  {link.title}
                </a>
              ) : (
                <a
                  href={`#${link.id}`}
                  onClick={() => setActive(link.title)}
                  className={`font-mono text-sm tracking-widest uppercase transition-colors duration-150 relative ${
                    active === link.title ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.title}
                  {active === link.title && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent"
                    />
                  )}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Right: theme toggle + mobile menu */}
        <div className="flex items-center gap-4">
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className="text-text-secondary hover:text-text-primary transition-colors duration-150 p-1"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <IconSun size={16} /> : <IconMoon size={16} />}
          </button>

          <button
            id="mobile-menu-btn"
            className="sm:hidden text-text-secondary hover:text-text-primary transition-colors duration-150"
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden overflow-hidden bg-surface border-b border-[rgb(var(--color-border))]"
          >
            <ul className="list-none px-6 py-5 flex flex-col gap-4">
              {navLinks.map(link => (
                <li key={link.id}>
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMenuOpen(false)}
                      className="font-mono text-sm tracking-widest uppercase text-text-secondary hover:text-text-primary transition-colors duration-150 block"
                    >
                      {link.title}
                    </a>
                  ) : (
                    <a
                      href={`#${link.id}`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setActive(link.title);
                      }}
                      className="font-mono text-sm tracking-widest uppercase text-text-secondary hover:text-text-primary transition-colors duration-150 block"
                    >
                      {link.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
