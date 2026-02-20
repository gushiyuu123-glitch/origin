// src/pages/LeonardoRoom.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./leonardo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LeonardoRoom() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".ld-sec");

      sections.forEach((sec) => {
        const target = sec.querySelector(".ld-fade");
        const bg = sec.querySelector(".ld-bg");
        const line = sec.querySelector(".ld-line");
        const peak = sec.classList.contains("ld-peak");

        // TEXT
        if (target) {
          gsap.set(target, { opacity: 0, y: 22 });
          gsap.to(target, {
            opacity: 1,
            y: 0,
            duration: 1.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
              once: true,
            },
          });
        }

        // PARALLAX
        if (bg) {
          gsap.to(bg, {
            y: -46,
            scale: 1.018,
            ease: "none",
            scrollTrigger: {
              trigger: sec,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.25,
            },
          });
        }

        // LINE BREATH
        if (line) {
          gsap.fromTo(
            line,
            { opacity: 0.12 },
            {
              opacity: peak ? 0.55 : 0.34,
              scrollTrigger: {
                trigger: sec,
                start: "top center",
                end: "bottom center",
                scrub: true,
              },
            }
          );

          gsap.to(line, {
            boxShadow: "0 0 14px rgba(212,175,55,0.18)",
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }

        // LUMINANCE
        gsap.fromTo(
          sec,
          { opacity: peak ? 0.96 : 0.94 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: sec,
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          }
        );

        // PEAK BRIGHTNESS
        if (peak) {
          gsap.fromTo(
            sec,
            { filter: "brightness(0.92)" },
            {
              filter: "brightness(1)",
              scrollTrigger: {
                trigger: sec,
                start: "top 70%",
                end: "bottom 35%",
                scrub: true,
              },
            }
          );
        }
      });

      // WHY pulse
      const q = document.querySelector(".ld-q");
      if (q) {
        gsap.fromTo(
          q,
          { opacity: 0.35 },
          { opacity: 0.6, duration: 3.6, repeat: -1, yoyo: true, ease: "sine.inOut" }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const IMG = {
    hero: "/images/leonardo/portrait1.png",
    youth: "/images/leonardo/vinci-hills.png",
    workshop: "/images/leonardo/workshop.png",
    notes: "/images/leonardo/notebook.png",
    anatomy: "/images/leonardo/anatomy.png",
    mona: "/images/leonardo/mona-lisa.png",
    supper: "/images/leonardo/last-supper.png",
    geometry: "/images/leonardo/geometry.png",
  };

  return (

    <div
      ref={containerRef}
      className="relative w-full bg-[#0c0b08] text-[#e6dfd2] overflow-hidden tracking-[0.02em]"
      
      style={{
        fontFeatureSettings: '"liga" 1',
        WebkitFontSmoothing: "antialiased",
      }}
    >
    {/* JSON-LD（SEO） */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "ORIGIN 第二章｜レオナルド・ダ・ヴィンチ — 構造の解体者",
          "description":
            "レオナルド・ダ・ヴィンチの観察・解剖・構造設計を体験的に読み解くデジタル博物館コンテンツ。",
          "image": "https://origin-gray.vercel.app/ogp/leonardo.jpg",
          "author": {
            "@type": "Person",
            "name": "GUSHIKEN DESIGN"
          },
          "url": "https://origin-gray.vercel.app/leonardo"
        }),
      }}
    ></script>
      {/* GLOBAL FILM */}
      <div
        className="pointer-events-none fixed inset-0 z-[2]"
        style={{
          opacity: 0.06,
          mixBlendMode: "overlay",
          backgroundImage: "url('/images/leonardo/grain.png')",
          backgroundSize: "360px 360px",
        }}
      />
{/* ================= HERO ================= */}
<section className="ld-sec relative min-h-screen flex items-center justify-center text-center px-8 overflow-hidden">

  {/* BG IMAGE */}
  <img
    src={IMG.hero}
    className="absolute inset-0 w-full h-full object-cover opacity-14 blur-[0.8px]"
    alt=""
  />

  {/* subtle dot geometry */}
  <div
    className="absolute inset-0 opacity-[0.035] pointer-events-none"
    style={{
      backgroundImage:
        "radial-gradient(circle at center, rgba(212,175,55,0.42) 1px, transparent 1px)",
      backgroundSize: "180px 180px",
    }}
  />

  {/* strong vertical gradient */}
  <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/94 via-black/88 to-black/99" />

  {/* radial dark focus (文字周辺保護) */}
  <div className="absolute inset-0 z-10 
    bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.88)_60%,rgba(0,0,0,0.98)_100%)]" 
  />

  {/* thin frame */}
  <div className="absolute inset-8 border border-white/10 z-20 pointer-events-none" />

  <div className="relative z-30 max-w-[980px] ld-fade py-28">

