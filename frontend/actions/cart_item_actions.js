import * as CartItemApiUtil from '../util/cart_items_util'

export const RECEIVE_ALL_CART_ITEMS = "RECEIVE_ALL_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
// export const CREATE_CART_ITEM = "CREATE_CART_ITEM";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";

const receiveCartItems = (cartItems) => {
    return {
        type: RECEIVE_ALL_CART_ITEMS,
        cartItems
    }
}

const receiveCartItem = (cartItem) => {
    return{
        type: RECEIVE_CART_ITEM,
        cartItem
    }
}



const removeCartItem = (cartItemId) => {
    return {
        type: DELETE_CART_ITEM,
        cartItemId
    }
}

export const fetchAllCartItems = () => (dispatch) => {
    return CartItemApiUtil.fetchAllCartItems()
        .then(result => dispatch(receiveCartItems(result)))
}

export const createCartItem = (cartItem) => (dispatch) => {
    return CartItemApiUtil.createCartItem(cartItem)
        .then(result => dispatch(receiveCartItem(result)))
} 

export const deleteCartItem = (cartItemId) => (dispatch) => {
    return CartItemApiUtil.deleteCartItem(cartItemId)
        .then(() => dispatch(removeCartItem(cartItemId)))
}