"use client";
import { useCallback, useEffect, useRef, useState } from "react";

type Item = { id: string; n: string; label: string; hint: string };

const ITEMS: Item[] = [
  { id: "top", n: "00", label: "Intro", hint: "back to top" },
  { id: "about", n: "01", label: "About", hint: "who I am" },
  { id: "work", n: "02", label: "Experience", hint: "where I've worked" },
  { id: "projects", n: "03", label: "Projects", hint: "things I've built" },
  { id: "design", n: "04", label: "Design", hint: "palettes, type, motifs" },
  { id: "skills", n: "05", label: "Skills", hint: "toolkit" },
  { id: "background", n: "06", label: "Education", hint: "ANU, VIT, leadership" },
  { id: "contact", n: "07", label: "Contact", hint: "let's talk" },
];

function isTyping() {
  const el = document.activeElement as HTMLElement | null;
  if (!el) return false;
  const tag = el.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || el.isContentEditable;
}

export default function CommandNav() {
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);
  const go = useCallback(
    (id: string) => {
      if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
      else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      close();
    },
    [close]
  );

  useEffect(() => {
    const onOpenEvt = () => {
      setHi(0);
      setOpen(true);
    };
    window.addEventListener("open-nav", onOpenEvt);

    const onKey = (e: KeyboardEvent) => {
      const cmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";
      if (!open) {
        if (cmdK || (e.key === "/" && !isTyping())) {
          e.preventDefault();
          setHi(0);
          setOpen(true);
        }
        return;
      }
      if (e.key === "Escape" || cmdK) {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setHi((h) => (h + 1) % ITEMS.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHi((h) => (h - 1 + ITEMS.length) % ITEMS.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        go(ITEMS[hi].id);
      } else if (/^[0-9]$/.test(e.key)) {
        const idx = ITEMS.findIndex((it) => it.n === e.key.padStart(2, "0"));
        if (idx > -1) {
          e.preventDefault();
          go(ITEMS[idx].id);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("open-nav", onOpenEvt);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, hi, go, close]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className={`cmdnav ${open ? "open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      onClick={(e) => {
        if (e.target === wrapRef.current) close();
      }}
    >
      <div className="cmdnav-panel">
        <div className="cmdnav-head">
          <span className="mono">Quick navigation</span>
          <button className="cmdnav-close" onClick={close} aria-label="Close" data-cur>
            ✕
          </button>
        </div>
        <ul className="cmdnav-list">
          {ITEMS.map((it, i) => (
            <li key={it.id}>
              <button
                className={i === hi ? "hi" : ""}
                onMouseEnter={() => setHi(i)}
                onClick={() => go(it.id)}
                data-cur
              >
                <span className="cmdnav-n mono">{it.n}</span>
                <span className="cmdnav-l">{it.label}</span>
                <span className="cmdnav-h">{it.hint}</span>
                <span className="cmdnav-arrow">↵</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="cmdnav-foot mono">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
