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
  const navigate = useNavigate();

  /* ==================================================
     GSAP 起動
  ================================================== */
  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(
        ".sp-item",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 1.6,
          stagger: 0.22,
          ease: "power3.out",
        }
      );

      gsap.to(axisRef.current, {
        opacity: 0.7,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const chars = titleRef.current.querySelectorAll(".char");

      gsap.set(chars, { opacity: 0, scale: 0.85, y: 30 });
      gsap.set(logoRef.current, { opacity: 0, scale: 0.96 });

      const tl = gsap.timeline({ delay: 0.8 });

      tl.to(chars, {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.8,
        stagger: 0.06,
        ease: "power4.out",
      });

      tl.to(logoRef.current, {
        opacity: 0.72,
        scale: 1,
        duration: 1.4,
        ease: "power2.out",
      }, "-=1.2");

      gsap.to(logoRef.current, {
        scale: 1.015,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(glowRef.current, {
        opacity: 0.7,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* ==================================================
     シルエット制御（SP弱演出）
  ================================================== */

  const showSilhouette = (image) => {
    silhouetteRef.current.src = image;

    gsap.fromTo(
      silhouetteRef.current,
      { opacity: 0, scale: 0.96 },
      {
        opacity: 0.1,   // ← SPはかなり薄く
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
      }
    );

    gsap.to(axisRef.current, {
      opacity: 1,
      duration: 0.5,
    });
  };

  const hideSilhouette = () => {
    gsap.to(silhouetteRef.current, {
      opacity: 0,
      duration: 0.5,
    });

    gsap.to(axisRef.current, {
      opacity: 0.7,
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
      y: -12,
      duration: 0.3,
      stagger: 0.05,
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
            filter: "blur(6px) brightness(1.15)",
          }}
        />
      </div>

      <div
        ref={axisRef}
        className="absolute left-1/2 top-0 h-full w-[1px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.45), transparent)",
          opacity: 0.5,
        }}
      />

      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* タイトル */}
      <div className="relative z-10 text-center mt-14 mb-20">
        <h1
          ref={titleRef}
          className="text-[42px] tracking-[0.32em] font-light mb-6"
          style={{
            textShadow:
              "0 0 35px rgba(255,255,255,0.45), 0 0 110px rgba(255,230,200,0.10)",
          }}
        >
          {"創造の源".split("").map((char, i) => (
            <span key={i} className="char inline-block">
              {char}
            </span>
          ))}
        </h1>

        <div className="relative flex justify-center items-center mt-4 select-none">
          <div
            ref={glowRef}
            className="absolute w-[240px] h-[240px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,215,170,0.06) 0%, rgba(0,0,0,0) 65%)",
              filter: "blur(45px)",
              opacity: 0.5,
            }}
          />

          <img
            ref={logoRef}
            src="/images/origin-logo.png"
            alt="ORIGIN"
            className="relative w-[140px]"
            style={{
              opacity: 0.75,
              filter: `
                saturate(0.85)
                brightness(0.92)
                drop-shadow(0 0 8px rgba(255,215,170,0.10))
              `,
            }}
          />
        </div>
      </div>

      {/* 人物 */}
      <div className="relative z-10 flex flex-col gap-14 w-full max-w-[320px]">
        {names.map((item, i) => (
          <div
            key={i}
            onTouchStart={() => showSilhouette(item.image)}
            onTouchEnd={hideSilhouette}
            onClick={() => handleEnter(item.route)}
            className="sp-item flex flex-col items-center cursor-pointer select-none transition-all duration-300 active:scale-[0.96]"
          >
            <span
              className="text-[16px] tracking-[0.45em] font-light"
              style={{
                opacity: 0.82,
                textShadow: "0 0 30px rgba(255,255,255,0.28)",
              }}
            >
              {item.text}
            </span>

            <span
              className="mt-3 text-[11px] tracking-[0.7em]"
              style={{ opacity: 0.95 }}
            >
              {item.sub}
            </span>

            <div className="mt-6 w-[70px] h-px bg-white/35" />
          </div>
        ))}
      </div>
    </section>
  );
}
