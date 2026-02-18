import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./leonardosp.css";

gsap.registerPlugin(ScrollTrigger);

export default function LeonardoRoomSP() {
  const containerRef = useRef(null);

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


  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".ld-sec");

      sections.forEach((sec) => {
        const target = sec.querySelector(".ld-fade");
        const bg = sec.querySelector(".ld-bg");
        const line = sec.querySelector(".ld-line");
        const peak = sec.classList.contains("ld-peak");

        /* TEXT */
        if (target) {
          gsap.fromTo(
            target,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sec,
                start: "top 88%",
              },
            }
          );
        }

        /* PARALLAX（SP軽量） */
        if (bg) {
          gsap.to(bg, {
           y: -12,
scale: 1.002,
            ease: "none",
            scrollTrigger: {
              trigger: sec,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          });
        }

        /* LINE */
        if (line) {
          gsap.fromTo(
            line,
            { opacity: 0.2 },
            {
              opacity: peak ? 0.6 : 0.38,
              scrollTrigger: {
                trigger: sec,
                start: "top center",
                end: "bottom center",
                scrub: true,
              },
            }
          );
        }
      });

      /* WHY pulse */
      const q = document.querySelector(".ld-q");
      if (q) {
        gsap.fromTo(
          q,
          { opacity: 0.4 },
          {
            opacity: 0.7,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#0c0b08] text-[#e6dfd2] overflow-hidden tracking-[0.02em]"
      style={{
        fontFeatureSettings: '"liga" 1',
        WebkitFontSmoothing: "antialiased",
      }}
    >

 {/* ================= HERO (SP) ================= */}
<section className="ld-sec relative min-h-[100svh] flex items-center justify-center text-center px-[6vw] overflow-hidden">

  {/* BG IMAGE（少し明るく・blur弱め） */}
  <img
    src={IMG.hero}
    className="ld-bg absolute inset-0 w-full h-full object-cover opacity-26 blur-[0.4px] object-[center_38%]
"
    alt=""
  />

  {/* very subtle geometry（粒を小さく） */}
  <div
    className="absolute inset-0 opacity-[0.02] pointer-events-none"
    style={{
      backgroundImage:
        "radial-gradient(circle at center, rgba(212,175,55,0.35) 1px, transparent 1px)",
      backgroundSize: "140px 140px",
    }}
  />

  {/* vertical gradient（軽量・潰さない） */}
  <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/72 via-black/55 to-black/85" />

  {/* radial center control（やりすぎない） */}
  <div className="absolute inset-0 z-10 
    bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.45)_65%,rgba(0,0,0,0.65)_100%)]"
  />

  {/* frame（SPは余白狭め） */}
<div className="absolute inset-[5vw] border border-white/10 z-20 pointer-events-none" />

<div className="relative z-30 max-w-[92vw] ld-fade py-[20vh]">

<p className="text-[12px] tracking-[0.6em] text-white/50 font-light mb-6">
  ORIGIN 第二章
</p>

<h2 className="text-[32px] tracking-[0.26em] font-light text-[#f3f1ea]">
  構造の解体者
</h2>

<p className="mt-5 text-[11px] tracking-[0.55em] text-white/35 font-light">
  LEONARDO DA VINCI
</p>

<div className="my-12 w-[60px] h-px bg-[#d4af37]/50 mx-auto" />

<p className="leading-[3.1] text-[16px] font-light text-[#e6dfd2]/95">

  彼は天才だった。<br />
  ――そう呼ばれる前に、<br /><br />

  <span className="text-white text-[19px] tracking-[0.05em]">
    止められない人間
  </span>
  だった。<br /><br />

  曖昧を許さない。<br />
  未完成を放置できない。<br /><br />

  世界の構造を、<br />
  解体せずにはいられなかった。

</p>

<div className="mt-20 text-[10px] tracking-[0.35em] text-white/60">
  <span className="text-[#d4af37]/90">WHY?</span>
</div>


  </div>
</section>