<p className="text-[12px] tracking-[0.6em] text-white/50 font-light mb-6">
  ORIGIN 第二章
</p>

<h2 className="text-[clamp(28px,4vw,44px)] tracking-[0.2em] font-light">
  構造の解体者
</h2>

<p className="mt-4 text-[12px] tracking-[0.55em] text-white/40 font-light">
  レオナルド・ダ・ヴィンチ
</p>




    <div className="my-16 w-[130px] h-px bg-[#d4af37]/35 mx-auto" />

  <p className="leading-[3.3] text-[18px] md:text-[20px] font-light text-[#e6dfd2]/95">
  彼は、万能だった。<br />
  ――そう呼ばれる前に、<br />
  <span className="text-white text-[22px] md:text-[23px] tracking-[0.06em]">
    止まれない観察者
  </span>
  だった。<br /><br />

  絵を描きながら、解剖をした。<br />
  機械を設計しながら、水の流れを記録した。<br /><br />

  モナ・リザの微笑みの裏には、<br />
  筋肉と骨格の理解があった。<br /><br />

  最後の晩餐の遠近法の奥には、<br />
  幾何学と光の計算があった。<br /><br />

  芸術家ではない。<br />
  科学者でもない。<br /><br />

  世界を分解し、<br />
  再構築せずにはいられない人間だった。
</p>


    <div className="mt-20 flex items-center justify-center gap-4 text-[12px] tracking-[0.34em] text-white/50">
      <span className="text-[#d4af37]/90">WHY?</span>
      <span className="opacity-40">/</span>
      <span className="opacity-70">なぜは、終わらない。</span>
    </div>

  </div>
</section>


      <section className="ld-sec relative min-h-screen flex items-center justify-center text-center px-8 overflow-hidden">

  <img
    src={IMG.youth}
    className="ld-bg absolute inset-0 w-full h-full object-cover opacity-16 blur-[0.6px]"
    alt=""
  />

  <div className="absolute inset-0 bg-gradient-to-b 
    from-black/95 
    via-black/88 
    to-black/98 
    z-10"
  />

  <div className="absolute inset-8 border border-white/10 z-20 pointer-events-none" />

  <div className="relative z-30 max-w-[900px] ld-fade py-32">

    <p className="text-[11px] tracking-[0.5em] text-white/36 font-light mb-6">
      1452 / VINC I
    </p>

<h2 className="text-[46px] md:text-[56px] tracking-[0.34em] font-light text-[#f2efe8]">
  少年は、王道に入れなかった
</h2>

<div className="ld-line mt-14 mb-18 w-[120px] h-px bg-[#d4af37]/30 mx-auto" />

<p className="leading-[3.1] text-[18px] md:text-[21px] font-light text-[#e6dfd2]/96">
  彼は私生児として生まれた。<br />
  名前はあっても、家系図には刻まれない。<br />
  正規の大学へ進む道は閉ざされ、<br />
  ラテン語教育も、完全ではなかった。<br /><br />

  学問の“王道”に入れない。<br />
  権威の言葉を借りられない。<br /><br />

  だが──<br />
  <span className="text-white/90">
    それは、自由でもあった。
  </span><br /><br />

  既存の理論に縛られず、<br />
  誰の体系にも従わず、<br />
  ただ、目の前の現象だけを見る。<br /><br />

  風の流れ、光の屈折、筋肉の構造、<br />
  鳥の羽ばたき、水の渦。<br /><br />

  彼は本を閉じ、<br />
  世界を開いた。
</p>

<p className="mt-16 text-[12px] tracking-[0.38em] text-white/40">
  排除 → 観察 → 世界が教科書になる
</p>



  </div>
</section>


    {/* ================= WORKSHOP (工房) ================= */}
