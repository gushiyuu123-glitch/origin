// src/pages_sp/JobsRoomSP.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./jobs_sp.css";

export default function JobsRoomSP() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-up",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 1.6,
          stagger: 0.22,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="jobs-room-sp">

      {/* ================= HERO ================= */}
      <section className="min-h-[80vh] flex items-center justify-center text-center px-6">
        <h1 className="text-[34px] tracking-[0.22em] font-light fade-up">
          JOBS — 本質
        </h1>
      </section>

      {/* コンテンツは後で追加 */}
    </div>
  );
}