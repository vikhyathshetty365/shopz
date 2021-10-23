import React, { useState } from 'react'
import './Productsearch.css'
const Productsearch = ({ history }) => {
    const [search, setsearch] = useState("")

    let keyword = search.trim()

    const submithandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/products/${keyword}`)
        }
        else {
            history.push("/products")
        }
    }

    return (
        <form className="search-container" onSubmit={submithandler}>
            <div className="search-bar">
                <input type="text" onChange={(e) => setsearch(e.target.value)} />
                <button type="submit" >Search</button>
            </div>
        </form >
    )
}

export default Productsearch
