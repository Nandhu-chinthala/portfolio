import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';

const Intro = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/Nandhu_Chintala_Resume.pdf`;
    link.download = "Nandhu_Chintala_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="intro">
      <div className="intro-container">
        <div className="introContent">
          <span className="hello">Hello.</span>
          <h1 className="introTitle">
            I'm <span className="introName">Chinthala Nandhu</span>
          </h1>
          <h2 className="introSubtitle">Frontend Developer</h2>
          <p className="introPara">
            I am a skilled Frontend Developer with experience in building beautiful 
            and functional web experiences. Passionate about creating responsive, 
            user-friendly interfaces with modern technologies.
          </p>
          <div className="introButtons">
            <button onClick={scrollToContact} className="btn btn-primary">
              Got a project?
            </button>
            <button onClick={handleDownload} className="btn btn-secondary">
              My Resume
            </button>
          </div>
        </div>
        <div className="introImageWrapper">
          <div className="photo-container">
            <div className="photo-ring ring-1"></div>
            <div className="photo-ring ring-2"></div>
            <div className="photo-ring ring-3"></div>
            <div className="photo-decoration decoration-1"></div>
            <div className="photo-decoration decoration-2"></div>
            <div className="photo-frame">
              <img src={bg} alt="Nandhu Chintala" className="bg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
