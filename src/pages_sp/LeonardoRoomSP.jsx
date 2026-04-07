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
      className="relative w-full overflow-hidden bg-[#0c0b08] text-[#e6dfd2] tracking-[0.02em]"
      style={{
        fontFeatureSettings: '"liga" 1',
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* ================= HERO (SP) ================= */}
      <section className="ld-sec relative min-h-[100svh] flex items-center justify-center text-center px-[6vw] overflow-hidden">
        <img
          src={IMG.hero}
          className="ld-bg absolute inset-0 h-full w-full object-cover object-[center_38%] opacity-26 blur-[0.4px]"
          alt=""
        />

        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(212,175,55,0.35) 1px, transparent 1px)",
            backgroundSize: "140px 140px",
          }}
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/72 via-black/55 to-black/85" />

        <div
          className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.45)_65%,rgba(0,0,0,0.65)_100%)]"
        />

        <div className="absolute inset-[5vw] z-20 border border-white/10 pointer-events-none" />

        <div className="relative z-30 max-w-[92vw] ld-fade py-[20vh]">
          <p className="mb-6 text-[12px] tracking-[0.6em] text-white/50 font-light">
            ORIGIN 第二章
          </p>

          <h2 className="text-[32px] tracking-[0.26em] font-light text-[#f3f1ea]">
            構造の解体者
          </h2>

          <p className="mt-5 text-[11px] tracking-[0.55em] text-white/35 font-light">
            LEONARDO DA VINCI
          </p>

          <div className="my-12 mx-auto h-px w-[60px] bg-[#d4af37]/50" />

          <p className="text-[16px] leading-[3.05] font-light text-[#e6dfd2]/95">
            彼は、万能だった。<br />
            ――そう呼ばれる前に、<br />
            <span className="text-[19px] tracking-[0.05em] text-white">
              止まれない観察者
            </span>
            <br />
            だった。<br /><br />

            絵を描きながら、解剖をした。<br />
            機械を設計しながら、水の流れを記録した。<br /><br />

            モナ・リザの微笑みの裏には、<br />
            筋肉と骨格の理解があった。<br /><br />

            最後の晩餐の遠近法の奥には、<br />
            幾何学と光の計算があった。<br /><br />

            芸術家ではない。<br />
            科学者でもない。<br /><br />

            世界を分解し、<br />
            再構築せずにはいられない人間だった。
          </p>

          <div className="mt-20 text-[10px] tracking-[0.35em] text-white/60">
            <span className="text-[#d4af37]/90">WHY?</span>
          </div>
        </div>
      </section>

      {/* ================= YOUTH (SP) ================= */}
      <section className="ld-sec relative min-h-[100svh] flex items-center justify-center text-center px-[6vw] overflow-hidden">
        <img
          src={IMG.youth}
          className="ld-bg absolute inset-0 h-full w-full object-cover opacity-24 blur-[0.4px]"
          alt=""
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/78 via-black/62 to-black/88" />

        <div
          className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.45)_70%,rgba(0,0,0,0.65)_100%)]"
        />

        <div className="absolute inset-[5vw] z-20 border border-white/10 pointer-events-none" />

        <div className="relative z-30 max-w-[92vw] ld-fade py-[22vh]">
          <p className="mb-5 text-[10px] tracking-[0.42em] text-white/45 font-light">
            1452 / VINCI
          </p>

          <h2 className="text-[clamp(28px,7.5vw,40px)] tracking-[0.18em] leading-[1.25] font-light text-[#f2efe8]">
            少年は、<br />
            王道に入れなかった
          </h2>

          <div className="ld-line my-10 mx-auto h-px w-[70px] bg-[#d4af37]/40" />

          <p className="text-[16px] leading-[3.0] font-light text-[#e6dfd2]/95">
            彼は私生児として生まれた。<br />
            名前はあっても、家系図には刻まれない。<br />
            正規の大学へ進む道は閉ざされ、<br />
            ラテン語教育も、完全ではなかった。<br /><br />

            学問の“王道”に入れない。<br />
            権威の言葉を借りられない。<br /><br />

            だが──<br />
            <span className="text-[19px] tracking-[0.05em] text-white">
              それは、自由でもあった。
            </span>
            <br /><br />

            既存の理論に縛られず、<br />
            誰の体系にも従わず、<br />
            ただ、目の前の現象だけを見る。<br /><br />

            風の流れ、光の屈折、筋肉の構造、<br />
            鳥の羽ばたき、水の渦。<br /><br />

            彼は本を閉じ、<br />
            世界を開いた。
          </p>

          <p className="mt-20 text-[10px] tracking-[0.36em] text-white/55">
            OBSERVE → STRUCTURE
          </p>
        </div>
      </section>

      {/* ================= WORKSHOP (SP) ================= */}
      <section className="ld-sec relative min-h-[100svh] flex items-center justify-center text-center px-[6vw] overflow-hidden">
        <img
          src={IMG.workshop}
          className="ld-bg absolute inset-0 h-full w-full object-cover opacity-22 blur-[0.5px]"
          alt=""
        />

        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.18) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/62 to-black/88" />

        <div
          className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.45)_65%,rgba(0,0,0,0.65)_100%)]"
        />

        <div className="absolute inset-[5vw] z-20 border border-white/10 pointer-events-none" />

        <div className="relative z-30 max-w-[92vw] ld-fade py-[22vh]">
          <h2 className="text-[clamp(28px,7.5vw,40px)] tracking-[0.18em] leading-[1.25] font-light text-[#f3f1ea]">
            絵が、入口だった
          </h2>

          <div className="ld-line my-10 mx-auto h-px w-[70px] bg-[#d4af37]/45" />

          <p className="text-[15px] leading-[2.95] font-light text-[#e6dfd2]/96">
            14歳、ヴェロッキオの工房へ入る。<br />
            絵画、彫刻、建築、機械、舞台装置。<br />
            そこは芸術と技術が混ざり合う場所だった。<br /><br />

            本来は、絵を学ぶ場所。<br />
            だが彼は、描くことだけに留まらなかった。<br /><br />

            <span className="text-[18px] tracking-[0.05em] text-white">
              描くには、理解がいる。
            </span>
            <br /><br />

            馬を描くなら、筋肉を知る。<br />
            川を描くなら、水の流れを知る。<br />
            光を描くなら、光の仕組みを知る。<br /><br />

            絵は入口だった。<br />
            彼が欲していたのは、<br />
            形の奥にある“構造”だった。
          </p>

          <p className="mt-16 text-[10px] tracking-[0.32em] text-white/50">
            ART → STRUCTURE
          </p>
        </div>
      </section>

      {/* ================= NOTES (SP) ================= */}
      <section className="ld-sec relative min-h-[100svh] flex items-center justify-center text-center px-[6vw] overflow-hidden">
        <img
          src={IMG.notes}
          className="ld-bg absolute inset-0 h-full w-full object-cover object-[center_40%] opacity-20 md:scale-[1.02]"
          alt=""
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/78 via-black/58 to-black/88" />

        <div
          className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.4)_65%,rgba(0,0,0,0.6)_100%)]"
        />

        <div
          className="absolute inset-0 z-20 opacity-[0.035] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: "url('/images/leonardo/paper-texture.png')",
            backgroundSize: "cover",
          }}
        />

        <div className="absolute inset-[5vw] z-20 border border-white/10 pointer-events-none" />

        <div className="relative z-30 max-w-[92vw] ld-fade py-[22vh]">
          <h2 className="text-[clamp(28px,7.5vw,40px)] tracking-[0.2em] leading-[1.25] font-light text-[#f3f1ea]">
            観察しか、信じられなかった
          </h2>

          <div className="ld-line my-10 mx-auto h-px w-[70px] bg-[#d4af37]/45" />

          <p className="text-[15px] leading-[2.98] font-light text-[#e6dfd2]/96">
            本は引用できる。<br />
            権威は借りられる。<br />
            だが彼には、そのどちらもなかった。<br /><br />

            だから、見るしかなかった。<br />
            世界そのものを。<br /><br />

            彼のノートは日記ではない。<br />
            現実を捕まえるための、実験装置だった。<br /><br />

            図解する。測る。分解する。<br />
            逆さに書く。描き直す。<br />
            疑い、確かめ、また疑う。<br /><br />

            <span className="text-[18px] tracking-[0.05em] text-white">
              経験だけが、教師だった。
            </span>
          </p>

          <p className="mt-16 text-[10px] tracking-[0.32em] text-white/50">
            OBSERVE → VERIFY → TRUTH
          </p>
        </div>
      </section>

      {/* ================= ANATOMY (SP) ================= */}
      <section className="ld-sec relative min-h-[100svh] flex items-center justify-center text-center px-[6vw] overflow-hidden">
        <img
          src={IMG.anatomy}
          className="ld-bg absolute inset-0 h-full w-full object-cover opacity-22 blur-[0.6px]"
          alt=""
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/65 to-black/90" />

        <div
          className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.55)_65%,rgba(0,0,0,0.75)_100%)]"
        />

        <div className="absolute top-[8vh] left-1/2 z-20 h-px w-[82vw] -translate-x-1/2 bg-[#d4af37]/18" />

        <div className="absolute inset-[5vw] z-20 border border-white/10 pointer-events-none" />

        <div className="relative z-30 max-w-[92vw] ld-fade py-[22vh]">
          <h2 className="text-[clamp(28px,7.5vw,40px)] tracking-[0.22em] leading-[1.25] font-light text-[#f3f1ea]">
            夜の解剖
          </h2>

          <div className="ld-line my-10 mx-auto h-px w-[70px] bg-[#d4af37]/45" />

          <p className="text-[16px] leading-[3.02] font-light text-[#e6dfd2]/95">
            彼は夜、死体を解剖した。<br />
            当時、それは禁忌だった。<br /><br />

            誰もいない時間。<br />
            冷たい石の上。<br />
            ひらかれた身体。<br /><br />

            皮膚の下にある秩序を、<br />
            彼は探していた。<br /><br />

            <span className="text-[18px] tracking-[0.05em] text-white">
              正確に、描きたかった。
            </span>
            <br /><br />

            美を描くために、<br />
            美を壊した。<br /><br />

            感情ではなく、構造。<br />
            生命の裏側から、“生”を立ち上げようとした。
          </p>

          <p className="mt-20 text-[10px] tracking-[0.36em] text-white/55">
            DISSECT → UNDERSTAND → CREATE
          </p>
        </div>
      </section>

      {/* ================= MONA LISA (SP) ================= */}
      <section className="ld-sec relative min-h-[100svh] flex items-center justify-center text-center px-[6vw] overflow-hidden">
        <img
          src={IMG.mona}
          className="ld-bg absolute inset-0 h-full w-full object-cover object-[center_42%] opacity-22 md:scale-[1.02]"
          alt=""
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/68 via-black/50 to-black/82" />

        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.42) 65%, rgba(0,0,0,0.65) 100%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 44%, rgba(212,175,55,0.28) 0%, transparent 65%)",
          }}
        />

        <div className="absolute inset-[5vw] z-20 border border-white/10 pointer-events-none" />

        <div className="relative z-30 max-w-[92vw] ld-fade py-[24vh]">
          <h2 className="text-[clamp(30px,8vw,42px)] tracking-[0.24em] leading-[1.22] font-light text-[#f4f1ea]">
            モナ・リザ
          </h2>

          <div className="ld-line my-12 mx-auto h-px w-[80px] bg-[#d4af37]/45" />

          <p className="text-[16px] leading-[3.08] font-light text-[#e6dfd2]/95">
            彼女は、笑っているのか。<br />
            それとも、笑っていないのか。<br /><br />

            答えは、見る者の目に委ねられる。<br /><br />

            彼は何年も、この一枚を手放さなかった。<br />
            塗り重ねる。溶かす。削る。戻す。<br />
            そしてまた、疑う。<br /><br />

            <span className="text-[18px] tracking-[0.05em] text-white">
              曖昧さは、偶然ではない。
            </span>
            <br /><br />

            口元の輪郭をぼかし、<br />
            光を層にし、<br />
            境界を溶かす。<br /><br />

            感情を描いたのではない。<br />
            “知覚そのもの”を設計した。
          </p>

          <p className="mt-20 text-[10px] tracking-[0.36em] text-white/55">
            BLUR → AMBIGUITY → CONTROL
          </p>
        </div>
      </section>

      {/* ================= LAST SUPPER (SP PEAK) ================= */}
      <section className="ld-sec ld-peak relative min-h-[100svh] flex items-center justify-center text-center px-[6vw] overflow-hidden">
        <img
          src={IMG.supper}
          className="ld-bg absolute inset-0 h-full w-full object-cover opacity-24"
          alt=""
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/78 via-black/58 to-black/90" />

        <div
          className="absolute inset-0 opacity-[0.18] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.52) 0%, transparent 60%)",
          }}
        />

        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.7) 100%)",
          }}
        />

        <div className="absolute inset-[5vw] z-20 border border-white/10 pointer-events-none" />

        <div className="relative z-30 max-w-[92vw] ld-fade py-[24vh]">
          <p className="mb-5 text-[10px] tracking-[0.48em] text-[#d4af37]/75 font-light">
            PEAK / SPACE CONTROL
          </p>

          <h2 className="text-[clamp(30px,8vw,44px)] tracking-[0.26em] leading-[1.15] font-light text-[#f4f1ea]">
            最後の晩餐
          </h2>

          <div className="ld-line my-12 mx-auto h-px w-[90px] bg-[#d4af37]/65" />

          <p className="text-[16px] leading-[3.08] font-light text-[#e6dfd2]/97">
            「この中に、裏切り者がいる。」<br /><br />

            その一言で、空間は裂けた。<br /><br />

            感情は爆発する。<br />
            手は上がり、身体は傾き、ざわめきが走る。<br /><br />

            だが――<br />
            <span className="text-[19px] tracking-[0.06em] text-white">
              構造は、揺れない。
            </span>
            <br /><br />

            すべての線は、キリストへ。<br />
            すべての視線は、中心へ。<br /><br />

            彼は物語を描いたのではない。<br />
            空間を支配した。<br /><br />

            しかし彼は、また実験した。<br />
            伝統的なフレスコを拒み、独自の技法を試す。<br />
            その結果、絵は早く傷んだ。<br /><br />

            完璧な構造でも、物質は裏切る。<br />
            それでも彼は、構造を選んだ。
          </p>

          <p className="mt-16 text-[10px] tracking-[0.34em] text-white/55">
            CHAOS → CENTER → STRUCTURE
          </p>
        </div>
      </section>

      {/* ================= INTEGRATION / FATE (SP) ================= */}
      <section className="ld-sec relative min-h-[100svh] flex items-center justify-center text-center px-[6vw] overflow-hidden">
        <img
          src={IMG.geometry}
          className="ld-bg absolute inset-0 h-full w-full object-cover opacity-18 blur-[0.4px]"
          alt=""
        />

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/78 via-black/60 to-black/88" />

        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        <div className="absolute inset-[5vw] z-20 border border-white/10 pointer-events-none" />

        <div className="relative z-30 max-w-[92vw] ld-fade py-[24vh]">
          <h2 className="text-[clamp(30px,8vw,46px)] tracking-[0.3em] leading-[1.15] font-light text-[#f4f1ea]">
            未完成という運命
          </h2>

          <div className="ld-line my-14 mx-auto h-px w-[100px] bg-[#d4af37]/45" />

          <p className="text-[16px] leading-[3.16] font-light text-[#e6dfd2]/97">
            絵画。解剖学。工学。幾何学。<br />
            彼にとって、それらは分野ではなかった。<br /><br />

            世界は一つの構造体。<br />
            分解し、理解し、再接続する。<br />
            それが創造だった。<br /><br />

            だが理解は終わらない。<br />
            “なぜ？”は尽きない。<br /><br />

            完成へ向かうほど、未知は広がる。<br /><br />

            だから彼の人生は、<br />
            <span className="text-[20px] tracking-[0.06em] text-white">
              未完成のまま
            </span>
            残った。<br /><br />

            ノートには、まだ存在しない機械の設計図。<br />
            それが現実になるのは、数百年後だった。<br /><br />

            彼は、終わらなかった。<br />
            ただ、時間が追いつかなかった。
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />

        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 10%, rgba(212,175,55,0.35) 0%, transparent 60%)",
          }}
        />

        <div className="absolute top-0 left-1/2 h-px w-[60px] -translate-x-1/2 bg-white/10" />
      </div>
    </div>
  );
}