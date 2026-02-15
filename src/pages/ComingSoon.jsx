// src/pages/ComingSoon.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ComingSoon({ title, concept }) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const glowRef = useRef(null);
  const canvasRef = useRef(null);

  /* ======================
     GSAP 呼吸
  ====================== */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
        }
      );

      // タイトル微浮遊
      gsap.to(titleRef.current, {
        y: "+=6",
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 光膜呼吸
      gsap.to(glowRef.current, {
        opacity: 0.08,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  /* ======================
     粒子（極軽量）
  ====================== */
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

    const particles = Array.from({ length: 22 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 0.6 + 0.3,
      speed: Math.random() * 0.02 + 0.01,
      opacity: Math.random() * 0.08 + 0.05,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < 0) p.y = canvas.height;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
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

  return (
    <section
      className="
        relative w-screen h-screen
        flex items-center justify-center
        bg-[#0b0c11] text-white
        overflow-hidden
      "
    >
      {/* 光膜 */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(700px 500px at 50% 45%, rgba(255,255,255,0.06), transparent 75%)",
          opacity: 0.05,
        }}
      />

      {/* 粒子 */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* コンテンツ */}
      <div
        ref={containerRef}
        className="relative z-10 text-center px-6"
      >
        <h1
          ref={titleRef}
          className="
            text-[28px] md:text-[36px]
            tracking-[0.45em]
            font-light
            mb-8
          "
          style={{
            textShadow:
              "0 0 40px rgba(255,255,255,0.15)",
          }}
        >
          {title}
        </h1>

        <div className="w-[60px] h-px bg-white/20 mx-auto mb-10" />

        {concept && (
          <p
            className="
              text-[11px]
              tracking-[0.6em]
              opacity-60
              mb-6
            "
          >
            {concept}
          </p>
        )}

        <p className="text-[11px] tracking-[0.5em] opacity-40">
          — COMING SOON —
        </p>
      </div>
    </section>
  );
}
