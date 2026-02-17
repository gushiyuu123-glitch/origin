// src/components/GlobalRoomNav.jsx
import { useEffect, useState } from "react";
import GlobalRoomNavPC from "./GlobalRoomNavPC";
import GlobalRoomNavSP from "./GlobalRoomNavSP";

export default function GlobalRoomNav() {
  const [isSP, setIsSP] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSP(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSP ? <GlobalRoomNavSP /> : <GlobalRoomNavPC />;
}
