import * as ReviewsApiUtil from '../util/reviews_api_util'

export const RECEIVED_ALL_REVIEWS = "RECEIVED_ALL_REVIEWS"
export const RECEIVED_REVIEW = "RECEIVED_REVIEW"
export const RECEIVED_USER_REVIEWS = "RECEIVED_USER_REVIEWS"
export const REMOVED_REVIEW = "REMOVE_REVIEW"

export const receivedAllReviews = (reviews) => {
    return {
        type: RECEIVED_ALL_REVIEWS,
        reviews
    }
}

export const receivedReview = (review) => {
    return {
        type: RECEIVED_REVIEW,
        review,
    };
};

export const receiveUserReviews = (reviews) => {
    return {
        type: RECEIVED_USER_REVIEWS,
        reviews,
    };
};


export const deleteReview = (reviewId) => {
    return {
        type: REMOVED_REVIEW,
        reviewId,
    };
};

export const fetchReviews = (productId) => (dispatch) => {
    return ReviewsApiUtil.fetchAllProductReviews(productId).then(
        (result) => dispatch(receivedAllReviews(result))
      // errors => dispatch(receivedErrors(errors.response.JSON))
    );
}


export const fetchAllUserReviews = (userId) => (dispatch) => {
    return ReviewsApiUtil.fetchAllUserReviews(userId).then(
        (result) => dispatch(receivedAllReviews(result))
      // errors => dispatch(receiveErrors(errors.response.JSON))
    );
}


export const fetchReview = (reviewId) => (dispatch) => {
    return ReviewsApiUtil.fetchReview(reviewId)
        .then(
            result => dispatch(receivedReview(result)),
            // errors => dispatch(receiveErrors(errors.response.JSON))
        )
}


export const createReview = (productId, review) => dispatch => {
    return ReviewsApiUtil.createReview(productId, review)
        .then(
            review => (dispatch(receivedReview(review),
            // errors => dispatch(receiveErrors(errors.response.JSON))
            )
        ))
};


export const removeReview = (reviewId) => dispatch => {
    return ReviewsApiUtil.deleteReview(reviewId)
        .then(
            () => (dispatch(deleteReview(reviewId),
                // errors => dispatch(receiveErrors(errors.response.JSON))
            )
        ))
};
