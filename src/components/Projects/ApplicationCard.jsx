"use client";
import { ExternalLink, Info } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import styles from "./ProjectCards.module.css";
import TechBadge from "./TechBadge";

export default function ApplicationCard({ project, onOpenDetails }) {
  return (
    <div className={`${styles.cardBase} ${styles.appCard}`}>
      <div className={styles.horizontalCardContent}>
        <div className={styles.appImageWrapper}>
          <img 
            src={project.screenshot} 
            alt={project.title} 
            className={styles.appImage}
          />
        </div>
        
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <p className={styles.cardDesc}>{project.description}</p>
          
          {project.techStack ? (
            <div className={styles.techStack}>
              {project.techStack.map((tech, i) => (
                <TechBadge key={i} tech={tech} />
              ))}
            </div>
          ) : project.tags ? (
            <div className={styles.techStack}>
              {project.tags.map((tag, i) => (
                <span key={i} className={styles.tagBadge}>{tag}</span>
              ))}
            </div>
          ) : null}
          
          <div className={styles.actions}>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary}`}>
                <ExternalLink size={16} /> Live Preview
              </a>
            )}
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${project.liveUrl ? styles.btnGhost : styles.btnPrimary}`}>
              <FaGithub size={16} /> 
              GitHub
              {project.stars && <span style={{opacity: 0.5, fontSize: "0.7rem", marginLeft: "2px"}}>★ {project.stars}</span>}
            </a>
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnGhost}`}>
                <ExternalLink size={16} /> Demo
              </a>
            )}
            <button onClick={() => onOpenDetails(project)} className={`${styles.btn} ${styles.btnGhost}`}>
              <Info size={16} /> Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
