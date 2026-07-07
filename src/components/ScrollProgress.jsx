"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.2,
      },
    });
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "3px",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        zIndex: 1000,
        pointerEvents: "none",
      }}
    >
      <div
        ref={progressRef}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "var(--color-text)",
          transformOrigin: "left center",
          transform: "scaleX(0)",
        }}
      />
    </div>
  );
}
