import React from 'react'
import './styles.scss'

function experience() {
  return (
    <section className='education-container'>

      <div className='education-container__title'>
        <h2>Experience</h2>
      </div>

      <div className='education-container__info'>

        <div className='education-container__info__list'>
          <h2>Front-End Developer</h2>
          <h4>A Front-End Developer uses React, HTML, JavaScript, CSS, SCSS, and Bootstrap to create responsive, interactive websites with modern designs and efficient code for all devices.</h4>
        </div>

        <div className='education-container__info__list'>
          <h2>Back-End Developer</h2>
          <h4>A Back-End Developer uses Express.js, Spring Boot, and Node.js to build strong server-side apps. They handle server logic and ensure secure, scalable systems.</h4>
        </div>

        <div className='education-container__info__list'>
          <h2>Databases</h2>
          <h4>Skilled in managing databases like MySQL and MongoDB, designing models, optimizing queries, and ensuring data accuracy for better performance.</h4>
        </div>

        <div className='education-container__info__list'>
          <h2>Version Control</h2>
          <h4>Skilled in Git and GitHub for version control, managing repositories, and tracking code changes.</h4>
        </div>

        <div className='education-container__info__list'>
          <h2>Design & Collaboration</h2>
          <h4>Skilled in Figma for design and Postman for API testing, creating prototypes, collaborating on design, and ensuring efficient API integration.</h4>
        </div>


      </div>

    </section>
  )
}

export default experience
