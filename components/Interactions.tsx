"use client";
import { useEffect } from "react";

// Global scroll-reveal + project card tilt/spotlight.
export default function Interactions() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // reveal on scroll
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );
    const revealEls = Array.from(document.querySelectorAll(".rv"));
    revealEls.forEach((el) => io.observe(el));

    // project spotlight + tilt
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".proj"));
    const move = (c: HTMLElement) => (e: MouseEvent) => {
      const r = c.getBoundingClientRect(),
        x = e.clientX - r.left,
        y = e.clientY - r.top;
      c.style.setProperty("--mx", x + "px");
      c.style.setProperty("--my", y + "px");
      if (!reduce) {
        const rx = (y / r.height - 0.5) * -6,
          ry = (x / r.width - 0.5) * 6;
        c.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      }
    };
    const leave = (c: HTMLElement) => () => {
      c.style.transform = "";
    };
    const handlers = cards.map((c) => {
      const m = move(c),
        l = leave(c);
      c.addEventListener("mousemove", m);
      c.addEventListener("mouseleave", l);
      return { c, m, l };
    });

    return () => {
      io.disconnect();
      handlers.forEach(({ c, m, l }) => {
        c.removeEventListener("mousemove", m);
        c.removeEventListener("mouseleave", l);
      });
    };
  }, []);

  return null;
}
