import { combineReducers } from "redux";
//import { useReducer } from "react";
import tagReducer from "./tagReducer";
import articleReducer from "./articleReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  tag: tagReducer,
  article: articleReducer,
  login: loginReducer,
});

export default rootReducer;
