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

      <div className="contact-me">
        <div className="contact-me__info">
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>
                  {item.icon} {item.info}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-me__EmailBox"></div>
      </div>
    </main>
  );
};

export default Contact;
