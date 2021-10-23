
import axios from 'axios'
import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE } from '../constants.js'
export const getallproducts = (keyword = "") => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCTS_REQUEST })

        const { data } = await axios.get(`/api/v1/product/allproducts?keyword=${keyword}`)
        console.log(data)
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data.products })
    }
    catch (err) {


        dispatch({ type: GET_PRODUCTS_FAILURE, payload: err.message })
    }


}

export const getProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCT_REQUEST })

        const { data } = await axios.get(`/api/v1/product/${id}`)
        console.log(data)
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: data.product })
    }
    catch (err) {


        dispatch({ type: GET_PRODUCTS_FAILURE, payload: err.message })
    }



}