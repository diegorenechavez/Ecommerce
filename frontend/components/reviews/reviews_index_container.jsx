import {connect} from 'react-redux'
import {  } from '../../actions/review_actions'
import { fetchProduct } from '../../actions/product_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        reviews: Object.values(state.entities.reviews[ownProps.product.id]),
        //ratings:  Object.values(state.entities.reviews).map(review => (review.rating)),
        productId: ownProps.product.id
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (productId) => dispatch(fetchProduct(productId)),
        fetchReviews: (productId) => dispatch(fetchReviews(productId))
    }
}