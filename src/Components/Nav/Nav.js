import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

function Nav() {

    return (
        <div id='nav'>
            <Link className='link' to="/shop/living"><h3>Living</h3></Link>
            <Link className='link' to="/shop/dining"><h3>Dining</h3></Link>
            <Link className='link' to="/shop/bed"><h3>Bed</h3></Link>
            <Link className='link' to="/shop/bath"><h3>Bath</h3></Link>
            <Link className='link' to="/shop/accessories"><h3>Accessories</h3></Link>
        </div>
    )
}

export default Nav
