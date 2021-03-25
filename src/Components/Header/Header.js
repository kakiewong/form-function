import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../ContextProvider'
import './Header.css'

function Header() {
    const { cartCount } = useContext(AppContext)

    return (
        <div id='header'>
            <Link className='link' to='/'><h1>FORM &amp; FUNCTION</h1></Link>
            <div id='cart'>
                <p>{cartCount}</p>
                <button><i className="im im-shopping-cart"></i></button>
            </div>
        </div>
    )

}

export default Header
