type Study = {
  name: string;
  principle: string;
  motif: "diagonal" | "marquee" | "arch";
  motifLabel: string;
  swatches: string[];
  href: string;
};

const STUDIES: Study[] = [
  {
    name: "ALRTA",
    principle: "A dozen drifting greens, one tokenised scale.",
    motif: "diagonal",
    motifLabel: "The diagonal",
    swatches: ["#243d17", "#2e5f1c", "#509e2f", "#eef3e8", "#f7f6f1", "#171c17"],
    href: "https://alrtacasestudy.netlify.app/",
  },
  {
    name: "Praise Building",
    principle: "Forest, amber and cream. Nothing else.",
    motif: "marquee",
    motifLabel: "The suburb marquee",
    swatches: ["#06211a", "#0c3b2e", "#14543f", "#d99a3d", "#e9b765", "#f6f1e6"],
    href: "https://praisebuildingcasestudy.netlify.app/",
  },
  {
    name: "Nature Life Science",
    principle: "Sampled straight from the brand's packaging.",
    motif: "arch",
    motifLabel: "The arched frame",
    swatches: ["#0e1a12", "#1a3022", "#264a30", "#7fa178", "#c9a24b", "#f5f2e9"],
    href: "https://naturelifescicasestudy.netlify.app/",
  },
];

function Motif({ kind, colors }: { kind: Study["motif"]; colors: string[] }) {
  if (kind === "diagonal") {
    return (
      <div className="dl-motif dl-diag" style={{ background: colors[1] }}>
        <span style={{ background: colors[2] }} />
        <i style={{ background: colors[0] }} />
      </div>
    );
  }
  if (kind === "marquee") {
    return (
      <div className="dl-motif dl-mq" style={{ background: colors[1] }}>
        <div className="dl-mq-line" style={{ color: colors[5] }}>
          Homes built to <em style={{ color: colors[3] }}>last.</em>
        </div>
        <div className="dl-mq-track" style={{ color: colors[4] }}>
          <span>Paddington · Annandale · Paddington · Annandale · Paddington · Annandale · Paddington · Annandale ·</span>
        </div>
      </div>
    );
  }
  return (
    <div className="dl-motif dl-arch-wrap" style={{ background: colors[0] }}>
      <div className="dl-arch" style={{ borderColor: colors[4], background: `linear-gradient(160deg, ${colors[3]}, ${colors[2]})` }} />
    </div>
  );
}

export default function DesignLanguage() {
  return (
    <section id="design">
      <div className="wrap">
        <div className="tag rv">04 · Design</div>
        <h2 className="h2 rv split">One system per <em>brand</em>.</h2>
        <p className="sub rv">Palette, signature and principle, from my case studies.</p>
        <div className="dl-grid">
          {STUDIES.map((s, i) => (
            <a
              className="dl rv"
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener"
              data-cur
              data-cursor-label="Case study"
              data-tilt
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Motif kind={s.motif} colors={s.swatches} />
              <div className="dl-swatches">
                {s.swatches.map((c, si) => (
                  <span
                    key={c}
                    style={{ background: c, ["--i" as string]: si } as React.CSSProperties}
                    title={c}
                  />
                ))}
              </div>
              <div className="dl-meta">
                <span className="dl-k">{s.motifLabel}</span>
                <h3>{s.name}</h3>
                <p>{s.principle}</p>
                <span className="dl-go">Case study ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
