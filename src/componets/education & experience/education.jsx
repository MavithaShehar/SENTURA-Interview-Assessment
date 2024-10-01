import React from 'react'
import './education.scss'

function education() {
  return (
    <section className='education-container'>

      <div className='education-container__title'>
        <h2>Education</h2>
      </div>

      <div className='education-container__info'>

        <div className='education-container__info__list'>
          <h2>Graduate Diploma in Software Engineering</h2>
          <h3>2022 - 2024</h3>
          <h3>IJSE - Institute of Software Engineering, Panadura</h3>
          <h4>I am currently pursuing a Graduate Diploma in Software Engineering, specializing as a Full Stack Developer at IJSE, Panadura.</h4>
        </div>


        <div className='education-container__info__list'>
          <h2>School Education</h2>
          <h3>Until - 2018</h3>
          <h3>G/Karandeniya C.C</h3>
          <h4>I studied at Karandeniya Central College until 2018
            and faced the General Certificate of Education (Ordinary Level) in 2014 and the General Certificate of Education (Advanced Level) Examination in 2017 and 2018.</h4>
        </div>

      </div>

    </section>
  )
}

export default education
