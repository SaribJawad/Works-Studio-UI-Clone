import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function LandingPage() {
  const footerRef = useRef();

  useGSAP(() => {
    gsap.from(footerRef.current, {
      bottom: -120,
      delay: 3.5,
      ease: "expo.out",
    });
  });

  return (
    <div
      id="landing-page"
      data-scroll
      data-scroll-speed="-3"
      className="h-screen w-full bg-[#F5E41B] flex items-center justify-center text-center"
    >
      <h1 className="text-[7.2vw] leading-[5vw] font-freight font-thin tracking-tighter">
        <em>We</em> <em>are a</em> CREATIVE <em>studio</em>
        <br />
        DEDICATED <em>to</em> CULTURAL
        <br />
        ADVANCEMENT <em>through</em>
        <br />
        STRATEGY <em>and</em> DESIGN.
      </h1>

      <div
        ref={footerRef}
        className="h-16 w-full fixed bottom-0 flex justify-between items-center px-10 uppercase text-sm font-semibold"
      >
        <h3>Contact</h3>
        <h3>Instagram</h3>
      </div>
    </div>
  );
}

export default LandingPage;
