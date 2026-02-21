// src/pages/JobsRoom.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./jobs.css";

gsap.registerPlugin(ScrollTrigger);

export default function JobsRoom() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  /* =====================================================
     ① HERO 呼吸（ctxHero）
  ===================================================== */
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!heroRef.current || !titleRef.current) return;

      gsap.to(heroRef.current, {
        scale: 1.004,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(titleRef.current, {
        letterSpacing: "0.30em",
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* =====================================================
     ② fade-sec（ctxFade）
  ===================================================== */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fade-sec").forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* =====================================================
     ③ Big Typo（初期表示＋浮遊）
  ===================================================== */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const bigTypo = document.getElementById("bigTypo");
      const wrapper = document.getElementById("bigTypoWrapper");
      if (!bigTypo || !wrapper) return;

      // 初期フェード
      gsap.fromTo(
        wrapper,
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.8,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      // 浮遊パララックス
      gsap.to(wrapper, {
        y: "-12vh",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.3,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* =====================================================
     ④ Big Typo — 章切替（段階フェード / 位置 clamp 化）
  ===================================================== */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const bigTypo = document.getElementById("bigTypo");
      const wrapper = document.getElementById("bigTypoWrapper");
      if (!bigTypo || !wrapper) return;

      const mapping = [
        { id: "ch01", word: "BORDER" },
        { id: "ch02", word: "MEANING" },
        { id: "ch03", word: "SPARK" },
        { id: "ch04", word: "GARAGE" },
        { id: "ch05", word: "VISION" },
        { id: "ch06", word: "ESSENCE" },
        { id: "ch07", word: "THINK" },
      ];

      // 上品な編集感で位置を clamp(px, vw, vh)
      const offsets = {
        ch01: { x: "-48%", y: "clamp(30px, 12vh, 160px)" },
        ch02: { x: "-52%", y: "clamp(42px, 15vh, 180px)" },
        ch03: { x: "-50%", y: "clamp(28px, 10vh, 150px)" },
        ch04: { x: "-49%", y: "clamp(34px, 14vh, 170px)" },
        ch05: { x: "-46%", y: "clamp(48px, 18vh, 190px)" },
        ch06: { x: "-54%", y: "clamp(24px, 10vh, 150px)" },
        ch07: { x: "-50%", y: "clamp(40px, 16vh, 180px)" },
      };

      mapping.forEach(({ id, word }) => {
        const target = document.getElementById(id);
        if (!target) return;

        ScrollTrigger.create({
          trigger: target,
          start: "top 72%",

          onEnter: () => {
            const pos = offsets[id];

            // ——— 段階フェード ———
            gsap.to(bigTypo, {
              opacity: 0,
              duration: 0.35,
              ease: "power2.out",
            });

            setTimeout(() => {
              bigTypo.textContent = word;

              gsap.fromTo(
                bigTypo,
                { opacity: 0 },
                {
                  opacity: 0.28,
                  duration: 0.8,
                  ease: "power3.out",
                }
              );
            }, 360);

            // ——— wrapper の位置変更 ———
            gsap.to(wrapper, {
              x: pos.x,
              y: pos.y,
              duration: 1.2,
              ease: "power2.out",
            });
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
    return (
    <div
      ref={containerRef}
      className="bg-[#f3f3f3] text-[#111] overflow-x-hidden relative"
    >

      {/* =====================================================
          FIXED BIG TYPO（展示タイポ）
      ===================================================== */}
      <div className="fixed inset-0 pointer-events-none z-[9999]">
        <div
          id="bigTypoWrapper"
          className="
            absolute left-1/2 -translate-x-1/2
            top-[12vh]
            will-change-transform
          "
        >
          <div
            id="bigTypo"
            className="
              text-[20vw] font-light tracking-[0.08em]
              mix-blend-soft-light text-black/35
              opacity-[0.20]
              leading-none select-none
              will-change-transform
            "
          >
            BORDER
          </div>
        </div>
      </div>

      {/* =====================================================
          HERO BLOCK（光膜 × 静けさ）
      ===================================================== */}
      <div className="relative min-h-screen w-full overflow-hidden z-[5]">

        {/* HERO TITLE */}
        <div
          className="
            absolute top-[23vh] left-1/2 -translate-x-1/2
            z-[30] text-center pointer-events-none
          "
        >
          <p className="text-[13px] tracking-[0.38em] opacity-60 mb-4 font-light">
            STEVE JOBS
          </p>

          <h1
            ref={titleRef}
            className="
              text-[56px]
              tracking-[0.28em]
              font-light
              text-black/80
              drop-shadow-[0_2px_18px_rgba(255,255,255,0.85)]
            "
          >
            世界は“視点”でつくられる。
          </h1>
        </div>

        {/* BACKGROUND */}
        <section
          ref={heroRef}
          className="relative min-h-screen w-full px-8 flex items-center justify-center z-[5]"
        >
          {/* 銀膜 */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              background:
                "radial-gradient(circle at 50% 38%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.1) 40%, transparent 75%)",
            }}
          />

          {/* 背景画像 */}
          <img
            src="/images/jobs/hero1.png"
            className="
              absolute inset-0 w-full h-full object-cover object-center
              opacity-[0.88]
            "
            style={{ filter: "contrast(1.12) brightness(1.08)" }}
            alt=""
          />

          {/* 光膜 */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 60%, rgba(255,255,255,0.22) 0%, rgba(245,245,245,1) 80%)",
            }}
          />
        </section>
      </div>

      {/* =====================================================
          CONTENT WRAPPER
      ===================================================== */}
      <div className="w-full pt-[200px] px-[42px]">

        {/* ============================================
            01 — 境界線
        ============================================ */}
        <section
          id="ch01"
          className="fade-sec mb-[360px] pt-[200px] pb-[80px] z-[6] relative"
        >
          <div
            className="
              grid
              max-w-[1320px] mx-auto
              grid-cols-[1.28fr_1fr]
              gap-[120px]
              items-start
            "
          >
            {/* IMAGE */}
            <div className="space-y-8 relative top-[12px]">
              <p className="absolute -top-14 left-0 text-[13px] tracking-[0.42em] opacity-40">
                CHAPTER 01 — BORDERLINE
              </p>

              <img
                src="/images/jobs/born1.png"
                className="
                  w-[95%]
                  max-w-[620px]
                  max-h-[560px]
                  mx-auto
                  rounded-[16px]
                  shadow-[0_16px_42px_rgba(0,0,0,0.06)]
                  scale-[1.015]
                  origin-center
                  object-cover
                "
                alt=""
              />

              <p className="text-center text-[11px] tracking-[0.3em] opacity-55">
                01 — BORDERLINE
              </p>
            </div>

            {/* TEXT */}
            <div className="max-w-[620px] text-[16px] leading-[2.18] font-light opacity-[0.9]">

              <h3 className="text-[15px] tracking-[0.28em] opacity-50 mb-[32px]">
                THE STORY BEGINS AT THE EDGE
              </h3>

              <h2 className="mag-title mb-[46px]">境界線から始まった物語</h2>

              <p className="mb-[30px]">
                スティーブ・ジョブズの物語は、栄光からは程遠い“境界線”で幕を開けた。<br />
                生まれてすぐに実の両親と別れ、<br />
                「自分はどこに属するのか」という問いだけが残された。
              </p>

              <p className="mb-[34px]">
                その後の人生でも、彼は常に境界の手前に立ち続けた。<br />
                学校にも馴染めず、既存の価値観には反発し、どこにも完全にはフィットしない。<br />
                だが——その“居場所のなさ”こそが、感性を研ぎ澄ませていく。
              </p>

              <p className="mag-pull mb-[34px] mt-[52px] text-[20px] tracking-[0.02em] text-center">
                「小さなノイズが、なぜか気になる」
              </p>

              <p className="mb-[32px]">
                1mm のズレ、空気の濁り、手触り。<br />
                多くの人が見落とす“雑味”に、彼だけが強烈に反応した。
              </p>

              <p>
                後に “Apple が世界を変える”<br />
                <span className="font-medium">美と機能の統合</span> は、  
                この違和感センサーが原点となる。
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
            02 — 意味の嗅覚
        ============================================ */}
        <section
          id="ch02"
          className="fade-sec pt-[120px] pb-[60px] mb-[180px] z-[6] relative"
        >
          <div className="max-w-[1320px] mx-auto">
            <p className="text-[12px] tracking-[0.24em] opacity-50 mb-12">
              SPECIAL FEATURE
            </p>

            <div
              className="
                grid
                grid-cols-[1fr_1.28fr]
                gap-[120px]
                items-start
              "
            >
              {/* TEXT */}
              <div className="max-w-[620px] text-[16px] leading-[2.18] font-light opacity-[0.9]">

                <p className="mag-code mb-4">02 — MEANING SENSE</p>

                <h2 className="mag-title mb-[46px]">意味の嗅覚</h2>

                <p className="mb-[34px]">
                  子どものころのジョブズは、<br />
                  “形だけ” のものに、どうしても馴染めなかった。<br />
                  宿題も校則も、理由のないものはすべて空気が濁って見えた。
                </p>

                <p className="mb-[38px]">
                  一方で、ほんの一瞬でも「これは本物だ」と感じると、<br />
                  その世界にまるごと呑まれてしまう。<br />
                  色、質感、線。  
                  彼の中ではそれらが“意味のある配置”で並び替わっていく。
                </p>

                <p
                  className="
                    my-[52px] text-[18px]
                    opacity-85 tracking-[0.03em]
                    text-center
                  "
                >
                  「これは何のために存在しているのか？」
                </p>

                <p className="mb-[36px]">
                  この問いは、思考ではなく“標準設定”となった。<br />
                  大学へ進んでも、それは揺らがない。  
                  無意味な情報を積み上げる授業には、彼の感覚は一切反応しなかった。
                </p>

                <p className="mb-[40px]">
                  だからこそ、入学してまもなく大学を離れた。<br />
                  それは逃避ではなく、  
                  彼にとっては “意味のないものを削る” という、ごく自然な選択だった。
                </p>

                <p>
                  ただし、空白の時間ではなかった。<br />
                  カリグラフィーの授業で見た曲線の美しさは、  
                  彼の内部に静かに沈殿し、  
                  のちの <span className="font-medium">Mac 文化の基礎</span> となる“美の基準”を形づくった。
                </p>
              </div>

              {/* IMAGE */}
              <div className="space-y-4 relative top-[100px]">
                <img
                  src="/images/jobs/reed1.png"
                  className="
                    w-full rounded-[14px] scale-[1.06]
                    shadow-[0_18px_48px_rgba(0,0,0,0.10)]
                  "
                  alt=""
                />
                <p className="text-center text-[11px] tracking-[0.3em] opacity-55">
                  02 — MEANING SENSE
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            03 — 起業前夜
        ============================================ */}
        <section
          id="ch03"
          className="fade-sec mb-[340px] pt-[200px] pb-[80px] z-[6] relative"
        >
          <div className="max-w-[1320px] mx-auto">
            <p className="text-[12px] tracking-[0.24em] opacity-50 mb-[40px]">
              SPECIAL FEATURE
            </p>

            <div
              className="
                grid
                grid-cols-[1fr_0.9fr]
                gap-[110px]
                items-start
              "
            >
              {/* TEXT */}
              <div className="max-w-[620px] text-[16px] leading-[2.18] font-light opacity-[0.9]">

                <p className="mag-code mb-4">
                  03 — BEFORE THE FIRST SPARK
                </p>

                <h2 className="mag-title mb-[46px]">起業前夜 — 火がつく瞬間</h2>

                <p className="mb-[34px]">
                  大学を離れたあと、ジョブズはしばらく “どこにも属さない時間” を彷徨った。<br />
                  朝の光の角度さえ、心の揺らぎと連動して見えるような日々。<br />
                  肩書きも役割もない世界で、  
                  彼は初めて「自分のまなざしだけ」を頼りに歩くことになる。
                </p>

                <p className="mb-[38px]">
                  禅に傾倒したのも偶然ではない。  
                  世界の“表面”ではなく、  
                  その奥にある静かな秩序に触れようとした。<br />
                  その体験は、のちの Apple の“静けさと緊張感”の原型になる。
                </p>

                <p
                  className="
                    my-[52px] text-[18px]
                    opacity-85 tracking-[0.03em]
                    text-center
                  "
                >
                  「自分が信じる世界は、誰かが作ってくれるものではない。」
                </p>

                <p className="mb-[36px]">
                  その種に火をつけたのが、旧友との再会だった。<br />
                  小さな集会で見た、未完成で粗野なマシン。  
                  だがその奥には、誰も拾っていない“未来の匂い”が確かにあった。
                </p>

                <p className="mb-[36px]">
                  ジョブズは悟る。  
                  テクノロジーはまだ“使う人の世界”をデザインしていない。<br />
                  触れる前の“入口”さえ存在していない。
                </p>

                <p className="mb-[40px]">
                  美と合理の間にある “未開の領域” を形にできる人間がいない——  
                  ならば、自分がやるしかない。
                </p>

                <p className="font-medium opacity-90">
                  こうしてガレージの小さな空間から Apple が始まる。<br />
                  起業は野心ではなく、“世界の雑味を消す” という本能の延長だった。
                </p>
              </div>

              {/* IMAGE */}
              <div className="space-y-4 relative top-[12px]">
                <img
                  src="/images/jobs/vertical_fontstudy.png"
                  className="
                    w-[88%] mx-auto rounded-[14px]
                    shadow-[0_18px_48px_rgrgba(0,0,0,0.10)]
                  "
                  alt=""
                />
                <p className="text-center text-[11px] tracking-[0.3em] opacity-55">
                  03 — THE SHAPE BEFORE FORM
                </p>
              </div>
            </div>
          </div>
        </section>
                {/* ============================================
            04 — ガレージ革命（見開き）
        ============================================ */}
        <section
          id="ch04"
          className="fade-sec mb-[240px] pt-[140px] relative z-[6]"
        >
          <div className="relative w-full">

            {/* 背景画像 */}
            <img
              src="/images/jobs/garage_revo.png"
              className="
                w-full max-h-[720px] object-cover rounded-[22px]
                shadow-[0_32px_70px_rgba(0,0,0,0.24)]
              "
              alt=""
            />

            {/* 暗めオーバーレイ */}
            <div
              className="
                absolute inset-0 rounded-[22px]
                bg-black/20 pointer-events-none
              "
            />

            {/* 黒グラデ（展示空間） */}
            <div
              className="
                absolute inset-0 rounded-[22px]
                bg-gradient-to-b
                from-black/88 via-black/68 to-black/26
                backdrop-blur-[1.6px]
              "
            />

            {/* 金ハイライト膜 */}
            <div
              className="
                absolute inset-0 rounded-[22px]
                opacity-[0.095]
                bg-[radial-gradient(circle_at_68%_40%,rgba(212,175,55,0.23),transparent_58%)]
                mix-blend-screen pointer-events-none
              "
            />

            {/* TEXT OVERLAY */}
            <div
              className="
                absolute inset-0 flex items-center justify-center
                px-[60px] text-white
              "
            >
              <div className="max-w-[700px] text-center drop-shadow-[0_8px_26px_rgba(0,0,0,0.55)]">

                <p className="text-[12px] tracking-[0.28em] opacity-70 mb-4">
                  SPECIAL FEATURE — CHAPTER 04
                </p>

                <h2
                  className="
                    mag-title text-white mb-12 leading-[1.42]
                    tracking-[0.03em]
                  "
                >
                  ガレージの革命<br />
                  世界観が形になる瞬間
                </h2>

                <p className="text-[16px] leading-[2.22] font-light opacity-[0.96]">
                  旧友との小さな再会は、ジョブズにとって  
                  “未来へ繋がる入口”だった。<br />
                  粗野な基板の奥にだけ、ほのかな光のような  
                  「触れられる未来の原型」が見えていた。
                </p>

                <p className="mt-[32px] text-[16px] leading-[2.22] font-light opacity-[0.94]">
                  技術の文脈に、美学の語彙を持ち込める者。<br />
                  当時の世界には、それを“翻訳”できる存在がまだいなかった。
                </p>

                <p
                  className="
                    my-[50px] text-[18px]
                    opacity-85 tracking-[0.03em]
                  "
                >
                  「未来は、誰もが触れられたときに初めて革命になる。」
                </p>

                <p className="text-[16px] leading-[2.26] font-light opacity-[0.98]">
                  ガレージで始まったのは、企業の誕生ではない。<br />
                  世界を“どう見せるか”。  
                  その問いへの、静かで確かな最初の解答だった。
                </p>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="mt-7 text-center">
            <p className="text-[11px] tracking-[0.3em] opacity-55">
              04 — THE FIRST REVOLUTION
            </p>
          </div>
        </section>

        {/* ============================================
            05 — Vision（臨界点）
        ============================================ */}
        <section
          id="ch05"
          className="fade-sec mb-[360px] pt-[220px] pb-[80px] relative z-[6]"
        >
          <div className="max-w-[1320px] mx-auto">

            <p className="text-[12px] tracking-[0.26em] opacity-50 mb-12">
              SPECIAL FEATURE
            </p>

            <div
              className="
                grid
                grid-cols-[1.08fr_1fr]
                gap-[120px]
                items-start
              "
            >
              {/* IMAGE */}
              <div className="relative top-[14px] space-y-5">
                <img
                  src="/images/jobs/vision1.png"
                  className="
                    w-full rounded-[14px] scale-[1.035]
                    shadow-[0_22px_52px_rgba(0,0,0,0.14)]
                  "
                  alt=""
                />
                <p className="text-center text-[11px] tracking-[0.3em] opacity-55">
                  05 — VISION THRESHOLD
                </p>
              </div>

              {/* TEXT */}
              <div className="max-w-[620px] text-[16px] leading-[2.18] font-light opacity-[0.9]">

                <p className="mag-code mb-4">05 — VISION THRESHOLD</p>

                <h2 className="mag-title mb-[42px]">未来が“視える”臨界点</h2>

                <p className="mb-[34px]">
                  Apple が軌道に乗りはじめた頃、  
                  ジョブズにはすでに “完成した未来の像” が見えていた。  
                  それは市場予測でも、技術ロードマップでもない。  
                  世界がどう「認識」されるべきかという、もっと深い層だった。
                </p>

                <p className="mb-[40px]">
                  彼が注目したのは機能ではなく、  
                  <span className="font-medium">
                    「人間が世界をどう見て、どう感じるか」
                  </span>
                  という、“認知のデザイン” だった。
                </p>

                <p
                  className="
                    my-[52px] text-[18px]
                    opacity-85 tracking-[0.03em] text-center
                  "
                >
                  「人の視点そのものをデザインできる。」
                </p>

                <p className="mb-[36px]">
                  その確信を得た瞬間、ジョブズは  
                  “経営者” から “世界観の編集者” へと変わった。  
                  製品という点ではなく、  
                  “世界の見え方” という面全体を組み替えていくクリエイターへ。
                </p>

                <p>
                  人が世界を見る速度、触れたときの感触、  
                  美しさをどう知覚するか。  
                  それらを統合して、見えない設計図として再構築していった。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            06 — Essence（本質の哲学）
        ============================================ */}
        <section
          id="ch06"
          className="fade-sec mb-[200px] pt-[140px] relative z-[6]"
        >
          <div className="relative w-full">
            {/* VISUAL */}
            <img
              src="/images/jobs/essence1.png"
              className="
                w-full max-h-[700px] object-cover rounded-[22px]
                shadow-[0_32px_70px_rgba(0,0,0,0.22)]
              "
              alt=""
            />

            {/* 黒グラデ */}
            <div
              className="
                absolute inset-0 rounded-[22px]
                bg-gradient-to-t
                from-black/90 via-black/60 to-black/10
                backdrop-blur-[1.5px]
              "
            />

            {/* Light 膜 */}
            <div
              className="
                absolute inset-0 rounded-[22px]
                pointer-events-none
                opacity-[0.08]
                bg-[radial-gradient(circle_at_50%_68%,rgba(255,255,255,0.28),transparent_60%)]
                mix-blend-screen
              "
            />

            {/* TEXT */}
            <div
              className="
                absolute inset-0 flex items-center justify-center
                px-[60px] text-white
              "
            >
              <div className="max-w-[680px] text-center drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)]">

                <p className="text-[12px] tracking-[0.26em] opacity-70 mb-4">
                  SPECIAL FEATURE — CHAPTER 06
                </p>

                <h2
                  className="
                    mag-title text-white mb-[46px]
                    leading-[1.42] tracking-[0.02em]
                  "
                >
                  本質を削り、未来を残す
                </h2>

                <p className="text-[16px] leading-[2.26] font-light opacity-[0.95] mb-[32px]">
                  ジョブズにとって “デザイン” とは、  
                  見た目を飾る行為ではない。  
                  世界の雑味を取り除き、  
                  本質の輪郭を
                  <span className="font-medium">“露わにする作業”</span>
                  に近かった。
                </p>

                <p className="text-[16px] leading-[2.26] font-light opacity-[0.9] mb-[42px]">
                  無駄が多い世界では、誤解が生まれる。  
                  美しい世界とは、誤解が最小化された世界である。  
                  だから彼は、削ることに異常なまでの執念を燃やした。
                </p>

                <p
                  className="
                    my-[52px] text-[18px]
                    opacity-85 tracking-[0.03em]
                  "
                >
                  「削ることは、未来を残すことだ。」
                </p>

                <p className="text-[16px] leading-[2.26] font-light opacity-[0.97]">
                  iMac、iPod、iPhone ——  
                  Apple の製品には共通した構造がある。  
                  それは “本質だけが残る” という潔さ。  
                  余白、曲線、光の扱い、そのすべてが  
                  「人が触れた瞬間の世界の見え方」まで  
                  精密にデザインされていた。
                </p>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="mt-6 text-center">
            <p className="text-[11px] tracking-[0.3em] opacity-55">
              06 — ESSENCE OF FORM
            </p>
          </div>
        </section>

        {/* ============================================
            07 — Think Different の根
        ============================================ */}
        <section
          id="ch07"
          className="fade-sec mb-[300px] pt-[140px] pb-[140px] relative z-[6]"
        >
          <div className="max-w-[900px] mx-auto text-center">

            <p className="text-[12px] tracking-[0.28em] opacity-60 mb-8">
              FINAL CHAPTER — 07
            </p>

            <h2 className="mag-title mb-[46px] tracking-[0.02em]">
              Think Different の根
            </h2>

            <p className="text-[16px] leading-[2.18] font-light opacity-[0.9] mb-[32px]">
              成功を追ったのではなく、<br />
              “世界の見え方” に誠実であろうとした者だけが、  <br />
              静かに未来の形を変えていく。
            </p>

            <p className="text-[16px] leading-[2.18] font-light opacity-[0.88] mb-[42px]">
              世界が複雑になるほど、<br />
              本質を探し続ける人間の言葉は、  <br />
              いっそう静かに、しかし確実に重みを増す。
            </p>

            <p
              className="
                my-[52px] text-[20px]
                opacity-85 tracking-[0.03em]
                leading-[1.75]
              "
            >
              “The people who are crazy enough to think they can change the world<br />
              are the ones who do.”
            </p>

            <p className="text-[16px] leading-[2.18] font-light opacity-[0.92]">
              世界を変えるのは野心ではない。<br />
              “見えてしまった未来” を裏切らず、  
              その方向へ静かに歩き続ける人間だ。
            </p>
          </div>
        </section>

        {/* ============================================
            CLOSING VISUAL（思想の余韻）
        ============================================ */}
        <section
          className="
            fade-sec relative w-full h-[74vh]
            rounded-[18px] overflow-hidden
            mb-[300px] flex items-center justify-center
            z-[6]
          "
        >
          {/* 抽象背景 */}
          <img
            src="/images/jobs/closing_abstract.png"
            alt=""
            className="
              absolute inset-0 w-full h-full object-cover
              scale-[1.035] opacity-[0.9]
            "
          />

          {/* 光膜（Dior × Apple） */}
          <div
            className="
              absolute inset-0 pointer-events-none backdrop-blur-[2px]
              opacity-[0.75]
            "
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.18) 36%, rgba(255,255,255,0.06) 80%)",
            }}
          />

          <div className="relative z-20 px-6 text-center">
            <h3
              className="
                text-[28px] md:text-[34px]
                font-light tracking-[0.13em]
                text-black/75
                drop-shadow-[0_0_14px_rgba(255,255,255,0.7)]
                leading-[1.65]
              "
            >
              未来は、見える者の手で再設計される。
            </h3>
          </div>
        </section>

      </div> 
    </div>
  );
}