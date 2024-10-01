import React from "react";
import ElemLine from "./ElemLine";

function Elem({ name, dataImage, onHover, onLeave }) {
  return (
    <div
      className="elem w-full relative overflow-hidden cursor-pointer"
      data-img={dataImage}
      onMouseEnter={() => onHover(dataImage)}
      onMouseLeave={onLeave}
    >
      <div className="group relative">
        <h2 className="text-[130px] uppercase relative z-10 leading-[110px] group-hover:italic group-hover:text-black group-hover:skew-x-2 transition-transform duration-500 ease-in-out">
          {name}
        </h2>
        <div className="bg-[#F5E41B] w-full overflow-hidden whitespace-nowrap absolute top-1/2 transform -translate-x-0 -translate-y-1/3 scale-y-0 group-hover:scale-y-100 opacity-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out">
          <div className="w-[40%] z-10 h-full bg-[#F5E41B] blur-sm  absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 ">
            asd
          </div>

          <div className="inline-block animate-scrolling-infinite">
            <ElemLine />
            <ElemLine />
            <ElemLine />
          </div>
          <div className="inline-block animate-scrolling-infinite">
            <ElemLine />
            <ElemLine />
            <ElemLine />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Elem;
