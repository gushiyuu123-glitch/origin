import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./lebon.css";

gsap.registerPlugin(ScrollTrigger);

export default function LeBonRoom() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".lb-section");

      sections.forEach((sec) => {
        const target = sec.querySelector(".fade-up");
        if (!target) return;

        gsap.fromTo(
          target,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 78%",
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
      {/* ================= HERO ================= */}
      <section className="lb-section lb-hero min-h-screen flex items-center justify-center px-10">
        <div className="fade-up max-w-[880px] text-center">
          <p className="lb-tag tracking-[0.32em] text-[12px] text-white/50 mb-4">
            CROWD PSYCHOLOGY
          </p>
          <h1 className="lb-title text-[44px] tracking-[0.32em] font-light mb-6">
            LE BON
          </h1>
          <p className="lb-sub text-[14px] md:text-[15px] leading-relaxed text-white/70">
            群衆は愚かになる。<br className="hidden md:block" />
            そのとき、個の思考と感性はどこへ追いやられるのか。
          </p>
        </div>
      </section>

      {/* ================= 01：群衆の闇 ================= */}
      <section className="lb-section lb-dark px-6 md:px-12 py-24 md:py-32">
        <div className="fade-up max-w-[820px] mx-auto">
          <h2 className="lb-h2">群衆はなぜ愚かになるのか</h2>
          <p className="lb-lead">
            個人としては理性的であっても、人は群衆の中で「思考」を手放す。
            ル・ボンは、この瞬間に起きる心理の変化を執拗なまでに観察した。
          </p>
          <div className="lb-grid">
            <div className="lb-card">
              <h3>思考の放棄</h3>
              <p>
                群衆にいるとき、人は自分で考えているつもりで「全体の空気」に従う。
                判断の主体が、自分から外側へずれる。
              </p>
            </div>
            <div className="lb-card">
              <h3>感情の感染</h3>
              <p>
                怒り・不安・嫉妬は、論理よりも速く伝染する。
                ひとりの不安が、あっという間に「みんなの正義」に変換される。
              </p>
            </div>
            <div className="lb-card">
              <h3>責任の希薄化</h3>
              <p>
                「みんなで決めた」ことは、誰も責任を取らない。
                この構造が、暴走と排除を加速させる。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 02：個の孤独 ================= */}
      <section className="lb-section px-6 md:px-12 py-24 md:py-32">
        <div className="fade-up max-w-[820px] mx-auto">
          <h2 className="lb-h2">個はなぜ孤独になるのか</h2>
          <p className="lb-lead">
            群衆が「平均」に向かっていくほど、その外側にいる個の存在は、
            理解ではなく「不安」の対象になる。
          </p>
          <ul className="lb-list">
            <li>思考速度が違う人間は、説明されても理解されない。</li>
            <li>才能は「羨望」と「不安」を同時に発火させる。</li>
            <li>群れは変化を嫌い、変化を起こす人間を排除しようとする。</li>
          </ul>
        </div>
      </section>

      {/* ================= 03：干渉・嫉妬・攻撃 ================= */}
      <section className="lb-section lb-dark px-6 md:px-12 py-24 md:py-32">
        <div className="fade-up max-w-[820px] mx-auto">
          <h2 className="lb-h2">干渉と嫉妬の構造</h2>
          <p className="lb-lead">
            ル・ボンの視点では、「干渉」「嫉妬」「攻撃」は、
            すべて群衆が自分の安心を守るための自己防衛である。
          </p>
          <div className="lb-grid">
            <div className="lb-card">
              <h3>成長へのブレーキ</h3>
              <p>
                動き出した個を引き戻そうとする力は、「置いていかれる不安」から生まれる。
                止めたいのは、相手ではなく自分の恐怖だ。
              </p>
            </div>
            <div className="lb-card">
              <h3>才能への攻撃</h3>
              <p>
                群衆は、自分には持てない感性や速度を前にすると、
                「評価」ではなく「否定」によって距離を取ろうとする。
              </p>
            </div>
            <div className="lb-card">
              <h3>心配という名の支配</h3>
              <p>
                「あなたのため」という言葉で近づく干渉は、
                多くの場合、自分の安心のために相手を同じ場所に縛り付けたい欲求だ。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 04：裕人との接続 ================= */}
      <section className="lb-section px-6 md:px-12 py-24 md:py-32">
        <div className="fade-up max-w-[820px] mx-auto">
          <h2 className="lb-h2">それでも、個として立つ</h2>
          <p className="lb-lead">
            ル・ボンの群衆心理は、ただ世界の暗さを暴くための理論ではない。
            群衆の構造を理解したうえで、なお個として立つための地図でもある。
          </p>
          <p className="lb-body">
            「動く人間は攻撃される」という前提を知ったとき、
            攻撃そのものは止まらないかもしれない。
            それでも、自分の中の速度と世界観を疑わずに進むことはできる。
          </p>
          <p className="lb-body">
            群衆の中で孤独になることは、「間違い」の証拠ではない。
            それは、見ている深さと、扱っている構造の違いの証拠だ。
          </p>
        </div>
      </section>
    </main>
  );
}