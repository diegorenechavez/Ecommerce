import Body from "./body";
import { connect } from "react-redux";
import { fetchAllProducts } from "../../actions/product_actions";
import { createCartItem } from "../../actions/cart_item_actions";

const mapStatetToProps = (state) => {
  return {
    products: Object.values(state.entities.products),
    currentUserId: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: (category) => dispatch(fetchAllProducts(category)),
    createCartItem: (cart_item) => dispatch(createCartItem(cart_item))
  };
};

export default connect(mapStatetToProps, mapDispatchToProps)(Body);
