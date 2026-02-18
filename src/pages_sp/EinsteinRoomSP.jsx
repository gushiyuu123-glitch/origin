// src/pages_sp/EinsteinRoomSP.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
const TimelineSection = ({ year, title, description, image }) => (
  <section className="es-sp-section relative min-h-[100svh] flex items-center px-[6vw] overflow-hidden">

    {/* Background */}
    <img
      src={image}
      className="absolute inset-0 w-full h-full object-cover opacity-40"
      alt=""
    />

    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black z-10" />

    {/* Content */}
    <div className="relative z-20 w-full max-w-[520px] mx-auto fade-up text-left">

      <p className="text-[10px] tracking-[0.45em] text-white/50 mb-6">
        {year}
      </p>

      <h2 className="text-[22px] tracking-[0.18em] font-light leading-[1.5] mb-8">
        {title}
      </h2>

      <p className="text-[14px] leading-[1.9] text-white/70 font-light">
        {description}
      </p>

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
          className="absolute inset-0 w-full h-full object-cover object-[25%_50%] opacity-65"
          alt=""
        />

        {/* ▼ ここが重要：完全ブラックやめた */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/60 to-black/85 z-10" />

        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 70% 40%, rgba(255,255,255,0.25) 0%, transparent 60%)",
          }}
        />

        {/* タイトル */}
        <div className="relative z-20 w-full text-right pr-[10vw] mt-[16vh] fade-up">

          <h1
            ref={heroTitleRef}
            className="
              text-[30px]
              tracking-[0.30em]
              font-light
              leading-[1.35]
              text-white/80
            "
          >
            時空の設計者
          </h1>

          <p
            className="
              mt-5
              text-[9px]
              tracking-[0.5em]
              text-white/40
              text-center
              self-center
            "
          >
            ALBERT EINSTEIN
          </p>

        </div>

      </section>

<TimelineSection
  year="1879"
  title="コンパス"
  description={`幼い彼の手の中で、
針は静かに揺れていた。

誰も触れていないのに、
なぜ動くのか。

見えない力が、
世界を支配している。

その瞬間、
少年の中で宇宙が始まった。`}
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
