// src/pages_sp/JobsRoomSP.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./jobs_sp.css";

gsap.registerPlugin(ScrollTrigger);

export default function JobsRoomSP() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!heroRef.current || !titleRef.current) return;

      gsap.to(heroRef.current, {
        scale: 1.008,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(titleRef.current, {
        letterSpacing: "0.24em",
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fade-sec").forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 1.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
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
      const bigTypo = document.getElementById("bigTypoSP");
      const wrapper = document.getElementById("bigTypoWrapperSP");
      if (!bigTypo || !wrapper) return;

      gsap.fromTo(
        wrapper,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          delay: 0.22,
        }
      );

      gsap.to(wrapper, {
        y: "-5vh",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.05,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const bigTypo = document.getElementById("bigTypoSP");
      const wrapper = document.getElementById("bigTypoWrapperSP");
      if (!bigTypo || !wrapper) return;

      const mapping = [
        { id: "ch01sp", word: "BORDER" },
        { id: "ch02sp", word: "MEANING" },
        { id: "ch03sp", word: "SPARK" },
        { id: "ch04sp", word: "GARAGE" },
        { id: "ch05sp", word: "VISION" },
        { id: "ch06sp", word: "ESSENCE" },
        { id: "ch07sp", word: "THINK" },
      ];

      const offsets = {
        ch01sp: { x: "-50%", y: "10vh" },
        ch02sp: { x: "-53%", y: "13vh" },
        ch03sp: { x: "-51%", y: "9vh" },
        ch04sp: { x: "-50%", y: "12vh" },
        ch05sp: { x: "-47%", y: "14vh" },
        ch06sp: { x: "-53%", y: "10vh" },
        ch07sp: { x: "-50%", y: "14vh" },
      };

      mapping.forEach(({ id, word }) => {
        const target = document.getElementById(id);
        if (!target) return;

        ScrollTrigger.create({
          trigger: target,
          start: "top 76%",
          onEnter: () => {
            const pos = offsets[id];

            gsap.to(bigTypo, {
              opacity: 0,
              duration: 0.24,
              ease: "power2.out",
            });

            setTimeout(() => {
              bigTypo.textContent = word;
              gsap.to(bigTypo, {
                opacity: 0.11,
                duration: 0.62,
                ease: "power3.out",
              });
            }, 280);

            gsap.to(wrapper, {
              x: pos.x,
              y: pos.y,
              duration: 0.95,
              ease: "power2.out",
            });
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="jobs-room-sp">
      {/* FIXED BIG TYPO */}
      <div className="fixed inset-0 pointer-events-none z-[5]">
        <div
          id="bigTypoWrapperSP"
          className="
            absolute left-1/2 top-[21vh]
            -translate-x-1/2
            will-change-transform
          "
        >
          <div
            id="bigTypoSP"
            className="
              text-[28vw]
              font-light tracking-[0.06em]
              text-white/40 mix-blend-screen
              opacity-[0.08]
              leading-none select-none
            "
          >
            BORDER
          </div>
        </div>
      </div>

       {/* HERO */}
      <section className="relative z-[1] w-full min-h-[82vh] overflow-hidden">
        <div
          className="
            absolute left-1/2 top-[14vh] z-[30]
            w-full max-w-[92%] -translate-x-1/2
            px-4 text-center
          "
        >
          <div className="mx-auto max-w-[340px]">
            <p className="mb-3 text-[10px] tracking-[0.3em] text-white/58 font-light">
              STEVE JOBS
            </p>

            <h1
              ref={titleRef}
              className="
                text-[28px]
                leading-[1.34]
                tracking-[0.08em]
                font-light
                text-white/88
                drop-shadow-[0_8px_24px_rgba(0,0,0,0.34)]
              "
            >
              世界は“視点”で
              <br />
              再設計される。
            </h1>

            <p
              className="
                mx-auto mt-5 max-w-[18em]
                text-[12px] leading-[1.9]
                tracking-[0.02em] text-white/76
              "
            >
              ジョブズが作ったのは、製品ではない。<br />
              人が世界へ入っていく“入口”そのものだった。
            </p>
          </div>
        </div>

        <div
          ref={heroRef}
          className="
            relative z-[2]
            flex min-h-[82vh] w-full items-center justify-center
          "
        >
          <img
            src="/images/jobs/hero1.png"
            className="
              absolute inset-0 h-full w-full object-cover
              brightness-[0.9] contrast-[1.08] opacity-[0.96]
            "
            alt=""
          />

          {/* 上部の文字帯を読ませるための暗幕 */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.46) 24%, rgba(0,0,0,0.18) 48%, rgba(0,0,0,0.38) 100%)",
            }}
          />

          {/* 中央の白芯を少し抑える */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.22]"
            style={{
              background:
                "radial-gradient(circle at 50% 42%, rgba(0,0,0,0.34), transparent 40%)",
            }}
          />

          {/* うっすら光膜は残す */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              background:
                "radial-gradient(circle at 50% 38%, rgba(255,255,255,0.18), transparent 72%)",
            }}
          />
        </div>
      </section>

      {/* CONTENT WRAPPER */}
      <div className="w-full px-6 pt-[120px] pb-[40px] space-y-[200px]">
        {/* CHAPTER 01 */}
        <section id="ch01sp" className="fade-sec">
          <p className="text-[11px] tracking-[0.38em] opacity-50 mb-6">
            CHAPTER 01 — BORDERLINE
          </p>

          <img
            src="/images/jobs/born1.png"
            className="
              w-full rounded-[14px]
              shadow-[0_14px_34px_rgba(0,0,0,0.08)]
              mb-6
            "
            alt=""
          />

          <p className="text-center text-[10px] tracking-[0.32em] opacity-55 mb-10">
            01 — BORDERLINE
          </p>

          <h3 className="text-[13px] tracking-[0.28em] opacity-50 mb-4">
            THE STORY BEGINS AT THE EDGE
          </h3>

          <h2 className="mag-title mb-8">
            境界線に立つ者だけが、
            <br />
            違和感を拾う
          </h2>

          <p className="mb-5 leading-[2.1]">
            スティーブ・ジョブズの物語は、完成された場所からではなく、
            “境界線” から始まった。<br />
            生まれてすぐに実の両親と別れ、
            「自分はどこに属するのか」という問いだけが静かに残された。
          </p>

          <p className="mb-5 leading-[2.1]">
            その後の人生でも、彼はいつも少しだけ外側にいた。<br />
            学校にも、価値観にも、既存のルールにも、完全には馴染めない。<br />
            だがその“ずれ”こそが、世界の微細なノイズを拾う感性を育てていく。
          </p>

          <p className="mag-pull text-[17px] text-center my-10 tracking-[0.02em]">
            「多くの人が流す違和感に、彼だけが立ち止まった。」
          </p>

          <p className="mb-5 leading-[2.1]">
            1mm のズレ、空気の濁り、触れたときの雑味。<br />
            多くの人が見過ごすそれらに、彼だけが異様なほど反応した。
          </p>

          <p className="leading-[2.1]">
            のちに Apple を貫く
            <br />
            <span className="font-medium">“美と機能の統合”</span> は、
            この違和感センサーから始まっている。
          </p>
        </section>

        {/* AIR BREAK */}
        <section className="fade-sec relative rounded-[14px] overflow-hidden h-[48vh] flex items-center justify-center">
          <img
            src="/images/jobs/break-light.png"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.92]"
            alt=""
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(
                  circle at 50% 50%,
                  rgba(0,0,0,0.14) 0%,
                  rgba(0,0,0,0.10) 28%,
                  rgba(0,0,0,0.06) 55%,
                  rgba(255,255,255,0.10) 85%
                )
              `,
            }}
          />

          <div
            className="absolute inset-0 backdrop-blur-[0.7px] opacity-[0.60]"
            style={{
              background:
                "radial-gradient(circle at 50% 46%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.12) 32%, rgba(255,255,255,0.05) 72%)",
            }}
          />

          <div className="relative z-20 text-center px-4">
            <h2
              className="
                text-[22px] leading-[1.55] font-light tracking-[0.14em]
                text-black/85
                drop-shadow-[0_1px_8px_rgba(255,255,255,0.55)]
              "
            >
              Simplicity is an act of courage,
              <br />
              not the absence of complexity.
            </h2>

            <p
              className="
                mt-4 text-[14px] leading-[1.9]
                text-black/70 font-light
              "
            >
              シンプルとは、ただ削ることではない。<br />
              不必要を捨てるという、静かだが決定的な勇気のことだ。
            </p>
          </div>
        </section>

        {/* CHAPTER 02 */}
        <section id="ch02sp" className="fade-sec">
          <p className="text-[11px] tracking-[0.24em] opacity-50 mb-6">
            SPECIAL FEATURE
          </p>

          <img
            src="/images/jobs/reed1.png"
            className="
              w-full rounded-[14px]
              shadow-[0_12px_32px_rgba(0,0,0,0.1)]
              mb-6
            "
            alt=""
          />

          <p className="text-center text-[10px] tracking-[0.3em] opacity-55 mb-10">
            02 — MEANING SENSE
          </p>

          <h2 className="mag-title mb-8">
            意味のないものを、
            <br />
            彼は許せなかった
          </h2>

          <p className="mb-5 leading-[2.1]">
            子どものころのジョブズは、
            “形だけ整っているもの” にどうしても馴染めなかった。<br />
            宿題も、校則も、理由のないものはすべて
            どこか空気が濁って見えた。
          </p>

          <p className="mb-5 leading-[2.1]">
            逆に、ほんの一瞬でも「これは本物だ」と感じると、
            その世界にまるごと呑まれてしまう。<br />
            色、質感、線、間。<br />
            彼の中ではそれらが “意味のある配置” として組み替わっていった。
          </p>

          <p className="my-10 text-center text-[17px] tracking-[0.02em] opacity-85">
            「これは何のために存在しているのか？」
          </p>

          <p className="mb-5 leading-[2.1]">
            この問いは、思考ではなく“標準設定”になっていた。<br />
            大学へ進んでも、それは変わらない。<br />
            無意味な情報を積み上げるだけの授業には、
            彼の感覚は一切反応しなかった。
          </p>

          <p className="mb-5 leading-[2.1]">
            だからこそ、大学を去ることは逃避ではなかった。<br />
            それは彼にとって、
            “意味のないものを削る”という自然な選択だった。
          </p>

          <p className="leading-[2.1]">
            だが、空白の時間ではない。<br />
            カリグラフィーの授業で見た曲線の美しさは、
            のちの <span className="font-medium">Mac文化の基準</span> として
            静かに沈殿していく。
          </p>
        </section>

        {/* CHAPTER 03 */}
        <section id="ch03sp" className="fade-sec">
          <p className="text-[11px] tracking-[0.24em] opacity-50 mb-6">
            SPECIAL FEATURE
          </p>

          <img
            src="/images/jobs/vertical_fontstudy.png"
            className="
              w-full rounded-[14px]
              shadow-[0_12px_32px_rgba(0,0,0,0.1)]
              mb-6
            "
            alt=""
          />

          <p className="text-center text-[10px] tracking-[0.3em] opacity-55 mb-10">
            03 — THE SHAPE BEFORE FORM
          </p>

          <h2 className="mag-title mb-8">
            起業前夜 —
            <br />
            まだ形のない未来を嗅ぎ取る
          </h2>

          <p className="mb-5 leading-[2.1]">
            大学を離れたあと、ジョブズはしばらく
            “どこにも属さない時間” を彷徨った。<br />
            肩書きも役割もない世界で、
            彼は初めて「自分のまなざしだけ」で歩くことになる。
          </p>

          <p className="mb-5 leading-[2.1]">
            禅に傾倒したのも偶然ではない。<br />
            世界の表面ではなく、
            その奥にある静かな秩序へ触れようとしていた。<br />
            その体験は、のちの Apple に宿る
            “静けさと緊張感” の原型になっていく。
          </p>

          <p className="my-10 text-center text-[17px] opacity-85 tracking-[0.02em]">
            「未来は、まだ形になる前に匂いだけを放つ。」
          </p>

          <p className="mb-5 leading-[2.1]">
            その気配に火をつけたのが、旧友との再会だった。<br />
            小さな集会で見た、未完成で粗野なマシン。<br />
            だがその奥には、誰も拾っていない“未来の匂い”が確かにあった。
          </p>

          <p className="mb-5 leading-[2.1]">
            テクノロジーはまだ“使う人の世界”をデザインしていない。<br />
            触れる前の入口も、意味も、体験も、まだ誰も作っていなかった。
          </p>

          <p className="leading-[2.1] font-medium">
            Apple の起業は、野心ではない。<br />
            “世界の雑味を消す”という本能が、
            ついに形を持った瞬間だった。
          </p>
        </section>

        {/* CHAPTER 04 */}
        <section id="ch04sp" className="fade-sec relative">
          <div className="relative rounded-[18px] overflow-hidden mb-10">
            <img
              src="/images/jobs/garage_revo.png"
              className="w-full max-h-[420px] object-cover"
              alt=""
            />
          </div>

          <div className="max-w-[680px] mx-auto px-4 text-center">
            <p className="text-[11px] tracking-[0.28em] opacity-60 mb-4">
              SPECIAL FEATURE — CHAPTER 04
            </p>

            <h2 className="mag-title mb-6 leading-[1.42]">
              ガレージの革命
              <br />
              世界観が、初めて手触りを持った
            </h2>

            <p className="text-[15px] leading-[1.92] font-light opacity-[0.92] mb-4">
              旧友との再会は、ジョブズにとって
              “未来へ繋がる入口”だった。<br />
              粗野な基板の奥にだけ、
              まだ名前のない未来の原型が、ほのかに光っていた。
            </p>

            <p className="text-[15px] leading-[1.92] font-light opacity-[0.9] mb-7">
              技術の文脈に、美学の語彙を持ち込める者。<br />
              当時の世界には、それを“翻訳”できる存在がまだいなかった。
            </p>

            <p className="text-[17px] opacity-85 tracking-[0.02em] my-8">
              「革命とは、未来を“触れられる形”にすることだ。」
            </p>

            <p className="text-[15px] leading-[1.92] font-light opacity-[0.96] mb-8">
              ガレージで始まったのは、企業の誕生ではない。<br />
              世界を“どう見せるか”。<br />
              その問いに対する、静かで決定的な最初の解答だった。
            </p>
          </div>
        </section>

        {/* CHAPTER 05 */}
        <section id="ch05sp" className="fade-sec">
          <p className="text-[11px] tracking-[0.24em] opacity-50 mb-6">
            SPECIAL FEATURE
          </p>

          <img
            src="/images/jobs/vision1.png"
            className="
              w-full rounded-[14px]
              shadow-[0_12px_32px_rgba(0,0,0,0.1)]
              mb-6
            "
            alt=""
          />

          <p className="text-center text-[10px] tracking-[0.3em] opacity-55 mb-10">
            05 — THE VISION
          </p>

          <h2 className="mag-title mb-8">
            未来が“見える”のではない。
            <br />
            先に“視えてしまう”
          </h2>

          <p className="mb-5 leading-[2.1]">
            ジョブズは未来を“予想”したのではない。<br />
            まだ誰も注目していない“気配”を、
            他人より早く感じ取っていただけだった。
          </p>

          <p className="mb-5 leading-[2.1]">
            彼が見ていたのは機能ではない。<br />
            <span className="font-medium">
              「人間が世界をどう見て、どう感じるか」
            </span>
            <br />
            という、“認知そのものの設計”だった。
          </p>

          <p className="my-10 text-center text-[17px] opacity-85 tracking-[0.02em]">
            「人の視点そのものをデザインできる。」
          </p>

          <p className="leading-[2.1]">
            この視点が、Apple のプロダクトを
            “美しいだけではない”<br />
            <span className="font-medium">
              人の動線まで設計された道具
            </span>
            に変えていく。
          </p>
        </section>

        {/* CHAPTER 06 */}
        <section id="ch06sp" className="fade-sec">
          <p className="text-[11px] tracking-[0.24em] opacity-50 mb-6">
            SPECIAL FEATURE
          </p>

          <img
            src="/images/jobs/essence1.png"
            className="
              w-full rounded-[14px]
              shadow-[0_12px_32px_rgba(0,0,0,0.1)]
              mb-6
            "
            alt=""
          />

          <p className="text-center text-[10px] tracking-[0.3em] opacity-55 mb-10">
            06 — ESSENCE
          </p>

          <h2 className="mag-title mb-8">
            本質を削り、
            <br />
            未来の輪郭だけを残す
          </h2>

          <p className="mb-5 leading-[2.1]">
            ジョブズにとって“デザイン”とは、
            見た目を飾ることではない。<br />
            世界の雑味を取り除き、
            本質の輪郭だけを露わにする作業に近かった。
          </p>

          <p className="mb-5 leading-[2.1]">
            無駄が多い世界では、誤解が生まれる。<br />
            美しい世界とは、誤解が最小化された世界である。<br />
            だから彼は、削ることに異常なまでの執念を燃やした。
          </p>

          <p className="my-10 text-center text-[17px] tracking-[0.02em] opacity-85">
            「削るとは、未来の輪郭だけを残すことだ。」
          </p>

          <p className="leading-[2.1]">
            だからこそ、Apple の製品には<br />
            <span className="font-medium">“本質だけが残る潔さ”</span> がある。<br />
            余白、曲線、光、そのすべてが
            “人が触れた瞬間の世界の見え方”まで設計されていた。
          </p>
        </section>

        {/* CHAPTER 07 */}
        <section id="ch07sp" className="fade-sec mb-[260px]">
          <p className="text-[11px] tracking-[0.28em] opacity-50 mb-6">
            FINAL CHAPTER — 07
          </p>

          <img
            src="/images/jobs/think_core.png"
            className="
              w-full rounded-[14px]
              shadow-[0_12px_30px_rgba(0,0,0,0.1)]
              mb-6
            "
            alt=""
          />

          <h2 className="mag-title mb-10">
            Think Different は、
            <br />
            思想ではなく視点の根だった
          </h2>

          <p className="mb-5 leading-[2.1]">
            成功を追ったのではなく、<br />
            “世界の見え方” に誠実であり続けた者だけが、
            静かに未来の形を変えていく。
          </p>

          <p className="mb-5 leading-[2.1]">
            世界が複雑になるほど、<br />
            本質を探し続ける人間の言葉は、
            いっそう静かに、しかし確実に重みを増す。
          </p>

          <p className="my-10 text-center text-[17px] tracking-[0.02em] opacity-85">
            “The people who are crazy enough to think they can change the world
            are the ones who do.”
          </p>

          <p className="leading-[2.1]">
            世界を変えるのは野心ではない。<br />
            “見えてしまった未来” を裏切らず、
            その方向へ静かに歩き続ける人間だ。
          </p>
        </section>

        {/* CLOSING BLOCK */}
        <section className="fade-sec mb-[140px]">
          <div className="relative rounded-[20px] overflow-hidden h-[46vh] mb-14">
            <img
              src="/images/jobs/closing_abstract.png"
              className="absolute inset-0 w-full h-full object-cover opacity-[0.9]"
              alt=""
            />

            <div
              className="
                absolute inset-0 backdrop-blur-[0.6px]
                bg-gradient-to-b from-white/65 via-white/32 to-white/8
              "
            />

            <div className="relative z-20 h-full flex items-center justify-center px-6 text-center">
              <h2
                className="
                  text-[22px] leading-[1.62]
                  tracking-[0.18em] font-light text-black/80
                "
              >
                未来は、見たい者ではなく、
                <br />
                見えてしまった者の手で
                <br />
                再設計される。
              </h2>
            </div>
          </div>

          <div className="max-w-[720px] mx-auto px-6 text-center">
            <p className="text-[11px] tracking-[0.28em] opacity-50 mb-10">
              STEVE JOBS — SELECTED QUOTES
            </p>

            <div className="mb-10">
              <p className="text-[15px] leading-[1.9] font-light opacity-[0.88]">
                “Simplicity is the ultimate sophistication.”
              </p>
              <p className="text-[12px] opacity-55 mt-2 tracking-[0.08em]">
                ー シンプルさは究極の洗練である
              </p>
            </div>

            <div className="mb-10">
              <p className="text-[15px] leading-[1.9] font-light opacity-[0.88]">
                “Design is not just what it looks like.
                <br />
                Design is how it works.”
              </p>
              <p className="text-[12px] opacity-55 mt-2 tracking-[0.08em]">
                ー デザインは見た目ではなく、
                <br />
                どう機能するかだ
              </p>
            </div>

            <div>
              <p className="text-[15px] leading-[1.9] font-light opacity-[0.88]">
                “The people who are crazy enough to think they can change the
                world are the ones who do.”
              </p>
              <p className="text-[12px] opacity-55 mt-2 tracking-[0.08em]">
                ー 世界を変えられると本気で
                <br />
                信じる人だけが、世界を変える
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}