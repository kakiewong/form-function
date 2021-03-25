import React from 'react'
import './Showcase.css'
import { Link } from 'react-router-dom'
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
                <Link className='link' to='/shop/living'>
                    <div className='hero' style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover" }}>
                        <div className='mainText'>
                            <h1>Where form meets function</h1>
                            <p>Shop our latest living room collection</p>
                        </div>
                    </div>
                </Link>
                <div className='sub'>
                    <div className='row1'>
                        <Link className='link' to='/shop/bed'>
                            <div className='pic1' style={{ backgroundImage: `url(${pic1})`, backgroundSize: "cover" }}>
                                <p className='subText'>Find your new cozy</p>
                            </div>
                        </Link>
                        <Link className='link' to='/shop/accessories'>
                            <div className='pic2' style={{ backgroundImage: `url(${pic2})`, backgroundSize: "cover" }}>
                                <p className='subText'>Style your space</p>
                            </div>
                        </Link>
                    </div>
                    <div className='row2'>
                        <Link className='link' to='/shop/dining'>
                            <div className='pic3' style={{ backgroundImage: `url(${pic3})`, backgroundSize: "cover" }}>
                                <p className='subText'>Dine with elegance</p>
                            </div>
                        </Link>
                        <Link className='link' to='/shop/bath'>
                            <div className='pic4' style={{ backgroundImage: `url(${pic4})`, backgroundSize: "cover" }}>
                                <p className='subText'>Your personal spa</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Link className='link' to='/shop/living'>
                <div className='rotatingFeature' style={{ backgroundImage: `url(${monthly})`, backgroundSize: "cover", backgroundPosition: "bottom" }}>
                    <h1>Meet DeMar</h1>
                    <p>Say hi to the newest member of our collection</p>
                </div>
            </Link>
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
        </div >
    )
}

export default Showcase
