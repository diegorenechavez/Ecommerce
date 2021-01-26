import { connect } from "react-redux"
import ProductIndex from "./products_index"
import { fetchProduct } from "../../actions/product_actions"
import { getSearchProducts } from "../../actions/product_actions"
import { withRouter } from "react-router-dom"


const mapStateToProps = (state) => {
    return {
        products: Object.values(state.entities.products),
        currentUserId: state.session.currenUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSearchProducts: (query) => dispatch(getSearchProducts(query)),
        fetchProduct: (productId) => dispatch(fetchProduct(productId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)