"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const TITLE = "My Diary";

const ROTATING = [
  "classroom",
  "lecture hall",
  "lab bench",
  "whiteboard",
  "marking desk",
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (event) => setReduced(event.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

/* ------------------------------------------------------------------ */
/* Animated SVG illustration: an open notebook orbited by ideas.       */
/* Animations are SMIL so they run without JS; they are only rendered */
/* when the visitor has not asked for reduced motion.                 */
/* ------------------------------------------------------------------ */
function HeroArt({ reduced }) {
  const spin = (dur, dir = 1) =>
    reduced ? null : (
      <animateTransform
        attributeName="transform"
        type="rotate"
        from={dir > 0 ? "0 210 210" : "360 210 210"}
        to={dir > 0 ? "360 210 210" : "0 210 210"}
        dur={dur}
        repeatCount="indefinite"
      />
    );

  const pulseR = (from, to, dur) =>
    reduced ? null : (
      <animate
        attributeName="r"
        values={`${from};${to};${from}`}
        dur={dur}
        repeatCount="indefinite"
      />
    );

  const pulseOpacity = (dur) =>
    reduced ? null : (
      <animate
        attributeName="stroke-dashoffset"
        values="0;-32"
        dur={dur}
        repeatCount="indefinite"
      />
    );

  const bob = (dur) =>
    reduced ? null : (
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0 0; 0 -9; 0 0"
        dur={dur}
        repeatCount="indefinite"
      />
    );

  return (
    <svg
      className="hero-art-svg"
      viewBox="0 0 420 420"
      role="img"
      aria-label="Illustration of an open notebook circled by orbiting sparks and a paper plane"
    >
      <defs>
        <linearGradient id="artGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c9673c" />
          <stop offset="100%" stopColor="#8f3d1c" />
        </linearGradient>
        <radialGradient id="artGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f7e2d3" stopOpacity="1" />
          <stop offset="100%" stopColor="#f7e2d3" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="210" cy="210" r="196" fill="url(#artGlow)" />

      {/* dashed guide ring */}
      <circle
        cx="210"
        cy="210"
        r="174"
        fill="none"
        stroke="#b4552d"
        strokeOpacity="0.45"
        strokeWidth="2.5"
        strokeDasharray="3 15"
        strokeLinecap="round"
      >
        {spin("70s")}
      </circle>

      {/* faint inner ring */}
      <circle
        cx="210"
        cy="210"
        r="142"
        fill="none"
        stroke="#26211b"
        strokeOpacity="0.14"
        strokeWidth="1.5"
      />

      {/* orbiting ideas */}
      <g>
        {spin("26s")}
        <circle cx="210" cy="68" r="12" fill="url(#artGrad)" />
        <circle cx="352" cy="210" r="7" fill="#26211b" opacity="0.75" />
        <circle cx="210" cy="352" r="8" fill="#b4552d" opacity="0.55" />
        <circle cx="68" cy="210" r="5.5" fill="#8f3d1c" />
      </g>

      {/* counter-rotating companion */}
      <g>
        {spin("44s", -1)}
        <circle cx="322" cy="98" r="5" fill="#e8b04b" />
        <circle cx="98" cy="322" r="6.5" fill="#26211b" opacity="0.5" />
      </g>

      {/* neural constellation, top-left */}
      <g
        fill="none"
        stroke="#b4552d"
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeDasharray="7 9"
        strokeLinecap="round"
      >
        <path d="M74 118 L124 84 L172 120">
          {pulseOpacity("3.4s")}
        </path>
        <path d="M124 84 L134 140">
          {pulseOpacity("4.2s")}
        </path>
      </g>
      <g fill="#b4552d">
        <circle cx="74" cy="118">
          {pulseR(5, 8, "3s")}
        </circle>
        <circle cx="124" cy="84">
          {pulseR(6, 10, "3.6s")}
        </circle>
        <circle cx="172" cy="120">
          {pulseR(4.5, 7.5, "4.2s")}
        </circle>
        <circle cx="134" cy="140">
          {pulseR(4, 7, "3.3s")}
        </circle>
      </g>

      {/* neural constellation, bottom-right */}
      <g
        fill="none"
        stroke="#26211b"
        strokeOpacity="0.35"
        strokeWidth="2"
        strokeDasharray="7 9"
        strokeLinecap="round"
      >
        <path d="M244 306 L296 344 L348 314">
          {pulseOpacity("3.8s")}
        </path>
      </g>
      <g fill="#8f3d1c">
        <circle cx="244" cy="306">
          {pulseR(4.5, 7.5, "3.5s")}
        </circle>
        <circle cx="296" cy="344">
          {pulseR(5.5, 9, "4.1s")}
        </circle>
        <circle cx="348" cy="314">
          {pulseR(4, 7, "3.1s")}
        </circle>
      </g>

      {/* the open notebook */}
      <g>
        <path
          d="M210 152 C 178 130, 128 126, 98 134 L98 278 C128 270, 178 274, 210 296 C242 274, 292 270, 322 278 L322 134 C292 126, 242 130, 210 152 Z"
          fill="#fffdf8"
          stroke="#26211b"
          strokeWidth="4.5"
          strokeLinejoin="round"
        />
        <line
          x1="210"
          y1="152"
          x2="210"
          y2="296"
          stroke="#26211b"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <g stroke="#cdc2ae" strokeWidth="7" strokeLinecap="round">
          <line x1="122" y1="176" x2="184" y2="184" />
          <line x1="122" y1="204" x2="184" y2="212" />
          <line x1="122" y1="232" x2="162" y2="237" />
          <line x1="236" y1="184" x2="298" y2="176" />
          <line x1="236" y1="212" x2="298" y2="204" />
          <line x1="258" y1="237" x2="298" y2="232" />
        </g>
        <path
          d="M236 252 C 254 240, 272 262, 296 248"
          fill="none"
          stroke="#b4552d"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>

      {/* pencil, gently bobbing */}
      <g transform="translate(300 78) rotate(34)">
        {bob("5s")}
        <rect
          x="-14"
          y="-9"
          width="74"
          height="18"
          rx="5"
          fill="#e8b04b"
          stroke="#26211b"
          strokeWidth="3.5"
        />
        <rect
          x="-24"
          y="-9"
          width="12"
          height="18"
          rx="5"
          fill="#b4552d"
          stroke="#26211b"
          strokeWidth="3.5"
        />
        <path
          d="M60 -9 L80 0 L60 9 Z"
          fill="#f4e0c3"
          stroke="#26211b"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path d="M74 -3 L80 0 L74 3 Z" fill="#26211b" />
      </g>

      {/* sparkles */}
      <g fill="#b4552d">
        <path d="M64 250 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4 Z" />
        <path d="M356 168 l3.5 9 9 3.5 -9 3.5 -3.5 9 -3.5 -9 -9 -3.5 9 -3.5 Z" />
      </g>
    </svg>
  );
}

export default function LandingHero({ tags = [] }) {
  const stageRef = useRef(null);
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState(null);

  // Cycle the rotating word.
  useEffect(() => {
    if (reduced) return;
    let i = 0;
    const id = setInterval(() => {
      setLeaving(i);
      i = (i + 1) % ROTATING.length;
      setActive(i);
    }, 2400);
    return () => clearInterval(id);
  }, [reduced]);

  useEffect(() => {
    if (leaving === null) return;
    const timeout = setTimeout(() => setLeaving(null), 560);
    return () => clearTimeout(timeout);
  }, [leaving]);

  // Soft spotlight that follows the pointer across the hero.
  const handlePointer = (event) => {
    const stage = stageRef.current;
    if (!stage) return;
    const box = stage.getBoundingClientRect();
    stage.style.setProperty("--mx", `${event.clientX - box.left}px`);
    stage.style.setProperty("--my", `${event.clientY - box.top}px`);
  };

  const letters = TITLE.split("").map((char, index) => (
    <span
      className="kinetic-letter"
      aria-hidden="true"
      key={`${char}-${index}`}
      style={{ animationDelay: `${reduced ? 0 : 240 + index * 55}ms` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <section className="hero-stage" ref={stageRef} onPointerMove={handlePointer}>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">Notes from my classroom &amp; beyond</p>

          <h1 className="kinetic-title" aria-label={TITLE}>
            {letters}
          </h1>

          <svg
            className="scribble"
            viewBox="0 0 300 26"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M6 16 C 62 6, 132 6, 192 12 C 234 16, 270 14, 296 9" />
            <path d="M20 22 C 82 14, 152 15, 212 20" />
          </svg>

          <p className="hero-hook">
            <span className="sr-only">
              Today&apos;s notes, straight from the classroom, lecture hall, lab
              bench, whiteboard or marking desk.
            </span>
            <span aria-hidden="true">
              Today&apos;s notes, straight from the{" "}
              <span className="rotword">
                {ROTATING.map((word, index) => {
                  const state =
                    index === active
                      ? "is-active"
                      : index === leaving
                        ? "is-leaving"
                        : "";
                  return (
                    <span className={state} key={word}>
                      {word}
                    </span>
                  );
                })}
              </span>
            </span>
          </p>

          <p className="hero-subtitle">
            I&apos;m <strong>Sushil Narang</strong>, an educator teaching
            Artificial Intelligence at Chitkara University. This is where I keep
            my reflections — lesson notes, ideas that worked (and some that
            didn&apos;t), and thoughts on where AI is heading.
          </p>

          <div className="hero-cta">
            <a className="button" href="#latest">
              Start reading
            </a>
            <Link className="button ghost" href="/about">
              More about me
            </Link>
          </div>

          {tags.length > 0 && (
            <div className="tag-row hero-tags">
              {tags.map((tag) => (
                <Link
                  key={tag.name}
                  href={`/tags/${encodeURIComponent(tag.name)}`}
                  className="tag"
                >
                  {tag.name} <span className="tag-count">{tag.count}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="hero-art">
          <HeroArt reduced={reduced} />
          <span className="hero-sticker">Still taking notes ✎</span>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span className="cue-mouse">
          <span className="cue-dot" />
        </span>
      </div>
    </section>
  );
}
