'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeTransition = () => {
  const { isTransitioning } = useTheme();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <>
          {/* 
            Diagonal Wipe Animation 
            - Starts top-right
            - Ends bottom-left
            - Gradient symbolising the two themes (e.g., Light Indigo to Dark Deep Blue)
          */}
          <motion.div
            className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
          >
            <motion.div
              className={`absolute w-[300vw] h-[300vw] ${
                isTransitioning ? 'bg-brand-primary' : 'bg-transparent'
              } shadow-[0_0_100px_rgba(0,0,0,0.5)]`}
              initial={{
                x: '100%',
                y: '-100%',
                rotate: 45,
              }}
              animate={{
                x: '-50%',
                y: '50%',
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1], // Quintic easing
                },
              }}
              exit={{
                x: '-200%',
                y: '200%',
                transition: {
                  duration: 0.7,
                  ease: 'easeInOut',
                },
              }}
              style={{
                left: '-100%',
                top: '-100%',
              }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ThemeTransition;
