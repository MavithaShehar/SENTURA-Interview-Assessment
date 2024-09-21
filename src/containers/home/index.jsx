import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import './styles.scss';
import logo from "../../assets/imgs/cover_img.jpeg";
import Aos from "aos";
import 'aos/dist/aos.css';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    const handelNavigateToContactMe = () => {
        navigate('/contact');
    };

    return (
        <section id="home" className="home">
            <div className="home__resose-wrapper">

                <div data-aos="zoom-out"  className="home__resose-wrapper__my-image">
                    <img src={logo} alt="My Logo" />
                </div>

                <div className="home__resose-wrapper__text-wrapper">
                    <div className="home__resose-wrapper__text-wrapper__text">
                        <h1>Hello! I'm <br /> <span>Shehar Mavitha</span> <br /> Full Stack Developer</h1>
                    </div>

                    <div  data-aos="zoom-in" className="home__resose-wrapper__contact">
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
                        <Animate
                            play
                            duration={1.5}
                            start={{ transform: "translateY(550px)" }}
                            end={{ transform: "translateX(0px)" }}
                        >
                            <div className="home__contact-me">
                                <button onClick={handelNavigateToContactMe}>Download CV</button>
                            </div>
                        </Animate>

                        <Animate
                            play
                            duration={1.5}
                            start={{ transform: "translateY(550px)" }}
                            end={{ transform: "translateX(0px)" }}
                        >
                            <div className="home__contact-me">
                                <button onClick={handelNavigateToContactMe}>Hire Me</button>
                            </div>
                        </Animate>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
