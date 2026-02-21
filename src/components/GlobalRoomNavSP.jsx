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

  const baseUrl = "https://gushikendesign.com";

  const rooms = [
    { name: "第一章  VAN GOGH", path: "/vangogh" },
    { name: "第二章  LEONARDO", path: "/leonardo" },
    { name: "第三章  EINSTEIN", path: "/einstein" },
    { name: "第四章  JOBS", path: "/jobs" },
    { name: "第五章  MUSK", path: "/musk" },
    { name: "第六章  LE BON（心理）", path: "/lebon" },
    { name: "第七章  DORSEY", path: "/dorsey" },
  ];

  /* Scroll Lock */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  /* OPEN */
  const handleOpen = () => {
    setOpen(true);

    requestAnimationFrame(() => {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: "power2.out" }
      );

      gsap.fromTo(
        bookRef.current,
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.55, ease: "power3.out" }
      );
    });
  };

  /* CLOSE */
  const handleClose = () => {
    gsap.to(bookRef.current, {
      opacity: 0,
      scale: 0.96,
      duration: 0.32,
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
      {/* ORIGIN Logo */}
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
            }}
          />
        </div>
      )}

      {/* OPENED */}
      {open && (
        <div
          ref={overlayRef}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.87)",
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
              opacity: 0.68,
              cursor: "pointer",
            }}
          >
            本を閉じる
          </div>

          <div ref={bookRef} style={{ position: "relative" }}>
            {/* BOOK */}
            <img
              src="/images/open-book.png"
              alt="open book"
              style={{
                width: "100vw",
                maxWidth: "540px",
              }}
            />

            {/* CHAPTER LIST */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "9.5px",
                fontSize: "9.5px",
                fontFamily: "serif",
                color: "#1b1b1b",
                padding: "0 18px",
                transform: "translateY(-1%)",
                textAlign: "center",
                lineHeight: "1.45",
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
                      letterSpacing: "0.15em",
                      opacity: active ? 1 : 0.75,
                      transform: `rotate(${i % 2 === 0 ? "-0.2deg" : "0.2deg"})`,
                      textShadow:
                        "0 1px 0 rgba(255,255,255,0.25), 0 2px 3px rgba(0,0,0,0.06)",
                      transition: "opacity 0.28s ease",
                    }}
                    onTouchStart={(e) =>
                      (e.currentTarget.style.opacity = "0.55")
                    }
                    onTouchEnd={(e) =>
                      (e.currentTarget.style.opacity = active ? "1" : "0.75")
                    }
                  >
                    {room.name}
                  </div>
                );
              })}
            </div>

            {/* BASE LINK — 外側（本の下） */}
 <div
  onClick={() => window.open(baseUrl, "_blank")}
  style={{
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%, 18px)",
    opacity: 0.75,
    fontSize: "9.6px",
    letterSpacing: "0.12em",
    fontFamily: "serif",
    cursor: "pointer",
   color: "rgba(255,255,255,0.92)",
textShadow:
  "0 1px 0 rgba(255,255,255,0.55), 0 2px 6px rgba(255,255,255,0.12)",
    transition: "opacity 0.35s ease, letter-spacing 0.35s ease",
  }}
  onTouchStart={(e) => (e.currentTarget.style.opacity = "1")}
  onTouchEnd={(e) => (e.currentTarget.style.opacity = "0.75")}
>
  BASE　GUSHIKEN DESIGN
</div>
          </div>
        </div>
      )}
    </>
  );
}