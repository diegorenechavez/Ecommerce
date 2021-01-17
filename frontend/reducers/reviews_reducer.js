import {
  RECEIVED_ALL_REVIEWS,
  RECEIVED_REVIEW,
  RECEIVED_USER_REVIEWS,
    REMOVED_REVIEW
 } from "../actions/review_actions";

const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVED_ALL_REVIEWS:
            return action.reviews
            
        case RECEIVED_USER_REVIEWS:
            newState = action.reviews;
            return newState;
        case RECEIVED_REVIEW:
            return Object.assign(newState, action.review);
        case REMOVED_REVIEW:
            delete newState[action.reviewId];
            return newState;
        default:
            return oldState;
    }
}

export default reviewsReducer;