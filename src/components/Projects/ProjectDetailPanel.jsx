"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import styles from "./ProjectDetailPanel.module.css";
import TechBadge from "./TechBadge";

export default function ProjectDetailPanel({ project, isOpen, onClose }) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
      
      const tl = gsap.timeline();
      
      tl.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
        ease: "power2.out"
      })
      .to(panelRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out"
      }, "<")
      .fromTo(
        contentRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.4, ease: "power2.out" },
        "-=0.2"
      );
      
    } else {
      document.body.style.overflow = "auto";
      
      const tl = gsap.timeline();
      
      tl.to(panelRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in"
      })
      .to(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
        ease: "power2.in"
      }, "<0.1");
    }
  }, [isOpen]);

  if (!project) return null;

  return (
    <>
      <div 
        className={styles.overlay} 
        ref={overlayRef}
        onClick={onClose}
      />
      
      <div className={styles.panel} ref={panelRef}>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={24} />
        </button>

        <div className={styles.panelContent} ref={contentRef}>
          {project.screenshot && (
            <div className={styles.heroImage}>
              <img src={project.screenshot} alt={project.title} />
            </div>
          )}

          <div className={styles.header}>
            <div className={styles.categoryTag}>{project.category.toUpperCase()}</div>
            <h2 className={styles.title}>{project.title}</h2>
          </div>

          <div className={styles.section}>
            <h3>Overview</h3>
            <p className={styles.description}>{project.longDescription || project.description}</p>
          </div>

          {(project.techStack || project.tags) && (
            <div className={styles.section}>
              <h3>Technologies</h3>
              <div className={styles.tagsContainer}>
                {project.techStack 
                  ? project.techStack.map((tech, i) => <TechBadge key={i} tech={tech} />)
                  : project.tags.map((tag, i) => <span key={i} className={styles.simpleTag}>{tag}</span>)
                }
              </div>
            </div>
          )}

          <div className={styles.actionArea}>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                <ExternalLink size={18} /> Visit Live Site
              </a>
            )}
            
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                <ExternalLink size={18} /> View Demo
              </a>
            )}
            
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
                <FaGithub size={18} /> Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
