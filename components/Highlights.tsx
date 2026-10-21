import type { ReactNode } from "react";

type Lens = "design" | "engineering" | "fullstack";
type Highlight = { n: string; k: string; text: string; icon: ReactNode };

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const ic = {
  people: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17.5" cy="9" r="2.4" />
      <path d="M16.5 14.2c2.6.3 4.5 2.4 4.5 5" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" />
      <path d="M3 12l9 4.5 9-4.5" />
      <path d="M3 16.5L12 21l9-4.5" />
    </svg>
  ),
  swap: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M4 8h13" />
      <path d="M13 4l4 4-4 4" />
      <path d="M20 16H7" />
      <path d="M11 12l-4 4 4 4" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M12 3l7.5 3v5.5c0 4.4-3 8-7.5 9.5-4.5-1.5-7.5-5.1-7.5-9.5V6L12 3z" />
      <path d="M8.8 12.2l2.4 2.4 4.2-4.6" />
    </svg>
  ),
  grid: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
    </svg>
  ),
  pen: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 013 3L8 19l-4 1z" />
      <path d="M14 7l3 3" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M5 4.5h10a3 3 0 013 3V20H8a3 3 0 01-3-3V4.5z" />
      <path d="M5 17a3 3 0 013-3h10" />
    </svg>
  ),
  pulse: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M3 12h4l2.5-6 4 12 2.5-6H21" />
    </svg>
  ),
};

const SETS: Record<Lens, Highlight[]> = {
  design: [
    { n: "3", k: "Case studies", text: "Palette, type and motion, documented.", icon: ic.book },
    { n: "30+", k: "UI components", text: "A reusable React library and site templates.", icon: ic.grid },
    { n: "65%", k: "Easier to update", text: "BlockConvey site, rebuilt from Figma.", icon: ic.pen },
    { n: "30%", k: "Less checking time", text: "Figma-designed dashboards for UNSW researchers.", icon: ic.clock },
  ],
  engineering: [
    { n: "Osmia", k: "SaaS built solo", text: "Multi-tenant platform, 12+ sprints.", icon: ic.layers },
    { n: "70%+", k: "API sync reliability", text: "Retry and backoff on a failing integration.", icon: ic.pulse },
    { n: "10+", k: "Site migrations", text: "WordPress to Next.js, zero lost URLs.", icon: ic.swap },
    { n: "ML2", k: "Essential Eight", text: "Defence client, 19 Intune profiles.", icon: ic.shield },
  ],
  fullstack: [
    { n: "30+", k: "Client businesses", text: "Sole web developer, design to deploy.", icon: ic.people },
    { n: "Osmia", k: "SaaS built solo", text: "Multi-tenant platform, 12+ sprints.", icon: ic.layers },
    { n: "10+", k: "Site migrations", text: "WordPress to Next.js, zero lost URLs.", icon: ic.swap },
    { n: "ML2", k: "Essential Eight", text: "Defence client, 19 Intune profiles.", icon: ic.shield },
  ],
};

export default function Highlights() {
  return (
    <section className="hl-sec" id="highlights">
      <div className="wrap">
        <div className="tag rv">Highlights</div>
        <h2 className="h2 rv split">What I&apos;ve <em>delivered</em>.</h2>
        <div className="hl-grid">
          {(Object.keys(SETS) as Lens[]).flatMap((lens) =>
            SETS[lens].map((h, i) => (
              <article
                className={`hl hl-set hl-set-${lens}`}
                data-tilt
                key={`${lens}-${h.k}`}
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <span className="hl-ic" style={{ animationDelay: `${i * 0.6}s` }}>
                  {h.icon}
                </span>
                <div className="hl-n">{h.n}</div>
                <div className="hl-k">{h.k}</div>
                <p>{h.text}</p>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