<section className="ld-sec relative min-h-screen flex items-center justify-center text-center px-8 overflow-hidden">

  {/* BG IMAGE */}
  <img
    src={IMG.workshop}
    className="absolute inset-0 w-full h-full object-cover opacity-13 blur-[0.9px]"
    alt=""
  />

  {/* subtle grid */}
  <div
    className="absolute inset-0 opacity-[0.035] pointer-events-none"
    style={{
      backgroundImage:
        "linear-gradient(rgba(212,175,55,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.22) 1px, transparent 1px)",
      backgroundSize: "150px 150px",
    }}
  />

{/* vertical dark control */}
<div className="absolute inset-0 z-10 
  bg-gradient-to-b from-black/88 via-black/72 to-black/95" 
/>

{/* radial focus protection（弱め） */}
<div className="absolute inset-0 z-10 
  bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.55)_60%,rgba(0,0,0,0.75)_100%)]"
/>


  {/* thin frame */}
  <div className="absolute inset-8 border border-white/10 z-20 pointer-events-none" />

  <div className="relative z-30 max-w-[920px] ld-fade py-32">

<h2 className="text-[46px] md:text-[54px] tracking-[0.38em] font-light text-[#f3f1ea]">
  絵が、入口だった
</h2>

<div className="mt-14 mb-18 w-[120px] h-px bg-[#d4af37]/36 mx-auto" />

<p className="leading-[3.3] text-[18px] md:text-[21px] font-light text-[#e6dfd2]/95">
  14歳、ヴェロッキオの工房へ入る。<br />
  絵画、彫刻、建築、機械、舞台装置。<br />
  そこは芸術と技術が混ざり合う場所だった。<br /><br />

  本来は、絵を学ぶ場所。<br />
  だが彼は、描くことだけに留まらなかった。<br /><br />

  <span className="text-white text-[22px] tracking-[0.05em]">
    描くには、理解がいる。
  </span><br /><br />

  馬を描くなら、筋肉を知る。<br />
  川を描くなら、水の流れを知る。<br />
  光を描くなら、光の仕組みを知る。<br /><br />

  絵は入口だった。<br />
  彼が欲していたのは、<br />
  形の奥にある“構造”だった。
</p>


  </div>
</section>


   {/* ================= NOTES (観察/経験) ================= */}
<section className="ld-sec relative min-h-screen flex items-center justify-center text-center px-8 overflow-hidden">

  {/* BG IMAGE */}
  <img
    src={IMG.notes}
    className="absolute inset-0 w-full h-full object-cover opacity-15 blur-[0.7px]"
    alt=""
  />

{/* vertical control（もっと軽く） */}
<div className="absolute inset-0 z-10 
  bg-gradient-to-b from-black/82 via-black/64 to-black/92" 
/>

{/* radial protection（超弱） */}
<div className="absolute inset-0 z-10 
  bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.55)_100%)]"
/>

  {/* paper film */}
  <div
    className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none z-20"
    style={{
      backgroundImage: "url('/images/leonardo/paper-texture.png')",
      backgroundSize: "cover",
    }}
  />

  {/* thin frame */}
  <div className="absolute inset-8 border border-white/10 z-20 pointer-events-none" />

  <div className="relative z-30 max-w-[900px] ld-fade py-32">
<h2 className="text-[46px] md:text-[54px] tracking-[0.38em] font-light text-[#f3f1ea]">
  観察しか、信じられなかった
</h2>

<div className="mt-14 mb-18 w-[120px] h-px bg-[#d4af37]/36 mx-auto" />

<p className="leading-[3.3] text-[18px] md:text-[21px] font-light text-[#e6dfd2]/95">
  本は引用できる。<br />
  権威は借りられる。<br />
  だが彼には、そのどちらもなかった。<br /><br />

  だから、見るしかなかった。<br />
  世界そのものを。<br /><br />

  彼のノートは日記ではない。<br />
  現実を捕まえるための、実験装置だった。<br /><br />

  図解する。測る。分解する。<br />
  逆さに書く。描き直す。<br />
  疑い、確かめ、また疑う。<br /><br />

  <span className="text-white text-[22px] tracking-[0.05em]">
    経験だけが、教師だった。
  </span>
</p>


  </div>
</section>

    {/* ================= ANATOMY (解剖) ================= */}
