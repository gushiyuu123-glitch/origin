// src/pages/MuskRoom.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// スマホサイズの再計算バグ防止
ScrollTrigger.config({
  ignoreMobileResize: true,
});

export default function MuskRoom() {
  const heroImgRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroSubRef = useRef(null);

  /* ===========================
     HERO アニメーション（呼吸）
  ============================ */
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroImgRef.current) {
        gsap.to(heroImgRef.current, {
          scale: 1.008,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (heroTitleRef.current) {
        gsap.to(heroTitleRef.current, {
          letterSpacing: "0.36em",
          duration: 7.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });
    return () => ctx.revert();
  }, []);
/* ===========================
   HERO テキストのフェードイン
=========================== */
useEffect(() => {
  gsap.to("#musk-hero-title", {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: "power2.out",
    delay: 0.2,
  });

  gsap.to("#musk-hero-sub", {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: "power2.out",
    delay: 0.35,
  });

  gsap.to("#musk-hero-copy", {
    opacity: 1,
    y: 0,
    duration: 0.75,
    ease: "power2.out",
    delay: 0.5,
  });
}, []);
  /* ===========================
     Fade-in（CLSゼロ・裕人仕様）
  ============================ */
  useEffect(() => {
    const sections = gsap.utils.toArray(".fade-sec");

    sections.forEach((sec) => {
      gsap.fromTo(
        sec,
        {
          opacity: 0,
          filter: "blur(0.2px)", // ← 裕人の世界観：微光膜
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-[#0d0d0d] text-white overflow-x-hidden relative">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-screen w-full overflow-hidden fade-sec">

        {/* 背景膜 */}
        <div
          className="
            absolute inset-0 
            bg-[url('/images/musk/neural-lines.png')] bg-cover
            opacity-[0.18]
            mix-blend-screen
          "
        />

        {/* 光膜 */}
        <div
          className="
            absolute inset-0 
            bg-gradient-to-b from-white/6 via-white/2 to-transparent
            pointer-events-none
          "
        />

        {/* シルエット */}
        <img
          ref={heroImgRef}
          src="/images/musk/hero.png"
          loading="eager"
          className="
            absolute inset-0
            w-full
            aspect-[16/9]      /* 高さが先に確定 → ズレ防止 */
            object-cover
            opacity-[0.92]
            scale-[1.02]
          "
          alt=""
        />
{/* テキスト（完全中央 + 上品に1%だけ浮かせる） */}
<div
  className="
    absolute inset-0
    flex flex-col items-center justify-center
    px-6
    translate-y-[-1%]   /* ← 裕人の世界観：完全中央より“少しだけ”上が最適 */
    text-center
    z-10
  "
>
  {/* 1：名前 */}
<h1
  ref={heroTitleRef}
  className="
    text-[50px]                     /* ← 可読性UPの最適値 */
    tracking-[0.24em]               /* ← 広すぎると読みにくいので最適化 */
   text-white/100                   /* ← 90% → 95% で視認性大幅改善 */
    font-normal
    opacity-0
    translate-y-[10px]
    drop-shadow-[0_0_6px_rgba(255,255,255,0.08)]  /* ← 文字を滲ませず浮かせる */
  "
  id="musk-hero-title"
>
  ELON MUSK
</h1>

  {/* 2：肩書き */}
  <p
    ref={heroSubRef}
    className="
      mt-3
      text-[12px]
      tracking-[0.22em]
      text-white/55
      opacity-0
      translate-y-[10px]
    "
    id="musk-hero-sub"
  >
    GENIUS VECTOR
  </p>

  {/* 3：サブコピー */}
  <p
    className="
      mt-12
      text-[27px]
      leading-[1.72]
      tracking-[0.14em]
      text-white/85
      font-light
      opacity-0
      translate-y-[10px]
      max-w-[700px]
    "
    id="musk-hero-copy"
  >
    常識を越えて生まれた頭脳。
  </p>
</div>
      </section>

      {/* =========================================================
          CHAPTER 01 — 幼少期
      ========================================================= */}
      <section className="fade-sec max-w-[860px] mx-auto px-6 py-[140px]">

        <p className="text-[12px] tracking-[0.26em] opacity-50 mb-8">
          CHAPTER 01 — CHILDHOOD
        </p>

        <h2 className="text-[26px] tracking-[0.18em] mb-10 font-light text-white/90">
          生まれた瞬間から、世界の外側にいた。
        </h2>

        <div className="flex gap-10 items-start">

          {/* born.png（ズレ防止：aspect 必須） */}
          <img
            src="/images/musk/born.png"
            className="
              w-[55%]
              aspect-[4/3]
              rounded-[16px]
              opacity-[0.95]
              object-cover
              shadow-[0_0_40px_rgba(255,255,255,0.06)]
            "
            alt=""
          />

          <div className="w-[45%]">
            <p className="leading-[2] text-[15px] opacity-[0.85] mb-6">
              イーロン・マスクが生まれたのは、南アフリカ・プレトリア。
              世界の大都市から少し距離のあるその土地で、彼の物語は静かに始まった。
            </p>

            <p className="leading-[2] text-[15px] opacity-[0.85] mb-6">
              彼は幼いころから、周囲とは違う時間を生きていた。
              友だちが外で遊ぶあいだ、彼は分厚い科学書や宇宙の本を読み続けていた。
            </p>

            <p className="leading-[2] text-[15px] opacity-[0.85]">
              “なぜ世界はこう動くのか。”
              その問いへの関心が、ほかの子どもの遊びを上回っていた。
              それが彼の出発点だった。
            </p>
          </div>
        </div>
      </section>

      {/* ===== ここから先の章は裕人と一緒に作る ===== */}
    </div>
  );
}