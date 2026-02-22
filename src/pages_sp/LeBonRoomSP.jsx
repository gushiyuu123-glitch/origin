// ===============================
//  LeBonRoomSP.jsx（完全最適化）
// ===============================

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./lebon_sp.css";

gsap.registerPlugin(ScrollTrigger);

export default function LeBonRoomSP() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ==================================================
         SP高速フェード（裕人の最適値に完全同期）
      ================================================== */
      gsap.utils.toArray(".fade-up").forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 22,         // ← SP用の黄金値（PCより浅い）
            filter: "blur(0.2px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.78, // ← 裕人の最適テンポ
            ease: "cubic-bezier(0.22, 0.10, 0.25, 1)",
            scrollTrigger: {
              trigger: el,
              start: "top 88%", // ← SP実寸で最も自然な位置
              once: true,
            },
          }
        );
      });

    }, containerRef);

    return () => ctx.revert(); // ← メモリリーク完全防止
  }, []);

  useEffect(() => {
  const ctx = gsap.context(() => {

    /* ENDING reveal (SP) */
    gsap.utils.toArray(".ending-reveal-sp").forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 28,
          clipPath: "inset(0 0 36% 0)",
          filter: "blur(0.25px)",
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0 0)",
          filter: "blur(0)",
          duration: 1.22,
          ease: "cubic-bezier(0.22,0.1,0.25,1)",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    });

  }, containerRef);

  return () => ctx.revert();
}, []);

  return (
    <main ref={containerRef} className="lb-root bg-[#050506] text-white min-h-screen">

{/* ＝＝＝＝＝＝＝ HERO（SP最適化）＝＝＝＝＝＝＝ */}
<section className="relative min-h-[92vh] px-5 pt-32 pb-20 overflow-hidden">

{/* 背景（さらに影へ） */}
<div
  className="absolute inset-0 bg-cover bg-center opacity-[0.18]"
  style={{ backgroundImage: "url('/images/lebon/abstract-bg2.png')" }}
/>

{/* 黒膜：静けさ強化 */}
<div className="absolute inset-0 bg-black/82" />

{/* 光膜：金気を抑えて影を優先 */}
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background:
      "radial-gradient(circle at 50% 32%, rgba(212,175,55,0.10), transparent 72%)",
  }}
/>

  {/* TEXT（SP黄金位置） */}
  <div
    className="
      relative z-20 fade-up text-left
      max-w-[88%]
      
      /* ★ SPの黄金位置（18vhが最も強度が出る） */
      mt-[18vh]
      ml-[4vw]
    "
  >
    <p className="text-[10px] tracking-[0.26em] text-white/40 mb-6">
      CROWD PSYCHOLOGY — G. LE BON
    </p>

    {/* ★ 改行位置を固定して“強度”を演出 */}
    <h1
      className="
        text-[20px]
        leading-[1.62]
        tracking-[0.22em]
        font-light
        opacity-[0.94]
        mb-5
      "
    >
      「思い出せ。<br></br>君の挑戦を笑ったのは、
      <br></br>挑戦しなかった人だ。」<br></br>
    </h1>

    <p className="text-[13px] leading-[1.88] text-white/70 pr-[3px]">
      <br></br>それは忠告ではなく、彼ら自身を守るための<br></br>“反射”にすぎない。
    </p>
  </div>
