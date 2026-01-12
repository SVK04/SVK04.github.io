import React from 'react';
import { motion } from 'motion/react';
import { styles } from '../style';
import { services } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { resume } from '../assets/';
import { IconBrowser, IconDeviceMobile, IconServer, IconCode } from '@tabler/icons-react';

const iconMap = {
  frontend: IconBrowser,
  mobile: IconDeviceMobile,
  backend: IconServer,
  default: IconCode,
};

const ServiceCard = ({ index, title, icon }) => {
  const Icon = iconMap[icon] || iconMap.default;

  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
      className="xs:w-[250px] w-full p-[1px] rounded-[20px] shadow-card green-pink-gradient"
    >
      <div className="glass-card rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
        <Icon size={64} className="text-brand-primary drop-shadow-lg" stroke={1.5} />
        <h3 className="text-text-primary text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p variants={fadeIn('', 0.1, 1)} className="mt-4 text-text-secondary text-[17px] max-w-3xl leading-[30px]">
        Full Stack Engineer with 2 years of experience architecting scalable AI-driven platforms and cross-platform
        e-commerce solutions. Expert in building real-time voice infrastructure (WebSockets, VAD) and high-performance
        serverless APIs. Proven track record of reducing integration times by 90% and optimizing bulk data processing
        for enterprise clients.
      </motion.p>
      <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
        <a
          href={resume}
          download="Vaibhav_Kaul_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-primary hover:opacity-90 text-white font-medium py-2 px-6 rounded-lg mt-4 transition-all shadow-md inline-flex items-center justify-center whitespace-nowrap min-w-[150px]"
          style={{ zIndex: 1 }}
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="bg-brand-primary hover:opacity-90 text-white font-medium py-2 px-6 rounded-lg mt-4 transition-all shadow-md inline-flex items-center justify-center whitespace-nowrap min-w-[150px]"
        >
          Get In Touch
        </a>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
