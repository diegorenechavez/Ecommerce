import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import likedItemErrorReducer from "./liked_items_errors_reducer"

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  likedItem: likedItemErrorReducer,
});

export default errorsReducer;
