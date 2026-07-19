export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="badge">
          <span className="dotlive" /> Available for frontend roles · Canberra, AU
        </div>
        <h1>
          <span className="line">
            <span>Frontend engineer</span>
          </span>
          <span className="line">
            <span>
              crafting{" "}
              <em className="g" style={{ fontStyle: "normal" }}>
                fast, elegant
              </em>
            </span>
          </span>
          <span className="line">
            <span>web experiences.</span>
          </span>
        </h1>
        <p className="lead">
          I&apos;m <b>Anusha Garg</b>, a software engineer living in <b>Next.js</b>,{" "}
          <b>React</b> &amp; <b>TypeScript</b>. I&apos;ve shipped a live multi-tenant SaaS
          platform and rebuilt client sites onto modern stacks, obsessing over performance,
          SEO, and clean component design.
        </p>
        <div className="hero-meta">
          <span className="pill">📍 Canberra, Australia</span>
          <span className="pill">✅ Full work rights · 485</span>
          <span className="pill">🎓 M.Computing @ ANU</span>
        </div>
        <div className="cta">
          <a href="#projects" className="btn btn-p" data-cur data-mag>
            View my work →
          </a>
          <a href="mailto:anusha.garg.ag@gmail.com" className="btn btn-g" data-cur data-mag>
            Email me
          </a>
          <div className="socs">
            <a
              className="ic"
              data-cur
              href="https://www.linkedin.com/in/anusha-garg-67a214205/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V8h3v11zM6.5 6.7a1.8 1.8 0 110-3.5 1.8 1.8 0 010 3.5zM19 19h-3v-5.6c0-1.4-.5-2.3-1.7-2.3-.9 0-1.5.6-1.7 1.2-.1.2-.1.5-.1.8V19h-3V8h3v1.5c.4-.6 1.2-1.5 2.8-1.5 2 0 3.5 1.3 3.5 4.2V19z" />
              </svg>
            </a>
            <a
              className="ic"
              data-cur
              href="mailto:anusha.garg.ag@gmail.com"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                <path d="M3 6l9 6.5L21 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="scrollcue">
        SCROLL<div className="l" />
      </div>
    </section>
  );
}
