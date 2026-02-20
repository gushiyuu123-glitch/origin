// src/components/GlobalRoomNavSP.jsx
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";

export default function GlobalRoomNavSP() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const bookRef = useRef(null);
  const overlayRef = useRef(null);

const rooms = [
  { name: "第一章  VAN GOGH", path: "/vangogh" },
  { name: "第二章  LEONARDO", path: "/leonardo" },
  { name: "第三章  EINSTEIN", path: "/einstein" },
  { name: "第四章  JOBS", path: "/jobs" },
  { name: "第五章  MUSK", path: "/musk" },

  // ★ 新章（心理）
  { name: "第六章  LE BON（心理）", path: "/lebon" },
];
  /* =============================
     Scroll Lock
  ============================== */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  /* =============================
     OPEN
  ============================== */
  const handleOpen = () => {
    setOpen(true);

    requestAnimationFrame(() => {
      if (!bookRef.current || !overlayRef.current) return;

      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: "power2.out" }
      );

      gsap.fromTo(
        bookRef.current,
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    });
  };

  /* =============================
     CLOSE
  ============================== */
  const handleClose = () => {
    if (!bookRef.current || !overlayRef.current) {
      setOpen(false);
      return;
    }

    gsap.to(bookRef.current, {
      opacity: 0,
      scale: 0.96,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.25,
      onComplete: () => setOpen(false),
    });
  };

  const go = (path) => {
    navigate(path);
    handleClose();
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* ORIGIN LOGO */}
      <div
        onClick={() => {
          navigate("/");
          window.scrollTo(0, 0);
        }}
        style={{
          position: "fixed",
          top: "18px",
          left: "18px",
          zIndex: 10000,
        }}
        className="cursor-pointer select-none"
      >
        <img
          src="/images/origin-logo.png"
          alt="ORIGIN"
          style={{
            width: "88px",
            opacity: 0.85,
            display: "block",
          }}
        />
      </div>

      {/* CLOSED BOOK */}
      {!open && (
        <div
          onClick={handleOpen}
          style={{
            position: "fixed",
            bottom: "24px",
            right: "20px",
            zIndex: 10000,
          }}
          className="cursor-pointer select-none"
        >
          <img
            src="/images/closed-book.png"
            alt="menu"
            style={{
              width: "54px",
              opacity: 0.85,
              display: "block",
            }}
          />
        </div>
      )}

      {/* OPEN BOOK */}
      {open && (
        <div
          ref={overlayRef}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* CLOSE */}
          <div
            onClick={handleClose}
            style={{
              position: "fixed",
              bottom: "26px",
              right: "22px",
              fontSize: "12px",
              letterSpacing: "0.25em",
              color: "white",
              opacity: 0.65,
              cursor: "pointer",
            }}
          >
            本を閉じる
          </div>

          <div
            ref={bookRef}
            style={{
              position: "relative",
            }}
          >
            <img
              src="/images/open-book.png"
              alt="open book"
              style={{
                width: "100vw",
                maxWidth: "540px",
                display: "block",
              }}
            />

{/* 章テキスト */}
<div
  style={{
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10.5px",               // ← 13px → 11px（本に合わせて詰める）
    fontSize: "9.5px",         // ← 11px → 小型化
    fontFamily: "serif",
    color: "#1b1b1b",
    textAlign: "center",
    padding: "0 10px",         // ← 28 → 18（本の内側に収まる）
    transform: "translateY(-1%)", // ← 少し上へ調整
    lineHeight: "1.45",        // 章タイトルが読みやすい最適値
  }}
>
            {/* 章リスト */}
  {rooms.map((room, i) => {
    const active = location.pathname === room.path;
 return (
      <div
        key={room.path}
        onClick={() => go(room.path)}
        style={{
          cursor: "pointer",
          letterSpacing: "0.16em",
          opacity: active ? 1 : 0.75,
          transform: `rotate(${i % 2 === 0 ? "-0.25deg" : "0.25deg"})`,
          textShadow:
            "0 1px 0 rgba(255,255,255,0.25), 0 2px 4px rgba(0,0,0,0.08)",
          transition: "opacity 0.35s ease",
        }}
        onTouchStart={(e) => (e.currentTarget.style.opacity = "0.55")}
        onTouchEnd={(e) =>
          (e.currentTarget.style.opacity = active ? "1" : "0.75")
        }
      >
        {room.name}
      </div>
    );
  })}
               {/* ---- BASE LINK ---- */}
<div
  onClick={() => window.open("https://gushikendesign.com", "_blank")}
  style={{
    marginTop: "0px",             // ← 22 → 10 に圧縮
    opacity: 0.55,
    fontSize: "9.6px",             // ← 少し縮めて本の幅に収める
    letterSpacing: "0.10em",       // ← 広がりを抑えて水平幅も圧縮
    lineHeight: "1.2",             // ← 高さを最も圧縮する調整
    transform: "rotate(0deg)",
    cursor: "pointer",
    textShadow:
      "0 1px 0 rgba(255,255,255,0.25), 0 2px 3px rgba(0,0,0,0.06)",
    transition: "opacity 0.35s ease, letter-spacing 0.35s ease",
  }}
  onTouchStart={(e) => (e.currentTarget.style.opacity = "0.75")}
  onTouchEnd={(e) => (e.currentTarget.style.opacity = "0.55")}
>
  BASE　GUSHIKEN DESIGN
</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
