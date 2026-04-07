import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

/* ================= SECTIONS ================= */

import HeroPC from "./sections/HeroPC";
import HeroSP from "./sections_sp/HeroSP";

import VangoghRoom from "./pages/VangoghRoom";
import VangoghRoomSP from "./pages_sp/VangoghRoomSP";

import LeonardoRoom from "./pages/LeonardoRoom";
import LeonardoRoomSP from "./pages_sp/LeonardoRoomSP";

import EinsteinRoom from "./pages/EinsteinRoom";
import EinsteinRoomSP from "./pages_sp/EinsteinRoomSP";

import JobsRoom from "./pages/JobsRoom";
import JobsRoomSP from "./pages_sp/JobsRoomSP";

import MuskRoom from "./pages/MuskRoom";
import MuskRoomSP from "./pages_sp/MuskRoomSP";

import LeBonRoom from "./pages/LeBonRoom";
import LeBonRoomSP from "./pages_sp/LeBonRoomSP";

import DorseyRoom from "./pages/DorseyRoom";
import DorseyRoomSP from "./pages_sp/DorseyRoomSP";

import ComingSoon from "./pages/ComingSoon";
import GlobalRoomNav from "./components/GlobalRoomNav";

/* ================= SITE CONFIG ================= */

const SITE_URL = "https://origin-gray.vercel.app";
const SITE_NAME = "GUSHIKEN DESIGN";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og/top.png`;

/* ================= DEFAULT SEO ================= */

const DEFAULT_SEO = {
  title: "ORIGIN｜思想を体験するアート空間 | GUSHIKEN DESIGN",
  description:
    "ORIGINは、ゴッホ、レオナルド・ダ・ヴィンチ、アインシュタイン、スティーブ・ジョブズ、イーロン・マスクなど、世界を変えた人物たちの思想の核を体験できるWebアートプロジェクトです。",
  image: DEFAULT_OG_IMAGE,
  type: "website",
  path: "/",
  imageAlt: "ORIGINのキービジュアル",
};

/* ================= ROOMS CONFIG ================= */

const rooms = [
  {
    path: "/vangogh",
    title: "ORIGIN 第一章｜ヴィンセント・ヴァン・ゴッホ | GUSHIKEN DESIGN",
    shortTitle: "VAN GOGH — ORIGIN",
    concept: "感性",
    description:
      "ヴィンセント・ヴァン・ゴッホの色彩の衝動と創造の核を、Web空間として再構築したデジタル展示。",
    ogp: "/og/vangogh.png",
    imageAlt: "ヴィンセント・ヴァン・ゴッホ展示ページのOGP画像",
    type: "article",
    schemaType: "Article",
    pc: VangoghRoom,
    sp: VangoghRoomSP,
  },
  {
    path: "/leonardo",
    title: "ORIGIN 第二章｜レオナルド・ダ・ヴィンチ | GUSHIKEN DESIGN",
    shortTitle: "LEONARDO — ORIGIN",
    concept: "構造",
    description:
      "未完成を恐れなかった人間。構造を追い続けた四百年の視線を、デジタル空間として再構築した展示。",
    ogp: "/og/leonardo.png",
    imageAlt: "レオナルド・ダ・ヴィンチ展示ページのOGP画像",
    type: "article",
    schemaType: "Article",
    pc: LeonardoRoom,
    sp: LeonardoRoomSP,
  },
  {
    path: "/einstein",
    title: "ORIGIN 第三章｜アルベルト・アインシュタイン | GUSHIKEN DESIGN",
    shortTitle: "EINSTEIN — ORIGIN",
    concept: "直感",
    description:
      "直感は論理よりも速い。時空を再設計した思考の跳躍を、体験としてたどるデジタル展示。",
    ogp: "/og/einstein.png",
    imageAlt: "アルベルト・アインシュタイン展示ページのOGP画像",
    type: "article",
    schemaType: "Article",
    pc: EinsteinRoom,
    sp: EinsteinRoomSP,
  },
  {
    path: "/jobs",
    title: "ORIGIN 第四章｜スティーブ・ジョブズ | GUSHIKEN DESIGN",
    shortTitle: "JOBS — ORIGIN",
    concept: "本質",
    description:
      "本質だけを残すという思想。削ることで強度を生む美意識を、Web空間として再構築した展示。",
    ogp: "/og/jobs.png",
    imageAlt: "スティーブ・ジョブズ展示ページのOGP画像",
    type: "article",
    schemaType: "Article",
    pc: JobsRoom,
    sp: JobsRoomSP,
  },
  {
    path: "/musk",
    title: "ORIGIN 第五章｜イーロン・マスク | GUSHIKEN DESIGN",
    shortTitle: "MUSK — ORIGIN",
    concept: "革命",
    description:
      "未来を前借りする人間。革命を現実へ押し出す思考の強度を、体験として再構築する展示。",
    ogp: "/og/musk.png",
    imageAlt: "イーロン・マスク展示ページのOGP画像",
    type: "article",
    schemaType: "Article",
    pc: MuskRoom,
    sp: MuskRoomSP,
  },
  {
    path: "/lebon",
    title: "ORIGIN 第六章｜ギュスターヴ・ル・ボン | GUSHIKEN DESIGN",
    shortTitle: "LE BON — ORIGIN",
    concept: "群衆心理",
    description:
      "群衆は個を飲み込み、個は群衆を恐れない。人間の闇の構造を展示空間として可視化したページ。",
    ogp: "/og/lebon.png",
    imageAlt: "ギュスターヴ・ル・ボン展示ページのOGP画像",
    type: "article",
    schemaType: "Article",
    pc: LeBonRoom,
    sp: LeBonRoomSP,
  },
  {
    path: "/dorsey",
    title: "ORIGIN 第七章｜ジャック・ドーシー | GUSHIKEN DESIGN",
    shortTitle: "DORSEY — ORIGIN",
    concept: "情報",
    description:
      "140字の制約で世界の思考速度を変えた男。情報の構造を再発明した視点を体験する展示。",
    ogp: "/og/dorsey.png",
    imageAlt: "ジャック・ドーシー展示ページのOGP画像",
    type: "article",
    schemaType: "Article",
    pc: DorseyRoom,
    sp: DorseyRoomSP,
  },
];

/* ================= META HELPERS ================= */

function upsertMetaByName(name, content) {
  let tag = document.head.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertMetaByProperty(property, content) {
  let tag = document.head.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function buildHomeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "ORIGIN",
    headline: "思想の核を、体験できる空間へ",
    description:
      "ゴッホ、レオナルド・ダ・ヴィンチ、アインシュタイン、スティーブ・ジョブズ、イーロン・マスクなど、世界を変えた人物たちの思想をWeb空間として再構築するアートプロジェクト。",
    creator: {
      "@type": "Person",
      name: "裕人",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    url: SITE_URL,
    inLanguage: "ja",
  };
}

function buildRoomJsonLd(room, url, image) {
  return {
    "@context": "https://schema.org",
    "@type": room.schemaType || "Article",
    headline: room.title,
    description: room.description,
    author: {
      "@type": "Person",
      name: "裕人",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    mainEntityOfPage: url,
    image,
    inLanguage: "ja",
  };
}

function setSeo(locationPathname) {
  const currentRoom = rooms.find((room) => room.path === locationPathname);

  const title = currentRoom ? currentRoom.title : DEFAULT_SEO.title;
  const description = currentRoom ? currentRoom.description : DEFAULT_SEO.description;
  const image = currentRoom ? `${SITE_URL}${currentRoom.ogp}` : DEFAULT_SEO.image;
  const imageAlt = currentRoom ? currentRoom.imageAlt : DEFAULT_SEO.imageAlt;
  const type = currentRoom ? currentRoom.type : DEFAULT_SEO.type;
  const url =
    locationPathname === "/" ? SITE_URL : `${SITE_URL}${locationPathname}`;

  document.title = title;

  upsertMetaByName("description", description);
  upsertMetaByName("robots", "index, follow");
  upsertMetaByName("twitter:card", "summary_large_image");
  upsertMetaByName("twitter:title", title);
  upsertMetaByName("twitter:description", description);
  upsertMetaByName("twitter:image", image);

  upsertMetaByProperty("og:type", type);
  upsertMetaByProperty("og:locale", "ja_JP");
  upsertMetaByProperty("og:site_name", SITE_NAME);
  upsertMetaByProperty("og:title", title);
  upsertMetaByProperty("og:description", description);
  upsertMetaByProperty("og:image", image);
  upsertMetaByProperty("og:image:alt", imageAlt);
  upsertMetaByProperty("og:url", url);

  upsertLink("canonical", url);

  if (currentRoom) {
    upsertJsonLd("jsonld-dynamic", buildRoomJsonLd(currentRoom, url, image));
  } else {
    upsertJsonLd("jsonld-dynamic", buildHomeJsonLd());
  }
}

/* ================= APP ================= */

export default function App() {
  const location = useLocation();

  /* ================= DEVICE DETECTION ================= */

  const [isSP, setIsSP] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");

    const update = () => {
      setIsSP(media.matches);
    };

    update();

    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }

    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  /* ================= SCROLL TOP ON ROUTE CHANGE ================= */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname]);

  /* ================= META CONTROL ================= */

  useEffect(() => {
    setSeo(location.pathname);
  }, [location.pathname]);

  /* ================= NAV CONTROL ================= */

  const hideNavOn = ["/"];
  const showGlobalNav = !hideNavOn.includes(location.pathname);

  return (
    <>
      {showGlobalNav && <GlobalRoomNav />}

      <Routes>
        <Route path="/" element={isSP ? <HeroSP /> : <HeroPC />} />

        {rooms.map((room) => {
          const PCComponent = room.pc;
          const SPComponent = room.sp;

          return (
            <Route
              key={room.path}
              path={room.path}
              element={
                PCComponent && SPComponent ? (
                  isSP ? (
                    <SPComponent />
                  ) : (
                    <PCComponent />
                  )
                ) : (
                  <ComingSoon title={room.shortTitle} concept={room.concept} />
                )
              }
            />
          );
        })}
      </Routes>
    </>
  );
}