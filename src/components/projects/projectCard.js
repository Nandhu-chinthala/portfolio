import React from 'react';
import { getImageUrl } from '../../utils';
import styles from"./projectCard.module.css";
const ProjectCard = ({Project:{title,image,description,skills = [],demo,source}}) => {
    console.log("Skills for project:", title, skills);
  return (
     <div className={styles.container} >
            <img 
            src={getImageUrl(image)} 
            alt={`Image of ${title}`}
            className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
            { skills.map((skill,id)=>{
                <li key={id} className={styles.skill}>
                    {skill}
                    </li>;
                })}
            </ul>
            <div className={styles.links}>
            <a href={demo} className={styles.link}>Demo</a>
            <a href={source}className={styles.link}>source</a>
            </div>
      
    </div>
  )
}

export default ProjectCard;

