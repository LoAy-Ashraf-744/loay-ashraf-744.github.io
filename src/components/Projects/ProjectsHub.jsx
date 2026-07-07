"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ProjectsHub.module.css";
import TechGrid from "./TechGrid";
import CategoryModal from "./CategoryModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsHub() {
  const [modalCategory, setModalCategory] = useState(null);
  
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  // Initial Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const leftItems = leftColRef.current.children;
      const rightGrid = rightColRef.current;
      
      gsap.fromTo(leftItems,
        { x: -50, opacity: 0 },
        { 
          x: 0, opacity: 1, 
          duration: 0.8, stagger: 0.2, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }
        }
      );

      gsap.fromTo(rightGrid,
        { scale: 0.8, opacity: 0 },
        { 
          scale: 1, opacity: 1, duration: 1, ease: "back.out(1.5)",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className={`section ${styles.hubSection}`}>
      <div className={`container ${styles.hubContainer}`}>
        
        <div className={styles.splitLayout}>
          
          {/* LEFT: Text Categories */}
          <div className={styles.leftCol} ref={leftColRef}>
            <button 
              className={styles.categoryBtn} 
              onClick={() => setModalCategory('landing')}
            >
              Landing Pages
            </button>
            <button 
              className={styles.categoryBtn} 
              onClick={() => setModalCategory('application')}
            >
              Programs
            </button>
            <button 
              className={styles.categoryBtn} 
              onClick={() => setModalCategory('automation')}
            >
              Automation work Flows
            </button>
          </div>

          {/* RIGHT: Tech Grid */}
          <div className={styles.rightCol} ref={rightColRef}>
            <TechGrid />
          </div>

        </div>

      </div>

      <CategoryModal 
        category={modalCategory} 
        onClose={() => setModalCategory(null)} 
      />
    </section>
  );
}
