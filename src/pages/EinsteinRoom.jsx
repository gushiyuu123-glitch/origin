import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: "1879",
    title: "コンパス — 針が揺れる理由",
    text: `
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
    `,
    image: "/images/einstein/1879.png",
  },
  {
    year: "1888",
    title: "名もなき少年 — 型にはまらない",
    text: `
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
    `,
    image: "/images/einstein/school.png",
  },
  {
    year: "1896",
    title: "チューリッヒ — 天才ではない。ただ疑う",
    text: `
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
    `,
    image: "/images/einstein/1896.png",
  },
  {
    year: "1902",
    title: "特許庁 — 埋もれた時間",
    text: `
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
    `,
    image: "/images/einstein/1902.png",
  },
  {
    year: "1905",
    title: "奇跡の年 — 時間が壊れる",
    text: `
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
    `,
    image: "/images/einstein/1905.png",
    className: "year-1905",
    featured: true,
  },
  {
    year: "1915",
    title: "一般相対性理論 — 重力が曲がる",
    text: `
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
    `,
    image: "/images/einstein/1915.png",
  },
  {
    year: "1933",
    title: "亡命 — 世界が狂う",
    text: `
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
    `,
    image: "/images/einstein/1933.png",
  },
  {
    year: "1955",
    title: "静かな終わり — 時間を壊した男の最期",
    text: `
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
    `,
    image: "/images/einstein/1955.png",
  },
];

