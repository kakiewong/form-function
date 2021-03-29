import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../ContextProvider'
import './ItemPage.css'

function ItemPage() {
    const [currentItem, setCurrentItem] = useState({})
    const [loading, setLoading] = useState(true)
    let { sku } = useParams()
    let { products, cart, setCart } = useContext(AppContext)

    useEffect(() => {
        setCurrentItem(products.find(item => item.id === sku))
        setLoading(false)
    }, [])

    const addCart = () => {
        const isInCart = cart.find(item => item.id === currentItem.id)
        if (isInCart) {
            setCart(cart.map(item => item.id === currentItem.id ? { ...item, quantity: item.quantity += 1 } : item))
        } else {
            setCart([
                ...cart,
                {
                    ...currentItem,
                    quantity: 1
                }
            ])
        }
    }

    if (!loading) {
        return (
            <div className="itemContainer">
                {currentItem.img.modal ? <img className="altImg" src={currentItem.img.modal} /> : ''}
                <img className="mainImg" src={currentItem.img.splash} />
                <div className="infoHolder">
                    <div className="nameSku">
                        <h1>{currentItem.name}</h1>
                        <p>{currentItem.price}</p>
                        <p style={{ fontSize: "0.6rem" }}>{`SKU: ${currentItem.id}`}</p>
                    </div>
                    <div className="details">
                        <h2>Description</h2>
                        <p>{currentItem.details}</p>
                    </div>
                    <div className="dimensions">
                        <h2>Dimensions</h2>
                        {currentItem.dimensions.width ? <p>Width:{currentItem.dimensions.width}</p> : ''}
                        {currentItem.dimensions.height ? <p>Height:{currentItem.dimensions.height}</p> : ''}
                        {currentItem.dimensions.depth ? <p>Depth:{currentItem.dimensions.depth}</p> : ''}
                        {currentItem.dimensions.diameter ? <p>Diameter:{currentItem.dimensions.diameter}</p> : ''}
                    </div>
                    <button className="cardBtn" onClick={addCart}>Add Cart</button>
                </div>
            </div>
        )
    } else {
        return (
            <h1>loading</h1>
        )
    }
}

export default ItemPage
