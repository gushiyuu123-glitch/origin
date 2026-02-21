// ===============================
//  LeBonRoom.jsx（PC 最適化）
// ===============================

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./lebon.css";

gsap.registerPlugin(ScrollTrigger);

export default function LeBonRoom() {
  const containerRef = useRef(null);
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.utils.toArray(".ending-reveal").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 38, clipPath: "inset(0 0 32% 0)", filter: "blur(0.3px)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0 0)",
          filter: "blur(0)",
          duration: 1.3,
          ease: "cubic-bezier(0.22,0.1,0.25,1)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    });
  }, containerRef);

  return () => ctx.revert();
}, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".lb-section");

      sections.forEach((sec) => {
        const target = sec.querySelector(".fade-up");
        if (!target) return;

        gsap.fromTo(
          target,
          {
            opacity: 0,
            y: 32,
            filter: "blur(0.25px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.92,               // ← PC最適テンポ
            ease: "cubic-bezier(0.22, 0.10, 0.25, 1)",
            scrollTrigger: {
              trigger: sec,
              start: "top 83%",           // ← PC最適発火位置
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="lb-root bg-[#050506] text-white min-h-screen"
    >

 <section
  className="
    lb-section lb-hero min-h-screen 
    flex 
    items-start   /* ← 上方向へ動ける */
    justify-start /* ← 左方向へ動ける */
    px-10 
    relative 
    overflow-hidden
  "
>
  {/* ★ 背景：抽象画 */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-[0.26]"
    style={{ backgroundImage: "url('/images/lebon/abstract-bg.png')" }}
  />

  {/* ★ 暗膜 */}
  <div className="absolute inset-0 bg-black/75" />

  {/* ★ 光膜 */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background:
        "radial-gradient(circle at 50% 35%, rgba(212,175,55,0.18), transparent 55%)",
      opacity: 0.22,
    }}
  />

  {/* ---------------- CONTENT ---------------- */}
<div
  className="
    fade-up 
    max-w-[900px]
    relative 
    z-10

 md:mt-[7vh]
md:ml-[6vw]

    px-4
  "
>
    <p className="text-[13px] tracking-[0.32em] text-white/40 mb-5">
      CROWD PSYCHOLOGY — G. LE BON
    </p>

    <h1 className="text-[28px] md:text-[34px] leading-[1.9] font-light opacity-[0.92] mb-8">
      「思い出せ。君の挑戦を笑ったのは、<br className="hidden md:block" />
      挑戦していない人だ。」
    </h1>

    <p className="text-[15px] leading-[1.9] text-white/60">
      それは忠告ではなく、彼ら自身を守るための“反射”にすぎない。
    </p>
  </div>
</section>


      {/* ================================================
          ② 中盤：思想 × 文明 × 群衆心理（深度ゾーン）
      ================================================= */}
{/* ---------- 02-1：思想の起源 ---------- */}
<section className="lb-section px-6 md:px-12 py-28 md:py-36">
  <div className="fade-up max-w-[820px] mx-auto">
    <img src="/images/lebon/origin.png" className="lb-img mb-14 opacity-[0.9]" alt="" />

    <h2 className="lb-h2 mb-6">思想の起源：崩れゆく時代を見た少年</h2>

    <p className="lb-lead mb-6">
      ル・ボンが育った19世紀フランスは、革命と暴動が繰り返され、
      社会そのものが“感情”に飲み込まれていた。
      彼の原点は、個人の体験ではなく「国全体が揺らぐ感覚」だった。
    </p>

    <p className="lb-body mb-4">
      人々は突然怒りに支配され、昨日まで英雄だった人物を一瞬で攻撃し始める。
      そんな光景が、少年の眼に深く焼きついた。
    </p>

    <p className="lb-body mb-4">
      一人では理性的でも、群衆になるとまったく別の生き物に変わる。
      なぜここまで急激に暴走するのか。
    </p>

    <p className="lb-body">
      その不可解な変質を前に、ル・ボンは一つの確信に辿り着く。
      <br />
      <span className="text-white/80">
        —— 人間は「群衆」になったときこそ、本性が露わになる。
      </span>
    </p>
  </div>
</section>


{/* ---------- 02-2：文明の記録者 ---------- */}
<section className="lb-section px-6 md:px-12 py-28 md:py-36">
  <div className="fade-up max-w-[820px] mx-auto">
    <img src="/images/lebon/explorer.png" className="lb-img mb-14 opacity-[0.9]" alt="" />

    <h2 className="lb-h2 mb-6">科学者ではなく、文明の記録者</h2>

    <p className="lb-body mb-4">
      ル・ボンは医師・地理学者・探検家として世界を巡り、
      “文明の動き”を生のまま観察し続けた。
    </p>

    <p className="lb-body mb-4">
      文化が違っても、人々の行動は驚くほど似ていた。
      感情が高まると理性が消え、
      群衆は一瞬で英雄を悪魔に変える。
    </p>

    <p className="lb-body">
      その共通性を前に、彼の中に一つの問いが生まれる。
      <br />
      <span className="text-white/80">
        —— 文明が違っても、人間の心理構造は同じなのか？
      </span>
    </p>
  </div>
</section>


{/* ---------- 02-3：英雄が悪魔に変わる瞬間 ---------- */}
<section className="lb-section lb-dark px-6 md:px-12 py-28 md:py-36">
  <div className="fade-up max-w-[820px] mx-auto">
    <img src="/images/lebon/crowd-turn.png" className="lb-img mb-14 opacity-[0.9]" alt="" />

    <h2 className="lb-h2 mb-6">英雄が悪魔に変わる瞬間を見た</h2>

    <p className="lb-body mb-4">
      群衆の中では、感情は空気のように伝染し、
      個人では選ばない暴力が“正義”へと姿を変える。
    </p>

    <p className="lb-body mb-4">
      ル・ボンは悟る。
      <br />
      <span className="text-white/80">
        —— 群衆とは、感情が集まり“ひとつの生命体”になった姿だ。
      </span>
    </p>

    <p className="lb-body">
      その生命体は理性ではなく、
      “原始的な衝動”で動く。
    </p>
  </div>
</section>


{/* ---------- 02-4：三要因 ---------- */}
<section className="lb-section px-6 md:px-12 py-28 md:py-36">
  <div className="fade-up max-w-[820px] mx-auto">
    <img src="/images/lebon/factors.png" className="lb-img mb-14 opacity-[0.9]" alt="" />

    <h2 className="lb-h2 mb-10">群衆が理性を失う三つの要因</h2>

    <div className="lb-grid mb-10">
      <div className="lb-card">
        <h3>① 匿名性の解放</h3>
        <p>責任が曖昧になり、衝動にブレーキが掛からなくなる。</p>
      </div>

      <div className="lb-card">
        <h3>② 感情の倍化</h3>
        <p>感情が感染・増幅し、理性を上回った瞬間に暴走が始まる。</p>
      </div>

      <div className="lb-card">
        <h3>③ 思考の委任</h3>
        <p>判断が「空気」に委ねられ、個の意見は溶けていく。</p>
      </div>
    </div>

    <p className="lb-body">
      昨日の英雄が今日の悪魔に変わるのは、いつもこの三つの力が重なったときだ。
    </p>
  </div>
</section>


{/* ---------- 02-5：個が孤独になる理由 ---------- */}
<section className="lb-section lb-dark px-6 md:px-12 py-28 md:py-36">
  <div className="fade-up max-w-[820px] mx-auto">
    <img src="/images/lebon/individual.png" className="lb-img mb-14 opacity-[0.9]" alt="" />

    <h2 className="lb-h2 mb-6">群衆の中で、個はなぜ孤独になるのか</h2>

    <p className="lb-body mb-4">
      群衆は「平均」へ引き寄せる力が強い。
      だから、平均から外れた速度や感性を持つ者は“不安の対象”として扱われる。
    </p>

    <p className="lb-body mb-4">
      ル・ボンは記す。
      才能が拒絶される理由は「嫉妬」ではなく
      <span className="text-white/80">“恐怖”</span> だと。
    </p>

    <ul className="lb-list mt-8 mb-10">
      <li>理解できない速度は、脅威として処理される。</li>
      <li>説明しても届かないのは、構造が違うから。</li>
      <li>群衆は変化を恐れ、変化の源を排除しようとする。</li>
    </ul>
  </div>
</section>



{/* ---------- 03：ENDING ---------- */}
<section className="relative w-full min-h-screen overflow-hidden">

  {/* 背景画像 */}
  <img
    src="/images/lebon/ending1.png"
    className="absolute inset-0 w-full h-full object-cover z-0"
    alt=""
  />

  {/* 黒幕 */}
  <div className="absolute inset-0 bg-black/65 z-10" />

  {/* 上部フェード（グラデ強化） */}
  <div
    className="absolute inset-0 z-30 pointer-events-none"
    style={{
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.62) 26%, rgba(0,0,0,0.32) 45%, transparent 75%)",
    }}
  />

  {/* 黄金膜（低め） */}
  <div
    className="absolute inset-0 z-20 pointer-events-none"
    style={{
      background:
        "radial-gradient(circle at 50% 46%, rgba(212,175,55,0.18), transparent 65%)",
    }}
  />

  {/* 文字 */}
  <div className="ending-reveal relative z-50 max-w-[900px] mx-auto px-8 py-[28vh] text-center">

    <h2 className="text-[30px] tracking-[0.22em] mb-12 opacity-[0.96]">
      結論：個として立つということ
    </h2>

    <p className="text-[18px] leading-[2] opacity-[0.88] mb-10">
      あなたが一歩動いた瞬間、  
      誰かの「動かなかった人生」を照らしてしまう。
    </p>

    <h3 className="text-[25px] md:text-[30px] leading-[1.9] font-light opacity-[0.96] my-14">
      あなたの成功は、他者の“停滞”を可視化する。
    </h3>

    <p className="text-[15px] leading-[1.95] text-white/70 max-w-[700px] mx-auto">
      だから人は止める。批判する。境界を引こうとする。  
      —— それはあなたが間違っているからではない。  
      あなたが「動いてしまった」からだ。  
      たったそれだけで、人は自分の影と向き合わされる。
    </p>

  </div>

</section>

    </main>
  );
}