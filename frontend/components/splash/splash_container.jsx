import { connect } from "react-redux";
import { signup, login, clearErrors } from "../../actions/session_actions.js";
import Splash from "./splash";

const mapStateToProps = ({ errors }) => {
  return {
  
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
