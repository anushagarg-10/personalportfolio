type Project = {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
  live?: boolean;
  cat?: string;
  link?: { href: string; label: string };
};

const PROJECTS: Project[] = [
  {
    live: true,
    cat: "Client project",
    icon: "📦",
    title: "Osmia HaaS Platform",
    desc: "A production Hardware-as-a-Service platform for Australian MSPs, covering the quote builder, contract management, asset register, and automated monthly invoicing, plus its public product site. Built on the Next.js App Router and shipped on Vercel.",
    tags: ["Next.js", "TypeScript", "Supabase", "Prisma"],
    link: { href: "https://www.osmia.au/", label: "Visit osmia.au ↗" },
  },
  {
    live: true,
    cat: "Client project",
    icon: "🏗️",
    title: "Praise Building",
    desc: "Marketing site for a Sydney residential builder specialising in heritage restorations and custom homes. Server-rendered Next.js with tuned data fetching and structured SEO for strong search visibility.",
    tags: ["Next.js", "SSR", "SEO"],
    link: { href: "https://www.praisebuilding.com.au/", label: "Visit praisebuilding.com.au ↗" },
  },
  {
    live: true,
    cat: "Client project",
    icon: "🌿",
    title: "Nature Life Science",
    desc: "Marketing site for a poultry health supplement brand (part of AVC Nutrition) offering herbal and nutritional formulations. Built in Next.js with a product catalog, modal product views, and structured SEO.",
    tags: ["Next.js", "SSR", "SEO"],
    link: { href: "https://naturelifescience.in/", label: "Visit naturelifescience.in ↗" },
  },
  {
    icon: "🗺️",
    title: "Human Mobility QA Platform",
    desc: "A React interface for querying and displaying large-scale mobility data, with optimized API communication and data workflows that improved responsiveness and exploration.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    icon: "🚗",
    title: "PolyRec Vehicle Records",
    desc: "A government vehicle record app with user & admin dashboards, structured forms, and search. Firebase for real-time updates, plus an LLM-based chatbot to assist users.",
    tags: ["Android", "Firebase", "LLM"],
  },
  {
    icon: "🔗",
    title: "Digital Asset Management",
    desc: "Blockchain-powered platform with API-driven workflows for secure digital asset verification, applying distributed-systems concepts to keep provenance trustworthy.",
    tags: ["Web3", "APIs", "Blockchain"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="tag rv">03 · Projects</div>
        <h2 className="h2 rv">Things I&apos;ve built.</h2>
        <p className="sub rv">
          A few builds that show how I think about interfaces, data, and users.
        </p>
        <div className="pgrid">
          {PROJECTS.map((p) => (
            <article className="proj rv" data-tilt key={p.title}>
              {p.live && <span className="pbadge live">Live</span>}
              <div className="picon">{p.icon}</div>
              {p.cat && <span className="pcat">{p.cat}</span>}
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="t-chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  className="plink"
                  data-cur
                  href={p.link.href}
                  target="_blank"
                  rel="noopener"
                >
                  {p.link.label}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
