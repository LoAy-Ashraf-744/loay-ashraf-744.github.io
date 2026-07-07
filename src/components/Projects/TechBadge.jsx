import styles from "./ProjectCards.module.css";
import { FaReact, FaNodeJs, FaPython, FaAws, FaGithub, FaStripe } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTailwindcss, SiOpenai, SiTypescript } from "react-icons/si";

// Simple icon mapper
const iconMap = {
  react: FaReact,
  node: FaNodeJs,
  python: FaPython,
  aws: FaAws,
  github: FaGithub,
  stripe: FaStripe,
  mongo: SiMongodb,
  next: SiNextdotjs,
  tailwind: SiTailwindcss,
  openai: SiOpenai,
  typescript: SiTypescript
};

export default function TechBadge({ tech }) {
  const Icon = iconMap[tech.icon] || null;

  return (
    <div 
      className={styles.techBadge}
      style={{ backgroundColor: tech.color || "rgba(255,255,255,0.06)" }}
    >
      {Icon && <Icon size={14} className={styles.techIcon} />}
      <span className={styles.techLabel}>{tech.name}</span>
    </div>
  );
}
