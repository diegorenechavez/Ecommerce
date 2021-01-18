import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions"
import { fetchProduct } from "../../actions/product_actions"
import CreateReview from "./create_review"

const mapStateToProps = (state, ownProps) => {
    return {
      productId: ownProps.match.params.productId,
      product: state.entities.products[ownProps.match.params.productId],
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        createReview: (productId, review) => dispatch(createReview(productId, review)),
        fetchProduct: (productId) => dispatch(fetchProduct(productId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateReview)