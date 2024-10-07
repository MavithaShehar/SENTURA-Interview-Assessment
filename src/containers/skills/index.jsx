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
                    <DiJava   color="red" title="Java" />
                    <h1>java</h1>
                    </div>

                    <div className="skills-section__items__lang__con">
                    <FaJs color="#F7DF1E" title="JavaScript" />
                    <h1>JavaScript</h1>
                    </div>

                    <div className="skills-section__items__lang__con">
                    <FaHtml5 color="#E34F26" title="HTML5" />
                    <h1>HTML</h1>
                    </div>

                    <div className="skills-section__items__lang__con">
                    <FaCss3Alt color="#1572B6" title="CSS3" />
                    <h1>CSS</h1>
                    </div>

                   <div className="skills-section__items__lang__con">
                    <SiTypescript color="#007ACC" title="TypeScript" />
                    <h1>TypeScript</h1>
                   </div>
                        
                </div>

                <div className="skills-section__items__frem">

                    <div className="skills-section__items__frem__con">
                    <FaReact color="#61DAFB" title="React" />
                    <h1>React</h1>
                    </div>

                    <div className="skills-section__items__frem__con">
                    <SiExpress  color="#ffffff" title="Express.js" /> 
                    <h1>Express.js</h1>   
                    </div>
                    
                    <div className="skills-section__items__frem__con">
                    <TbBrandReactNative  color="#61DAFB" title="React Native" />
                    <h1>React Native</h1>
                    </div>
                    
                    <div className="skills-section__items__frem__con">
                    <SiSpringboot  color="#6DB33F" title="Spring Boot" />
                    <h1>Spring Boot</h1>
                    </div>
                    
                    <div className="skills-section__items__frem__con">
                    <SiNodedotjs color="#339933" title="Node.js" />
                    <h1>Node.js</h1>
                    </div>
                   
                </div>

                <div className="skills-section__items__lib">
                    
                    <div className="skills-section__items__lib__con">
                    <SiSass  color="#CC6699" title="SCSS" />
                    <h1>SCSS</h1>
                    </div>

                    <div className="skills-section__items__lib__con">
                    <SiBootstrap  color="#563D7C" title="Bootstrap" />
                    <h1>Bootstrap</h1>
                    </div>

                    <div className="skills-section__items__lib__con">
                    <SiJquery  color="#0868AC" title="jQuery" />
                    <h1>jQuery</h1>
                    </div>
                      
                </div>

                <div className="skills-section__items__db">

                    <div className="skills-section__items__db__con">
                    <SiMysql  color="#4479A1" title="MySQL" />
                    <h1>MySQL</h1>
                    </div>

                    <div className="skills-section__items__db__con">
                    <SiMongodb  color="#47A248" title="MongoDB" />
                    <h1>MongoDB</h1>
                    </div>
                    
                    
                </div>

                <div className="skills-section__items__tools">

                    <div className="skills-section__items__tools__con">
                    <FaGit  color="#F05032" title="Git" />
                    <h1>Git</h1>
                    </div>

                    <div className="skills-section__items__tools__con">
                    <FaGithub  color="#ffffff" title="GitHub" />  
                    <h1>GitHub</h1> 
                    </div>

                    <div data-aos="zoom-in" className="skills-section__items__tools__con">
                    <SiFigma  color="#F24E1E" title="Figma" />
                    <h1>Figma</h1>
                    </div>

                    <div className="skills-section__items__tools__con">
                    <SiPostman  color="#FF6C37" title="Postman" />
                    <h1>Postman</h1>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Skills;
