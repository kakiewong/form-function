import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../ContextProvider'
import './Header.css'
import CartItems from '../CartItems/CartItems'

function Header() {
    const { cart } = useContext(AppContext)
    const [toggleCart, setToggleCart] = useState(false)

    const handleClick = () => {
        setToggleCart(!toggleCart)
        console.log(cart)
    }

    return (
        <div id='header'>
            <Link className='link' to='/'><h1>FORM &amp; FUNCTION</h1></Link>
            <div id='cart'>
                <p>{cart.length}</p>
                <button onClick={handleClick}><i className="im im-shopping-cart"></i></button>
            </div>
            <div className={toggleCart ? "cartContent" : "hide"}>
                {cart.map(item =>
                    <CartItems
                        name={item.name}
                        price={item.price}
                    />
                )}
            </div>
        </div>
    )

}

export default Header
