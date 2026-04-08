import { useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

/* ─────────────────────────────────────────
   定数 / 設定
───────────────────────────────────────── */
const ANIM = {
  SILHOUETTE_IN: { duration: 0.95, ease: "power3.out" },
  SILHOUETTE_OUT: { duration: 0.62, ease: "power2.inOut" },
  BREATHE: { duration: 6.8, ease: "sine.inOut" },
  FOLLOW: { duration: 1.0, ease: "power3.out" },

  BG_ACTIVE: { opacity: 0.6, duration: 0.9, ease: "power2.out" },
  BG_IDLE: { opacity: 0.43, duration: 0.9, ease: "power2.out" },

  AMBIENT_ACTIVE: { opacity: 0.85, duration: 0.9, ease: "power2.out" },
  AMBIENT_IDLE: { opacity: 0.45, duration: 0.9, ease: "power2.out" },

  AXIS_ACTIVE: { opacity: 0.95, duration: 0.72, ease: "power2.out" },
  AXIS_IDLE: { opacity: 0.42, duration: 0.72, ease: "power2.out" },

  TITLE_DIM: { opacity: 0.72, y: -2, duration: 0.55, ease: "power2.out" },
  TITLE_RESET: { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
};

const NAMES = [
  {
    id: "vangogh",
    text: "VAN GOGH",
    sub: "感性",
    route: "/vangogh",
    pos: "top-[15%] left-[9%]",
    tier: 1,
    image: "/silhouettes/vangogh.png",
    imageSize: 1360,
  },
  {
    id: "einstein",
    text: "EINSTEIN",
    sub: "直感",
    route: "/einstein",
    pos: "top-[10%] left-[44%]",
    tier: 1,
    image: "/silhouettes/einstein.png",
    imageSize: 1360,
  },
  {
    id: "musk",
    text: "MUSK",
    sub: "革命",
    route: "/musk",
    pos: "top-[24%] right-[18%]",
    tier: 2,
    image: "/silhouettes/musk.png",
    imageSize: 760,
  },
  {
    id: "lebon",
    text: "LE BON",
    sub: "心理",
    route: "/lebon",
    pos: "top-[47%] right-[10%]",
    tier: 3,
    image: "/silhouettes/lebon1.png",
    imageSize: 780,
  },
  {
    id: "leonardo",
    text: "LEONARDO",
    sub: "構造",
    route: "/leonardo",
    pos: "top-[63%] right-[14%]",
    tier: 1,
    image: "/silhouettes/leonardo.png",
    imageSize: 1380,
  },
  {
    id: "dorsey",
    text: "DORSEY",
    sub: "情報",
    route: "/dorsey",
    pos: "top-[66%] left-[11%]",
    tier: 3,
    image: "/silhouettes/dorsey.png",
    imageSize: 760,
  },
  {
    id: "jobs",
    text: "JOBS",
    sub: "本質",
    route: "/jobs",
    pos: "top-[78%] left-[34%]",
    tier: 2,
    image: "/silhouettes/jobs.png",
    imageSize: 760,
  },
];

const TIER_STYLE = {
  1: {
    textSize: "11px",
    subSize: "10px",
    textOpacity: 0.5,
    subOpacity: 0.72,
    tracking: "0.52em",
    subTracking: "0.46em",
  },
  2: {
    textSize: "10px",
    subSize: "9px",
    textOpacity: 0.36,
    subOpacity: 0.58,
    tracking: "0.48em",
    subTracking: "0.43em",
  },
  3: {
    textSize: "9px",
    subSize: "8px",
    textOpacity: 0.24,
    subOpacity: 0.46,
    tracking: "0.44em",
    subTracking: "0.39em",
  },
};

export default function HeroPC() {
  const containerRef = useRef(null);
  const bgImgRef = useRef(null);
  const ambientRef = useRef(null);
  const silhouetteRef = useRef(null);
  const axisGlowRef = useRef(null);
  const axisCoreRef = useRef(null);
  const crossLineRef = useRef(null);
  const titleWrapRef = useRef(null);
  const titleRef = useRef(null);
  const logoRef = useRef(null);
  const namesRef = useRef([]);

  const breatheTweenRef = useRef(null);
  const isHoveringRef = useRef(false);
  const activeIndexRef = useRef(null);
  const followXRef = useRef(null);
  const followYRef = useRef(null);

  const navigate = useNavigate();

  const applyTierOpacity = useCallback(() => {
    namesRef.current.forEach((el, i) => {
      if (!el) return;

      const ts = TIER_STYLE[NAMES[i].tier];
      const textEl = el.querySelector(".name-text");
      const subEl = el.querySelector(".name-sub");

      if (textEl) {
        gsap.set(textEl, {
          opacity: ts.textOpacity,
          x: 0,
          y: 0,
          letterSpacing: ts.tracking,
        });
      }

      if (subEl) {
        gsap.set(subEl, {
          opacity: ts.subOpacity,
          x: 0,
          y: 0,
          letterSpacing: ts.subTracking,
        });
      }

      gsap.set(el, { opacity: 1 });
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(ambientRef.current, { opacity: 0.45 });
      gsap.set(bgImgRef.current, { opacity: 0.43 });
      gsap.set(axisGlowRef.current, { opacity: 0.42 });

      gsap.to(axisGlowRef.current, {
        opacity: 0.6,
        duration: 5.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(ambientRef.current, {
        opacity: 0.52,
        duration: 7.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll(".char");

        gsap.set(chars, {
          opacity: 0,
          y: 24,
          scale: 0.985,
          rotationX: 10,
          transformOrigin: "50% 50% -10px",
        });

        gsap.to(chars, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 2.5,
          delay: 0.55,
          stagger: 0.085,
          ease: "expo.out",
        });
      }

      gsap.fromTo(
        logoRef.current,
        { opacity: 0, y: 8 },
        {
          opacity: 0.56,
          y: 0,
          duration: 2.1,
          delay: 2.15,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        titleWrapRef.current?.querySelectorAll(".micro-line"),
        { opacity: 0, scaleY: 0.7 },
        {
          opacity: 1,
          scaleY: 1,
          duration: 1.6,
          delay: 1.55,
          stagger: 0.12,
          ease: "power2.out",
        }
      );

      const ordered = [1, 2, 3].flatMap((tier) =>
        namesRef.current.filter((_, i) => NAMES[i].tier === tier)
      );

      gsap.fromTo(
        ordered,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 2.05,
          delay: 1.08,
          stagger: 0.26,
          ease: "power3.out",
          onComplete: applyTierOpacity,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [applyTierOpacity]);

  useEffect(() => {
    const el = silhouetteRef.current;
    if (!el) return;

    followXRef.current = gsap.quickTo(el, "x", ANIM.FOLLOW);
    followYRef.current = gsap.quickTo(el, "y", ANIM.FOLLOW);

    const onMove = (e) => {
      if (!isHoveringRef.current) return;

      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;

      followXRef.current?.(x * 22);
      followYRef.current?.(y * 24);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const showSilhouette = useCallback((item, index) => {
    const el = silhouetteRef.current;
    if (!el) return;

    isHoveringRef.current = true;
    activeIndexRef.current = index;

    breatheTweenRef.current?.kill();
    breatheTweenRef.current = null;
    gsap.killTweensOf(el);

    el.src = item.image;
    el.style.width = `${item.imageSize}px`;

    gsap.set(el, {
      opacity: 0,
      scale: 0.988,
      filter: "blur(2.8px) brightness(1.08) contrast(1.03)",
    });

    gsap.to(el, {
      opacity: 0.18,
      scale: 1,
      filter: "blur(1.5px) brightness(1.14) contrast(1.05)",
      duration: ANIM.SILHOUETTE_IN.duration,
      ease: ANIM.SILHOUETTE_IN.ease,
      onComplete: () => {
        breatheTweenRef.current = gsap.to(el, {
          opacity: 0.225,
          filter: "blur(1.1px) brightness(1.17) contrast(1.06)",
          duration: ANIM.BREATHE.duration,
          repeat: -1,
          yoyo: true,
          ease: ANIM.BREATHE.ease,
        });
      },
    });

    gsap.to(bgImgRef.current, ANIM.BG_ACTIVE);
    gsap.to(ambientRef.current, ANIM.AMBIENT_ACTIVE);
    gsap.to(axisGlowRef.current, ANIM.AXIS_ACTIVE);
    gsap.to(axisCoreRef.current, {
      opacity: 0.74,
      duration: 0.65,
      ease: "power2.out",
    });
    gsap.to(crossLineRef.current, {
      opacity: 0.88,
      duration: 0.65,
      ease: "power2.out",
    });

    gsap.to(titleWrapRef.current, ANIM.TITLE_DIM);

    namesRef.current.forEach((nameEl, i) => {
      if (!nameEl) return;

      const textEl = nameEl.querySelector(".name-text");
      const subEl = nameEl.querySelector(".name-sub");
      const ts = TIER_STYLE[NAMES[i].tier];

      if (i === index) {
        gsap.to(textEl, {
          opacity: 0.92,
          letterSpacing: `calc(${ts.tracking} + 0.04em)`,
          x: 0,
          y: -1,
          duration: 0.45,
          ease: "power2.out",
        });

        gsap.to(subEl, {
          opacity: 0.88,
          letterSpacing: `calc(${ts.subTracking} + 0.03em)`,
          x: 0,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
        });

        gsap.to(nameEl, {
          opacity: 1,
          x: 0,
          y: -2,
          duration: 0.45,
          ease: "power2.out",
        });
      } else {
        const dir = i % 2 === 0 ? -1 : 1;

        gsap.to(textEl, {
          opacity: Math.max(0.08, ts.textOpacity * 0.35),
          x: dir * 6,
          y: 2,
          duration: 0.45,
          ease: "power2.out",
        });

        gsap.to(subEl, {
          opacity: Math.max(0.1, ts.subOpacity * 0.35),
          x: dir * 4,
          y: 2,
          duration: 0.45,
          ease: "power2.out",
        });

        gsap.to(nameEl, {
          opacity: 0.82,
          x: dir * 2,
          duration: 0.45,
          ease: "power2.out",
        });
      }
    });
  }, []);

  const hideSilhouette = useCallback(() => {
    const el = silhouetteRef.current;
    if (!el) return;

    isHoveringRef.current = false;
    activeIndexRef.current = null;

    breatheTweenRef.current?.kill();
    breatheTweenRef.current = null;
    gsap.killTweensOf(el);

    gsap.to(el, {
      opacity: 0,
      scale: 0.99,
      filter: "blur(3.2px) brightness(1.08)",
      duration: ANIM.SILHOUETTE_OUT.duration,
      ease: ANIM.SILHOUETTE_OUT.ease,
      onComplete: () => {
        gsap.set(el, { x: 0, y: 0 });
      },
    });

    gsap.to(bgImgRef.current, ANIM.BG_IDLE);
    gsap.to(ambientRef.current, ANIM.AMBIENT_IDLE);
    gsap.to(axisGlowRef.current, ANIM.AXIS_IDLE);
    gsap.to(axisCoreRef.current, {
      opacity: 0.5,
      duration: 0.68,
      ease: "power2.out",
    });
    gsap.to(crossLineRef.current, {
      opacity: 0.58,
      duration: 0.68,
      ease: "power2.out",
    });
    gsap.to(titleWrapRef.current, ANIM.TITLE_RESET);

    applyTierOpacity();
  }, [applyTierOpacity]);

  const handleEnter = useCallback(
    (route) => {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.68,
        ease: "power2.inOut",
        onComplete: () => navigate(route),
      });
    },
    [navigate]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden bg-[#020202] text-white"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                name: "ORIGIN｜創造の源",
                url: "https://origin-gray.vercel.app",
                description:
                  "ゴッホ・レオナルド・アインシュタイン・ジョブズ・マスク――領域を越えた天才たちの核を体験として再構築するデジタル思想ミュージアム。",
              },
              {
                "@type": "WebPage",
                name: "ORIGIN｜創造の源",
                url: "https://origin-gray.vercel.app",
                description:
                  "感性・構造・直感・本質・革命――思想の軸から創造の正体を探索する体験型デジタル空間。",
                primaryImageOfPage:
                  "https://origin-gray.vercel.app/ogp/origin-top.jpg",
              },
            ],
          }),
        }}
      />

      <img
        ref={bgImgRef}
        src="/origin-bg.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        style={{
          opacity: 0.43,
          filter: "brightness(0.68) contrast(1.18) saturate(0.9)",
        }}
      />

      <div
        ref={ambientRef}
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.45,
          background: `
            radial-gradient(ellipse 980px 620px at 50% 46%, rgba(255,255,255,0.04) 0%, transparent 72%),
            radial-gradient(ellipse 560px 360px at 50% 48%, rgba(255,255,255,0.03) 0%, transparent 76%)
          `,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 115% 115% at 50% 50%, transparent 54%, rgba(0,0,0,0.76) 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
<img
  ref={silhouetteRef}
  src={undefined}
  alt=""
  className="opacity-0"
  style={{
    width: "1360px",
    WebkitMaskImage:
      "linear-gradient(to bottom, black 48%, rgba(0,0,0,0.92) 62%, transparent 88%)",
    maskImage:
      "linear-gradient(to bottom, black 48%, rgba(0,0,0,0.92) 62%, transparent 88%)",
  }}
/>
      </div>

      <div
        ref={axisCoreRef}
        className="pointer-events-none absolute left-1/2 top-0 h-full"
        style={{
          width: "1px",
          transform: "translateX(-50%)",
          opacity: 0.5,
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.24) 28%, rgba(255,255,255,0.24) 72%, transparent 100%)",
        }}
      />

      <div
        ref={axisGlowRef}
        className="pointer-events-none absolute left-1/2 top-0 h-full"
        style={{
          width: "3px",
          transform: "translateX(-50%)",
          opacity: 0.42,
          filter: "blur(5px)",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.18) 28%, rgba(255,255,255,0.18) 72%, transparent 100%)",
        }}
      />

      <div
        ref={crossLineRef}
        className="pointer-events-none absolute left-0 right-0"
        style={{
          top: "50%",
          height: "1px",
          transform: "translateY(-50%)",
          opacity: 0.58,
          background:
            "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.05) 18%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.05) 82%, transparent 100%)",
        }}
      />

      <div
        ref={titleWrapRef}
        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center"
      >
        <p
          className="mb-8 uppercase"
          style={{
            fontSize: "8px",
            letterSpacing: "0.66em",
            opacity: 0.24,
          }}
        >
          Digital Thought Museum
        </p>

        <div
          className="micro-line mb-8"
          style={{
            width: "1px",
            height: "18px",
            opacity: 0.55,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.32), rgba(255,255,255,0.08))",
          }}
        />

        <h1
          ref={titleRef}
          className="font-light"
          style={{
            fontSize: "clamp(48px, 6.4vw, 80px)",
            letterSpacing: "0.42em",
            textShadow:
              "0 0 36px rgba(255,255,255,0.14), 0 0 110px rgba(255,255,255,0.05), 0 2px 4px rgba(0,0,0,0.44)",
            perspective: "700px",
          }}
        >
          {"創造の源".split("").map((char, i) => (
            <span
              key={i}
              className="char inline-block"
              style={{ transformStyle: "preserve-3d" }}
            >
              {char}
            </span>
          ))}
        </h1>

        <div
          className="micro-line mt-7"
          style={{
            width: "1px",
            height: "30px",
            opacity: 0.52,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)",
          }}
        />

        <img
          ref={logoRef}
          src="/images/origin-logo.png"
          alt="ORIGIN"
          className="mt-7 opacity-0"
          style={{
            width: "clamp(158px, 14vw, 220px)",
          }}
        />
      </div>

      {NAMES.map((item, i) => {
        const ts = TIER_STYLE[item.tier];

        return (
          <div
            key={item.id}
            ref={(el) => (namesRef.current[i] = el)}
            onMouseEnter={() => showSilhouette(item, i)}
            onMouseLeave={hideSilhouette}
            onClick={() => handleEnter(item.route)}
            className={`absolute ${item.pos} flex cursor-pointer select-none flex-col items-start gap-[7px]`}
          >
            <span
              className="name-text block"
              style={{
                fontSize: ts.textSize,
                letterSpacing: ts.tracking,
                opacity: ts.textOpacity,
                color: "rgba(255,255,255,0.95)",
                textShadow: "0 1px 2px rgba(0,0,0,0.28)",
              }}
            >
              {item.text}
            </span>

            <span
              className="name-sub block"
              style={{
                fontSize: ts.subSize,
                letterSpacing: ts.subTracking,
                opacity: ts.subOpacity,
                color: "rgba(255,255,255,0.82)",
              }}
            >
              {item.sub}
            </span>
          </div>
        );
      })}

      <div
        onClick={() =>
          window.open("https://singularity-lab-chi.vercel.app/", "_blank")
        }
        className="group fixed bottom-9 left-10 z-[5000] cursor-pointer select-none"
      >
        <div className="flex items-center gap-4">
          <span
            className="block h-px transition-all duration-500 group-hover:w-[80px]"
            style={{
              width: "52px",
              background:
                "linear-gradient(90deg, rgba(120,170,255,0), rgba(160,200,255,0.72), rgba(255,255,255,0.14))",
              opacity: 0.62,
            }}
          />

          <div className="transition-all duration-500 group-hover:-translate-y-[1px]">
            <p
              style={{
                fontSize: "8px",
                letterSpacing: "0.44em",
                opacity: 0.4,
                textTransform: "uppercase",
              }}
            >
              Beyond Origin
            </p>

            <p
              className="mt-[7px]"
              style={{
                fontSize: "12px",
                letterSpacing: "0.22em",
                opacity: 0.78,
              }}
            >
              未来への扉を開く
            </p>
          </div>
        </div>
      </div>

      <div
        onClick={() => window.open("https://gushikendesign.com", "_blank")}
        className="fixed bottom-8 right-10 z-[5000] cursor-pointer select-none"
        style={{
          fontSize: "10px",
          letterSpacing: "0.3em",
          opacity: 0.36,
          color: "rgba(255,255,255,0.85)",
          transition: "opacity 0.4s ease, letter-spacing 0.4s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "0.7";
          e.currentTarget.style.letterSpacing = "0.34em";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "0.36";
          e.currentTarget.style.letterSpacing = "0.3em";
        }}
      >
        BASE｜GUSHIKEN DESIGN
      </div>
    </section>
  );
}