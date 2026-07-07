"use client";

import { useEffect, useState } from "react";
import styles from "./SideNav.module.css";

const sections = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // Trigger exactly at the middle of the screen
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.sideNavContainer}>
      {sections.map((section) => (
        <span
          key={section.id}
          className={`${styles.label} ${
            activeSection === section.id ? styles.active : ""
          }`}
        >
          {section.label}
        </span>
      ))}
    </div>
  );
}
