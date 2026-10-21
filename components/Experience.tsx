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
        Sole web developer for <b>30+ businesses</b>, from design to deployment.
      </>,
      <>
        Built <b>Osmia</b>, a multi-tenant SaaS, solo in 12+ sprints.
      </>,
      <>
        Migrated <b>10+ sites</b> from WordPress to Next.js, losing no URLs.
      </>,
      <>
        <b>Essential Eight</b> ML2 for clients, including defence. DNS for 314 domains.
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
        Rebuilt the company site, now <b>65% easier</b> to update.
      </>,
      <>Web3 frontends and REST APIs on AWS, Azure and Google Cloud.</>,
      <>Ethereum NFT smart contracts with IPFS.</>,
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
        Built the <b>Human Mobility QA</b> platform in React, Node.js and MongoDB.
      </>,
      <>
        Dashboards that saved researchers <b>30% of their time</b>.
      </>,
    ],
  },
];

const DESIGN_ROLES = [
  {
    role: "Designer in Residence",
    org: "10kdesigners",
    when: "2022 to 2023",
    text: "User-centred design practice.",
  },
  {
    role: "UI/UX Designer",
    org: "miurac",
    when: "2022",
    text: "Web and mobile UI, wireframes, prototypes, usability tests.",
  },
  {
    role: "UI/UX Designer",
    org: "Procial",
    when: "2021",
    text: "dApp flows and hi-fi prototypes.",
  },
];

export default function Experience() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="tag rv">02 · Experience</div>
        <h2 className="h2 rv split">Where I&apos;ve <em>worked</em>.</h2>
        <p className="sub rv">Websites, SaaS and security.</p>
        <div className="timeline" data-sp="line">
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
        <div className="dz-head rv">Design roles</div>
        <div className="dz-grid">
          {DESIGN_ROLES.map((d, i) => (
            <div className="dz rv" key={d.org} style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="dz-when mono">{d.when}</span>
              <h4>{d.role}</h4>
              <div className="dz-org">{d.org}</div>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
