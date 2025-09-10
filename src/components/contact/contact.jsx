
import React, { useRef} from 'react';
import './contact.css';
import facebookicon from "../../assets/facebook-icon.png";
import instagramicon from "../../assets/instagram.png";
import  youtubeicon from "../../assets/youtube.png";
import tiwtericon from "../../assets/twitter.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
 const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tqhydfs', 'template_k32y1nc', form.current, {
        publicKey: '8AGfXnSKmAHLrPK7H',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="Contact">
        <div id="contact">
            <h1 className="title">Contact Me</h1>
            <span className="contactdesc">Please fill out the from bellow to discuss any work opportunities.</span>
            <form className="contactfrom" ref={form}  onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="your name" name="your_name"/>
                <input type="email" className="email" placeholder="your email" name="your_email"/>
                <textarea name="massage" rows="5" placeholder="your massage" className="massage"  ></textarea>
                <button type="submit" value="send" className="submitbtn" >Submit</button>
                <div className="links">
                     <img src={facebookicon} alt="facebooklink" className="link"/>
                     <img src={tiwtericon} alt="tiwterlink" className="link"/>
                     <img src={youtubeicon} alt="youtubelink" className="link"/>
                     <img src={instagramicon} alt="instagramlink" className="link"/>
      
                </div>
            </form>

        </div>

    </section>
 
  );
}

export default Contact;
