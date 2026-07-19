"use client";
import { useEffect, useRef } from "react";

export default function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let w = 0,
      h = 0,
      raf = 0;
    let pts: { x: number; y: number; vx: number; vy: number }[] = [];
    const mouse = { x: -9999, y: -9999 };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const root = document.documentElement;

    function size() {
      w = cv!.width = window.innerWidth * dpr;
      h = cv!.height = window.innerHeight * dpr;
      cv!.style.width = window.innerWidth + "px";
      cv!.style.height = window.innerHeight + "px";
      const n = Math.min(90, Math.floor(window.innerWidth / 16));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25 * dpr,
        vy: (Math.random() - 0.5) * 0.25 * dpr,
      }));
    }
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX * dpr;
      mouse.y = e.clientY * dpr;
    };
    const onOut = () => {
      mouse.x = mouse.y = -9999;
    };

    size();
    window.addEventListener("resize", size);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onOut);

    function tick() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      const light = root.getAttribute("data-theme") === "light";
      const base = light ? "15,20,40" : "150,140,255";
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - mouse.x,
          dy = p.y - mouse.y,
          d = Math.hypot(dx, dy);
        if (d < 140 * dpr) {
          const f = (140 * dpr - d) / (140 * dpr);
          p.x += (dx / d) * f * 1.6;
          p.y += (dy / d) * f * 1.6;
        }
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i],
            b = pts[j],
            dd = Math.hypot(a.x - b.x, a.y - b.y);
          if (dd < 120 * dpr) {
            ctx.strokeStyle = `rgba(${base},${(1 - dd / (120 * dpr)) * (light ? 0.22 : 0.16)})`;
            ctx.lineWidth = dpr;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.fillStyle = `rgba(${base},${light ? 0.5 : 0.6})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4 * dpr, 0, 7);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    }

    if (!reduce) tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <canvas id="stars" ref={canvasRef} />
      <div className="grain" />
      <div className="orb a" />
      <div className="orb b" />
    </>
  );
}
