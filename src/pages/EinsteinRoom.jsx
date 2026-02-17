// src/rooms/EinsteinRoom.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EinsteinRoom() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ================================
         HERO 微小時間歪み（超上品）
      ================================= */
      if (heroRef.current && heroTitleRef.current) {

        gsap.to(heroRef.current, {
          scale: 1.006,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(heroTitleRef.current, {
          letterSpacing: "0.38em",
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(heroTitleRef.current, {
          filter: "blur(0.2px)",
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      /* ================================
         セクション制御
      ================================= */

      const sections = gsap.utils.toArray(".es-section");

      sections.forEach((sec) => {
        const target = sec.querySelector(".fade-up");
        const bg = sec.querySelector(".es-bg");

        if (target) {
          gsap.set(target, { opacity: 0, y: 40 });

          gsap.to(target, {
            opacity: 1,
            y: 0,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
              once: true,
            },
          });
        }

        if (bg) {
          gsap.to(bg, {
            y: -80,
            scale: 1.05,
            ease: "none",
            scrollTrigger: {
              trigger: sec,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* ================================
     Timeline Section Component
  ================================= */

  const TimelineSection = ({ year, title, image }) => (
    <section className="es-section relative min-h-screen flex items-center justify-center text-center px-8 overflow-hidden">

      {/* Background */}
      <img
        src={image}
        className="es-bg absolute inset-0 w-full h-full object-cover opacity-40"
        alt=""
      />

      {/* Dark layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/95 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-[780px] fade-up">
        <p className="text-[12px] tracking-[0.5em] text-white/50 font-light mb-6">
          {year}
        </p>

        <h2 className="text-[clamp(34px,4vw,56px)] tracking-[0.24em] font-light leading-[1.3]">
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
      <section
        ref={heroRef}
        className="es-section relative min-h-screen flex items-center justify-center text-center px-8 overflow-hidden"
      >
       <img
  src="/images/einstein/hero1.png"
  className="
    es-bg
    absolute inset-0
    w-full h-full
    object-cover
    object-[10%_50%]   // ← 横を左寄せ
    opacity-45
  "
  alt=""
/>


<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10" />

<div className="relative z-20 w-full flex justify-end px-[8vw]">

  <div className="text-right max-w-[900px]">

    <h1
      ref={heroTitleRef}
      className="
        text-[clamp(52px,6vw,92px)]
        tracking-[0.35em]
        font-light
        leading-[1.2]
      "
    >
      時空の設計者
    </h1>

    <p
      className="
        mt-8
        text-center md:text-[14px]
        tracking-[0.6em]
        text-white/40
        font-light
        fade-up 
      "
    >
      ALBERT EINSTEIN
    </p>

  </div>

</div>

      </section>

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

      <div className="h-[16vh] bg-gradient-to-b from-transparent to-black" />

    </div>
  );
}
