// src/sections_sp/HeroSP.jsx

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

export default function HeroSP() {
  const containerRef = useRef(null);
  const axisRef = useRef(null);
  const canvasRef = useRef(null);
  const titleRef = useRef(null);
  const navigate = useNavigate();

  /* ==================================================
     GSAP
  ================================================== */
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ---------- 人物出現 ---------- */
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

      /* ---------- タイトル再構築（SP最適化） ---------- */

      const chars = titleRef.current.querySelectorAll(".char");

      gsap.set(chars, {
        opacity: 0,
        scale: 0.85,
        y: 30,
      });

      const tl = gsap.timeline({ delay: 0.8 });

      tl.to(axisRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });

      tl.to(chars, {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.8,
        stagger: 0.06,
        ease: "power4.out",
      }, "-=0.3");

      // 時間停止（超短）
      tl.to({}, { duration: 0.08 });

      // 微細な確定
      tl.to(chars, {
        scale: 1.01,
        duration: 0.4,
        ease: "power2.out",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* ==================================================
     粒子（静かに中央へ寄る）
  ================================================== */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const centerX = () => canvas.width / 2;
    const centerY = () => canvas.height / 2;

    const particles = Array.from({ length: 18 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.04 + 0.01,
      baseOpacity: Math.random() * 0.15 + 0.05,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y -= p.speed;

        // わずかに中央へ吸引
        p.x += (centerX() - p.x) * 0.0008;

        if (p.y < 0) p.y = canvas.height;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${p.baseOpacity})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

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
    })
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.4,
      }, 0);
  };

const names = [
  { text: "VAN GOGH", sub: "感性", route: "/vangogh" },
  { text: "LEONARDO", sub: "構造", route: "/leonardo" },

  // 🔥 追加
  { text: "EINSTEIN", sub: "直感", route: "/einstein" },

  { text: "JOBS", sub: "本質", route: "/jobs" },
  { text: "MUSK", sub: "革命", route: "/musk" },
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

{/* タイトルブロック */}
<div className="relative z-10 text-center mt-12 mb-20">
  <h1
    ref={titleRef}
    className="text-[42px] tracking-[0.38em] font-light mb-6"
    style={{
      textShadow:
        "0 0 40px rgba(255,255,255,0.45), 0 0 120px rgba(255,230,200,0.12)",
      letterSpacing: "0.32em",
    }}
  >
    {"創造の源".split("").map((char, i) => (
      <span key={i} className="char inline-block">
        {char}
      </span>
    ))}
  </h1>

  {/* ロゴ */}
  <div className="relative flex justify-center items-center pointer-events-none select-none mt-4">
    {/* 光膜 */}
    <div
      className="absolute w-[240px] h-[240px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(255,215,170,0.08) 0%, rgba(0,0,0,0) 65%)",
        filter: "blur(40px)",
        opacity: 0.6,
      }}
    />

    <img
      src="/images/origin-logo.png"
      alt="ORIGIN"
      className="relative w-[140px] opacity-85"
      style={{
        filter: `
          drop-shadow(0 0 10px rgba(255,215,170,0.12))
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
