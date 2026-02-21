// src/components/GlobalRoomNavPC.jsx
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";

export default function GlobalRoomNavPC() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const bookRef = useRef(null);
  const overlayRef = useRef(null);

  const base = { name: "BASE  GUSHIKEN DESIGN", url: "https://gushikendesign.com" };
const rooms = [
  { name: "第一章  VAN GOGH（感性／ゴッホ）", path: "/vangogh" },
  { name: "第二章  LEONARDO（構造／レオナルド）", path: "/leonardo" },
  { name: "第三章  EINSTEIN（直感／アインシュタイン）", path: "/einstein" },
  { name: "第四章  JOBS（本質／ジョブズ）", path: "/jobs" },
  { name: "第五章  MUSK（革命／マスク）", path: "/musk" },
  { name: "第六章  LE BON（心理／ル・ボン）", path: "/lebon" },
  { name: "第七章  DORSEY（情報／ドーシー）", path: "/dorsey" },
];
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
    requestAnimationFrame(() => {
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
      gsap.fromTo(
        bookRef.current,
        { scale: 0.94, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.9, ease: "power3.out" }
      );
    });
  };

  const handleClose = () => {
    gsap.to(bookRef.current, { opacity: 0, scale: 0.97, duration: 0.4, ease: "power2.out" });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.4,
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
        className="fixed top-6 left-6 z-[10000] cursor-pointer select-none"
      >
        <img
          src="/images/origin-logo.png"
          alt="ORIGIN"
          className="w-[110px] opacity-90 hover:opacity-100 transition duration-500"
        />
      </div>

      {/* CLOSED BOOK */}
      {!open && (
        <div
          onClick={handleOpen}
          className="fixed top-8 right-8 z-[9999] cursor-pointer text-center select-none"
        >
          <img
            src="/images/closed-book.png"
            className="w-[72px] opacity-75 hover:opacity-100 transition duration-500"
          />
          <div className="text-[9px] tracking-[0.45em] text-white mt-2 opacity-60">
            CHAPTER
          </div>
        </div>
      )}

      {/* OPEN BOOK */}
      {open && (
        <div
          ref={overlayRef}
          onClick={handleClose}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85"
        >
          {/* CLOSE BUTTON */}
          <div
            onClick={handleClose}
            style={{
              position: "fixed",
              top: "36px",
              right: "48px",
              zIndex: 10000,
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.28)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
              opacity: 0.7,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.border = "1px solid rgba(255,255,255,0.5)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "0.7";
              e.currentTarget.style.border = "1px solid rgba(255,255,255,0.28)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            ×
          </div>

          <div
            ref={bookRef}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img src="/images/open-book.png" className="w-[1000px] max-w-[94vw]" />

            {/* ===== 2カラム本レイアウト ===== */}
            <div
              className="absolute inset-0 flex items-center justify-center text-[17px] font-light"
              style={{ fontFamily: "serif", color: "#1b1b1b" }}
            >
              <div className="flex gap-28">
                {/* 左カラム */}
                <div className="flex flex-col items-center gap-6">
                  {rooms.slice(0, Math.ceil(rooms.length / 2)).map((room) => {
                    const active = location.pathname === room.path;
                    return (
                      <div
                        key={room.path}
                        onClick={() => go(room.path)}
                        className="cursor-pointer transition-all duration-400"
                        style={{
                          opacity: active ? 1 : 0.7,
                          letterSpacing: "0.18em",
                          textShadow:
                            "0 1px 0 rgba(255,255,255,0.25), 0 2px 3px rgba(0,0,0,0.08)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = "1";
                          e.currentTarget.style.letterSpacing = "0.22em";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = active ? "1" : "0.7";
                          e.currentTarget.style.letterSpacing = "0.18em";
                        }}
                      >
                        {room.name}
                      </div>
                    );
                  })}
                </div>

                {/* 右カラム */}
                <div className="flex flex-col items-center gap-6">
                  {rooms.slice(Math.ceil(rooms.length / 2)).map((room) => {
                    const active = location.pathname === room.path;
                    return (
                      <div
                        key={room.path}
                        onClick={() => go(room.path)}
                        className="cursor-pointer transition-all duration-400"
                        style={{
                          opacity: active ? 1 : 0.7,
                          letterSpacing: "0.18em",
                          textShadow:
                            "0 1px 0 rgba(255,255,255,0.25), 0 2px 3px rgba(0,0,0,0.08)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = "1";
                          e.currentTarget.style.letterSpacing = "0.22em";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = active ? "1" : "0.7";
                          e.currentTarget.style.letterSpacing = "0.18em";
                        }}
                      >
                        {room.name}
                      </div>
                    );
                  })}

                {/* BASE – GUSHIKEN DESIGN */}
<div
  onClick={() => window.open(base.url, "_blank")}
  className="cursor-pointer transition-all duration-400"
  style={{
    position: "absolute",
    bottom: "110px",      // ← 本の中央下に配置
    left: "50%",
    transform: "translateX(-50%)",
    opacity: 0.6,
    letterSpacing: "0.18em",
    textShadow:
      "0 1px 0 rgba(255,255,255,0.25), 0 2px 3px rgba(0,0,0,0.08)",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.opacity = "1";
    e.currentTarget.style.letterSpacing = "0.24em";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.opacity = "0.6";
    e.currentTarget.style.letterSpacing = "0.18em";
  }}
>
  BASE　GUSHIKEN DESIGN
</div>
                </div>
              </div>
            </div>
            {/* ===== END 2カラム ===== */}
          </div>
        </div>
      )}
    </>
  );
}