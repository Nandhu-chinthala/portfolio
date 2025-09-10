import React from 'react';
import styles from "./projects.module.css";
import projects from "../data/projects.json";
import ProjectCard from "./projectCard.js"
const Projects = () => {
  return (
    <section id="Projects">
      <div id= {styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {
            projects.map((Project,id)=>{
                return <ProjectCard key={id} Project={Project}/>;
            })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
