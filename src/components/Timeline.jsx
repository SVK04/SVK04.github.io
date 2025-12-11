// Timeline.jsx
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export const Timeline = ({ children }) => {
  return (
    <div className="relative mx-auto max-w-7xl flex flex-col space-y-20">
      {/* Central vertical line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] bg-brand-primary rounded-full z-0 hidden md:block"></div>
      {children}
    </div>
  );
};

export const TimelineItem = ({ date, icon, children, index = 0 }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative w-full flex flex-col md:flex-row items-center justify-center ${
        !visible ? 'opacity-0' : 'opacity-100'
      } transition-opacity duration-1000 gap-8 md:gap-0`}
    >
      {/* Left Column */}
      <div
        className={`w-full md:w-[45%] flex ${isLeft ? 'justify-end' : 'justify-start md:justify-end'} px-4 order-2 md:order-1`}
      >
        {isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-tertiary border-b-4 border-primary p-8 rounded-xl shadow-lg w-full relative"
          >
            {/* Arrow pointing to center (Desktop only) */}
            <div className="hidden md:block absolute top-8 right-[-10px] w-0 h-0 border-t-[10px] border-t-transparent border-l-[10px] border-l-tertiary border-b-[10px] border-b-transparent"></div>
            {children}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary font-bold text-xl md:text-2xl text-left md:text-right w-full"
          >
            {date}
          </motion.div>
        )}
      </div>

      {/* Center Column (Icon) */}
      <div className="w-auto md:w-[10%] flex justify-center z-10 order-1 md:order-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={visible ? { scale: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="w-20 h-20 rounded-full flex items-center justify-center bg-primary border-4 border-surface shadow-xl overflow-hidden"
        >
          {icon}
        </motion.div>
      </div>

      {/* Right Column */}
      <div
        className={`w-full md:w-[45%] flex ${!isLeft ? 'justify-start' : 'justify-start md:justify-start'} px-4 order-3 md:order-3`}
      >
        {isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary font-bold text-xl md:text-2xl text-center md:text-left w-full"
          >
            {date}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-tertiary border-b-4 border-primary p-8 rounded-xl shadow-lg w-full relative"
          >
            {/* Arrow pointing to center (Desktop only) */}
            <div className="hidden md:block absolute top-8 left-[-10px] w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-tertiary border-b-[10px] border-b-transparent"></div>
            {children}
          </motion.div>
        )}
      </div>
    </div>
  );
};
