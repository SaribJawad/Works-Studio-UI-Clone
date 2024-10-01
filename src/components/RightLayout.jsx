import React from "react";
import LayoutElem from "./LayoutElem";

function RightLayout() {
  const RightLayout = [
    {
      name: "Destroy Lonely",
      italic: ": Love last forever",
      image:
        "https://works.studio/assets/imager/images/converse-global-fa23/46580/Cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    },
    {
      name: "Jheen-Yuhs'",
      italic: "Film Identity",
      image:
        "https://works.studio/assets/imager/images/jeen-yuhs/35858/v1.5-home-image2_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    },
    {
      name: "Nike Air Fear of God",
      italic: "Identity",
      image:
        "https://works.studio/assets/imager/images/Fear-of-God-Nike/38013/fog-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    },
    {
      name: "L.E.D Studio",
      italic: "Website",
      image:
        "https://works.studio/assets/imager/images/led-studio/26053/thumbnail_230526_162436_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    },
    {
      name: "CDL",
      italic: "Championship kit 2021",
      image:
        "https://works.studio/assets/imager/images/CDL-2021-champs/10987/Call-of-Duty-League-Championship-2021-Air-Force-1-01_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    },
    {
      name: "Peloton",
      italic: "Tread Film",
      image:
        "https://works.studio/assets/imager/images/peloton/38163/peloton-tread-1.5-b_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    },
    {
      name: "Beyonce",
      italic: ": The gift album",
      image:
        "https://works.studio/assets/imager/images/the-lion-king-the-gift/8572/Beyonce-Lion-King-The-Gift-Deluxe-Album-Cover_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {RightLayout.map((details) => (
        <LayoutElem
          key={details.name}
          name={details.name}
          italic={details.italic}
          image={details.image}
        />
      ))}
    </div>
  );
}

export default RightLayout;
