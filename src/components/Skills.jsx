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
              ${activeCategory === category ? 'bg-[#915eff] text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {filteredSkills.map((skill, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-[#915eff]/50 transition-shadow">
            <h3 className="text-white font-semibold text-lg mb-3">{skill.name}</h3>
            <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
              <div
                className="bg-[#915eff] h-3 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <div className="text-right mt-1 text-gray-300">{skill.level}%</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, 'skills');
