import { useState, useEffect } from 'react';
import { Link } from 'react-router';
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
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[90%] max-w-7xl transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-4'
      }`}
    >
      <div className="glass-card rounded-2xl px-6 py-3 flex justify-between items-center shadow-lg border border-white/20 dark:border-white/10">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          {/* Use a simple text logo or import your image if needed */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-primary to-accent flex items-center justify-center text-white font-bold text-sm">
            VK
          </div>
          <p className="text-text-primary text-[18px] font-bold cursor-pointer flex">
            Vaibhav <span className="sm:block hidden">&nbsp;| Portfolio</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-8">
          <ul className="list-none flex flex-row gap-8">
            {navLinks.map(link => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? 'text-brand-primary font-semibold' : 'text-text-secondary font-medium'
                } hover:text-text-primary text-[16px] cursor-pointer transition-colors relative group`}
              >
                <a href={`#${link.id}`} onClick={() => setActive(link.title)} className="block w-full h-full">
                  {link.title}
                </a>
                {active === link.title && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary rounded-full"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button (Desktop) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-surface-dim transition-colors text-text-primary border border-transparent hover:border-border/50"
            aria-label="Toggle theme"
          >
            {isDark ? <IconSun size={20} /> : <IconMoon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-surface-dim transition-colors text-text-primary"
          >
            {isDark ? <IconSun size={20} /> : <IconMoon size={20} />}
          </button>

          <button className="text-text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
          </button>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                className="absolute p-6 glass-card top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-xl flex flex-col gap-4 border border-white/20 shadow-2xl"
              >
                <ul className="list-none flex flex-col gap-4">
                  {navLinks.map(link => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title ? 'text-brand-primary' : 'text-text-secondary'
                      } font-poppins font-medium cursor-pointer text-[16px]`}
                    >
                      <a
                        href={`#${link.id}`}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setActive(link.title);
                        }}
                        className="block w-full h-full"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
