import React from 'react'
import './Showcase.css'
import hero from '../../FurniturePhotos/chicRoom.jpg'
import pic1 from '../../FurniturePhotos/bed.jpg'
import pic2 from '../../FurniturePhotos/decor.jpg'
import pic3 from '../../FurniturePhotos/diningRoom.jpg'
import pic4 from '../../FurniturePhotos/bath.jpg'
import monthly from '../../FurniturePhotos/leatherSofa.jpg'
import social1 from '../../FurniturePhotos/social1.jpg'
import social2 from '../../FurniturePhotos/social2.jpg'
import social3 from '../../FurniturePhotos/social3.jpg'
import social4 from '../../FurniturePhotos/social4.jpg'

function Showcase() {
    return (
        <div className='container'>
            <div className='services'>
                <div><p>Free shipping on orders over $249</p></div>
                <div id='divider'></div>
                <div><p>Book a free online design consultation</p></div>
            </div>
            <div className='main'>
                <div className='hero'><img src={hero} /></div>
                <div className='sub'>
                    <div className='row1'>
                        <div className='pic1'><img src={pic1} /></div>
                        <div className='pic2'><img src={pic2} /></div>
                    </div>
                    <div className='row2'>
                        <div className='pic3'><img src={pic3} /></div>
                        <div className='pic4'><img src={pic4} /></div>
                    </div>
                </div>
            </div>
            <div className='rotatingFeature'>
                <img src={monthly} />
            </div>
            <div className='social'>
                <img src={social1} />
                <img src={social2} />
                <img src={social3} />
                <img src={social4} />
                <div className='socialText'>
                    <h3>#FORMSTYLE</h3>
                    <p>Share your favourite looks with us on social media!</p>
                </div>
            </div>
        </div>
    )
}

export default Showcase
