import React, { useRef, useState } from 'react'
import './NavBar.css'
// import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const NavBar = () => {
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    return (
        <div className='navbar'>
            <div className='logo'>
                <p>Rezaul Karim</p>
            </div>
            {/* <img src={logo} alt="" /> */}
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />

            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />
                <li><AnchorLink className="anchor" href="/home">Home</AnchorLink></li>
                <li><AnchorLink className="anchor" href="/about">About Me</AnchorLink></li>
                <li><AnchorLink className="anchor" href="/services">Services</AnchorLink></li>
                <li><AnchorLink className="anchor" href="/portfolio">Portfolio</AnchorLink></li>
                <li><AnchorLink className="anchor" href="/contact">Contact</AnchorLink></li>

            </ul>

            {/* <div className="nav-connect">Connect With Me</div> */}
            <div className="nav-connect"><AnchorLink className="anchor" href="/contact">Connect With Me</AnchorLink></div>
        </div>
    )
}

export default NavBar
