"use client";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [stuck, setStuck] = useState(false);
  const [hidden, setHidden] = useState(false);
  const progRef = useRef<HTMLDivElement>(null);

  // Sync theme state to whatever the pre-hydration script set on <html>,
  // and keep it in sync if anything else flips the attribute later.
  useEffect(() => {
    const sync = () => {
      const t = document.documentElement.getAttribute("data-theme");
      if (t === "dark" || t === "light") setTheme(t);
    };
    sync();
    const mo = new MutationObserver(sync);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => mo.disconnect();
  }, []);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setStuck(y > 20);
      setHidden(y > last && y > 500);
      last = y;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (progRef.current) progRef.current.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  return (
    <>
      <div className="progress" ref={progRef} />
      <header className={`${stuck ? "stuck" : ""} ${hidden ? "hide" : ""}`}>
        <div className="nav">
          <a href="#top" className="logo" data-cur>
            <span className="mark">✦</span> Anusha Garg
          </a>
          <nav className="nav-mid">
            <a href="#about" data-cur>
              About
            </a>
            <a href="#work" data-cur>
              Work
            </a>
            <a href="#projects" data-cur>
              Projects
            </a>
            <a href="#skills" data-cur>
              Skills
            </a>
            <a href="#background" data-cur>
              Education
            </a>
            <a href="#contact" data-cur>
              Contact
            </a>
          </nav>
          <div className="nav-r">
            <button
              className="tbtn gridbtn"
              onClick={() => window.dispatchEvent(new Event("open-nav"))}
              data-cur
              aria-label="Quick navigation (press / or ⌘K)"
              title="Quick navigation (/ or ⌘K)"
            >
              <span className="griddots">
                <i /><i /><i />
                <i /><i /><i />
                <i /><i /><i />
              </span>
            </button>
            <button
              className="tbtn"
              onClick={toggle}
              data-cur
              aria-label="Toggle theme"
            >
              {theme === "light" ? "☀️" : "🌙"}
            </button>
            <a
              href="#contact"
              className="btn btn-p"
              data-cur
              style={{ padding: "10px 18px" }}
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
