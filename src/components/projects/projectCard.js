import React, { useEffect, useRef, useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from "./projectCard.module.css";
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ Project: { title, image, description, demo, source }, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Alternate slide direction: even from left, odd from right
  const slideClass = index % 2 === 0 ? styles.slideFromLeft : styles.slideFromRight;

  return (
    <div ref={cardRef} className={`${styles.container} ${slideClass} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.imageWrapper}>
        <img
          src={getImageUrl(image)}
          alt={`${title} project`}
          className={styles.image}
        />
        <div className={styles.overlay}>
          <div className={styles.overlayButtons}>
            <a 
              href={demo} 
              className={`${styles.overlayBtn} ${styles.overlayBtnPrimary} ${demo === '#' ? styles.disabled : ''}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <a 
              href={source} 
              className={styles.overlayBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard;

