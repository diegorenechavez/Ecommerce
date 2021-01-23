import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions"
import { fetchReviews } from "../../actions/review_actions"
import { createCartItem } from "../../actions/cart_item_actions"
import { createLikedItem, removeLikedItem} from "../../actions/liked_item_actions"
import Product from './product_show'
import LikedItem from "../liked_items/liked_item";

const mapStateToProps = (state, ownProps) => {
     
        return {
            product: state.entities.products[ownProps.match.params.productId],
            reviews: Object.values(state.entities.reviews[ownProps.match.params.productId] || {}),
            currentUserId: state.session.currentUser,
        }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (productId) => dispatch(fetchProduct(productId)),
        fetchReviews: (productId) => dispatch(fetchReviews(productId)),
        createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
        createLikedItem: (liked_item) => dispatch(createLikedItem(liked_item)),
        removeLikedItem: (likedItemId) => dispatch(removeLikedItem(likedItemId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)