function splitParagraphs(text) {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function TimelineSection({
  year,
  title,
  text,
  image,
  className = "",
  featured = false,
}) {
  const paragraphs = useMemo(() => splitParagraphs(text), [text]);

  return (
    <section
      className={`es-section ${className} relative min-h-screen overflow-hidden px-6 py-28 md:px-10 md:py-32`}
    >
      <img
        src={image}
        className="es-bg absolute inset-0 h-full w-full object-cover opacity-[0.78]"
        alt=""
      />

      <div
        className={`absolute inset-0 z-10 ${
          featured
            ? "bg-gradient-to-b from-black/58 via-black/74 to-black/90"
            : "bg-gradient-to-b from-black/56 via-black/72 to-black/88"
        }`}
      />

      <div
        className="absolute inset-0 z-[11]"
        style={{
          background:
            "radial-gradient(ellipse 780px 520px at 50% 48%, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.3) 54%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      <div className="relative z-20 flex min-h-screen items-center justify-center text-center">
        <div className={`fade-up w-full ${featured ? "max-w-[900px]" : "max-w-[820px]"}`}>
          <p className="mb-7 text-[11px] font-light tracking-[0.5em] text-white/58 md:mb-8 md:text-[12px]">
            {year}
          </p>

          <h2
            className={`
              mb-10 font-light leading-[1.34] whitespace-pre-line text-white/96
              ${featured
                ? "text-[clamp(38px,4.8vw,66px)] tracking-[0.18em]"
                : "text-[clamp(30px,3.8vw,54px)] tracking-[0.16em]"}
            `}
          >
            {title}
          </h2>

          <div className="mx-auto max-w-[38em] space-y-5 md:space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p
                key={`${year}-${index}`}
                className={`
                  story-line
                  text-[15px] font-light leading-[2.05] tracking-[0.03em]
                  text-white/88 md:text-[16px] md:leading-[2.08]
                  ${featured && index < 2 ? "text-white/94" : ""}
                `}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function EinsteinRoom() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current && heroTitleRef.current) {
        gsap.to(heroRef.current, {
          scale: 1.006,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(heroTitleRef.current, {
          letterSpacing: "0.34em",
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      const miracleSec = document.querySelector(".year-1905");
      if (miracleSec) {
        const miracleBg = miracleSec.querySelector(".es-bg");
        const miracleText = miracleSec.querySelectorAll(".story-line, h2, p");

        ScrollTrigger.create({
          trigger: miracleSec,
          start: "top 68%",
          onEnter: () => {
            if (miracleBg) {
              gsap.fromTo(
                miracleBg,
                { filter: "blur(0px)", scale: 1 },
                {
                  filter: "blur(0.8px)",
                  scale: 1.015,
                  duration: 0.38,
                  ease: "power2.out",
                  repeat: 1,
                  yoyo: true,
                }
              );
            }

            gsap.fromTo(
              miracleText,
              { opacity: 0.74, y: 10 },
              {
                opacity: 1,
                y: 0,
                duration: 0.95,
                stagger: 0.035,
                ease: "power3.out",
              }
            );
          },
        });
      }

      const sections = gsap.utils.toArray(".es-section");

      sections.forEach((sec) => {
        const target = sec.querySelector(".fade-up");
        const bg = sec.querySelector(".es-bg");
        const lines = sec.querySelectorAll(".story-line");

        if (target) {
          gsap.set(target, { opacity: 0, y: 30 });

          gsap.to(target, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 82%",
              once: true,
            },
          });
        }

        if (lines?.length) {
          gsap.fromTo(
            lines,
            { opacity: 0.18, y: 14 },
            {
              opacity: 1,
              y: 0,
              duration: 0.95,
              stagger: 0.07,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sec,
                start: "top 75%",
                once: true,
              },
            }
          );
        }

        if (bg) {
          gsap.to(bg, {
            y: -58,
            scale: 1.04,
            ease: "none",
            scrollTrigger: {
              trigger: sec,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          });
        }
      });

      if (progressBarRef.current) {
        gsap.fromTo(
          progressBarRef.current,
          { scaleY: 0, transformOrigin: "top top" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          }
        );
      }

      const progressItems = gsap.utils.toArray(".timeline-marker");

      progressItems.forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 38%",
          end: "bottom 38%",
          onToggle: (self) => {
            const year = item.getAttribute("data-year");
            const all = progressRef.current?.querySelectorAll(".year-dot-wrap");

            all?.forEach((node) => {
              const isActive =
                node.getAttribute("data-year") === year && self.isActive;

              gsap.to(node.querySelector(".year-dot"), {
                opacity: isActive ? 1 : 0.28,
                scale: isActive ? 1.22 : 1,
                duration: 0.35,
                ease: "power2.out",
              });

              gsap.to(node.querySelector(".year-label"), {
                opacity: isActive ? 0.86 : 0.34,
                x: isActive ? 4 : 0,
                duration: 0.35,
                ease: "power2.out",
              });
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
      className="relative w-full overflow-hidden bg-black text-white"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "ORIGIN 第三章｜時空の設計者 — アルベルト・アインシュタイン",
            description:
              "アルベルト・アインシュタインの疑う才能と直感の構造を体験として再構築するデジタル展示。コンパスの衝撃、特許庁の思索、1905年の奇跡の年、一般相対性理論までを、空間として読む。",
            image: "https://origin-gray.vercel.app/ogp/einstein.jpg",
            author: {
              "@type": "Person",
              name: "GUSHIKEN DESIGN",
            },
            url: "https://origin-gray.vercel.app/einstein",
          }),
        }}
      />

      <div
        ref={progressRef}
        className="pointer-events-none fixed left-5 top-1/2 z-[60] hidden -translate-y-1/2 xl:block"
      >
        <div className="relative pl-5">
          <div className="absolute left-0 top-0 h-full w-px bg-white/10" />
          <div
            ref={progressBarRef}
            className="absolute left-0 top-0 h-full w-px bg-white/40"
            style={{ transformOrigin: "top top" }}
          />

          <div className="flex flex-col gap-5">
            {timelineData.map((item) => (
              <div
                key={item.year}
                data-year={item.year}
                className="year-dot-wrap relative"
              >
                <span className="year-dot absolute -left-[19px] top-[7px] h-[5px] w-[5px] rounded-full bg-white/90 opacity-30" />
                <span className="year-label text-[10px] tracking-[0.32em] text-white/34">
                  {item.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

 <section
  ref={heroRef}
  className="es-section relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center md:px-8"
>
  <img
    src="/images/einstein/hero1.png"
    className="es-bg absolute inset-0 h-full w-full object-cover object-[12%_50%] opacity-[0.48]"
    alt=""
  />

  <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/56 via-black/74 to-black/92" />

  <div
    className="absolute inset-0 z-[11]"
    style={{
      background:
        "radial-gradient(ellipse 820px 460px at 50% 48%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.28) 58%, rgba(0,0,0,0.52) 100%)",
    }}
  />

  <div className="relative z-20 flex w-full justify-end pr-[7vw] md:pr-[9vw]">
    <div className="w-full max-w-[720px] text-right">
      <p className="mb-6 text-[10px] font-light tracking-[0.56em] text-white/38 md:text-[11px]">
        ORIGIN / CHAPTER III
      </p>

      <h1
        ref={heroTitleRef}
        className="text-[clamp(44px,6vw,88px)] font-light leading-[1.18] tracking-[0.24em] text-white/96"
      >
        時空の設計者
      </h1>

      <p className="fade-up mt-8 text-[12px] font-light tracking-[0.56em] text-white/46 md:text-[14px]">
        ALBERT EINSTEIN
      </p>

      <p className="mt-10 ml-auto max-w-[30em] text-right text-[14px] leading-[2.05] tracking-[0.04em] text-white/74 md:text-[15px]">
        世界の答えを受け入れなかった男。<br />
        彼は、見えているものではなく、<br />
        まだ言語化されていない構造を見ていた。
      </p>
    </div>
  </div>
</section>

      {timelineData.map((item) => (
        <div
          key={item.year}
          className="timeline-marker"
          data-year={item.year}
        >
          <TimelineSection {...item} />
        </div>
      ))}

      <div className="h-[18vh] bg-gradient-to-b from-transparent to-black" />
    </div>
  );
}