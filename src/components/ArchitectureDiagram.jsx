// Server-rendered architecture diagram: inline SVG, no client JS.
// Nodes sit on a grid (`col`, `row`); edges are straight arrows clipped to the
// node boxes. Colors come from theme tokens, so it works in both themes.

const CELL_W = 250;
const CELL_H = 118;
const NODE_W = 172;
const NODE_H = 60;
const GAP = 5; // space between an arrow tip and the node box

const center = node => ({ x: node.col * CELL_W + CELL_W / 2, y: node.row * CELL_H + CELL_H / 2 });

// Distance from a node's center to its box edge along direction (dx, dy).
const exitDistance = (dx, dy) => {
  const tx = dx === 0 ? Infinity : (NODE_W / 2 + GAP) / Math.abs(dx);
  const ty = dy === 0 ? Infinity : (NODE_H / 2 + GAP) / Math.abs(dy);
  return Math.min(tx, ty);
};

const edgeGeometry = (from, to) => {
  const a = center(from);
  const b = center(to);
  const len = Math.hypot(b.x - a.x, b.y - a.y) || 1;
  const dx = (b.x - a.x) / len;
  const dy = (b.y - a.y) / len;
  const t = exitDistance(dx, dy);
  return {
    x1: a.x + dx * t,
    y1: a.y + dy * t,
    x2: b.x - dx * t,
    y2: b.y - dy * t,
    mx: (a.x + b.x) / 2,
    my: (a.y + b.y) / 2,
    horizontal: Math.abs(dy) < 0.01,
    vertical: Math.abs(dx) < 0.01,
  };
};

const EdgeLabel = ({ g, text }) => {
  if (!text) return null;
  // Horizontal: above the line. Vertical: to the right. Diagonal: on the midpoint.
  const x = g.vertical ? g.mx + 8 : g.mx;
  const y = g.horizontal ? g.my - 8 : g.my + 4;
  return (
    <text
      x={x}
      y={y}
      textAnchor={g.vertical ? 'start' : 'middle'}
      className="arch-svg-edge-label fill-text-secondary"
      fontSize="10.5"
    >
      {text}
    </text>
  );
};

const ArchitectureDiagram = ({ id, title, caption, nodes, edges }) => {
  const byId = Object.fromEntries(nodes.map(n => [n.id, n]));
  const cols = Math.max(...nodes.map(n => n.col)) + 1;
  const rows = Math.max(...nodes.map(n => n.row)) + 1;
  const width = cols * CELL_W;
  const height = rows * CELL_H;
  const markerId = `arrow-${id}`;
  const titleId = `diagram-title-${id}`;
  const descId = `diagram-desc-${id}`;

  return (
    <figure className="space-y-3">
      <div
        className="overflow-x-auto rounded-xl border border-border bg-surface-dim/40 p-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        // Scrollable on small screens, so it must be reachable by keyboard.
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        role="region"
        aria-label={`${title} (scrolls sideways on small screens)`}
      >
        <svg
          viewBox={`0 0 ${width} ${height}`}
          width="100%"
          style={{ minWidth: `${cols * 200}px` }}
          role="img"
          aria-labelledby={`${titleId} ${descId}`}
          className="block font-mono"
        >
          <title id={titleId}>{title}</title>
          <desc id={descId}>{caption}</desc>
          <defs>
            <marker
              id={markerId}
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" className="fill-text-secondary" />
            </marker>
          </defs>

          {edges.map(edge => {
            const g = edgeGeometry(byId[edge.from], byId[edge.to]);
            return (
              <g key={`${edge.from}-${edge.to}`}>
                <line
                  x1={g.x1}
                  y1={g.y1}
                  x2={g.x2}
                  y2={g.y2}
                  className="stroke-text-secondary/60"
                  strokeWidth="1.5"
                  markerEnd={`url(#${markerId})`}
                  markerStart={edge.both ? `url(#${markerId})` : undefined}
                />
                <EdgeLabel g={g} text={edge.label} />
              </g>
            );
          })}

          {nodes.map(node => {
            const c = center(node);
            return (
              <g key={node.id}>
                <rect
                  x={c.x - NODE_W / 2}
                  y={c.y - NODE_H / 2}
                  width={NODE_W}
                  height={NODE_H}
                  rx="10"
                  className={node.highlight ? 'fill-surface stroke-accent' : 'fill-surface stroke-border'}
                  strokeWidth={node.highlight ? 2 : 1.25}
                />
                {node.highlight && (
                  <rect
                    x={c.x - NODE_W / 2}
                    y={c.y - NODE_H / 2}
                    width={NODE_W}
                    height={NODE_H}
                    rx="10"
                    className="fill-accent/10"
                  />
                )}
                <text
                  x={c.x}
                  y={c.y - 4}
                  textAnchor="middle"
                  fontSize="12.5"
                  fontWeight="700"
                  className="fill-text-primary font-sans"
                >
                  {node.label}
                </text>
                <text x={c.x} y={c.y + 14} textAnchor="middle" fontSize="10.5" className="fill-text-muted">
                  {node.sub}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <figcaption className="text-sm text-text-secondary leading-relaxed">
        {caption}{' '}
        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted">
          <span className="inline-block w-3 h-3 rounded-sm border-2 border-accent bg-accent/10" aria-hidden="true" />
          parts I built
        </span>
      </figcaption>

      {/* Text alternative: every connection in reading order */}
      <details className="group/text text-sm">
        <summary className="cursor-pointer font-mono text-xs text-text-secondary hover:text-accent w-fit rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
          Diagram as text
        </summary>
        <ul className="mt-2 space-y-1 text-text-secondary">
          {edges.map(edge => (
            <li key={`${edge.from}-${edge.to}`}>
              <span className="text-text-primary">{byId[edge.from].label}</span> {edge.both ? '↔' : '→'}{' '}
              <span className="text-text-primary">{byId[edge.to].label}</span>
              {edge.label && <span className="text-text-muted"> ({edge.label})</span>}
            </li>
          ))}
        </ul>
      </details>
    </figure>
  );
};

export default ArchitectureDiagram;
