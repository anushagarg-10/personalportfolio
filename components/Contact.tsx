export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-inner rv">
          <h2 className="split">
            Let&apos;s build <span className="g">something</span>.
          </h2>
          <p>
            Open to UI/UX, software engineering and full-stack roles. Email is fastest.
          </p>
          <div className="cta">
            <a
              href="mailto:anusha.garg.ag@gmail.com"
              className="btn btn-p"
              data-cur
              data-mag
            >
              anusha.garg.ag@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/anushagargg/"
              target="_blank"
              rel="noopener"
              className="btn btn-g"
              data-cur
              data-mag
            >
              LinkedIn
            </a>
            <a
              href="/Anusha_Garg_CV.pdf"
              download="Anusha_Garg_CV.pdf"
              className="btn btn-g"
              data-cur
              data-mag
            >
              Resume ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
