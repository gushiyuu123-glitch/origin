// src/rooms/EinsteinRoom.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EinsteinRoom() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ================================
         HERO 微小時間歪み（超上品）
      ================================= */
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

      /* ================================
         セクション制御
      ================================= */

      const sections = gsap.utils.toArray(".es-section");

      sections.forEach((sec) => {
        const target = sec.querySelector(".fade-up");
        const bg = sec.querySelector(".es-bg");

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
      className="es-bg absolute inset-0 w-full h-full object-cover opacity-75"
      alt=""
    />

    {/* Dark layer（少しだけ軽くする） */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/90 z-10" />

    {/* Content */}
    <div className="relative z-20 max-w-[880px] fade-up">

      <p className="text-[12px] tracking-[0.5em] text-white/50 font-light mb-6">
        {year}
      </p>

      <h2 className="text-[clamp(34px,4vw,56px)] tracking-[0.24em] font-light leading-[1.3] mb-10  whitespace-pre-line whitespace-nowrap">
        {title}
      </h2>
<p className="
  text-[15px]
  leading-[2]
  tracking-[0.08em]
  text-white/70
  font-light
  max-w-[720px]
  mx-auto
  whitespace-pre-line
  whitespace-nowrap
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
  1879年、ドイツ・ウルムに生まれた少年。まだ五歳だった。

  父ヘルマンが差し出した小さなコンパス。
  何気ない贈り物だったが、針は静かに揺れていた。

  誰も触れていないのに、まるで“何か”に従うように。

  なぜ、動くのだろう。

  目には見えない力がここにある。
  少年は恐れなかった。ただ、世界には見えない法則があるのではないかと、初めて疑った。
"
  image="/images/einstein/1879.png"
/>
<TimelineSection
  year="1888"
  title="名もなき少年 — 型にはまらない"
  text="
  ミュンヘンの学校。

  規律は厳しく、答えは決まっていた。

  少年はうまくなじめなかった。
  言葉も遅く、教師からは問題児のように見られた。

  暗記することはできた。
  だが、それでは足りなかった。

  なぜそうなるのか。
  どうしてそう言えるのか。

  決められた答えよりも、
  自分で辿り着く理解を求めていた。

  まだ名もなき少年は、
  静かに、世界の“前提”を疑い始めていた。
"
  image="/images/einstein/school.png"
/>

<TimelineSection
  year="1896"
  title="チューリッヒ — 天才ではない。ただ疑う"
  text="
  1896年、十七歳。スイス・チューリッヒ工科大学へ。

  彼は“優等生”ではなかった。
  暗記よりも、理解を選んだ。

  教授の言葉をそのまま受け入れることができなかった。
  それは反抗ではなく、癖だった。

  本当にそうなのか。

  数式より先に、問いがあった。
  答えよりも、構造を知りたかった。

  天才ではない。ただ、疑うことをやめなかった。
"
  image="/images/einstein/1896.png"
/>

      <TimelineSection
        year="1902"
        title="特許庁 — 埋もれた時間"
        image="/images/einstein/1902.png"
      />

      <TimelineSection
        year="1905"
        title="奇跡の年 — 時間が壊れる"
        image="/images/einstein/1905.png"
      />

      <TimelineSection
        year="1915"
        title="一般相対性理論 — 重力が曲がる"
        image="/images/einstein/1915.png"
      />

      <TimelineSection
        year="1933"
        title="亡命 — 世界が狂う"
        image="/images/einstein/1933.png"
      />

      <TimelineSection
        year="1955"
        title="静かな終わり — 時間を壊した男の最期"
        image="/images/einstein/1955.png"
      />

      <div className="h-[16vh] bg-gradient-to-b from-transparent to-black" />

    </div>
  );
}
