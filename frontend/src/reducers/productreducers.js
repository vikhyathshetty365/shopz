import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } from '../constants.js';


export const getproducts = (state = { prods: [] }, action) => {
    console.log(action.payload);
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return { loading: true, prods: [] }
        case GET_PRODUCTS_SUCCESS:
            return { loading: false, prods: action.payload }

        case GET_PRODUCTS_FAILURE:
            return { loading: false, error: action.payload }

        default:
            return state



    }
}