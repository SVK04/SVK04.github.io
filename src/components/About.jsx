import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { resume } from '../assets/';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px]
      rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="rounded-[20px]
          py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"></img>
          <h3
            className="text-white text-[20px]
          font-bold text-center"
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn('', 0.1, 1)} className="mt-4 text-[17px] max-w-3xl leading-[30px]">
        I’m Vaibhav Kaul, a passionate software developer with hands-on experience in JavaScript, React, Node.js, and
        Three.js. With a knack for quick learning, I craft efficient, scalable, and user-centric solutions that tackle
        real-world challenges. Let's collaborate to turn your ideas into innovative, impactful solutions!
      </motion.p>
      <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
        <a href={resume} download="resume.pdf" target="_blank" rel="noopener noreferrer">
          <button
            className="text-black bg-white font-medium py-2 px-4 rounded-lg mt-4 transition-colors"
            style={{ zIndex: 1 }}
          >
            Download CV
          </button>
        </a>
        <a href="#contact">
          <button className="text-black bg-white font-medium py-2 px-4 rounded-lg mt-4 transition-colors">
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
