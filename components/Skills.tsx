import type { CSSProperties, ReactNode } from "react";

type Skill = { icon: ReactNode; color: string; name: string; desc: string; size?: string };
type Group = { id: string; emoji: string; title: string; items: Skill[]; note?: ReactNode };

const ReactMark = (
  <svg viewBox="-11 -11 22 22" fill="none">
    <circle r="2" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1">
      <ellipse rx="10" ry="4.2" />
      <ellipse rx="10" ry="4.2" transform="rotate(60)" />
      <ellipse rx="10" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const VercelMark = (
  <svg viewBox="0 0 24 24">
    <path d="M12 3L22 21H2Z" fill="currentColor" />
  </svg>
);

const ResponsiveMark = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="13" height="10" rx="1.5" />
    <rect x="16" y="8" width="6" height="12" rx="1.5" />
  </svg>
);

const ComponentMark = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="3" width="7.5" height="7.5" rx="1.6" />
    <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.6" />
    <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.6" />
    <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.6" />
  </svg>
);

const LayoutMark = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M9 9v11" />
  </svg>
);

const SearchMark = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M20 20l-4.5-4.5" />
  </svg>
);

const GROUPS: Group[] = [
  {
    id: "frontend",
    emoji: "01",
    title: "Frontend",
    items: [
      { icon: ReactMark, color: "#0ea5c4", name: "React.js", desc: "Component UIs" },
      { icon: "N", color: "var(--ink)", name: "Next.js", desc: "App Router & SSR" },
      { icon: "~", color: "#0e9bb8", name: "Tailwind CSS", desc: "Utility-first CSS" },
      { icon: "M", color: "#1971e6", name: "Material-UI", desc: "Component library" },
      { icon: ResponsiveMark, color: "#7a6ff0", name: "Responsive Design", desc: "Mobile to desktop" },
      { icon: ComponentMark, color: "#2e9b6b", name: "Component Architecture", desc: "Reusable systems" },
      { icon: LayoutMark, color: "#d63c78", name: "UI / UX", desc: "User-centred design" },
      { icon: SearchMark, color: "#b57a1e", name: "SSR & SEO", desc: "Fast & discoverable" },
      { icon: "3D", color: "#8b7bff", name: "WebGL", desc: "Three.js scenes", size: ".7rem" },
    ],
  },
  {
    id: "languages",
    emoji: "02",
    title: "Languages",
    items: [
      { icon: "TS", color: "#3178C6", name: "TypeScript", desc: "Type-safe development" },
      { icon: "JS", color: "#b8860b", name: "JavaScript", desc: "Interactive web" },
      { icon: "Py", color: "#2e6da4", name: "Python", desc: "Scripting & data" },
      { icon: "Jv", color: "#c2410c", name: "Java", desc: "OOP fundamentals" },
      { icon: "C++", color: "#5f7e9b", name: "C++", desc: "Systems & graphics", size: ".62rem" },
      { icon: "SQL", color: "#3b6fa0", name: "SQL", desc: "Relational queries", size: ".68rem" },
      { icon: "</>", color: "#d9481f", name: "HTML", desc: "Markup & structure", size: ".72rem" },
      { icon: "#", color: "#1572b6", name: "CSS", desc: "Styling & layout" },
    ],
  },
  {
    id: "backend",
    emoji: "03",
    title: "Backend & Data",
    items: [
      { icon: "Nd", color: "#3c8b3c", name: "Node.js", desc: "Server-side JS" },
      { icon: "{ }", color: "#7a6ff0", name: "REST APIs", desc: "Data integration", size: ".78rem" },
      { icon: "S", color: "#2e9b6b", name: "Supabase", desc: "Postgres & auth" },
      { icon: "Pr", color: "var(--ink)", name: "Prisma", desc: "Type-safe ORM" },
      { icon: "Pg", color: "#2f6792", name: "PostgreSQL", desc: "Relational DB" },
      { icon: "Mo", color: "#3fa037", name: "MongoDB", desc: "Document store" },
      { icon: "My", color: "#00758f", name: "MySQL", desc: "Relational DB" },
      { icon: "Fb", color: "#d9902b", name: "Firebase", desc: "Realtime backend" },
      { icon: "SG", color: "#1a82e2", name: "SendGrid", desc: "Transactional email" },
      { icon: "St", color: "#635bff", name: "Stripe", desc: "Payment flows" },
      { icon: "Ka", color: "#d9481f", name: "Kaseya API", desc: "Retry & backoff sync" },
    ],
  },
  {
    id: "tools",
    emoji: "04",
    title: "Tools & Platforms",
    items: [
      { icon: "git", color: "#e44c30", name: "Git", desc: "Version control", size: ".66rem" },
      { icon: VercelMark, color: "var(--ink)", name: "Vercel", desc: "Deploy & hosting" },
      { icon: "VS", color: "#1f7fd1", name: "VS Code", desc: "Editor" },
      { icon: "Az", color: "#1b87d8", name: "Azure", desc: "Cloud services" },
      { icon: "GC", color: "#3c77d9", name: "Google Cloud", desc: "Cloud infra" },
      { icon: "As", color: "#2ba85f", name: "Android Studio", desc: "Android builds" },
      { icon: "GL", color: "#5b7fa0", name: "OpenGL", desc: "Graphics (C++)" },
      { icon: "Wp", color: "#21759b", name: "WordPress", desc: "CMS & migrations" },
      { icon: "GS", color: "#4285f4", name: "Search Console", desc: "SEO reporting" },
      { icon: "AI", color: "#d97757", name: "Claude Code & Copilot", desc: "Daily, always reviewed", size: ".72rem" },
    ],
  },
  {
    id: "delivery",
    emoji: "05",
    title: "Security & Delivery",
    items: [
      { icon: "E8", color: "#d63c78", name: "Essential Eight", desc: "ML2 compliance", size: ".72rem" },
      { icon: "In", color: "#0f6cbd", name: "Microsoft Intune", desc: "Device management" },
      { icon: "Df", color: "#1b87d8", name: "Defender", desc: "Endpoint security" },
      { icon: "Vt", color: "#3c8b3c", name: "Vitest", desc: "Tests & CI/CD" },
      { icon: "GA", color: "#2088ff", name: "GitHub Actions", desc: "CI/CD pipelines" },
      { icon: "En", color: "#0078d4", name: "Entra ID", desc: "Identity & access" },
    ],
  },
  {
    id: "design",
    emoji: "06",
    title: "Design",
    items: [
      { icon: "Fg", color: "#a259ff", name: "Figma", desc: "Interfaces & prototypes" },
      { icon: "Ai", color: "#ff7a1a", name: "Adobe Creative Suite", desc: "Visual design" },
      { icon: ComponentMark, color: "#2e9b6b", name: "Design Systems", desc: "Tokens & libraries" },
      { icon: LayoutMark, color: "#d63c78", name: "UI / UX", desc: "Wireframes to hi-fi" },
      { icon: "Px", color: "#8b7bff", name: "Prototyping", desc: "Flows & interactions" },
      { icon: "Rs", color: "#0f8f79", name: "Usability Testing", desc: "Research-led design" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="blob blob-skills" aria-hidden="true" />
      <div className="wrap">
        <div className="tag rv">05 · Toolkit</div>
        <h2 className="h2 rv split">Tools I <em>work with</em>.</h2>
        <p className="sub rv">What I reach for.</p>
        <div className="skills">
          {GROUPS.map((g) => (
            <div className={`sk sk-${g.id} rv`} key={g.title}>
              <h3>
                <span>{g.emoji}</span> {g.title}
              </h3>
              <div className="stkgrid">
                {g.items.map((it, ii) => (
                  <div
                    className="stk"
                    key={it.name}
                    style={{ ["--i" as string]: ii } as CSSProperties}
                  >
                    <span
                      className="stk-i"
                      style={{ color: it.color, ...(it.size ? { fontSize: it.size } : {}) }}
                    >
                      {it.icon}
                    </span>
                    <div>
                      <div className="stk-n">{it.name}</div>
                      <div className="stk-d">{it.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              {g.note && <p className="sk-note">{g.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