<section className="ld-sec relative min-h-screen flex items-center justify-center text-center px-8 overflow-hidden">

  {/* BG IMAGE */}
  <img
    src={IMG.anatomy}
    className="absolute inset-0 w-full h-full object-cover opacity-13 blur-[0.8px]"
    alt=""
  />

  {/* vertical control（重めだが殺さない） */}
  <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/92 via-black/80 to-black/98" />

  {/* radial focus（中央だけ守る） */}
  <div className="absolute inset-0 z-10 
    bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.7)_65%,rgba(0,0,0,0.9)_100%)]"
  />

  {/* subtle warning line */}
  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[78vw] max-w-[980px] h-px bg-[#d4af37]/14 z-20" />

  {/* thin frame */}
  <div className="absolute inset-8 border border-white/10 z-20 pointer-events-none" />

  <div className="relative z-30 max-w-[900px] ld-fade py-32">

   <h2 className="text-[46px] md:text-[54px] tracking-[0.36em] font-light text-[#f3f1ea]">
  夜の解剖
</h2>

<div className="mt-14 mb-18 w-[120px] h-px bg-[#d4af37]/36 mx-auto" />

<p className="leading-[3.3] text-[18px] md:text-[21px] font-light text-[#e6dfd2]/95">
  彼は夜、死体を解剖した。<br />
  当時、それは禁忌だった。<br /><br />

  誰もいない時間。<br />
  冷たい石の上。<br />
  ひらかれた身体。<br /><br />

  皮膚の下にある秩序を、<br />
  彼は探していた。<br /><br />

  <span className="text-white text-[22px] tracking-[0.05em]">
    正確に、描きたかった。
  </span><br /><br />

  美を描くために、<br />
  美を壊した。<br /><br />

  感情ではなく、構造。<br />
  生命の裏側から、“生”を立ち上げようとした。
</p>

  </div>
</section>

  {/* ================= MONA LISA (執着) ================= */}
<section className="ld-sec relative min-h-screen flex items-center justify-center text-center px-8 overflow-hidden">

  {/* BG IMAGE（少し明るめ） */}
  <img
    src={IMG.mona}
    className="absolute inset-0 w-full h-full object-cover opacity-30"
    alt=""
  />

  {/* 軽い縦コントロール */}
  <div className="absolute inset-0 z-10 
    bg-gradient-to-b from-black/68 via-black/52 to-black/82"
  />

  {/* 柔らかい中心グロウ（やや強め） */}
  <div
    className="absolute inset-0 opacity-[0.14] pointer-events-none"
    style={{
      background:
        "radial-gradient(circle at 50% 46%, rgba(212,175,55,0.42) 0%, transparent 62%)",
    }}
  />

  {/* 薄いフレーム */}
  <div className="absolute inset-8 border border-white/10 z-20 pointer-events-none" />

  <div className="relative z-30 max-w-[920px] ld-fade py-32">
<h2 className="text-[46px] md:text-[56px] tracking-[0.38em] font-light text-[#f4f1ea]">
  モナ・リザ
</h2>

<div className="mt-14 mb-18 w-[130px] h-px bg-[#d4af37]/45 mx-auto" />

<p className="leading-[3.35] text-[18px] md:text-[22px] font-light text-[#e6dfd2]/96">
  彼女は、笑っているのか。<br />
  それとも、笑っていないのか。<br /><br />

  答えは、見る者の目に委ねられる。<br /><br />

  彼は何年も、この一枚を手放さなかった。<br />
  塗り重ねる。溶かす。削る。戻す。<br />
  そしてまた、疑う。<br /><br />

  <span className="text-white text-[23px] tracking-[0.06em]">
    曖昧さは、偶然ではない。
  </span><br /><br />

  口元の輪郭をぼかし、<br />
  光を層にし、<br />
  境界を溶かす。<br /><br />

  感情を描いたのではない。<br />
  “知覚そのもの”を設計した。
</p>

  </div>
</section>


   {/* ================= LAST SUPPER (PEAK) ================= */}
<section className="ld-sec ld-peak relative min-h-screen flex items-center justify-center text-center px-8 overflow-hidden">

  {/* BG IMAGE（やや強め） */}
  <img
    src={IMG.supper}
    className="absolute inset-0 w-full h-full object-cover opacity-11"
    alt=""
  />

  {/* vertical control（重厚だが潰さない） */}
<div className="absolute inset-0 z-10 
  bg-gradient-to-b from-black/88 via-black/78 to-black/96"
/>

  {/* peak radial（中心強調） */}
  <div
    className="absolute inset-0 opacity-[0.16] pointer-events-none"
    style={{
      background:
        "radial-gradient(circle at 50% 48%, rgba(212,175,55,0.48) 0%, transparent 62%)",
    }}
  />

  {/* thin frame */}
  <div className="absolute inset-8 border border-white/10 z-20 pointer-events-none" />

  <div className="relative z-30 max-w-[980px] ld-fade py-32">

   <p className="text-[11px] tracking-[0.6em] text-[#d4af37]/65 font-light mb-6">
  PEAK / SPACE CONTROL
</p>

<h2 className="text-[50px] md:text-[64px] tracking-[0.4em] font-light text-[#f4f1ea]">
  最後の晩餐
</h2>

<div className="mt-14 mb-20 w-[160px] h-px bg-[#d4af37]/60 mx-auto" />

<p className="leading-[3.5] text-[19px] md:text-[24px] font-light text-white/90" style={{ textShadow: "0 3px 10px rgba(0,0,0,0.10)" }}>
  「この中に、裏切り者がいる。」

  その一言で、空間は裂けた。<br /><br />

  感情は爆発する。<br />
  手は上がり、身体は傾き、ざわめきが走る。<br /><br />

  だが――<br />
  <span className="text-white text-[26px] tracking-[0.06em]">
    構造は、揺れない。
  </span><br /><br />

  すべての線は、キリストへ。<br />
  すべての視線は、中心へ。<br /><br />

  彼は物語を描いたのではない。<br />
  空間を支配した。<br /><br />

  しかし彼は、また実験した。<br />
  伝統的なフレスコを拒み、独自の技法を試す。<br />
  その結果、絵は早く傷んだ。<br /><br />

  完璧な構造でも、物質は裏切る。<br />
  それでも彼は、構造を選んだ。
</p>

  </div>
</section>


{/* ================= INTEGRATION / FATE (余韻) ================= */}
<section className="ld-sec relative min-h-screen flex items-center justify-center text-center px-8 overflow-hidden">

  {/* BG IMAGE（少し沈める） */}
  <img
    src={IMG.geometry}
    className="absolute inset-0 w-full h-full object-cover opacity-13 blur-[0.6px]"
    alt=""
  />

  {/* vertical control（静かな重み） */}
  <div className="absolute inset-0 z-10 
    bg-gradient-to-b from-black/88 via-black/68 to-black/95"
  />

  {/* very soft center darkening */}
  <div className="absolute inset-0 z-10 
    bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.45)_65%,rgba(0,0,0,0.65)_100%)]"
  />

  {/* thin frame */}
  <div className="absolute inset-8 border border-white/10 z-20 pointer-events-none" />

  <div className="relative z-30 max-w-[940px] ld-fade py-32">

