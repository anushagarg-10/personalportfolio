import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="tag rv">01 · About</div>
        <h2 className="h2 rv">
          A frontend engineer
          <br />
          who sweats the details.
        </h2>
        <div className="about-grid">
          <div className="about-text rv">
            <p>
              I build user-facing web apps with <b>Next.js (App Router)</b>, <b>React</b>, and{" "}
              <b>TypeScript</b>, from dashboards and data-driven interfaces to full production
              platforms. My work lives where clean UI meets solid engineering: reusable component
              libraries, server-side rendering, and data fetching tuned for speed and SEO.
            </p>
            <p>
              Currently at <b>Empreus IT Support</b> in Canberra, where I shipped a live
              multi-tenant SaaS platform for hardware leasing and rebuilt several client sites from
              WordPress onto modern Next.js stacks. Before that: Web3 interfaces at{" "}
              <b>BlockConvey</b> and a full-stack research platform at <b>UNSW</b>.
            </p>
            <p>
              I&apos;m finishing a <b>Master of Computing</b> at ANU, with coursework in computer
              graphics (ray tracing &amp; path tracing in C++/OpenGL), systems engineering, and
              algorithms. The graphics side is why this page has a canvas that reacts to your cursor.
            </p>
          </div>
          <aside className="card rv">
            <Image
              className="about-photo"
              src="/anusha.jpg"
              alt="Anusha Garg"
              width={1000}
              height={1000}
              sizes="(max-width: 840px) 100vw, 360px"
            />
            <h3>// at a glance</h3>
            <div className="fact">
              <span className="k">Role</span>
              <span className="v">Frontend Engineer</span>
            </div>
            <div className="fact">
              <span className="k">Location</span>
              <span className="v">Canberra, AU</span>
            </div>
            <div className="fact">
              <span className="k">Stack</span>
              <span className="v">Next.js · React · TS</span>
            </div>
            <div className="fact">
              <span className="k">Degree</span>
              <span className="v">M.Computing, ANU</span>
            </div>
            <div className="fact">
              <span className="k">Status</span>
              <span className="v" style={{ color: "var(--t)" }}>
                Open to roles
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
