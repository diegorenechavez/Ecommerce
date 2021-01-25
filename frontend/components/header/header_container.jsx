import { connect } from "react-redux";
import {
  signup,
  login,
  clearErrors,
  logout,
} from "../../actions/session_actions.js";
// import Header from "./header";
import { fetchAllCartItems} from "../../actions/cart_item_actions"
import Header from "./header_component";

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUser,
    currentUser: state.entities.users[state.session.currentUser],
    errors: state.errors.session
  }; 
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    logout: () => dispatch(logout()),
    fetchAllCartItems: () => dispatch(fetchAllCartItems())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
