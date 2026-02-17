import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

export default function HeroPC() {
  const namesRef = useRef([]);
  const containerRef = useRef(null);
  const axisGlowRef = useRef(null);
  const axisCoreRef = useRef(null);
  const titleRef = useRef(null);
  const logoRef = useRef(null);
  const silhouetteRef = useRef(null);
  const navigate = useNavigate();

  /* =========================
     神殿起動
  ========================== */
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* 軸呼吸 */
      gsap.to(axisGlowRef.current, {
        opacity: 0.7,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* 名前出現 */
      gsap.fromTo(
        namesRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 0.6,
          y: 0,
          duration: 2.5,
          stagger: 0.4,
          ease: "power3.out",
        }
      );

      namesRef.current.forEach((el) => {
        gsap.to(el, {
          y: "+=10",
          duration: 18 + Math.random() * 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      /* タイトル */
      const chars = titleRef.current.querySelectorAll(".char");

      gsap.set(chars, { opacity: 0, y: 40, scale: 0.9 });

      gsap.to(chars, {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 2.6,
        delay: 1.1,
        stagger: 0.07,
        ease: "power4.out",
      });

      /* ロゴ刻印 */
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 0.65,
          scale: 1,
          duration: 2,
          delay: 2,
          ease: "power2.out",
        }
      );

      gsap.to(logoRef.current, {
        opacity: 0.72,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* =========================
     マウス追従（神の存在）
  ========================== */
  useEffect(() => {
    const move = (e) => {
      if (!silhouetteRef.current) return;

      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;

      gsap.to(silhouetteRef.current, {
        x: x * 40,
        y: y * 40,
        duration: 2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* =========================
     Hover 神出現（溶解版）
  ========================== */
  const showSilhouette = (image) => {
    const el = silhouetteRef.current;
    if (!el) return;

    gsap.to(el, {
      opacity: 0,
      duration: 0.25,
      onComplete: () => {
        el.src = image;

        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.94 },
          {
            opacity: 0.10,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
          }
        );
      },
    });

    gsap.to(axisGlowRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const hideSilhouette = () => {
    gsap.to(silhouetteRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(axisGlowRef.current, {
      opacity: 0.7,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  /* =========================
     遷移
  ========================== */
  const handleEnter = (route) => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => navigate(route),
    });
  };

  const names = [
    {
      text: "VAN GOGH",
      sub: "感性",
      route: "/vangogh",
      style: "top-[18%] left-[12%]",
      image: "/silhouettes/vangogh.png",
    },
    {
      text: "LEONARDO",
      sub: "構造",
      route: "/leonardo",
      style: "top-[62%] right-[8%]",
      image: "/silhouettes/leonardo.png",
    },
    {
      text: "EINSTEIN",
      sub: "直感",
      route: "/einstein",
      style: "top-[13%] left-[48%]",
      image: "/silhouettes/einstein.png",
    },
    {
      text: "JOBS",
      sub: "本質",
      route: "/jobs",
      style: "top-[75%] left-[28%]",
      image: "/silhouettes/jobs.png",
    },
    {
      text: "MUSK",
      sub: "革命",
      route: "/musk",
      style: "top-[28%] right-[24%]",
      image: "/silhouettes/musk.png",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-screen h-screen bg-[#030303] text-white overflow-hidden"
    >
      {/* 背景 */}
      <img
        src="/origin-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-45"
        style={{
          filter: "blur(0.4px) brightness(0.75) contrast(1.15)",
        }}
      />

      {/* 神域光膜 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(1200px 800px at 50% 45%, rgba(255,255,255,0.03), transparent 70%)",
        }}
      />

      {/* シルエット */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          ref={silhouetteRef}
          src=""
          alt=""
          className="w-[1400px] opacity-0"
          style={{
            filter: "blur(6px) brightness(1.15) contrast(1.05)",
          }}
        />
      </div>

      {/* 軸芯 */}
      <div
        ref={axisCoreRef}
        className="absolute left-1/2 top-0 h-full w-[1px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.35), transparent)",
          opacity: 0.5,
        }}
      />

      {/* 軸滲み */}
      <div
        ref={axisGlowRef}
        className="absolute left-1/2 top-0 h-full w-[3px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent)",
          filter: "blur(6px)",
          opacity: 0.4,
        }}
      />

      {/* 中央領域 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h1
          ref={titleRef}
          className="text-[72px] tracking-[0.42em] font-light mb-10"
          style={{
            textShadow:
              "0 0 60px rgba(255,255,255,0.25), 0 0 220px rgba(255,255,255,0.07)",
          }}
        >
          {"創造の源".split("").map((char, i) => (
            <span key={i} className="char inline-block">
              {char}
            </span>
          ))}
        </h1>

        <div className="relative flex justify-center items-center -translate-y-[3vh]">
          <div
            className="absolute w-[480px] h-[480px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,220,170,0.08) 0%, rgba(0,0,0,0) 65%)",
              filter: "blur(70px)",
              opacity: 0.5,
            }}
          />

          <img
            ref={logoRef}
            src="/images/origin-logo.png"
            alt="ORIGIN"
            className="relative w-[240px] opacity-0"
            style={{
              filter:
                "drop-shadow(0 0 12px rgba(255,215,170,0.14))",
            }}
          />
        </div>
      </div>

      {/* 周囲碑文 */}
      {names.map((item, i) => (
        <div
          key={i}
          ref={(el) => (namesRef.current[i] = el)}
          onMouseEnter={() => showSilhouette(item.image)}
          onMouseLeave={hideSilhouette}
          onClick={() => handleEnter(item.route)}
          className={`absolute ${item.style} flex flex-col items-start cursor-pointer select-none`}
        >
          <span className="text-sm tracking-[0.45em]" style={{ opacity: 0.3 }}>
            {item.text}
          </span>
          <span className="mt-3 text-[12px] tracking-[0.5em]" style={{ opacity: 0.65 }}>
            {item.sub}
          </span>
        </div>
      ))}
    </section>
  );
}
