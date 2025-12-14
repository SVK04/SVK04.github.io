import React, { useState } from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../style';
import { skills } from '../constants';
import { motion } from 'motion/react';
import { textVariant } from '../utils/motion';
import {
  IconBrandAngular,
  IconBrandPython,
  IconBrandAws,
  IconBrandSocketIo,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandMongodb,
  IconDatabase,
  IconBrandGraphql,
  IconBrandGit,
  IconBrandDocker,
  IconBrandVscode,
  IconServer,
  IconCode,
} from '@tabler/icons-react';

const categories = ['all', 'frontend', 'backend', 'tools'];

// Mapping skill names to Tabler Icons
const getSkillIcon = skillName => {
  const normalize = name => name.toLowerCase();
  const name = normalize(skillName);

  if (name.includes('html')) return IconBrandHtml5;
  if (name.includes('css')) return IconBrandCss3;
  if (name.includes('javascript')) return IconBrandJavascript;
  if (name.includes('react')) return IconBrandReact;
  if (name.includes('typescript')) return IconBrandTypescript;
  if (name.includes('tailwind')) return IconBrandTailwind;
  if (name.includes('next')) return IconBrandNextjs;
  if (name.includes('node')) return IconBrandNodejs;
  if (name.includes('mongo')) return IconBrandMongodb;
  if (name.includes('postgres') || name.includes('sql')) return IconDatabase;
  if (name.includes('graphql')) return IconBrandGraphql;
  if (name.includes('git')) return IconBrandGit;
  if (name.includes('docker')) return IconBrandDocker;
  if (name.includes('vs code')) return IconBrandVscode;
  if (name.includes('angular')) return IconBrandAngular;
  if (name.includes('python')) return IconBrandPython;
  if (name.includes('aws')) return IconBrandAws;
  if (name.includes('socket')) return IconBrandSocketIo;
  if (name.includes('express')) return IconServer; // Generic for Express if brand missing

  return IconCode; // Default
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = skills.filter(skill => activeCategory === 'all' || skill.category === activeCategory);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Technical Proficiency</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      {/* Category buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 mt-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full transition-all duration-300 capitalize font-medium text-sm
              ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-brand-primary to-accent text-white shadow-lg scale-105'
                  : 'bg-surface-dim/50 text-text-secondary hover:bg-surface-dim border border-border hover:border-brand-primary/30'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {filteredSkills.map((skill, idx) => {
          const IconComponent = getSkillIcon(skill.name);

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group cursor-default relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-3 bg-tertiary/50 rounded-xl group-hover:bg-tertiary transition-colors duration-300 shadow-sm relative z-10">
                <IconComponent
                  size={40}
                  stroke={1.5}
                  className="text-text-secondary group-hover:text-brand-primary transition-colors duration-300"
                />
              </div>

              <h3 className="text-text-primary font-semibold text-sm text-center relative z-10">{skill.name}</h3>

              {/* Optional: Simple automated proficiency indicator if desired, 
                  but minimalist cards usually skip strict progress bars. 
                  We can verify user intent if they really want the percentage back.
                  For now, omitted for cleaner aesthetic.
              */}
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, 'skills');
