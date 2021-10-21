
import axios from 'axios'
import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } from '../constants.js'
export const getallproducts = () => async (dispatch) => {
    try {
        dispatch({ type: GET_PRODUCTS_REQUEST })

        const { data } = await axios.get('/api/v1/product/allproducts')
        console.log(data)
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data.products })
    }
    catch (err) {


        dispatch({ type: GET_PRODUCTS_FAILURE, payload: err.message })
    }


}