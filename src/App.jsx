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

/* ================= SITE CONFIG ================= */

const SITE_URL = "https://yourdomain.com"; // ←本番ドメインに変更

/* ================= ROOMS CONFIG ================= */

const rooms = [
  {
    path: "/vangogh",
    title: "VAN GOGH",
    concept: "感性",
    description:
      "感性が構造を超えたとき、人は何を描くのか。",
    ogp: "/og/vangogh.png",
    pc: VangoghRoom,
    sp: VangoghRoomSP,
  },
  {
    path: "/leonardo",
    title: "LEONARDO",
    concept: "構造",
    description:
      "未完成を恐れなかった人間。構造を追い続けた四百年の視線。",
    ogp: "/og/leonardo.png",
    pc: LeonardoRoom,
    sp: LeonardoRoomSP,
  },
  {
    path: "/jobs",
    title: "JOBS",
    concept: "本質",
    description:
      "本質だけを残すという思想。",
    ogp: "/og/jobs.png",
  },
  {
    path: "/musk",
    title: "MUSK",
    concept: "革命",
    description:
      "未来を前借りする人間。",
    ogp: "/og/musk.png",
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

  /* ================= META CONTROL ================= */

  useEffect(() => {
    const currentRoom = rooms.find(
      (r) => r.path === location.pathname
    );

    const title = currentRoom
      ? `${currentRoom.title} — ORIGIN`
      : "ORIGIN — Human Structure Museum";

    const description = currentRoom
      ? currentRoom.description
      : "構造 × 感性 × 本質 × 革命。人間を展示する美術館。";

    const image = currentRoom
      ? SITE_URL + currentRoom.ogp
      : SITE_URL + "/og/top.png";

    const url = SITE_URL + location.pathname;

    /* ===== title ===== */
    document.title = title;

    /* ===== helper ===== */
    const setMetaName = (name, content) => {
      let tag = document.querySelector(
        `meta[name='${name}']`
      );
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const setMetaProp = (property, content) => {
      let tag = document.querySelector(
        `meta[property='${property}']`
      );
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    /* ===== basic meta ===== */
    setMetaName("description", description);

    /* ===== OGP ===== */
    setMetaProp("og:type", "website");
    setMetaProp("og:title", title);
    setMetaProp("og:description", description);
    setMetaProp("og:image", image);
    setMetaProp("og:url", url);

    /* ===== Twitter ===== */
    setMetaName("twitter:card", "summary_large_image");
    setMetaName("twitter:title", title);
    setMetaName("twitter:description", description);
    setMetaName("twitter:image", image);

    /* ===== canonical ===== */
    let canonical = document.querySelector(
      "link[rel='canonical']"
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", url);

  }, [location.pathname]);

  /* ================= NAV CONTROL ================= */

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
