// ===============================
//  LeBonRoomSP.jsx（文章密度強化 完全版）
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
      gsap.utils.toArray(".fade-up").forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 22,
            filter: "blur(0.2px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.78,
            ease: "cubic-bezier(0.22, 0.10, 0.25, 1)",
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

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    <main
      ref={containerRef}
      className="lb-root min-h-screen bg-[#050506] text-white"
    >
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden px-5 pt-32 pb-20">
        {/* 背景 */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.18]"
          style={{ backgroundImage: "url('/images/lebon/abstract-bg2.png')" }}
        />

        {/* 黒膜 */}
        <div className="absolute inset-0 bg-black/82" />

        {/* 光膜 */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 32%, rgba(212,175,55,0.10), transparent 72%)",
          }}
        />

        {/* TEXT */}
        <div
          className="
            relative z-20 fade-up text-left
            max-w-[90%]
            mt-[20vh]
            ml-[4vw]
          "
        >
          <p className="mb-6 text-[10px] tracking-[0.26em] text-white/40">
            CROWD PSYCHOLOGY — G. LE BON
          </p>

          <h1
            className="
              mb-5
              text-[20px]
              leading-[1.66]
              tracking-[0.20em]
              font-light
              opacity-[0.94]
            "
          >
            「思い出せ。<br />
            君の挑戦を笑ったのは、<br />
            挑戦しなかった人だ。」
          </h1>

          <p className="max-w-[21em] text-[13px] leading-[1.92] text-white/70">
            それは忠告ではなく、彼ら自身を守るための“反射”にすぎない。
            群衆はいつも、動く者を止めることで、自分たちの静止を正当化しようとする。
          </p>
        </div>
      </section>

      {/* 02-1 起源 */}
      <section className="lb-section px-5 py-20">
        <div className="fade-up mx-auto max-w-[680px]">
          <img src="/images/lebon/origin.png" className="lb-img mb-10" alt="" />

          <h2 className="lb-h2 mb-5 text-[22px] leading-[1.55]">
            思想の起源：崩れゆく<br />
            時代を見た少年
          </h2>

          <p className="lb-lead mb-6 text-[15px] leading-[1.95]">
            19世紀フランスは、革命と暴動が繰り返され、
            社会そのものが“感情”に揺れていた。
            それは単なる政治の不安定ではなく、
            世界の足場そのものが軋んでいるような時代だった。
          </p>

          <p className="lb-body mb-4 text-[14px] leading-[1.95]">
            人々は突然怒りに支配され、
            昨日まで称えられていた英雄を、
            翌日には裏切り者のように攻撃し始める。
            空気が変わるだけで、善悪の見え方まで反転してしまう。
          </p>

          <p className="lb-body mb-4 text-[14px] leading-[1.95]">
            少年ル・ボンの目に焼きついたのは、
            人間一人ひとりというより、
            人が集まった瞬間に立ち上がる
            “別の生き物”のような気配だった。
          </p>

          <p className="lb-body text-[14px] leading-[1.95]">
            その不可解な変質を前に、彼は確信する。
            <br />
            <span className="text-white/80">
              —— 群衆の中でこそ、人は本性をさらけ出す。
            </span>
          </p>
        </div>
      </section>

      {/* 02-2 文明の記録者 */}
      <section className="lb-section px-5 py-20">
        <div className="fade-up mx-auto max-w-[680px]">
          <img src="/images/lebon/explorer.png" className="lb-img mb-10" alt="" />

          <h2 className="lb-h2 mb-5 text-[22px] leading-[1.55]">
            科学者ではなく、<br />
            文明の記録者
          </h2>

          <p className="lb-body mb-4 text-[14px] leading-[1.95]">
            ル・ボンは医師であり、地理学者であり、探検家でもあった。
            だが彼の本質は、それらの肩書きよりも、
            文明の動きを“生のまま観察する者”だったと言ったほうが近い。
          </p>

          <p className="lb-body mb-4 text-[14px] leading-[1.95]">
            彼は土地を見ただけではない。
            人々が何を恐れ、何を信じ、
            どの瞬間に熱狂し、どの瞬間に残酷になるのかを見ていた。
          </p>

          <p className="lb-body mb-4 text-[14px] leading-[1.95]">
            文化が違っても、
            人間の“感情の動き方”は驚くほど似ていた。
            群れた瞬間、理性は薄れ、
            空気が個人の判断を上書きしていく。
          </p>

          <p className="lb-body text-[14px] leading-[1.95]">
            <span className="text-white/80">
              —— 文明が違っても、<br />
              人間の心理構造は同じなのか？
            </span>
          </p>
        </div>
      </section>

      {/* 02-3 英雄が悪魔に変わる瞬間 */}
      <section className="lb-section lb-dark px-5 py-20">
        <div className="fade-up mx-auto max-w-[680px]">
          <img
            src="/images/lebon/crowd-turn.png"
            className="lb-img mb-10"
            alt=""
          />

          <h2 className="lb-h2 mb-5 text-[22px] leading-[1.55]">
            英雄が悪魔に<br />
            変わる瞬間
          </h2>

          <p className="lb-body mb-4 text-[14px] leading-[1.95]">
            群衆の中では、感情が空気のように伝染する。
            誰かの怒りはすぐ隣の怒りを呼び、
            ひとつの不安は、あっという間に全体の確信へと変わっていく。
          </p>

          <p className="lb-body mb-4 text-[14px] leading-[1.95]">
            そこでは、個人なら選ばなかった言葉や暴力が、
            “みんながそうしている”というだけで正当化される。
            昨日まで英雄だった人間が、
            一夜にして悪魔へ塗り替えられるのは、
            事実が変わったからではない。空気が変わったからだ。
          </p>

          <p className="lb-body text-[14px] leading-[1.95]">
            <span className="text-white/80">
              —— 群衆は感情が集まり、
              一つの“生命体”になる。
            </span>
            <br />
            その生命体は、理性ではなく衝動で動く。
          </p>
        </div>
      </section>

      {/* 02-4 三要因 */}
      <section className="lb-section px-5 py-20">
        <div className="fade-up mx-auto max-w-[680px]">
          <img src="/images/lebon/factors2.png" className="lb-img mb-10" alt="" />

          <h2 className="lb-h2 mb-8 text-[22px] leading-[1.55]">
            群衆が理性を失う<br />
            三つの要因
          </h2>

          <div className="grid gap-6">
            <div className="lb-card px-4 py-5">
              <h3 className="mb-2 text-[14px]">① 匿名性の解放</h3>
              <p className="text-[13px] leading-[1.85] opacity-80">
                責任が曖昧になると、人は急に大胆になる。
                一人なら抑えていた衝動が、
                群れの中では簡単に解放されていく。
              </p>
            </div>

            <div className="lb-card px-4 py-5">
              <h3 className="mb-2 text-[14px]">② 感情の倍化</h3>
              <p className="text-[13px] leading-[1.85] opacity-80">
                感情は共有されると弱まるのではなく、むしろ増幅する。
                怒りも不安も熱狂も、
                周囲の反応を通じて何倍にも膨らんでいく。
              </p>
            </div>

            <div className="lb-card px-4 py-5">
              <h3 className="mb-2 text-[14px]">③ 思考の委任</h3>
              <p className="text-[13px] leading-[1.85] opacity-80">
                判断が「自分」ではなく「空気」へ委ねられる。
                その瞬間、個の意見は溶け、
                人は雰囲気に従うことで安心し始める。
              </p>
            </div>
          </div>

          <p className="lb-body mt-8 text-[14px] leading-[1.95]">
            昨日の英雄が今日の悪魔に変わるのは、
            この三つの力が重なったときだ。
            群衆の暴走は偶然ではなく、構造として起きている。
          </p>
        </div>
      </section>

      {/* 02-5 個の孤独 */}
      <section className="lb-section lb-dark px-5 py-20">
        <div className="fade-up mx-auto max-w-[680px]">
          <img
            src="/images/lebon/individual.png"
            className="lb-img mb-10"
            alt=""
          />

          <h2 className="lb-h2 mb-5 text-[22px] leading-[1.55]">
            群衆の中で、<br />
            個はなぜ孤独になるのか
          </h2>

          <p className="lb-body mb-4 text-[14px] leading-[1.95]">
            群衆は「平均」へ引き寄せる力が強い。
            同じ速度、同じ感情、同じ結論の中にいれば、
            人は自分で考えなくても済む。
            だから平均は、しばしば正しさよりも先に安心として選ばれる。
          </p>

          <p className="lb-body mb-4 text-[14px] leading-[1.95]">
            だからこそ、平均から外れた感性や速度を持つ者は、
            才能として見られる前に、まず“不安”として処理される。
            理解できないものは、魅力より先に脅威になる。
          </p>

          <ul className="lb-list mt-5 mb-8 text-[13px] leading-[1.9]">
            <li>理解できない速度は、脅威として扱われる。</li>
            <li>説明しても届かないのは、構造が違うから。</li>
            <li>群衆は変化を怖れ、その源を排除しようとする。</li>
          </ul>

          <p className="lb-body text-[14px] leading-[1.95]">
            個として立つ者が孤独なのは、
            間違っているからではない。
            群衆の眠りを、先に醒ましてしまったからだ。
          </p>
        </div>
      </section>

      {/* ENDING */}
      <section className="relative w-full min-h-[92vh] overflow-hidden">
        <img
          src="/images/lebon/ending1.png"
          className="absolute inset-0 z-0 h-full w-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 z-10 bg-black/68" />

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

        <div className="ending-reveal-sp relative z-50 mx-auto max-w-[680px] px-6 py-[22vh] text-center">
          <h2 className="mb-8 text-[20px] tracking-[0.20em] opacity-[0.96]">
            結論：個として立つということ
          </h2>

          <p className="mb-6 text-[15px] leading-[1.9] opacity-[0.88]">
            あなたが一歩動いた瞬間、
            <br />
            誰かの「動かなかった人生」を照らしてしまう。
          </p>

          <h3 className="my-10 text-[18px] leading-[1.9] font-light opacity-[0.96]">
            あなたの成功は、他者の“停滞”を
            <br />
            可視化する。
          </h3>

          <p className="mb-5 text-[13px] leading-[1.95] text-white/72">
            だから人は止める。批判する。境界を引こうとする。
            —— それはあなたが間違っているからではない。
            あなたが「動いてしまった」からだ。
          </p>

          <p className="mb-5 text-[13px] leading-[1.95] text-white/68">
            群衆はいつも、動かないことを正しさに見せようとする。
            変わらないことを常識と呼び、
            先に進む者にだけ慎重さや協調性を求める。
          </p>

          <p className="text-[13px] leading-[1.95] text-white/78">
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