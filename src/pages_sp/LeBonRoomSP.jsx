import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./lebon_sp.css";

gsap.registerPlugin(ScrollTrigger);

export default function LeBonRoomSP() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".lbsp-section");

      sections.forEach((sec) => {
        const target = sec.querySelector(".fade-up");
        if (!target) return;

        gsap.fromTo(
          target,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 80%",
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="lbsp-root bg-[#050506] text-white min-h-screen"
    >
      {/* HERO */}
      <section className="lbsp-section min-h-screen flex items-center px-6">
        <div className="fade-up text-left">
          <p className="lbsp-tag tracking-[0.32em] text-[11px] text-white/50 mb-3">
            CROWD PSYCHOLOGY
          </p>
          <h1 className="lbsp-title text-[32px] tracking-[0.32em] font-light mb-5">
            LE BON
          </h1>
          <p className="lbsp-sub text-[13px] leading-relaxed text-white/70">
            群衆は愚かになる。<br />
            そのとき、個の思考と感性はどこへ追いやられるのか。
          </p>
        </div>
      </section>

      {/* 以下、PC版と同じセクションをモバイル用クラス名に変えて配置していけばOK */}
      {/* 好きなタイミングで、PC版から要素を間引いたり順番変えたりしよう */}
    </main>
  );
}