import { ExternalLink, Info } from "lucide-react";
import styles from "./ProjectCards.module.css";

export default function LandingPageCard({ project, onOpenDetails }) {
  return (
    <div className={`${styles.cardBase} ${styles.landingCard}`}>
      <div className={styles.landingImageWrapper}>
        <img 
          src={project.screenshot} 
          alt={project.title} 
          className={styles.landingImage}
        />
        <div className={styles.imageOverlay} />
      </div>
      
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>
        
        {project.tags && (
          <div className={styles.techStack}>
            {project.tags.map((tag, i) => (
              <span key={i} className={styles.tagBadge}>{tag}</span>
            ))}
          </div>
        )}
        
        <div className={styles.actions}>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary}`}>
            <ExternalLink size={16} /> Live Preview
          </a>
          <button onClick={() => onOpenDetails(project)} className={`${styles.btn} ${styles.btnGhost}`}>
            <Info size={16} /> Details
          </button>
        </div>
      </div>
    </div>
  );
}
