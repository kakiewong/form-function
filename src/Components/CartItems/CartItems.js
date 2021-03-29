import React, { useContext } from 'react'
import './CartItems.css'
import { AppContext } from '../../ContextProvider'

function CartItems({ name, price, image, quantity, id }) {
    let { cart, setCart } = useContext(AppContext)



    const addQuantity = () => {
        setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity += 1 } : item))
    }

    const removeQuantity = () => {
        let cartItem = cart.find(item => item.id === id)
        if (cartItem.quantity > 1) {
            setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity -= 1 } : item))
        } else {
            setCart(cart.filter(item => item.id !== cartItem.id))
        }
    }

    return (
        <div className="cartItem">
            <img src={image} alt={name} />
            <div className="cartBody">
                <div className="cartInfo">
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
                <div className="cartButtons">
                    <button className="cartBtn" onClick={removeQuantity}>-</button>
                    <p>{quantity}</p>
                    <button className="cartBtn" onClick={addQuantity}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItems
