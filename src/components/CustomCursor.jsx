"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    // Hide cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const xToCursor = gsap.quickTo(cursorRef.current, "x", { duration: 0.1, ease: "power3" });
    const yToCursor = gsap.quickTo(cursorRef.current, "y", { duration: 0.1, ease: "power3" });
    
    const xToFollower = gsap.quickTo(followerRef.current, "x", { duration: 0.6, ease: "power3" });
    const yToFollower = gsap.quickTo(followerRef.current, "y", { duration: 0.6, ease: "power3" });

    const moveCursor = (e) => {
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToFollower(e.clientX);
      yToFollower(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || 
          e.target.tagName.toLowerCase() === 'button' ||
          e.target.closest('a') || 
          e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} />
      <div 
        ref={followerRef} 
        className={`${styles.follower} ${isHovering ? styles.followerHover : ''}`} 
      />
    </>
  );
}
