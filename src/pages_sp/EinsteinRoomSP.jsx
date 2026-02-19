// src/pages_sp/EinsteinRoomSP.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EinsteinRoomSP() {
  const containerRef = useRef(null);
  const heroTitleRef = useRef(null);

  /* ============================================================
     GSAP — SP 全体アニメーション（軽量 × 上品）
  ============================================================ */
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ------------------------------------------------
         1) HERO — 微小時間歪み（SP弱）
      ------------------------------------------------ */
      if (heroTitleRef.current) {
        gsap.to(heroTitleRef.current, {
          letterSpacing: "0.28em",
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      /* ------------------------------------------------
         2) セクションフェード（SPは軽く）
      ------------------------------------------------ */
      const sections = gsap.utils.toArray(".es-sp-section");

      sections.forEach((sec) => {
        const target = sec.querySelector(".fade-up");

        if (target) {
          gsap.set(target, { opacity: 0, y: 24 });

          gsap.to(target, {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
              once: true,
            },
          });
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* ============================================================
     Timeline Section（SP）
  ============================================================ */
  const TimelineSection = ({ year, title, description, image }) => (
    <section className="es-sp-section relative min-h-[100svh] flex items-center px-[6vw] overflow-hidden">

      {/* 背景 */}
      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        alt=""
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[520px] mx-auto fade-up text-left">

        <p className="text-[10px] tracking-[0.45em] text-white/50 mb-6">
          {year}
        </p>

        <h2 className="text-[22px] tracking-[0.18em] font-light leading-[1.5] mb-8">
          {title}
        </h2>

        {description && (
          <p className="text-[14px] leading-[1.9] text-white/70 font-light whitespace-pre-line">
            {description}
          </p>
        )}

      </div>
    </section>
  );

  /* ============================================================
     RETURN — MAIN構造
  ============================================================ */
  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black text-white overflow-hidden"
    >

      {/* ================= HERO ================= */}
      <section className="es-sp-section relative min-h-[100svh] flex items-center px-[6vw] overflow-hidden">

        <img
          src="/images/einstein/hero1.png"
          className="absolute inset-0 w-full h-full object-cover object-[25%_50%] opacity-65"
          alt=""
        />

        {/* 黒を抜いた上品なグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/60 to-black/85 z-10" />

        {/* 光膜 */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 70% 40%, rgba(255,255,255,0.25) 0%, transparent 60%)",
          }}
        />

        {/* HERO TITLE */}
        <div className="relative z-20 w-full text-right pr-[10vw] mt-[16vh] fade-up">

          <h1
            ref={heroTitleRef}
            className="
              text-[30px]
              tracking-[0.30em]
              font-light
              leading-[1.35]
              text-white/80
            "
          >
            時空の設計者
          </h1>

          <p
            className="
              mt-5
              text-[9px]
              tracking-[0.5em]
              text-white/40
              text-center
              self-center
            "
          >
            ALBERT EINSTEIN
          </p>

        </div>

      </section>

      {/* ================= TIMELINE ================= */}
<TimelineSection
  year="1879"
  title="コンパス"
  description={`幼い彼の手の中で、
針は静かに揺れていた。

誰も触れていないのに、
なぜ動くのか。

見えない力が、
ただ黙って世界を貫いている。

その不可解な静けさに、
少年は怯えず、見入った。

—— 目には見えない“法則”がある。

その直感が、
後の宇宙を変える最初の灯りとなった。`}
  image="/images/einstein/1879.png"
/>
<TimelineSection
  year="1896"
  title="チューリッヒ — 天才ではない。ただ疑う"
  description={`十七歳で辿り着いた工科大学。

だが、彼は“優等生”ではなかった。
暗記よりも、理解を選んだ。

教授の言葉をそのまま信じられなかった。
反抗ではない。確かめたかった。

本当にそうなのか。
その前提は正しいのか。

数式の前に、問いが立ち上がる。
答えより、背後の構造を知りたかった。

彼はまだ特別ではない。
ただ一つ、疑い続けることだけが、
彼を別の場所へ導いていた。`}
  image="/images/einstein/1896.png"
/>
<TimelineSection
  year="1902"
  title="特許庁 — 埋もれた時間"
  description={`学者になれず、辿り着いたのは特許庁。

単調に見える仕事——
だが彼には違った。

机に積まれた図面の裏側で、
世界の仕組みが静かに呼吸していた。

昼は申請を読み、
夜はノートを開く。

紙の向こうにある“法則”の骨組みを、
一つずつ外していくような時間。

誰も見ていない場所で、
誰にも期待されずに。

この埋もれた日々こそが、
世界を変える準備だった。`}
  image="/images/einstein/1902.png"
/>


<TimelineSection
  year="1905"
  title="奇跡の年 — 時間が壊れる"
  description={`1905年。
静かな部屋で、世界がひっそりと揺れた。

光は粒でもあり、波でもある。
時間は一定ではない。
質量とエネルギーは同じ——E=mc²。

これらは、特許庁の休憩時間に生まれた。

若い無名の技術官が、
“時間とは何か”という定義を書き換えた。

のちに奇跡の年と呼ばれる。
だが本人は、ただ静かにノートを閉じただけだった。`}
  image="/images/einstein/1905.png"
/>

<TimelineSection
  year="1915"
  title="一般相対性理論 — 重力が曲がる"
  description={`十年の思索の果てに辿り着いた答え。

重力とは“力”ではなく、
空間そのものが曲がる現象。

その数式は、美しかった。
宇宙の構造が詩のように流れていた。

何度も倒れ、
体を壊し、
仲間を失っても、

彼は手を止めなかった。

宇宙の静寂の奥に、
確かな真実があると信じていたから。`}
  image="/images/einstein/1915.png"
/>

<TimelineSection
  year="1933"
  title="亡命 — 世界が狂う"
  description={`ナチスが台頭し、
世界が急に冷たくなった。

研究室は奪われ、
家は焼かれ、
故郷は彼を裏切り者と呼んだ。

彼は静かにアメリカへ渡った。

天才であっても、
世界は簡単に狂う。

この頃から彼は、
物理だけでなく“人間”そのものと向き合い始める。

宇宙より扱いにくい、
複雑で不確かな存在と。`}
  image="/images/einstein/1933.png"
/>

<TimelineSection
  year="1955"
  title="静かな終わり — 時間を壊した男の最期"
  description={`1955年。
彼の枕元には未完成の方程式があった。

最後の瞬間まで、
世界の構造を追い続けていた証。

宇宙は曲がり、
時間は伸び縮みし、
光は粒であり、波でもある。

そのすべてを明らかにした男は、
驚くほど静かに息を引き取った。

“神はサイコロを振らない。”

それは頑固さではなく、
世界の美しさへの確信に近い祈りだった。`}
  image="/images/einstein/1955.png"
/>


      {/* END SPACE */}
      <div className="h-[12vh] bg-gradient-to-b from-transparent to-black" />

    </div>
  );
}
