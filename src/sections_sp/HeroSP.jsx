import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

export default function HeroSP() {
  const containerRef = useRef(null);
  const axisRef = useRef(null);
  const titleRef = useRef(null);
  const logoRef = useRef(null);
  const glowRef = useRef(null);
  const silhouetteRef = useRef(null);

  const breatheTweenRef = useRef(null);
  const navigate = useNavigate();

  /* ==========================
     GSAP 起動
  ========================== */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sp-item",
        { opacity: 0, y: 22 },
        {
          opacity: 0.85,
          y: 0,
          duration: 1.25,
          stagger: 0.15,
          ease: "power3.out",
        }
      );

      gsap.to(axisRef.current, {
        opacity: 0.78,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const chars = titleRef.current.querySelectorAll(".char");
      gsap.set(chars, { opacity: 0, y: 18 });
      gsap.set(logoRef.current, { opacity: 0, scale: 0.95 });

      const intro = gsap.timeline({ delay: 0.5 });

      intro.to(chars, {
        y: 0,
        opacity: 1,
        duration: 1.25,
        stagger: 0.05,
        ease: "power3.out",
      });

      intro.to(
        logoRef.current,
        {
          opacity: 0.7,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* ==========================
     シルエット
  ========================== */
  const showSilhouette = (image, size = "165vw") => {
    const el = silhouetteRef.current;
    if (!el) return;

    breatheTweenRef.current?.kill();
    breatheTweenRef.current = null;

    el.src = image;
    el.style.width = size;

    gsap.killTweensOf(el);

    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.985 },
      {
        opacity: 0.18,
        scale: 1.01,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          breatheTweenRef.current = gsap.to(el, {
            opacity: 0.22,
            duration: 5.2,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
          });
        },
      }
    );

    gsap.to(axisRef.current, {
      opacity: 1,
      duration: 0.45,
    });
  };

  const hideSilhouette = () => {
    const el = silhouetteRef.current;
    if (!el) return;

    breatheTweenRef.current?.kill();
    breatheTweenRef.current = null;

    gsap.to(el, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(axisRef.current, {
      opacity: 0.78,
      duration: 0.4,
    });
  };

  /* ==========================
     遷移
  ========================== */
  const handleEnter = (route) => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.42,
      ease: "power2.out",
      onComplete: () => {
        navigate(route);
        window.scrollTo({ top: 0, behavior: "auto" });
      },
    });
  };

  /* ==========================
     データ（SP専用・縮小版）
  ========================== */
  const names = [
    {
      text: "VAN GOGH（ゴッホ）",
      sub: "感性",
      route: "/vangogh",
      image: "/silhouettes/1.png",
      size: "220vw",
    },
    {
      text: "LEONARDO（レオナルド）",
      sub: "構造",
      route: "/leonardo",
      image: "/silhouettes/2.png",
      size: "220vw",
    },
    {
      text: "EINSTEIN（アインシュタイン）",
      sub: "直感",
      route: "/einstein",
      image: "/silhouettes/3.png",
      size: "220vw",
    },
    {
      text: "JOBS（ジョブズ）",
      sub: "本質",
      route: "/jobs",
      image: "/silhouettes/jobs.png",
      size: "110vw",
    },
    {
      text: "MUSK（マスク）",
      sub: "革命",
      route: "/musk",
      image: "/silhouettes/musk.png",
      size: "110vw",
    },
    {
      text: "LE BON（ル・ボン）",
      sub: "心理",
      route: "/lebon",
      image: "/silhouettes/lebon1.png",
      size: "110vw",
    },
    {
      text: "DORSEY（ドーシー）",
      sub: "情報",
      route: "/dorsey",
      image: "/silhouettes/dorsey.png",
      size: "110vw",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#060606] px-[8vw] text-white"
    >
      {/* 背景 */}
      <img
        src="/origin-bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        style={{ filter: "brightness(0.82) contrast(1.09)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/85" />

      {/* シルエット */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <img
          ref={silhouetteRef}
          src=""
          alt=""
          className="opacity-0"
          style={{
            width: "220vw",
            filter: "blur(3px) brightness(1.1)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 50%, transparent 92%)",
            maskImage: "linear-gradient(to bottom, black 50%, transparent 92%)",
          }}
        />
      </div>

      {/* 軸 */}
      <div
        ref={axisRef}
        className="absolute left-1/2 top-0 h-full w-[1px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.45), transparent)",
          opacity: 0.78,
        }}
      />

      {/* タイトル */}
      <div className="relative z-10 mb-14 mt-10 text-center">
        <h1
          ref={titleRef}
          className="mb-6 text-[38px] font-light tracking-[0.32em]"
        >
          {"創造の源".split("").map((char, i) => (
            <span key={i} className="char inline-block">
              {char}
            </span>
          ))}
        </h1>

        <div className="relative mt-4 flex items-center justify-center">
          <div
            ref={glowRef}
            className="absolute h-[180px] w-[180px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,215,170,0.05) 0%, rgba(0,0,0,0) 60%)",
              filter: "blur(42px)",
              opacity: 0.55,
            }}
          />
          <img
            ref={logoRef}
            src="/images/origin-logo.png"
            alt="ORIGIN"
            className="relative w-[125px]"
          />
        </div>
      </div>

      {/* 人物（上品タップ） */}
      <div className="relative z-10 flex w-full max-w-[310px] flex-col gap-11">
        {names.map((item, i) => (
          <div
            key={i}
            onTouchStart={() => showSilhouette(item.image, item.size)}
            onTouchEnd={hideSilhouette}
            onClick={() => handleEnter(item.route)}
            className="
              sp-item flex cursor-pointer flex-col items-center
              transition-transform duration-300 active:scale-[0.985]
            "
          >
            <span className="text-[13px] font-light tracking-[0.42em] opacity-95">
              {item.text}
            </span>

            <span className="mt-3 text-[10px] tracking-[0.65em] opacity-80">
              {item.sub}
            </span>

            <div className="mt-4 h-px w-[58px] bg-white/30" />
          </div>
        ))}
      </div>

      {/* SECRET LINK — SP版 */}
      <div className="relative z-10 mt-14 flex w-full justify-center">
        <a
          href="https://singularity-lab-chi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="SINGULARITY LAB"
          className="group flex items-center gap-3 px-2 py-2"
        >
          <span
            className="block h-px w-[44px] transition-all duration-500 group-active:w-[56px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(120,170,255,0), rgba(150,190,255,0.78), rgba(255,255,255,0.18))",
              opacity: 0.78,
              boxShadow: "0 0 10px rgba(120,170,255,0.16)",
            }}
          />

          <div
            style={{
              color: "rgba(255,255,255,0.9)",
              textShadow:
                "0 1px 2px rgba(0,0,0,0.35), 0 0 10px rgba(120,170,255,0.12)",
            }}
          >
            <p
              className="text-[8px] uppercase tracking-[0.4em]"
              style={{ opacity: 0.5 }}
            >
              Beyond Origin
            </p>

            <p
              className="mt-[6px] text-[12px] tracking-[0.2em]"
              style={{ opacity: 0.86 }}
            >
              未来への扉を開く
            </p>
          </div>
        </a>
      </div>

      {/* BASE LINK */}
      <div className="relative z-10 mb-8 mt-7 flex justify-center">
        <a
          href="https://gushikendesign.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GUSHIKEN DESIGN"
          className="text-[9px] tracking-[0.35em] opacity-30 transition duration-500 active:opacity-55"
        >
          GUSHIKEN DESIGN
        </a>
      </div>
    </section>
  );
}