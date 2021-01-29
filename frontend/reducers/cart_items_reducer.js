import { RECEIVE_ALL_CART_ITEMS, RECEIVE_CART_ITEM, DELETE_CART_ITEM} from "../actions/cart_item_actions"

const CartItemsReducer = (oldState = {}, action) =>{
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_ALL_CART_ITEMS:
            return action.cartItems;
        case RECEIVE_CART_ITEM:
            // debugger
            newState[action.cartItem.cartItemId] = action.cartItem;
            return newState
        case DELETE_CART_ITEM:
            // debugger
            delete newState[action.cartItemId];
            return newState;
        default:
            return oldState;
    }
}

export default CartItemsReducer;