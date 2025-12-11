import React from 'react';
import { motion } from 'motion/react';
import { styles } from '../style';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';
import {
  IconBriefcase,
  IconCalendar,
  IconBuildingSkyscraper,
  IconServer,
  IconDeviceMobile,
  IconBrowser,
  IconCode,
} from '@tabler/icons-react';

const getExperienceIcon = title => {
  const t = title.toLowerCase();
  if (t.includes('backend') || t.includes('node') || t.includes('server')) return IconServer;
  if (t.includes('mobile') || t.includes('react native') || t.includes('android') || t.includes('ios'))
    return IconDeviceMobile;
  if (t.includes('frontend') || t.includes('web') || t.includes('react')) return IconBrowser;
  if (t.includes('developer') || t.includes('engineer')) return IconCode;
  return IconBriefcase;
};

const ExperienceIcon = ({ title, ...props }) => {
  const Icon = getExperienceIcon(title);
  return <Icon {...props} />;
};

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.2, 0.75)} className="w-full max-w-5xl mx-auto">
      <div className="glass-card p-8 sm:p-10 rounded-[24px] hover:border-brand-primary/50 transition-all duration-300 relative group overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-primary/20 transition-all duration-500"></div>

        <div className="relative flex flex-col md:flex-row gap-8">
          {/* Header Side: Logo & Date */}
          <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:w-[25%] md:border-r border-border/50 md:pr-8">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-surface-dim border border-border flex justify-center items-center shadow-lg shrink-0 group-hover:scale-105 transition-transform duration-300">
              <ExperienceIcon title={experience.title} size={40} className="text-brand-primary" stroke={1.5} />
            </div>
            <div className="flex flex-col md:items-start items-center text-center md:text-left">
              <span className="text-brand-primary font-bold text-sm tracking-wider uppercase bg-brand-primary/10 px-3 py-1 rounded-full mb-3 flex items-center gap-1">
                <IconCalendar size={14} />
                {experience.date}
              </span>
              <h3 className="text-text-primary text-xl font-bold leading-tight mb-1">{experience.title}</h3>
              <p className="text-text-secondary text-base font-medium flex items-center gap-1">
                <IconBuildingSkyscraper size={16} />
                {experience.company_name}
              </p>
            </div>
          </div>

          {/* Content Side: Projects */}
          <div className="flex-1 flex flex-col gap-6">
            {experience.points.map((point, i) => (
              <div key={`exp-point-${i}`} className="relative pl-0 md:pl-4 border-l-0 md:border-l border-border/30">
                <div className="flex flex-col gap-2">
                  <h4 className="text-text-primary text-lg font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent md:hidden"></span>
                    {point.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-6 opacity-90">{point.description}</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {point.tags.map((tag, tIndex) => (
                      <span
                        key={`tag-${tIndex}`}
                        className="text-xs px-2.5 py-1 rounded-md bg-surface border border-border/50 text-text-secondary font-medium hover:text-brand-primary hover:border-brand-primary/30 transition-colors duration-200 cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
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

      <div className="flex flex-col gap-8 mt-10 px-2">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, 'experience');
