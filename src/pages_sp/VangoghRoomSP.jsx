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

      if (swirlRef.current) {
        gsap.set(swirlRef.current, { opacity: 0.2, scale: 0.9 });

        gsap.to(swirlRef.current, {
          rotate: 360,
          duration: 400,
          repeat: -1,
          ease: "none",
        });

        gsap.to(swirlRef.current, {
          opacity: 0.42,
          scale: 1.06,
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
      className="vangogh-room relative w-full overflow-hidden bg-[#0f1016] text-white"
    >
      {/* ================= HERO ================= */}
      <section
        className="
          vg-section
          relative
          min-h-[108svh]
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
        <img
          src="/images/vg-selfportrait.png"
          className="
            vg-bg
            absolute inset-0
            h-full w-full
            object-cover
            object-[50%_22%]
            opacity-40
          "
          alt="Vincent van Gogh self portrait"
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/72 via-black/48 to-black/92" />

        <div className="relative z-30 max-w-[92vw] fade-up">
          <p className="mb-3 text-[10px] tracking-[0.65em] text-white/42 font-light">
            ORIGIN 第一章
          </p>

          <p
            className="mb-6 text-[11px] tracking-[0.46em] font-light"
            style={{
              color: "rgba(255,218,110,0.82)",
              textShadow: "0 0 10px rgba(255,218,110,0.26)",
            }}
          >
            色彩の狂人
          </p>

          <h1 className="text-[40px] tracking-[0.18em] font-light leading-[1.06]">
            Van&nbsp;Gogh
          </h1>

          <p className="mt-4 text-[11px] tracking-[0.52em] text-white/46 font-light">
            ヴィンセント・ヴァン・ゴッホ
          </p>

          <div className="mt-8 mb-10 mx-auto h-px w-[56px] bg-white/20" />

          <p className="text-[15px] leading-[2.28] text-white/90 font-light">
            彼は、何度も道を外れた。<br />
            画商。聖職志願者。教師。<br />
            どこにも、居場所はなかった。<br /><br />

            絵を描き始めたのは27歳。<br />
            遅すぎると言われた出発。<br /><br />

            <span className="text-[17px] tracking-[0.03em] text-white">
              色は、内側で暴れていた。
            </span>
            <br /><br />

            世界をそのままでは、受け取れなかった。<br />
            光も、空も、麦畑も、<br />
            彼の中で別の強度に変わっていった。<br /><br />

            描かなければ、壊れてしまう。<br />
            それが衝動だった。
          </p>
        </div>
      </section>

      {/* ================= 幼少期 ================= */}
      <section className="vg-section relative min-h-[100svh] flex items-center justify-center px-6 text-center">
        <img
          src="/images/vg-fields.png"
          className="vg-bg absolute inset-0 h-full w-full object-cover object-[50%_60%] opacity-40"
          alt=""
        />

        <div className="vg-vignette absolute inset-0 z-10" />

        <div className="relative z-30 max-w-[92vw] fade-up">
          <h2 className="text-[28px] tracking-[0.22em] font-light">幼少期</h2>

          <p className="mt-3 text-[11px] tracking-[0.40em] text-white/50 font-light">
            1853 — 1869
          </p>

          <div className="mt-9 mb-12 mx-auto h-px w-[60px] bg-white/20" />

          <p className="text-[15px] leading-[2.72] text-white/88 font-light">
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
      <section className="vg-section relative min-h-[100svh] flex items-center justify-center px-6 text-center">
        <img
          src="/images/vg-borinage.png"
          className="vg-bg absolute inset-0 h-full w-full object-cover object-[50%_60%] opacity-42 brightness-[0.88] z-0"
          alt=""
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/76 via-black/60 to-black/88" />

        <div className="relative z-30 max-w-[92vw] fade-up">
          <h2 className="text-[28px] tracking-[0.22em] font-light text-white/92">
            炭鉱地帯
          </h2>

          <p className="mt-4 text-[11px] tracking-[0.40em] text-white/50 font-light">
            1879　BORINAGE
          </p>

          <div className="mt-8 mb-10 mx-auto h-px w-[56px] bg-white/20" />

          <p className="text-[15px] leading-[2.72] text-white/88 font-light">
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

            <span className="text-[17px] tracking-[0.03em] text-white">
              信仰は、かたちを変えた。
            </span>
            <br /><br />

            人を救うのではない。<br />
            世界を描く。<br /><br />

            ここから、絵が始まる。
          </p>
        </div>
      </section>

      {/* ================= アルル ================= */}
      <section className="vg-section relative min-h-[100svh] flex items-center justify-center px-6 text-center overflow-hidden">
        <img
          src="/images/vg-arles.png"
          className="vg-bg absolute inset-0 h-full w-full object-cover object-[50%_55%] opacity-50 brightness-[1.02] contrast-[1.08] z-0"
          alt=""
        />

        <div
          className="absolute inset-0 z-10"
          style={{
            background: `
              radial-gradient(circle at 50% 45%, rgba(255,200,70,0.15) 0%, transparent 55%),
              linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.72))
            `,
          }}
        />

        <div className="relative z-30 max-w-[92vw] fade-up text-center">
          <h2 className="text-[28px] tracking-[0.22em] font-light">アルル</h2>

          <h3 className="mt-3 text-[11px] tracking-[0.40em] text-yellow-200/70 font-light">
            1888年　南フランス
          </h3>

          <div className="mt-8 mb-10 mx-auto h-px w-[60px] bg-yellow-200/30" />

          <p className="text-[15px] leading-[2.72] text-white/90 font-light">
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

            <span className="text-[17px] tracking-[0.03em] text-white">
              絵は、風景ではなかった。
            </span>
            <br /><br />

            内側の熱そのものだった。<br />
            世界を描くというより、<br />
            世界を再構築していた。
          </p>
        </div>
      </section>

      {/* ================= 耳事件 ================= */}
      <section className="vg-section relative min-h-[100svh] flex items-center justify-center px-6 py-24 text-center">
        <img
          src="/images/vg-ear.png"
          className="vg-bg absolute inset-0 h-full w-full object-cover object-[50%_55%] opacity-40 brightness-[0.75] contrast-[1.08] z-0"
          alt=""
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/82 via-black/62 to-black/92" />

        <div className="relative z-30 max-w-[92vw] mx-auto fade-up">
          <h2 className="text-[26px] tracking-[0.24em] font-light text-white/95">
            耳事件
          </h2>

          <p className="mt-5 text-[11px] tracking-[0.40em] text-white/55 font-light">
            1888年12月 — アルル
          </p>

          <div className="mt-10 mb-12 mx-auto h-px w-[60px] bg-white/20" />

          <p className="text-[15px] leading-[2.72] text-white/88 font-light">
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

            <span className="text-[17px] tracking-[0.03em] text-white">
              色だけは、止まらなかった。
            </span>
            <br /><br />

            数週間後、彼は再び筆を握る。<br />
            光は、まだ彼の内部で燃えていた。
          </p>
        </div>
      </section>

      {/* ================= 精神病院 ================= */}
      <section className="vg-section relative min-h-[100svh] flex items-center justify-center px-6 py-28 text-center">
        <img
          src="/images/vg-asylum.png"
          className="vg-bg absolute inset-0 h-full w-full object-cover object-[50%_50%] opacity-38 brightness-[0.7] contrast-[1.05] z-0"
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

          <div className="mt-10 mb-12 mx-auto h-px w-[60px] bg-white/15" />

          <p className="text-[15px] leading-[2.74] text-white/88 font-light">
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

            <span className="text-[17px] tracking-[0.03em] text-white">
              狂気ではない。観測だった。
            </span>
          </p>
        </div>
      </section>

      {/* ================= 星月夜 ================= */}
      <section className="vg-section star-section relative min-h-[100svh] flex items-center justify-center px-6 text-center overflow-hidden">
        <img
          src="/images/vg-starrynight1.png"
          className="vg-bg absolute inset-0 h-full w-full object-cover object-[50%_45%] opacity-50"
          alt=""
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/66 via-black/42 to-black/86" />

        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div
            ref={swirlRef}
            className="aspect-square w-[86vw] max-w-[520px] rounded-full"
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

          <div className="mt-10 mb-12 mx-auto h-px w-[60px] bg-white/15" />

          <p className="text-[15px] leading-[2.82] text-white/92 font-light">
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

            <span className="text-[17px] tracking-[0.03em] text-white">
              これは風景ではない。感情の爆発だ。
            </span>
            <br /><br />

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
      <section className="vg-section relative min-h-[100svh] flex items-center justify-center px-6 text-center overflow-hidden">
        <img
          src="/images/vg-last.png"
          className="vg-bg absolute inset-0 h-full w-full object-cover object-[50%_50%] opacity-40"
          alt="Wheatfield with Crows"
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/78 via-black/55 to-black/90" />

        <div className="relative z-30 max-w-[92vw] fade-up py-24">
          <h2 className="text-[28px] tracking-[0.22em] font-light">最期</h2>

          <div className="mt-10 mb-12 mx-auto h-px w-[56px] bg-white/20" />

          <p className="text-[15px] leading-[2.74] text-white/92 font-light">
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

            <span className="text-[17px] tracking-[0.03em] text-white">
              色は、死ななかった。
            </span>
            <br /><br />

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
      <section className="vg-section relative min-h-[100svh] flex items-center justify-center px-6 text-center">
        <img
          src="/images/vg-theo.png"
          className="vg-bg absolute inset-0 h-full w-full object-cover object-[50%_45%] opacity-38"
          alt=""
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/88" />

        <div className="relative z-30 max-w-[92vw] fade-up py-24">
          <h2 className="text-[28px] tracking-[0.22em] font-light">テオ</h2>

          <div className="mt-10 mb-12 mx-auto h-px w-[60px] bg-white/15" />

          <p className="text-[15px] leading-[2.8] text-white/90 font-light">
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
              “He put his life at the service of his art.”
            </span>
            <br />
            <span className="text-[14px] text-white/62 tracking-[0.04em]">
              （彼は、自分の芸術のために命を捧げたのだと思います。）
            </span>
            <br /><br />

            兄の死から半年後、<br />
            テオもまたこの世を去る。<br /><br />

            だが、手紙は消えなかった。<br /><br />

            <span className="text-[17px] tracking-[0.03em] text-white">
              ゴッホが“何を見ていたのか”は、テオが残した。
            </span>
            <br /><br />

            いま、二人は同じ墓に眠る。<br /><br />

            色は、ひとりでは守れなかった。<br />
            それは、二人の仕事だった。
          </p>
        </div>
      </section>
    </div>
  );
}