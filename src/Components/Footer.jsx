import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import './Style/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer1">
          <img src="./Images/JP.png" alt="Logo" />
          <p>
            Our platform is designed to help you find the perfect job and achieve
            your professional dreams.
          </p>
        </div>

        <div className="quick-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/job">Jobs</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="follow-us">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com/share/1FgD4EXF7h/" target="_blank" rel="noreferrer">
            <FaFacebookF /> Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram /> Instagram
          </a>
          <a href="https://www.linkedin.com/in/aman-verma-2b1216350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
            <FaLinkedinIn /> LinkedIn
          </a>
          <a
            href="https://wa.me/7225853754"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
        <div className="contact-us">
          <h3>Contact Us</h3>
          <a
            href="https://wa.me/7225853754"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp /> 8435856067
          </a>
          <a href="mailto:av478136@gmail.com">
            <MdAlternateEmail /> av478136@gmail.com
          </a>
          <h4><FaLocationDot />02,kibe compound, Madhumilan Square ,Indore</h4>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Job Portal | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
