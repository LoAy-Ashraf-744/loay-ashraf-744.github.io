"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import HeroText from "./HeroText";
import styles from "./Hero.module.css";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const textRef = useRef(null);
  const skillsRef = useRef([]);

  const skills = [
    { name: "React", top: "25%", left: "15%", fontClass: "font-fira-code" },
    { name: "Next.js", top: "50%", left: "10%", fontClass: "font-outfit" },
    { name: "Node.js", top: "75%", left: "18%", fontClass: "font-pacifico" },
    { name: "UI/UX", top: "45%", right: "10%", fontClass: "font-playfair" },
    { name: "JavaScript", top: "70%", right: "18%", fontClass: "font-satisfy" },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Parallax effects
    tl.to(textRef.current, { y: 200, opacity: 0, ease: "none" }, 0);
    tl.to(bgRef.current, { y: 150, ease: "none" }, 0);
    tl.to(skillsRef.current, { y: 100, opacity: 0, ease: "none" }, 0);

    // Floating animation for skills
    skillsRef.current.forEach((skill, i) => {
      if (!skill) return;
      gsap.to(skill, {
        y: "+=15",
        duration: 2 + (i % 2),
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: i * 0.2,
      });
    });
  }, []);

  return (
    <section id="hero" ref={heroRef} className={styles.heroSection}>
      {/* Background Image */}
      <div ref={bgRef} className={styles.bgImageContainer}>
        <Image 
          src="/images/hero-bg.jpeg"
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Floating Skills */}
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          ref={(el) => (skillsRef.current[index] = el)}
          className={`${styles.floatingSkill} ${skill.fontClass}`}
          style={{
            top: skill.top,
            left: skill.left,
            right: skill.right,
          }}
        >
          {skill.name}
        </div>
      ))}

      {/* Content Container */}
      <div className={`container ${styles.heroContainer}`}>
        {/* Text Container */}
        <div ref={textRef} className={styles.textWrapper}>
          <HeroText />
        </div>
      </div>
    </section>
  );
}
