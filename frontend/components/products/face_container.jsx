import Face from "./face";
import { connect } from "react-redux";
import { fetchAllProducts } from "../../actions/product_actions";

const mapStatetToProps = (state) => {
  return {
    products: Object.values(state.entities.products),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: (category) => {
      dispatch(fetchAllProducts(category));
    },
  };
};

export default connect(mapStatetToProps, mapDispatchToProps)(Face);
