import React, { useEffect } from "react";
import './styles.scss';
import Headrs from '../../componets/headers/index';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit, FaGithub } from 'react-icons/fa';
import { SiFigma, SiSpringboot, SiMongodb, SiMysql, SiExpress, SiTypescript, SiPostman, SiNodedotjs, SiBootstrap, SiSass, SiJquery } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { DiJava } from 'react-icons/di';

import Aos from "aos";
import 'aos/dist/aos.css'

const Skills = () => {

    useEffect(()=>{
        Aos.init({duration:1000});
    },[])

    return (
        <div className="skills-section">
            <Headrs headerName="My Skills" />

            <div data-aos="zoom-in-up" className="skills-section__items">
                
                <div  className="skills-section__items__lang">

                    <div   className="skills-section__items__lang__con"> 
                    <DiJava  size={60} color="red" title="Java" />
                    <h1>java</h1>
                    </div>

                    <div className="skills-section__items__lang__con">
                    <FaJs size={60} color="#F7DF1E" title="JavaScript" />
                    <h1>JavaScript</h1>
                    </div>

                    <div className="skills-section__items__lang__con">
                    <FaHtml5 size={60} color="#E34F26" title="HTML5" />
                    <h1>HTML</h1>
                    </div>

                    <div className="skills-section__items__lang__con">
                    <FaCss3Alt size={60} color="#1572B6" title="CSS3" />
                    <h1>CSS</h1>
                    </div>

                   <div className="skills-section__items__lang__con">
                    <SiTypescript size={60} color="#007ACC" title="TypeScript" />
                    <h1>TypeScript</h1>
                   </div>
                        
                </div>

                <div className="skills-section__items__frem">

                    <div className="skills-section__items__frem__con">
                    <FaReact size={50} color="#61DAFB" title="React" />
                    <h1>React</h1>
                    </div>

                    <div className="skills-section__items__frem__con">
                    <SiExpress size={50} color="#ffffff" title="Express.js" /> 
                    <h1>Express.js</h1>   
                    </div>
                    
                    <div className="skills-section__items__frem__con">
                    <TbBrandReactNative size={50} color="#61DAFB" title="React Native" />
                    <h1>React Native</h1>
                    </div>
                    
                    <div className="skills-section__items__frem__con">
                    <SiSpringboot size={50} color="#6DB33F" title="Spring Boot" />
                    <h1>Spring Boot</h1>
                    </div>
                    
                    <div className="skills-section__items__frem__con">
                    <SiNodedotjs size={50} color="#339933" title="Node.js" />
                    <h1>Node.js</h1>
                    </div>
                   
                </div>

                <div className="skills-section__items__lib">
                    
                    <div className="skills-section__items__lib__con">
                    <SiSass size={50} color="#CC6699" title="SCSS" />
                    <h1>SCSS</h1>
                    </div>

                    <div className="skills-section__items__lib__con">
                    <SiBootstrap size={50} color="#563D7C" title="Bootstrap" />
                    <h1>Bootstrap</h1>
                    </div>

                    <div className="skills-section__items__lib__con">
                    <SiJquery size={50} color="#0868AC" title="jQuery" />
                    <h1>jQuery</h1>
                    </div>
                      
                </div>

                <div className="skills-section__items__db">

                    <div className="skills-section__items__db__con">
                    <SiMysql size={50} color="#4479A1" title="MySQL" />
                    <h1>MySQL</h1>
                    </div>

                    <div className="skills-section__items__db__con">
                    <SiMongodb size={50} color="#47A248" title="MongoDB" />
                    <h1>MongoDB</h1>
                    </div>
                    
                    
                </div>

                <div className="skills-section__items__tools">

                    <div className="skills-section__items__tools__con">
                    <FaGit size={50} color="#F05032" title="Git" />
                    <h1>Git</h1>
                    </div>

                    <div className="skills-section__items__tools__con">
                    <FaGithub size={50} color="#ffffff" title="GitHub" />  
                    <h1>GitHub</h1> 
                    </div>

                    <div data-aos="zoom-in" className="skills-section__items__tools__con">
                    <SiFigma size={50} color="#F24E1E" title="Figma" />
                    <h1>Figma</h1>
                    </div>

                    <div className="skills-section__items__tools__con">
                    <SiPostman size={50} color="#FF6C37" title="Postman" />
                    <h1>Postman</h1>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Skills;
