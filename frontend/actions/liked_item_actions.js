import * as LikedItemApiUtil from '../util/liked_items_api_util';


export const RECEIVED_ALL_LIKED_ITEMS = "RECEIVED_ALL_LIKED_ITEMS";
export const RECEIVED_LIKED_ITEM = "RECEIVED_LIKED_ITEM";
export const REMOVED_LIKED_ITEM = "REMOVED_LIKED_ITEM";
export const RECEIVE_LIKED_ITEM_ERRORS = "RECEIVE_LIKED_ITEM_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const  receivedAllLikedItems = (likedItems) => {
    return {
        type: RECEIVED_ALL_LIKED_ITEMS ,
        likedItems
    }
}

export const receivedLikedItem = (likedItem) => {
    return {
      type: RECEIVED_LIKED_ITEM,
      likedItem,
    };
}

export const deleteLikedItem = (likedItemId) => {
    return {
        type: REMOVED_LIKED_ITEM,
        likedItemId
    };
}


export const receiveLikedItemErrors = (errors) => {
    return {
      type: RECEIVE_LIKED_ITEM_ERRORS,
      errors,
    };
}

export const clearErrors = () => {
    return {
      type: CLEAR_ERRORS,
    };
}


export const fetchAllLikedItems = (userId) => (dispatch) => { 
    return LikedItemApiUtil.fetchAllLikedItems(userId).then((result) =>
      dispatch(receivedAllLikedItems(result))
    );
}
export const createLikedItem = (liked_item) => (dispatch) => { 
    return LikedItemApiUtil.createLikedItem(liked_item).then(result=>dispatch(receivedLikedItem(result)),
            errors => dispatch(receiveLikedItemErrors(errors.responseJSON)))
}

export const removeLikedItem = (likedItemId) => (dispatch) => {
    return LikedItemApiUtil.deleteLikeditem(likedItemId).then( () => dispatch(deleteLikedItem(likedItemId)));
}
