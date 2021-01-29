import { connect } from "react-redux"
import ProductIndex from "./products_index"
import { fetchProduct } from "../../actions/product_actions"
import { getSearchProducts } from "../../actions/product_actions"
import { withRouter } from "react-router-dom"
import { createCartItem } from "../../actions/cart_item_actions"


const mapStateToProps = (state) => {
    return {
        products: Object.values(state.entities.products),
        currentUserId: state.session.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getSearchProducts: (query) => dispatch(getSearchProducts(query)),
      fetchProduct: (productId) => dispatch(fetchProduct(productId)),
      createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)