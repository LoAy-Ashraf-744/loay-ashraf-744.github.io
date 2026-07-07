"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { X } from "lucide-react";
import { projects } from "@/data/projects";
import styles from "./CategoryModal.module.css";
import LandingPageCard from "./LandingPageCard";
import ApplicationCard from "./ApplicationCard";
import AutomationCard from "./AutomationCard";
import ProjectDetailPanel from "./ProjectDetailPanel";

export default function CategoryModal({ category, onClose }) {
  const overlayRef = useRef(null);
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (!category) return [];
    return projects.filter(p => p.category === category);
  }, [category]);

  const getCategoryTitle = () => {
    if (category === 'landing') return "Landing Pages";
    if (category === 'application') return "Programs";
    if (category === 'automation') return "Automation work Flows";
    return "";
  };

  useEffect(() => {
    if (category) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
      
      const tl = gsap.timeline();
      
      tl.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
        ease: "power2.out"
      })
      .fromTo(modalRef.current, 
        { y: 50, scale: 0.95, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" },
        "<"
      )
      .fromTo(
        contentRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: "power2.out" },
        "-=0.2"
      );
      
    } else {
      document.body.style.overflow = "auto";
      
      // Animate out
      if (modalRef.current && overlayRef.current) {
        const tl = gsap.timeline();
        
        tl.to(modalRef.current, {
          y: 20,
          scale: 0.95,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in"
        })
        .to(overlayRef.current, {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.3,
          ease: "power2.in"
        }, "<0.1");
      }
    }
  }, [category]);

  // Don't unmount immediately to allow animation out
  return (
    <>
      <div 
        className={styles.overlay} 
        ref={overlayRef}
        onClick={onClose}
      />
      
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{getCategoryTitle()}</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className={styles.modalBody}>
          <div className={`${styles.grid} ${styles[category]}`} ref={contentRef}>
            {filteredProjects.map(project => {
              if (project.category === "landing") {
                return <LandingPageCard key={project.id} project={project} onOpenDetails={setSelectedProject} />;
              }
              if (project.category === "application") {
                return <ApplicationCard key={project.id} project={project} onOpenDetails={setSelectedProject} />;
              }
              if (project.category === "automation") {
                return <AutomationCard key={project.id} project={project} onOpenDetails={setSelectedProject} />;
              }
              return null;
            })}
          </div>

          <div className={styles.connectSection}>
            <p className={styles.connectText}>Interested in working together or want custom solutions?</p>
            <button 
              className={styles.connectBtn} 
              onClick={() => {
                onClose();
                setTimeout(() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }, 350);
              }}
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>

      <ProjectDetailPanel 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}
