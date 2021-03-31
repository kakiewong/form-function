import React from 'react'
import './Card.css'

function Card({ name, price, sku, details, dimensions, img }) {


    return (
        <div className='card'>
            <h3>{name}</h3>
            <img className='mainPic' src={img.splash} />
            <p>${price}</p>
        </div >

    )
}

export default Card
