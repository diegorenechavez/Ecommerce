import * as CartItemApiUtil from "../util/cart_items_util"


export const RECEIVE_ALL_CART_ITEMS = "RECEIVE_ALL_CART_ITEMS";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";
export const RECEIVED_CART_ITEM ="RECEIVED_CART_ITEM"
// export const DELETE_ALL_CART_ITEMS = "DELETE_ALL_CART_ITEMS";
const receivedCartItem = (cartItem) => { 
    return {
        type: RECEIVED_CART_ITEM,
        cartItem
    }
}
const receiveAllCartItems = (cartItems) => {
  return {
    type: RECEIVE_ALL_CART_ITEMS,
    cartItems,
  };
};

const destroyCartItem = (cartItem) => {
  return {
    type: DELETE_CART_ITEM,
    cartItem,
  };
};

export const fetchAllCartItems = (userId) => (dispatch) => {
  return CartItemApiUtil.fetchAllCartItems(userId).then((cartItems) =>
    dispatch(receiveAllCartItems(cartItems))
  );
};

export const createCartItem = (userId,productId) => (dispatch) => {
    return CartItemApiUtil.createCartItem(userId,productId).then((result)=>dispatch(receivedCartItem(result)))

}

export const deleteCartItem = (cartItemId) => (dispatch) => {
  return CartItemApiUtil.deleteCartItem(cartItemId).then((cartItem) =>
    dispatch(destroyCartItem(cartItem))
  );
};