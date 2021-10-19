import React from 'react'
import { BsFillMouseFill } from 'react-icons/all';
import Productcard from '../components/Productcard'
import './Home.css'
const Home = () => {
    const products = {
        name: 'Tshirt',
        images: 'https://i.ibb.co/DRST11n/1.webp',
        price: "$800",
        _id: "122"
    }



    return (
        <>
            <div className="banner">

                <h3>Welcome to ShopZ</h3>
                <h1>FIND AMAZING PRODUCTS HERE</h1>

                <a><button>scroll <BsFillMouseFill /></button></a>


            </div>

            <div className="Products">
                <h3>Featured Products</h3>

                <div className="productcard">
                    <Productcard product={products} />
                    <Productcard product={products} />
                    <Productcard product={products} />
                    <Productcard product={products} />
                    <Productcard product={products} />
                    <Productcard product={products} />
                    <Productcard product={products} />

                </div>
            </div>
        </>
    )
}

export default Home
