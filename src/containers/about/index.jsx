import './styles.scss';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Headrs from '../../componets/headers/index';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import { Animate } from "react-simple-animate";

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
                <div className="about-me__info col-lg-6 col-md-12">
                    <Animate
                        play
                        duration={0.8}
                        start={{ transform: "translateX(-550px)" }}
                        end={{ transform: "translateX(0px)" }}
                    >
                        <h1 className="mt-4">
                            Hello, I am Shehar Mavitha Kaluarachchi <br />
                            I began my Software Engineer life in 2022. <br />
                            I've spent most of my waking hours for the last few years designing, <br />
                            programming, and operating websites. <br />
                            I have acquired the skills and knowledge necessary to <br />
                            make your project a success. <br />
                            I enjoy every step of the design process <br /> from discussion to collaboration.
                        </h1>
                    </Animate>
                </div>

                {/* Gallery Section */}
                <div className="about-me__gallery col-lg-6 col-md-12">
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

            {/* Education & Experience Section */}
            <div className='education-section ' >
                 <Education data-aos="zoom-in" class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 "/>
                 <Experience class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 "/>
            </div>
        </main>
    );
} 

export default About;
