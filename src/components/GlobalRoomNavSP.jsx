// src/components/GlobalRoomNavSP.jsx
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

export default function GlobalRoomNavSP() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
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
     スクロールロック
  ============================== */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* =============================
     OPEN
  ============================== */
  const handleOpen = () => {
    setOpen(true);

    requestAnimationFrame(() => {
      if (!bookRef.current || !overlayRef.current) return;

      // 背景フェード
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: "power2.out" }
      );

      // 本出現
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

  /* =============================
     NAV
  ============================== */
  const go = (path) => {
    navigate(path);
    handleClose();
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* ORIGIN 左上 */}
      <div
        onClick={() => {
          navigate("/");
          window.scrollTo(0, 0);
        }}
        style={{
          position: "fixed",
          top: "22px",
          left: "22px",
          zIndex: 10000,
        }}
        className="text-[10px] tracking-[0.6em] text-white cursor-pointer select-none"
      >
        ORIGIN
      </div>

      {/* 右上 閉じた本 */}
      {!open && (
        <div
          onClick={handleOpen}
          style={{
            position: "fixed",
            top: "18px",
            right: "18px",
            zIndex: 10000,
          }}
          className="cursor-pointer select-none"
        >
          <img
            src="/images/closed-book.png"
            alt="menu"
            style={{
              width: "56px",
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
          {/* CLOSE ボタン */}
          <div
            onClick={handleClose}
            style={{
              position: "fixed",
              top: "22px",
              right: "22px",
              fontSize: "22px",
              color: "white",
              opacity: 0.8,
              cursor: "pointer",
            }}
          >
            ×
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
    gap: "12px",
    fontSize: "12px",
    letterSpacing: "0.10em",
    lineHeight: 1.5,
    color: "black",
    padding: "0 24px",
    textAlign: "center",
  }}
>
  {rooms.map((room) => (
    <div
      key={room.path}
      onClick={() => go(room.path)}
      style={{
        cursor: "pointer",
        transition: "opacity 0.25s ease",
      }}
      onTouchStart={(e) =>
        (e.currentTarget.style.opacity = "0.6")
      }
      onTouchEnd={(e) =>
        (e.currentTarget.style.opacity = "1")
      }
    >
      {room.name}
    </div>
  ))}
</div>

          </div>
        </div>
      )}
    </>
  );
}
