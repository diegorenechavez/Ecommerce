import {connect} from 'react-redux'
import { fetchReviews } from '../../actions/review_actions'
import { fetchProduct } from '../../actions/product_actions'
import ReviewIndex from "./reviews_index";

const mapStateToProps = (state, ownProps) => {
        return {
            reviews: Object.values(state.entities.reviews),
            //ratings:  Object.values(state.entities.reviews).map(review => (review.rating)),
            productId: ownProps.productId,
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (productId) => dispatch(fetchProduct(productId)),
        fetchReviews: (productId) => dispatch(fetchReviews(productId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);