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

  /* ============================
     ① HERO 呼吸（軽量版）
  ============================ */
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
        letterSpacing: "0.26em",
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* ============================
     ② fade-sec（SP 最適化）
  ============================ */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fade-sec").forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
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

  /* ============================
     ③ Big Typo（SP 最適化）
  ============================ */
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
          duration: 1.6,
          ease: "power3.out",
          delay: 0.25,
        }
      );

      gsap.to(wrapper, {
        y: "-6vh",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* ============================
     ④ Big Typo 章切替（SP）
  ============================ */
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

      // SP 専用オフセット
      const offsets = {
        ch01sp: { x: "-50%", y: "10vh" },
        ch02sp: { x: "-54%", y: "14vh" },
        ch03sp: { x: "-52%", y: "9vh" },
        ch04sp: { x: "-50%", y: "12vh" },
        ch05sp: { x: "-46%", y: "15vh" },
        ch06sp: { x: "-53%", y: "10vh" },
        ch07sp: { x: "-50%", y: "14vh" },
      };

      mapping.forEach(({ id, word }) => {
        const target = document.getElementById(id);
        if (!target) return;

        ScrollTrigger.create({
          trigger: target,
          start: "top 75%",
          onEnter: () => {
            const pos = offsets[id];

            gsap.to(bigTypo, {
              opacity: 0,
              duration: 0.32,
              ease: "power2.out",
            });

            setTimeout(() => {
              bigTypo.textContent = word;
              gsap.to(bigTypo, {
                opacity: 0.24,
                duration: 0.7,
                ease: "power3.out",
              });
            }, 330);

            gsap.to(wrapper, {
              x: pos.x,
              y: pos.y,
              duration: 1.0,
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
  {/* =====================================================
    FIXED BIG TYPO（SP展示タイポ）
===================================================== */}
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
        opacity-[0.10]
        leading-none select-none
      "
    >
      BORDER
    </div>
  </div>
</div>
{/* HERO */}
<section className="relative w-full min-h-[82vh] overflow-hidden z-[1]">

{/* TITLE */}
<div
  className="
    absolute left-1/2 -translate-x-1/2
    top-[22vh]
    w-full max-w-[90%]
    px-4 
    text-center 
    z-[30]
  "
>
  <p className="text-[11px] tracking-[0.32em] opacity-60 mb-2 font-light">
    STEVE JOBS
  </p>

<h1
  ref={titleRef}
  className="
    text-[30px]
    leading-[1.45]
    tracking-[0.12em]
    font-light
    text-[#9a9a9a]   /* ← 銀膜グレー */
    drop-shadow-[0_0_8px_rgba(255,255,255,0.14)]
  "
>
  世界は“視点”で<br />つくられる。
</h1>
</div>

  {/* HERO CORE */}
  <div
    ref={heroRef}
    className="
      relative w-full h-full min-h-[82vh]
      flex items-center justify-center
      z-[2]
    "
  >

    {/* 上層 光膜（より薄く） */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.08]"
      style={{
        background:
          "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.20), transparent 72%)",
      }}
    />

    {/* 画像 */}
    <img
      src="/images/jobs/hero1.png"
      className="
        absolute inset-0 w-full h-full object-cover
        brightness-[1.10] contrast-[1.05] opacity-[0.96]
      "
      alt=""
    />

    {/* 下層 白膜（極薄） */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.05]"
      style={{
        background:
          "radial-gradient(circle at 50% 60%, rgba(255,255,255,0.18), transparent 85%)",
      }}
    />
  </div>
</section>
      {/* CONTENT WRAPPER */}
      <div className="w-full px-6 pt-[120px] pb-[40px] space-y-[200px]">

        {/* =====================================================
            CHAPTER 01 — 境界線
        ===================================================== */}
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
            境界線から始まった物語
          </h2>

          <p className="mb-5 leading-[2.1]">
            スティーブ・ジョブズの物語は、栄光からは程遠い“境界線”で幕を開けた。<br />
            生まれてすぐに実の両親と別れ、<br />
            「自分はどこに属するのか」という問いだけが残された。
          </p>

          <p className="mb-5 leading-[2.1]">
            その後の人生でも、彼は常に境界の手前に立ち続けた。<br />
            学校にも馴染めず、既存の価値観には反発し、どこにも完全にはフィットしない。<br />
            だが——その“居場所のなさ”こそが、感性を研ぎ澄ませていく。
          </p>

          <p className="mag-pull text-[17px] text-center my-10 tracking-[0.02em]">
            「小さなノイズが、なぜか気になる」
          </p>

          <p className="mb-5 leading-[2.1]">
            1mm のズレ、空気の濁り、手触り。<br />
            多くの人が見落とす“雑味”に、彼だけが強烈に反応した。
          </p>

          <p className="leading-[2.1]">
            後に “Apple が世界を変える”<br />
            <span className="font-medium">美と機能の統合</span> は、  
            この違和感センサーが原点となる。
          </p>
        </section>
{/* =====================================================
    AIR BREAK（光膜 × 名言）— 改善版
===================================================== */}
<section className="fade-sec relative rounded-[14px] overflow-hidden h-[48vh] flex items-center justify-center">

  {/* 背景画像 */}
  <img
    src="/images/jobs/break-light.png"
    className="absolute inset-0 w-full h-full object-cover opacity-[0.92]"
  />

  {/* 光幕 + 読みやすさ補正（白を抑える） */}
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
      `
    }}
  />

  {/* 銀膜（薄） */}
  <div
    className="absolute inset-0 backdrop-blur-[0.7px] opacity-[0.60]"
    style={{
      background:
        "radial-gradient(circle at 50% 46%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.12) 32%, rgba(255,255,255,0.05) 72%)",
    }}
  />

  {/* TEXT */}
  <div className="relative z-20 text-center px-4">
    <h2
      className="
        text-[22px] leading-[1.55] font-light tracking-[0.14em]
        text-black/85
        drop-shadow-[0_1px_8px_rgba(255,255,255,0.55)]
      "
    >
      Simplicity is an act of courage,<br />
      not the absence of complexity.
    </h2>

    <p
      className="
        mt-4 text-[14px] leading-[1.9]
        text-black/70 font-light
      "
    >
      シンプルとは、ただ“削る”ことではない。<br />
      不必要を捨てるという、静かだが決定的な勇気のことだ。
    </p>
  </div>
</section>
        {/* =====================================================
            CHAPTER 02 — 意味の嗅覚
        ===================================================== */}
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

          <h2 className="mag-title mb-8">意味の嗅覚</h2>

          <p className="mb-5 leading-[2.1]">
            子どものころのジョブズは、  
            “形だけ” のものに、どうしても馴染めなかった。<br />
            宿題も校則も、理由のないものはすべて空気が濁って見えた。
          </p>

          <p className="mb-5 leading-[2.1]">
            一方で、ほんの一瞬でも「これは本物だ」と感じると、  
            その世界にまるごと呑まれてしまう。<br />
            色、質感、線。  
            彼の中ではそれらが“意味のある配置”で並び替わっていく。
          </p>

          <p className="my-10 text-center text-[17px] tracking-[0.02em] opacity-85">
            「これは何のために存在しているのか？」
          </p>

          <p className="mb-5 leading-[2.1]">
            この問いは、思考ではなく“標準設定”となった。<br />
            大学へ進んでも、それは揺らがない。  
            無意味な情報を積み上げる授業には、  
            彼の感覚は一切反応しなかった。
          </p>

          <p className="mb-5 leading-[2.1]">
            だからこそ、入学してまもなく大学を離れた。<br />
            それは逃避ではなく、  
            彼にとっては “意味のないものを削る” という、  
            ごく自然な選択だった。
          </p>

          <p className="leading-[2.1]">
            ただし、空白の時間ではなかった。<br />
            カリグラフィーの授業で見た曲線の美しさは、  
            のちの <span className="font-medium">Mac文化の基礎</span> となる  
            “美の基準” を形づくった。
          </p>
        </section>

        {/* =====================================================
            CHAPTER 03 — 起業前夜
        ===================================================== */}
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

          <h2 className="mag-title mb-8">起業前夜 — 火がつく瞬間</h2>

          <p className="mb-5 leading-[2.1]">
            大学を離れたあと、ジョブズはしばらく  
            “どこにも属さない時間” を彷徨った。<br />
            朝の光の角度さえ、心の揺らぎと連動して見えるような日々。
          </p>

          <p className="mb-5 leading-[2.1]">
            禅に傾倒したのも偶然ではない。  
            世界の“表面”ではなく、  
            その奥にある静かな秩序に触れようとした。
          </p>

          <p className="my-10 text-center text-[17px] opacity-85 tracking-[0.02em]">
            「自分が信じる世界は、誰かが作ってくれるものではない。」
          </p>

          <p className="mb-5 leading-[2.1]">
            その種に火をつけたのが、旧友との再会だった。  
            小さな集会で見た、未完成で粗野なマシン。<br />
            だがその奥には、誰も拾っていない“未来の匂い”があった。
          </p>

          <p className="mb-5 leading-[2.1]">
            テクノロジーはまだ“使う人の世界”をデザインしていない。  
            触れる前の“入口”さえ存在していない。
          </p>

          <p className="leading-[2.1] font-medium">
            こうしてガレージの小さな空間から Apple が始まる。<br />
            起業は野心ではなく、  
            “世界の雑味を消す” という本能の延長だった。
          </p>
        </section>
{/* =====================================================
    CHAPTER 04 — ガレージ革命（見開き）
===================================================== */}
<section id="ch04sp" className="fade-sec relative">

  {/* =======================
      ① ガレージ画像だけ
  ======================= */}
  <div className="relative rounded-[18px] overflow-hidden mb-10">
    <img
      src="/images/jobs/garage_revo.png"
      className="w-full max-h-[420px] object-cover"
      alt=""
    />
  </div>

  {/* =======================
      ② 画像の外に文字を独立
  ======================= */}
  <div className="max-w-[680px] mx-auto px-4 text-center">

    <p className="text-[11px] tracking-[0.28em] opacity-60 mb-4">
      SPECIAL FEATURE — CHAPTER 04
    </p>

    <h2 className="mag-title mb-6 leading-[1.42]">
      ガレージの革命<br />
      世界観が形になる瞬間
    </h2>

    <p className="text-[15px] leading-[1.92] font-light opacity-[0.92] mb-4">
      粗野な基板の奥にだけ、ほのかな光のような  
      「触れられる未来の原型」が見えていた。
    </p>

    <p className="text-[15px] leading-[1.92] font-light opacity-[0.9] mb-7">
      技術の文脈に、美学の語彙を持ち込める者。  
      その“翻訳者”は、当時まだ世界にいなかった。
    </p>

    <p className="text-[17px] opacity-85 tracking-[0.02em] my-8">
      「未来は、誰もが触れられたときに初めて革命になる。」
    </p>

    <p className="text-[15px] leading-[1.92] font-light opacity-[0.96] mb-8">
      ガレージで始まったのは、企業の誕生ではない。  
      世界を“どう見せるか”。  
      その問いへの最初の解答だった。
    </p>

  </div>
</section>
                {/* =====================================================
            CHAPTER 05 — VISION（見える前に視えていた）
        ===================================================== */}
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
            見える前に“視えていた”
          </h2>

          <p className="mb-5 leading-[2.1]">
            ジョブズは未来を「予想」したわけではない。  
            まだ誰も注目していない“気配”を、  
            他人より早く感じ取っていただけだ。
          </p>

          <p className="mb-5 leading-[2.1]">
            技術の積み木ではなく、  
            <span className="font-medium">人間の動き・感情・迷い</span> に  
            意識が向き続けていた。  
            当時の業界には珍しかった“ユーザー視点”を  
            彼は最初から当たり前に持っていた。
          </p>

          <p className="my-10 text-center text-[17px] opacity-85 tracking-[0.02em]">
            「人は何をするときに立ち止まるだろう？」
          </p>

          <p className="leading-[2.1]">
            この問いが、Apple のプロダクトを  
            “美しいだけではない”  
            <span className="font-medium">人の動線まで設計された道具</span> に変えていく。
          </p>
        </section>

        {/* =====================================================
            CHAPTER 06 — ESSENCE（本質）
        ===================================================== */}
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

          <h2 className="mag-title mb-8">本質の眼</h2>

          <p className="mb-5 leading-[2.1]">
            プロダクトを語るとき、  
            ジョブズがいつも最後に向かうのは “本質” だった。  
            「なぜ作るのか？」  
            その問いを曖昧にしたままでは、世界は動かない。
          </p>

          <p className="mb-5 leading-[2.1]">
            彼は “機能の集合体” を作りたかったのではない。  
            人が触れた瞬間に世界が一段軽くなるような、  
            <span className="font-medium">思想の道具</span> を作りたかった。
          </p>

          <p className="my-10 text-center text-[17px] tracking-[0.02em] opacity-85">
            「本質だけが、人を動かす。」
          </p>

          <p className="leading-[2.1]">
            だからこそ、彼が語る「美しさ」は  
            見た目の良さではなく、  
            <span className="font-medium">余計なものが存在しない状態</span> のことだった。
          </p>
        </section>

        {/* =====================================================
            CHAPTER 07 — Think Different の根
            （SP 版：最終章 / 静寂フィナーレ）
        ===================================================== */}
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
            Think Different の根
          </h2>

          <p className="mb-5 leading-[2.1]">
            ジョブズは “成功した” わけでも、  
            “勝った” わけでもない。  
            ただ、世界の見え方に誠実であり続けた。
          </p>

          <p className="mb-5 leading-[2.1]">
            世界が複雑になるほど、  
            彼が掲げた言葉は静かに重みを増していく。
          </p>

          <p className="my-10 text-center text-[17px] tracking-[0.02em] opacity-85">
            「世界に影響を与える人は、  
            それを“選んでいる”のではなく、  
            そうするしかない世界の見方をしている。」
          </p>

          <p className="leading-[2.1]">
            道具を作ったのではなく、<br />
            <span className="font-medium">人の未来の“動き”そのもの</span> を  
            再設計した男。  
            そこにあるのは成功物語ではない。  
            世界を静かに、しかし確かに動かした “視点” の話だ。
          </p>
        </section>

        {/* =====================================================
            CLOSING VISUAL（光の余韻）
        ===================================================== */}
        <section className="fade-sec relative rounded-[20px] overflow-hidden h-[46vh]">

          <img
            src="/images/jobs/closing_abstract.png"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.88]"
            alt=""
          />

          <div
            className="
              absolute inset-0 backdrop-blur-[0.6px]
              bg-gradient-to-b from-white/65 via-white/32 to-white/6
            "
          />

          <div className="relative z-20 h-full flex items-center justify-center px-6 text-center">
            <h2
              className="
                text-[22px] leading-[1.6]
                tracking-[0.18em] font-light text-black/80
              "
            >
              世界を動かすのは、<br />
              いつだって “視点” だ。
            </h2>
          </div>
        </section>

      </div> 

    </div>  
  );
}