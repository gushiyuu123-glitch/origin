import { useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const ANIM = {
  BG_ACTIVE: { opacity: 0.58, duration: 0.7, ease: "power2.out" },
  BG_IDLE: { opacity: 0.44, duration: 0.7, ease: "power2.out" },

  AMBIENT_ACTIVE: { opacity: 0.9, duration: 0.7, ease: "power2.out" },
  AMBIENT_IDLE: { opacity: 0.5, duration: 0.7, ease: "power2.out" },

  AXIS_ACTIVE: { opacity: 1, duration: 0.45, ease: "power2.out" },
  AXIS_IDLE: { opacity: 0.74, duration: 0.45, ease: "power2.out" },

  TITLE_DIM: { opacity: 0.72, y: -2, duration: 0.4, ease: "power2.out" },
  TITLE_RESET: { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },

  SILHOUETTE_IN: { duration: 0.62, ease: "power2.out" },
  SILHOUETTE_OUT: { duration: 0.42, ease: "power2.out" },
  BREATHE: { duration: 5.6, ease: "sine.inOut" },
};

const NAMES = [
  {
    id: "vangogh",
    text: "VAN GOGH",
    sub: "感性",
    route: "/vangogh",
    image: "/silhouettes/1.png",
    size: "212vw",
    tier: 1,
  },
  {
    id: "leonardo",
    text: "LEONARDO",
    sub: "構造",
    route: "/leonardo",
    image: "/silhouettes/2.png",
    size: "212vw",
    tier: 1,
  },
  {
    id: "einstein",
    text: "EINSTEIN",
    sub: "直感",
    route: "/einstein",
    image: "/silhouettes/3.png",
    size: "212vw",
    tier: 1,
  },
  {
    id: "jobs",
    text: "JOBS",
    sub: "本質",
    route: "/jobs",
    image: "/silhouettes/jobs.png",
    size: "112vw",
    tier: 2,
  },
  {
    id: "musk",
    text: "MUSK",
    sub: "革命",
    route: "/musk",
    image: "/silhouettes/musk.png",
    size: "112vw",
    tier: 2,
  },
  {
    id: "lebon",
    text: "LE BON",
    sub: "心理",
    route: "/lebon",
    image: "/silhouettes/lebon1.png",
    size: "112vw",
    tier: 3,
  },
  {
    id: "dorsey",
    text: "DORSEY",
    sub: "情報",
    route: "/dorsey",
    image: "/silhouettes/dorsey.png",
    size: "112vw",
    tier: 3,
  },
];

const TIER_STYLE = {
  1: {
    textSize: "13px",
    subSize: "10px",
    textOpacity: 0.94,
    subOpacity: 0.82,
    tracking: "0.38em",
    subTracking: "0.58em",
    lineWidth: "72px",
  },
  2: {
    textSize: "12px",
    subSize: "10px",
    textOpacity: 0.86,
    subOpacity: 0.72,
    tracking: "0.34em",
    subTracking: "0.52em",
    lineWidth: "60px",
  },
  3: {
    textSize: "11px",
    subSize: "9px",
    textOpacity: 0.72,
    subOpacity: 0.58,
    tracking: "0.3em",
    subTracking: "0.46em",
    lineWidth: "48px",
  },
};

export default function HeroSP() {
  const containerRef = useRef(null);
  const bgImgRef = useRef(null);
  const ambientRef = useRef(null);
  const axisRef = useRef(null);
  const crossRef = useRef(null);
  const titleWrapRef = useRef(null);
  const titleRef = useRef(null);
  const logoRef = useRef(null);
  const silhouetteRef = useRef(null);
  const itemsRef = useRef([]);
  const breatheTweenRef = useRef(null);
  const activeIndexRef = useRef(null);

  const navigate = useNavigate();

  const resetItems = useCallback(() => {
    itemsRef.current.forEach((el, i) => {
      if (!el) return;

      const textEl = el.querySelector(".sp-name-text");
      const subEl = el.querySelector(".sp-name-sub");
      const lineEl = el.querySelector(".sp-name-line");
      const ts = TIER_STYLE[NAMES[i].tier];

      gsap.to(el, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        ease: "power2.out",
      });

      gsap.to(textEl, {
        opacity: ts.textOpacity,
        letterSpacing: ts.tracking,
        duration: 0.45,
        ease: "power2.out",
      });

      gsap.to(subEl, {
        opacity: ts.subOpacity,
        letterSpacing: ts.subTracking,
        duration: 0.45,
        ease: "power2.out",
      });

      gsap.to(lineEl, {
        opacity: 0.26,
        scaleX: 1,
        duration: 0.45,
        ease: "power2.out",
      });
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(bgImgRef.current, { opacity: 0.44 });
      gsap.set(ambientRef.current, { opacity: 0.5 });
      gsap.set(axisRef.current, { opacity: 0.74 });

      gsap.to(axisRef.current, {
        opacity: 0.82,
        duration: 5.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(ambientRef.current, {
        opacity: 0.56,
        duration: 7.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const chars = titleRef.current?.querySelectorAll(".char");
      gsap.set(chars, { opacity: 0, y: 18, scale: 0.988 });
      gsap.set(logoRef.current, { opacity: 0, y: 6 });

      const intro = gsap.timeline({ delay: 0.45 });

      intro.to(chars, {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.15,
        stagger: 0.05,
        ease: "power3.out",
      });

      intro.to(
        logoRef.current,
        {
          opacity: 0.66,
          y: 0,
          duration: 0.95,
          ease: "power2.out",
        },
        "-=0.72"
      );

      intro.fromTo(
        ".sp-item",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.42"
      );

      resetItems();
    }, containerRef);

    return () => ctx.revert();
  }, [resetItems]);

  const showSilhouette = useCallback((item, index) => {
    const el = silhouetteRef.current;
    if (!el) return;

    activeIndexRef.current = index;

    breatheTweenRef.current?.kill();
    breatheTweenRef.current = null;
    gsap.killTweensOf(el);

    el.src = item.image;
    el.style.width = item.size;

    gsap.set(el, {
      opacity: 0,
      scale: 0.988,
      filter: "blur(1.8px) brightness(1.08) contrast(1.03)",
    });

    gsap.to(el, {
      opacity: 0.18,
      scale: 1.01,
      filter: "blur(1px) brightness(1.14) contrast(1.06)",
      duration: ANIM.SILHOUETTE_IN.duration,
      ease: ANIM.SILHOUETTE_IN.ease,
      onComplete: () => {
        breatheTweenRef.current = gsap.to(el, {
          opacity: 0.22,
          duration: ANIM.BREATHE.duration,
          yoyo: true,
          repeat: -1,
          ease: ANIM.BREATHE.ease,
        });
      },
    });

    gsap.to(bgImgRef.current, ANIM.BG_ACTIVE);
    gsap.to(ambientRef.current, ANIM.AMBIENT_ACTIVE);
    gsap.to(axisRef.current, ANIM.AXIS_ACTIVE);
    gsap.to(crossRef.current, {
      opacity: 0.82,
      duration: 0.45,
      ease: "power2.out",
    });
    gsap.to(titleWrapRef.current, ANIM.TITLE_DIM);

    itemsRef.current.forEach((node, i) => {
      if (!node) return;

      const textEl = node.querySelector(".sp-name-text");
      const subEl = node.querySelector(".sp-name-sub");
      const lineEl = node.querySelector(".sp-name-line");
      const ts = TIER_STYLE[NAMES[i].tier];

      if (i === index) {
        gsap.to(node, {
          opacity: 1,
          y: -2,
          scale: 1.01,
          duration: 0.35,
          ease: "power2.out",
        });

        gsap.to(textEl, {
          opacity: 1,
          letterSpacing: `calc(${ts.tracking} + 0.03em)`,
          duration: 0.35,
          ease: "power2.out",
        });

        gsap.to(subEl, {
          opacity: 0.92,
          letterSpacing: `calc(${ts.subTracking} + 0.03em)`,
          duration: 0.35,
          ease: "power2.out",
        });

        gsap.to(lineEl, {
          opacity: 0.68,
          scaleX: 1.2,
          duration: 0.35,
          ease: "power2.out",
          transformOrigin: "center center",
        });
      } else {
        gsap.to(node, {
          opacity: 0.68,
          y: 2,
          scale: 0.992,
          duration: 0.35,
          ease: "power2.out",
        });

        gsap.to(textEl, {
          opacity: ts.textOpacity * 0.42,
          duration: 0.35,
          ease: "power2.out",
        });

        gsap.to(subEl, {
          opacity: ts.subOpacity * 0.42,
          duration: 0.35,
          ease: "power2.out",
        });

        gsap.to(lineEl, {
          opacity: 0.1,
          scaleX: 0.92,
          duration: 0.35,
          ease: "power2.out",
          transformOrigin: "center center",
        });
      }
    });
  }, []);

  const hideSilhouette = useCallback(() => {
    const el = silhouetteRef.current;
    if (!el) return;

    activeIndexRef.current = null;

    breatheTweenRef.current?.kill();
    breatheTweenRef.current = null;
    gsap.killTweensOf(el);

    gsap.to(el, {
      opacity: 0,
      scale: 0.992,
      filter: "blur(2.2px) brightness(1.06)",
      duration: ANIM.SILHOUETTE_OUT.duration,
      ease: ANIM.SILHOUETTE_OUT.ease,
    });

    gsap.to(bgImgRef.current, ANIM.BG_IDLE);
    gsap.to(ambientRef.current, ANIM.AMBIENT_IDLE);
    gsap.to(axisRef.current, ANIM.AXIS_IDLE);
    gsap.to(crossRef.current, {
      opacity: 0.48,
      duration: 0.45,
      ease: "power2.out",
    });
    gsap.to(titleWrapRef.current, ANIM.TITLE_RESET);

    resetItems();
  }, [resetItems]);

  const handleEnter = useCallback(
    (route) => {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.42,
        ease: "power2.out",
        onComplete: () => {
          navigate(route);
          window.scrollTo({ top: 0, behavior: "auto" });
        },
      });
    },
    [navigate]
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#050505] px-[8vw] text-white"
    >
      <img
        ref={bgImgRef}
        src="/origin-bg.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        style={{
          opacity: 0.44,
          filter: "brightness(0.7) contrast(1.14) saturate(0.92)",
        }}
      />

      <div
        ref={ambientRef}
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.5,
          background: `
            radial-gradient(ellipse 82vw 54vh at 50% 32%, rgba(255,255,255,0.05) 0%, transparent 74%),
            radial-gradient(ellipse 60vw 30vh at 50% 56%, rgba(255,255,255,0.03) 0%, transparent 78%)
          `,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/78 via-black/46 to-black/84" />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
<img
  ref={silhouetteRef}
  src={undefined}
  alt=""
  className="opacity-0"
  style={{
    width: "212vw",
    WebkitMaskImage:
      "linear-gradient(to bottom, black 48%, rgba(0,0,0,0.95) 64%, transparent 92%)",
    maskImage:
      "linear-gradient(to bottom, black 48%, rgba(0,0,0,0.95) 64%, transparent 92%)",
  }}
/>
      </div>

      <div
        ref={axisRef}
        className="absolute left-1/2 top-0 h-full w-[1px]"
        style={{
          opacity: 0.74,
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.38) 30%, rgba(255,255,255,0.38) 70%, transparent 100%)",
          transform: "translateX(-50%)",
        }}
      />

      <div
        ref={crossRef}
        className="absolute left-0 right-0"
        style={{
          top: "50%",
          height: "1px",
          opacity: 0.48,
          transform: "translateY(-50%)",
          background:
            "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.05) 18%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.05) 82%, transparent 100%)",
        }}
      />

      <div
        ref={titleWrapRef}
        className="relative z-10 mb-12 mt-10 text-center"
      >
        <p
          className="mb-5 uppercase"
          style={{
            fontSize: "8px",
            letterSpacing: "0.54em",
            opacity: 0.24,
          }}
        >
          Digital Thought Museum
        </p>

        <div
          className="mx-auto mb-6 h-[18px] w-px"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.28), rgba(255,255,255,0.08))",
            opacity: 0.56,
          }}
        />

        <h1
          ref={titleRef}
          className="font-light"
          style={{
            fontSize: "clamp(32px, 9.6vw, 40px)",
            letterSpacing: "0.28em",
            textShadow:
              "0 0 24px rgba(255,255,255,0.12), 0 2px 4px rgba(0,0,0,0.44)",
          }}
        >
          {"創造の源".split("").map((char, i) => (
            <span key={i} className="char inline-block">
              {char}
            </span>
          ))}
        </h1>

        <div
          className="mx-auto mt-5 h-[26px] w-px"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.34), transparent)",
            opacity: 0.52,
          }}
        />

        <img
          ref={logoRef}
          src="/images/origin-logo.png"
          alt="ORIGIN"
          className="mx-auto mt-5"
          style={{ width: "124px" }}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-[320px] flex-col gap-7">
        {NAMES.map((item, i) => {
          const ts = TIER_STYLE[item.tier];

          return (
            <button
              key={item.id}
              ref={(el) => (itemsRef.current[i] = el)}
              type="button"
              onTouchStart={() => showSilhouette(item, i)}
              onTouchEnd={hideSilhouette}
              onTouchCancel={hideSilhouette}
              onMouseDown={() => showSilhouette(item, i)}
              onMouseUp={hideSilhouette}
              onMouseLeave={hideSilhouette}
              onClick={() => handleEnter(item.route)}
              className="sp-item flex w-full flex-col items-center rounded-none bg-transparent px-2 py-3 text-center transition-transform duration-300 active:scale-[0.985]"
            >
              <span
                className="sp-name-text block"
                style={{
                  fontSize: ts.textSize,
                  letterSpacing: ts.tracking,
                  opacity: ts.textOpacity,
                  color: "rgba(255,255,255,0.96)",
                }}
              >
                {item.text}
              </span>

              <span
                className="sp-name-sub mt-3 block"
                style={{
                  fontSize: ts.subSize,
                  letterSpacing: ts.subTracking,
                  opacity: ts.subOpacity,
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                {item.sub}
              </span>

              <span
                className="sp-name-line mt-4 block h-px"
                style={{
                  width: ts.lineWidth,
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.48), rgba(255,255,255,0))",
                  opacity: 0.26,
                }}
              />
            </button>
          );
        })}
      </div>

      <div className="relative z-10 mt-12 flex w-full justify-center">
        <a
          href="https://singularity-lab-chi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="SINGULARITY LAB"
          className="group flex items-center gap-3 px-2 py-2"
        >
          <span
            className="block h-px w-[42px] transition-all duration-500 group-active:w-[54px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(120,170,255,0), rgba(150,190,255,0.72), rgba(255,255,255,0.16))",
              opacity: 0.72,
              boxShadow: "0 0 10px rgba(120,170,255,0.14)",
            }}
          />

          <div
            style={{
              color: "rgba(255,255,255,0.9)",
              textShadow:
                "0 1px 2px rgba(0,0,0,0.35), 0 0 10px rgba(120,170,255,0.1)",
            }}
          >
            <p
              className="text-[8px] uppercase tracking-[0.4em]"
              style={{ opacity: 0.48 }}
            >
              Beyond Origin
            </p>

            <p
              className="mt-[6px] text-[12px] tracking-[0.2em]"
              style={{ opacity: 0.84 }}
            >
              未来への扉を開く
            </p>
          </div>
        </a>
      </div>

      <div className="relative z-10 mb-8 mt-6 flex justify-center">
        <a
          href="https://gushikendesign.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GUSHIKEN DESIGN"
          className="text-[9px] tracking-[0.34em] opacity-28 transition duration-500 active:opacity-50"
        >
          GUSHIKEN DESIGN
        </a>
      </div>
    </section>
  );
}