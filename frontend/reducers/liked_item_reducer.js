import {
  RECEIVED_ALL_LIKED_ITEMS,
  RECEIVED_LIKED_ITEM,
  REMOVED_LIKED_ITEM,
} from "../actions/liked_item_actions";


const LikedItemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVED_ALL_LIKED_ITEMS:
            
            return action.likedItems;
        case RECEIVED_LIKED_ITEM:
            // return Object.assign(newState, action.likedItem)
            newState[action.likedItem.id] = action.likedItem;
            return newState
        case REMOVED_LIKED_ITEM:
            delete newState[action.likedItemId];
            return newState;
        default:
            return oldState;
    }
}


export default LikedItemsReducer;