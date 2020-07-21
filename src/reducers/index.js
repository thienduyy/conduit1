import { combineReducers } from "redux";
//import { useReducer } from "react";
import tagReducer from "./tagReducer";
import articleReducer from "./articleReducer";

const rootReducer = combineReducers({
  tag: tagReducer,
  article: articleReducer,
});

export default rootReducer;
