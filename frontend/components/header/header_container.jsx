import { connect } from "react-redux";
import {
  signup,
  login,
  clearErrors,
  logout,
} from "../../actions/session_actions.js";
import Header from "./header";

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
