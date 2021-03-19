import React from 'react'
import './Showcase.css'
import hero from '../../FurniturePhotos/chicRoom.jpg'
import sub1 from '../../FurniturePhotos/bed.jpg'
import sub2 from '../../FurniturePhotos/decor.jpg'
import sub3 from '../../FurniturePhotos/diningRoom.jpg'
import sub4 from '../../FurniturePhotos/bath.jpg'
import monthly from '../../FurniturePhotos/leatherSofa.jpg'
import social1 from '../../FurniturePhotos/social1.jpg'
import social2 from '../../FurniturePhotos/social2.jpg'
import social3 from '../../FurniturePhotos/social3.jpg'
import social4 from '../../FurniturePhotos/social4.jpg'

function Showcase() {
    return (
        <div className='container'>
            <div className='main'>
                <div className='hero'><img src={hero} /></div>
                <div className='sub'>
                    <div className='row1'>
                        <div className='holder'><img src={sub1} /></div>
                        <div className='holder'><img src={sub2} /></div>
                    </div>
                    <div className='row2'>
                        <div className='holder'><img src={sub3} /></div>
                        <div className='holder'><img src={sub4} /></div>
                    </div>
                </div>
            </div>
            <div className='monthly'>
                <img src={monthly} />
            </div>
            <div className='social'>
                <div className='social-holder'><img src={social1} /></div>
                <div className='social-holder'><img src={social2} /></div>
                <div className='social-holder'><img src={social3} /></div>
                <div className='social-holder'><img src={social4} /></div>
                <div className='social-copy'>
                    <h4>#FORMSTYLE</h4>
                    <p>Share your freshest looks with us on Instagram</p>
                </div>
            </div>
        </div>
    )
}

export default Showcase
