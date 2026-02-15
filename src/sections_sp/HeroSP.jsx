// src/sections_sp/HeroSP.jsx

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

export default function HeroSP() {
  const containerRef = useRef(null);
  const axisRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ===============================
         フェードイン（静かに）
      =============================== */
      gsap.fromTo(
        ".sp-item",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.22,
          ease: "power3.out",
        }
      );

      /* ===============================
         中央軸 呼吸
      =============================== */
      gsap.to(axisRef.current, {
        opacity: 0.65,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* ===============================
     退出アニメーション
  =============================== */
  const handleEnter = (route) => {
    const tl = gsap.timeline({
      onComplete: () => navigate(route),
    });

    tl.to(".sp-item", {
      opacity: 0,
      y: -12,
      duration: 0.28,
      stagger: 0.05,
      ease: "power2.in",
    })
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
    }, 0);
  };

  const names = [
    { text: "VAN GOGH", sub: "感性", route: "/vangogh" },
    { text: "LEONARDO", sub: "構造", route: "/leonardo" },
    { text: "JOBS", sub: "本質", route: "/jobs" },
    { text: "MUSK", sub: "革命", route: "/musk" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col items-center justify-center px-[8vw]"
    >

      {/* ===============================
         背景（少し明るく調整）
      =============================== */}
      <img
        src="/origin-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-65"
        style={{
          filter: "brightness(0.82) contrast(1.05)",
        }}
      />

      {/* ===============================
         暗幕（軽く）
      =============================== */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* ===============================
         中央軸（神聖強化）
      =============================== */}
      <div
        ref={axisRef}
        className="absolute left-1/2 top-0 h-full w-[1px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.35), transparent)",
          opacity: 0.45,
        }}
      />

      {/* ===============================
         タイトル
      =============================== */}
      <div className="relative z-10 text-center mb-20">
        <h1
          className="text-[36px] tracking-[0.45em] font-light mb-4"
          style={{
            textShadow:
              "0 0 40px rgba(255,255,255,0.28), 0 0 120px rgba(255,255,255,0.08)",
          }}
        >
          創造の源
        </h1>

        <p className="text-[10px] tracking-[0.8em] opacity-70">
          — ORIGIN —
        </p>
      </div>

      {/* ===============================
         人物リスト
      =============================== */}
      <div className="relative z-10 flex flex-col gap-12 w-full max-w-[320px]">

        {names.map((item, i) => (
          <div
            key={i}
            onClick={() => handleEnter(item.route)}
            className="sp-item flex flex-col items-center cursor-pointer select-none transition-all duration-300 active:scale-[0.97]"
          >
            <span
              className="text-[15px] tracking-[0.45em] font-light"
              style={{
                opacity: 0.75,
                textShadow:
                  "0 0 25px rgba(255,255,255,0.25)",
              }}
            >
              {item.text}
            </span>

            <span
              className="mt-3 text-[11px] tracking-[0.7em]"
              style={{
                opacity: 0.9,
              }}
            >
              {item.sub}
            </span>

            <div className="mt-5 w-[60px] h-px bg-white/30" />
          </div>
        ))}

      </div>
    </section>
  );
}
