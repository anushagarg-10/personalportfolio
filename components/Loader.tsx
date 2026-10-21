"use client";
import { useEffect, useRef, useState } from "react";

const NAME = "Anusha Garg";

// A short branded curtain, shown once per browser session. It is a plain
// overlay on top of fully rendered content, so nothing is hidden from
// crawlers, and a CSS fallback removes it even if scripts never run.
export default function Loader() {
  const [gone, setGone] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const numRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try {
      seen = !!sessionStorage.getItem("ag-loaded");
    } catch {}
    if (reduce || seen) {
      setGone(true);
      return;
    }
    const dur = 1100;
    const start = performance.now();
    let raf = 0;
    let t2 = 0;
    const step = (t: number) => {
      const k = Math.min(1, (t - start) / dur);
      const e = 1 - Math.pow(1 - k, 3);
      if (numRef.current) numRef.current.textContent = String(Math.round(e * 100)).padStart(2, "0");
      if (barRef.current) barRef.current.style.transform = `scaleX(${e})`;
      if (k < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setLeaving(true);
        try {
          sessionStorage.setItem("ag-loaded", "1");
        } catch {}
        t2 = window.setTimeout(() => setGone(true), 1000);
      }
    };
    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`loader ${leaving ? "leave" : ""}`} aria-hidden="true">
      <div className="loader-inner">
        <div className="loader-name">
          {NAME.split("").map((ch, i) => (
            <span key={i} style={{ ["--i" as string]: i } as React.CSSProperties}>
              {ch === " " ? " " : ch}
            </span>
          ))}
        </div>
        <div className="loader-bar">
          <span ref={barRef} />
        </div>
        <span className="loader-num" ref={numRef}>
          00
        </span>
      </div>
    </div>
  );
}
