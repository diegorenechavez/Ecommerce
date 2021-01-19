import {
    RECEIVED_CART
} from "../actions/cart_actions"

const CartsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVED_CART:
      return action.cart;
    default:
      return oldState;
  }
};

export default CartsReducer;
