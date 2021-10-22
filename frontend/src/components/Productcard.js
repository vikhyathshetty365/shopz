import React from 'react'
import { Link } from 'react-router-dom'
import './Productcard.css'
import ReactStars from 'react-stars'
const Productcard = ({ name, price, reviews, images, ratings, id }) => {

    const options = {

        edit: false,
        value: ratings,

        half: true,

    }
    return (

        <Link to={`/productdetails/${id}`} className="product">
            <img src={images} />
            <div className="prod-description">
                <p>{name} </p>
                <div className="star-rating">
                    <ReactStars {...options} />
                    <p>{`${reviews}`} reviews</p>
                </div>
                <h4>{`$ ${price}`}</h4>
            </div>

        </Link>

    )
}

export default Productcard
