import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../ContextProvider'
import './ItemPage.css'

function ItemPage() {
    const [currentItem, setCurrentItem] = useState({})
    const [loading, setLoading] = useState(true)
    const [mainImage, setMainImage] = useState()
    let { sku } = useParams()
    let { products, cart, setCart } = useContext(AppContext)


    useEffect(() => {
        let item = products.find(item => item.id === sku)
        setCurrentItem(item)
        setMainImage(item.img.splash)
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

    const switchImg = (e) => {
        setMainImage(e.target.src)
    }

    if (!loading) {
        return (
            <div className="itemContainer">
                <div className="altHolder">
                    {currentItem.img.modal ? <img className="altImg" src={currentItem.img.splash} alt={currentItem.name} onClick={switchImg} /> : ''}
                    {currentItem.img.modal ? <img className="altImg" src={currentItem.img.modal} alt={currentItem.name} onClick={switchImg} /> : ''}
                </div>
                <img className="mainImg" src={mainImage} />
                <div className="infoHolder">
                    <div className="nameSku">
                        <h1>{currentItem.name}</h1>
                        <p>${currentItem.price}</p>
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
