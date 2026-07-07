import { Info, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import styles from "./ProjectCards.module.css";

export default function AutomationCard({ project, onOpenDetails }) {
  return (
    <div className={`${styles.cardBase} ${styles.automationCard}`}>
      {project.aiPowered && (
        <div className={styles.aiBadge}>✦ AI-Powered</div>
      )}
      
      <div className={styles.automationImageWrapper}>
        <img 
          src={project.screenshot} 
          alt={project.title} 
          className={styles.automationImage}
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
          <a href={project.downloadUrl} download target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary}`}>
            <Download size={16} /> Download
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnGhost}`}>
            <FaGithub size={16} /> Repo
          </a>
          <button onClick={() => onOpenDetails(project)} className={`${styles.btn} ${styles.btnGhost}`}>
            <Info size={16} /> Details
          </button>
        </div>
      </div>
    </div>
  );
}
