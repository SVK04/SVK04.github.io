import Link from 'next/link';

const NotFound = () => (
  <div className="flex min-h-screen w-full items-center bg-background text-text-primary">
    <div className="wrap">
      <p className="label">404</p>
      <h1 className="mb-9 mt-5 font-serif text-[clamp(3.25rem,10vw,8rem)] leading-[0.92] tracking-[-0.03em]">
        This page <em className="text-accent">isn’t here.</em>
      </h1>
      <Link href="/" className="btn btn--fill">
        Back to the portfolio
      </Link>
    </div>
  </div>
);

export default NotFound;
