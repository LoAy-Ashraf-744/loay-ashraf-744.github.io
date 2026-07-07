"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    // Simple fade in on load
    gsap.from(navRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    });
  }, []);

  return (
    <nav ref={navRef} className={styles.navbar}>
      <div className={styles.logo}>LA.</div>
    </nav>
  );
}
