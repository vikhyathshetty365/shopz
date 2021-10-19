import React from 'react'
import { Link } from 'react-router-dom'
import './Productcard.css'
const Productcard = ({ product }) => {
    return (

        <Link className="product">
            <img src={product.images} />

            <p>{product.name}</p>
            <h3>{product.price}</h3>
        </Link>

    )
}

export default Productcard
