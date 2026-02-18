import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./vangogh-sp.css";

gsap.registerPlugin(ScrollTrigger);

export default function VangoghRoomSP() {
  const containerRef = useRef(null);
  const swirlRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".vg-section");

      sections.forEach((sec) => {
        const target = sec.querySelector(".fade-up");
        const bg = sec.querySelector(".vg-bg");

        /* =============================
           🎬 テキストフェード（blur無し・静か）SP最適化
        ============================= */
        if (target) {
          gsap.set(target, { opacity: 0, y: 24 });

          gsap.to(target, {
            opacity: 1,
            y: 0,
            duration: 1.35,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 88%",
              once: true,
            },
          });
        }

        /* =============================
           🎥 背景パララックス（SPは軽め）
        ============================= */
        if (bg) {
          gsap.to(bg, {
            y: -40,
            scale: 1.05,
            ease: "none",
            scrollTrigger: {
              trigger: sec,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        }

        /* =============================
           🌗 明暗呼吸（GPU軽量版）
        ============================= */
        gsap.fromTo(
          sec,
          { opacity: 0.96 },
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
      });

      /* =============================
         🌌 星月夜 渦生命化（SP軽量）
      ============================= */
      if (swirlRef.current) {
        gsap.set(swirlRef.current, { opacity: 0.2, scale: 0.9 });

        gsap.to(swirlRef.current, {
          rotate: 360,
          duration: 400,
          repeat: -1,
          ease: "none",
        });

        gsap.to(swirlRef.current, {
          opacity: 0.5,
          scale: 1.08,
          scrollTrigger: {
            trigger: ".star-section",
            start: "top center",
            end: "bottom center",
            scrub: 1,
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
    min-h-[105svh]
    flex
    items-start
    justify-center
    text-center
    px-6
    pt-[18vh]
    pb-[14vh]
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
      object-[50%_22%]
      opacity-42
    "
    alt=""
  />

  {/* Vignette */}
  <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/45 to-black/90" />

  <div className="relative z-30 max-w-[92vw] fade-up">

    {/* CHAPTER */}
    <p className="
      text-[10px]
      tracking-[0.65em]
      text-white/45
      font-light
      mb-3
    ">
      ORIGIN 第一章
    </p>

    {/* THEME */}
    <p className="
      text-[11px]
      tracking-[0.55em]
      text-white/65
      font-light
      mb-5
    ">
      色彩の狂人。
    </p>

    {/* MAIN NAME */}
    <h1 className="
      text-[38px]
      tracking-[0.2em]
      font-light
      leading-[1.08]
    ">
      Van&nbsp;Gogh
    </h1>

    {/* JAPANESE */}
    <h2 className="
      mt-4
      text-[11px]
      tracking-[0.5em]
      text-white/50
      font-light
    ">
      ヴィンセント・ヴァン・ゴッホ
    </h2>

    {/* DIVIDER */}
    <div className="mt-8 mb-10 w-[56px] h-px bg-white/20 mx-auto" />

<p className="leading-[2.2] text-white/90 text-[15px] font-light">

  画家になる前、<br />
  彼は画商であり、聖職志願者であり、<br />
  何度も道を変えた人間だった。<br /><br />

  絵を描き始めたのは27歳。<br />
  遅すぎると言われた出発。<br /><br />

  だが――<br /><br />

  色は、すでに燃えていた。<br />
  名を持たぬ衝動が、<br />
  彼の内側で膨らんでいた。

</p>

  </div>
</section>



      {/* ================= 以降のセクション ================= */}
      {/* 文章のみ強化済み（構造そのまま） */}

      {/* 幼少期 */}
      <section className="vg-section relative min-h-[100svh] flex items-center justify-center text-center px-6">
        <img
          src="/images/vg-fields.png"
          className="vg-bg absolute inset-0 w-full h-full object-cover object-[50%_60%] opacity-42"
          alt=""
        />

        <div className="vg-vignette absolute inset-0 z-10" />

        <div className="relative z-30 max-w-[92vw] fade-up">
          <h2 className="text-[28px] tracking-[0.22em] font-light">幼少期</h2>

          <p className="mt-3 text-[11px] tracking-[0.40em] text-white/50 font-light">
            1853 — 1869
          </p>

          <div className="mt-9 mb-12 w-[60px] h-px bg-white/20 mx-auto" />
<p className="leading-[2.65] text-white/88 text-[15px] font-light">

  1853年、オランダに生まれる。<br /><br />

  その一年前、<br />
  同じ名の兄は死産していた。<br /><br />

  誕生日は、<br />
  墓石と並んでいた。<br /><br />

  世界は加速していた。<br />
  鉄道、都市、産業。<br /><br />

  だが彼は、<br />
  森と雲を見ていた。<br /><br />

  世界よりも、<br />
  震えを選んでいた。

</p>

        </div>
      </section>

      {/* ================= 炭鉱地帯 ================= */}
      <section className="vg-section relative min-h-[100svh] flex items-center justify-center text-center px-6">
        <img
          src="/images/vg-borinage.png"
          className="vg-bg absolute inset-0 w-full h-full object-cover object-[50%_60%] opacity-42 brightness-[0.88] z-0"
          alt=""
        />

        <div className="vg-vignette absolute inset-0 z-10" />

        <div className="relative z-30 max-w-[92vw] fade-up">
          <h2 className="text-[28px] tracking-[0.22em] font-light text-white/92">
            炭鉱地帯
          </h2>

          <div className="mt-5 mb-5 w-[56px] h-px bg-white/20 mx-auto" />

          <p className="text-[11px] tracking-[0.40em] text-white/50 font-light">
            1879　BORINAGE
          </p>

   <p className="mt-10 leading-[2.65] text-white/88 text-[15px] font-light">

  理想が強すぎた。<br />
  世界と噛み合わなかった。<br /><br />

  1879年、ボリナージュ。<br />
  地下深く、光の届かない炭鉱地帯。<br /><br />

  彼は労働者と共に暮らし、<br />
  すべてを分け与えた。<br /><br />

  教会はそれを「過度」と判断する。<br /><br />

  また失職。<br />
  また挫折。<br /><br />

  だが――<br /><br />

  信仰は、形を変えた。<br /><br />

  人を救うのではない。<br />
  世界を描く。<br /><br />

  ここから、絵が始まる。

</p>

        </div>
      </section>

      {/* ================= アルル ================= */}
      <section className="vg-section relative min-h-[100svh] flex items-center justify-center text-center px-6 overflow-hidden">
        <img
          src="/images/vg-arles.png"
          className="vg-bg absolute inset-0 w-full h-full object-cover object-[50%_55%] opacity-50 brightness-[1.02] contrast-[1.08] z-0"
          alt=""
        />

        <div
          className="absolute inset-0 z-10"
          style={{
            background: `
              radial-gradient(circle at 50% 45%, rgba(255,200,70,0.15) 0%, transparent 55%),
              linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.70))
            `,
          }}
        />

        <div className="relative z-30 max-w-[92vw] fade-up text-center">
          <h2 className="text-[28px] tracking-[0.22em] font-light">アルル</h2>

          <h3 className="mt-3 text-[11px] tracking-[0.40em] text-yellow-200/70 font-light">
            1888年　南フランス
          </h3>

          <div className="mt-8 mb-10 w-[60px] h-px bg-yellow-200/30 mx-auto" />

       <p className="leading-[2.65] text-white/90 text-[15px] font-light">

  1888年、アルル。<br /><br />

  光は鋭く、空は深い。<br />
  すべてが、燃えていた。<br /><br />

  彼は「黄色の家」を借りる。<br />
  芸術家の共同体を夢見る。<br /><br />

  色彩は爆発する。<br />
  ひまわりは炎のように咲いた。<br /><br />

  絵は風景ではなくなった。<br />
  内側の熱、そのものだった。

</p>

        </div>
      </section>

      {/* ================= 耳事件 ================= */}
      <section className="vg-section relative min-h-[100svh] flex items-center justify-center text-center px-6 py-24">
        <img
          src="/images/vg-ear.png"
          className="vg-bg absolute inset-0 w-full h-full object-cover object-[50%_55%] opacity-40 brightness-[0.75] contrast-[1.08] z-0"
          alt=""
        />

        <div className="vg-vignette absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/60 to-black/92" />

        <div className="relative z-30 max-w-[92vw] mx-auto fade-up">
          <h2 className="text-[26px] tracking-[0.24em] font-light text-white/95">
            耳事件
          </h2>

          <p className="mt-5 text-[11px] tracking-[0.40em] text-white/55 font-light">
            1888年12月 — アルル
          </p>

          <div className="mt-10 mb-12 w-[60px] h-px bg-white/20 mx-auto" />

      <p className="leading-[2.65] text-white/88 text-[15px] font-light">

  理想は、長く続かなかった。<br /><br />

  ゴーギャンとの衝突。<br />
  言葉は刃になった。<br /><br />

  1888年12月23日。<br />
  夜。<br /><br />

  彼は自らの左耳を切り落とす。<br /><br />

  理由は、いまも完全には分からない。<br /><br />

  発作か。<br />
  絶望か。<br />
  それとも、崩れる夢への抵抗か。<br /><br />

  だが――<br /><br />

  数週間後、<br />
  彼はまた筆を握っていた。<br /><br />

  光は、まだ消えていなかった。

</p>

        </div>
      </section>

      {/* ================= 精神病院 ================= */}
      <section className="vg-section relative min-h-[100svh] flex items-center justify-center text-center px-6 py-28">
        <img
          src="/images/vg-asylum.png"
          className="vg-bg absolute inset-0 w-full h-full object-cover object-[50%_50%] opacity-38 brightness-[0.7] contrast-[1.05] z-0"
          alt=""
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0b1220]/85 via-black/70 to-black/92" />

        <div className="relative z-30 max-w-[92vw] mx-auto fade-up">
          <h2 className="text-[26px] tracking-[0.24em] font-light text-white/95">
            精神病院
          </h2>

          <p className="mt-5 text-[11px] tracking-[0.40em] text-white/55 font-light">
            1889年 — サン＝レミ
          </p>

          <div className="mt-10 mb-12 w-[60px] h-px bg-white/15 mx-auto" />
<p className="leading-[2.7] text-white/88 text-[15px] font-light">

  1889年、サン＝レミ。<br /><br />

  石壁に囲まれた静かな場所。<br /><br />

  発作は突然訪れる。<br />
  世界は歪み、ほどける。<br /><br />

  だが窓の外には、空があった。<br /><br />

  青は揺れ、<br />
  糸杉は伸び、<br />
  夜は燃えていた。<br /><br />

  彼は描き続ける。<br />
  壊れながらも、描き続ける。

</p>

        </div>
      </section>

      {/* ================= 星月夜 ================= */}
      <section className="vg-section star-section relative min-h-[100svh] flex items-center justify-center text-center px-6 overflow-hidden">
        <img
          src="/images/vg-starrynight1.png"
          className="vg-bg absolute inset-0 w-full h-full object-cover object-[50%_45%] opacity-50"
          alt=""
        />

        <div className="vg-vignette absolute inset-0 z-10 bg-gradient-to-b from-black/65 via-black/40 to-black/85" />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <div
            ref={swirlRef}
            className="w-[86vw] max-w-[520px] aspect-square rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(60,90,180,0.8), rgba(255,210,80,0.65), rgba(60,90,180,0.8))",
              filter: "blur(60px)",
              opacity: 0.2,
            }}
          />
        </div>

        <div className="relative z-30 max-w-[92vw] fade-up py-24">
          <h2 className="text-[28px] tracking-[0.22em] font-light">星月夜</h2>

          <div className="mt-10 mb-12 w-[60px] h-px bg-white/15 mx-auto" />
<p className="leading-[2.8] text-white/92 text-[15px] font-light">

  夜は、黒ではなかった。<br /><br />

  青は震え、<br />
  星は瞬き、<br />
  空は渦を巻く。<br /><br />

  それは風景ではない。<br />
  感情そのものだった。<br /><br />

  孤独、恐怖、祈り。<br />
  すべてが、空に放たれた。<br /><br />

  世界は壊れていない。<br />
  ただ、激しく揺れている。

</p>

        </div>
      </section>

{/* ================= 最期 ================= */}
<section className="vg-section relative min-h-[100svh] flex items-center justify-center text-center px-6 overflow-hidden">

  <img
    src="/images/vg-last.png"
    className="vg-bg absolute inset-0 w-full h-full object-cover object-[50%_50%] opacity-40"
    alt="Wheatfield with Crows"
  />

  <div className="vg-vignette absolute inset-0 z-10 bg-gradient-to-b from-black/78 via-black/55 to-black/90" />

  <div className="relative z-30 max-w-[92vw] fade-up py-24">

    <h2 className="text-[28px] tracking-[0.22em] font-light">
      最期
    </h2>

    <div className="mt-10 mb-12 w-[56px] h-px bg-white/20 mx-auto" />
<p className="leading-[2.7] text-white/92 text-[15px] font-light">

  1890年7月27日。<br /><br />

  麦畑。<br />
  銃声。<br /><br />

  二日後、息を引き取る。<br /><br />

  37歳。<br /><br />

 理解されなかった。<br /><br />

  だが――<br /><br />

  美は濁らなかった。<br /><br />

  色は死ななかった。<br /><br />

  彼の青は、<br />
  いまも揺れている。

</p>


  </div>
</section>


      {/* ================= テオ ================= */}
      <section className="vg-section relative min-h-[100svh] flex items-center justify-center text-center px-6">
        <img
          src="/images/vg-theo.png"
          className="vg-bg absolute inset-0 w-full h-full object-cover object-[50%_45%] opacity-38"
          alt=""
        />

        <div className="vg-vignette absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/88" />

        <div className="relative z-30 max-w-[92vw] fade-up py-24">
          <h2 className="text-[28px] tracking-[0.22em] font-light">テオ</h2>

          <div className="mt-10 mb-12 w-[60px] h-px bg-white/15 mx-auto" />

     <p className="leading-[2.8] text-white/90 text-[15px] font-light">

  兄を信じ続けた、ただ一人。<br /><br />

  生活費も、励ましの言葉も、<br />
絶えず送り続けた。<br /><br />

  ゴッホは800通以上の手紙を残した。<br />
  その多くが、テオ宛だった。<br /><br />

  色の理論。<br />
  生活の苦しさ。<br />
  発作への恐怖。<br /><br />

  1890年、テオはこう記す。<br /><br />

<span className="italic text-white/95">
  “He put his life at the service of his art.”
</span><br />
<span className="text-white/60 text-[14px] tracking-[0.06em]">
  （彼は、自らの人生を芸術に捧げた。）
</span><br /><br />

  兄の死から半年後、<br />
  テオもまた去る。<br /><br />

  色は、ひとりでは残らなかった。<br />
  それは、二人の仕事だった。

</p>

        </div>
      </section>
    </div>
  );
}
