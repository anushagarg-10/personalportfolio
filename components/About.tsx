import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="tag rv">01 · About</div>
        <h2 className="h2 rv scramble">
          A frontend engineer
          <br />
          who sweats the details.
        </h2>
        <div className="about-grid">
          <figure className="about-portrait rv">
            <div className="blob blob-about" aria-hidden="true" />
            <Image
              className="about-photo"
              src="/anusha.jpg"
              alt="Anusha Garg"
              width={4284}
              height={5712}
              sizes="(max-width: 840px) 100vw, 380px"
            />
          </figure>
          <div className="about-main rv">
            <div className="about-text">
              <p>
                I build user-facing web apps with <b>Next.js</b>, <b>React</b>, and{" "}
                <b>TypeScript</b>: wiring up <b>REST APIs</b>, <b>SEO</b>-tuned SSR, and clean UI
                across client and personal projects. Currently at <b>Empreus IT Support</b> in
                Canberra, shipping a live multi-tenant SaaS platform for hardware leasing and
                rebuilding client sites onto modern Next.js stacks. Before that: Web3 interfaces at{" "}
                <b>BlockConvey</b> and a research platform at <b>UNSW</b>.
              </p>
              <p>
                I hold a <b>Master of Computing</b> from ANU, with coursework in computer graphics
                (ray tracing &amp; path tracing in C++/OpenGL). That&apos;s also why this page opens
                with a hand-written WebGL scene instead of a stock hero.
              </p>
            </div>
            <div className="stat-strip rv">
              <div className="stat">
                <span className="stat-n">2+</span>
                <span className="stat-l">Years experience</span>
              </div>
              <div className="stat">
                <span className="stat-n">20+</span>
                <span className="stat-l">Sites live</span>
              </div>
              <div className="stat">
                <span className="stat-n">50+</span>
                <span className="stat-l">Projects built</span>
              </div>
              <div className="stat">
                <span className="stat-n">M.Comp</span>
                <span className="stat-l">ANU, completed</span>
              </div>
            </div>
            <aside className="card">
              <h3>// at a glance</h3>
              <div className="facts-grid">
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
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
