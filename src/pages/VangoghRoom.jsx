import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./vangogh.css";

gsap.registerPlugin(ScrollTrigger);

export default function VangoghRoom() {
  const containerRef = useRef(null);
  const swirlRef = useRef(null);
useEffect(() => {
  const ctx = gsap.context(() => {

    const sections = gsap.utils.toArray(".vg-section");

    sections.forEach((sec) => {
      const target = sec.querySelector(".fade-up");
      const bg = sec.querySelector(".vg-bg");

      /* =============================
         🎬 テキストフェード（静か）
      ============================= */
      if (target) {
        gsap.set(target, { opacity: 0, y: 32 });

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

      /* =============================
         🎥 背景パララックス（静か版）
      ============================= */
      if (bg) {
        gsap.to(bg, {
          y: -60,               // ★ -160 → -60（侵食防止）
          scale: 1.04,          // ★ 1.1 → 1.04（高級感を壊さず減速）
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.7,         // ★ 1.6 → 0.7（動きを半分以下に）
          },
        });
      }

      /* =============================
         🌗 明暗呼吸（揺れ最小）
      ============================= */
      gsap.fromTo(
        sec,
        { opacity: 0.97 },       // ★ 0.94 → 0.97（揺れをほぼ感じない）
        {
          opacity: 1,
          scrollTrigger: {
            trigger: sec,
            start: "top center",
            end: "bottom center",
            scrub: 0.5,         // ★ 全体の揺れを最小に
          },
        }
      );
    });

    /* =============================
       🌌 星月夜 渦生命（安定化）
    ============================= */
    if (swirlRef.current) {

      // 初期状態
      gsap.set(swirlRef.current, { opacity: 0.22, scale: 0.9 });

      // 超低速回転（そのまま）
      gsap.to(swirlRef.current, {
        rotate: 360,
        duration: 260,
        repeat: -1,
        ease: "none",
      });

      // 横呼吸（世界観維持）
      gsap.to(swirlRef.current, {
        scaleX: 1.18,          // ★ 1.3 → 1.18（侵食防止）
        duration: 120,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // スクロール連動（最小限）
      gsap.to(swirlRef.current, {
        opacity: 0.42,         // ★ 0.55 → 0.42（眩しさを抑制）
        scale: 1.08,           // ★ 1.18 → 1.08（侵食ゼロへ）
        scrollTrigger: {
          trigger: ".star-section",
          start: "top center",
          end: "bottom center",
          scrub: 0.6,          // ★ 動きを滑らかに抑制
        },
      });
    }

  }, containerRef);

  return () => ctx.revert();
}, []);


  return (
    <div
      ref={containerRef}
      className="vangogh-room relative w-full bg-[#0f1016] text-white overflow-hidden"
    >
{/* ================= HERO ================= */}
<section
  className="
    vg-section
    relative
    min-h-[140vh]         /* ★ 広げる：入口の“巨大さ”を出す */
    flex
    items-center
    justify-center
    text-center
    px-6
    pt-[20vh]            /* ★ 上余白も少し増量 */
    pb-[18vh]
    overflow-hidden
  "
>

  {/* Background */}
  <img
    src="/images/vg-selfportrait.png"
    className="
      vg-bg
      absolute inset-0
      w-full h-full
      object-cover
      object-[50%_25%]
      opacity-30
    "
    alt="Vincent van Gogh self portrait"
  />

  {/* Vignette */}
  <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/78 via-black/55 to-black/92" />

  <div className="relative z-30 max-w-[880px] fade-up">

    {/* CHAPTER */}
    <p className="text-[10px] tracking-[0.65em] text-white/40 font-light mb-3">
      ORIGIN 第一章
    </p>

    {/* ★ 色彩の狂人（強化） */}
    <p
      className="
        text-[13px]              /* ★ 11px → 13px */
        tracking-[0.45em]        /* ★ 少し狭くして読みやすく */
        font-light
        mb-8
      "
      style={{
        color: "rgba(255,218,110,0.85)",  /* ★ ゴッホの黄金 */
        textShadow: "0 0 12px rgba(255,218,110,0.35)" /* ★ 軽く光らせる */
      }}
    >
      色彩の狂人
    </p>

    {/* MAIN NAME */}
    <h1
      className="
        text-[clamp(48px,7vw,96px)]
        tracking-[0.16em]
        font-light
        leading-[1.05]
      "
    >
      Van&nbsp;Gogh
    </h1>

    {/* JAPANESE */}
    <p
      className="
        mt-4
        text-[11px]
        tracking-[0.6em]
        text-white/35
        font-light
      "
    >
      ヴィンセント・ヴァン・ゴッホ
    </p>

    {/* Divider */}
    <div className="mt-12 mb-10 w-[64px] h-px bg-white/20 mx-auto" />

    {/* Body */}
    <p
      className="
        leading-[2.1]
        text-white/88
        text-[16px]
        md:text-[19px]
        font-light
      "
    >

      彼は、何度も道を外れた。<br />
      画商。聖職志願者。教師。<br />
      どこにも、居場所はなかった。<br /><br />

      絵を描き始めたのは27歳。<br />
      遅すぎると言われた出発。<br /><br />

      <span className="text-white text-[18px] md:text-[21px] tracking-[0.04em]">
        色は、内側で暴れていた。
      </span><br /><br />

      世界をそのままでは、受け取れなかった。<br />
      光も、空も、麦畑も、<br />
      彼の中で別の強度に変わっていった。<br /><br />

      描かなければ、壊れてしまう。<br />
      それが衝動だった。

    </p>

  </div>
</section>





{/* 文章のみ強化済み（構造そのまま） */}
{/* 幼少期 */}
<section className="vg-section relative min-h-screen flex items-center justify-center text-center px-8">

  <img
    src="/images/vg-fields.png"
    className="vg-bg absolute inset-0 w-full h-full object-cover object-[50%_60%] opacity-38"
    alt=""
  />

  <div className="vg-vignette absolute inset-0 z-10" />

  <div className="relative z-30 max-w-[720px] fade-up">

    <h2 className="text-[38px] tracking-[0.24em] font-light">
      幼少期
    </h2>

    <p className="mt-4 text-[12px] tracking-[0.45em] text-white/50 font-light">
      1853 — 1869
    </p>

    <div className="mt-12 mb-16 w-[72px] h-px bg-white/20 mx-auto" />

    <p className="leading-[3.0] text-white/88 text-[17px] md:text-[19px] font-light">

      1853年、オランダの小さな村に生まれる。<br /><br />

      その一年前、同じ名を持つ兄は、<br />
      生まれることなく墓に入った。<br /><br />

      誕生日のたび、<br />
      もうひとつの“ヴィンセント”の名を見ることになる。<br /><br />

      世界は進歩していた。<br />
      鉄道が走り、都市が膨らむ。<br /><br />

      だが彼は、<br />
      風と土と、雲の色を見ていた。

    </p>

  </div>
</section>

{/* ================= 炭鉱地帯 ================= */}
<section className="vg-section relative min-h-screen flex items-center justify-center text-center px-8 overflow-hidden">

  <img
    src="/images/vg-borinage.png"
    className="vg-bg absolute inset-0 w-full h-full object-cover object-[50%_60%] opacity-38 brightness-[0.9]"
    alt=""
  />

  <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/75 via-black/60 to-black/85" />

  <div className="relative z-30 max-w-[720px] fade-up">

    <h2 className="text-[38px] tracking-[0.24em] font-light text-white/92">
      炭鉱地帯
    </h2>

    <p className="mt-4 text-[12px] tracking-[0.45em] text-white/50 font-light">
      1879　BORINAGE
    </p>

    <div className="mt-10 mb-14 w-[64px] h-px bg-white/20 mx-auto" />

    <p className="leading-[2.9] text-white/88 text-[16px] md:text-[18px] font-light">

      画商を辞め、聖職を志した。<br />
      教会の訓練校にも入る。<br /><br />

      だが、どこにも長くはいられなかった。<br />
      理想が強すぎた。<br />
      世界と噛み合わなかった。<br /><br />

      彼はベルギー南部、ボリナージュへ向かう。<br />
      地下深く、光の届かない炭鉱地帯。<br /><br />

      労働者と同じ部屋に住み、<br />
      持ち物を分け与え、共に暮らした。<br /><br />

      だが教会はそれを<br />
      「過度な献身」と判断する。<br /><br />

      任務は解かれた。<br />
      また、職を失う。<br /><br />

      何度目かの挫折。<br /><br />

      しかし――<br /><br />

      <span className="text-white text-[18px] tracking-[0.04em]">
        信仰は、かたちを変えた。
      </span><br /><br />

      人を救うのではない。<br />
      世界を描く。<br /><br />

      ここから、絵が始まる。

    </p>

  </div>
</section>


{/* ================= アルル ================= */}
<section className="vg-section relative min-h-screen flex items-center justify-center text-center px-8 overflow-hidden">

  {/* 背景 */}
  <img
    src="/images/vg-arles.png"
    className="vg-bg absolute inset-0 w-full h-full object-cover object-[50%_55%] opacity-52 brightness-[1.05] contrast-[1.1] z-0"
    alt=""
  />

  {/* 暖色ビネット */}
  <div
    className="absolute inset-0 z-10"
    style={{
      background: `
        radial-gradient(circle at 50% 45%, rgba(255,200,70,0.18) 0%, transparent 55%),
        linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.7))
      `
    }}
  />

  {/* 内容 */}
  <div className="relative z-30 max-w-[740px] fade-up text-center">

    <h2 className="text-[38px] tracking-[0.26em] font-light">
      アルル
    </h2>

    <h3 className="mt-4 text-[12px] md:text-[13px] tracking-[0.48em] text-yellow-200/75 font-light">
      1888年　南フランス
    </h3>

    <div className="mt-10 mb-14 w-[70px] h-px bg-yellow-200/30 mx-auto" />

    <p className="leading-[3.0] text-white/92 text-[16px] md:text-[19px] font-light">

      1888年、南フランス・アルルへ移り住む。<br /><br />

      光は鋭く、影は短く、<br />
      空は深い群青に沈んでいた。<br /><br />

      北の灰色とは、まるで違う世界。<br />
      ここで彼は、生き直そうとする。<br /><br />

      「黄色の家」を借り、<br />
      芸術家たちの共同体を夢見る。<br /><br />

      同年、ポール・ゴーギャンが到着。<br />
      理想は、現実へ近づいた。<br /><br />

      この一年で制作された作品は二百点以上。<br />
      ひまわりは燃え、<br />
      壁は太陽の色に塗られ、<br />
      夜空は渦を巻いた。<br /><br />

      <span className="text-white text-[18px] md:text-[21px] tracking-[0.04em]">
        絵は、風景ではなかった。
      </span><br /><br />

      内側の熱そのものだった。<br />
      世界を描くというより、<br />
      世界を再構築していた。

    </p>

  </div>

</section>


{/* ================= 耳事件 ================= */}
<section className="vg-section relative min-h-screen flex items-center justify-center text-center px-6 md:px-8 py-24 md:py-32">

  {/* 背景 */}
  <img
    src="/images/vg-ear.png"
    className="vg-bg absolute inset-0 w-full h-full object-cover object-[50%_55%] opacity-40 brightness-[0.75] contrast-[1.08] z-0"
    alt=""
  />

  {/* 暗幕（強化） */}
  <div className="vg-vignette absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

  {/* コンテンツ */}
  <div className="relative z-30 max-w-[760px] mx-auto fade-up">

    {/* Title */}
    <h2 className="text-[clamp(32px,3.6vw,44px)] tracking-[0.26em] font-light text-white/95">
      耳事件
    </h2>

    {/* Sub */}
    <p className="mt-6 text-[12px] md:text-[13px] tracking-[0.45em] text-white/55 font-light">
      1888年12月 — アルル
    </p>

    {/* Divider */}
    <div className="mt-12 mb-16 w-[72px] h-px bg-white/20 mx-auto" />

    {/* Body */}
  <p className="leading-[2.9] text-white/88 text-[17px] md:text-[19px] font-light px-2 md:px-0">

  アルルの冬は、光よりも鋭かった。<br /><br />

  黄色の家には、もう一人の画家がいた。<br />
  ポール・ゴーギャン。<br /><br />

  彼は信じていた。<br />
  対話の中から、芸術は生まれると。<br /><br />

  だが、理想は摩耗する。<br />
  言葉は刃になり、沈黙は壁になる。<br /><br />

  共同体の夢は、静かに崩れた。<br /><br />

  1888年12月23日、夜。<br />
  張りつめた空気の中で、<br />
  彼は自らの左耳の一部を切り落とす。<br /><br />

  理由は、いまも確定しない。<br />
  発作だったのか。<br />
  絶望だったのか。<br />
  それとも、崩壊を止めるための、<br />
  最後の衝動だったのか。<br /><br />

  血は流れた。<br />
  夢もまた、流れた。<br /><br />

  だが――<br /><br />

  <span className="text-white text-[18px] md:text-[21px] tracking-[0.04em]">
    色だけは、止まらなかった。
  </span><br /><br />

  数週間後、彼は再び筆を握る。<br />
  光は、まだ彼の内部で燃えていた。

</p>

  </div>
</section>
{/* ================= 精神病院 ================= */}
<section className="vg-section relative min-h-screen flex items-center justify-center text-center px-6 md:px-8 py-28 md:py-36">

  {/* 背景 */}
  <img
    src="/images/vg-asylum.png"
    className="vg-bg absolute inset-0 w-full h-full object-cover object-[50%_50%] opacity-38 brightness-[0.7] contrast-[1.05] z-0"
    alt=""
  />

  {/* 冷たい青の暗幕 */}
  <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0b1220]/85 via-black/70 to-black/90" />

  {/* コンテンツ */}
  <div className="relative z-30 max-w-[780px] mx-auto fade-up">

    {/* Title */}
    <h2 className="text-[clamp(32px,3.6vw,44px)] tracking-[0.28em] font-light text-white/95">
      精神病院
    </h2>

    {/* Sub */}
    <p className="mt-6 text-[12px] md:text-[13px] tracking-[0.45em] text-white/55 font-light">
      1889年 — サン＝レミ
    </p>

    {/* Divider */}
    <div className="mt-12 mb-16 w-[70px] h-px bg-white/15 mx-auto" />

   <p className="leading-[3.0] text-white/88 text-[17px] md:text-[19px] font-light px-2 md:px-0">

  彼は自ら、療養施設の門をくぐった。<br /><br />

  南フランス、サン＝レミ。<br />
  石の壁に囲まれた、静かな場所。<br /><br />

  世界は、突然ほどける。<br />
  視界は歪み、音は遠ざかる。<br />
  発作は、理由なく訪れた。<br /><br />

  意識は裂け、<br />
  現実は揺れた。<br /><br />

  だが――<br /><br />

  窓の外には、空があった。<br />
  糸杉が風に揺れ、<br />
  月は滲み、<br />
  夜は深く、青く燃えていた。<br /><br />

  世界は壊れていない。<br />
  ただ、形を変えているだけだ。<br /><br />

  彼は描いた。<br />
  閉ざされた場所で、<br />
  震える世界を、そのまま。<br /><br />

  <span className="text-white text-[18px] md:text-[21px] tracking-[0.04em]">
    狂気ではない。観測だった。
  </span>

</p>

  </div>
</section>

{/* ================= 星月夜 ================= */}
<section className="vg-section star-section relative min-h-screen flex items-center justify-center text-center px-8 overflow-hidden">

<img
src="/images/vg-starrynight1.png"
className="vg-bg absolute inset-0 w-full h-full object-cover object-[50%_45%] opacity-50"
alt=""
/>

<div className="vg-vignette absolute inset-0 z-10 bg-gradient-to-b from-black/65 via-black/40 to-black/80" />

<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
<div
ref={swirlRef}
className="w-[75vw] max-w-[1000px] aspect-square rounded-full"
style={{
background:
"conic-gradient(from 0deg, rgba(60,90,180,0.8), rgba(255,210,80,0.65), rgba(60,90,180,0.8))",
filter: "blur(90px)",
opacity: 0.22,
}}
/>
</div>

<div className="relative z-30 max-w-[760px] fade-up py-28">

<h2 className="text-[clamp(34px,3.8vw,48px)] tracking-[0.26em] font-light">
星月夜
</h2>

<div className="mt-12 mb-16 w-[72px] h-px bg-white/15 mx-auto" />

<p className="leading-[3.2] text-white/92 text-[18px] md:text-[21px] font-light">

  夜は、黒ではなかった。<br /><br />

  青はうねり、<br />
  星は裂け、<br />
  空は渦を巻いた。<br /><br />

  静かな窓辺から見た景色。<br />
  だが――<br /><br />

  それは、彼の内部だった。<br /><br />

  抑えきれない震え。<br />
  押し寄せる感情。<br />
  崩れかけた精神の奥で、<br />
  宇宙は形を持った。<br /><br />

  絵具は叫び、<br />
  筆は止まらなかった。<br /><br />

  <span className="text-white text-[19px] md:text-[23px] tracking-[0.04em]">
    これは風景ではない。
    感情の爆発だ。
  </span><br /><br />

  それでも構図は崩れない。<br />
  教会は静かに立ち、<br />
  糸杉は天へ伸びる。<br /><br />

  混沌の中に、秩序がある。<br /><br />

  それが――<br />
  後世に残る、神話になった。

</p>


</div>
</section>

{/* ================= 最期 ================= */}
<section className="vg-section relative min-h-screen flex items-center justify-center text-center px-8 overflow-hidden">

  <img
    src="/images/vg-last.png"
    className="vg-bg absolute inset-0 w-full h-full object-cover object-[50%_50%] opacity-40"
    alt="Wheatfield with Crows"
  />

  <div className="vg-vignette absolute inset-0 z-10 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />

  <div className="relative z-30 max-w-[780px] fade-up py-28">

    <h2 className="text-[clamp(36px,3.8vw,52px)] tracking-[0.26em] font-light">
      最期
    </h2>

    <div className="mt-14 mb-16 w-[72px] h-px bg-white/20 mx-auto" />

  <p className="leading-[3.0] text-white/92 text-[19px] md:text-[23px] font-light">

  1890年7月27日。<br /><br />

  フランス、オーヴェル＝シュル＝オワーズ。<br />
  麦畑の中で銃声が響く。<br /><br />

  自ら腹部を撃ったとされる。<br />
  弾丸は、心臓を外れた。<br /><br />

  二日後――<br />
  弟テオに見守られながら、息を引き取る。<br /><br />

  37歳。<br /><br />

  生前に売れた絵は、ほとんどなかった。<br />
  評価も、名声も、なかった。<br /><br />

  だが――<br /><br />

  <span className="text-white text-[20px] md:text-[24px] tracking-[0.05em]">
    色は、死ななかった。
  </span><br /><br />

  青は、時間を越えた。<br />
  黄は、世界を照らし続けた。<br /><br />

  彼が見ていた強度に、<br />
  世界が追いつくまで、<br />
  少し時間がかかっただけだった。<br /><br />

  彼の絵は、いまも揺れている。<br />
  そして、<br />
  私たちの内側も、揺らしている。

</p>


  </div>
</section>

{/* ================= テオ ================= */}
<section className="vg-section relative min-h-screen flex items-center justify-center text-center px-8">

<img
src="/images/vg-theo.png"
className="vg-bg absolute inset-0 w-full h-full object-cover object-[50%_45%] opacity-38"
alt=""
/>

<div className="vg-vignette absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/85" />

<div className="relative z-30 max-w-[760px] fade-up py-28">

<h2 className="text-[clamp(34px,3.8vw,48px)] tracking-[0.26em] font-light">
テオ
</h2>

<div className="mt-12 mb-16 w-[72px] h-px bg-white/15 mx-auto" />

<p className="leading-[3.1] text-white/90 text-[18px] md:text-[21px] font-light">

  兄を信じ続けた、ただ一人の存在。<br /><br />

  経済的にも、精神的にも、<br />
  炎が消えないよう支え続けた。<br /><br />

  だがテオは、<br />
  支援者である前に――<br />
  兄の“受信者”だった。<br /><br />

  ゴッホは、生涯で800通以上の手紙を残している。<br />
  その多くが、テオ宛だった。<br /><br />

  色の理論。<br />
  構図の迷い。<br />
  生活の苦しさ。<br />
  発作への恐怖。<br /><br />

  それらは絵だけではなく、<br />
  言葉としても残された。<br /><br />

  1890年、兄の死後。<br />
  テオは母へこう書いている。<br /><br />

  <span className="italic text-white/95">
    “He put his life at the service of his art.”<br />
  </span>
  <span className="text-white/70 text-[16px] md:text-[18px]">
    （彼は、自分の芸術のために命を捧げたのだと思います。）
  </span>
  <br /><br />

  兄の死から半年後、<br />
  テオもまたこの世を去る。<br /><br />

  だが、手紙は消えなかった。<br /><br />

  <span className="text-white text-[20px] md:text-[24px] tracking-[0.05em]">
    ゴッホが“何を見ていたのか”は、
    テオが残した。
  </span><br /><br />

  いま、二人は同じ墓に眠る。<br /><br />

  色は、ひとりでは守れなかった。<br />
  それは、二人の仕事だった。

</p>


</div>
</section>

    </div>
  );
}
