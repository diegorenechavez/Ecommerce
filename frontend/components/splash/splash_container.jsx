import { connect } from "react-redux";
import { signup, login, clearErrors } from "../../actions/session_actions.js";
import { fetchAllProducts} from "../../actions/product_actions"
import Splash from "./splash";

const mapStateToProps = (state) => {
  return {
    products: Object.values(state.entities.products)
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: (category) => { dispatch(fetchAllProducts(category))}
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
