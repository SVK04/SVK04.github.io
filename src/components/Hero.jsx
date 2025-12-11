import React, { useEffect, useState, Suspense } from 'react';
import { motion } from 'motion/react';
import { styles } from '../style';
const ComputersCanvas = React.lazy(() => import('./canvas/Computers.jsx'));

const texts = ['Node.js Developer.', 'React.js Developer.', 'JavaScript Developer.', 'React Native Developer.'];

const Hero = () => {
  const [dynamicText, setDynamicText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDynamicText(currentText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDynamicText(currentText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex(prev => (prev + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="relative w-full h-screen mx-auto min-h-screen">
      <div
        className={`${styles.paddingX} absolute
      insert-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start
      gap-5`}
      >
        <div
          className="flex flex-col 
        justify-center items-center mt-5"
        >
          <div className="w-5 h-5 rounded-full bg-brand-primary animate-pulse" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-text-primary`}>
            Hi, I am <span className="gradient-text">Vaibhav Kaul</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a <span className="text-brand-primary font-semibold">{dynamicText}</span>
            <span className="animate-pulse text-brand-primary">|</span>
          </p>
        </div>
      </div>

      <Suspense fallback={null}>
        <ComputersCanvas />
      </Suspense>

      <div
        className="absolute xs:-bottom-1 bottom-24
      w-full flex justify-center items-center cursor-pointers"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px]
          rounded-3xl border-4 border-text-secondary flex
          justify-center items-start p-2 cursor-pointer"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 bg-text-secondary rounded-full mb-1 cursor-pointer"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
