import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <h2>FORM &amp; FUNCTION</h2>
            <ul className='footerLinks'>
                <li>About Us</li>
                <li>Corporate Policy</li>
                <li>Careers</li>
            </ul>
            <div className='socialIcons'>
                <i className="im im-instagram"></i>
                <i class="im im-twitter"></i>
                <i class="im im-facebook"></i>
            </div>
        </div>
    )
}

export default Footer
