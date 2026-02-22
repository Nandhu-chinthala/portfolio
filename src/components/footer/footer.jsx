import React from 'react';
import './footer.css';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">
            Copyright &copy; {currentYear} Nandhu Chintala. All Rights Reserved.
          </p>
          <div className="footer-socials">
            <a 
              href="https://github.com/Nandhu-chinthala" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:nandhuchinthala@gmail.com" 
              className="social-icon"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="footer-made-with">
            Made with <Heart size={14} className="heart-icon" fill="#FF6A3D" /> by Nandhu
          </p>
        </div>
        <button onClick={scrollToTop} className="back-to-top">
          Back to Top
        </button>
      </div>
    </footer>
  )
}

export default Footer;
