import React from 'react';
import { motion } from 'motion/react';
import { styles } from '../style';
import { github } from '../assets';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => (
  <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
    <div className="bg-[#1a1a1a] p-5 rounded-2xl sm:w-[360px] w-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1">
      <div className="relative w-full h-[230px] overflow-hidden rounded-2xl group">
        <img src={image} alt="project" className="w-full h-full object-cover rounded-2xl" />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end p-3">
          <div
            role="presentation"
            onClick={() => window.open(source_code_link, '_blank')}
            className="bg-gradient-to-br from-primary to-secondary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg"
          >
            <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-semibold text-[22px]">{name}</h3>
        <p className="text-gray-400 mt-2 text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag.name} className={`text-xs px-2 py-1 rounded-full bg-opacity-20 ${tag.color} text-white`}>
            #{tag.name}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]">
          The following projects demonstrate my skills and experience through real-world examples of my work. Each
          project is briefly described and includes links to the corresponding code repositories. These projects
          showcase my ability to solve complex problems, work with diverse technologies, and manage projects
          effectively.
        </motion.p>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'project');
