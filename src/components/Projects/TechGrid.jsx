import { SiJavascript, SiReact, SiTypescript, SiNextdotjs, SiCplusplus, SiPython, SiNodedotjs } from 'react-icons/si';
import styles from './TechGrid.module.css';

export default function TechGrid() {
  return (
    <div className={styles.gridContainer}>
      {/* Row 1 */}
      <div className={`${styles.iconBox} ${styles.jsBg}`}>
        <SiJavascript size={64} color="#000" />
      </div>
      <div className={`${styles.iconBox} ${styles.darkBg}`}>
        <SiReact size={70} color="#61DAFB" />
      </div>
      <div className={`${styles.iconBox} ${styles.tsBg}`}>
        <SiTypescript size={50} color="#fff" />
      </div>
      
      {/* Row 2 */}
      <div className={`${styles.iconBox} ${styles.whiteBg}`}>
        <SiNextdotjs size={64} color="#000" />
      </div>
      <div className={`${styles.iconBox} ${styles.darkBg}`}>
        <img src="/n8n-color.svg" alt="n8n" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
      </div>
      <div className={`${styles.iconBox} ${styles.darkBg}`}>
        <img src="/claudecode-color.svg" alt="Claude Code" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
      </div>
      
      {/* Row 3 */}
      <div className={`${styles.iconBox} ${styles.darkBg}`}>
        <SiCplusplus size={70} color="#00599C" />
      </div>
      <div className={`${styles.iconBox} ${styles.darkBg}`}>
        <SiPython size={70} color="#3776AB" />
      </div>
      <div className={`${styles.iconBox} ${styles.darkBg}`}>
        <SiNodedotjs size={70} color="#339933" />
      </div>
    </div>
  );
}
