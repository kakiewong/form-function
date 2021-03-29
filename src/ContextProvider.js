import React, { useState, createContext } from 'react'
import dexter1 from './FurniturePhotos/Accessories/metalFrame.jpg'
import riley1 from './FurniturePhotos/Accessories/roundVase.jpg'
import riley2 from './FurniturePhotos/Accessories/roundVaseModal.jpg'
import duffy1 from './FurniturePhotos/Accessories/tallVase.jpg'
import bali1 from './FurniturePhotos/Accessories/centerpiece.jpg'
import stevie1 from './FurniturePhotos/Bath/banya.jpg'
import stevie2 from './FurniturePhotos/Bath/banyaModal.jpg'
import westbrook1 from './FurniturePhotos/Bath/edge.jpg'
import butler1 from './FurniturePhotos/Bath/rylan.jpg'
import toppin1 from './FurniturePhotos/Bath/towelrack.jpg'
import toppin2 from './FurniturePhotos/Bath/towelrackModal.jpg'
import beal1 from './FurniturePhotos/Bed/casa.jpg'
import beal2 from './FurniturePhotos/Bed/casaModal.jpg'
import harden1 from './FurniturePhotos/Bed/harbor.jpg'
import harden2 from './FurniturePhotos/Bed/harborModal.jpg'
import leonard1 from './FurniturePhotos/Bed/marissa.jpg'
import randle1 from './FurniturePhotos/Bed/mason.jpg'
import randle2 from './FurniturePhotos/Bed/masonModal.jpg'
import james1 from './FurniturePhotos/Bed/rio.jpg'
import james2 from './FurniturePhotos/Bed/rioModal.jpg'
import kelly1 from './FurniturePhotos/Dining/ana.jpg'
import kelly2 from './FurniturePhotos/Dining/anaModal.jpg'
import morris1 from './FurniturePhotos/Dining/apex.jpg'
import morris2 from './FurniturePhotos/Dining/apexModal.jpg'
import mccollum1 from './FurniturePhotos/Dining/cullen.jpg'
import mccollum2 from './FurniturePhotos/Dining/cullenModal.jpg'
import leslie1 from './FurniturePhotos/Dining/knot.jpg'
import leslie2 from './FurniturePhotos/Dining/knotModal.jpg'
import candace1 from './FurniturePhotos/Dining/lowe.jpg'
import candace2 from './FurniturePhotos/Dining/loweModal.jpg'
import sue1 from './FurniturePhotos/Dining/tate.jpg'
import sue2 from './FurniturePhotos/Dining/tateModal.jpg'
import clyde1 from './FurniturePhotos/Living/grafik.jpg'
import clyde2 from './FurniturePhotos/Living/grafikModal.jpg'
import irving1 from './FurniturePhotos/Living/slope.jpg'
import irving2 from './FurniturePhotos/Living/slopeModal.jpg'
import earl1 from './FurniturePhotos/Living/turntable.jpg'
import earl2 from './FurniturePhotos/Living/turntableModal.jpg'
import demar1 from './FurniturePhotos/Living/wells.jpg'
import demar2 from './FurniturePhotos/Living/wellsModal.jpg'
import pascal1 from './FurniturePhotos/Living/snow.jpg'
import pascal2 from './FurniturePhotos/Living/snowModal.jpg'
import livingSplash from './FurniturePhotos/livingSplash.jpg'
import diningSplash from './FurniturePhotos/diningSplash.jpg'
import bedSplash from './FurniturePhotos/bedSplash.jpg'
import bathSplash from './FurniturePhotos/bathSplash.jpg'
import accSplash from './FurniturePhotos/accSplash.jpg'


export const AppContext = createContext();

