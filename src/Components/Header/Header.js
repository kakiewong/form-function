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
                <h3>Your Shopping Cart</h3>
                {cart.length > 0
                    ? cart.map(item =>
                        <CartItems
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            image={item.img.splash}
                            quantity={item.quantity}
                        />
                    )
                    : <p>Your cart is empty</p>
                }
            </div>
        </div>
    )

}

export default Header
