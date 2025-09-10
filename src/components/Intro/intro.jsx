import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/Nandhu_Chintala_Resume.pdf`;
    link.download = "Nandhu_Chintala_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm <span className="IntroName">Nandhu</span>
          <br />
          Frontend Developer
        </span>
        <p className="introPara">
          I am a skilled Frontend Developer with experience in <br />
          building beautiful and functional web experiences.
        </p>

        <Link>
          <button onClick={handleDownload} className="btn">
            <img src={btnImg} alt="resume" className="btnImg" />
            Resume
          </button>
        </Link>
      </div>
      <img src={bg} alt="background" className="bg" />
    </section>
  );
};

export default Intro;