export function ContextProvider({ children }) {
    const [cart, setCart] = useState([]);


    const products = [
        {
            name: 'Set of Two Dexter Metal Frames',
            price: '$49.99',
            img: {
                splash: dexter1,
                modal: ''
            },
            details: 'Add a modern touch to your photo displays with our polished nickel Dexter frames. This stylish set comes with a 4x6 and 5x7 frame.',
            dimensions: {
                width: '8"',
                height: '10.5"',
                depth: '1.5"',
                diameter: ''
            },
            id: '154316',
            category: 'accessories'
        },
        {
            name: 'Riley Round Vase',
            price: '$149.99',
            img: {
                splash: riley1,
                modal: riley2
            },
            details: 'Personalize any room with the uniquely beautiful Riley Vase. Riley features a stunning, marblized swirl that ensures no two pieces are the same.',
            dimensions: {
                width: '',
                height: '13.25"',
                depth: '',
                diameter: '12.25"'
            },
            id: '593327',
            category: 'accessories'
        },
        {
            name: 'Duffy Tall Vase',
            price: '$89.99',
            img: {
                splash: duffy1,
                modal: ''
            },
            details: 'Handmade in Portugal, the Duffy Tall Vase will help elevate any room setting it is in.',
            dimensions: {
                width: '',
                height: '27.5"',
                depth: '',
                diameter: '9.5"'
            },
            id: '627800',
            category: 'accessories'
        },
        {
            name: 'Bali Centerpiece Bowl',
            price: '$219.99',
            img: {
                splash: bali1,
                modal: ''
            },
            details: 'Hand-shaped by artisans, every piece features different tones, veining, and raw edges. Each Bali Centerpiece Bowl is truly one-of-a-kind.',
            dimensions: {
                width: '11.5"',
                height: '6"',
                depth: '10.25',
                diameter: ''
            },
            id: '195411',
            category: 'accessories'
        },
        {
            name: 'Stevie Bath Tower',
            price: '$549.99',
            img: {
                splash: stevie1,
                modal: stevie2
            },
            details: 'Store your towels and bath accessories in style with the Stevie Bath Tower. This slim tower stretches high to keep your personal belongings out of sight while maintaining a small footprint in your space.',
            dimensions: {
                width: '19.25"',
                height: '75"',
                depth: '14.5',
                diameter: ''
            },
            id: '198977',
            category: 'bath'
        },
        {
            name: 'Westbrook Wall Mirror',
            price: '$329.99',
            img: {
                splash: westbrook1,
                modal: ''
            },
            details: 'Designed with a slim black band and a subtle arch, the Westbrook Wall Mirror will work in any room in your home.',
            dimensions: {
                width: '36"',
                height: '34"',
                depth: '1"',
                diameter: ''
            },
            id: '161685',
            category: 'bath'
        },
        {
            name: 'Butler White Bath Mat',
            price: '$29.99',
            img: {
                splash: butler1,
                modal: ''
            },
            details: '"Understated luxury" that is the best way to describe our Butler Bath Mat. Woven of pure cotton, this ultra-luxurious reversible bath rug boasts a premium weight of 900 grams per sq meter.',
            dimensions: {
                width: '24"',
                height: '60"',
                depth: '',
                diameter: ''
            },
            id: '284144',
            category: 'bath'
        },
        {
            name: 'Toppin Towel Rack',
            price: '$59.99',
            img: {
                splash: toppin1,
                modal: toppin2
            },
            details: 'With a soft, brushed steel finish, the Toppin Towel Rack displays rolled towels with a comtemporary flair. This sleek towel rack includes all the hardware you need to mount it to your wall.',
            dimensions: {
                width: '9.5"',
                height: '23.5"',
                depth: '6',
                diameter: ''
            },
            id: '102841',
            category: 'bath'
        },
        {
            name: 'Beal 6-Drawer Dresser',
            price: '$1559.99',
            img: {
                splash: beal1,
                modal: beal2
            },
            details: "Mid-century design with charming retro details. The Beal features tapered dowel legs round the corners, while side panels angle down to form the dresser's back legs.",
            dimensions: {
                width: '72"',
                height: '30"',
                depth: '20"',
                diameter: ''
            },
            id: '686059',
            category: 'bed'
        },
        {
            name: 'Harden 5-Drawer Chest',
            price: '$759.99',
            img: {
                splash: harden1,
                modal: harden2
            },
            details: "Handpainted by Italian master craftsmen. The Harden 5-Drawer Chest's artisanal finish requires multiple steps of handpainting and hand-distressing to create its warm, aged appeal.",
            dimensions: {
                width: '36.25"',
                height: '45.25"',
                depth: '21.25"',
                diameter: ''
            },
            id: '604352',
            category: 'bed'
        },
        {
            name: 'Leonard Bed',
            price: '$2259.99',
            img: {
                splash: leonard1,
                modal: ''
            },
            details: "White washed reclaimed teak contrasts with black base makes the Leonard an instant classic.",
            dimensions: {
                width: '62.5"',
                height: '87.75"',
                depth: '43"',
                diameter: ''
            },
            id: '130086',
            category: 'bed'
        },
        {
            name: 'Randle Bed',
            price: '$1499.99',
            img: {
                splash: randle1,
                modal: randle2
            },
            details: "A modern take on the classic brass bed. The Randle is a traditional look in a modern finish.",
            dimensions: {
                width: '63.5"',
                height: '55"',
                depth: '84"',
                diameter: ''
            },
            id: '521118',
            category: 'bed'
        },
        {
            name: 'James Nightstand',
            price: '$399.99',
            img: {
                splash: james1,
                modal: james2
            },
            details: "Built with clean modern lines and a clever mix of materials. This nightstand is finished with a natural stain and a single drawer fronted in ivory leather.",
            dimensions: {
                width: '26"',
                height: '26"',
                depth: '18"',
                diameter: ''
            },
            id: '563782',
            category: 'bed'
        },
        {
            name: 'Kelly Dining Chair',
            price: '$129.99',
            img: {
                splash: kelly1,
                modal: kelly2
            },
            details: "This lush and neatly upholstered dining chair is a great fit with any styles of room decor.",
            dimensions: {
                width: '20"',
                height: '33.5"',
                depth: '24"',
                diameter: ''
            },
            id: '108976',
            category: 'dining'
        },
        {
            name: 'Morris Dining Table',
            price: '$999.99',
            img: {
                splash: morris1,
                modal: morris2
            },
            details: "Made with solid white oak. The Morris is a statement table that fits in any dining room.",
            dimensions: {
                width: '64"',
                height: '30"',
                depth: '64"',
                diameter: ''
            },
            id: '445913',
            category: 'dining'
        },
        {
            name: 'Leslie Dining Table',
            price: '$2999.99',
            img: {
                splash: leslie1,
                modal: leslie2
            },
            details: "Our take on the classic farmhouse table. The Leslie's subtle details and deceptively simple design gives the classic table a modern facelift",
            dimensions: {
                width: '84"',
                height: '29.5"',
                depth: '42"',
                diameter: ''
            },
            id: '687213',
            category: 'dining'
        },
        {
            name: 'Mccollum Dining Chair',
            price: '$599.99',
            img: {
                splash: mccollum1,
                modal: mccollum2
            },
            details: "Beautiful Scandinavian design built using remarkable joinery techniques. The Mccollum's smooth curves adds a sense of elegance to your dining room.",
            dimensions: {
                width: '23"',
                height: '28"',
                depth: '22"',
                diameter: ''
            },
            id: '311473',
            category: 'dining'
        },
        {
            name: 'Candace Dining Chair',
            price: '$99.99',
            img: {
                splash: candace1,
                modal: candace2
            },
            details: "Built with a roomy seat and back, this simple and stylish dining chair is a great fit with any dining table.",
            dimensions: {
                width: '18"',
                height: '34.5"',
                depth: '23"',
                diameter: ''
            },
            id: '306793',
            category: 'dining'
        },
        {
            name: 'Sue Dining Table',
            price: '$2299.99',
            img: {
                splash: sue1,
                modal: sue2
            },
            details: "Constructed with a walnut vaneer, the Sue Dining Table has a timeless mid-century modern design. Make room for extra dinner guests with the built in self-storing leaves.",
            dimensions: {
                width: '78"',
                height: '29.5"',
                depth: '38"',
                diameter: ''
            },
            id: '296405',
            category: 'dining'
        },
        {
            name: 'Clyde Side Table',
            price: '$479.99',
            img: {
                splash: clyde1,
                modal: clyde2
            },
            details: "A brass statement piece. The Clyde is the perfect fit for any ultra modern room setting.",
            dimensions: {
                width: '20.25"',
                height: '23.75"',
                depth: '11.5"',
                diameter: ''
            },
            id: '683201',
            category: 'living'
        },
        {
            name: 'Irving Coffee Table',
            price: '$1099.99',
            img: {
                splash: irving1,
                modal: irving2
            },
            details: "A statement piece in any room. The Irving Table is a solid white concrete table complimented with soft curves.",
            dimensions: {
                width: '47.75"',
                height: '16.25"',
                depth: '23.5"',
                diameter: ''
            },
            id: '595005',
            category: 'living'
        },
        {
            name: 'Earl Coffee Table',
            price: '$1099.99',
            img: {
                splash: earl1,
                modal: earl2
            },
            details: "The stunning Earl table features a layer of Italian mappa burl wood which gives is a unique tonal finish. The table also comes with a built in drawer to store your living room accessories.",
            dimensions: {
                width: '',
                height: '14.75"',
                depth: '',
                diameter: '39.75"'
            },
            id: '151251',
            category: 'living'
        },
        {
            name: 'DeMar Sofa',
            price: '$3099.99',
            img: {
                splash: demar1,
                modal: demar2
            },
            details: "Made with high-quality top-grain leather, the DeMar is a luxurious and modern take on the classic leather sofa.",
            dimensions: {
                width: '84',
                height: '28.5"',
                depth: '35.5"',
                diameter: ''
            },
            id: '568267',
            category: 'living'
        },
        {
            name: 'Pascal Chair',
            price: '$1499.99',
            img: {
                splash: pascal1,
                modal: pascal2
            },
            details: "A solid natural oak frame supports the chair. Two oversized seat and back cushions gives the chair a soft and luxurious feel.",
            dimensions: {
                width: '48"',
                height: '31"',
                depth: '40.5"',
                diameter: ''
            },
            id: '611831',
            category: 'living'
        }
    ]

    const splash = [
        {
            category: "living",
            img: livingSplash
        },
        {
            category: "dining",
            img: diningSplash
        },
        {
            category: "bed",
            img: bedSplash
        },
        {
            category: "bath",
            img: bathSplash
        },
        {
            category: "accessories",
            img: accSplash
        }
    ]

    return (
        <AppContext.Provider value={{
            products: products,
            cart: cart,
            splash: splash,
            setCart: setCart,
        }}>
            {children}
        </AppContext.Provider>
    )
}

