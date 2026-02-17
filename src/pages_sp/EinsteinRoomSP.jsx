// src/pages_sp/EinsteinRoomSP.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function EinsteinRoomSP() {
  const containerRef = useRef(null);
  const heroTitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ================================
         HERO 微小時間歪み（SP弱）
      ================================= */
      if (heroTitleRef.current) {
        gsap.to(heroTitleRef.current, {
          letterSpacing: "0.28em",
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      /* ================================
         セクションフェード
      ================================= */
      const sections = gsap.utils.toArray(".es-sp-section");

      sections.forEach((sec) => {
        const target = sec.querySelector(".fade-up");

        if (target) {
          gsap.set(target, { opacity: 0, y: 24 });

          gsap.to(target, {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
              once: true,
            },
          });
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* ================================
     Timeline Section（SP）
  ================================= */

  const TimelineSection = ({ year, title, image }) => (
    <section className="es-sp-section relative min-h-[100svh] flex items-center px-[6vw] overflow-hidden">

      {/* Background */}
      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        alt=""
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/85 to-black z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[520px] mx-auto fade-up">
        <p className="text-[10px] tracking-[0.45em] text-white/50 mb-4">
          {year}
        </p>

        <h2 className="text-[22px] tracking-[0.18em] font-light leading-[1.4]">
          {title}
        </h2>
      </div>
    </section>
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black text-white overflow-hidden"
    >

      {/* ================= HERO ================= */}
      <section className="es-sp-section relative min-h-[100svh] flex items-center px-[6vw] overflow-hidden">

        <img
          src="/images/einstein/hero1.png"
          className="absolute inset-0 w-full h-full object-cover object-[25%_50%] opacity-50"
          alt=""
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/85 to-black z-10" />

        <div className="relative z-20 w-full text-right fade-up">

          <h1
            ref={heroTitleRef}
            className="
              text-[32px]
              tracking-[0.28em]
              font-light
              leading-[1.3]
            "
          >
            時空の設計者
          </h1>

          <p
            className="
              mt-6
              text-[10px]
              tracking-[0.55em]
              text-white/40
            "
          >
            ALBERT EINSTEIN
          </p>

        </div>
      </section>

      {/* Timeline */}
      <TimelineSection
        year="1879"
        title="コンパス — 世界は見えない力でできている"
        image="/images/einstein/1879.png"
      />

      <TimelineSection
        year="1896"
        title="チューリッヒ — 天才ではない。ただ疑う"
        image="/images/einstein/1896.png"
      />

      <TimelineSection
        year="1902"
        title="特許庁 — 埋もれた時間"
        image="/images/einstein/1902.png"
      />

      <TimelineSection
        year="1905"
        title="奇跡の年 — 時間が壊れる"
        image="/images/einstein/1905.png"
      />

      <TimelineSection
        year="1915"
        title="一般相対性理論 — 重力が曲がる"
        image="/images/einstein/1915.png"
      />

      <TimelineSection
        year="1933"
        title="亡命 — 世界が狂う"
        image="/images/einstein/1933.png"
      />

      <TimelineSection
        year="1955"
        title="静かな終わり — 時間を壊した男の最期"
        image="/images/einstein/1955.png"
      />

      <div className="h-[12vh] bg-gradient-to-b from-transparent to-black" />

    </div>
  );
}
