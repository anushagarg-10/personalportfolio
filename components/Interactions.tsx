"use client";
import { useEffect } from "react";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// Module-scoped (survives React Strict Mode's mount → cleanup → remount in dev,
// which would otherwise create a second IntersectionObserver that re-fires on
// already-visible elements and corrupts an in-flight scramble/count-up).
const revealedEls = new WeakSet<Element>();

function collectTextNodes(node: Node, out: Text[]) {
  node.childNodes.forEach((n) => {
    if (n.nodeType === Node.TEXT_NODE && (n.textContent || "").trim()) out.push(n as Text);
    else if (n.nodeType === Node.ELEMENT_NODE) collectTextNodes(n, out);
  });
}

// Scrambles only text nodes in place — never touches element structure,
// so nested <br/> and gradient <span>s survive untouched.
//
// A "done" guard + a hard setTimeout fallback guarantee the real text always
// lands, even if the rAF chain gets interrupted mid-flight (e.g. by a
// dev-mode hydration-recovery re-render, a backgrounded tab, or a browser
// extension pausing the main thread) — without this, an interrupted loop
// can freeze on a scrambled/partial value forever instead of resolving.
export function scrambleReveal(el: HTMLElement) {
  const nodes: Text[] = [];
  collectTextNodes(el, nodes);
  if (!nodes.length) return;
  const originals = nodes.map((n) => n.textContent || "");
  const totalFrames = 16;
  let frame = 0;
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    nodes.forEach((n, ni) => (n.textContent = originals[ni]));
  };
  const step = () => {
    if (done) return;
    frame++;
    nodes.forEach((n, ni) => {
      const orig = originals[ni];
      const revealCount = Math.floor((frame / totalFrames) * orig.length);
      let out = "";
      for (let i = 0; i < orig.length; i++) {
        const ch = orig[i];
        if (ch === " " || i < revealCount) out += ch;
        else out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }
      n.textContent = out;
    });
    if (frame < totalFrames) requestAnimationFrame(step);
    else finish();
  };
  step();
  setTimeout(finish, 1500);
}

// Global scroll-reveal + text scramble + card tilt + magnetic buttons.
//
// Note: the stat numbers in About (2+, 20+, 50+) are deliberately plain,
// static text with no count-up animation. An earlier count-up version was
// removed after repeated confusion: a viewer who glances at the numbers
// within the first ~100-300ms of them scrolling into view would see a
// plausible-looking but wrong in-progress value (e.g. "0+ / 3+ / 7+")
// instead of the real ones, which is worse than no animation at all.
export default function Interactions() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover:hover)").matches;

    // reveal on scroll (+ scramble headings)
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const target = e.target as HTMLElement;
            if (revealedEls.has(target)) {
              io.unobserve(target);
              return;
            }
            revealedEls.add(target);
            target.classList.add("in");
            if (!reduce) {
              const scrambleTargets = target.classList.contains("scramble")
                ? [target]
                : Array.from(target.querySelectorAll<HTMLElement>(".scramble"));
              scrambleTargets.forEach(scrambleReveal);
            }
            io.unobserve(target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );
    const revealEls = Array.from(document.querySelectorAll(".rv"));
    revealEls.forEach((el) => io.observe(el));

    // project + hero-card spotlight + tilt
    const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
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

    // magnetic buttons — pull toward the cursor within their own box
    const magEls = Array.from(document.querySelectorAll<HTMLElement>("[data-mag]"));
    const magMove = (el: HTMLElement) => (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const relX = e.clientX - (r.left + r.width / 2);
      const relY = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${relX * 0.25}px, ${relY * 0.4}px)`;
    };
    const magLeave = (el: HTMLElement) => () => {
      el.style.transform = "";
    };
    const magHandlers =
      !reduce && canHover
        ? magEls.map((el) => {
            const m = magMove(el),
              l = magLeave(el);
            el.addEventListener("mousemove", m);
            el.addEventListener("mouseleave", l);
            return { el, m, l };
          })
        : [];

    return () => {
      io.disconnect();
      handlers.forEach(({ c, m, l }) => {
        c.removeEventListener("mousemove", m);
        c.removeEventListener("mouseleave", l);
      });
      magHandlers.forEach(({ el, m, l }) => {
        el.removeEventListener("mousemove", m);
        el.removeEventListener("mouseleave", l);
      });
    };
  }, []);

  return null;
}
