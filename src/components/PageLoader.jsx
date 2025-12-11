import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start({ opacity: 0, scale: 0.8, transition: { duration: 0.5 } }).then(() => setLoading(false));
    }, 2000);
    return () => clearTimeout(timer);
  }, [controls]);

  if (!loading) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={controls}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex justify-center items-center bg-white"
      >
        <div className="relative flex flex-col justify-center items-center">
          {/* VK initials */}
          <motion.span
            className="text-5xl font-bold text-blue-500"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
          >
            VK
          </motion.span>

          {/* Subtle pulsating circle behind initials */}
          <motion.div
            className="absolute w-24 h-24 rounded-full border-2 border-blue-300"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0.8], opacity: [0, 0.3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageLoader;
