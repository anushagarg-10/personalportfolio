"use client";
import { useEffect, useState } from "react";

const COLORS = ["#8b7bff", "#4fe0c6", "#ffcf5c", "#ff6ba9"];

export default function RaysEgg() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    try {
      const n = parseInt(localStorage.getItem("rays") || "0", 10) || 0;
      setCount(n);
    } catch {}
  }, []);

  const burst = (ox: number, oy: number, i: number, N: number) => {
    const p = document.createElement("div");
    p.className = "egg-p";
    p.style.background = COLORS[i % COLORS.length];
    p.style.left = ox + "px";
    p.style.top = oy + "px";
    document.body.appendChild(p);
    const ang = (Math.PI * 2 * i) / N + Math.random() * 0.5;
    const spd = 70 + Math.random() * 95,
      dx = Math.cos(ang) * spd,
      dy = Math.sin(ang) * spd - 30;
    const dur = 750 + Math.random() * 420,
      start = performance.now();
    const step = (t: number) => {
      const k = Math.min(1, (t - start) / dur),
        e = 1 - Math.pow(1 - k, 2);
      p.style.transform = `translate(${dx * e}px,${dy * e + 150 * k * k}px) scale(${1 - k})`;
      p.style.opacity = String(1 - k);
      if (k < 1) requestAnimationFrame(step);
      else p.remove();
    };
    requestAnimationFrame(step);
  };

  const onClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const r = ev.currentTarget.getBoundingClientRect();
    const ox = r.left + r.width / 2,
      oy = r.top + r.height / 2;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const N = reduce ? 8 : 26;
    for (let i = 0; i < N; i++) burst(ox, oy, i, N);
    setCount((c) => {
      const next = c + 1;
      try {
        localStorage.setItem("rays", String(next));
      } catch {}
      return next;
    });
  };

  return (
    <button
      className="egg"
      onClick={onClick}
      aria-label="Trace some rays - click for a spark"
    >
      <span className="spark">✦</span>trace rays
      <span className="egg-c">{count.toLocaleString()}</span>
    </button>
  );
}
