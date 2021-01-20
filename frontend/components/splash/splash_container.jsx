import { connect } from "react-redux";
import { signup, login, clearErrors } from "../../actions/session_actions.js";
import { fetchAllProducts } from "../../actions/product_actions";
import { createCartItem } from "../../actions/cart_item_actions";
import Splash from "./splash";

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.entities.products),
    currentUserId: state.session.currentUser
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: (category) => {
      dispatch(fetchAllProducts(category));
    },
    createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
