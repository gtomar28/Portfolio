import {ADD_TO_CART} from '../constants'
import {REMOVE_TO_CART} from '../constants'

export const addToCart = (data) => {
    // console.warn('Action data', data)
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const removeToCart = (data) => {
    // console.warn('Action data', data)
    return {
        type: REMOVE_TO_CART,
        data: data
    }
}