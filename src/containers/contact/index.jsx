import './styles.scss';
import React from 'react';
import { FaGithub, FaWhatsapp, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import Headrs from '../../componets/headers/index';

const Contact = () => {
  const data = [
    { icon: <FaGithub className="contact-item__icon" />, info: 'GitHub', url: 'https://github.com/MavithaShehar' },
    { icon: <FaWhatsapp className="contact-item__icon" />, info: 'WhatsApp', url: 'https://wa.me/94778314711' },
    { icon: <FaEnvelope className="contact-item__icon" />, info: 'Email', url: 'mailto:yourmail@example.com' },
    { icon: <FaPhone className="contact-item__icon" />, info: 'Phone', url: 'tel:+1234567890' },
    { icon: <FaLinkedin className="contact-item__icon" />, info: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
  ];

  return (
    <main id="about-me-section">
      <Headrs headerName="Contact Me" />

      <div className="about-me-section__body">
        <div className="about-me-section__body__info">
          
        </div>

        <div className="about-me-section__body__icons">

          <div className="wrapper">

            <a href="https://linkedin.com" target="_blank" className="button">
              <div className="icon">
                <FaLinkedin size={30} className="contact-item__icon" />
              </div>
              <span>Shehar Mavitha</span>
            </a>

            <a href="tel:+1234567890" target="_blank" className="button">
              <div className="icon">
                <FaPhone size={30} className="contact-item__icon" />
              </div>
              <span>+94 778 314 711</span>
            </a>

            <a href="https://wa.me/94778314711" target="_blank" className="button">
              <div className="icon">
                <FaWhatsapp size={30} className="contact-item__icon" />
              </div>
              <span>+94 778 314 711</span>
            </a>

            <a href="https://github.com/MavithaShehar" target="_blank" className="button">
              <div className="icon">
                <FaGithub size={30} className="contact-item__icon" />
              </div>
              <span>Mavitha Shehar</span>
            </a>
            
            <a href="mailto:yourmail@example.com" target="_blank" className="button">
              <div className="icon">
                <FaEnvelope size={30} className="contact-item__icon" />
              </div>
              <span>mavithashehar@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
