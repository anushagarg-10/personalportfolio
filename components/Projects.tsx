import Image from "next/image";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  live?: boolean;
  cat: string;
  link?: { href: string; label: string };
  image?: string;
  art?: "map";
  grad: string;
};

const PROJECTS: Project[] = [
  {
    live: true,
    cat: "Client project",
    title: "Osmia HaaS Platform",
    desc: "A production Hardware-as-a-Service platform for Australian MSPs: quote builder, contract management, asset register, and automated monthly invoicing.",
    tags: ["Next.js", "TypeScript", "Supabase", "Prisma"],
    link: { href: "https://www.osmia.au/", label: "osmia.au" },
    image: "/projects/osmia.jpg",
    grad: "linear-gradient(160deg,#241b0a 0%,#4a350f 55%,#6b4816 100%)",
  },
  {
    live: true,
    cat: "Client project",
    title: "Praise Building",
    desc: "Marketing site for a Sydney residential builder specialising in heritage restorations and custom homes, server-rendered with tuned SEO.",
    tags: ["Next.js", "SSR", "SEO"],
    link: { href: "https://www.praisebuilding.com.au/", label: "praisebuilding.com.au" },
    image: "/projects/praise-building.jpg",
    grad: "linear-gradient(160deg,#14110c 0%,#241d15 55%,#372a19 100%)",
  },
  {
    live: true,
    cat: "Client project",
    title: "Nature Life Science",
    desc: "Marketing site for a poultry health supplement brand (AVC Nutrition) offering herbal and nutritional formulations, with a full product catalog.",
    tags: ["Next.js", "SSR", "SEO"],
    link: { href: "https://naturelifescience.in/", label: "naturelifescience.in" },
    image: "/projects/nature-life-science.jpg",
    grad: "linear-gradient(160deg,#0c1710 0%,#16281b 55%,#204427 100%)",
  },
  {
    cat: "Research · UNSW",
    title: "Human Mobility QA Platform",
    desc: "A React interface for querying and displaying large-scale mobility data, with optimized API communication and data workflows that improved responsiveness.",
    tags: ["React", "Node.js", "MongoDB"],
    art: "map",
    grad: "linear-gradient(160deg,#191330 0%,#2c2154 55%,#3d2d6e 100%)",
  },
];

function BrowserFrame({ image, title, layer }: { image: string; title: string; layer: "bg" | "fg" }) {
  return (
    <div className={`pframe pframe-${layer}`}>
      <div className="pframe-bar">
        <span className="pdot r" />
        <span className="pdot y" />
        <span className="pdot g" />
      </div>
      <div className="pframe-shot">
        <Image
          src={image}
          alt={layer === "fg" ? `${title} screenshot` : ""}
          fill
          sizes="(max-width: 900px) 90vw, 560px"
          style={{ objectPosition: layer === "bg" ? "20% 65%" : "top" }}
        />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="tag rv">03 · Projects</div>
        <h2 className="h2 rv scramble">Things I&apos;ve built.</h2>
        <p className="sub rv">
          A handful of the ones I can show. Most client work at Empreus and beyond stays under NDA.
        </p>

        <div className="pstack">
          {PROJECTS.map((p, i) => {
            const side = i % 2 === 0 ? "from-left" : "from-right";
            const Visual = (
              <div className="pcard-visual" data-tilt style={{ background: p.grad }}>
                {p.image ? (
                  <>
                    <BrowserFrame image={p.image} title={p.title} layer="bg" />
                    <BrowserFrame image={p.image} title={p.title} layer="fg" />
                  </>
                ) : (
                  <div className="caseart-lg" role="img" aria-label={`${p.title} illustration`}>
                    <svg viewBox="0 0 120 120" className="caseart-glyph-lg" aria-hidden="true">
                      <circle cx="60" cy="60" r="46" fill="none" stroke="currentColor" strokeWidth="1.4" opacity=".5" />
                      <circle cx="60" cy="60" r="30" fill="none" stroke="currentColor" strokeWidth="1.4" opacity=".7" />
                      <path
                        d="M18 60 L102 60 M60 18 L60 102 M31 31 L89 89 M89 31 L31 89"
                        stroke="currentColor"
                        strokeWidth="1"
                        opacity=".35"
                      />
                      {[[60, 30], [82, 48], [40, 66], [70, 84], [30, 44], [60, 60]].map(([x, y], i) => (
                        <circle key={i} cx={x} cy={y} r={i === 5 ? 5 : 3} fill="currentColor" opacity={i === 5 ? 1 : 0.85} />
                      ))}
                    </svg>
                  </div>
                )}
              </div>
            );
            return (
              <article className={`pcard rv ${side}`} key={p.title}>
                {p.link ? (
                  <a
                    className="pcard-visual-link"
                    href={p.link.href}
                    target="_blank"
                    rel="noopener"
                    data-cur
                    aria-label={`Visit ${p.title}`}
                  >
                    {Visual}
                  </a>
                ) : (
                  Visual
                )}
                <div className="pcard-info">
                  {p.live ? (
                    <span className="pbadge live">Live</span>
                  ) : (
                    <span className="pbadge">Case study</span>
                  )}
                  <span className="pcat">{p.cat}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="pcard-meta">
                    <div className="tags">
                      {p.tags.map((t) => (
                        <span className="t-chip" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                    {p.link && (
                      <a className="plink" data-cur href={p.link.href} target="_blank" rel="noopener">
                        Visit {p.link.label} ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
