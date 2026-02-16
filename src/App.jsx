// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

/* ================= SECTIONS ================= */

import HeroPC from "./sections/HeroPC";
import HeroSP from "./sections_sp/HeroSP";

import VangoghRoom from "./pages/VangoghRoom";
import VangoghRoomSP from "./pages_sp/VangoghRoomSP";

import LeonardoRoom from "./pages/LeonardoRoom";
import LeonardoRoomSP from "./pages_sp/LeonardoRoomSP";

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
    pc: LeonardoRoom,
    sp: LeonardoRoomSP,
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

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  /* ================= NAV CONTROL ================= */

  // Hero系だけ除外
  const hideNavOn = ["/"];
  const showGlobalNav = !hideNavOn.includes(location.pathname);

  return (
    <>
      {showGlobalNav && <GlobalRoomNav />}

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
