import React from 'react';
import { motion } from 'motion/react';
import { styles } from '../style';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.3, 0.75)} className="w-full max-w-5xl mx-auto">
      <div className="bg-tertiary p-8 sm:p-10 rounded-[30px] border border-border hover:border-brand-primary transition-all duration-300 shadow-xl relative group overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute -inset-0 bg-gradient-to-r from-brand-primary/20 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>

        <div className="relative flex flex-col md:flex-row gap-8">
          {/* Header Side: Logo & Date */}
          <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:w-[25%] md:border-r border-border md:pr-8">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-surface border border-border flex justify-center items-center shadow-md shrink-0 p-2">
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-brand-primary font-bold text-[14px] md:text-[16px] tracking-wider uppercase bg-brand-primary/10 px-3 py-1 rounded-full w-fit mb-2 md:mb-4">
                {experience.date}
              </span>
              <h3 className="text-text-primary text-[20px] md:text-[24px] font-bold leading-tight">
                {experience.title}
              </h3>
              <p className="text-text-secondary text-[16px] font-semibold mt-1">{experience.company_name}</p>
            </div>
          </div>

          {/* Content Side: Projects */}
          <div className="flex-1 flex flex-col gap-8">
            {experience.points.map((point, i) => (
              <div key={`exp-point-${i}`} className="relative pl-0 md:pl-4">
                <h4 className="text-text-primary text-[18px] font-bold flex items-center gap-3">
                  {point.title}
                  <div className="h-[1px] flex-1 bg-border/50 hidden sm:block"></div>
                </h4>
                <p className="text-text-secondary text-[15px] mt-2 leading-7 opacity-90">{point.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {point.tags.map((tag, tIndex) => (
                    <span
                      key={`tag-${tIndex}`}
                      className="text-[12px] px-3 py-1.5 rounded-lg bg-surface border border-border text-brand-primary font-medium hover:bg-brand-primary hover:text-white transition-colors duration-200 cursor-default"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="flex flex-col gap-10 py-10">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Professional Journey</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
      </motion.div>

      <div className="flex flex-col gap-12 mt-10 px-2">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, 'work');
