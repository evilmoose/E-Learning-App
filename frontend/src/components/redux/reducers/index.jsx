import { combineReducers } from "redux";
import courses from "./courseReducer.jsx";
import authors from "./authorReducer.jsx"
import apiCallStatusReducer from "./apiStatusReducer.jsx";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallStatusReducer
});

export default rootReducer;