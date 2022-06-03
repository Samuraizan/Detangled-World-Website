import React, { useEffect, useState } from "react";
import "./scrolling.css";

function clampNumber(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

const Scrolling = () => {
  const [yPercent, setYPercent] = useState(0);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(document.querySelector("#scrolling-container"));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolling = document.getElementById("scrolling");
      if (isInView) {
        const yPercent =
          100 - (((window.innerHeight - scrolling.getBoundingClientRect().top) /
            window.innerHeight) *
          200);
        setYPercent(clampNumber(yPercent, -100, 100));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div id="scrolling-container" className='scroll-left'>
      <p id='scrolling' style={{ transform: `translateX(${yPercent}%)`, transitionDuration: "3000ms", transitionTimingFunction: "ease-out" }}>THINKER MEETS CREATOR</p>
    </div>
  );
};

export default Scrolling;
