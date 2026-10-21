"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover:hover)").matches;
    if (reduce || !canHover) return;
    const cur = ringRef.current,
      dot = dotRef.current,
      label = labelRef.current;
    if (!cur || !dot || !label) return;

    let mx = window.innerWidth / 2,
      my = window.innerHeight / 2,
      cx = mx,
      cy = my,
      lx = mx,
      ly = my,
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
      lx += (mx - lx) * 0.12;
      ly += (my - ly) * 0.12;
      cur.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      label.style.transform = `translate(${lx}px,${ly}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    // Event delegation, so the cursor also works for elements added later.
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t || !t.closest) return;
      const labelled = t.closest<HTMLElement>("[data-cursor-label]");
      if (labelled) {
        label.textContent = labelled.dataset.cursorLabel || "";
        label.classList.add("show");
        cur.classList.add("hide");
        return;
      }
      label.classList.remove("show");
      cur.classList.remove("hide");
      cur.classList.toggle("grow", !!t.closest("[data-cur]"));
    };
    document.addEventListener("mouseover", onOver);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div className="cur" ref={ringRef} />
      <div className="cur-dot" ref={dotRef} />
      <div className="cur-label" ref={labelRef} />
    </>
  );
}
