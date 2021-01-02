import { connect } from "react-redux";
import { signup, login, clearErrors } from "../../actions/session_actions.js";
import Splash from "./splash";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    user: {
      username: "",
      password: "",
      name: "",
      email: "",
    },
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
