import React, { useContext, useState, useEffect } from 'react'
import { Link, useParams, useRouteMatch } from 'react-router-dom'
import { AppContext } from '../../ContextProvider'
import './ProductPage.css'
import Card from '../Card/Card'

function ProductPage() {
    let { category } = useParams()
    let { url } = useRouteMatch()
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
            {currentSplash ? <div className='splash'><img src={currentSplash[0].img} alt='' /></div> : ''}
            <div className='productContainer'>
                {current ?
                    current.map(item =>
                        <Link className='link' to={`${url}/${item.id}`}>
                            <Card
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                img={item.img}
                            />
                        </Link>)
                    : <p>Loading</p>}
            </div>
        </div >
    )
}

export default ProductPage
