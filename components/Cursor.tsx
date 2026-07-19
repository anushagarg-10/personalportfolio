"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover:hover)").matches;
    if (reduce || !canHover) return;
    const cur = ringRef.current,
      dot = dotRef.current;
    if (!cur || !dot) return;

    let mx = window.innerWidth / 2,
      my = window.innerHeight / 2,
      cx = mx,
      cy = my,
      raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    };
    window.addEventListener("mousemove", onMove);

    const loop = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      cur.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    const grow = () => cur.classList.add("grow");
    const shrink = () => cur.classList.remove("grow");
    const cursEls = Array.from(document.querySelectorAll<HTMLElement>("[data-cur]"));
    cursEls.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    const magEls = Array.from(document.querySelectorAll<HTMLElement>("[data-mag]"));
    const magMove = (el: HTMLElement) => (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${
        (e.clientY - r.top - r.height / 2) * 0.35
      }px)`;
    };
    const magLeave = (el: HTMLElement) => () => {
      el.style.transform = "";
    };
    const magHandlers = magEls.map((el) => {
      const m = magMove(el),
        l = magLeave(el);
      el.addEventListener("mousemove", m);
      el.addEventListener("mouseleave", l);
      return { el, m, l };
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      cursEls.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
      magHandlers.forEach(({ el, m, l }) => {
        el.removeEventListener("mousemove", m);
        el.removeEventListener("mouseleave", l);
      });
    };
  }, []);

  return (
    <>
      <div className="cur" ref={ringRef} />
      <div className="cur-dot" ref={dotRef} />
    </>
  );
}
