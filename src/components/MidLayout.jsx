import React from "react";
import LayoutElem from "./LayoutElem";

function MidLayout() {
  const MidLayout = [
    {
      name: "Nike",
      italic: "Studio 45",
      image:
        "https://works.studio/assets/imager/images/nike-studio-45/3184/Nike-Studio-45-Desk_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    },
    {
      name: "FutureWorld",
      italic: "Identity & Website",
      image:
        "https://works.studio/assets/imager/images/futurevvorld/38020/fvv-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    },
    {
      name: "Converse",
      italic: "Basketball Identity",
      image:
        "https://works.studio/assets/imager/images/converse/38120/v1.5-converse-bball-3_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    },
    {
      name: "Essentials",
      italic: "Fear of God Identity",
      image:
        "https://works.studio/assets/imager/images/essentials-fear-of-god/44874/Thumbnail_New_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    },
    {
      name: "Converse",
      italic: "Basketball Ho19",
      image:
        "https://works.studio/assets/imager/images/converse-basketball-ho19/1766/Converse-Basketball-Identity-Shoe-Photgraphy_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    },
    {
      name: "Jhon Elliot",
      italic: "Scenes from nepal",
      image:
        "https://works.studio/assets/imager/images/john-elliott-nepal/37810/john-elliott-nepal-cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    },
    {
      name: "Jhon Elliot",
      italic: "Shows",
      image:
        "https://works.studio/assets/imager/images/john-elliott-shows/10017/John-Elliot-Shows-Experiential-Photography-00_WORKS_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {MidLayout.map((details) => (
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

export default MidLayout;
