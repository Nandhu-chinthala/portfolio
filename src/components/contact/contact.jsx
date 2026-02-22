import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_tqhydfs', 'template_k32y1nc', form.current, {
        publicKey: '8AGfXnSKmAHLrPK7H',
      })
      .then(
        () => {
          setSubmitStatus('success');
          form.current.reset();
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          setSubmitStatus('error');
          console.log('FAILED...', error.text);
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="Contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-subtitle">
          Have a project in mind? Let's work together to bring your ideas to life.
        </p>
        
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="from_name">Name</label>
            <input 
              type="text" 
              id="from_name"
              className="form-input" 
              placeholder="Your name" 
              name="from_name"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="from_email">Email</label>
            <input 
              type="email" 
              id="from_email"
              className="form-input" 
              placeholder="Your email" 
              name="from_email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message"
              name="message" 
              rows="5" 
              placeholder="Your message" 
              className="form-textarea"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {submitStatus === 'success' && (
            <p className="status-message success">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="status-message error">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
