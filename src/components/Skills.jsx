import React, { useState } from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../style';
import { skills } from '../constants';

const categories = ['all', 'frontend', 'backend', 'tools'];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = skills.filter(skill => activeCategory === 'all' || skill.category === activeCategory);

  return (
    <>
      <div>
        <p className={styles.sectionSubText}>&nbsp;</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </div>

      {/* Category buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 mt-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize font-medium
              ${activeCategory === category ? 'bg-brand-primary text-white' : 'bg-surface-dim text-text-secondary hover:bg-tertiary border border-border'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {filteredSkills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-surface-dim p-6 rounded-lg shadow-lg hover:shadow-brand-primary/50 transition-shadow border border-border"
          >
            <h3 className="text-text-primary font-semibold text-lg mb-3">{skill.name}</h3>
            <div className="w-full bg-tertiary h-3 rounded-full overflow-hidden">
              <div
                className="bg-brand-primary h-3 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <div className="text-right mt-1 text-text-secondary">{skill.level}%</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, 'skills');
