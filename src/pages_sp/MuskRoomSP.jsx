// src/pages_sp/MuskRoomSP.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MuskRoomSP() {
  const heroImgRef = useRef(null);
  const heroTitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 呼吸
      gsap.to(heroImgRef.current, {
        scale: 1.01,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(heroTitleRef.current, {
        letterSpacing: "0.34em",
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#0d0d0d] text-white overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative h-[82vh] w-full overflow-hidden">

        {/* 背景膜 */}
        <div className="absolute inset-0 opacity-[0.18] bg-[url('/images/musk/neural-lines.png')] bg-cover" />

        {/* シルエット */}
        <img
          ref={heroImgRef}
          src="/images/musk/hero.png"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.88]"
          alt=""
        />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1
            ref={heroTitleRef}
            className="text-[30px] tracking-[0.28em] text-white/90 font-light"
          >
            ELON MUSK
          </h1>

          <p className="mt-2 text-[11px] tracking-[0.20em] text-white/55">
            GENIUS VECTOR
          </p>

          <p className="mt-8 text-[13px] leading-[1.9] text-white/70">
            生まれつき、常識のスケールを超えていた。  
            努力ではなく “初期値” が異常に高かった。
          </p>
        </div>
      </section>

      {/* =========================================================
          SECTION 1
      ========================================================= */}
      <section className="px-6 py-[100px]">

        <p className="text-[11px] tracking-[0.22em] opacity-50 mb-6">
          CHAPTER 01 — CHILDHOOD
        </p>

        <h2 className="text-[22px] tracking-[0.16em] mb-10 font-light text-white/90">
          生まれた瞬間から、世界の外側にいた。
        </h2>

        <img
          src="/images/musk/born.png"
          className="w-full rounded-[12px] opacity-[0.9] mb-8"
          alt=""
        />

        <p className="leading-[1.9] text-[14px] opacity-[0.85] mb-6">
          イーロン・マスクは南アフリカという“世界の中心から離れた場所”に生まれた。
          その時点で、人生の軌道は周囲とすでにズレていた。
        </p>

        <p className="leading-[1.9] text-[14px] opacity-[0.85] mb-6">
          幼少期から読書量は常人の10倍。
          理解速度も異常で、思考だけが未来へ先に進んでいた。
        </p>

        <p className="leading-[1.9] text-[14px] opacity-[0.85]">
          小さな頃から“世界の仕組みそのもの”に関心を持ち、
          宇宙や工学の本を読み漁っていた。
        </p>
      </section>
    </div>
  );
}