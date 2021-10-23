import React, { useEffect } from 'react'
import './Products.css'
import Productcard from '../Productcard'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader/Loader.js'
import { getallproducts } from '../../actions/productaction.js'
const Products = ({ match }) => {

    const dispatch = useDispatch()
    const keyword = match.params.keyword
    useEffect(() => {
        dispatch(getallproducts(keyword))
    }, [])
    const { prods, loading } = useSelector((state) => state.getProducts)


    const images = 'https://i.ibb.co/DRST11n/1.webp'
    return (
        <div className="prods-container">
            <h4>Products</h4>
            {<div className="products">
                {loading ? <Loader /> : prods.map((e) => (<Productcard id={e._id}
                    images={images}
                    name={e.name}
                    price={e.price}
                    reviews={e.reviews.length}
                    ratings={e.ratings} />))}

            </div>}
        </div>
    )
}

export default Products
