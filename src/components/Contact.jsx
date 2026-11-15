import Image from 'next/image';
import { contact, hero, resume, socials } from '../constants';
import ContactForm from './ContactForm';

// Closing section and footer in one: the page ends on the ask. Server
// component; only <ContactForm> is client JS.
const Contact = () => (
  <footer id="contact" className="mt-24 scroll-mt-16 bg-text-primary text-background sm:mt-28">
    <div className="wrap pb-10 pt-20 sm:pt-28">
      <h2 className="font-serif text-[clamp(3.1rem,9.5vw,8.5rem)] leading-[0.95] tracking-[-0.03em]">
        {contact.headline.lead}
        <br />
        <em className="text-accent-bright">{contact.headline.accent}</em>
      </h2>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          {hero.photo && (
            <Image
              src={hero.photo.src}
              alt={hero.photo.alt}
              width={144}
              height={144}
              className="mb-8 h-28 w-28 rounded-2xl object-cover sm:h-36 sm:w-36"
            />
          )}
          <p className="max-w-[30ch] text-lg leading-normal text-background/80 sm:text-xl">{contact.text}</p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="btn btn--on-ink">
                {s.label}
              </a>
            ))}
            <a href={resume.href} download={resume.fileName} className="btn btn--on-ink">
              Resume (PDF)
            </a>
          </div>
        </div>

        <ContactForm />
      </div>

      <div className="mt-20 flex flex-col justify-between gap-2 text-sm text-background/60 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {hero.name}
        </p>
        <p>{contact.location}</p>
      </div>
    </div>
  </footer>
);

export default Contact;
