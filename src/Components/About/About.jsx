import React from 'react';
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'

const About = () => {
    return (
        <div id='about' className='about'>

            <div className="about-title">
                <h1>About me</h1>

            </div>

            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a front-end web developer with solid skills in React js, Javascript, Html, Css, Tailwind, Bootstrap, Express js and MongoDB. I focus on creating responsive and user-friendly websites that work well on all devices, using clean and efficient code.</p>
                        <p>I am committed to learning and staying updated with the latest technologies to improve my skills. My goal is to build high-quality web applications that provide great user experiences and meet current industry standards.</p>
                    </div>

                    <div className="about-skills">
                        <div className='about-skill'><p>HTML & CSS</p> <hr style={{ width: "100%" }} /></div>
                        <div className='about-skill'><p>React JS</p> <hr style={{ width: "70%" }} /></div>
                        <div className='about-skill'><p>JavaScript</p> <hr style={{ width: "60%" }} /></div>
                        <div className='about-skill'><p>Tailwind CSS</p> <hr style={{ width: "70%" }} /></div>
                        <div className='about-skill'><p>MongoDb</p> <hr style={{ width: "60%" }} /></div>
                        <div className='about-skill'><p>Express JS</p> <hr style={{ width: "55%" }} /></div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default About;