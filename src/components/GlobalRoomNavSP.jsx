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
    gap: "13px",                // 少しだけ詰める
    fontSize: "11px",           // ← 14 → 13 に微調整
    fontFamily: "serif",
    color: "#1b1b1b",
    textAlign: "center",
    padding: "0 28px",
    transform: "translateY(-4%)",  // ← ほんの少し上へ
  }}
>

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
                      transition: "all 0.3s ease",
                    }}
                    onTouchStart={(e) =>
                      (e.currentTarget.style.opacity = "0.6")
                    }
                    onTouchEnd={(e) =>
                      (e.currentTarget.style.opacity =
                        active ? "1" : "0.75")
                    }
                  >
                    {room.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
