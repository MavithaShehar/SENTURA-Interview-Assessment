import React from 'react'
import './styles.scss';
import { FaGithub, FaWhatsapp, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

function ContactIcon(props) {
  return (
    <>
      <a href={props.url} target="_blank" className="button">
              <div className="icon">
                {props.icon}
              </div>
              <span>{props.titel}</span>
            </a>

    </>
  )
}

export default ContactIcon;
