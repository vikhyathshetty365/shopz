import React, { useEffect } from 'react'
import { BsFillMouseFill } from 'react-icons/all';
import Productcard from '../components/Productcard'
import { getallproducts } from '../actions/productaction.js'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader/Loader.js'
import './Home.css'
const Home = () => {
    const products = {
        name: 'Tshirt',
        images: 'https://i.ibb.co/DRST11n/1.webp',
        price: "$800",
        _id: "122"
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getallproducts())
    }, [dispatch])
    const allproducts = useSelector((state) => state.getProducts)
    const { loading, prods } = allproducts
    return (
        <>
            {loading ? <Loader /> : <>
                <div className="banner">

                    <h3>Welcome to ShopZ</h3>
                    <h1>FIND AMAZING PRODUCTS HERE</h1>

                    <a><button>scroll <BsFillMouseFill /></button></a>


                </div>

                <div className="Products">
                    <h3>Featured Products</h3>

                    <div className="productcard">
                        {
                            prods.map((e) => (<Productcard
                                images={products.images}
                                name={e.name}
                                price={e.price}
                                reviews={e.reviews.length}
                                ratings={e.ratings}

                            />))


                        }


                    </div>
                </div>
            </>
            }


        </>
    )
}

export default Home
