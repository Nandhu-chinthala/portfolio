import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import Menu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-brand">
        <span className="brand-text">Nandhu Chinthala</span>
      </div>
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={200} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={200} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='services' spy={true} smooth={true} offset={-50} duration={200} className="desktopMenuListItem">Services</Link>
        <Link activeClass='active' to='Projects' spy={true} smooth={true} offset={-50} duration={200} className="desktopMenuListItem">Projects</Link>
        <Link activeClass='active' to='Contact' spy={true} smooth={true} offset={-50} duration={200} className="desktopMenuListItem">Contact</Link>
      </div>
      <img src={Menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
      <div className="NavMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={200} className="ListItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={200} className="ListItem" onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='services' spy={true} smooth={true} offset={-50} duration={200} className="ListItem" onClick={() => setShowMenu(false)}>Services</Link>
        <Link activeClass='active' to='Projects' spy={true} smooth={true} offset={-50} duration={200} className="ListItem" onClick={() => setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to='Contact' spy={true} smooth={true} offset={-50} duration={200} className="ListItem" onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;
