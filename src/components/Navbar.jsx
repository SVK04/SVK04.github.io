import { hero, navLinks } from '../constants';

// Server component: plain anchors, no client JS. Stays pinned on scroll.
const linkClass = 'text-text-secondary hover:text-text-primary transition-colors';

const Navbar = () => (
  <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
    <div className="wrap flex h-[72px] items-center justify-between text-[15px]">
      <a href="#top" className="font-semibold text-text-primary">
        {hero.name}
      </a>

      <nav aria-label="Primary" className="flex items-center gap-9">
        {navLinks.map(link =>
          link.external ? (
            <a
              key={link.id}
              href={link.path}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:block ${linkClass}`}
            >
              {link.title}
            </a>
          ) : (
            <a key={link.id} href={`#${link.id}`} className={`hidden sm:block ${linkClass}`}>
              {link.title}
            </a>
          )
        )}
        <a
          href="#contact"
          className="rounded-full bg-text-primary px-5 py-2.5 font-medium text-background transition-colors hover:bg-accent hover:text-white"
        >
          Hire me
        </a>
      </nav>
    </div>
  </header>
);

export default Navbar;
