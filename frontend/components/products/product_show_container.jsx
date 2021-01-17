import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions"
import { fetchReviews} from "../../actions/review_actions"
import Product from './product_show'

const mapStateToProps = (state, ownProps) => {
     
        return {
            product: state.entities.products[ownProps.match.params.productId],
            reviews: Object.values(state.entities.reviews[ownProps.match.params.productId] || {})
        }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (productId) => dispatch(fetchProduct(productId)),
        fetchReviews: (productId)=>dispatch(fetchReviews(productId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)