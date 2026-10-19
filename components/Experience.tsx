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
    when: "Jul 2025 to Present",
    place: "Canberra, AU",
    role: "Software Engineer",
    co: "Empreus IT Support",
    stat: "Intern to full-time",
    color: "var(--v)",
    bullets: [
      <>
        The only web developer, taking each project end to end for <b>30+ businesses</b>:
        requirements, design, build in Next.js, React &amp; TypeScript, then deploy on Vercel and
        maintain.
      </>,
      <>
        Built <b>Osmia</b>, a multi-tenant B2B SaaS platform, solo over 12+ sprints with Next.js,
        Supabase, Prisma &amp; PostgreSQL, and rebuilt a failing third-party API integration with
        retry and backoff.
      </>,
      <>
        Migrated and redesigned <b>10+ client sites</b> from WordPress to Next.js without losing a
        page, SEO setting or URL. The ALRTA site is now 50% more efficient to maintain.
      </>,
      <>
        Support <b>Essential Eight</b> Maturity Level 2 compliance for clients, including a defence
        industry client, using Intune and Defender, and manage DNS for 314 domains.
      </>,
    ],
  },
  {
    n: "02",
    when: "May 2023 to Jun 2024",
    place: "Remote",
    role: "Product Development Engineer",
    co: "BlockConvey",
    stat: "65% easier to update",
    color: "var(--t)",
    bullets: [
      <>
        Rebuilt the company website from Figma designs with reusable components, so the business
        can update its own site <b>65% more easily</b>.
      </>,
      <>
        Built responsive Web3 frontends connected to backend services through REST APIs on AWS,
        Azure &amp; Google Cloud.
      </>,
      <>
        Wrote and deployed Ethereum NFT smart contracts using IPFS, and set up a blockchain network
        on Google Cloud with a disaster recovery plan.
      </>,
    ],
  },
  {
    n: "03",
    when: "May 2023 to Sep 2023",
    place: "Sydney, AU",
    role: "Research & Development Intern",
    co: "University of New South Wales",
    stat: "30% less checking time",
    color: "var(--p)",
    bullets: [
      <>
        Built the full-stack <b>Human Mobility QA platform</b> in React, Node.js &amp; MongoDB so
        researchers could query and trust large, messy datasets.
      </>,
      <>
        Designed the interface in Figma and built dashboards that saved researchers{" "}
        <b>30% of their time</b> checking results.
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
          Websites, SaaS and security work for small businesses, plus Web3 and research before that.
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
