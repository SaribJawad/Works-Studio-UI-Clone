import React from "react";
import LayoutElem from "./LayoutElem";

function LeftLayout() {
  const LeftLayout = [
    {
      name: "Converse",
      italic: "Next Studio",
      image:
        "https://works.studio/assets/imager/images/converse-nextstudio/35375/Cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    },
    {
      name: "Converse Closet",
      italic: "Digital Pop up",
      image:
        "https://works.studio/assets/imager/images/converse-closet/46199/W%C3%98RKS_CONVERSECLOSET_Thumbnail_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    },
    {
      name: "The Frost House",
      italic: "Identity",
      image:
        "https://works.studio/assets/imager/images/the-frost-house/44169/Thumbnail_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    },
    {
      name: "U.S. Soccer",
      italic: "Campaign Identity",
      image:
        "https://works.studio/assets/imager/images/us-soccer/21753/NewThumb_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    },
    {
      name: "Versace Trigreca",
      italic: "Identity",
      image:
        "https://works.studio/assets/imager/images/versace-trigerca-identity/38005/versace-1.5_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    },
    {
      name: "Heron Preston",
      italic: "Website",
      image:
        "https://works.studio/assets/imager/images/heron-preston-website/39620/Cover_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    },
    {
      name: "CDL",
      italic: "Championship kit 2020",
      image:
        "https://works.studio/assets/imager/images/call-of-duty-league-championship-kit/39632/WorksCoD_Shoes-sRGB-02_e49f8295ccc5a85e1a76e2d68c06456f.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {LeftLayout.map((details) => (
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

export default LeftLayout;
