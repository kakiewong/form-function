import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../ContextProvider'
import './ProductPage.css'
import Card from '../Card/Card'

function ProductPage() {
    let { category } = useParams()
    let { products, splash } = useContext(AppContext)
    const [current, setCurrent] = useState()
    const [currentSplash, setCurrentSplash] = useState()

    useEffect(() => {
        setCurrent(products.filter(item => item.category === category))
        setCurrentSplash(splash.filter(item => item.category === category))
    }, [category])

    return (
        <div className='productMain'>
            <h1>{category}</h1>
            {currentSplash ? <div className='splash'><img src={currentSplash[0].img} /></div> : ''}
            <div className='productContainer'>
                {current ?
                    current.map(item =>
                        <Card
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            details={item.details}
                            dimensions={item.dimensions}
                            sku={item.id}
                            img={item.img}
                        />)
                    : <p>Loading</p>}
            </div>
        </div>
    )
}

export default ProductPage
