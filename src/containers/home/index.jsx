import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import './styles.scss';
import logo from "../../assets/imgs/cover_img.jpeg";


const Home = () => {
    const navigate = useNavigate();

    const handelNavigateToContactMe = () => {
        navigate('/contact');
    };

    return (
        <section id="home" className="home">

            <div className="home__resose-wrapper">
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

            <div className="home__my-image">
                <img style={{width:400 ,height:440}} src={logo} alt="My Logo" /> 
            </div>

            <div className="home__text-wrapper">
                <h1>Hello! I'm <br /> <span>Shehar Mavitha</span> <br /> Full Stack Developer</h1>
            </div>

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
        </section>
    );
};

export default Home;
