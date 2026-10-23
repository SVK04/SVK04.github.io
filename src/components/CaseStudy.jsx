'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Expandable case study on native <details>/<summary> (keyboard accessible).
// The body is code-split: it downloads on first open, or earlier when the
// visitor hovers or focuses the button, so the initial page stays light.
const loadBody = () => import('./CaseStudyBody');
const CaseStudyBody = dynamic(loadBody, {
  ssr: false,
  loading: () => (
    <p className="mt-6 font-mono text-xs text-text-muted" role="status">
      Loading case study…
    </p>
  ),
});

const CaseStudy = ({ id, projectName }) => {
  const [opened, setOpened] = useState(false);

  return (
    <details
      id={`case-${id}`}
      className="case-study group mt-6 scroll-mt-24"
      onToggle={e => e.currentTarget.open && setOpened(true)}
    >
      <summary
        className="btn-brutal btn-brutal--plain w-fit cursor-pointer select-none list-none px-4 py-2 text-sm"
        onPointerEnter={loadBody}
        onFocus={loadBody}
      >
        <span className="group-open:hidden">Read the case study</span>
        <span className="hidden group-open:inline">Hide the case study</span>
        <span aria-hidden="true" className="transition-transform duration-200 group-open:rotate-180">
          ↓
        </span>
        <span className="sr-only">: {projectName}</span>
      </summary>
      {opened && <CaseStudyBody id={id} />}
    </details>
  );
};

export default CaseStudy;
