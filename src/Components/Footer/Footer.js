import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <h2>FORM &amp; FUNCTION</h2>
            <ul className='footerLinks'>
                <Link className='link' to="/about">
                    <li>About Us</li>
                </Link>
                <Link className='link' to="/careers">
                    <li>Careers</li>
                </Link>
            </ul>
            <div className='socialIcons'>
                <i className="im im-instagram"></i>
                <i className="im im-twitter"></i>
                <i className="im im-facebook"></i>
            </div>
        </div>
    )
}

export default Footer
