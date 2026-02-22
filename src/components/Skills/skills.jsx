import React, { useEffect, useRef } from 'react';
import './skills.css';
import { 
  Palette, 
  Server, 
  Rocket, 
  Globe,
  FileCode,
  FileType,
  Atom,
  Coffee,
  Database,
  GitBranch,
  Github
} from 'lucide-react';

const useScrollAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = ref.current?.querySelectorAll('.stat-card, .service-card, .tech-icon-item');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
};

const Skills = () => {
  const animationRef = useScrollAnimation();

  const techStack = [
    { name: 'HTML', icon: FileCode },
    { name: 'CSS', icon: Palette },
    { name: 'JavaScript', icon: FileType },
    { name: 'React', icon: Atom },
    { name: 'Java', icon: Coffee },
    { name: 'SQL', icon: Database },
    { name: 'Git', icon: GitBranch },
    { name: 'GitHub', icon: Github }
  ];

  const stats = [
    { number: '4+', label: 'Completed Projects' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '2+', label: 'Years Experience' }
  ];

  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Building responsive and performant websites using modern technologies like React, HTML, CSS, and JavaScript.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces that enhance user experience and engagement.'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Developing robust server-side applications and APIs using Java with efficient database integration.'
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description: 'Optimizing web applications for speed, accessibility, and SEO to ensure the best user experience.'
    }
  ];

  return (
    <section id="skills" ref={animationRef}>
      {/* About Me Section */}
      <div className="about-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-text">
            I'm a dedicated Computer Science graduate with a passion for creating exceptional digital experiences. 
            My expertise lies in frontend technologies including React, HTML, CSS, and JavaScript, complemented 
            by strong backend skills in Java and database management with SQL.
          </p>
          <p className="about-text">
            I enjoy building responsive web interfaces that not only look great but also provide seamless user experiences. 
            My approach combines clean code practices with creative problem-solving to deliver projects that exceed expectations.
          </p>
        </div>
        
        {/* Stats */}
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className={`stat-card ${index % 2 === 0 ? 'from-left' : 'from-right'}`}>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack - Icons Only */}
      <div className="tech-stack-inline">
        {techStack.map((tech, index) => (
          <div key={index} className="tech-icon-item" style={{ transitionDelay: `${index * 0.1}s` }}>
            <tech.icon className="tech-icon" size={32} strokeWidth={1.5} />
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <div id="services" className="services-section">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${index % 2 === 0 ? 'from-left' : 'from-right'}`}>
              <div className="service-icon-wrapper">
                <service.icon className="service-icon-svg" size={32} strokeWidth={1.5} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;
