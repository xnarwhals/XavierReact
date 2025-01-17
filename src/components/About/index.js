import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import User from '../../assets/images/user.png';


import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineElements from './timelineElements';


import Loader from 'react-loaders'

import './index.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const importIcon = (iconName) => {
        try {
            return require (`../../assets/images/icons/${iconName}.svg`)
        } catch {
            console.error(`Error loading icon: ${iconName}`);
            return null
        }
    }

    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 3000)
    //   }, [])

    return (
        <>
            <div className="container about-page">
                <img src={User} alt="Xavier" className="headshot" />
                <div className="text-area">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} idx={15} />
                    </h1>
                    <p> 
                        One of my core memories is watching my brother play Pokemon on the Nintendo 64, 
                        as I grew I realized that the ability to create worlds and stories was something that I wanted to do.
                        In order to do that I started to learn how to code and create video games.
                    </p>
                    <p align="LEFT"> 
                        I am a now Sophmore at UC Davis studying computer science. In my free time I love to craft my skills
                        in game/website development and film making. As a student I am always looking for new ways to learn and grow 
                        outside of just academics such as with my roles as a peer-mentor and ambassador for my college!
                    </p>
                    <p> 
                        I live by the saying to "invest in yourself" and I believe that the best way to do that 
                        is to grow and learn from the people around you. My current goal is to have my investments in
                        myself pay off by landing a internship in the tech industry.
                    </p>
                </div>  
                <div className="left-side-about">
                    <VerticalTimeline>
                        {
                            timelineElements.map((element) => {
                                const IconSVG = importIcon(element.icon);
                                return (
                                    <VerticalTimelineElement
                                        key={element.id}
                                        date = {element.date}
                                        dateClassName="date"
                                        iconStyle={{
                                            background: "#f0f0f0",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                        icon={ IconSVG ? (
                                            <img src={IconSVG} alt={element.icon} style={{
                                                
                                                width: "80%", 
                                                height: "80%",
                                                left: "7px",
                                                top: "7px",
                                            }} />
                                        ) : (
                                            <span>No Icon</span>
                                        )}
                                        contentStyle={{
                                            background: "#ffffff",
                                            color: "balck",
                                            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
                                        }}
                                        contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
                                    >
                                        <h3 className="vertical-timeline-element-title">{element.title}</h3>
                                        <h4 className="vertical-timeline-element-subtitle">{element.location}</h4>
                                        <p>{element.description}</p>
                                        {element.title === "Gameheads" && (
                                        <NavLink
                                            to="/portfolio"
                                            className="portfolio-button"
                                        >
                                            View Portfolio
                                        </NavLink>
                                        )}
                                        {element.title === "Student Ambassador" && (
                                            <a 
                                                href="https://www.youtube.com/watch?v=vnWEYyGrXoc"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="portfolio-button"
                                            >
                                            Video Editor
                                            </a>
                                        )}
                                    </VerticalTimelineElement>
                                )
                            })
                        }
                    </VerticalTimeline>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About;