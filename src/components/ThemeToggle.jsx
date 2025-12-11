import { motion } from 'motion/react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`
        fixed bottom-10 right-10 z-50 p-4 rounded-full shadow-lg
        transition-colors duration-300
        ${isDark ? 'bg-surface text-yellow-400 border border-gray-700' : 'bg-surface text-brand-primary border border-gray-200'}
      `}
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {isDark ? <IconSun size={24} /> : <IconMoon size={24} />}
      </motion.div>
    </motion.button>
  );
};
