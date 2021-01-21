import { connect } from "react-redux";
import {
  fetchAllCartItems,
  deleteCartItem,
} from "../../actions/cart_item_actions";
import CartShow from "./cart_show";

const mapStateToProps = (state) => {
  if (!state.session.currentUser) {
    return null;
  }
  return {
      currentUserId: state.session.currentUser,
      currentUser: state.entities.users[state.session.currentUser],
    cartItems: Object.values(state.entities.cartItems),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCartItems: () => dispatch(fetchAllCartItems()),
    deleteCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartShow);
