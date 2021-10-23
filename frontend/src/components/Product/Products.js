import React, { useEffect } from 'react'
import './Products.css'
import Productcard from '../Productcard'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader/Loader.js'
import Slider from '@mui/material/Slider';
import { getallproducts } from '../../actions/productaction.js'
const Products = ({ match }) => {

    const dispatch = useDispatch()
    const keyword = match.params.keyword
    let [price, setValue] = React.useState([1, 50000]);
    const [category, setcategory] = React.useState("")
    useEffect(() => {
        dispatch(getallproducts(keyword, price, category))
    }, [keyword, price, category])
    console.log(price)
    const { prods, loading } = useSelector((state) => state.getProducts)
    const categories = [
        "Laptop",
        "Footwear",
        "Bottom",
        "Tops",
        "Attire",
        "Camera",
        "SmartPhones",
        "mobile"
    ];

    const images = 'https://i.ibb.co/DRST11n/1.webp'
    const handleChange = (e, val) => {
        e.preventDefault()
        setValue(val)
    }
    return (
        <div className="prods-container">
            <h4>Products</h4>




            {<div className="products">

                <div className="filters">
                    <Slider
                        size="small"
                        value={price}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        min={1}
                        max={50001}
                        disableSwap
                    />
                    {
                        <ul>
                            {
                                categories.map((e) => (
                                    <li className="category-title"
                                        style={{ "cursor": "pointer" }}
                                        onClick={() => setcategory(e)}>
                                        {e}
                                    </li>
                                ))
                            }
                        </ul>
                    }
                </div>
                {loading ? <Loader /> : prods?.map((e) => (<Productcard id={e._id}
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
