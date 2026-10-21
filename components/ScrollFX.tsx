"use client";
import { useEffect } from "react";

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

// Splits every text node under `root` into per-word spans without touching
// element structure (<em>, <br>, <b> all survive).
function splitWords(root: HTMLElement, mode: "mask" | "fill") {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  let idx = 0;
  nodes.forEach((node) => {
    const text = node.textContent || "";
    if (!text.trim()) return;
    const frag = document.createDocumentFragment();
    text.split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) {
        frag.appendChild(document.createTextNode(part));
        return;
      }
      const outer = document.createElement("span");
      if (mode === "mask") {
        outer.className = "w";
        const inner = document.createElement("span");
        inner.className = "wi";
        inner.style.setProperty("--i", String(idx++));
        inner.textContent = part;
        outer.appendChild(inner);
      } else {
        outer.className = "fw";
        outer.textContent = part;
      }
      frag.appendChild(outer);
    });
    node.parentNode?.replaceChild(frag, node);
  });
  root.classList.add(mode === "mask" ? "split-ready" : "fill-ready");
}

/**
 * Scroll choreography, all hand-rolled and gated behind reduced-motion:
 * - headings rise word by word out of a mask
 * - About copy lights up word by word as you read
 * - [data-sp] elements get a --sp (0..1) scroll-progress variable for CSS
 * - the hero drifts and fades as you leave it
 * - the marquee reacts to scroll speed and direction
 */
export default function ScrollFX() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.querySelectorAll<HTMLElement>(".split").forEach((el) => splitWords(el, "mask"));
    const fills = Array.from(document.querySelectorAll<HTMLElement>(".fill"));
    fills.forEach((el) => splitWords(el, "fill"));
    const fillWords = fills.map((el) => Array.from(el.querySelectorAll<HTMLElement>(".fw")));
    const lit = fills.map(() => 0);

    const sps = Array.from(document.querySelectorAll<HTMLElement>("[data-sp]"));
    const hero = document.querySelector<HTMLElement>(".hero3d");

    let raf = 0;
    const update = () => {
      raf = 0;
      const h = window.innerHeight;
      if (hero) hero.style.setProperty("--hp", clamp(window.scrollY / (h * 0.9)).toFixed(3));
      sps.forEach((el) => {
        const r = el.getBoundingClientRect();
        const p =
          el.dataset.sp === "line"
            ? clamp((h * 0.62 - r.top) / r.height)
            : clamp((h - r.top) / (h + r.height));
        el.style.setProperty("--sp", p.toFixed(4));
      });
      fills.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        const t = clamp((h * 0.88 - r.top) / (h * 0.42 + r.height));
        const n = fillWords[i].length;
        const count = Math.round(t * n);
        if (count !== lit[i]) {
          fillWords[i].forEach((w, k) => w.classList.toggle("on", k < count));
          lit[i] = count;
        }
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    // marquee: base drift plus scroll velocity, skewed in the direction of travel
    const track = document.querySelector<HTMLElement>(".mtrack");
    const marquee = document.querySelector<HTMLElement>(".marquee");
    let mRaf = 0;
    let io: IntersectionObserver | undefined;
    if (track && marquee) {
      track.style.animation = "none";
      let x = 0;
      let vel = 0;
      let dir = 1;
      let lastY = window.scrollY;
      const loop = () => {
        const y = window.scrollY;
        const dy = y - lastY;
        lastY = y;
        vel += (dy - vel) * 0.12;
        if (Math.abs(dy) > 0.5) dir = dy > 0 ? 1 : -1;
        x -= (0.7 + Math.min(Math.abs(vel) * 0.5, 22)) * dir;
        const half = track.scrollWidth / 2;
        if (x <= -half) x += half;
        if (x > 0) x -= half;
        track.style.transform = `translate3d(${x}px,0,0) skewX(${clamp(-vel * 0.3, -12, 12)}deg)`;
        mRaf = requestAnimationFrame(loop);
      };
      io = new IntersectionObserver(
        (entries) => {
          const visible = entries[0]?.isIntersecting;
          if (visible && !mRaf) {
            lastY = window.scrollY;
            mRaf = requestAnimationFrame(loop);
          } else if (!visible && mRaf) {
            cancelAnimationFrame(mRaf);
            mRaf = 0;
          }
        },
        { threshold: 0 }
      );
      io.observe(marquee);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (mRaf) cancelAnimationFrame(mRaf);
      io?.disconnect();
    };
  }, []);

  return null;
}
