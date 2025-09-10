import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png';
import Menu  from "../../assets/menu.png";
const Navbar = () => {
  const[showMenu,setShowMenu]=useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo' />
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100}  duration={200} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50}  duration={200} className="desktopMenuListItem">Abouts</Link>
        <Link activeClass='active' to='Projects' spy={true} smooth={true} offset={-50}  duration={200} className="desktopMenuListItem">projects</Link>
      </div>
      <button className="desktopMenubtn" onClick={()=>{
        document.getElementById('Contact').scrollIntoView({behavior:'smooth' });
      }}>  
        <img src={contactImg}alt="" className="desktopMenuImg"/>
        contact me
      </button>
      <img src={Menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className="NavMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100}  duration={200} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50}  duration={200} className="ListItem" onClick={()=>setShowMenu(false)}>Abouts</Link>
        <Link activeClass='active' to='Projects' spy={true} smooth={true} offset={-50}  duration={200} className="ListItem" onClick={()=>setShowMenu(false)}>projects</Link>
        <Link activeClass='active' to='Contact' spy={true} smooth={true} offset={-50}  duration={200} className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
      
    </nav>
  )
}

export default Navbar;
