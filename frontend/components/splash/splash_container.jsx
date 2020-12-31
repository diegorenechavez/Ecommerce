import { connect } from "react-redux";
import { signup, login, clearErrors } from "../../actions/session_actions.js";
import Splash from "./splash";
// import { closeModal, openModal } from "../../actions/modal_actions";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    user: {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      email: "",
    },
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    // closeModal: () => dispatch(closeModal()),
    // openModal: (formType) => dispatch(openModal(formType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
