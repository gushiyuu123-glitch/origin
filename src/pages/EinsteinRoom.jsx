// src/rooms/EinsteinRoom.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EinsteinRoom() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);
// ================================
// GSAP / ScrollTrigger 制御（完成版）
// ================================
useEffect(() => {
  const ctx = gsap.context(() => {

    /* ------------------------------------------------
       1) HERO — 微小時間歪み（恒常的な揺らぎ）
    ------------------------------------------------ */
    if (heroRef.current && heroTitleRef.current) {
      gsap.to(heroRef.current, {
        scale: 1.006,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(heroTitleRef.current, {
        letterSpacing: "0.38em",
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(heroTitleRef.current, {
        filter: "blur(0.2px)",
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }


    /* ------------------------------------------------
       2) 1905 - 奇跡の年：瞬間の時間歪みエフェクト
          （表示時に背景が一瞬だけワープする）
    ------------------------------------------------ */
    const miracleSec = document.querySelector(".year-1905");
    if (miracleSec) {
      const miracleBg = miracleSec.querySelector(".es-bg");

      if (miracleBg) {
        ScrollTrigger.create({
          trigger: miracleSec,
          start: "top 70%",
          onEnter: () => {
            gsap.fromTo(
              miracleBg,
              { filter: "blur(0px)", scale: 1 },
              {
                filter: "blur(1.2px)",
                scale: 1.015,
                duration: 0.35,
                ease: "power2.out",
                repeat: 1,
                yoyo: true,
              }
            );
          },
        });
      }
    }


    /* ------------------------------------------------
       3) セクション共通アニメーション
          - テキストフェード
          - 背景パララックス
    ------------------------------------------------ */
    const sections = gsap.utils.toArray(".es-section");

    sections.forEach((sec) => {
      const target = sec.querySelector(".fade-up");
      const bg = sec.querySelector(".es-bg");

      // 文字フェード
      if (target) {
        gsap.set(target, { opacity: 0, y: 40 });

        gsap.to(target, {
          opacity: 1,
          y: 0,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
            once: true,
          },
        });
      }

      // 背景パララックス
      if (bg) {
        gsap.to(bg, {
          y: -80,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    });

  }, containerRef);

  return () => ctx.revert();
}, []);

  /* ================================
     Timeline Section Component
  ================================= */
const TimelineSection = ({ year, title, text, image }) => (
  <section className="es-section relative min-h-screen flex items-center justify-center text-center px-8 overflow-hidden">

    {/* Background */}
    <img
      src={image}
      className="es-bg absolute inset-0 w-full h-full object-cover opacity-90"
      alt=""
    />

    {/* Dark layer（少しだけ軽くする） */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/70 z-10" />

    {/* Content */}
    <div className="relative z-20 max-w-[880px] fade-up">

      <p className="text-[12px] tracking-[0.5em] text-white/50 font-light mb-6">
        {year}
      </p>

      <h2 className="text-[clamp(34px,4vw,56px)] tracking-[0.24em] font-light leading-[1.3] mb-10  whitespace-pre-line ">
        {title}
      </h2>
<p className="
  text-[15px]
  leading-[2]
  tracking-[0.08em]
 text-white/80
  font-light
  max-w-[720px]
  mx-auto
  whitespace-pre-line
">

  {text}
</p>



    </div>
  </section>
);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black text-white overflow-hidden"
    >

      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="es-section relative min-h-screen flex items-center justify-center text-center px-8 overflow-hidden"
      >
       <img
  src="/images/einstein/hero1.png"
  className="
    es-bg
    absolute inset-0
    w-full h-full
    object-cover
    object-[10%_50%]   // ← 横を左寄せ
    opacity-55
  "
  alt=""
/>


<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black/90 z-10" />


<div className="relative z-20 w-full flex justify-end pr-[5vw]">


  <div className="text-right max-w-[900px]">

    <h1
      ref={heroTitleRef}
      className="
        text-[clamp(52px,6vw,92px)]
        tracking-[0.35em]
        font-light
        leading-[1.2]
      "
    >
      時空の設計者
    </h1>

    <p
      className="
        mt-8
        text-center md:text-[14px]
        tracking-[0.6em]
        text-white/40
        font-light
        fade-up 
      "
    >
      ALBERT EINSTEIN
    </p>

  </div>

</div>

      </section>

<TimelineSection
  year="1879"
  title="コンパス — 針が揺れる理由"
  text="
 1879年、ドイツ・ウルム。  
冬の朝の光が、幼い少年の頬をかすめていた。

五歳の彼に、父ヘルマンが小さなコンパスを手渡す。  
ただの玩具。  
そのはずだった。

だが、針は揺れていた。  
誰も触れていないのに、  
何かに引っ張られるように、静かに、迷わず。

少年は目を凝らした。  
目に見えない“力”が確かに働いている。

なぜ、動くのだろう。  
何が、この針を導いているのか。

少年は恐れなかった。  
世界には、まだ見えていない“法則”がある。  
それを初めて直感した瞬間だった。
"
  image="/images/einstein/1879.png"
/>
<TimelineSection
  year="1888"
  title="名もなき少年 — 型にはまらない"
  text="
 ミュンヘンの学校。  
規律は厳しく、答えは一つと決められていた。

少年は、その“正しさ”にどうしても馴染めなかった。  
言葉は遅く、教師には問題児のように映った。

暗記はできた。  
だが、そこに意味がなかった。

なぜそうなるのか。  
どうして、それが唯一の答えなのか。

問いは、いつも頭の中で続いていた。  
教室の静けさの中で、彼だけが別の場所を見ていた。

決められた答えの先に、  
まだ知られていない“構造”がある気がした。

名もなき少年は、  
世界の“前提”そのものを静かに疑い始めていた。

"
  image="/images/einstein/school.png"
/>

<TimelineSection
  year="1896"
  title="チューリッヒ — 天才ではない。ただ疑う"
  text="
1896年、十七歳。  
彼はスイス・チューリッヒ工科大学へ進んだ。

だが“優等生”ではなかった。  
暗記よりも、理解を選んだ。

教授の言葉をそのまま飲み込むことができなかった。  
反抗ではない。  
ただ、確かめずにはいられなかった。

本当にそうなのか。  
その前提は、どこから来たのか。

数式よりも先に、問いが立ち上がった。  
答えよりも、背後にある“構造”を知りたかった。

特別ではなかった。  
天才とも呼べなかった。  
ただ一つ、疑うことをやめなかった。

それが、彼を別の場所へ導いていく。

"
  image="/images/einstein/1896.png"
/>
<TimelineSection
  year="1902"
  title="特許庁 — 埋もれた時間"
  text="
1902年、二十三歳。  
彼は学者になれなかった。

行き着いた先は、スイス特許庁。  
単調に見える仕事――そのはずだった。

机の上には、発明の図面が積み重なっていた。  
歯車、回路、力の流れ。  
そこには、誰も気づかない“世界の仕組み”が散らばっていた。

昼は申請書を読み、  
夜は静かな部屋でノートを開く。

彼は、一枚の紙の裏側にある“構造”を見ようとしていた。  
法則の骨組みを、ひとつずつ外しながら。

誰も知らない場所で。  
誰にも期待されずに。

だがこの静かな時間こそが、  
歴史の扉をゆっくりと開き始めていた。

"
  image="/images/einstein/1902.png"
/>

<TimelineSection
  year="1905"
  title="奇跡の年 — 時間が壊れる"
  text="
1905年。  
この一年で、世界の形が変わった。

光は波でもあり、粒でもある。  
時間は一定ではない。  
質量とエネルギーは同じもの――E = mc²。

その三つの論文は、  
特許庁の休憩時間に書かれていた。  
薄い紙の上で、静かに常識が崩れていった。

若い無名の技術官が、  
“時間とは何か”の定義を書き換えた。

のちに「奇跡の年」と呼ばれる。  
だがその瞬間、彼はただノートを閉じた。

世界が揺らいだことに気づいた者は、  
まだ誰もいなかった。

"
  image="/images/einstein/1905.png"
  className="year-1905"
/>

<TimelineSection
  year="1915"
  title="一般相対性理論 — 重力が曲がる"
  text="
1915年。  
十年の思索が、ついに形を結ぶ。

重力は“力”ではなかった。  
空間そのものが、静かに曲がっている――  
その事実に気づいたとき、宇宙が別の姿を見せ始めた。

数式は、美しかった。  
宇宙の構造そのものが、一つの詩のように流れていた。

その道のりで、彼は何度も倒れた。  
体を壊し、仲間を失い、孤独と向き合う日々が続いた。

それでも手を止めなかった。  
真実は、苦しみの先にしか現れない。

宇宙の深い静寂の奥に、  
確かに“答え”があると信じていたからだ。

"
  image="/images/einstein/1915.png"
/>

<TimelineSection
  year="1933"
  title="亡命 — 世界が狂う"
  text="
1933年。  
ナチスが力を握り、世界の空気が急に冷たくなった。

研究室は奪われ、家は燃やされた。  
故郷ドイツは、彼を“裏切り者”と呼んだ。

彼は静かに荷物をまとめ、アメリカへ渡った。  
背後で世界が軋む音がしていた。

天才であっても、  
世界はあっけなく狂う。  
理性も、学問も、時代の波には勝てない。

この頃から彼は、物理だけではなく、  
“人間とは何か”という問いと向き合い始める。  
宇宙よりも扱いにくい、不確かな存在と。

"
  image="/images/einstein/1933.png"
/>

<TimelineSection
  year="1955"
  title="静かな終わり — 時間を壊した男の最期"
  text="
1955年。  
彼は静かに息を引き取った。

枕元には、未完成の方程式。  
最後の瞬間まで、世界の構造を追い続けていた証だった。

宇宙は曲がり、時間は伸び縮みし、  
光は粒であり、同時に波でもある。  
そのすべてを明らかにした男は、  
最後の最後まで、慎ましく、やさしかった。

“神はサイコロを振らない。”

その言葉は頑固さではなく、  
世界はもっと美しいはずだという、  
深い確信のような祈りだった。

宇宙の秘密を暴いた男の最期は、  
驚くほど静かで、澄んでいた。

"
  image="/images/einstein/1955.png"
/>

      <div className="h-[16vh] bg-gradient-to-b from-transparent to-black" />

    </div>
  );
}
