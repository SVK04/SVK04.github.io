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
        I’m Vaibhav Kaul, a passionate software developer with hands-on experience in JavaScript, React, Node.js, and
        Three.js. With a knack for quick learning, I craft efficient, scalable, and user-centric solutions that tackle
        real-world challenges. Let&apos;s collaborate to turn your ideas into innovative, impactful solutions!
      </motion.p>
      <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
        <a href={resume} download="resume.pdf" target="_blank" rel="noopener noreferrer">
          <button
            className="text-white bg-brand-primary hover:opacity-90 font-medium py-2 px-4 rounded-lg mt-4 transition-all shadow-md"
            style={{ zIndex: 1 }}
          >
            Download CV
          </button>
        </a>
        <a href="#contact">
          <button className="text-white bg-brand-primary hover:opacity-90 font-medium py-2 px-4 rounded-lg mt-4 transition-all shadow-md">
            Get In Touch
          </button>
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
