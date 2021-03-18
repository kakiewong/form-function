import React, { useContext } from 'react'
import { AppContext } from '../../ContextProvider'

function Header() {
    const { products } = useContext(AppContext)
    const bath = products.filter(item => item.category === 'bath')

    return (
        <div>
            <h1>hello</h1>
        </div>
    )

}

export default Header
