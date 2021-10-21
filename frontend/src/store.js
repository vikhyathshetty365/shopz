import { createStore, combineReducers, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import { getproducts } from './reducers/productreducers.js'
const reducers = combineReducers
    ({
        getProducts: getproducts

    })
const middleware = [thunk]
let initialstate = {}


const store = createStore(
    reducers,
    initialstate,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store