import React, { useEffect } from 'react'
import './ProductDescription.css'
import Carousel from 'react-material-ui-carousel'
import ReactStars from 'react-stars'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Productreview from '../Product/Productreview.js'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../../actions/productaction.js'
const ProductDescription = ({ match }) => {
    console.log(match)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct(match.params.id))

    }, [dispatch, match.params.id])

    const product = useSelector((state) => state.getProduct)

    console.log(product)
    const { loading, prod, error } = product
    const options = {

        edit: false,
        value: prod.ratings,

        half: true,

    }
    console.log(prod)
    return (
        <div>
            <div className="product-description">
                <div className="product-image">
                    <Carousel >
                        <img className="carousel" src="https://i.ibb.co/DRST11n/1.webp" />
                    </Carousel>
                </div>

                <div className="product-details">
                    <h1>Subscribe</h1>
                    <p className="product-id">{`product #${prod._id}`}</p>
                    <hr />
                    <ReactStars {...options} />
                    <hr />

                    <div className="quantity">
                        <h2>{`$${prod.price}`}</h2>
                        <div >
                            <div className="quantity-box"><AddIcon style={{ backgroundColor: "gray", height: "40px" }} />
                                <input style={{ outline: "none", maxWidth: "auto", maxWidth: "20px" }} />
                                <RemoveIcon style={{ backgroundColor: "gray", height: "40px" }} />
                            </div>

                            <div className="add-cart">
                                <p>Add to cart</p>
                            </div>
                        </div>


                    </div>
                    <hr />
                    {
                        <div className="stock">
                            <p>Stock:</p>
                            {prod.Stock >= 1 ? <p className="in">Instock</p> : <p className="out">Out of Stock</p>}
                        </div>


                    }

                    <hr />
                    <h4>Description</h4>
                    <p>{prod.description}</p>

                    <div className="submit-review">
                        <p>Submit a review</p>
                    </div>

                </div>
            </div>

            <div className="product-reviews">
                <h4>Reviews</h4>
                <div className="reviews">
                    {

                        prod.reviews ? prod.reviews.map((e) => (
                            <Productreview />
                        )) : <h4>No reviews</h4>
                    }

                </div>
            </div>
        </div>
    )
}

export default ProductDescription
