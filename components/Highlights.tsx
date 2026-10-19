import type { ReactNode } from "react";

type Highlight = { n: string; k: string; text: string; icon: ReactNode };

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const HIGHLIGHTS: Highlight[] = [
  {
    n: "30+",
    k: "Client businesses",
    text: "Sole web developer, design to deploy.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <circle cx="17.5" cy="9" r="2.4" />
        <path d="M16.5 14.2c2.6.3 4.5 2.4 4.5 5" />
      </svg>
    ),
  },
  {
    n: "Osmia",
    k: "SaaS built solo",
    text: "Multi-tenant platform, 12+ sprints.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" />
        <path d="M3 12l9 4.5 9-4.5" />
        <path d="M3 16.5L12 21l9-4.5" />
      </svg>
    ),
  },
  {
    n: "10+",
    k: "Site migrations",
    text: "WordPress to Next.js, zero lost URLs.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M4 8h13" />
        <path d="M13 4l4 4-4 4" />
        <path d="M20 16H7" />
        <path d="M11 12l-4 4 4 4" />
      </svg>
    ),
  },
  {
    n: "ML2",
    k: "Essential Eight",
    text: "Defence client, 19 Intune profiles.",
    icon: (
      <svg viewBox="0 0 24 24" {...stroke}>
        <path d="M12 3l7.5 3v5.5c0 4.4-3 8-7.5 9.5-4.5-1.5-7.5-5.1-7.5-9.5V6L12 3z" />
        <path d="M8.8 12.2l2.4 2.4 4.2-4.6" />
      </svg>
    ),
  },
];

export default function Highlights() {
  return (
    <section className="hl-sec" id="highlights">
      <div className="wrap">
        <div className="tag rv">Highlights</div>
        <h2 className="h2 rv scramble">What I&apos;ve delivered.</h2>
        <div className="hl-grid">
          {HIGHLIGHTS.map((h, i) => (
            <article
              className="hl rv"
              data-tilt
              key={h.k}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="hl-ic" style={{ animationDelay: `${i * 0.6}s` }}>
                {h.icon}
              </span>
              <div className="hl-n">{h.n}</div>
              <div className="hl-k">{h.k}</div>
              <p>{h.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