{/* ================= YOUTH (SP) ================= */}
<section className="ld-sec relative min-h-[100svh] flex items-center justify-center text-center px-[6vw] overflow-hidden">

  {/* BG IMAGE（少し明るく・blur弱く） */}
  <img
    src={IMG.youth}
    className="ld-bg absolute inset-0 w-full h-full object-cover opacity-24 blur-[0.4px]"
    alt=""
  />

  {/* vertical gradient（重くしすぎない） */}
  <div className="absolute inset-0 z-10 
    bg-gradient-to-b from-black/78 via-black/62 to-black/88"
  />

  {/* very soft radial control */}
  <div className="absolute inset-0 z-10 
    bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.45)_70%,rgba(0,0,0,0.65)_100%)]"
  />

  {/* frame（SPは内側余白少し広め） */}
  <div className="absolute inset-[5vw] border border-white/10 z-20 pointer-events-none" />

  <div className="relative z-30 max-w-[92vw] ld-fade py-[22vh]">

    {/* meta */}
    <p className="text-[10px] tracking-[0.42em] text-white/45 font-light mb-5">
      1452 / VINCI
    </p>

    {/* title（SPは少し抑える） */}
    <h2 className="text-[clamp(28px,7.5vw,40px)] tracking-[0.18em] font-light leading-[1.25] text-[#f2efe8]">
      少年は、<br />
      王道に入れなかった
    </h2>

    <div className="my-10 w-[70px] h-px bg-[#d4af37]/40 mx-auto ld-line" />

 {/* 詩型に再構成（SP最適化） */}
<p className="leading-[3.0] text-[16px] font-light text-[#e6dfd2]/95">

  私生児として生まれた。<br />
  名はあっても、席はない。<br /><br />

  王道に入れない。<br />
  権威を持たない。<br /><br />

  ならば──<br /><br />

  <span className="text-white text-[19px] tracking-[0.05em]">
    世界を、師にすればいい。
  </span>
  <br /><br />

  風。光。筋肉。水。<br /><br />

  本を閉じ、<br />
  世界を開いた。

</p>

{/* closing axis */}
<p className="mt-20 text-[10px] tracking-[0.36em] text-white/55">
  OBSERVE → STRUCTURE
</p>

  </div>
</section>
{/* ================= WORKSHOP (SP) ================= */}
<section className="ld-sec relative min-h-[100svh] flex items-center justify-center text-center px-[6vw] overflow-hidden">

  {/* BG IMAGE（少し明るく・blur弱め） */}
  <img
    src={IMG.workshop}
    className="ld-bg absolute inset-0 w-full h-full object-cover opacity-22 blur-[0.5px]"
    alt=""
  />

  {/* subtle grid（弱く） */}
  <div
    className="absolute inset-0 opacity-[0.02] pointer-events-none"
    style={{
      backgroundImage:
        "linear-gradient(rgba(212,175,55,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.18) 1px, transparent 1px)",
      backgroundSize: "120px 120px",
    }}
  />

  {/* vertical gradient（SP用に軽量化） */}
  <div className="absolute inset-0 z-10 
    bg-gradient-to-b from-black/80 via-black/62 to-black/88"
  />

  {/* radial focus（中央だけ守る） */}
  <div className="absolute inset-0 z-10 
    bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.45)_65%,rgba(0,0,0,0.65)_100%)]"
  />

  {/* frame */}
  <div className="absolute inset-[5vw] border border-white/10 z-20 pointer-events-none" />

  <div className="relative z-30 max-w-[92vw] ld-fade py-[22vh]">

    {/* title */}
    <h2 className="text-[clamp(28px,7.5vw,40px)] tracking-[0.18em] font-light leading-[1.25] text-[#f3f1ea]">
      絵が、入口だった
    </h2>

    <div className="my-10 w-[70px] h-px bg-[#d4af37]/45 mx-auto ld-line" />

    {/* 詩型SP版（リズム最適化） */}
    <p className="leading-[2.9] text-[15px] font-light text-[#e6dfd2]/96">
      14歳で工房に入る。<br />
      絵画。彫刻。建築。機械。<br />
      そこは、総合技術の実験場だった。<br /><br />

      本来は、絵を学ぶ場所。<br />
      だが彼は、描くだけでは止まらなかった。<br /><br />

      <span className="text-white text-[18px] tracking-[0.05em]">
        描くには、理解が必要だ。
      </span>
      <br /><br />

      馬を描くなら、筋肉を知る。<br />
      川を描くなら、水の流れを知る。<br />
      光を描くなら、光の仕組みを知る。<br /><br />

      絵は入口だった。<br />
      だが彼の欲望は、<br />
      世界の構造そのものへ向かった。
    </p>

    {/* closing */}
    <p className="mt-16 text-[10px] tracking-[0.32em] text-white/50">
      ART → STRUCTURE
    </p>

  </div>
</section>
{/* ================= NOTES (SP) ================= */}
<section className="ld-sec relative min-h-[100svh] flex items-center justify-center text-center px-[6vw] overflow-hidden">

{/* BG IMAGE（ドアップ回避 × 展示距離） */}
<img
  src={IMG.notes}
  className="
    ld-bg
    absolute inset-0
    w-full h-full
    object-cover
    object-[center_40%]
    opacity-20
    md:scale-[1.02]
  "
  alt=""
