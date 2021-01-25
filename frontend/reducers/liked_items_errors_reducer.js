import {
  RECEIVE_LIKED_ITEM_ERRORS,
  CLEAR_ERRORS,
} from "../actions/liked_item_actions";

const likedItemErrorReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_LIKED_ITEM_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return []
      default:
        return oldState;
    }
}

export default likedItemErrorReducer;