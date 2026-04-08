// ===============================
//  LeBonRoom.jsx（PC 最適化・文章密度強化版）
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
          {
            opacity: 0,
            y: 38,
            clipPath: "inset(0 0 32% 0)",
            filter: "blur(0.3px)",
          },
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
            duration: 0.92,
            ease: "cubic-bezier(0.22, 0.10, 0.25, 1)",
            scrollTrigger: {
              trigger: sec,
              start: "top 83%",
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
      className="lb-root min-h-screen bg-[#050506] text-white"
    >
      {/* HERO */}
      <section
        className="
          lb-section lb-hero min-h-screen
          flex items-start justify-start
          px-10 relative overflow-hidden
        "
      >
        {/* 背景 */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.26]"
          style={{ backgroundImage: "url('/images/lebon/abstract-bg.png')" }}
        />

        {/* 暗膜 */}
        <div className="absolute inset-0 bg-black/75" />

        {/* 光膜 */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 35%, rgba(212,175,55,0.18), transparent 55%)",
            opacity: 0.22,
          }}
        />

        {/* CONTENT */}
        <div
          className="
            fade-up relative z-10 max-w-[900px] px-4
            mt-[10vh] md:mt-[10vh]
            ml-[1vw] md:ml-[6vw]
          "
        >
          <p className="mb-5 text-[13px] tracking-[0.32em] text-white/40">
            CROWD PSYCHOLOGY — G. LE BON
          </p>

          <h1 className="mb-8 text-[28px] md:text-[34px] leading-[1.9] font-light opacity-[0.92]">
            「思い出せ。君の挑戦を笑ったのは、
            <br className="hidden md:block" />
            挑戦していない人だ。」
          </h1>

          <p className="max-w-[720px] text-[15px] leading-[2] text-white/64">
            それは忠告ではなく、
            彼ら自身を守るための“反射”にすぎない。
            群衆はいつも、動く者を止めることで
            自分たちの静止を正当化しようとする。
          </p>
        </div>
      </section>

      {/* 02-1：思想の起源 */}
      <section className="lb-section px-6 py-28 md:px-12 md:py-36">
        <div className="fade-up mx-auto max-w-[820px]">
          <img
            src="/images/lebon/origin.png"
            className="lb-img mb-14 opacity-[0.9]"
            alt=""
          />

          <h2 className="lb-h2 mb-6">思想の起源：崩れゆく時代を見た少年</h2>

          <p className="lb-lead mb-6">
            ル・ボンが育った19世紀フランスは、革命と暴動が繰り返され、
            社会そのものが“感情”に飲み込まれていた。
            それは単なる政情不安ではない。
            街の空気、群衆の熱、昨日までの常識が一夜で裏返るような、
            世界の足場そのものが揺れている時代だった。
          </p>

          <p className="lb-body mb-4">
            人々は突然怒りに支配され、
            昨日まで英雄だった人物を翌日には攻撃し始める。
            誰かが最初に石を投げると、
            次の瞬間にはその衝動が“正義”という名にすり替わり、
            無数の感情が一斉にそこへ雪崩れ込んでいく。
          </p>

          <p className="lb-body mb-4">
            少年ル・ボンの目に焼きついたのは、
            個人の善悪よりも、
            人が集まった瞬間に立ち上がる
            得体の知れない“別の生き物”だった。
            一人では理性的に見える人間が、
            群れた瞬間にまったく違う顔を見せる。
          </p>

          <p className="lb-body">
            なぜ人は、集まるだけでここまで変わるのか。
            その問いはやがて、彼の生涯を貫く観察へと変わっていく。
            <br />
            <span className="text-white/80">
              —— 人間は「群衆」になったときこそ、本性が露わになる。
            </span>
          </p>
        </div>
      </section>

      {/* 02-2：文明の記録者 */}
      <section className="lb-section px-6 py-28 md:px-12 md:py-36">
        <div className="fade-up mx-auto max-w-[820px]">
          <img
            src="/images/lebon/explorer.png"
            className="lb-img mb-14 opacity-[0.9]"
            alt=""
          />

          <h2 className="lb-h2 mb-6">科学者ではなく、文明の記録者</h2>

          <p className="lb-body mb-4">
            ル・ボンは医師であり、地理学者であり、探検家でもあった。
            だが彼の本質は、
            それらの肩書きよりも
            “文明の動き”を生のまま記録する観察者だったと言ったほうが近い。
          </p>

          <p className="lb-body mb-4">
            彼は土地を見ただけではない。
            空気を見た。宗教を見た。習慣を見た。
            人々が何を恐れ、何を信じ、
            どの瞬間に熱狂し、どの瞬間に残酷になるのかを見続けた。
          </p>

          <p className="lb-body mb-4">
            文化や言語が違っても、
            群れた人間の振る舞いは驚くほど似ていた。
            感情が高まると理性は薄れ、
            群衆は一瞬で英雄を悪魔へと塗り替える。
          </p>

          <p className="lb-body">
            その共通性を前に、彼の中に一つの問いが生まれる。
            <br />
            <span className="text-white/80">
              —— 文明が違っても、人間の心理構造は同じなのか？
            </span>
            <br />
            その問いはやがて、時代を超えて通用する
            群衆心理の骨格へと結晶していく。
          </p>
        </div>
      </section>

      {/* 02-3：英雄が悪魔に変わる瞬間 */}
      <section className="lb-section lb-dark px-6 py-28 md:px-12 md:py-36">
        <div className="fade-up mx-auto max-w-[820px]">
          <img
            src="/images/lebon/crowd-turn.png"
            className="lb-img mb-14 opacity-[0.9]"
            alt=""
          />

          <h2 className="lb-h2 mb-6">英雄が悪魔に変わる瞬間を見た</h2>

          <p className="lb-body mb-4">
            群衆の中では、感情は空気のように伝染する。
            誰かの怒りはすぐ隣の怒りを呼び、
            ひとつの不安は、瞬く間に全体の確信へと変わっていく。
            そこでは事実よりも“熱”のほうが速い。
          </p>

          <p className="lb-body mb-4">
            個人であれば選ばなかったはずの言葉や暴力が、
            “みんながそうしている”というだけで正当化される。
            昨日まで称賛されていた英雄が、
            一夜にして悪魔へと塗り替えられるのは、
            善悪が変わったからではない。
            空気が変わったからだ。
          </p>

          <p className="lb-body mb-4">
            ル・ボンはそこに、群衆の本質を見る。
            群衆とは単なる人数の増加ではない。
            感情が連結し、理性を溶かし、
            ひとつの巨大な生き物へと変質した状態である。
          </p>

          <p className="lb-body">
            <span className="text-white/80">
              —— 群衆とは、感情が集まり“ひとつの生命体”になった姿だ。
            </span>
            <br />
            その生命体は理性ではなく、
            “原始的な衝動”で動く。
            だから群衆は、正しさより先に熱狂へ支配される。
          </p>
        </div>
      </section>

      {/* 02-4：三要因 */}
      <section className="lb-section px-6 py-28 md:px-12 md:py-36">
        <div className="fade-up mx-auto max-w-[820px]">
          <img
            src="/images/lebon/factors2.png"
            className="lb-img mb-14 opacity-[0.9]"
            alt=""
          />

          <h2 className="lb-h2 mb-10">群衆が理性を失う三つの要因</h2>

          <div className="lb-grid mb-10">
            <div className="lb-card">
              <h3>① 匿名性の解放</h3>
              <p>
                責任が曖昧になると、人は急に大胆になる。
                一人なら抑えていた衝動が、
                群れの中では“自分ではない誰か”のように解放されていく。
              </p>
            </div>

            <div className="lb-card">
              <h3>② 感情の倍化</h3>
              <p>
                感情は共有されると弱まるのではなく、むしろ増幅する。
                怒りも不安も熱狂も、
                周囲の反応を通じて何倍にも膨らみ、
                やがて理性を押し流していく。
              </p>
            </div>

            <div className="lb-card">
              <h3>③ 思考の委任</h3>
              <p>
                群衆の中では判断が「自分」ではなく「空気」へ委ねられる。
                その瞬間、個の意見は溶け、
                人は自分で考えるかわりに、雰囲気に従う。
              </p>
            </div>
          </div>

          <p className="lb-body">
            昨日の英雄が今日の悪魔に変わるのは、
            いつもこの三つの力が重なったときだ。
            群衆の暴走は偶然ではない。
            そこには、感情が理性を上回る構造がある。
          </p>
        </div>
      </section>

      {/* 02-5：個が孤独になる理由 */}
      <section className="lb-section lb-dark px-6 py-28 md:px-12 md:py-36">
        <div className="fade-up mx-auto max-w-[820px]">
          <img
            src="/images/lebon/individual.png"
            className="lb-img mb-14 opacity-[0.9]"
            alt=""
          />

          <h2 className="lb-h2 mb-6">群衆の中で、個はなぜ孤独になるのか</h2>

          <p className="lb-body mb-4">
            群衆は“平均”へ引き寄せる力が強い。
            それは安心のためだ。
            同じ速度、同じ感情、同じ結論の中にいれば、
            人は自分で考えなくても済む。
            だから平均は、しばしば正しさよりも先に安心として選ばれる。
          </p>

          <p className="lb-body mb-4">
            だからこそ、平均から外れた感性や速度を持つ者は、
            才能として歓迎される前に、
            まず“不安”として処理される。
            理解できないものは、
            魅力として見える前に脅威として知覚されやすい。
          </p>

          <p className="lb-body mb-4">
            ル・ボンが見抜いたのは、
            才能が拒絶される理由は単純な嫉妬だけではないということだった。
            群衆は、変化の源に怯える。
            なぜなら変化の存在は、
            今の自分たちの停滞を露わにしてしまうからだ。
          </p>

          <ul className="lb-list mt-8 mb-10">
            <li>理解できない速度は、脅威として処理される。</li>
            <li>説明しても届かないのは、構造が違うから。</li>
            <li>群衆は変化を恐れ、変化の源を排除しようとする。</li>
          </ul>

          <p className="lb-body">
            個として立つ者が孤独なのは、
            間違っているからではない。
            群衆の眠りを、先に醒ましてしまったからだ。
          </p>
        </div>
      </section>

      {/* ENDING */}
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* 背景画像 */}
        <img
          src="/images/lebon/ending1.png"
          className="absolute inset-0 z-0 h-full w-full object-cover"
          alt=""
        />

        {/* 黒幕 */}
        <div className="absolute inset-0 z-10 bg-black/65" />

        {/* 上部フェード */}
        <div
          className="absolute inset-0 z-30 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.62) 26%, rgba(0,0,0,0.32) 45%, transparent 75%)",
          }}
        />

        {/* 黄金膜 */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 46%, rgba(212,175,55,0.18), transparent 65%)",
          }}
        />

        {/* 文字 */}
        <div className="ending-reveal relative z-50 mx-auto max-w-[900px] px-8 py-[28vh] text-center">
          <h2 className="mb-12 text-[30px] tracking-[0.22em] opacity-[0.96]">
            結論：個として立つということ
          </h2>

          <p className="mb-10 text-[18px] leading-[2] opacity-[0.88]">
            あなたが一歩動いた瞬間、
            <br className="hidden md:block" />
            誰かの「動かなかった人生」を照らしてしまう。
          </p>

          <h3 className="my-14 text-[25px] md:text-[30px] leading-[1.9] font-light opacity-[0.96]">
            あなたの成功は、他者の“停滞”を可視化する。
          </h3>

          <p className="mx-auto mb-6 max-w-[760px] text-[15px] leading-[1.95] text-white/74">
            だから人は止める。批判する。境界を引こうとする。
            —— それはあなたが間違っているからではない。
            あなたが「動いてしまった」からだ。
            たったそれだけで、人は自分の影と向き合わされる。
          </p>

          <p className="mx-auto mb-6 max-w-[760px] text-[15px] leading-[1.95] text-white/70">
            群衆はいつも、動かないことを正しさに見せようとする。
            変わらないことを常識と呼び、
            先に進む者にだけ慎重さや協調性を求める。
            だが本当は、その圧力の正体こそが答えだ。
          </p>

          <p className="mx-auto max-w-[760px] text-[15px] leading-[1.95] text-white/78">
            もしあなたが何度も空気に止められてきたのなら、
            それは道を外している証拠ではない。
            むしろ、群衆とは違う速度で
            まだ見えていない景色へ向かっている証拠だ。
            <br />
            <span className="text-white/92">
              個として立つとは、孤独を選ぶことではない。
              群衆の眠りより、自分の視界を信じることだ。
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}