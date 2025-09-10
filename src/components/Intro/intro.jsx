import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';
import bg from'../../assets/image.png';
import btnImg from'../../assets/hireme.png'


const Intro = () => {
  const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/Nandhu_Chintala_Resume.pdf";
  link.download = "Nandhu_Chintala_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  return (
 
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText" > I'm<span className="IntroName">Nandhu</span><br/>Frontend Devloper</span>
            <p className="introPara">I am  a Skilled Frontend Devloper with experince in <br/>Building beautiful and functional web experiences.</p>
            <Link>
              <a   href="../../assets/Nandhu_Chintala_Resume.pdf" download="Nandhu_Chintala_Resume">
              <button onClick={handleDownload} className="btn"><img src={btnImg} alt="hireme" className="btnImg" ></img>Resume</button></a>
            </Link>
        </div>
        <img src={bg} alt="" className="bg" ></img>
    </section>
  )
}

export default Intro;
