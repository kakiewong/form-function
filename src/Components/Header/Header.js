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
    }

    const totalPrice = cart.reduce((ack, item) => ack + item.price * item.quantity, 0)
    const totalItems = cart.reduce((ack, item) => ack + item.quantity, 0)

    return (
        <div id='header'>
            <Link className='link' to='/'><h1>FORM &amp; FUNCTION</h1></Link>
            <div id='cart'>
                <p>{totalItems}</p>
                <button onClick={handleClick}><i className="im im-shopping-cart"></i></button>
            </div>
            <div className={toggleCart ? "cartContent" : "hide"}>
                <h3 style={{ fontSize: "1.2rem", textDecoration: "underline", marginBottom: "20px" }}>Shopping Cart</h3>
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
                <p style={{ alignSelf: "flex-start", marginTop: "20px", marginLeft: "5px" }}>Total: {totalPrice.toFixed(2)}</p>
            </div>
        </div>
    )

}

export default Header
