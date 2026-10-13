import type { ReactNode } from "react";

type Job = {
  n: string;
  when: string;
  place: string;
  role: string;
  co: string;
  stat: string;
  color: string;
  bullets: ReactNode[];
};

const JOBS: Job[] = [
  {
    n: "01",
    when: "Jun 2025 to Present",
    place: "Canberra, AU",
    role: "Software Engineer (Frontend)",
    co: "Empreus IT Support",
    stat: "Live SaaS in prod",
    color: "var(--v)",
    bullets: [
      <>
        Shipped a live <b>multi-tenant SaaS platform</b> for hardware leasing (quote builder,
        contracts, asset register, automated invoicing) with Next.js, TypeScript, Supabase &amp;
        Prisma.
      </>,
      <>
        Rebuilt client sites from WordPress onto Next.js &amp; Vercel with SSR-tuned SEO, and built a
        reusable component library used across projects.
      </>,
    ],
  },
  {
    n: "02",
    when: "May 2023 to Jun 2024",
    place: "Remote",
    role: "Product Development Engineer",
    co: "BlockConvey",
    stat: "+50% engagement",
    color: "var(--t)",
    bullets: [
      <>
        Redesigned the company website, lifting user engagement by around <b>50%</b> through
        improved UI &amp; UX.
      </>,
      <>Built responsive Web3 interfaces and integrated APIs across Azure &amp; Google Cloud.</>,
    ],
  },
  {
    n: "03",
    when: "May 2023 to Sep 2023",
    place: "Sydney, AU",
    role: "Research & Development Intern",
    co: "University of New South Wales",
    stat: "+30% usability",
    color: "var(--p)",
    bullets: [
      <>
        Built a full-stack <b>Human Mobility QA platform</b> (React, Node.js, MongoDB) for querying
        and visualizing mobility data, lifting usability and performance by around <b>30%</b>.
      </>,
    ],
  },
];

export default function Experience() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="tag rv">02 · Experience</div>
        <h2 className="h2 rv scramble">Where I&apos;ve worked.</h2>
        <p className="sub rv">
          Shipping production frontends and full-stack features across SaaS, Web3, and research.
        </p>
        <div className="timeline">
          {JOBS.map((j) => (
            <div className="job rv" key={j.co}>
              <div className="jwhen">
                <span className="jnum">{j.n}</span>
                {j.when}
                <span className="place">{j.place}</span>
              </div>
              <div>
                <div className="jhead">
                  <span className="jmark" style={{ background: j.color }}>
                    {j.co[0]}
                  </span>
                  <div>
                    <h3>{j.role}</h3>
                    <div className="co">{j.co}</div>
                  </div>
                  <span className="jstat mono">{j.stat}</span>
                </div>
                <ul>
                  {j.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
