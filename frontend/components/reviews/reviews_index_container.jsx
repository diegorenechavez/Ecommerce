// import {connect} from 'react-redux'
// import { fetchReviews } from '../../actions/review_actions'
// import { fetchProduct } from '../../actions/product_actions'
// import Reviews from "./reviews_index"

// const mapStateToProps = (state, ownProps) => {
//     if (state.entities.reviews[ownProps.product.id]) {
//         return {
//             reviews: Object.values(state.entities.reviews[ownProps.product.id]),
//             //ratings:  Object.values(state.entities.reviews).map(review => (review.rating)),
//             productId: ownProps.product.id
//         }
//     } else { 
//         return {}
        
//     }
    
    
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchProduct: (productId) => dispatch(fetchProduct(productId)),
//         fetchReviews: (productId) => dispatch(fetchReviews(productId))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Reviews);