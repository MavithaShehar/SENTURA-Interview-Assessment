import './styles.scss';
import React from 'react';
import { FaGithub, FaWhatsapp, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import Headrs from '../../componets/headers/index';
import ContactIcon from '../../componets/contacIcons/index';
import index from '../../componets/headers/index';

const Contact = () => {
  const data = [
    { icon: <FaLinkedin className="contact-item__icon" size={30} />, info: 'LinkedIn', url: 'https://www.linkedin.com/in/sheharmavitha/', titel: "Shehar Mavitha" },
    { icon: <FaWhatsapp className="contact-item__icon" size={30} />, info: 'WhatsApp', url: 'https://wa.me/94778314711', titel: "+94 778 314 711" },
    { icon: <FaPhone className="contact-item__icon" size={30} />, info: 'Phone', url: 'tel:+1234567890', titel: "+94 778 314 711" },
    { icon: <FaEnvelope className="contact-item__icon" size={30} />, info: 'Email', url: 'mailto:yourmail@example.com', titel: "mavithashehar@gmail.com" },
    { icon: <FaGithub className="contact-item__icon" size={30} />, info: 'GitHub', url: 'https://github.com/MavithaShehar', titel: "Mavitha Shehar" },
  ];

  return (
    <main id="about-me-section">
      <Headrs headerName="Contact Me" />

      <div className="about-me-section__body">

        <div className="about-me-section__body__icons">

          <div className="wrapper">

            {data.map((item, index) => (
              <ContactIcon key={index} icon={item.icon} titel={item.titel} url={item.url} />
            ))}

          </div>
          
        </div>

        <div className="about-me-section__body__info">

        </div>

      </div>
    </main>
  );
};

export default Contact;