/>


  {/* vertical gradient（軽く） */}
  <div className="absolute inset-0 z-10 
    bg-gradient-to-b from-black/78 via-black/58 to-black/88"
  />

  {/* radial focus（中央だけ守る） */}
  <div className="absolute inset-0 z-10 
    bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.4)_65%,rgba(0,0,0,0.6)_100%)]"
  />

  {/* paper film（弱め） */}
  <div
    className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none z-20"
    style={{
      backgroundImage: "url('/images/leonardo/paper-texture.png')",
      backgroundSize: "cover",
    }}
  />

  {/* frame */}
  <div className="absolute inset-[5vw] border border-white/10 z-20 pointer-events-none" />

  <div className="relative z-30 max-w-[92vw] ld-fade py-[22vh]">

    {/* TITLE */}
    <h2 className="text-[clamp(28px,7.5vw,40px)] tracking-[0.2em] font-light leading-[1.25] text-[#f3f1ea]">
      観察しか、信じられなかった
    </h2>

    <div className="my-10 w-[70px] h-px bg-[#d4af37]/45 mx-auto ld-line" />

    {/* TEXT（SP最適化） */}
    <p className="leading-[2.95] text-[15px] font-light text-[#e6dfd2]/96">

      本で学べない。<br />
      権威に頼れない。<br /><br />

      ならば、<br />
      世界から学ぶしかない。<br /><br />

      彼のノートは日記ではない。<br />
      それは、<br />
      “現実を捕まえる装置”だった。<br /><br />

      図解する。測る。分解する。<br />
      逆さに書く。何度も描き直す。<br />
      疑い、確かめ、また疑う。<br /><br />

      <span className="text-white text-[18px] tracking-[0.05em]">
        経験こそが、唯一の教師。
      </span>
      <br /><br />

      彼は、観察でしか<br />
      世界を信じられなかった。
    </p>

    {/* closing axis */}
    <p className="mt-16 text-[10px] tracking-[0.32em] text-white/50">
      OBSERVE → VERIFY → TRUTH
    </p>

  </div>
</section>
{/* ================= ANATOMY (SP) ================= */}
<section className="ld-sec relative min-h-[100svh] flex items-center justify-center text-center px-[6vw] overflow-hidden">

  {/* BG IMAGE（少し見せる） */}
  <img
    src={IMG.anatomy}
    className="ld-bg absolute inset-0 w-full h-full object-cover opacity-22 blur-[0.6px]"
    alt=""
  />

  {/* vertical gradient（軽量化） */}
  <div className="absolute inset-0 z-10 
    bg-gradient-to-b from-black/80 via-black/65 to-black/90"
  />

  {/* radial focus（中央保護） */}
  <div className="absolute inset-0 z-10 
    bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.55)_65%,rgba(0,0,0,0.75)_100%)]"
  />

  {/* subtle top line */}
  <div className="absolute top-[8vh] left-1/2 -translate-x-1/2 w-[82vw] h-px bg-[#d4af37]/18 z-20" />

  {/* thin frame */}
  <div className="absolute inset-[5vw] border border-white/10 z-20 pointer-events-none" />

  <div className="relative z-30 max-w-[92vw] ld-fade py-[22vh]">

   {/* TITLE */}
<h2 className="text-[clamp(28px,7.5vw,40px)] tracking-[0.22em] font-light leading-[1.25] text-[#f3f1ea]">
  夜の解剖
</h2>

<div className="my-10 w-[70px] h-px bg-[#d4af37]/45 mx-auto ld-line" />

{/* TEXT */}
<p className="leading-[3.05] text-[16px] font-light text-[#e6dfd2]/95">

  彼は夜、死体を解剖した。<br />
  当時、それは禁忌だった。<br /><br />

  誰も見ない時間。<br />
  誰も触れない領域。<br /><br />

  だが彼は、踏み込んだ。<br /><br />

  なぜなら――<br /><br />

  <span className="text-white text-[18px] tracking-[0.05em]">
    仕組みを知らずに、描くことはできない。
  </span>
  <br /><br />

  骨。筋肉。神経。血流。<br />
  すべてを分解し、構造を掴む。<br /><br />

  美は感情ではなかった。<br />
  正確な理解の、その先にあった。<br /><br />

  解体しなければ、<br />
  本当の“生”は立ち上がらない。

</p>

{/* closing axis */}
<p className="mt-20 text-[10px] tracking-[0.36em] text-white/55">
  DISSECT → UNDERSTAND → CREATE
