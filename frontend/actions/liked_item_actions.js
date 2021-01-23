import * as LikedItemApiUtil from '../util/liked_items_api_util'


export const RECEIVED_ALL_LIKED_ITEMS = "RECEIVED_ALL_LIKED_ITEMS"
export const RECEIVED_LIKED_ITEM = "RECEIVED_LIKED_ITEM"
export const REMOVED_LIKED_ITEM = "REMOVED_LIKED_ITEM"

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


export const fetchAllLikedItems = (userId) => (dispatch) => { 
    return LikedItemApiUtil.fetchAllLikedItems(userId).then((result) =>
      dispatch(receivedAllLikedItems(result))
    );
}
export const createLikedItem = (liked_item) => (dispatch) => { 
    return LikedItemApiUtil.createLikedItem(liked_item).then(result=>dispatch(receivedLikedItem(result)))
}

export const removeLikedItem = (likedItemId) => (dispatch) => {
    return LikedItemApiUtil.deleteLikeditem(likedItemId).then( () => dispatch(deleteLikedItem(likedItemId)));
}
