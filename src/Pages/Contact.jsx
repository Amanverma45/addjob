import React, { useState } from 'react';
import '../Components/Style/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, your message has been submitted!`);
    setFormData({name: '', email: '', message: ''});
  };

  return (
    <div className="contact-container">
      <div className="contact-heading text-center">
        <h2>Contact Us</h2>
        <p>Have a question or want to work with us? Fill out the form below and we will get back to you shortly.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required
        />
        <textarea 
          name="message" 
          rows="6" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
