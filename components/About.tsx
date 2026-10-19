import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="tag rv">01 · About</div>
        <h2 className="h2 rv scramble">
          A full-stack engineer
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
                Full-stack engineer at <b>Empreus IT Support</b>, and the only web developer there.
                I take sites for <b>30+ businesses</b> from design to deployment with{" "}
                <b>Next.js</b>, <b>React</b>, <b>TypeScript</b> and <b>Supabase</b>.
              </p>
              <p>
                <b>Master of Computing</b> (Human-Centred and Creative Computing), ANU. I care about
                design as much as code, hence the WebGL hero.
              </p>
            </div>
            <div className="stat-strip rv">
              <div className="stat">
                <span className="stat-n">2+</span>
                <span className="stat-l">Years experience</span>
              </div>
              <div className="stat">
                <span className="stat-n">30+</span>
                <span className="stat-l">Client businesses</span>
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
                  <span className="v">Software Engineer</span>
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
