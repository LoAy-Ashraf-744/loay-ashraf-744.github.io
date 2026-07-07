"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Hero.module.css";

export default function HeroText() {
  const nameRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    const chars = nameRef.current.querySelectorAll(`.${styles.char}`);
    
    const tl = gsap.timeline();

    // Name reveal
    tl.fromTo(
      chars,
      { opacity: 0, y: 50, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.05,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.2,
      }
    );

    // Tagline fade in
    tl.fromTo(
      taglineRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.5"
    );
  }, []);

  // Simple custom split text
  const name = "Loay Ashraf";
  const splitName = name.split("").map((char, index) => (
    <span key={index} className={styles.char} style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}>
      {char}
    </span>
  ));

  return (
    <div className={styles.textContainer}>
      <h1 ref={nameRef} className={`${styles.title} font-permanent-marker`}>
        {splitName}
      </h1>
      <p ref={taglineRef} className={`${styles.tagline} font-montserrat`}>
        Software Developer & Engineer
      </p>
    </div>
  );
}
