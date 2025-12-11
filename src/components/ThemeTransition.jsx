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
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.6, duration: 0.2 } }} // Fade out container at very end
          >
            <motion.div
              className="absolute w-[200vw] h-[200vw] bg-gradient-to-tr from-[#050816] via-[#3f4eb8] to-[#f8f9fb]"
              initial={{
                x: '100%',
                y: '-100%',
                rotate: 45,
                transformOrigin: 'center',
              }}
              animate={{
                x: '-40%',
                y: '40%',
                transition: {
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9], // Custom easing for dramatic swoop
                },
              }}
              exit={{
                x: '-150%',
                y: '150%',
                transition: {
                  duration: 0.6,
                  ease: 'easeInOut',
                },
              }}
              style={{
                left: '-50%',
                top: '-50%',
                // The gradient represents: Dark Theme BG -> Primary Brand -> Light Theme BG
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-6xl font-black -rotate-45 tracking-wider opacity-20">SWITCHING</div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ThemeTransition;
