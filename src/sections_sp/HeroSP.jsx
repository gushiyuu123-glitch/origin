// ===========================================
//  HeroSP.jsx（SP版：上品・軽量・強度最大化）
// ===========================================
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
    { text: "VAN GOGH（ゴッホ）", sub: "感性", route: "/vangogh", image: "/silhouettes/1.png", size: "220vw" },
    { text: "LEONARDO（レオナルド）", sub: "構造", route: "/leonardo", image: "/silhouettes/2.png", size: "220vw" },
    { text: "EINSTEIN（アインシュタイン）", sub: "直感", route: "/einstein", image: "/silhouettes/3.png", size: "220vw" },

    { text: "JOBS（ジョブズ）", sub: "本質", route: "/jobs", image: "/silhouettes/jobs.png", size: "110vw" },
    { text: "MUSK（マスク）", sub: "革命", route: "/musk", image: "/silhouettes/musk.png", size: "110vw" },
    { text: "LE BON（ル・ボン）", sub: "心理", route: "/lebon", image: "/silhouettes/lebon1.png", size: "110vw" },

    { text: "DORSEY（ドーシー）", sub: "情報", route: "/dorsey", image: "/silhouettes/dorsey.png", size: "110vw" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#060606] text-white overflow-hidden flex flex-col items-center justify-center px-[8vw]"
    >
      {/* 背景 */}
      <img
        src="/origin-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        style={{ filter: "brightness(0.82) contrast(1.09)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/85" />

      {/* シルエット */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          ref={silhouetteRef}
          src=""
          alt=""
          className="opacity-0"
          style={{
            width: "220vw",
            filter: "blur(3px) brightness(1.1)",
            WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 92%)",
            maskImage: "linear-gradient(to bottom, black 50%, transparent 92%)",
          }}
        />
      </div>

      {/* 軸 */}
      <div
        ref={axisRef}
        className="absolute left-1/2 top-0 h-full w-[1px]"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.45), transparent)",
          opacity: 0.78,
        }}
      />

      {/* タイトル */}
      <div className="relative z-10 text-center mt-10 mb-14">
        <h1 ref={titleRef} className="text-[38px] tracking-[0.32em] font-light mb-6">
          {"創造の源".split("").map((char, i) => (
            <span key={i} className="char inline-block">
              {char}
            </span>
          ))}
        </h1>

        <div className="relative flex justify-center items-center mt-4">
          <div
            ref={glowRef}
            className="absolute w-[180px] h-[180px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255,215,170,0.05) 0%, rgba(0,0,0,0) 60%)",
              filter: "blur(42px)",
              opacity: 0.55,
            }}
          />
          <img ref={logoRef} src="/images/origin-logo.png" alt="ORIGIN" className="relative w-[125px]" />
        </div>
      </div>

      {/* 人物（上品タップ） */}
      <div className="relative z-10 flex flex-col gap-11 w-full max-w-[310px]">
        {names.map((item, i) => (
          <div
            key={i}
            onTouchStart={() => showSilhouette(item.image, item.size)}
            onTouchEnd={hideSilhouette}
            onClick={() => handleEnter(item.route)}
            className="
              sp-item flex flex-col items-center cursor-pointer 
              active:scale-[0.985] transition-transform duration-300
            "
          >
            <span className="text-[13px] tracking-[0.42em] font-light opacity-95">
              {item.text}
            </span>

            <span className="mt-3 text-[10px] tracking-[0.65em] opacity-80">
              {item.sub}
            </span>

            <div className="mt-4 w-[58px] h-px bg-white/30" />
          </div>
        ))}
      </div>

      {/* BASE LINK */}
      <div className="relative z-10 mt-16 mb-8 flex justify-center">
        <a
          href="https://gushikendesign.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GUSHIKEN DESIGN"
          className="text-[9px] tracking-[0.35em] opacity-30 active:opacity-55 transition duration-500"
        >
          GUSHIKEN DESIGN
        </a>
      </div>
    </section>
  );
}