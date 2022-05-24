import React from 'react';
import Facebook from '../../assets/icon-facebook.svg';
import Instagram from '../../assets/icon-instagram.svg';
import Pinterest from '../../assets/icon-pinterest.svg';
import Twitter from '../../assets/icon-twitter.svg';
import '../css/Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-inner'>
                <a className='app-name' href='#top'>Shortly</a>
                <div className='footer-section'>
                    <p>Features</p>
                    <a href='#top'>Link Shortening</a>
                    <a href='#top'>Branded Links</a>
                    <a href='#top'>Analytics</a>
                </div>
                <div className='footer-section'>
                    <p>Resources</p>
                    <a href='#top'>Blog</a>
                    <a href='#top'>Developers</a>
                    <a href='#top'>Support</a>
                </div>
                <div className='footer-section'>
                    <p>Company</p>
                    <a href='#top'>About</a>
                    <a href='#top'>Our Team</a>
                    <a href='#top'>Careers</a>
                    <a href='#top'>Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;