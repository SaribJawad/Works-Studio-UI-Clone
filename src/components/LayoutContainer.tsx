import React from "react";
import LeftLayout from "./LeftLayout";
import MidLayout from "./MidLayout";
import RightLayout from "./RightLayout";

function LayoutContainer() {
  return (
    <div className="h-full w-fit  m-4 p-3 grid grid-cols-3 gap-6 ">
      <LeftLayout />
      <MidLayout />
      <RightLayout />
    </div>
  );
}

export default LayoutContainer;
