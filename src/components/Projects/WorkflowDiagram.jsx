"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./ProjectCards.module.css";
import { Mail, FileText, Cpu, Database, Code, GitCommit } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const iconMap = {
  "mail": Mail,
  "file-text": FileText,
  "cpu": Cpu,
  "database": Database,
  "github": FaGithub,
  "code": Code,
  "git-commit": GitCommit
};

export default function WorkflowDiagram({ workflow }) {
  const lineRefs = useRef([]);

  useEffect(() => {
    // Flow animation for the dashed lines
    if (lineRefs.current.length > 0) {
      gsap.to(lineRefs.current, {
        strokeDashoffset: -20,
        repeat: -1,
        ease: "linear",
        duration: 1
      });
    }
  }, []);

  return (
    <div className={styles.workflowDiagram}>
      {workflow.map((step, index) => {
        const Icon = iconMap[step.icon] || FileText;
        const isLast = index === workflow.length - 1;

        return (
          <div key={index} className={styles.workflowStepContainer}>
            <div className={styles.workflowStep}>
              <div className={styles.workflowIconBox}>
                <Icon size={16} />
              </div>
              <span className={styles.workflowStepLabel}>{step.step}</span>
              <span className={styles.workflowToolLabel}>{step.tool}</span>
            </div>

            {!isLast && (
              <div className={styles.workflowConnection}>
                <svg width="40" height="2" className={styles.workflowLine}>
                  <line 
                    x1="0" y1="1" x2="40" y2="1" 
                    stroke="rgba(255,255,255,0.3)" 
                    strokeWidth="2" 
                    strokeDasharray="4 4" 
                    ref={el => lineRefs.current[index] = el}
                  />
                </svg>
                <div className={styles.workflowArrow}></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