</p>

  </div>
</section>
{/* ================= MONA LISA (SP) ================= */}
<section className="ld-sec relative min-h-[100svh] flex items-center justify-center text-center px-[6vw] overflow-hidden">

  {/* BG IMAGE（ドアップ回避 × 展示的距離） */}
<img
  src={IMG.mona}
  className="
    ld-bg
    absolute inset-0
    w-full h-full
    object-cover
    object-[center_42%]
    opacity-22
    md:scale-[1.02]
  "
  alt=""
/>


  {/* vertical gradient（軽く引き締め） */}
  <div className="absolute inset-0 z-10 
    bg-gradient-to-b from-black/68 via-black/50 to-black/82"
  />

  {/* radial focus（文字保護・弱） */}
  <div
    className="absolute inset-0 z-10 pointer-events-none"
    style={{
      background:
        "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.42) 65%, rgba(0,0,0,0.65) 100%)",
    }}
  />

  {/* golden aura（空気レベルに抑える） */}
  <div
    className="absolute inset-0 opacity-[0.08] pointer-events-none"
    style={{
      background:
        "radial-gradient(circle at 50% 44%, rgba(212,175,55,0.28) 0%, transparent 65%)",
    }}
  />

  {/* frame */}
  <div className="absolute inset-[5vw] border border-white/10 z-20 pointer-events-none" />

  {/* CONTENT */}
  <div className="relative z-30 max-w-[92vw] ld-fade py-[24vh]">

    {/* TITLE */}
    <h2 className="text-[clamp(30px,8vw,42px)] tracking-[0.24em] font-light leading-[1.22] text-[#f4f1ea]">
      モナ・リザ
    </h2>

    <div className="my-12 w-[80px] h-px bg-[#d4af37]/45 mx-auto ld-line" />

{/* TITLE */}
<h2 className="text-[clamp(30px,8vw,42px)] tracking-[0.24em] font-light leading-[1.22] text-[#f4f1ea]">
  モナ・リザ
</h2>

<div className="my-12 w-[80px] h-px bg-[#d4af37]/45 mx-auto ld-line" />

{/* TEXT */}
<p className="leading-[3.15] text-[16px] font-light text-[#e6dfd2]/95">

  彼女は、笑っているのか。<br />
  それとも、笑っていないのか。<br /><br />

  その境界を、<br />
  彼は消した。<br /><br />

  輪郭をぼかす。<br />
  光と影を溶かす。<br />
  表情を固定しない。<br /><br />

  それは偶然ではない。<br />
  スフマートという、計算された曖昧さ。<br /><br />

  一枚の肖像を、何年も手放さない。<br />
  依頼主に渡さず、描き続ける。<br />
  また疑い、また塗り重ねる。<br /><br />

  完成しないのではない。<br /><br />

  <span className="text-white text-[18px] tracking-[0.05em]">
    人間を、まだ解き明かせていない。
  </span>
  <br /><br />

  曖昧さを、曖昧なまま残す。<br />
  それは感情ではない。<br /><br />

  構造だった。

</p>

{/* closing axis */}
<p className="mt-20 text-[10px] tracking-[0.36em] text-white/55">
  BLUR → AMBIGUITY → CONTROL
</p>

  </div>
</section>