</section>
      {/* ＝＝＝＝＝＝＝ 02-1 起源 ＝＝＝＝＝＝＝ */}
      <section className="lb-section px-5 py-20">
        <div className="fade-up max-w-[680px] mx-auto">
          <img src="/images/lebon/origin.png" className="lb-img mb-10" alt="" />

          <h2 className="lb-h2 text-[22px] mb-4">思想の起源：崩れゆく<br></br>時代を見た少年</h2>

          <p className="lb-lead text-[15px] mb-6">
            19世紀フランスは革命と暴動が繰り返され、<br></br>社会全体が“感情”に揺れていた。
          </p>

          <p className="lb-body text-[14px] mb-4">
            人々は突然怒りに支配され、<br></br>昨日の英雄が一瞬で悪魔になる。
          </p>

          <p className="lb-body text-[14px]">
            その不可解な変質を前に、ル・ボンは確信する。
            <br />
            <span className="text-white/80">
              —— 群衆の中でこそ、人は本性をさらけ出す。
            </span>
          </p>
        </div>
      </section>

      {/* ＝＝＝＝＝＝＝ 02-2 文明の記録者 ＝＝＝＝＝＝＝ */}
      <section className="lb-section px-5 py-20">
        <div className="fade-up max-w-[680px] mx-auto">
          <img src="/images/lebon/explorer.png" className="lb-img mb-10" alt="" />

          <h2 className="lb-h2 text-[22px] mb-4">科学者ではなく、<br></br>文明の記録者</h2>

          <p className="lb-body text-[14px] mb-4">
            彼は医師・地理学者・探検家として世界を旅し、<br></br>文明の動きを観察した。
          </p>

          <p className="lb-body text-[14px] mb-4">
            文化が違っても、<br></br>人々の“感情の動き方”は驚くほど似ていた。
          </p>

          <p className="lb-body text-[14px]">
            <span className="text-white/80">
              —— 文明が違っても、<br></br>人間の心理構造は同じなのか？
            </span>
          </p>
        </div>
      </section>

      {/* ＝＝＝＝＝＝＝ 02-3 英雄→悪魔 ＝＝＝＝＝＝＝ */}
      <section className="lb-section lb-dark px-5 py-20">
        <div className="fade-up max-w-[680px] mx-auto">
          <img src="/images/lebon/crowd-turn.png" className="lb-img mb-10" alt="" />

          <h2 className="lb-h2 text-[22px] mb-4">英雄が悪魔に変わる瞬間</h2>

          <p className="lb-body text-[14px] mb-4">
            群衆では感情が空気のように伝染し、<br></br>暴力が“正義”へと変質する。
          </p>

          <p className="lb-body text-[14px]">
            <span className="text-white/80">
              —— 群衆は感情が集まり、一つの“生命体”になる。
            </span>
          </p>
        </div>
      </section>

      {/* ＝＝＝＝＝＝＝ 02-4 三要因 ＝＝＝＝＝＝＝ */}
      <section className="lb-section px-5 py-20">
        <div className="fade-up max-w-[680px] mx-auto">
          <img src="/images/lebon/factors2.png" className="lb-img mb-10" alt="" />

          <h2 className="lb-h2 text-[22px] mb-8">群衆が理性を失う<br></br>三つの要因</h2>

          <div className="grid gap-6">
            <div className="lb-card py-5 px-4">
              <h3 className="text-[14px] mb-2">① 匿名性の解放</h3>
              <p className="text-[13px] opacity-80">
                責任が曖昧になり、衝動を止めるブレーキが消える。
              </p>
            </div>

            <div className="lb-card py-5 px-4">
              <h3 className="text-[14px] mb-2">② 感情の倍化</h3>
              <p className="text-[13px] opacity-80">
                感情が感染し、理性を越えた瞬間に暴走が始まる。
              </p>
            </div>

            <div className="lb-card py-5 px-4">
              <h3 className="text-[14px] mb-2">③ 思考の委任</h3>
              <p className="text-[13px] opacity-80">
                判断が「空気」に委ねられ、個性が溶ける。
              </p>
            </div>
          </div>

          <p className="lb-body mt-8 text-[14px]">
            昨日の英雄が今日の悪魔に変わるのは、<br></br>この三つの力が重なるときだ。
          </p>
        </div>
      </section>

      {/* ＝＝＝＝＝＝＝ 02-5 個の孤独 ＝＝＝＝＝＝＝ */}
      <section className="lb-section lb-dark px-5 py-20">
        <div className="fade-up max-w-[680px] mx-auto">
          <img src="/images/lebon/individual.png" className="lb-img mb-10" alt="" />

          <h2 className="lb-h2 text-[22px] mb-4">群衆の中で、<br></br>個はなぜ孤独になるのか</h2>

          <p className="lb-body text-[14px] mb-4">
            群衆は「平均」へ引き寄せる力が強い。
          </p>

          <ul className="lb-list text-[13px] mt-5 mb-8">
            <li>理解できない速度は脅威として扱われる。</li>
            <li>説明しても届かないのは、構造が違うから。</li>
            <li>群衆は変化を怖れ、源を排除しようとする。</li>
          </ul>
        </div>
      </section>

      {/* ＝＝＝＝＝＝＝ ENDING（SP最適化）＝＝＝＝＝＝＝ */}
      <section className="relative w-full min-h-[90vh] overflow-hidden">

        <img
          src="/images/lebon/ending1.png"
          className="absolute inset-0 w-full h-full object-cover z-0"
          alt=""
        />

        <div className="absolute inset-0 bg-black/68 z-10" />

        <div
          className="absolute inset-0 z-30 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.55) 34%, rgba(0,0,0,0.25) 58%, transparent 80%)",
          }}
        />

        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 44%, rgba(212,175,55,0.16), transparent 65%)",
          }}
        />

        {/* TEXT */}
        <div className="ending-reveal-sp relative z-50 max-w-[680px] mx-auto px-6 py-[22vh] text-center fade-up">

          <h2 className="text-[20px] tracking-[0.22em] mb-8 opacity-[0.96]">
            結論：個として立つということ
          </h2>

          <p className="text-[15px] leading-[1.9] opacity-[0.88] mb-6">
            あなたが一歩動いた瞬間、  <br></br>
            誰かの「動かなかった人生」を照らしてしまう。
          </p>

          <h3 className="text-[18px] leading-[1.9] font-light opacity-[0.96] my-10">
            あなたの成功は、他者の“停滞”を<br></br>可視化する。
          </h3>

          <p className="text-[13px] leading-[1.9] text-white/70">
            だから人は止める。批判する。境界を引こうとする。  
            —— それはあなたが間違っているからではない。  <br></br>
            あなたが「動いてしまった」からだ。
          </p>

        </div>
      </section>

    </main>
  );
}