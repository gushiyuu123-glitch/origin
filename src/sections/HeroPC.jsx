import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

export default function HeroPC() {
  const namesRef = useRef([]);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const axisCoreRef = useRef(null);
  const axisGlowRef = useRef(null);
  const titleRef = useRef(null);
  const navigate = useNavigate();

  /* =========================
     GSAP 神殿起動
  ========================== */
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ---------- 名前出現 ---------- */
      gsap.fromTo(
        namesRef.current,
        { y: 30, scale: 0.96 },
        {
          y: 0,
          scale: 1,
          duration: 3,
          stagger: 0.6,
          ease: "power3.out",
        }
      );

      namesRef.current.forEach((el) => {
        gsap.to(el, {
          y: "+=8",
          duration: 20 + Math.random() * 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      gsap.to(axisGlowRef.current, {
        opacity: 0.65,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ---------- タイトル再構築 ---------- */

      const chars = titleRef.current.querySelectorAll(".char");

      gsap.set(chars, {
        opacity: 0,
        scale: 0.7,
        rotation: () => gsap.utils.random(-30, 30),
        x: (i) => {
          const dir = i % 4;
          if (dir === 0) return -window.innerWidth * 0.3;
          if (dir === 1) return window.innerWidth * 0.3;
          return 0;
        },
        y: (i) => {
          const dir = i % 4;
          if (dir === 2) return -window.innerHeight * 0.3;
          if (dir === 3) return window.innerHeight * 0.3;
          return 0;
        },
      });

      const tl = gsap.timeline({ delay: 1.2 });

      // 光柱強まる
      tl.to(axisGlowRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });

      // 収束
      tl.to(chars, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        opacity: 1,
        duration: 2.4,
        stagger: 0.08,
        ease: "power4.out",
      }, "-=0.3");

      // 時間停止（0.12秒）
      tl.to({}, { duration: 0.12 });

      // 微細な確定
      tl.to(chars, {
        scale: 1.01,
        duration: 0.6,
        ease: "power2.out",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* =========================
     視差
  ========================== */
  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;

      gsap.to(namesRef.current, {
        x: x * 14,
        y: y * 14,
        duration: 1.5,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* =========================
     儀式遷移
  ========================== */
  const handleEnter = (route) => {
    const tl = gsap.timeline({
      onComplete: () => navigate(route),
    });

    tl.to(axisGlowRef.current, { opacity: 1, duration: 0.3 })
      .to(
        namesRef.current,
        {
          opacity: 0,
          scale: 0.95,
          duration: 0.3,
          stagger: 0.05,
        },
        0
      )
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.45,
      });
  };

  const names = [
    { text: "VAN GOGH", sub: "感性", route: "/vangogh", style: "top-[18%] left-[12%]" },
    { text: "LEONARDO", sub: "構造", route: "/leonardo", style: "top-[62%] right-[8%]" },
    { text: "JOBS", sub: "本質", route: "/jobs", style: "top-[45%] left-[34%]" },
    { text: "MUSK", sub: "革命", route: "/musk", style: "top-[28%] right-[28%]" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-screen h-screen bg-[#040404] text-white overflow-hidden"
    >
      {/* 背景 */}
      <img
        src="/origin-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-55"
        style={{
          filter: "blur(0.5px) brightness(0.78) contrast(1.1)",
        }}
      />

      {/* 空気層 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.02), transparent 40%, rgba(255,255,255,0.02))",
        }}
      />

      {/* 光柱芯 */}
      <div
        ref={axisCoreRef}
        className="absolute left-1/2 top-0 h-full w-[1px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.35), transparent)",
          opacity: 0.5,
        }}
      />

      {/* 光柱滲み */}
      <div
        ref={axisGlowRef}
        className="absolute left-1/2 top-0 h-full w-[3px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.25), transparent)",
          filter: "blur(4px)",
          opacity: 0.5,
        }}
      />

      {/* 光膜 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 700px at 50% 45%, rgba(255,255,255,0.035), transparent 75%)",
        }}
      />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />


      {/* タイトル */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h1
          ref={titleRef}
          className="text-[64px] tracking-[0.45em] font-light mb-6"
          style={{
            textShadow:
              "0 0 50px rgba(255,255,255,0.25), 0 0 200px rgba(255,255,255,0.08)",
          }}
        >
          {"創造の源".split("").map((char, i) => (
            <span key={i} className="char inline-block">
              {char}
            </span>
          ))}
        </h1>

        <p className="text-xs tracking-[0.9em] opacity-70">
          — ORIGIN —
        </p>
      </div>

      {names.map((item, i) => (
        <div
          key={i}
          ref={(el) => (namesRef.current[i] = el)}
          onClick={() => handleEnter(item.route)}
          className={`absolute ${item.style} flex flex-col items-start cursor-pointer select-none`}
        >
          <span className="text-sm tracking-[0.45em]" style={{ opacity: 0.32 }}>
            {item.text}
          </span>
          <span className="mt-3 text-[12px] tracking-[0.5em]" style={{ opacity: 0.7 }}>
            {item.sub}
          </span>
        </div>
      ))}
    </section>
  );
}
