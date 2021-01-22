import {connect} from 'react-redux'
import UserReviewsIndex from './user_reviews_index'
import { fetchAllUserReviews, removeReview } from '../../actions/review_actions'


const mapStateToProps = (state) => {
    return {
        reviews: Object.values(state.entities.reviews),
        currentUserId: state.session.currentUser
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUserReviews: (userId) => dispatch(fetchAllUserReviews(userId)),
        removeReview: (userId) => dispatch(removeReview(userId)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserReviewsIndex)