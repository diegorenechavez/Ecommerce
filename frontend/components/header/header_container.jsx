import { connect } from "react-redux";
import {
  signup,
  login,
  clearErrors,
  logout,
} from "../../actions/session_actions.js";
// import Header from "./header";
import Header from "./header_component";

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
