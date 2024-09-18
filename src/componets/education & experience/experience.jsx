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
          <h4>A Front-End Developer uses React, HTML, JavaScript, CSS, SCSS, and Bootstrap to build responsive, interactive web interfaces. They ensure seamless user experiences with modern styling and efficient, accessible code across devices.</h4>
        </div>

        <div className='education-container__info__list'>
          <h2>Back-End Developer</h2>
          <h4>A Back-End Developer utilizes Express.js, Spring Boot, and Node.js to create robust server-side applications. They manage server logic, integrate databases like MySQL and MongoDB, and ensure secure, scalable back-end solutions.</h4>
        </div>

        <div className='education-container__info__list'>
          <h2>Databases</h2>
          <h4>Proficient in managing and querying databases such as MySQL and MongoDB. They design and implement data models, optimize queries, and ensure data integrity for efficient application performance.</h4>
        </div>

        <div className='education-container__info__list'>
          <h2>Version Control</h2>
          <h4>Experienced with Git and GitHub for version control. They manage code repositories, collaborate with teams, and maintain a history of code changes to streamline development workflows.</h4>
        </div>

        <div className='education-container__info__list'>
          <h2>Design & Collaboration</h2>
          <h4>Skilled in using Figma for design and Postman for API testing. They create design prototypes, collaborate on UI/UX, and ensure efficient API integration and testing for seamless application functionality.</h4>
        </div>


      </div>

    </section>
  )
}

export default experience
