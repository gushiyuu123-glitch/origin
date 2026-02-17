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

  const rooms = [
    { name: "第一章  VAN GOGH", path: "/vangogh" },
    { name: "第二章  LEONARDO", path: "/leonardo" },
    { name: "第三章  EINSTEIN", path: "/einstein" },
    { name: "第四章  JOBS", path: "/jobs" },
    { name: "第五章  MUSK", path: "/musk" },
  ];

  /* =========================
     Scroll Lock
  ========================== */
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => (document.body.style.overflow = "");
  }, [open]);

  /* =========================
     OPEN
  ========================== */
  const handleOpen = () => {
    setOpen(true);

    requestAnimationFrame(() => {
      if (!bookRef.current || !overlayRef.current) return;

      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );

      gsap.fromTo(
        bookRef.current,
        { scale: 0.94, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.9, ease: "power3.out" }
      );
    });
  };

  /* =========================
     CLOSE
  ========================== */
  const handleClose = () => {
    if (!bookRef.current || !overlayRef.current) {
      setOpen(false);
      return;
    }

    gsap.to(bookRef.current, {
      opacity: 0,
      scale: 0.97,
      duration: 0.4,
      ease: "power2.out",
    });

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
      {/* ORIGIN */}
      <div
        onClick={() => {
          navigate("/");
          window.scrollTo(0, 0);
        }}
        className="fixed top-6 left-6 z-[10000] text-[11px] tracking-[0.65em] text-white cursor-pointer"
      >
        ORIGIN
      </div>

      {/* CLOSED BOOK */}
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
    onClick={handleClose}   // ← 背景クリックで閉じる
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85"
  >
<div
  onClick={handleClose}
  className="fixed top-8 right-10 z-[10000] cursor-pointer"
>
 {/* CLOSE */}
<div
  onClick={handleClose}
  style={{
    position: "fixed",
    top: "32px",
    right: "40px",
    zIndex: 10000,
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    opacity: 0.75,
  }}
>
  ×
</div>

</div>

    <div
      ref={bookRef}
      className="relative"
      onClick={(e) => e.stopPropagation()}  // ← 本クリックは閉じない
    >
      <img
        src="/images/open-book.png"
        className="w-[1000px] max-w-[94vw]"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 text-[15px] tracking-[0.25em] text-black font-light">
        {rooms.map((room) => {
          const active = location.pathname === room.path;

          return (
            <div
              key={room.path}
              onClick={() => go(room.path)}
              className="cursor-pointer transition duration-300"
              style={{
                opacity: active ? 1 : 0.75,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.opacity = "1")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.opacity = active ? "1" : "0.75")
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
