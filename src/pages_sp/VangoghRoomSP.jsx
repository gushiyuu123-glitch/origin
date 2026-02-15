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
          duration: 320,
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
      <section className="vg-section relative min-h-[100svh] flex items-center justify-center text-center px-6">
        <img
          src="/images/vg-selfportrait.png"
          className="vg-bg absolute inset-0 w-full h-full object-cover object-[50%_30%] opacity-45"
          alt=""
        />

        <div className="vg-vignette absolute inset-0 z-10 bg-gradient-to-b from-black/65 via-black/45 to-black/85" />

        <div className="relative z-30 max-w-[92vw] fade-up">
          <h1 className="text-[36px] tracking-[0.18em] font-light">
            Van&nbsp;Gogh
          </h1>

          <h2 className="mt-5 text-[11px] tracking-[0.45em] text-white/50 font-light">
            ヴィンセント・ヴァン・ゴッホ
          </h2>

          <div className="mt-10 mb-12 w-[60px] h-px bg-white/20 mx-auto" />

          <p className="leading-[2.65] text-white/88 text-[15px] font-light">
            1853年、オランダに生まれる。<br /><br />
            画家になる前、<br />
            彼は画商であり、聖職志願者であり、<br />
            何度も道を変えた人間だった。<br /><br />
            絵を描き始めたのは27歳。<br /><br />
            遅すぎると言われた出発だった。<br /><br />
            だが――<br /><br />
            色は、すでに内側で燃えていた。
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
            牧師の家に生まれる。<br /><br />
            その一年前、同じ名の兄は死産していた。<br /><br />
            彼の誕生日には、<br />
            墓石に刻まれた同じ名があった。<br /><br />
            世界は加速し始めていた。<br />
            鉄道、都市、産業。<br /><br />
            しかし彼は、<br />
            森と雲のほうを見ていた。
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
            画商を辞め、<br />
            聖職を志し、<br />
            教会の訓練校にも入った。<br /><br />
            だが、どこにも長くはいられなかった。<br /><br />
            理想が強すぎた。<br />
            世界と噛み合わなかった。<br /><br />
            そして彼は、<br />
            ベルギー南部ボリナージュへ向かう。<br /><br />
            地下深く、光の届かない炭鉱地帯。<br /><br />
            伝道師として働きながら、<br />
            労働者たちと同じ粗末な部屋に住み、<br />
            自分の持ち物を分け与えた。<br /><br />
            だが教会は、<br />
            それを「過度な献身」と判断する。<br /><br />
            任務は解かれ、<br />
            彼はまた職を失う。<br /><br />
            何度目かの挫折だった。<br /><br />
            だが――<br /><br />
            地上へ戻ったとき、<br />
            彼の信仰は、かたちを変えていた。<br /><br />
            人を救うのではない。<br />
            世界を描く。<br /><br />
            ここから、<br />
            絵が始まる。
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
            1888年、南フランス・アルルへ移り住む。<br /><br />
            光は鋭く、空は深く、風は乾いていた。<br />
            北の灰色とはまるで違う世界だった。<br /><br />
            彼は「黄色の家」を借り、<br />
            芸術家たちの共同体を夢見る。<br /><br />
            ここで色彩は爆発する。<br />
            ひまわりは燃えるように咲き、<br />
            壁は太陽のように塗られた。<br /><br />
            絵はもはや風景ではない。<br />
            内側の熱そのものだった。
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

          <p className="leading-[2.65] text-white/88 text-[15px] font-light px-1">
            アルルの冬は、思ったよりも冷たかった。<br /><br />
            黄色の家には、もう一人の画家がいた。<br />
            ポール・ゴーギャン。<br /><br />
            彼は夢見ていた。<br />
            南仏に芸術家の共同体をつくることを。<br />
            孤独ではなく、対話の中で生まれる絵を。<br /><br />
            しかし、理想は長くは続かなかった。<br />
            議論は衝突へ変わり、衝突は沈黙へ変わる。<br /><br />
            1888年12月23日、夜。<br />
            彼は自らの左耳の一部を切り落とす。<br /><br />
            理由は、いまも完全には分からない。<br />
            発作だったのか、絶望だったのか、<br />
            それとも、崩れゆく夢への最後の抵抗だったのか。<br /><br />
            血に染まった夜のあと、彼は病院へ運ばれる。<br /><br />
            だが――<br />
            その数週間後、彼はまた筆を取っていた。<br />
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

          <p className="leading-[2.7] text-white/88 text-[15px] font-light px-1">
            彼は自ら、療養施設の門をくぐった。<br /><br />
            南フランス、サン＝レミ。<br />
            石造りの壁に囲まれた静かな場所だった。<br /><br />
            発作は突然訪れ、視界を歪ませた。<br />
            意識は揺れ、世界はほどける。<br /><br />
            しかし――<br /><br />
            その窓の外には、空があった。<br />
            糸杉が揺れ、月が滲み、<br />
            夜は、青く燃えていた。<br /><br />
            彼は、閉ざされた場所で描き続けた。<br />
            苦しみの只中で、<br />
            世界の震えを、そのままキャンバスに刻んだ。
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
            星は燃え、<br />
            空は渦を巻いた。<br /><br />
            それは風景だった。<br />
            だが同時に、<br />
            彼の内部でもあった。<br /><br />
            世界は壊れていない。<br />
            ただ、揺れているだけだ。
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

      フランス、オーヴェル。<br />
      麦畑の中で銃声が響く。<br /><br />

      二日後、<br />
      弟テオに見守られながら息を引き取る。<br /><br />

      37歳。<br /><br />

      生前、評価はほとんどなかった。<br /><br />

      だが――<br /><br />

      色は死ななかった。<br /><br />

      彼の青は、<br />
      いまも世界に残っている。

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
            兄を信じ続けた、ただ一人の存在。<br /><br />
            経済的にも、精神的にも、<br />
            炎が消えないよう支え続けた。<br /><br />
            兄の死から半年後、<br />
            テオもまたこの世を去る。<br /><br />
            いま、二人は同じ墓に眠る。<br /><br />
            色は、二人で守ったものだった。
          </p>
        </div>
      </section>
    </div>
  );
}