<h2 className="text-[46px] md:text-[56px] tracking-[0.36em] font-light text-[#f4f1ea]">
  未完成という運命
</h2>

<div className="mt-14 mb-20 w-[130px] h-px bg-[#d4af37]/38 mx-auto" />

<p className="leading-[3.4] text-[18px] md:text-[22px] font-light text-[#e6dfd2]/96">
  絵画。解剖学。工学。幾何学。<br />
  彼にとって、それらは分野ではなかった。<br /><br />

  世界は一つの構造体。<br />
  分解し、理解し、再接続する。<br />
  それが創造だった。<br /><br />

  だが理解は終わらない。<br />
  “なぜ？”は尽きない。<br /><br />

  完成へ向かうほど、未知は広がる。<br /><br />

  だから彼の人生は、<br />
  <span className="text-white text-[23px] tracking-[0.06em]">
    未完成のまま
  </span>
  残った。<br /><br />

  ノートには、まだ存在しない機械の設計図。<br />
  それが現実になるのは、数百年後だった。<br /><br />

  彼は、終わらなかった。<br />
  ただ、時間が追いつかなかった。
</p>

<div className="mt-20">
  <p className="text-[12px] tracking-[0.46em] text-white/45">
    THE HUMAN WHO COULDN'T STOP ASKING WHY
  </p>
</div>

  </div>
</section>


      {/* bottom fade */}
      <div className="h-[16vh] bg-gradient-to-b from-transparent to-black/95" />
    </div>
  );
}
