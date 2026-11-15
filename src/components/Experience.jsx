import { experiences } from '../constants';

// Server component: a plain list, one line per role. The detail lives in the
// case studies above.
const Experience = () => (
  <section id="experience" className="wrap scroll-mt-16 pt-24 sm:pt-28">
    <h2 className="label mb-5">Experience</h2>
    <ul className="border-b border-border">
      {experiences.map(exp => (
        <li
          key={exp.id}
          className="grid gap-1 border-t border-border py-5 text-lg md:grid-cols-[1fr_1fr_12rem] md:gap-6"
        >
          <span className="font-medium">{exp.company}</span>
          <span className="text-text-muted">{exp.title}</span>
          <span className="text-text-muted md:text-right">{exp.date}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Experience;
