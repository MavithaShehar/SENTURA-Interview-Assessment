import './styles.scss';
import React,{useEffect} from 'react';
import { FaGithub, FaWhatsapp, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import Headrs from '../../componets/headers/index';
import ContactIcon from '../../componets/contacIcons/index';
import Email from '../../componets/emailContact/index';

import Aos from "aos";
import 'aos/dist/aos.css'

const Contact = () => {
  

  useEffect(()=>{
    Aos.init({duration:1000});
},[])


  const data = [
    { icon: <FaLinkedin className="contact-item__icon"  />, info: 'LinkedIn', url: 'https://www.linkedin.com/in/sheharmavitha/', titel: "Shehar Mavitha" },
    { icon: <FaWhatsapp className="contact-item__icon"  />, info: 'WhatsApp', url: 'https://wa.me/94778314711', titel: "+94 778 314 711" },
    { icon: <FaPhone className="contact-item__icon" />, info: 'Phone', url: 'tel:+1234567890', titel: "+94 778 314 711" },
    { icon: <FaEnvelope className="contact-item__icon"  />, info: 'Email', url: 'mailto:yourmail@example.com', titel: "mavithashehar@gmail.com" },
    { icon: <FaGithub className="contact-item__icon"  />, info: 'GitHub', url: 'https://github.com/MavithaShehar', titel: "Mavitha Shehar" },
  ];

  return (
    <main id="about-me-section">
      <Headrs headerName="Contact Me" />

      <div className="about-me-section__body">

        <div className="about-me-section__body__icons" data-aos="zoom-in-up">

          <div className="wrapper">

            {data.map((item, index) => (
              <ContactIcon key={index} icon={item.icon} titel={item.titel} url={item.url} />
            ))}

          </div>

        </div>

        <div data-aos="zoom-in-up" className="about-me-section__body__info">
              <Email/>
        </div>

      </div>
    </main>
  );
};

export default Contact;
