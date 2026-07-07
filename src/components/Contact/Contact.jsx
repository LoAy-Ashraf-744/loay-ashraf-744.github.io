"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./Contact.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const socialLinks = [
  { name: "X", icon: FaTwitter, url: "https://x.com/Loay_Ashraf74" },
  { name: "GitHub", icon: FaGithub, url: "https://github.com/LoAy-Ashraf-744" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/loay-ashraf-08b182361/" },
  { name: "Email", icon: Mail, copyText: "loayashraf74la@gmail.com" },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const linksRef = useRef([]);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );

    // Links stagger animation
    gsap.fromTo(
      linksRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".social-links",
          start: "top 85%",
        },
      }
    );

    // Magnetic effect for links
    linksRef.current.forEach((link) => {
      if (!link) return;
      
      const magnetEffect = (e) => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(link, {
          x: x * 0.4,
          y: y * 0.4,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const resetMagnet = () => {
        gsap.to(link, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.3)",
        });
      };

      link.addEventListener("mousemove", magnetEffect);
      link.addEventListener("mouseleave", resetMagnet);

      return () => {
        link.removeEventListener("mousemove", magnetEffect);
        link.removeEventListener("mouseleave", resetMagnet);
      };
    });
  }, []);

  return (
    <section id="contact" ref={sectionRef} className={`section ${styles.contactSection}`}>
      <div className="container" style={{ textAlign: "center" }}>
        <h2 ref={titleRef} className={`${styles.contactTitle} font-dancing`}>Let's Connect</h2>
        
        <div className={`social-links ${styles.socialLinksContainer}`}>
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            
            if (link.copyText) {
              return (
                <button
                  key={link.name}
                  onClick={() => handleCopy(link.copyText)}
                  className={styles.socialLink}
                  ref={(el) => (linksRef.current[index] = el)}
                  style={{ border: 'none', background: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  <span className={styles.iconWrapper}>
                    <Icon size={32} strokeWidth={1.5} />
                  </span>
                  <span className={styles.linkName}>{copied ? "Copied!" : link.name}</span>
                </button>
              );
            }

            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                ref={(el) => (linksRef.current[index] = el)}
              >
                <span className={styles.iconWrapper}>
                  <Icon size={32} strokeWidth={1.5} />
                </span>
                <span className={styles.linkName}>{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
      
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Loay Ashraf. All rights reserved.</p>
      </footer>
    </section>
  );
}
