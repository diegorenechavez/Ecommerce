import * as CartApiUtil from "../util/carts_util"

export const RECEIVED_CART = "RECEIVED_CART"

export const receivedCart = (cart) => { 
    return {
        type: RECEIVED_CART,
        cart
    }
}


export const fetchCart = (userId) => (dispatch) => {
    return CartApiUtil.fetchCart(userId).then((result)=>dispatch(receivedCart(result)))
}

export const createCart = (userId) => (dispatch) => {
    return CartApiUtil.createCart(userId).then((result)=>dispatch(receivedCart(result)))
 }
