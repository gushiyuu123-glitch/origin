// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

/* ================= SECTIONS ================= */

import HeroPC from "./sections/HeroPC";
import HeroSP from "./sections_sp/HeroSP";

import VangoghRoom from "./pages/VangoghRoom";
import VangoghRoomSP from "./pages_sp/VangoghRoomSP";

import ComingSoon from "./pages/ComingSoon";
import GlobalRoomNav from "./components/GlobalRoomNav";

/* ================= ROOMS CONFIG ================= */

const rooms = [
  {
    path: "/vangogh",
    title: "VAN GOGH",
    concept: "感性",
    pc: VangoghRoom,
    sp: VangoghRoomSP,
  },
  {
    path: "/leonardo",
    title: "LEONARDO",
    concept: "構造",
  },
  {
    path: "/jobs",
    title: "JOBS",
    concept: "本質",
  },
  {
    path: "/musk",
    title: "MUSK",
    concept: "革命",
  },
];

export default function App() {
  const location = useLocation();

  /* ================= DEVICE DETECTION ================= */

  const [isSP, setIsSP] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");

    const update = () => setIsSP(media.matches);

    update(); // 初期判定
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  const isTop = location.pathname === "/";

  return (
    <>
      {/* TOP以外はGlobalNav表示 */}
      {!isTop && <GlobalRoomNav />}

      <Routes>

        {/* ================= TOP ================= */}
        <Route
          path="/"
          element={isSP ? <HeroSP /> : <HeroPC />}
        />

        {/* ================= ROOMS ================= */}
        {rooms.map((room) => {
          const PCComponent = room.pc;
          const SPComponent = room.sp;

          return (
            <Route
              key={room.path}
              path={room.path}
              element={
                PCComponent && SPComponent
                  ? isSP
                    ? <SPComponent />
                    : <PCComponent />
                  : (
                    <ComingSoon
                      title={room.title}
                      concept={room.concept}
                    />
                  )
              }
            />
          );
        })}

      </Routes>
    </>
  );
}