{/* ================= LAST SUPPER (SP PEAK) ================= */}
<section className="ld-sec ld-peak relative min-h-[100svh] flex items-center justify-center text-center px-[6vw] overflow-hidden">

  {/* BG IMAGE（SPは少し抑制） */}
  <img
    src={IMG.supper}
    className="ld-bg absolute inset-0 w-full h-full object-cover opacity-24"
    alt=""
  />

  {/* vertical control（重厚だけど軽量化） */}
  <div className="absolute inset-0 z-10 
    bg-gradient-to-b from-black/78 via-black/58 to-black/90"
  />

  {/* peak radial（中心強調：やや強め） */}
  <div
    className="absolute inset-0 opacity-[0.18] pointer-events-none"
    style={{
      background:
        "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.52) 0%, transparent 60%)",
    }}
  />

  {/* subtle center dark protection */}
  <div
    className="absolute inset-0 z-10 pointer-events-none"
    style={{
      background:
        "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.7) 100%)",
    }}
  />

  {/* frame（SP内側） */}
  <div className="absolute inset-[5vw] border border-white/10 z-20 pointer-events-none" />

  <div className="relative z-30 max-w-[92vw] ld-fade py-[24vh]">

    {/* PEAK TAG */}
    <p className="text-[10px] tracking-[0.48em] text-[#d4af37]/75 font-light mb-5">
      PEAK / SPACE CONTROL
    </p>

    {/* TITLE（SP最適化） */}
    <h2 className="text-[clamp(30px,8vw,44px)] tracking-[0.26em] font-light leading-[1.15] text-[#f4f1ea]">
      最後の晩餐
    </h2>

    <div className="my-12 w-[90px] h-px bg-[#d4af37]/65 mx-auto ld-line" />

    {/* TEXT（呼吸を詰める） */}
    <p className="leading-[3.05] text-[16px] font-light text-[#e6dfd2]/97">

      混乱の中に、秩序がある。<br /><br />

      感情は波打つ。<br />
      だが構造は揺れない。<br /><br />

      すべての線は、中心へ。<br />
      すべての視線は、中心へ。<br /><br />

      彼は物語を描いたのではない。<br /><br />

      <span className="text-white text-[19px] tracking-[0.06em]">
        空間そのもの
      </span>
      を設計した。<br /><br />

      完璧に見える構造。<br />
      だが彼は、また実験した。<br />
      技法は剥がれ、壁画は崩れていく。<br /><br />

      構造を極めても、現実は容赦しない。<br />
      それでも彼は、構造を選んだ。
    </p>

    {/* axis close */}
    <p className="mt-16 text-[10px] tracking-[0.34em] text-white/55">
      CHAOS → CENTER → STRUCTURE
    </p>

  </div>
</section>
{/* ================= INTEGRATION / FATE (SP) ================= */}
<section className="ld-sec relative min-h-[100svh] flex items-center justify-center text-center px-[6vw] overflow-hidden">

  {/* BG IMAGE（SPは少しだけ明るめに） */}
  <img
    src={IMG.geometry}
    className="ld-bg absolute inset-0 w-full h-full object-cover opacity-18 blur-[0.4px]"
    alt=""
  />

  {/* vertical control（軽くする） */}
  <div className="absolute inset-0 z-10 
    bg-gradient-to-b from-black/78 via-black/60 to-black/88"
  />

  {/* soft center darkening */}
  <div className="absolute inset-0 z-10 pointer-events-none"
    style={{
      background:
        "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.6) 100%)",
    }}
  />

  {/* frame（SPは内側） */}
  <div className="absolute inset-[5vw] border border-white/10 z-20 pointer-events-none" />

  <div className="relative z-30 max-w-[92vw] ld-fade py-[24vh]">

<h2 className="text-[clamp(30px,8vw,46px)] tracking-[0.3em] font-light leading-[1.15] text-[#f4f1ea]">
  未完成という運命
</h2>

<div className="my-14 w-[100px] h-px bg-[#d4af37]/45 mx-auto ld-line" />

<p className="leading-[3.2] text-[16px] font-light text-[#e6dfd2]/97">

  絵画。解剖学。工学。幾何学。<br />
  彼にとって、それらは分野ではなかった。<br /><br />

  世界は一つの構造体。<br />
  分解し、理解し、再接続する。<br />
  それが創造だった。<br /><br />

  だが理解は終わらない。<br />
  “なぜ？”は尽きない。<br /><br />

  完成へ近づくほど、<br />
  未知は広がっていく。<br /><br />

  だから彼の人生は、<br />
  <span className="text-white text-[20px] tracking-[0.06em]">
    未完成のまま
  </span>
  残った。<br /><br />

  彼のノートには、<br />
  まだ存在しない機械の設計図が描かれていた。<br />
  実現するのは、数百年後だった。<br /><br />

  未来が追いつくことを、<br />
  彼は疑わなかった。<br /><br />

  いや――<br /><br />

  <span className="text-white text-[18px] tracking-[0.05em]">
    追いつくまで、問いは残る。
  </span>

</p>

<div className="mt-20">
  <p className="text-[10px] tracking-[0.4em] text-white/60">
    THE HUMAN WHO COULDN'T STOP ASKING WHY
  </p>
</div>

  </div>
</section>
{/* ================= FINAL FADE (SP) ================= */}
<div className="relative h-[22vh] overflow-hidden">

  {/* soft upward fade */}
  <div className="absolute inset-0 bg-gradient-to-b 
    from-transparent 
    via-black/60 
    to-black"
  />

  {/* subtle gold breath */}
  <div
    className="absolute inset-0 opacity-[0.06] pointer-events-none"
    style={{
      background:
        "radial-gradient(circle at 50% 10%, rgba(212,175,55,0.35) 0%, transparent 60%)",
    }}
  />

  {/* silence line */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-px bg-white/10" />

</div>

    </div>
  );
}
