import React, { useState } from "react";
import "../index.css";
import Elem from "../components/Elem";

function SecondPage() {
  const [backgroundImage, setBackgroundImage] = useState("");

  const handleMouseEnter = (dataImage) => {
    setBackgroundImage(dataImage);
  };

  const handleMouseLeave = () => {
    setBackgroundImage("");
  };

  return (
    <div
      data-scroll
      data-scroll-speed="0"
      className="h-screen w-full bg-black text-white flex items-center flex-col justify-center font-freight text-center "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Elem
        name={"Mineral"}
        dataImage={
          "https://works.studio/assets/imager/images/mineral-health/38349/MIN-1_240208_000417_1a58980f77ae6d8c6a1e26c40e92a05d.jpg"
        }
        onHover={handleMouseEnter}
        onLeave={handleMouseLeave}
      />
      <Elem
        name={"Erthos"}
        dataImage={
          "https://works.studio/assets/imager/images/boldly/37287/BOLDLY-1_1a58980f77ae6d8c6a1e26c40e92a05d.jpg"
        }
        onHover={handleMouseEnter}
        onLeave={handleMouseLeave}
      />
      <Elem
        name={"Virgin Music"}
        dataImage={
          "https://works.studio/assets/imager/images/virgin-music-brand-identity/34083/Thumb_1a58980f77ae6d8c6a1e26c40e92a05d.jpg"
        }
        onHover={handleMouseEnter}
        onLeave={handleMouseLeave}
      />
      <Elem
        name={"Converse"}
        dataImage={
          "https://works.studio/assets/imager/images/converse-global-fa23/43368/CONVERSE_3_1a58980f77ae6d8c6a1e26c40e92a05d.jpg"
        }
        onHover={handleMouseEnter}
        onLeave={handleMouseLeave}
      />
      <Elem
        name={"Boldly"}
        dataImage={
          "https://works.studio/assets/imager/images/boldly/37287/BOLDLY-1_1a58980f77ae6d8c6a1e26c40e92a05d.jpg"
        }
        onHover={handleMouseEnter}
        onLeave={handleMouseLeave}
      />
    </div>
  );
}

export default SecondPage;
