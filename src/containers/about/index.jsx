import './styles.scss';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Headrs from '../../componets/headers/index';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

import img01 from "../../assets/imgs/img01.jpg";
import img02 from "../../assets/imgs/img02.jpeg";
import img03 from "../../assets/imgs/img03.jpeg";
import img04 from "../../assets/imgs/img04.jpeg";
import img05 from "../../assets/imgs/img05.jpg";
import img06 from "../../assets/imgs/img06.jpeg";
import img07 from "../../assets/imgs/img07.jpeg";

import Education from '../../componets/education & experience/education';
import Experience from '../../componets/education & experience/experience';

const About = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [activeSection, setActiveSection] = useState(''); // State to track active section

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
           
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const slides = [
        { img: img01, topic: "Nature 1" },
        { img: img02, topic: "Nature 2" },
        { img: img03, topic: "Nature 3" },
        { img: img04, topic: "Nature 4" },
        { img: img05, topic: "Nature 5" },
        { img: img06, topic: "Nature 6" },
        { img: img07, topic: "Nature 7" },
    ];

    return (
        <main id='about-me-section' className="container">
            {/* Header */}
            <Headrs headerName="About Me" />

            <div className="about-me row">
                {/* About Me Info Section */}
                <div className="about-me__info">
                    <h1 className="mt-4">
                        Hello, I am Shehar Mavitha Kaluarachchi <br />
                        I began my Software Engineer life in 2022. <br />
                        I've spent most waking hours designing for the last years, <br />
                        programming, and operating websites. <br />
                        I have acquired the skills and knowledge necessary to <br />
                        make your project a success. <br />
                        I enjoy every step of the design process <br /> from discussion to collaboration.
                    </h1>
                </div>

                {/* Gallery Section */}
                <div className="about-me__gallery">
                    <Swiper
                        effect={'flip'}
                        grabCursor={true}
                        pagination={true}
                        navigation={true}
                        modules={[EffectFlip, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <img src={slide.img} alt={`Slide ${index + 1}`} className="img-fluid" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className='ed-ex-btn'>
                {/* Toggle Buttons */}
                <button onClick={() => setActiveSection('education')}>Education</button>
                <button onClick={() => setActiveSection('experience')}>Experience</button>
            </div>

            <div className='education-section'>
                {windowWidth < 1000 ? (
                    <>
                        {activeSection === 'education' && (
                            <Education className="education-container" />
                        )}
                        {activeSection === 'experience' && (
                            <Experience className="experience-container" />
                        )}
                    </>
                ) : (
                    <>
                        <Education className="education-container" />
                        <Experience className="experience-container" />
                    </>
                )}
            </div>
        </main>
    );
};

export default About;
