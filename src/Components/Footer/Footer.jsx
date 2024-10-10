import React from 'react';
import './Footer.css'
// import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <div className='logo logo-bottom'>
                        <p>Rezaul Karim</p>
                    </div>
                    {/* <img src={footer_logo} alt="" /> */}
                    {/* <p>I'm a dedicated front-end web developer from Dhaka, Bangladesh, proficient in HTML, CSS, JavaScript, and React.js, focused on building responsive websites.</p> */}
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" name="email" placeholder='Enter Your Email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>

                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p>© 2024 Rezaul Karim. All rights reserved.</p>
                {/* <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div> */}
            </div>
        </div>
    );
};

export default Footer;