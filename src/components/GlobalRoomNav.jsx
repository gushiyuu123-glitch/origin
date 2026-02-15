// src/components/GlobalRoomNav.jsx
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function GlobalRoomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSP, setIsSP] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSP(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const rooms = [
    { name: "VAN GOGH", path: "/vangogh" },
    { name: "LEONARDO", path: "/leonardo" },
    { name: "JOBS", path: "/jobs" },
    { name: "MUSK", path: "/musk" },
  ];

  return (
    <>
      {/* ===== 上部フェード ===== */}
      <div
        className="fixed top-0 left-0 w-full h-[90px] z-[9000] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.0))",
        }}
      />

      {/* ===== ORIGIN（常時左上） ===== */}
      <div
        onClick={() => navigate("/")}
        className="
          fixed top-6 left-6 z-[9999]
          cursor-pointer select-none
          text-[11px] tracking-[0.6em]
          text-white
          opacity-60
          hover:opacity-95
          transition-opacity duration-500
        "
        style={{
          textShadow: "0 0 18px rgba(255,255,255,0.15)",
        }}
      >
        ORIGIN
      </div>

      {/* ===== PCナビ ===== */}
      {!isSP && (
        <div
          className="
            fixed top-6 right-6 z-[9999]
            flex gap-8
            select-none
          "
        >
          {rooms.map((room) => {
            const isActive = location.pathname === room.path;

            return (
              <div
                key={room.path}
                onClick={() => navigate(room.path)}
                className="
                  text-[11px]
                  tracking-[0.45em]
                  text-white
                  cursor-pointer
                  transition-all duration-500
                "
                style={{
                  opacity: isActive ? 0.95 : 0.35,
                  textShadow: isActive
                    ? "0 0 22px rgba(255,255,255,0.35)"
                    : "none",
                }}
              >
                {room.name}
              </div>
            );
          })}
        </div>
      )}

      {/* ===== SPナビ（下部中央） ===== */}
      {isSP && (
        <div
          className="
            fixed bottom-6 left-1/2 -translate-x-1/2
            z-[9999]
            flex gap-6
            px-6 py-3
            rounded-full
            backdrop-blur-[2px]
          "
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.35))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {rooms.map((room) => {
            const isActive = location.pathname === room.path;

            return (
              <div
                key={room.path}
                onClick={() => navigate(room.path)}
                className="
                  text-[10px]
                  tracking-[0.4em]
                  text-white
                  cursor-pointer
                  transition-all duration-500
                "
                style={{
                  opacity: isActive ? 0.95 : 0.45,
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
      )}
    </>
  );
}
