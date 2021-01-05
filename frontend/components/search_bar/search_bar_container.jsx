import { connect } from "react-redux";
import SearchBar from "../search_bar";

//NO ACTIONS YET
// import { getSearchProducts } from "../../actions/product_actions";

import { withRouter } from "react-router-dom";

const mDTP = (dispatch) => {
  return {
    getSearchProducts: (query) => dispatch(getSearchProducts(query)),
  };
};

export default withRouter(connect(null, mDTP)(SearchBar));
