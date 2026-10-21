import Image from "next/image";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  cat: string;
  link: { href: string; label: string };
  caseStudy?: string;
  image: string;
  grad: string;
};

const PROJECTS: Project[] = [
  {
    cat: "Client project",
    title: "Osmia",
    desc: "Multi-tenant SaaS for hardware leasing, built solo.",
    tags: ["Next.js", "Supabase", "Prisma", "Stripe"],
    link: { href: "https://www.osmia.au/", label: "osmia.au" },
    image: "/projects/osmia.jpg",
    grad: "linear-gradient(160deg,#241b0a 0%,#4a350f 55%,#6b4816 100%)",
  },
  {
    cat: "Client project",
    title: "ALRTA",
    desc: "WordPress to Next.js. 89% lighter homepage, zero downtime.",
    tags: ["Next.js", "Migration", "SEO"],
    link: { href: "https://alrta.org.au/", label: "alrta.org.au" },
    caseStudy: "https://alrtacasestudy.netlify.app/",
    image: "/projects/alrta.jpg",
    grad: "linear-gradient(160deg,#07210f 0%,#0e3b1c 55%,#1c5f2c 100%)",
  },
  {
    cat: "Client project",
    title: "Praise Building",
    desc: "Heritage builder site with architectural line animations.",
    tags: ["Next.js", "SSR", "SEO"],
    link: { href: "https://www.praisebuilding.com.au/", label: "praisebuilding.com.au" },
    caseStudy: "https://praisebuildingcasestudy.netlify.app/",
    image: "/projects/praise-building.jpg",
    grad: "linear-gradient(160deg,#14110c 0%,#241d15 55%,#372a19 100%)",
  },
  {
    cat: "Client project",
    title: "Nature Life Science",
    desc: "Herbal poultry supplement brand with a full product catalog.",
    tags: ["Next.js", "SSR", "SEO"],
    link: { href: "https://naturelifescience.in/", label: "naturelifescience.in" },
    caseStudy: "https://naturelifescicasestudy.netlify.app/",
    image: "/projects/nature-life-science.jpg",
    grad: "linear-gradient(160deg,#0c1710 0%,#16281b 55%,#204427 100%)",
  },
];

const CASE_COUNT = PROJECTS.filter((p) => p.caseStudy).length;

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
        <h2 className="h2 rv split">Things I&apos;ve <em>built</em>.</h2>
        <p className="sub rv">
          Client work I can show. {CASE_COUNT} have a full case study.
        </p>

        <div className="pstack">
          {PROJECTS.map((p, i) => {
            const side = i % 2 === 0 ? "from-left" : "from-right";
            const href = p.caseStudy ?? p.link.href;
            return (
              <article className={`pcard rv ${side}`} key={p.title} data-sp>
                <a
                  className="pcard-visual-link"
                  href={href}
                  target="_blank"
                  rel="noopener"
                  data-cur
                  data-cursor-label={p.caseStudy ? "Case study" : "Visit site"}
                  aria-label={p.caseStudy ? `Read the ${p.title} case study` : `Visit ${p.title}`}
                >
                  <div className="pcard-visual" data-tilt style={{ background: p.grad }}>
                    <BrowserFrame image={p.image} title={p.title} layer="bg" />
                    <BrowserFrame image={p.image} title={p.title} layer="fg" />
                    <span className={`pv-chip ${p.caseStudy ? "cs" : ""}`}>
                      {p.caseStudy ? "✦ Case study" : "● Live site"}
                    </span>
                    <span className="pv-idx">{String(i + 1).padStart(2, "0")}</span>
                    <span className="pv-cta">
                      {p.caseStudy ? "Read the case study" : "Visit the site"} →
                    </span>
                  </div>
                </a>
                <div className="pcard-info">
                  <div className="pcard-badges">
                    <span className="pbadge live">Live</span>
                    {p.caseStudy && <span className="pbadge cs">Case study</span>}
                  </div>
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
                    <div className="pcard-actions">
                      {p.caseStudy && (
                        <a className="btn btn-p" data-cur data-mag href={p.caseStudy} target="_blank" rel="noopener">
                          Read the case study →
                        </a>
                      )}
                      <a className="btn btn-g" data-cur data-mag href={p.link.href} target="_blank" rel="noopener">
                        Visit {p.link.label} ↗
                      </a>
                    </div>
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
