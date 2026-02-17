// src/pages_sp/EinsteinRoomSP.jsx
import { useEffect } from "react";
import gsap from "gsap";

export default function EinsteinRoomSP() {
  useEffect(() => {
    gsap.fromTo(
      ".fade-up",
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="min-h-screen bg-black text-white px-[6vw] pt-[18vh] pb-[18vh]">
      <div className="max-w-[520px] mx-auto">

        <h1
          className="
            text-[28px]
            tracking-[0.25em]
            font-light
            mb-6
            fade-up
          "
        >
          時空の設計者
        </h1>

        <p
          className="
            text-[11px]
            tracking-[0.6em]
            opacity-60
            mb-12
            fade-up
          "
        >
          ALBERT EINSTEIN
        </p>

        <p className="text-[15px] leading-[2.1] opacity-80 fade-up">
          直感は、論理よりも速い。
          <br /><br />
          数式は直感の翻訳だった。
          <br /><br />
          観測が、世界を決める。
        </p>

      </div>
    </section>
  );
}
