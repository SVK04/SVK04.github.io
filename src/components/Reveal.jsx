'use client';

import { motion } from 'motion/react';

// Fade-and-rise on first scroll into view. A small client island so the
// sections around it can stay server components (their content and data
// then never ship as JS). Reduced motion is handled by MotionConfig.
const Reveal = ({ as = 'div', delay = 0, y = 16, amount = 0.1, children, ...rest }) => {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.45, delay }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Reveal;
