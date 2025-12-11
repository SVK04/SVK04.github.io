import { motion } from 'motion/react';
import { SectionWrapper } from '../hoc';
import { Timeline, TimelineItem } from './Timeline';
import { styles } from '../style';
import { education } from '../constants';
import { textVariant } from '../utils/motion';

const EducationCard = ({ edu, index }) => (
  <TimelineItem
    date={edu.date}
    icon={<img src={edu.icon} alt={edu.company_name} className="w-[60%] h-[60%] object-contain" />}
    index={index}
  >
    <h3 className="text-text-primary text-[24px] font-bold">{edu.title}</h3>
    <p className="text-text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
      {edu.company_name}
    </p>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {edu.points.map((point, i) => (
        <li key={`education-point-${i}`} className="text-text-primary text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>
  </TimelineItem>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <Timeline>
          {education.map((edu, i) => (
            <EducationCard key={i} edu={edu} index={i} />
          ))}
        </Timeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, 'education');
