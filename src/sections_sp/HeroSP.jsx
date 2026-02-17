// src/sections_sp/HeroSP.jsx

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

export default function HeroSP() {
  const containerRef = useRef(null);
  const axisRef = useRef(null);
  const canvasRef = useRef(null);
  const titleRef = useRef(null);
  const logoRef = useRef(null);
  const glowRef = useRef(null);
  const silhouetteRef = useRef(null);

  const breatheTweenRef = useRef(null);
  const navigate = useNavigate();

  /* ==================================================
     GSAP 起動（静けさ重視）
  ================================================== */
  useEffect(() => {
    const ctx = gsap.context(() => {

      // 人物フェード
      gsap.fromTo(
        ".sp-item",
        { opacity: 0, y: 24 },
        {
          opacity: 0.8,
          y: 0,
          duration: 1.6,
          stagger: 0.18,
          ease: "power3.out",
        }
      );

      // 軸 × 光膜 同期呼吸
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      tl.to(axisRef.current, {
        opacity: 0.75,
        duration: 6,
        ease: "sine.inOut",
      }, 0);

      tl.to(glowRef.current, {
        opacity: 0.65,
        duration: 6,
        ease: "sine.inOut",
      }, 0);

      // タイトル
      const chars = titleRef.current.querySelectorAll(".char");

      gsap.set(chars, { opacity: 0, y: 24 });
      gsap.set(logoRef.current, { opacity: 0, scale: 0.96 });

      const intro = gsap.timeline({ delay: 0.6 });

      intro.to(chars, {
        y: 0,
        opacity: 1,
        duration: 1.6,
        stagger: 0.06,
        ease: "power3.out",
      });

      intro.to(logoRef.current, {
        opacity: 0.7,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
      }, "-=1");

      // ロゴ微呼吸（弱）
      gsap.to(logoRef.current, {
        scale: 1.01,
        duration: 3.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* ==================================================
     シルエット（SPは軽く）
  ================================================== */

  const showSilhouette = (image) => {
    const el = silhouetteRef.current;
    if (!el) return;

    if (breatheTweenRef.current) {
      breatheTweenRef.current.kill();
      breatheTweenRef.current = null;
    }

    el.src = image;

    gsap.killTweensOf(el);

    gsap.set(el, { opacity: 0, scale: 0.98 });

    gsap.to(el, {
      opacity: 0.12, // ← SPは超薄
      scale: 1,
      duration: 0.7,
      ease: "power2.out",
      onComplete: () => {
        breatheTweenRef.current = gsap.to(el, {
          opacity: 0.14,
          duration: 5.5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      }
    });

    gsap.to(axisRef.current, {
      opacity: 1,
      duration: 0.5,
    });
  };

  const hideSilhouette = () => {
    const el = silhouetteRef.current;
    if (!el) return;

    if (breatheTweenRef.current) {
      breatheTweenRef.current.kill();
      breatheTweenRef.current = null;
    }

    gsap.to(el, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(axisRef.current, {
      opacity: 0.75,
      duration: 0.5,
    });
  };

  /* ==================================================
     遷移
  ================================================== */

  const handleEnter = (route) => {
    const tl = gsap.timeline({
      onComplete: () => navigate(route),
    });

    tl.to(".sp-item", {
      opacity: 0,
      y: -10,
      duration: 0.3,
      stagger: 0.04,
      ease: "power2.in",
    }).to(containerRef.current, {
      opacity: 0,
      duration: 0.4,
    }, 0);
  };

  const names = [
    { text: "VAN GOGH", sub: "感性", route: "/vangogh", image: "/silhouettes/vangogh.png" },
    { text: "LEONARDO", sub: "構造", route: "/leonardo", image: "/silhouettes/leonardo.png" },
    { text: "EINSTEIN", sub: "直感", route: "/einstein", image: "/silhouettes/einstein.png" },
    { text: "JOBS", sub: "本質", route: "/jobs", image: "/silhouettes/jobs.png" },
    { text: "MUSK", sub: "革命", route: "/musk", image: "/silhouettes/musk.png" },
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
        style={{ filter: "brightness(0.85) contrast(1.05)" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/80" />

      {/* シルエット */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          ref={silhouetteRef}
          src=""
          alt=""
          className="w-[120vw] opacity-0"
          style={{
            filter: "blur(6px) brightness(1.1)",
            WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 90%)",
            maskImage: "linear-gradient(to bottom, black 55%, transparent 90%)",
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
          opacity: 0.6,
        }}
      />

      {/* タイトル */}
      <div className="relative z-10 text-center mt-12 mb-16">
        <h1
          ref={titleRef}
          className="text-[40px] tracking-[0.32em] font-light mb-6"
        >
          {"創造の源".split("").map((char, i) => (
            <span key={i} className="char inline-block">
              {char}
            </span>
          ))}
        </h1>

        <div className="relative flex justify-center items-center mt-4">
          <div
            ref={glowRef}
            className="absolute w-[200px] h-[200px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,215,170,0.06) 0%, rgba(0,0,0,0) 65%)",
              filter: "blur(45px)",
              opacity: 0.55,
            }}
          />

          <img
            ref={logoRef}
            src="/images/origin-logo.png"
            alt="ORIGIN"
            className="relative w-[130px]"
          />
        </div>
      </div>

      {/* 人物 */}
      <div className="relative z-10 flex flex-col gap-12 w-full max-w-[320px]">
        {names.map((item, i) => (
          <div
            key={i}
            onTouchStart={() => showSilhouette(item.image)}
            onTouchEnd={hideSilhouette}
            onClick={() => handleEnter(item.route)}
            className="sp-item flex flex-col items-center cursor-pointer active:scale-[0.96]"
          >
            <span className="text-[15px] tracking-[0.45em] font-light">
              {item.text}
            </span>

            <span className="mt-3 text-[11px] tracking-[0.7em] opacity-90">
              {item.sub}
            </span>

            <div className="mt-5 w-[60px] h-px bg-white/35" />
          </div>
        ))}
      </div>
    </section>
  );
}
