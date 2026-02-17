// src/rooms/EinsteinRoom.jsx
import { useEffect } from "react";
import gsap from "gsap";

export default function EinsteinRoom() {

  useEffect(() => {
    gsap.fromTo(
      ".fade-up",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.6,
        ease: "power3.out",
        stagger: 0.12,
      }
    );
  }, []);

  const Section = ({ image, title, children }) => (
    <section className="relative min-h-screen flex items-center px-[8vw] overflow-hidden">

      {/* 背景画像 */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover opacity-[0.28]"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* テキスト */}
      <div className="relative z-10 max-w-[780px] mx-auto">
        <h2 className="text-[28px] md:text-[40px] tracking-[0.2em] mb-12 fade-up">
          {title}
        </h2>
        <div className="text-[18px] leading-[2.3] opacity-85 space-y-8 fade-up">
          {children}
        </div>
      </div>
    </section>
  );

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-[8vw] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/einstein-hero.png"
            alt=""
            className="w-full h-full object-cover opacity-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/85 to-black" />
        </div>

        <div className="relative z-10 max-w-[900px] mx-auto">
          <h1 className="text-[52px] md:text-[80px] tracking-[0.22em] font-light mb-12 fade-up">
            時空の設計者
          </h1>
          <p className="text-[20px] leading-[2.4] opacity-85 fade-up">
            世界は、最初から歪んでいた。
          </p>
        </div>
      </section>

      {/* 静かな少年 */}
      <Section image="/images/einstein-school.png" title="静かな少年">
        <p>教室の後ろに、静かな少年がいる。</p>
        <p>成績は悪くない。だが、並外れているわけでもない。</p>
        <p>暗記はできる。だが、意味を感じない。</p>
        <p>「なぜそうなるのか」その答えがなければ、納得しなかった。</p>
      </Section>

      {/* 方位磁針 */}
      <Section image="/images/einstein-compass.png" title="見えない力">
        <p>五歳のとき、父が渡した方位磁針。</p>
        <p>何も触れていないのに、針は北を指す。</p>
        <p>見えない力が、世界を動かしている。</p>
        <p>その違和感は、消えなかった。</p>
      </Section>

      {/* 特許庁 */}
      <Section image="/images/einstein-patent.png" title="埋もれた時間">
        <p>研究職に就けず、特許庁で働く。</p>
        <p>書類を読み、整合性を確認する日々。</p>
        <p>華やかさはない。</p>
        <p>だが、頭の中では宇宙が動いていた。</p>
      </Section>

      {/* 思考実験 */}
      <Section image="/images/einstein-light.png" title="光を追う">
        <p>もし光と並んで走ったら、何が見えるのか。</p>
        <p>多くは忘れる。</p>
        <p>彼は忘れなかった。</p>
      </Section>

      {/* 1905 */}
      <Section image="/images/einstein-1905.png" title="1905">
        <p>時間は絶対ではない。</p>
        <p>空間は曲がる。</p>
        <p>世界は静かに書き換えられた。</p>
      </Section>

      {/* 本質 */}
      <Section image="/images/einstein-final.png" title="直感">
        <p>直感とは、突然のひらめきではない。</p>
        <p>長い違和感の蓄積が、ある瞬間、形になることだ。</p>
      </Section>

    </div>
  );
}
