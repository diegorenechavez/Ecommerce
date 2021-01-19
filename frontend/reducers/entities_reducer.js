import { combineReducers } from "redux";
import usersReducer from "./users_reducer.js";
import  productsReducer from "./products_reducer"
import reviewsReducer from "./reviews_reducer"
import cartItemReducer from "./cart_reducer"
import CartReducer from "./cart_reducer"

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  reviews: reviewsReducer,
  cartItems: cartItemReducer,
  cart: CartReducer
});

export default entitiesReducer;
