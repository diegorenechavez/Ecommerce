import { connect } from "react-redux";
import {fetchProduct } from "../../actions/product_actions"
import Product from './product_show'

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.entities.products[ownProps.match.params.productId]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (productId) => dispatch(fetchProduct(productId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)