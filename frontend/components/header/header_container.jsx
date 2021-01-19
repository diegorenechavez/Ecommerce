import { connect } from "react-redux";
import {
  signup,
  login,
  clearErrors,
  logout,
} from "../../actions/session_actions.js";
// import Header from "./header";
import Header from "./header_component";
import { createCart} from "../../actions/cart_actions"
import { fetchCart} from "../../actions/cart_actions"

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUser,
    currentUser: state.entities.users[state.session.currentUser],
  }; 
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    logout: () => dispatch(logout()),
    createCart: (userId) => dispatch((createCart(userId))),
    fetchCart: (userId)=> dispatch((fetchCart(userId)))
    

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
