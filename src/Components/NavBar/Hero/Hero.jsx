import React from 'react';
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import profile_img from '../../../assets/profile_img.png'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1> <span> I'm Rezaul Karim, </span> Frontend Developer based in Bangladesh </h1>
            <p>I'm a dedicated front-end web developer from Dhaka, Bangladesh, proficient in HTML, CSS, JavaScript, and React.js, focused on building responsive websites.</p>

            <div className="hero-action">
                <div className='hero-connect'><AnchorLink className="anchor" href="/contact">Connect with me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    );
};

export default Hero;