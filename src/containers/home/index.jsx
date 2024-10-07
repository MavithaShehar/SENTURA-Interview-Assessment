import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos"; // Importing AOS
import "aos/dist/aos.css"; // AOS Styles
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import './styles.scss';
import logo from "../../assets/imgs/cover_img.jpeg";
import Button from "../../componets/buttons/index";
import { Animate } from "react-simple-animate";

const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const handleDownloadCV = () => {
       
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'Shehar Mavitha.pdf'; 
        link.click();
    };

    const navigate = useNavigate();

    const handleNavigateToContactMe = () => {
        navigate('/contact');
    };

    return (
        <section id="home" className="home">
            <div className="home__resose-wrapper">

                {/* Image Section */}
                <div data-aos="zoom-out" className="home__resose-wrapper__my-image">
                    <img src={logo} alt="My Logo" />
                </div>

                {/* Text Section */}
                <div className="home__resose-wrapper__text-wrapper">
                    <div className="home__resose-wrapper__text-wrapper__text">
                        <h1>Hello! I'm <br /> <span>Shehar Mavitha</span> <br /> Full Stack Developer</h1>
                    </div>

                    {/* Contact Section */}
                    <div data-aos="zoom-in" className="home__resose-wrapper__contact">
                        <a href="https://github.com/MavithaShehar" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://github.com/MavithaShehar" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/sheharmavitha/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>

                    
                    <div className="home__resose-wrapper__text-wrapper__btn">
                        <div className="home__contact-me" data-aos="fade-up">
                        <Button onClick={handleDownloadCV} name="Download CV" />
                        </div>

                        
                            <div className="home__contact-me" data-aos="fade-up">
                                <Button onClick={handleNavigateToContactMe} name="Hire Me" />
                            </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
