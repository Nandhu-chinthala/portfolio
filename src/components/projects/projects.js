import React from 'react';
import styles from "./projects.module.css";
import projects from "../data/projects.json";
import ProjectCard from "./projectCard.js"

const Projects = () => {
  return (
    <section id="Projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.subtitle}>
          Here are some of my recent projects that showcase my skills and experience
        </p>
        <div className={styles.projectsGrid}>
          {projects.map((Project, id) => (
            <ProjectCard key={id} Project={Project} index={id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
