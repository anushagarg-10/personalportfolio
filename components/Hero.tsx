"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { scrambleReveal } from "./Interactions";

const HeroScene = dynamic(() => import("./three/HeroScene"), { ssr: false });

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (v) {
      v.muted = true;
      if (reduce) v.pause();
      else v.play().catch(() => {});
    }
    if (!reduce && nameRef.current) {
      const t = setTimeout(() => nameRef.current && scrambleReveal(nameRef.current), 150);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <section className="hero3d" id="intro">
      <div className="hero3d-canvas">
        <HeroScene />
      </div>
      <div className="wrap hero3d-grid">
        <div className="hero3d-content">
          <div className="badge">
            <span className="dotlive" /> Available for frontend roles
          </div>
          <h1 ref={nameRef}>
            Hi, I&apos;m
            <br />
            <span className="g">Anusha Garg</span>.
          </h1>
          <p className="lead">
            Frontend engineer crafting fast, elegant web experiences with{" "}
            <b>Next.js</b>, <b>React</b> &amp; <b>TypeScript</b>.
          </p>
          <div className="cta">
            <a href="#projects" className="btn btn-p" data-cur data-mag>
              View my work →
            </a>
            <a href="mailto:anusha.garg.ag@gmail.com" className="btn btn-g" data-cur data-mag>
              Email me
            </a>
            <div className="socs">
              <a
                className="ic"
                data-cur
                href="https://www.linkedin.com/in/anusha-garg-67a214205/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V8h3v11zM6.5 6.7a1.8 1.8 0 110-3.5 1.8 1.8 0 010 3.5zM19 19h-3v-5.6c0-1.4-.5-2.3-1.7-2.3-.9 0-1.5.6-1.7 1.2-.1.2-.1.5-.1.8V19h-3V8h3v1.5c.4-.6 1.2-1.5 2.8-1.5 2 0 3.5 1.3 3.5 4.2V19z" />
                </svg>
              </a>
              <a
                className="ic"
                data-cur
                href="mailto:anusha.garg.ag@gmail.com"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                  <path d="M3 6l9 6.5L21 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <figure className="hero3d-card" data-tilt>
          <video
            ref={videoRef}
            className="hero3d-video"
            poster="/intro-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/intro.mp4" type="video/mp4" />
          </video>
          <figcaption className="hero3d-cap mono">
            <span className="dotlive" /> live from Canberra
          </figcaption>
        </figure>
      </div>
      <div className="scrollcue">
        SCROLL<div className="l" />
      </div>
    </section>
  );
}
