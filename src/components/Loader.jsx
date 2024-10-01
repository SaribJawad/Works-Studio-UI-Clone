import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Loader() {
  const yellowDiv = useRef();
  const loaderVideo = useRef();
  const loader = useRef();
  const text = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(yellowDiv.current, {
      top: "-100%",
      delay: 0.5,
      ease: "expo.out",
    })
      .to(
        loaderVideo.current,
        {
          top: "-100%",
          delay: 1,
          duration: 1,
          ease: "expo.out",
        },
        "anim"
      )
      .to(text.current, {
        delay: -0.8,
        duration: 1,
        color: "black",
        ease: "expo.out",
      })
      .to(loader.current, {
        delay: -0.5,
        display: "none",
      });
  });

  return (
    <div
      ref={loader}
      className="text-white flex items-center justify-center text-center fixed top-0 h-screen w-full bg-[#F5E41B] z-[12]"
    >
      <div
        ref={yellowDiv}
        className="h-screen w-full bg-[#F5E41B] absolute z-[9]"
      ></div>
      <video
        ref={loaderVideo}
        className="h-full w-full absolute object-cover z-[7]"
        autoPlay
        loop
        muted
        src="./loaderVideo.mp4"
      ></video>

      <h1
        ref={text}
        className="relative text-[7.2vw] leading-[5vw] font-freight font-thin tracking-tighter z-[8]"
      >
        <em>We</em> <em>are a</em> CREATIVE <em>studio</em>
        <br />
        DEDICATED <em>to</em> CULTURAL
        <br />
        ADVANCEMENT <em>through</em>
        <br />
        STRATEGY <em>and</em> DESIGN.
      </h1>
    </div>
  );
}

export default Loader;
