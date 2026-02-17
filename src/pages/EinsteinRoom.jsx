// src/rooms/EinsteinRoom.jsx
import { useEffect } from "react";
import gsap from "gsap";

export default function EinsteinRoom() {
  useEffect(() => {
    gsap.fromTo(
      ".fade-up",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.6,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="min-h-screen bg-black text-white px-[8vw] pt-[20vh] pb-[20vh]">
      <div className="max-w-[900px] mx-auto">

        <h1
          className="
            text-[42px] md:text-[64px]
            tracking-[0.2em]
            font-light
            mb-8
            fade-up
          "
        >
          時空の設計者
        </h1>

        <h2
          className="
            text-[14px]
            tracking-[0.6em]
            opacity-60
            mb-16
            fade-up
          "
        >
          ALBERT EINSTEIN
        </h2>

        <p className="text-[18px] leading-[2.2] opacity-80 fade-up">
          直感は、論理よりも速い。
          <br /><br />
          数式は発明ではない。
          それは直感の翻訳だった。
          <br /><br />
          世界は固定されていない。
          観測が、現実を決める。
        </p>

      </div>
    </section>
  );
}
