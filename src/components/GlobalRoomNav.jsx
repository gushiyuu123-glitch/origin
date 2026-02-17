// src/components/GlobalRoomNav.jsx
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function GlobalRoomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSP, setIsSP] = useState(window.innerWidth < 1024);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSP(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔥 ここ追加：スクロール付きナビ
  const goToRoom = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "instant", // ← 静けさ重視なら instant
      // behavior: "smooth"  ← 演出入れるならこっち
    });
  };

  const rooms = [
    { name: "VAN GOGH", path: "/vangogh" },
    { name: "LEONARDO", path: "/leonardo" },
    { name: "EINSTEIN", path: "/einstein" }, // 🔥 追加
    { name: "JOBS", path: "/jobs" },
    { name: "MUSK", path: "/musk" },
  ];

  return (
    <>
      {/* TOP LIGHT FADE */}
      <div
        className="fixed top-0 left-0 w-full h-[100px] z-[9000] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.0))",
        }}
      />

      {/* ORIGIN */}
      <div
        onClick={() => goToRoom("/")}
        className="
          fixed top-6 left-6 z-[9999]
          cursor-pointer select-none
          text-[11px]
          tracking-[0.65em]
          text-white
          transition-all duration-700
        "
        style={{
          opacity: location.pathname === "/" ? 0.95 : 0.45,
          textShadow:
            location.pathname === "/"
              ? "0 0 22px rgba(255,255,255,0.35)"
              : "0 0 12px rgba(255,255,255,0.12)",
        }}
      >
        ORIGIN
      </div>

      {/* ================= PC NAV ================= */}
      {!isSP && (
        <div className="fixed top-6 right-6 z-[9999] flex gap-10 select-none">
          {rooms.map((room) => {
            const isActive = location.pathname === room.path;

            return (
              <div
                key={room.path}
                onClick={() => goToRoom(room.path)}
                className="
                  text-[11px]
                  tracking-[0.5em]
                  text-white
                  cursor-pointer
                  transition-all duration-700
                "
                style={{
                  opacity: isActive ? 0.9 : 0.22,
                  textShadow: isActive
                    ? "0 0 24px rgba(255,255,255,0.35)"
                    : "none",
                }}
              >
                {room.name}
              </div>
            );
          })}
        </div>
      )}

      {/* ================= SP NAV ================= */}
      {isSP && (
        <div className="fixed bottom-6 right-6 z-[9999] select-none">
          <div
            onClick={() => setOpen(!open)}
            className="
              text-[10px]
              tracking-[0.55em]
              text-white
              cursor-pointer
              transition-all duration-700
            "
            style={{
              opacity: 0.55,
              textShadow: "0 0 18px rgba(255,255,255,0.25)",
            }}
          >
            ROOM
          </div>

          <div
            className="
              absolute bottom-8 right-0
              flex flex-col items-end gap-4
              transition-all duration-700
            "
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0px)" : "translateY(10px)",
              pointerEvents: open ? "auto" : "none",
            }}
          >
            {rooms.map((room) => {
              const isActive = location.pathname === room.path;

              return (
                <div
                  key={room.path}
                  onClick={() => {
                    goToRoom(room.path);
                    setOpen(false);
                  }}
                  className="
                    text-[10px]
                    tracking-[0.45em]
                    text-white
                    cursor-pointer
                    transition-all duration-700
                  "
                  style={{
                    opacity: isActive ? 0.9 : 0.35,
                    textShadow: isActive
                      ? "0 0 18px rgba(255,255,255,0.35)"
                      : "none",
                  }}
                >
                  {room.name}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
