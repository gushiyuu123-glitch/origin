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

  const breatheTweenRef = useRef(null);
  const isHoveringRef = useRef(false);

  const followXRef = useRef(null);
  const followYRef = useRef(null);

  const navigate = useNavigate();

  /* =========================
     神殿起動
  ========================== */
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (axisGlowRef.current) {
        gsap.to(axisGlowRef.current, {
          opacity: 0.7,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (namesRef.current?.length) {
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
      }

      if (titleRef.current) {
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
      }

      if (logoRef.current) {
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
      }

      if (silhouetteRef.current) {
        gsap.set(silhouetteRef.current, { x: 0, y: 0 });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* =========================
     マウス追従
  ========================== */
  useEffect(() => {
    const el = silhouetteRef.current;
    if (!el) return;

    followXRef.current = gsap.quickTo(el, "x", { duration: 0.9, ease: "power3.out" });
    followYRef.current = gsap.quickTo(el, "y", { duration: 0.9, ease: "power3.out" });

    const move = (e) => {
      if (!isHoveringRef.current) return;

      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;

      followXRef.current?.(x * 34);
      followYRef.current?.(y * 34);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* =========================
     Hover（サイズ可変）
  ========================== */
  const showSilhouette = (image, size = 1400) => {
    const el = silhouetteRef.current;
    if (!el) return;

    isHoveringRef.current = true;

    if (breatheTweenRef.current) {
      breatheTweenRef.current.kill();
      breatheTweenRef.current = null;
    }

    gsap.killTweensOf(el);

    el.src = image;
    el.style.width = `${size}px`;   // ← ここが重要

    gsap.set(el, { opacity: 0, scale: 0.992 });

    gsap.to(el, {
      opacity: 0.2,
      scale: 1,
      duration: 0.75,
      ease: "power2.out",
      onComplete: () => {
        breatheTweenRef.current = gsap.to(el, {
          opacity: 0.235,
          duration: 6.2,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      },
    });

    if (axisGlowRef.current) {
      gsap.to(axisGlowRef.current, {
        opacity: 1,
        duration: 0.7,
      });
    }
  };

  const hideSilhouette = () => {
    const el = silhouetteRef.current;
    if (!el) return;

    isHoveringRef.current = false;

    if (breatheTweenRef.current) {
      breatheTweenRef.current.kill();
      breatheTweenRef.current = null;
    }

    gsap.killTweensOf(el);

    gsap.to(el, {
      opacity: 0,
      duration: 0.55,
      ease: "power2.out",
      onComplete: () => {
        gsap.set(el, { x: 0, y: 0 });
      },
    });

    if (axisGlowRef.current) {
      gsap.to(axisGlowRef.current, {
        opacity: 0.7,
        duration: 0.55,
      });
    }
  };

  const handleEnter = (route) => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => navigate(route),
    });
  };

  /* =========================
     データ（サイズ指定）
  ========================== */
  const names = [
    { text: "VAN GOGH", sub: "感性", route: "/vangogh", style: "top-[18%] left-[12%]", image: "/silhouettes/vangogh.png", imageSize: 1400 },
    { text: "LEONARDO", sub: "構造", route: "/leonardo", style: "top-[62%] right-[8%]", image: "/silhouettes/leonardo.png", imageSize: 1400 },
    { text: "EINSTEIN", sub: "直感", route: "/einstein", style: "top-[13%] left-[48%]", image: "/silhouettes/einstein.png", imageSize: 1400 },

    // 半分サイズ
    { text: "JOBS", sub: "本質", route: "/jobs", style: "top-[75%] left-[28%]", image: "/silhouettes/jobs.png", imageSize: 750 },
    { text: "MUSK", sub: "革命", route: "/musk", style: "top-[28%] right-[24%]", image: "/silhouettes/musk.png", imageSize: 750 },
    {
  text: "LE BON",
  sub: "心理",
  route: "/lebon",
  style: "top-[46%] right-[14%]",
  image: "/silhouettes/lebon1.png",
  imageSize: 750,     // ← ルボンは半身の“抽象シルエット”が美しい
},
  ];

  return (
    
    <section
      ref={containerRef}
      className="relative w-screen h-screen bg-[#030303] text-white overflow-hidden"
    >
      {/* JSON-LD（ORIGIN 本拠地 SEO） */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "name": "ORIGIN｜創造の源",
          "url": "https://origin-gray.vercel.app",
          "description":
            "ゴッホ・レオナルド・アインシュタイン・ジョブズ・マスク――領域を越えた天才たちの“核”を体験として再構築するデジタル思想ミュージアム。",
        },
        {
          "@type": "WebPage",
          "name": "ORIGIN｜創造の源",
          "url": "https://origin-gray.vercel.app",
          "description":
            "感性・構造・直感・本質・革命――五つの思想軸で“創造の正体”を探索する体験型デジタル空間。",
          "primaryImageOfPage":
            "https://origin-gray.vercel.app/ogp/origin-top.jpg",
        }
      ]
    }),
  }}
></script>
        {/* 神域光膜 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(1200px 800px at 50% 45%, rgba(255,255,255,0.03), transparent 70%)",
        }}
      />
    {/* 背景 */}
      <img
        src="/origin-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-45"
        style={{ filter: "blur(0.4px) brightness(0.75) contrast(1.15)" }}
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
          className="opacity-0"
          style={{
            width: "1400px",
            filter: "blur(6px) brightness(1.15) contrast(1.05)",
            WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 90%)",
            maskImage: "linear-gradient(to bottom, black 55%, transparent 90%)",
          }}
        />
      </div>

  {/* 軸 */}
      <div
        ref={axisCoreRef}
        className="absolute left-1/2 top-0 h-full w-[1px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.35), transparent)",
          opacity: 0.5,
        }}
      />

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

      {/* 中央 */}
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

        <img ref={logoRef} src="/images/origin-logo.png" alt="ORIGIN" className="w-[240px] opacity-0" />
      </div>    
  {/* 周囲碑文 */}
      {names.map((item, i) => (
        <div
          key={i}
          ref={(el) => (namesRef.current[i] = el)}
          onMouseEnter={() => showSilhouette(item.image, item.imageSize)}
          onMouseLeave={hideSilhouette}
          onClick={() => handleEnter(item.route)}
          className={`absolute ${item.style} flex flex-col items-start cursor-pointer select-none`}
        >
          <span className="text-sm tracking-[0.45em]" style={{ opacity: 0.3 }}>
            {item.text}
          </span>

          <span className="mt-2 text-[12px] tracking-[0.5em]" style={{ opacity: 0.65 }}>
            {item.sub}
          </span>
        </div>
      ))}
      {/* BASE LINK — Hero右下 */}
<div
  onClick={() => window.open("https://gushikendesign.com", "_blank")}
  className="fixed bottom-8 right-10 z-[5000] cursor-pointer select-none"
  style={{
    fontSize: "11px",
    letterSpacing: "0.28em",
    opacity: 0.45,
    color: "rgba(255,255,255,0.85)",
    transition: "opacity 0.4s ease, letter-spacing 0.4s ease",
    textShadow:
      "0 1px 2px rgba(0,0,0,0.35), 0 0 6px rgba(255,255,255,0.08)",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.opacity = "0.8";
    e.currentTarget.style.letterSpacing = "0.32em";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.opacity = "0.45";
    e.currentTarget.style.letterSpacing = "0.28em";
  }}
>
  BASE｜GUSHIKEN DESIGN
</div>
    </section>
  );
}