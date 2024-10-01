import React from "react";

function LayoutElem({ name, italic, image }) {
  return (
    <div className=" h-fit  relative group overflow-hidden inline-block">
      <img
        className="group-hover:scale-110 transition-all duration-300"
        src={image}
        alt=""
      />
      <div className="h-full w-full text-white bg-black absolute top-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5">
        <p className="text-5xl font-freight uppercase text-center">
          {name} <em>{italic}</em>
        </p>
      </div>
    </div>
  );
}

export default LayoutElem;
