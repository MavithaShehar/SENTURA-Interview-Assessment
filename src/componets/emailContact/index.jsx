import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './styles.scss';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rlixk7r', 'template_2diisbg', form.current, 'Sl5BEd3bXFPemFybc') 
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

    <div className='email-from'>

    <form ref={form} onSubmit={sendEmail} >
      
      <input type="text" name="from_name" placeholder='Subject' />
      <input type="email" name="from_email" placeholder='Your Email' />
      <textarea name="message" placeholder='Message'/>
      <button className='butn' type="submit">Send</button>

    </form>

    </div>
  );
};
export default ContactUs;