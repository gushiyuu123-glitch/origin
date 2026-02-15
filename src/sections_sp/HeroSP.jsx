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

      gsap.fromTo(
        ".sp-item",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          stagger: 0.22,
          ease: "power3.out",
        }
      );

      gsap.to(axisRef.current, {
        opacity: 0.6,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleEnter = (route) => {
    const tl = gsap.timeline({
      onComplete: () => navigate(route),
    });

    tl.to(".sp-item", {
      opacity: 0,
      y: -10,
      duration: 0.25,
      stagger: 0.04,
    })
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.35,
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
      {/* 背景 */}
      <img
        src="/origin-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-55"
        style={{
          filter: "brightness(0.72) contrast(1.05)",
        }}
      />

      {/* 暗幕 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* 中央軸 */}
      <div
        ref={axisRef}
        className="absolute left-1/2 top-0 h-full w-[1px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.25), transparent)",
          opacity: 0.4,
        }}
      />

      {/* タイトル */}
      <div className="relative z-10 text-center mb-20">
        <h1
          className="text-[36px] tracking-[0.42em] font-light mb-4"
          style={{
            textShadow:
              "0 0 30px rgba(255,255,255,0.18), 0 0 90px rgba(255,255,255,0.05)",
          }}
        >
          創造の源
        </h1>

        <p className="text-[10px] tracking-[0.8em] opacity-60">
          — ORIGIN —
        </p>
      </div>

      {/* 人物リスト */}
      <div className="relative z-10 flex flex-col gap-12 w-full max-w-[320px]">

        {names.map((item, i) => (
          <div
            key={i}
            onClick={() => handleEnter(item.route)}
            className="sp-item flex flex-col items-center cursor-pointer select-none transition-all duration-300 active:scale-[0.97]"
          >
            <span
              className="
                text-[15px]
                tracking-[0.42em]
                font-light
              "
              style={{
                opacity: 0.65,
                textShadow:
                  "0 0 20px rgba(255,255,255,0.22)",
              }}
            >
              {item.text}
            </span>

            <span
              className="
                mt-3
                text-[11px]
                tracking-[0.65em]
              "
              style={{
                opacity: 0.9,
              }}
            >
              {item.sub}
            </span>

            <div className="mt-5 w-[60px] h-px bg-white/20" />
          </div>
        ))}

      </div>
    </section>
  );
}
