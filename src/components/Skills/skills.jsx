import React from 'react';
import './skills.css';
import webdevloper from '../../assets/website-devlop.png';
import java from '../../assets/java-devloper.png';
import sql from '../../assets/sql.png';
const Skills = () => {
  return (
    <section id="skills">
       <span className="skillTitle">What I Do</span>
       <span className="skillDiscri">I'm a dedicated CSE graduate skilled in frontend technologies like React,HTML, CSS, and JavaScript, along with Java and SQL.
             I enjoy building responsive web interfaces and developing 
               backend logic with strong database handling.</span>
      <div className="skillBars">
         <div className="skillbar">
            <img src={webdevloper} alt="webdevloper" className="skillBarImg"/>
            <div className="skillBarText">
                <h2>Web Devlopment</h2>
                <p>Proficient in HTML, CSS, JavaScript, and React for frontend development.</p>
            </div>

         </div>
          <div className="skillbar">
            <img src={java} alt="java" className="skillBarImg"/>
            <div className="skillBarText">
                <h2>Backend devlopment</h2>
                <p> Skilled in core Java and backend development.</p>
            </div>

         </div>
          <div className="skillbar">
            <img src={sql} alt="sql" className="skillBarImg"/>
            <div className="skillBarText">
                <h2>DataBase</h2>
                <p>Experienced in writing SQL queries and managing databases.</p>
            </div>

         </div>
      </div>
    </section> 
  )
}

export default Skills;
