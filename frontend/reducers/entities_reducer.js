import { combineReducers } from "redux";
import usersReducer from "./users_reducer.js";
import  productsReducer from "./products_reducer"
import reviewsReducer from "./reviews_reducer"
import cartItemsReducer from "./cart_items_reducer"
import LikedItemsReducer from "./liked_item_reducer"

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  reviews: reviewsReducer,
  cartItems: cartItemsReducer,
  likedItems: LikedItemsReducer,
});

export default entitiesReducer;
