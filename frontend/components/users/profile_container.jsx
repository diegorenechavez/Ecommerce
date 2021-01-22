import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import { fetchAllUserReviews } from "../../actions/review_actions";
// import { fetchProduct } from "../../actions/product_actions";
import Profile from "./profile";

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.currentUser],
    reviews: Object.values(state.entities.reviews),
    currentUserId: state.session.currentUser
  };
};

const mDTP = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchAllUserReviews: (userId) => dispatch(fetchAllUserReviews(userId)),
    // fetchProduct: (productId) => dispatch(fetchProductproductId()),
    updateUser: (userId, user) => dispatch(updateUser(userId, user)),
  };
};

export default connect(mSTP, mDTP)(Profile);
