import React, { useEffect, useRef } from "react";
import "./locomotive-scroll-css/locomotive-scroll.css";
import locomotiveScroll from "locomotive-scroll";
import LandingPage from "./pages/LandingPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import imagesloaded from "imagesloaded";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = document.querySelector("[data-scroll-container]");
    if (!scrollContainer) return;

    const scroll = new locomotiveScroll({
      el: scrollContainer,
      smooth: true,
    });

    imagesloaded(scrollContainer, { background: true }, function () {
      scroll.update();
    });

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);

  return (
    <div id="section" data-scroll-container className="scroll-container">
      <Loader />
      <Navbar />
      <LandingPage />
      <SecondPage />
      <ThirdPage />
    </div>
  );
}

export default App;
