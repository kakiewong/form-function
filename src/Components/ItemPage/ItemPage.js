import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../ContextProvider'

function ItemPage() {
    let { sku } = useParams()
    let { products } = useContext(AppContext)

    return (
        <div>
            <h1>{sku}</h1>
        </div>
    )
}

export default ItemPage
